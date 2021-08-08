# Generated by Django 3.0.9 on 2021-04-29 17:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('employee_id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=64)),
                ('level', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('acadmic_id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=64)),
                ('department', models.CharField(max_length=64)),
                ('password', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('priority', models.IntegerField()),
                ('content', models.TextField()),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('status', models.BooleanField(default=False)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Category_Ticket', to='ticketing_app.Category')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Student_Ticket', to='ticketing_app.Student')),
            ],
        ),
        migrations.CreateModel(
            name='TicketManager',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.BooleanField(default=False)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('current_emp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Current_emp_TicketManager', to='ticketing_app.Employee')),
                ('next_emp', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='To_emp_TicketManager', to='ticketing_app.Employee')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='TicketManager', to='ticketing_app.Ticket')),
            ],
        ),
        migrations.CreateModel(
            name='Reply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('content', models.TextField()),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='student_Reply', to='ticketing_app.Student')),
                ('ticket', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ticket_Reply', to='ticketing_app.Ticket')),
            ],
        ),
        migrations.CreateModel(
            name='Permission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('empolyee', models.ManyToManyField(related_name='Permission', to='ticketing_app.Employee')),
            ],
        ),
    ]
