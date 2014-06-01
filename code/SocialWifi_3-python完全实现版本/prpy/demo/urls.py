from django.conf.urls import patterns, include, url
from core.views import register,index,login,page_fee,page_wifi,page_mode,publish,friend,registerusers,getinfo,updateinformation,getsamepeople,getanswers,insertanswers,countmodes,countfans,countbefans,page_whose,add_friend,check_count,get_message,update_message,get_fee,insert_status,update_status,insert_message,update_account,update_friend,insert_important_message,check_important_message,delete_friend,fans,all_route,own_route,get_same_route
from django.contrib import admin
admin.autodiscover()
import os
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'demo.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url( r'^css/(?P<path>.*)$', 'django.views.static.serve',
            { 'document_root': os.path.dirname(os.path.dirname(__file__))+'static/extjs4/resource' }
    ),
 
    url( r'^images/(?P<path>.*)$', 'django.views.static.serve',
            { 'document_root': os.path.dirname(os.path.dirname(__file__))+'static/extjs4/resources/images' }
    ),
    url( r'^js.*$', 'django.views.static.serve',
            { 'document_root': os.path.dirname(os.path.dirname(__file__))+'static' }
    ),                   
    url( r'^js/(?P<path>.*)$', 'django.views.static.serve',
            { 'document_root': os.path.dirname(os.path.dirname(__file__))+'static' }
    ),
    url(r'^admin/', include(admin.site.urls)), 
    url(r'^login.html&routeid=(?P<num>\d+)',register),
    url(r'^registeruser',registerusers),
    url(r'^index.html',index),
    url(r'^login',login),
    url(r'^pagefee',page_fee),
    url(r'^pagewifi',page_wifi),
    url(r'^pagemode',page_mode),
    url(r'^publish',publish),
    url(r'^friend',friend),
    url(r'^getinfo',getinfo),
    url(r'^updateinfo',updateinformation),
    url(r'^getsamepeople',getsamepeople),
    url(r'^getanswer',getanswers),
    url(r'^insertanswer',insertanswers),
    url(r'^countmode',countmodes),
    url(r'^countfans',countfans),
    url(r'^countbefans',countbefans),
    url(r'^page_whose',page_whose),
    url(r'^addfriend',add_friend),
    url(r'^checkcount',check_count),
    url(r'^getmessage',get_message),
    url(r'^updatemessage',update_message),
    url(r'^getfee',get_fee),
    url(r'^insertstatus',insert_status),
    url(r'^updatestatus',update_status),
    url(r'^insertmessage',insert_message),
    url(r'^updateaccount',update_account),
    url(r'^updatefriend',update_friend),
    url(r'^insert_important_message',insert_important_message),
    url(r'^check_important_message',check_important_message),
    url(r'^deletefriend',delete_friend),
    url(r'^fan',fans),
    url(r'^all_route',all_route),
    url(r'^own_route',own_route),
    url(r'^get_same_route',get_same_route),
)
