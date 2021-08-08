# Generated by Django 3.0.9 on 2021-04-30 12:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ticketing_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='reply',
            name='employee',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='employee_Reply', to='ticketing_app.Employee'),
            preserve_default=False,
        ),
    ]