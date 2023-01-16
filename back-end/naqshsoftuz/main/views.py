from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.views.generic import View, ListView

from django.contrib import messages

from .models import BelievedCustomers, OurWorks, Contact
from .forms import ContactForm
# Create your views here.


def homePage(request):
    form = ContactForm()
    customers = BelievedCustomers.objects.all().order_by("-id")
    ourworks = OurWorks.objects.all().order_by("-id")
    context = {
        "customers": customers,
        "ourworks": ourworks,
        "form": form
    }
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
            print(form)
            messages.add_message(request, messages.SUCCESS, "Well done !")
            return redirect("/")
        else:
            messages.add_message(request, messages.ERROR,
                                 "Something went wrong !")
            return redirect("/")
    return render(request, "index.html", context)


class HomePageView(View):
    temlate_name = "index.html"
    model = OurWorks

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/')
        return render(request, self.template_name, {'form': form})

    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        context["believed_customers"] = BelievedCustomers.objects.all()
        return context
