from django.conf.urls import patterns, include, url
from core.views import index,login,page_fee,page_wifi,page_mode,publish,friend
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
    url(r'^index.html',index),
    url(r'^login',login),
    url(r'^pagefee',page_fee),
    url(r'^pagewifi',page_wifi),
    url(r'^pagemode',page_mode),
    url(r'^publish',publish),
    url(r'^friend',friend),
)
