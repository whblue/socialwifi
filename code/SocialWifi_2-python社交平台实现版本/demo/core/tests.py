#coding=utf-8
from core.models import *
import simplejson as json
from django.db import connection
import operator

'''
用户的流量查询，输入用户id,date，可用测试数据0，,20130201
'''
def  router(nowuser,date):
    p=TbAccount.objects.raw('select * from tb_account where userid=%d and month=%s' %(nowuser,date))
    print(p[0].jieyuflow)
    d = {
       'lastmonthflow':p[0].lastmonthflow,
       'usedflow' :p[0].userdflow,
       'remainflow' :p[0].jieyuflow,
       'getflow' :p[0].getflow
     }
    encoded=json.dumps(d)
    return encoded

'''
记录路由器的位置，用于在地图上显示，包括经度和纬度，返回所有可用路由器，无需查询
'''
def  routerlocation():
    p=TbRoute.objects.all()
    e=p.count()
    t=[]
    for i in range(e):
       d={
        'longitude': p[i].longitude,
        'latitude': p[i].latitude
        }
       t.append(d)
    
    encoded=json.dumps(t)
    print(encoded)
    return encoded

'''
用户登录验证，可用测试数据userid为0,1,2,3由于目前是整型数据，所以现在是一位数，整型数不支持如‘oooo’格式
'''
def loginuser(username,password):
    p=TbUser.objects.get(username=username,password=password)
    d = {
      'userid':p.username
      }  
    encoded=json.dumps(d)
    return encoded

def cmp_datetime(a_datetime, b_datetime):

    if a_datetime > b_datetime:
        return -1
    elif a_datetime < b_datetime:
        return 1
    else:
        return 0

'''
comment所有好友发的状态，只须要输入userid，就将所有状态显示出。可用测试数据userid为0
'''
def comment(userid):   
    cursor=connection.cursor()
    cursor.execute("select friendid from r_user_friend where userid =%d"%(userid) )
    friendid=[desc[0] for desc in cursor.fetchall()]
    e=friendid.__len__()
    m=[]
    for j in range(e):
        cursor=connection.cursor()
        cursor.execute("select * from tb_comment where userid =%d"%(friendid[j]) )
        p=cursor.fetchall()
        x=p.__len__()
        for i in range(x):
            t=p[i][3]
            print(t.strftime("%Y-%m-%d %H:%M:%S"))
            print("afafsafasdfdsafafafsafsda")
            d={
                'datetime':p[i][3].strftime("%Y-%m-%d %H:%M:%S"),
                'commentid':p[i][0],
                 'userid':p[i][2],
                 'name':p[i][4],
                 'comment':p[i][1]               
            }
            m.append(d)
            
    m.sort(cmp=cmp_datetime, key=operator.itemgetter('datetime'))
    encoded=json.dumps(m)
    
    return encoded
 
 
 
#插入数据库Tb_Comment数据，也即是将新发表的微博存如数据库，内容包括有
def my_custom_sqlcomment(comment,userid,datetime,name):
    cursor=connection.cursor()
    cursor.execute("insert into tb_comment values(null,'%s','%d','%s','%s')" %(comment,userid,datetime,name))
    row=cursor.fetchone()
    return row


'''
此函数的主要目的是获得每一个状态下的评论，主动发出的状态和评论在数据库中分开存储，显示时前端需要调用此函数，可用测试数据commentid1,2
'''
def answer(commentid):
    p=TbAnswer.objects.raw('select * from tb_answer where commentid=0')
    e=p.count()
    encoded=range(e)
    for j in range(e):
         d={
            'answerid':p[j].answerid,
            'commentid':p[j].id,
            'replyanswerid':p[j].id,
            'userid':p[j].userid,
            'name':p[j].name,
            'content':p[j].content,
            'datetime':p[j].datetime
            }
         encoded[j]=json.dumps(d)
    return encoded

    
'''
插入评论占时有个bug，出现在回复有一个值表示空时为主动评论，正在修改中
'''
 
'''
路由器基本信息，可用数据userid=0
'''
def routerinfo(nowuser):
    cursor=connection.cursor()
    cursor.execute("select * from tb_route where owner=%d" %(nowuser))
    p=cursor.fetchall()
    x=p.__len__()
    encoded=[]
    for i in range(x):
       d={
          
         'routerid':p[0][0],
         'name':p[0][1],
         'flow':p[0][2],
         'longitude':p[0][4],
         'latitude':p[0][5]
         }
       m=json.dumps(d)
       encoded.append(m)
    return encoded


# 用户好友，可用测试数据nowuser=0
def friendinfo(nowuser):
    nowuser=0
    cursor=connection.cursor()
    cursor.execute("select * from r_user_friend where userid=%d"%(nowuser))
    p=cursor.fetchall()
    x=p.__len__()
    m=[]
    for i in range(x):
        d={
           
           'friendid':p[i][1],
           'authorityname':p[i][2],
           'availableflow':p[i][3],
           'friendname':p[i][5]
         }
        m.append(d)
    encoded=json.dumps(m)
    return encoded
 
 
 
 
