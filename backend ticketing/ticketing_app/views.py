from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.contrib.auth.decorators import login_required
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator
from .models import *
import hashlib
@csrf_exempt
def login_view(request):
    if request.method == "POST":

        
        data = json.loads(request.body)
        
        if data.get("acadmic_id") is not None:
            ID = data["acadmic_id"]
            password = data["password"]
            encrypted = hashlib.md5(password.encode()) 
            p = encrypted.hexdigest()
            print(ID,p)
        
      
        try:
            try:
                #emp and student fix
                user = Student.objects.get(acadmic_id=ID)
            except Student.DoesNotExist:
                return JsonResponse({"error": " Invalid Credentials"}, status=400)
           
            if(user.password != p):
                return JsonResponse({"error": " Invalid Credentials"}, status=400)

            return JsonResponse(user.serialize())
                           
                   
        except:
            
            return JsonResponse({ "error": " Server error"}, status=500)
        
        
        
    


@csrf_exempt
def register(request):
    
    if request.method == "POST":
        
        data = json.loads(request.body)
        acadmic_id = data["acadmic_id"]
        password = data["password"]
        # Ensure password matches confirmation
        encrypted = hashlib.md5(password.encode()) 
        p = encrypted.hexdigest()
       
        try:
            if(Student.objects.filter(acadmic_id=acadmic_id).values_list('acadmic_id', flat=True)):
                return JsonResponse({"error": "username taken"}, status=400)
            else:
                b = Student(acadmic_id=acadmic_id, password=p)
                b.save()  
        except IntegrityError as e:
            print(Student.objects.all())
            return JsonResponse({"error": "username taken"}, status=400)
        print(Student.objects.all())
        return  JsonResponse(b.serialize())
     


@csrf_exempt
#@login_required
def submit_ticket(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)
    data = json.loads(request.body)
    content = data["content"]
    #category = data["category"]
    priority = data["priority"]
    student_id = data["student_id"]
    # and more
    student = Student.objects.get(acadmic_id = student_id)
    print("hi",student)
    ticket = Ticket(
            student=student,
            #category=category,
            priority=priority,
            content=content,
        )
    ticket.save()
    #ticket assignment
    #super_employee = Employee.objects.get(permission = 3)
    
    #ticket_manager = TicketManager(status=False,ticket=ticket,)


@csrf_exempt
@login_required
def view_ticket(request):
    if request.method != "GET":
        return JsonResponse({"error": "GET request required."}, status=400)

    tickets = Ticket.objects.filter(student = request.user)
    tickets = tickets.order_by("-timestamp").all()
    
    return JsonResponse([ticket.serialize() for ticket in tickets], safe=False)

@csrf_exempt
@login_required
def submit_reply(request):#,ticket_id):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)
    data = json.loads(request.body)
    ticket_id = data["ticket_id"]
    content = data["content"]
    #user student or emp?
    ID = data["user_id"]
    private = data["is_private"]
    user = request.user
    ticket = Ticket.objects.get(ticket_id=ticket_id)
    
    reply = Reply(content=content,student=user,ticket=ticket)        
    reply.save()

@csrf_exempt
@login_required
def get_comment(request):

    if request.method != "GET":
        return JsonResponse({"error": "GET request required."}, status=400)
    data = json.loads(request.body)
    ticket_id = data["ticket_id"]
    try:
        ticket = Ticket.objects.get(ticket_id=ticket_id)
    except Ticket.DoesNotExist:
        return JsonResponse({"error": " Ticket doesnt exist"}, status=400)
    replys = ticket.ticket_Reply.all()
    replys = replys.order_by("-timestamp").all()
   
    return JsonResponse([reply.serialize() for reply in replys], safe=False)

def assign_ticket(request):
    # if request.method != "POST":
    #     return JsonResponse({"error": "POST request required."}, status=400)
    # data = json.loads(request.body)
    # ticket_id = data["ticket_id"]
    
    pass
def search(request):
    pass

@csrf_exempt
@login_required
def transfer_ticket(request):
    if request.method != "PUT":
        data = json.loads(request.body)

        from_emp = request.user

        ticket_id = data["ticket_id"]
        employee_id = data["employee_id"]
        ticket=Ticket.objects.filter(ticket_id = ticket_id)
        to_emp=Employee.objects.filter(employee_id = employee_id)

        ticket_manager=TicketManager.objects.filter(ticket = ticket)#from_emp = from_emp,

        ticket_manager.from_emp = from_emp
        ticket_manager.to_emp = to_emp
        ticket_manager.save()
