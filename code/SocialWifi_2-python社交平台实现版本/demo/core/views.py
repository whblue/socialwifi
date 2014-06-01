#coding=utf-8
from django.shortcuts import render_to_response
from django.http import HttpResponse,HttpResponseRedirect
from tools.helper import CallBack, ErrCallBack
from django.utils import simplejson
from core.tests import loginuser,router,routerlocation,comment,my_custom_sqlcomment,friendinfo


# Create your views here.
def index(request):
    return render_to_response('index.html')

def login(request):
    name = request.POST.get('username')
    pwd = request.POST.get('password')
    p=loginuser(name,pwd)
    if len(p)>1:
    some_data_to_dump = {
    'success': True,
    'msg': 'success',
    'username':p.username,
    }
    else:
    some_data_to_dump = {
    'success': False,
    'msg': 'Error',
    }
    data = simplejson.dumps(some_data_to_dump)
    return HttpResponse(data,mimetype='application/json')

def page_fee(request):
    d=request.POST.get('startDate')
    date=d[6:10]
    date+=d[0:2]
    date+=d[3:5]
    i=router(0,date)
    return HttpResponse(i,mimetype='application/json')
    
def page_wifi(request):
    j=routerlocation()
    return HttpResponse(j,mimetype='application/json')

def page_mode(request):
    k=comment(0)
    return HttpResponse(k,mimetype='application/json')
    
def publish(request):
    comment=request.POST.get('comment')
    userid=int(request.POST.get('userid'))
    name=request.POST.get('name')
    datetime=request.POST.get('datetime')
    t=my_custom_sqlcomment(comment,userid,datetime,name)
    return HttpResponse("success")
    
def friend(request):
    #a=request.POST.get('comment')
    a=0
    g=friendinfo(0)
    return HttpResponse(g,mimetype='application/json')
    
