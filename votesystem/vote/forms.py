from django.forms import ModelForm

from .models import Vote


class CreateVoteForm(ModelForm):
    class Meta:
        model = Vote
        fields = ['question', 'option_one', 'option_two', 'option_three']
