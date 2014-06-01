# -*- coding: utf-8 -*-
from core.models import *
import simplejson as json
from django.db import connection

'''
判断用户名是否已经存在,存在就返回1 using
'''
def ifexistusername(username):
    cursor = connection.cursor()
    cursor.execute("select * from tb_user where username='%s' " % (username))
    e = int(cursor.rowcount)
    if e == 0:
        return 0
    else:
        return 1

'''
 using
''' 
def registeruser(username, password):
    cursor = connection.cursor()
    cursor.execute("insert into tb_user values(null,'%s','%s')" % (password, username))
    row = cursor.fetchone()
    cursor1 = connection.cursor()
    cursor1.execute("insert into tb_userinfo values(null,'%s',null,null,null,'%s')" % (username, password))
    row1 = cursor1.fetchone()
    return row1
    
'''
using
'''
def  router(username, date):
    cursor = connection.cursor()
    cursor.execute("select * from tb_account where username='%s' and month='%s'" % (username, date))
    e = int(cursor.rowcount)
    t = []
    print(e)
    print("ewfwef")
    if e == 0:
        d = {
           'lastmonthflow':0,
           'usedflow' :0,
           'remainflow' :0,
           'getflow' :0
           }
        encoded = json.dumps(d)
        print(encoded)
    else:
        p = cursor.fetchall()
        for i in p:
          d = {
             'lastmonthflow':i[3],
             'usedflow' :i[2],
             'remainflow' :i[1],
             'getflow' :i[4]
           }
        encoded = json.dumps(d)
        print("fafdafa")
        print(encoded)
    return encoded


'''
using
'''
def  routerlocation():
    p = TbRoute.objects.all()
    e = p.count()
    print e
    print "route"
    t = []
    if e == 0:
        d = {
           'longitude': 'null',
           'latitude': 'null',
           'owner':'null'
           }
        t.append(d)
    else: 
        for i in range(e):
           d = {
            'longitude': p[i].longitude,
            'latitude': p[i].latitude,
            'owner':p[i].owner
            }
           t.append(d)
    encoded = json.dumps(t)
    print(encoded)
    return(encoded)
'''
using
'''
def loginuser(username, password):
    try:
        p = TbUser.objects.get(username=username, password=password)
    except TbUser.DoesNotExist:
        du = {}
    else:
        du = {'username':p.username, 'userid':p.userid}
    return du


'''
using
'''
def comment(nowuser):
    cursor = connection.cursor()
    print(nowuser)
    cursor.execute("select friendname from r_user_friend where ownername ='%s'" % (nowuser))
    e = int(cursor.rowcount)
    print(e)
    if e == 0:
        d = {
                'commentid':'null',
                 'name':'null',
                 'datetime':'null',
                 'comment':'null'
          #  'datetime':p[i][3]
            }
        encoded = json.dumps(d)
    else:
        friendname = [desc[0] for desc in cursor.fetchall()]
        n = friendname.__len__()
        t = []
        for j in range(n):
            cursor = connection.cursor()
            cursor.execute("select * from tb_comment where username ='%s' order by datetime asc" % (friendname[j]))
            mm = int(cursor.rowcount)
            print(mm);
            print("mm")
            if mm == 0:
                d = {
                'commentid':'null',
                 'name':'null',
                 'datetime':'null',
                 'comment':'null'
          #  'datetime':p[i][3]
                 }
                t.append(d)
            else:
                p = cursor.fetchall()
                for i in p:
                  d = {
                        'commentid':i[0],
                         'name':i[3],
                         'datetime':i[2].strftime("%Y-%m-%d %H:%M:%S"),
                         'comment':i[1]
                  #  'datetime':p[i][3]
                        }
                  t.append(d)
        encoded = json.dumps(t)
    print(encoded)
    return(encoded)
 
 
 

'''
using
'''
def my_custom_sqlcomment(comment, datetime, username):
    cursor = connection.cursor()
    cursor.execute("insert into tb_comment values(null,'%s','%s','%s')" % (comment, datetime, username))
    row = int(cursor.rowcount)
    print(row)
    print("row")
    return row



'''
调用函数comment(nowuser)，解封装encoded，可以得到commentid，然后调用下面的函数得到回复，每次做出判断，如果replyanswerid为null，则为主动发出的评论，如果不为空，则是回复别人的评论
'''
def answer(commentid):
    cursor = connection.cursor()
    cursor.execute('select * from tb_answer where commentid=%d' % (commentid))
    e = int(cursor.rowcount)
    print(e)
    t = []
    if e == 0:
        d = {
            'answerid':'null',
            'commentid':'null',
            'replyanswerid':'null',
            'username':'null',
            'replyname':'null',
            'content':'null',
            'datetime':'null'
            }
        t.append(d)
    else:
        p = cursor.fetchall()
        for j in p:
             d = {
                'answerid':j[0],
                'commentid':j[1],
                'replyanswerid':j[2],
                'username':j[4],
                'replyname':j[6],
                'content':j[3],
                'datetime':j[5].strftime("%Y-%m-%d %H:%M:%S")
                }
             t.append(d)
    encoded = json.dumps(t)
    print(encoded)
    return encoded

    
'''
·��������Ϣ���������userid=0
'''
'''
查看自己或某一特定人的路由信息
'''
def routerinfo(nowuser):
    cursor = connection.cursor()
    cursor.execute("select * from tb_route where owner='%s'" % (nowuser))
    e = int(cursor.rowcount)
    t = []
    if e == 0:
        d = {
          
             'routerid':'null',
             'name':'null',
             'flow':'null',
             'longitude':'null',
             'latitude':'null',
             'IP':'null',
             'owner':'null'
         }
        t
    else:
        p = cursor.fetchall()
        for i in p:
            d = {
               'routerid':i[0],
               'name':i[1],
               'flow':i[2],
               'owner':i[6],
               'longitude':i[3],
               'latitude':i[4],
               'IP':i[5]
              }
            t.append(d)
    encoded = json.dumps(t)
    return(encoded)


'''
自己的所有好友using
'''
def friendinfo(nowuser):
    cursor = connection.cursor()
    cursor.execute("select * from r_user_friend where ownername='%s'" % (nowuser))
    e = int(cursor.rowcount)
    print(e)
    t = []
    if e == 0:
        d = {
           
           'friendname':'null',
           'authorityname':'null',
           'availableflow':'null',
           'ownername':'null'
         }
        t.append(d)
    else:
        p = cursor.fetchall()
        for i in p:
            d = {
               
               'friendname':i[2],
               'authorityname':i[0],
               'availableflow':i[1],
               'ownername':i[3]
             }
            t.append(d)
    encoded = json.dumps(t)
    print(encoded)
    return encoded

def fansinfo(nowuser):
    cursor = connection.cursor()
    cursor.execute("select * from r_user_friend where friendname='%s'" % (nowuser))
    e = int(cursor.rowcount)
    print(e)
    t = []
    if e == 0:
        d = {
           
           'friendname':'null',
           'authorityname':'null',
           'availableflow':'null',
           'ownername':'null',
           'ownerauthority':'null'
         }
        t.append(d)
    else:
        p = cursor.fetchall()
        for i in p:
            d = {
               
               'friendname':i[2],
               'authorityname':i[0],
               'availableflow':i[1],
               'ownername':i[3],
               'ownerauthority':i[4]
             }
            t.append(d)
    encoded = json.dumps(t)
    print(encoded)
    return encoded


# �������п���·�����Ĳ���
'''
当前所有的路由详细信息
'''
def returnallrouter():
    cursor = connection.cursor()
    cursor.execute('select * from tb_route ')
    e = int(cursor.rowcount)
    t = []
    if e == 0:
        d = {
           'routerid':'null',
           'name':'null',
           'flow':'null',
           'owner':'null',
           'longitude':'null',
           'latitude':'null',
           'IP':'null'
          }
        t.append(d)
    else:
        p = cursor.fetchall()
        for i in p:
            d = {
               'routerid':i[0],
               'name':i[1],
               'flow':i[2],
               'owner':i[6],
               'longitude':i[3],
               'latitude':i[4],
               'IP':i[5]
              }
            t.append(d)
    encoded = json.dumps(t)
    return(encoded)
 
 
# ����ݿ��в����
'''
格式如下：     A：今天出去玩                                         （commentid，标识每一条状态，假如为1）
B回复A的状态           B：好啊                                          （answerid，标识每一条回复，假如为1）  （content是所有回复的内容，在这里为“好啊”
              C回复B：你们去哪               （c回复B，对应的replyanswerid为B的answerid 1，自身的answerid为系统自动生成的id比如2）
datetime为当前时间，userid，name为用户id，名称
'''
def insertanswer(commentid, replyanswerid, content, username, datetime, replyname):
    cursor = connection.cursor()
    cursor.execute("insert into tb_answer values(null,'%d','%d','%s','%s','%s','%s')" % (commentid, replyanswerid, content, username, datetime, replyname))
    row = cursor.fetchone()
    return row
 
 
def checkstatus(nowuser):
    cursor = connection.cursor()
    cursor.execute("select * from status where username='%s'" % (nowuser))
    e = int(cursor.rowcount)
    t = []
    if e == 0:
        d = {
           'username':'null',
           'status':'null',
           'datetime':'null'
          }
        t.append(d)
    else:
        p = cursor.fetchall()
        for i in p:
            d = {
                'username':i[0],
                'status':i[1],
                'datetime':i[2].strftime("%Y-%m-%d %H:%M:%S")
              }
            t.append(d)
    encoded = json.dumps(t)
    return(encoded)

def insertstatus(nowuser, status, datetime,routeid):
    cursor = connection.cursor()
    cursor.execute("insert into status values('%s','%s','%s',null,'%d')" % (nowuser, status, datetime,routeid))
    row = cursor.fetchone()
    return row

def updatestatus(nowuser,status,datetime,routeid):
    cursor = connection.cursor()
    cursor.execute("update status set routeid='%d',satus='%d',datetime='%s' where username='%s'" % (routeid,status,datetime,nowuser))
    row = cursor.fetchone()
    return row

def checkmessage(username,flag,send):
    cursor=connection.cursor()
    if flag==2:
        cursor.execute("select * from message where receive='%s' and satus='%d' and sendname='%s' order by datetime desc" %(username,flag,send))
    else:
        cursor.execute("select * from message where receive='%s' and satus='%d' order by datetime desc" %(username,flag))
    e=int(cursor.rowcount)
    t=[]
    if e==0:
        d={
           'sendname':'null',
           'receivename':'null',
           'content':'null',
           'status':'null',
           'datetime':'null',
           'id':'null'
          }
        t.append(d)
    else:
        p=cursor.fetchall()
        for i in p:
            d={
                'sendname':i[0],
                'receivename':i[1],
                'content':i[2],
                'status':i[3],
                'datetime':i[4].strftime("%Y-%m-%d %H:%M:%S"),
                'id':i[5]
              }
            t.append(d)
    encoded=json.dumps(t)
    return(encoded)
 
 
def insertmessage(sendname, receivename, content, status, datetime):
    cursor = connection.cursor()
    cursor.execute("insert into message values('%s','%s','%s','%d','%s',null)" % (sendname, receivename, content, status, datetime))
    row = cursor.fetchone()
    return row
     
'''
 class ImageUploadForm(ModelForm):
    """Image upload form."""
    class Meta:
        model = TbUserinfo #通过上面的User Model生成表单
        widgets = {
            'password':forms.PasswordInput(),#将password字段的input type设为password
        }
 '''



'''
using
'''
def updateinfo(username, tag, birth, location, password):
    cursor = connection.cursor()
    cursor.execute("update tb_userinfo set tag = '%s' , birth='%s' ,location= '%s' ,mypassword='%s' where username = '%s'" % (tag, birth, location, password, username))
    row = cursor.fetchone()
    return row


'''
using
'''
def myinfo(username):
    cursor = connection.cursor()
    cursor.execute("select * from tb_userinfo where username='%s' " % (username))
    p = cursor.fetchall()
    for i in p:
        if i[3] == None:
            d = {
            'username':i[1],
            'tag':"null",
            'birth':"null",
            'location':"null",
            'mypassword':i[5]
            }
        else:
            d = {
               'username':i[1],
               'tag':i[2],
               'birth':i[3].strftime("%Y-%m-%d %H:%M:%S"),
               'location':i[4],
               'mypassword':i[5]
               }
        
    encoded = json.dumps(d)
    return(encoded)

'''
返回相同标签
'''
def sametag(mytag, username):
    cursor = connection.cursor()
    cursor.execute("select * from tb_userinfo where tag='%s' and username<>'%s'  " % (mytag, username))
    e = int(cursor.rowcount)
    t = []
    if e == 0:
        d = {
           'username':'null',
           'tag':'null',

           'mypassword':'null'
          }
        t.append(d)
    else:
        p = cursor.fetchall()
        for i in p:
            if iffriend(username,i[1],0)=="null":
                d = {
                    'username':i[1],
                    'tag':i[2],
                    'mypassword':i[5]
                  }
                t.append(d)
    encoded = json.dumps(t)
    return(encoded)

def countfan(username):
    cursor=connection.cursor()
    cursor.execute("select count(ownername) as count from r_user_friend where friendname ='%s' " %(username) )
    e=int(cursor.rowcount)
    p=cursor.fetchall()
    print(p[0][0])
    return(p[0][0])


def countbefan(username):
    cursor=connection.cursor()
    cursor.execute("select count(friendname) as count from r_user_friend where ownername ='%s' " %(username) )
    e=int(cursor.rowcount)
    p=cursor.fetchall()
    print(p[0][0])
    return(p[0][0])
    
'''
自己的微博总数
'''    
def countmode(username):
    cursor=connection.cursor()
    cursor.execute("select count(commentid) as count from tb_comment where username ='%s' " %(username) )
    e=int(cursor.rowcount)
    p=cursor.fetchall()
    print(p[0][0])
    return(p[0][0])

def addfriend(myname,hisname):
    t=iffriend(myname,hisname,0)
    print(t)
    print("wend")
    if t!='null':
        return 0
    cursor=connection.cursor()
    if myname==hisname:
        cursor.execute("insert into r_user_friend values('family',null,'%s','%s','family')" %(hisname,myname))
    else:
        cursor.execute("insert into r_user_friend values('common',null,'%s','%s','common')" %(hisname,myname))
    row=cursor.fetchone()
    print 0
    return(row)

def mymode(username):
    cursor=connection.cursor()
    cursor.execute("select *  from tb_comment where username ='%s' " %(username) )
    e=int(cursor.rowcount)
    t=[]
    print e
    if e==0:
        d={
                'commentid':'null',
                 'name':'null',
                 'datetime':'null',
                 'comment':'null'
              #  'datetime':p[i][3]
          }
        t.append(d)
    else:
        p=cursor.fetchall()
        for i in p:
          d={
                'commentid':i[0],
                 'name':i[3],
                 'datetime':i[2].strftime("%Y-%m-%d %H:%M:%S"),
                 'comment':i[1]
          #  'datetime':p[i][3]
                }
          t.append(d)
    encoded=json.dumps(t)
    print(encoded)
    return(encoded)

def delete(myname,hisname,flag):
    cursor=connection.cursor()
    if flag==0:
        cursor.execute("delete  from r_user_friend where ownername ='%s' and friendname='%s'" %(myname,hisname) )
    else:
        cursor.execute("delete  from r_user_friend where ownername ='%s' and friendname='%s'" %(hisname,myname) )
    row=cursor.fetchone()
    print 0
    return(row)

def checkmessagecount(myname):
    cursor=connection.cursor()
    cursor.execute("select count(id) as count from message where receive ='%s' and satus=0" %(myname) )
    e=int(cursor.rowcount)
    print(e)
    p=cursor.fetchall()
    print(p[0][0])
    return(p[0][0])

def updatemessage(messageid):
    cursor=connection.cursor()
    cursor.execute("update message set satus = 1  where id = '%d' " %(messageid))
    row=cursor.fetchone()
    return row


def getfee(authorityname):
    cursor=connection.cursor()
    print(authorityname)
    cursor.execute("select *  from tb_fee where authorityname ='%s' " %(authorityname) )
    e=int(cursor.rowcount)
    print e
    if e==0:
        d='null'
    else:
        p=cursor.fetchall()
        for i in p:
            d=i[2]
    print d
    return(d)



def iffriend(username,hisname,flag):
    cursor=connection.cursor()
    cursor.execute("select * from r_user_friend where ownername ='%s' and friendname='%s'" %(username,hisname))
    
    e=int(cursor.rowcount)
    if e==0:
        d='null'              #  'datetime':p[i][3]
    else:
        p=cursor.fetchall()
        for i in p:
            if flag==0:
                d=i[0]
            else:
                d=i[4]      
    return(d)

def getowner(routeid):
    cursor=connection.cursor()
    cursor.execute("select * from tb_route where routerid ='%d'" %(routeid))
    e=int(cursor.rowcount)
    p=cursor.fetchall()
    for i in p:
        d=i[6]
    return(d)

def insertaccount(username, usedflow, lastmonthflow, getflow,month):
    cursor = connection.cursor()
    remain=getflow-usedflow
    cursor.execute("insert into tb_account values('%s','%d','%d','%d','%d','%s',null)" % (username, remain, usedflow, lastmonthflow, getflow,month))
    row = cursor.fetchone()
    return row

def updateaccount(username, usedflow,getflow,month):
    cursor = connection.cursor()
    cursor.execute("select * from tb_account where username ='%s'" %(username))
    p=cursor.fetchall()
    for i in p:
        dr=i[1]
        du=i[2]
    usedflow=usedflow+du;
    getflow=getflow+du;
    remain=getflow-usedflow;
    cursor.execute("update tb_account set userdflow = '%d' , getflow='%d' ,jieyuflow='%d',month='%s' where username = '%s'" % (usedflow,getflow,remain,month,username))
    row = cursor.fetchone()
    return row

def updatefriendteam(username, friendname,authority,flag):
    cursor = connection.cursor()
    if flag==0:
        cursor.execute("update r_user_friend set authorityname = '%s' where ownername = '%s' and friendname='%s'" % (authority,username,friendname))
    else:
        cursor.execute("update r_user_friend set ownerauthority = '%s' where friendname = '%s' and ownername='%s'" % (authority,username,friendname))  
    row = cursor.fetchone()
    return row

def getsameroute(routeid,username):
    cursor = connection.cursor()
    cursor.execute("select * from status where routeid='%s'" % (routeid))
    e = int(cursor.rowcount)
    t = []
    if e == 0:
        d = {
           'username':'null'
          }
        t.append(d)
    else:
        p = cursor.fetchall()
        for i in p:
            if iffriend(username,i[0],0)=='null':
                d = {
                    'username':i[0],
                    'flag':1
                  }
                t.append(d)
            else:
                d = {
                        'username':i[0],
                        'flag':0
                      }
                t.append(d)
                
    encoded = json.dumps(t)
    return(encoded)



