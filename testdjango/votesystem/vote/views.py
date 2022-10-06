from django.shortcuts import render, redirect

from django.http import HttpResponse

from .forms import CreateVoteForm
from .models import Vote

# Create your views here.


def home(request):
    votes = Vote.objects.all()
    context = {
        'votes': votes
    }
    return render(request, 'vote/home.html', context)


def create(request):
    if request.method == 'POST':
        form = CreateVoteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = CreateVoteForm()
    context = {
        'form': form
    }
    return render(request, 'vote/create.html', context)


def vote(request, vote_id):
    vote = Vote.objects.get(pk=vote_id)
    if request.method == 'POST':
        selected_option = request.POST['poll']
        if selected_option == 'option1':
            vote.option_one_count += 1
        elif selected_option == 'option2':
            vote.option_two_count += 1
        elif selected_option == 'option3':
            vote.option_three_count += 1
        else:
            return HttpResponse(400, 'Invalid form')
        vote.save()
        return redirect('results', vote.id)
    context = {
        'vote': vote
    }
    return render(request, 'vote/vote.html', context)


def results(request, vote_id):
    vote = Vote.objects.get(pk=vote_id)
    context = {
        'vote': vote
    }
    return render(request, 'vote/results.html', context)
