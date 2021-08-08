from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models import Count
# Create your models here.

class Student(models.Model):

    acadmic_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64)
    department = models.CharField(max_length=64)
    password =  models.CharField(max_length=64)
    def serialize(self):
        return {
            
            "name": self.name,
            "acadmic_id": self.acadmic_id,
            "department" : self.department,
           
           
        }
class Employee(models.Model):
    employee_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=64)
    level = models.IntegerField()
    def serialize(self):

        return {
             "employee_id": self.employee_id,
            "name": self.name,

        }

class Ticket(models.Model):
    #ticket_id = models.IntegerField(primary_key=True)
    student = models.ForeignKey("Student", on_delete=models.CASCADE,related_name="Student_Ticket")
    category = models.ForeignKey("Category", on_delete=models.CASCADE,related_name="Category_Ticket")
    priority = models.IntegerField()
    content = models.TextField(blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=False)
    def serialize(self):
        return {
            "id": self.id,
            "student": self.student.acadmic_id,
            "category": self.category.title,
            "content": self.content,
            "priority": self.priority,
            "timestamp": self.timestamp.strftime("%b %d %Y, %I:%M %p"),
            "status": self.status,
            
        }

    

class Category(models.Model):
    title = models.CharField(max_length=64)

class Reply(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    student = models.ForeignKey("Student", on_delete=models.CASCADE,related_name="student_Reply")
    employee = models.ForeignKey("Employee", on_delete=models.CASCADE,related_name="employee_Reply")
    ticket = models.ForeignKey("Ticket", on_delete=models.CASCADE,related_name="ticket_Reply")
    content = models.TextField(blank=False)
    def serialize(self):
        return {
            "id": self.id,
            "student": self.student.acadmic_id,
            "ticket": self.ticket.ticket_id,
            "content": self.content,
            "timestamp": self.timestamp.strftime("%b %d %Y, %I:%M %p"),
            
        }


class TicketManager(models.Model):
    status = models.BooleanField(default=False)
    ticket = models.ForeignKey("Ticket", on_delete=models.CASCADE,related_name="TicketManager")# make it one to one field
    current_emp = models.ForeignKey("Employee", on_delete=models.CASCADE,related_name="Current_emp_TicketManager")
    next_emp = models.ForeignKey("Employee", on_delete=models.CASCADE,related_name="To_emp_TicketManager")
    timestamp = models.DateTimeField(auto_now_add=True)
    def serialize(self):
        return {
            "id": self.id,
            "status": self.status,
            "ticket": self.ticket.ticket_id,
            "current_emp": self.current_emp.employee_id,
            "next_emp": self.next_emp.employee_id,
            "timestamp": self.timestamp.strftime("%b %d %Y, %I:%M %p"),
            
        }
   
class Permission(models.Model):
    content = models.TextField(blank=False)
    empolyee =  models.ManyToManyField("Employee", related_name="Permission")
    pass
#LOG
