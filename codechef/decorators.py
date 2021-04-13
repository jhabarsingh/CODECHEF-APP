
from django.shortcuts import redirect, reverse
from django.http import HttpResponse, HttpResponseRedirect
import 

def user_exists(fun):
	def authorized(request, *args, **kwargs):

		if request.user.user_category.is_patient:
			return fun(request, *args, **kwargs)
		else:
			return HttpResponseRedirect(reverse("main:home"))

	return authorized