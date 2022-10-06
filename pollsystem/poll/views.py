from django.shortcuts import get_object_or_404, redirect, render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.urls import reverse
from django.views import generic

from .models import Choice, Question

# Create your views here.

# classic
# def index(request):
#     question_list = Question.objects.all()
#     context = {'question_list': question_list}
#     return render(request, 'poll/index.html', context)


# def detail(request, question_id):
#     # try:
#     #     question = Question.objects.get(pk=question_id)
#     # except Question.DoesNotExist:
#     #     raise Http404('Question does not exist')
#     question = get_object_or_404(Question, pk=question_id)
#     context = {'question': question}
#     return render(request, 'poll/detail.html', context)


# def results(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     context = {'question': question}
#     return render(request, 'poll/results.html', context)


# def vote(request, question_id):
#     question = get_object_or_404(Question, pk=question_id)
#     try:
#         selected_choice = question.choice_set.get(pk=request.POST['choice'])
#     except (KeyError, Choice.DoesNotExist):
#         context = {
#             'question': question,
#             'error_message': 'You didn\'t select a choice'
#         }
#         return render(request, 'poll/detail.html', context)
#     else:
#         selected_choice.votes += 1
#         selected_choice.save()
#     # return redirect('poll:results', args=(question.id,))
#     return HttpResponseRedirect(reverse('poll:results', args=(question.id,)))

# generic
class IndexView(generic.ListView):
    template_name = 'poll/index.html'
    context_object_name = 'question_list'

    def get_queryset(self):
        return Question.objects.all()


class DetailView(generic.DetailView):
    model = Question
    template_name = 'poll/detail.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'poll/results.html'


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        context = {
            'question': question,
            'error_message': 'You didn\'t select a choice'
        }
        return render(request, 'poll/detail.html', context)
    else:
        selected_choice.votes += 1
        selected_choice.save()
    # return redirect('poll:results', args=(question.id,))
    return HttpResponseRedirect(reverse('poll:results', args=(question.id,)))
