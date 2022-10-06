from django.shortcuts import render, redirect
from .forms import SignUpForm

# Create your views here.


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/polls')
    else:
        form = SignUpForm()
    context = {'form': form}
    return render(request, 'usermanagement/signup.html', context)