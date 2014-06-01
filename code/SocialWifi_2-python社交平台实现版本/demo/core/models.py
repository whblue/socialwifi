from django.db import models
from django.core.exceptions import  ObjectDoesNotExist
import simplejson as json
from django.db import connection


class RUserFriend(models.Model):
    userid = models.ForeignKey('TbUser', db_column='userid',related_name='me_nowuser')
    friendid = models.ForeignKey('TbUser', db_column='friendid',related_name='my_friend')
    authorityname = models.CharField(max_length=45, blank=True)
    availableflow = models.IntegerField(blank=True, null=True)
    id = models.IntegerField(primary_key=True)
    friendname = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'r_user_friend'

class TbAccount(models.Model):
    userid = models.ForeignKey('TbUser', db_column='userid', blank=True, null=True)
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
    userid = models.ForeignKey('TbUser', db_column='userid', blank=True, null=True)
    datetime = models.DateTimeField(blank=True, null=True)
    name = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'tb_answer'


class TbComment(models.Model):
    id = models.IntegerField(primary_key=True)
    comment = models.CharField(max_length=200, blank=True)
    userid = models.ForeignKey('TbUser', db_column='userid', blank=True, null=True)
    datetime = models.DateTimeField(blank=True, null=True)
    name = models.CharField(max_length=45, blank=True)
    class Meta:
        managed = False
        db_table = 'tb_comment'
        

class TbFee(models.Model):
    id = models.IntegerField(primary_key=True)
    authorityname = models.CharField(max_length=45, blank=True)
    payflow = models.IntegerField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'tb_fee'



class TbFlow(models.Model):
    id = models.IntegerField(primary_key=True)
    routerid = models.ForeignKey('TbRoute', db_column='routerid', blank=True, null=True)
    userid = models.ForeignKey('TbUser', db_column='userid', blank=True, null=True)
    start_time = models.DateTimeField(blank=True, null=True)
    stop_time = models.DateTimeField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'tb_flow'

class TbRoute(models.Model):
    routerid = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True)
    flow = models.IntegerField(blank=True, null=True)
    owner = models.ForeignKey('TbUser', db_column='owner', blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'tb_route'
        

class TbUser(models.Model):
    password = models.CharField(max_length=45, blank=True)
    username = models.CharField(max_length=45, blank=True)
    userid = models.IntegerField(primary_key=True)
    class Meta:
        managed = False
        db_table = 'tb_user'


class TbUserinfo(models.Model):
    userid = models.ForeignKey(TbUser, db_column='userid', unique=True)
    username = models.CharField(max_length=45, blank=True)
    tag = models.CharField(max_length=45, blank=True)
    birth = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=45, blank=True)
    picture = models.CharField(max_length=1, blank=True)
    id = models.IntegerField(primary_key=True)
    class Meta:
        managed = False
        db_table = 'tb_userinfo'
