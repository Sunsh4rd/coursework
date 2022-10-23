import json
from flask import Flask, redirect, render_template, request, url_for
from flask_login import LoginManager, login_required, login_user, current_user
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from psycopg2 import IntegrityError
from werkzeug.security import generate_password_hash, check_password_hash
from base64 import b64decode
from pgp import read_key
# import pgp.signature_verification
from hashlib import sha256


app = Flask(__name__)
app.config.from_file('config.json', load=json.load)

db = SQLAlchemy(app)

login_manager = LoginManager(app)


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    email = db.Column(db.String(50), unique=True)
    role = db.Column(db.String(5), nullable=False)
    pswd = db.Column(db.String(500), nullable=False)

    def __init__(self, username, email, role, pswd):
        self.username = username
        self.email = email
        self.role = role
        self.pswd = pswd

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_user_by_email(cls, _email):
        return cls.query.filter_by(email=_email).first()

    def save_to_db(self):
        try:
            db.session.add(self)
            return db.session.commit()
        except IntegrityError:
            db.session.rollback()


class Question(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String, nullable=False)
    allowed_users = db.Column(db.Integer)
    options = db.Column(db.String)
    number_of_ballots = db.Column(db.Integer)
    initiator = db.Column(db.Integer)

    def __init__(self, text, allowed_users, options, number_of_ballots, initiator):
        self.text = text
        self.allowed_users = allowed_users
        self.options = options
        self.number_of_ballots = number_of_ballots
        self.initiator = initiator

    def save_to_db(self):
        try:
            db.session.add(self)
            return db.session.commit()
        except IntegrityError:
            db.session.rollback()

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_question_by_id(cls, _id):
        return cls.query.get(_id)


class Result(db.Model):
    __tablename__ = 'results'
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.String, nullable=False)
    answer_index = db.Column(db.Integer)
    ballot = db.Column(db.String)
    pubkey = db.Column(db.String)
    data = db.Column(db.JSON)

    def __init__(self, question_id, answer_index, ballot, pubkey, data):
        self.question_id = question_id
        self.answer_index = answer_index
        self.ballot = ballot
        self.pubkey = pubkey
        self.data = data

    def save_to_db(self):
        try:
            db.session.add(self)
            return db.session.commit()
        except IntegrityError:
            db.session.rollback()

    @classmethod
    def get_poll_results_by_poll_id(cls, _poll_id):
        return cls.query.with_entities(
            cls.answer_index,
            func.count(cls.answer_index)
        ).group_by(cls.answer_index).filter_by(question_id=_poll_id).all()

    # @classmethod
    # def get_data_results(cls):
        # return cls.query.all()[0].data


class Ballot(db.Model):
    __tablename__ = 'ballot'
    id = db.Column(db.Integer, primary_key=True)
    question_id = db.Column(db.String, nullable=False)
    signature = db.Column(db.String)
    public_key = db.Column(db.String)

    def __init__(self, id, question_id, signature, public_key):
        self.id = id
        self.question_id = question_id
        self.signature = signature
        self.public_key = public_key

    def save_to_db(self):
        try:
            db.session.add(self)
            return db.session.commit()
        except IntegrityError:
            db.session.rollback()


class UserLogin:

    def from_db(self, user_id):
        self.__user = User.query.get(user_id)
        return self

    def create(self, user):
        self.__user = user
        return self

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.__user.id

    def get_role(self):
        return self.__user.role


@login_manager.user_loader
def load_user(user_id):
    print('load user')
    print(user_id)
    return UserLogin().from_db(user_id)


@app.route('/')
def index():
    menu = [
        {'name': 'Войти в систему', 'url': 'signin'},
        {'name': 'Создать опрос', 'url': 'create'}
    ]
    print(current_user)
    if not current_user.is_authenticated:
        return redirect(url_for('signin'))
    # if current_user.get_role() == 'admin':
        # menu.append({'name': 'Создать опрос', 'url': 'create'})
    polls = [p for p in Question.get_all() if current_user.get_id()
             in p.allowed_users or current_user.get_id() == p.initiator]
    return render_template('index.html', title='Система голосования', menu=menu, polls=polls)


@app.route('/polls/<int:poll_id>', methods=['GET', 'POST'])
@login_required
def poll_details(poll_id):
    if not current_user.is_authenticated:
        return redirect(url_for('signin'))
    else:
        p = Question.get_question_by_id(poll_id)
        if current_user.get_id() == p.initiator:
            if request.method == 'POST':
                return redirect(url_for('results', poll_id=p.id))
            return render_template('details.html', poll=p, initiator=True)
        if not current_user.get_id() in p.allowed_users:
            return redirect(url_for('forbidden'))
        if request.method == 'POST':
            try:
                # id =
                r = Result(
                    question_id=p.id,
                    answer_index=request.form['opt'],
                    ballot=0,
                    pubkey=request.form['key'],
                    data=None
                )
                print(r)
                if r:
                    Result.save_to_db(r)
                    return redirect(url_for('index'))
            except Exception as e:
                db.session.rollback()
                print(f'result add error: {e}')
    return render_template('details.html', poll=p, initiator=False)


@app.route('/results/<int:poll_id>')
def results(poll_id):
    if not current_user.is_authenticated:
        return redirect(url_for('signin'))
    else:
        p = Question.get_question_by_id(poll_id)
        # if not current_user.get_id() in p.allowed_users:
        #     return redirect(url_for('forbidden'))
        r = dict(Result.get_poll_results_by_poll_id(poll_id))
    return render_template('results.html', poll=p, results=r)


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        u = User.get_user_by_email(request.form['email'])
        print(u.id)
        hpass = u.pswd
        print(hpass)
        print(request.form['pswd'])
        if u and check_password_hash(hpass, request.form['pswd']):
            user_login = UserLogin().create(u)
            login_user(user_login)
            return redirect(url_for('index'))
        else:
            print(f'meh... {request.form}')
    return render_template('signin.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        if request.form['name'] and request.form['email'] and request.form['pswd'] == request.form['pswd2']:
            try:
                phash = generate_password_hash(request.form['pswd'])
                print(request.form)
                u = User(
                    username=request.form['name'],
                    email=request.form['email'],
                    role='user',
                    pswd=phash
                )
                if u:
                    User.save_to_db(u)
                    return redirect(url_for('signin'))
            except Exception as e:
                db.session.rollback()
                print(f'signup error: {e}')
    return render_template('signup.html')


@app.route('/create', methods=['GET', 'POST'])
@login_required
def create_poll():
    # if not current_user.get_role() == 'admin':
    #     return redirect(url_for('forbidden'))
    users = User.query.filter_by(role='user').all()
    if request.method == 'POST':
        signature = request.form['signature']

        # print(pgp.signature_verification.check_signature(request.form['key'], signature, sha256('Hello'.encode())))

        if request.form['question'] and request.form['opt'] and request.form['user']:
            try:
                q = Question(
                    text=request.form['question'],
                    options=request.form.getlist('opt'),
                    allowed_users=[int(u)
                                   for u in request.form.getlist('user')],
                    number_of_ballots=len(request.form.getlist('user')),
                    initiator=current_user.get_id()
                )
                print(q)
                if q:
                    Question.save_to_db(q)
                    return redirect(url_for('index'))
            except Exception as e:
                db.session.rollback()
                print(f'question add error: {e}')
    return render_template('create.html', users=users)


@app.route('/forbidden')
def forbidden():
    return render_template('forbidden.html')


@app.route('/ballot', methods=['GET', 'POST'])
def ballot():
    if request.method == 'POST':
        print(request.form['key'])
        print(read_key(request.form['key']))
        # print(''.join(request.form['key'].split()[5:-5]))
    return render_template('ballot.html')


if __name__ == '__main__':
    app.run(debug=True)
