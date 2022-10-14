from django.contrib import admin

from .models import AllowedPollUser, Choice, Question

# Register your models here.


# class ChoiceInline(admin.TabularInline):
#     model = Choice
#     extra = 2


# class QuestionAdmin(admin.ModelAdmin):
#     fieldsets = [
#         (None, {'fields': ['question_text']}),
#     ]
#     inlines = [ChoiceInline]


admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(AllowedPollUser)
# admin.site.register(Question, QuestionAdmin)
