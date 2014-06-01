#-*- coding: utf-8 -*-
from django.db import models
from django.core.exceptions import  ObjectDoesNotExist
import simplejson as json
from django.db import connection
from django.forms import  ModelForm
from django.forms import ModelForm
from django import forms



class Message(models.Model):
    sendname = models.CharField(max_length=45, blank=True)
    receive = models.CharField(max_length=45, blank=True)
    content = models.CharField(max_length=100, blank=True)
    satus = models.IntegerField(blank=True, null=True)
    datetime = models.DateTimeField(blank=True, null=True)
    id = models.IntegerField(primary_key=True)
    class Meta:
        managed = False
        db_table = 'message'

class RUserFriend(models.Model):
    authorityname = models.CharField(max_length=45, blank=True)
    availableflow = models.IntegerField(blank=True, null=True)
    friendname = models.CharField(max_length=45)
    ownername = models.CharField(max_length=45)
    class Meta:
        managed = False
        db_table = 'r_user_friend'

class Status(models.Model):
    username = models.CharField(max_length=45, blank=True)
    satus = models.IntegerField(blank=True, null=True)
    datetime = models.DateTimeField(blank=True, null=True)
    id = models.IntegerField(primary_key=True)
    class Meta:
        managed = False
        db_table = 'status'

class TbAccount(models.Model):
    username = models.CharField(max_length=45, blank=True)
    jieyuflow = models.IntegerField(blank=True, null=True)
    userdflow = models.IntegerField(blank=True, null=True)
    lastmonthflow = models.IntegerField(blank=True, null=True)
    getflow = models.IntegerField(blank=True, null=True)
    month = models.DateField(blank=True, null=True)
    id = models.IntegerField(primary_key=True)
    class Meta:
        managed = False
        db_table = 'tb_account'

class TbAnswer(models.Model):
    answerid = models.IntegerField(primary_key=True)
    commentid = models.ForeignKey('TbComment', db_column='commentid', blank=True, null=True)
    replyanswerid = models.ForeignKey('self', db_column='replyanswerid', blank=True, null=True)
    content = models.CharField(max_length=200, blank=True)
    uername = models.CharField(max_length=45, blank=True)
    datetime = models.DateTimeField(blank=True, null=True)
    replyname = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'tb_answer'

class TbComment(models.Model):
    commentid = models.IntegerField(primary_key=True)
    comment = models.CharField(max_length=200, blank=True)
    datetime = models.DateTimeField(blank=True, null=True)
    username = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'tb_comment'

class TbFee(models.Model):
    feeid = models.IntegerField(primary_key=True)
    authorityname = models.CharField(max_length=45, blank=True)
    payflow = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'tb_fee'

class TbFlow(models.Model):
    flowid = models.IntegerField(primary_key=True)
    routerid = models.IntegerField(blank=True, null=True)
    username = models.CharField(max_length=45, blank=True)
    start_time = models.DateTimeField(blank=True, null=True)
    stop_time = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'tb_flow'

class TbRoute(models.Model):
    routerid = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True)
    flow = models.IntegerField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    ip = models.CharField(max_length=40, blank=True)
    owner = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'tb_route'

class TbUser(models.Model):
    userid = models.IntegerField(primary_key=True)
    password = models.CharField(max_length=45, blank=True)
    username = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'tb_user'


class TbUserinfo(models.Model):
    userid = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=45, blank=True)
    tag = models.CharField(max_length=45, blank=True)
    birth = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=45, blank=True)
    mypassword = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'tb_userinfo'

        '''
username='clare'
tag='music'
birth='20140317'
location='suzhou'
picture=load_file('a.jpg')
cursor=connection.cursor()
cursor.execute("insert into tb_userinfo values(null,'%s','%s','%s','%s','%s','%d')"%(username,tag,birth,location,picture,id))
'''
        
