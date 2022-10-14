from flask import Flask, render_template, request, url_for

app = Flask(__name__)

menu = [
    # {'name': 'Опросы', 'url': 'polls'},
    {'name': 'Войти в систему', 'url': 'signin'},
    # {'name': 'Contact', 'url': 'contact'}
]


@app.route('/')
def index():
    # print(url_for('index'))
    return render_template('index.html', title='Система голосования', menu=menu)


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        print(request.form)
    return render_template('signin.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        print(request.form)
    return render_template('signup.html')

# @app.route('/about')
# def about():
#     print(url_for('about'))
#     return render_template('about.html', title='About page', menu=menu)


# @app.route('/contact', methods=['POST', 'GET'])
# def contact():
#     if request.method == 'POST':
#         print(request.form)
#     return render_template('contact.html', title='Обратная свзяь', menu=menu)


if __name__ == '__main__':
    app.run(debug=True)
