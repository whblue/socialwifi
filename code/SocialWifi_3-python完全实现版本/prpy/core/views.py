#coding=utf-8
from django.shortcuts import render_to_response
from django.http import HttpResponse
import simplejson
import datetime
from core.tests import loginuser,ifexistusername,router,routerlocation,comment,my_custom_sqlcomment,friendinfo,registeruser,myinfo,updateinfo,sametag,insertanswer,answer,countmode,countfan,countbefan,mymode,addfriend,insertmessage,checkmessagecount,checkmessage,updatemessage,getowner,iffriend,getfee,insertstatus,updatestatus,insertaccount,updateaccount,updatefriendteam,delete,fansinfo,routerinfo,getsameroute


# Create your views here.
def register(request,num):
    return render_to_response('login.html')

def registerusers(request):
    name = request.POST.get('username')
    pwd = request.POST.get('password')
    flag=ifexistusername(name)
    print(flag)
    if flag==1:
        some_data_to_dump = {
                             'success': False,
                             'msg': '用户名已存在'
                             }
    else:
        registeruser(name,pwd)
        addfriend(name,name)
        insertaccount(name, 0, 0, 0,datetime.datetime.now().strftime('%Y-%m-%d'))
        some_data_to_dump = {
                             'success': True,
                             'msg': '已经成功注册'
                             }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def index(request):
    return render_to_response('index.html')

def login(request):
    name = request.POST.get('username')
    pwd = request.POST.get('password')
    p=loginuser(name,pwd)
    if len(p)>0:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'username':p['username'],
                             }
    else:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def page_fee(request):
    name = request.POST.get('username')
    d=request.POST.get('startDate')
    date=d[6:10]
    date+='-'
    date+=d[0:2]
    date+='-'
    date+=d[3:5]
    print(date)
    print(date)
    i=router(name,date)
    return HttpResponse(i,mimetype='application/json')
    
def page_wifi(request):
    j=routerlocation()
    return HttpResponse(j,mimetype='application/json')

def page_mode(request):
    nam=request.POST.get('username')
    k=comment(nam)
    return HttpResponse(k,mimetype='application/json')
    
def publish(request):
    comment=request.POST.get('comment')
    name=request.POST.get('name')
    datetime=request.POST.get('datetime')
    t=my_custom_sqlcomment(comment,datetime,name)
    if t>=0:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'commmentid':t
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error'
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

    
def friend(request):
    a=request.POST.get('username')
    g=friendinfo(a)    
    return HttpResponse(g,mimetype='application/json')

def fans(request):
    a=request.POST.get('username')
    g=fansinfo(a)    
    return HttpResponse(g,mimetype='application/json')

    
def getinfo(request):
    name = request.POST.get('username')
    d=myinfo(name)
    return HttpResponse(d,mimetype='application/json')

def updateinformation(request):
    name = request.POST.get('username')
    password=request.POST.get('password')
    tag=request.POST.get('tag')
    birth=request.POST.get('birth')
    date=birth[6:10]
    date+=birth[0:2]
    date+=birth[3:5]
    location=request.POST.get('location')
    d=updateinfo(name,tag,date,location,password)
    print(d)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')


def getsamepeople(request):
    name = request.POST.get('username')
    tag=request.POST.get('tag')
    d=sametag(tag, name)
    return HttpResponse(d,mimetype='application/json')


def insertanswers(request):    
    commentid = int(request.POST.get('commentid'));
    content= request.POST.get('content');
    username= request.POST.get('username');
    d=request.POST.get('date')
    replyname= request.POST.get('replyname');
    d=insertanswer(commentid, 1, content, username, d, replyname)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def getanswers(request):
    commentid = int(request.POST.get('commentid'));
    i=answer(commentid)
    return HttpResponse(i,mimetype='application/json')

def countmodes(request):
    username = request.POST.get('username');
    i=countmode(username)
    some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'count':i
                             }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def countfans(request):
    username = request.POST.get('username');
    i=countfan(username)
    some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'count':i
                             }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')


def countbefans(request):
    username = request.POST.get('username');
    i=countbefan(username)
    some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'count':i
                             }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def page_whose(request):
    nam=request.POST.get('username')
    k=mymode(nam)
    return HttpResponse(k,mimetype='application/json')

def add_friend(request):
    nam=request.POST.get('username')
    name=request.POST.get('friendname')
    date=request.POST.get('datetime')
    content=request.POST.get('content')
    addfriend(nam,name)   
    d=insertmessage(nam, name, content, 0, date)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def check_count(request):
    nam=request.POST.get('username')
    i=checkmessagecount(nam)
    some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'count':i
                             }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def get_message(request):
    name = request.POST.get('username')
    d=checkmessage(name,0,"")
    return HttpResponse(d,mimetype='application/json')

def update_message(request):
    name = int(request.POST.get('id'))
    d=updatemessage(name)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def get_fee(request):
    username=request.POST.get('username')
    routeid=int(request.POST.get('routeid'))
    d=getowner(routeid)
    print(d)
    t=iffriend(d,username,0)
    print(t)
    if t=='null':
        tu=iffriend(username,d,1)
        if tu=='null':       
            some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'content':'您未添加对方为好友，需要向对方发送好友消息，对方同意后，默认10元/分钟的资费',
                             "owner":d,  
                             "count":10                           
                                }
        else:
            print tu        
            u=getfee(tu)
            if u==0:
                some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'content':'无需付费安心使用',
                             "owner":d,
                             "count":u
                         }
            else:
                some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'content':'使用对方路由器需要支付'+str(u)+'元/每分钟的流量',
                             "owner":d,
                             "count":u
                             }
    else:
        u=getfee(t)
        if u==0:
            some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'content':'无需付费安心使用',
                             "owner":d,
                             "count":u
                         }
        else:
            some_data_to_dump = {
                             'success': True,
                             'msg': 'Success',
                             'content':'使用对方路由器需要支付'+str(u)+'元/每分钟的流量',
                             "owner":d,
                             "count":u
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')


def insert_status(request):
    username = request.POST.get('username')
    status = request.POST.get('status')
    datetime = request.POST.get('datetime')
    routeid = int(request.POST.get('routeid'))
    d=insertstatus(username, status, datetime,routeid)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def update_status(request):
    username = request.POST.get('username')
    status = int(request.POST.get('status'))
    routeid = int(request.POST.get('routeid'))
    datetime = request.POST.get('datetime')
    d=updatestatus(username,status,datetime, routeid)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def insert_message(request):
    username = request.POST.get('username')
    receivename = request.POST.get('receivename')
    content = request.POST.get('content')
    datetime = request.POST.get('datetime')
    d=insertmessage(username,receivename,content,0,datetime)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def update_account(request):
    username = request.POST.get('username')
    usedflow = int(request.POST.get('usedflow'))
    getflow = int(request.POST.get('getflow'))
    date = datetime.datetime.now().strftime('%Y-%m-%d')
    d=updateaccount(username,usedflow,getflow,date)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def update_friend(request):
    username = request.POST.get('username')
    friendname = request.POST.get('friendname')
    authority = request.POST.get('authority')
    flag = int(request.POST.get('flag'))
    d=updatefriendteam(username,friendname,authority,flag)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def insert_important_message(request):
    username = request.POST.get('username')
    receivename = request.POST.get('receivename')
    content = request.POST.get('content')
    datetime = request.POST.get('datetime')
    d=insertmessage(username,receivename,content,2,datetime)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')


def check_important_message(request):
    name = request.POST.get('username')
    ownername = request.POST.get('ownername')
    d=checkmessage(name,2,ownername)
    return HttpResponse(d,mimetype='application/json')

def delete_friend(request):
    name = request.POST.get('username')
    friendname = request.POST.get('friendname')
    flag = request.POST.get('flag')
    d=delete(name,friendname,flag)
    if d==None:
        some_data_to_dump = {
                             'success': True,
                             'msg': 'Success'
                             }
    else:
        some_data_to_dump = {
                             'success': False,
                             'msg': 'Error',
                         }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def all_route(request):
    data=routerlocation();
    return HttpResponse(data,mimetype='application/json')

def own_route(request):
    name = request.POST.get('username')
    data=routerinfo(name);
    return HttpResponse(data,mimetype='application/json')

def get_same_route(request):
    routeid = int(request.POST.get('routeid'))
    name = request.POST.get('username')
    data=getsameroute(routeid,name)
    return HttpResponse(data,mimetype='application/json')
