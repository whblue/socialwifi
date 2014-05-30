var publish = function () {
    
}
var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var username=cp.get("username");
var x = 0;
var intr;
Ext.define('static.app.homepage', {
    extend: 'Ext.panel.Panel',
    collapsible: true,
    id: 'homepage',
    title: '我的首页',
    listeners:{
        'beforerender': function () {
            Ext.getCmp('button_publish').setDisabled(true);
        },
        
    },
    initComponent: function () {
        this.items = [{
            xtype: 'panel',
            cls: 'homepage',
            height: 1000,
            autoScroll:true,
            items:[{
            	 xtype: 'textarea',
                 name: 'mood',
                 id: 'mode',
                 width: 640,
                 cls: 'publish',
                 listeners: {
                     'focus': function () {
                         Ext.getCmp('button_publish').setDisabled(false);
                     }
                 }
            },{
            	xtype: 'button',
                text: '发布',
                id:'button_publish',
                cls: 'button_publish',
                handler:function(){
                	var p = Ext.getCmp('publish_main');
                    var date = new Date();
                    var m = date.getMonth() + 1;
                    var t = date.getHours();
                    var t1 = date.getMinutes();
                    if (m < 10)
                        m = '0' + m;
                    if (t < 10)
                        t = '0' + date.getHours();
                    if (t1 < 10)
                        t1 = '0' + date.getMinutes();
                    var d = date.getFullYear()+"-" + m+ '-' + date.getDate()+" " + t + ':' + t1+":00";
                    Ext.Ajax.request({
                        url: 'publish',
                        async: false,
                        method: 'post',
                        params: {
                            'comment': Ext.getCmp('mode').getValue(),
                            'name': username,
                            'datetime': d

                        },
                        success: function (response, options) {
                        	var id=Ext.JSON.decode(response.responseText).commentid;
                        	p.insert(0, {
                        		xtype: 'panel',
                                id:"com"+id,
                                cls: 'panel1',
                                height: 80,
                                border: true,
                                width: 685,
                                items: [{
                                	xtype: 'panel',
                                    cls: 'friend_top',
                                    height: 50,
                                    items: [{
                                        xtype: 'image',
                                        height: 50,
                                        width: 40,
                                        cls: 'friendimage'
                                    }, {
                                        xtype: 'panel',
                                        height: 50,
                                        width: 640,
                                        cls: 'friendmode',
                                        items: [{
                                            xtype: 'panel',
                                            height: 20,
                                            width: 640,
                                            cls: 'panel_head',
                                            html: '<h>'+username+'</h>'
                                        }, {
                                            xtype: 'panel',
                                            height: 30,
                                            width: 640,
                                            cls: 'panel_text',
                                            html: Ext.getCmp('mode').getValue()
                                        }]
                                    }]
                                },{
                                	 xtype: 'toolbar',
                                     id:"tool"+date+m+t+t1,	
                                     cls: 'friend_comment',
                                     border: false,
                                     items: [{
                                         xtype: 'label',
                                         text: '发布于' + d
                                     }, '->', {
                                    	 xtype: 'label',
                                         id:'comm'+date+m+t+t1,
                                         text: '评论',
                                         listeners: {
                                        	 'render': function () {
                                        		 Ext.fly(this.el).on('click',function (e, t) {
                                        			 Ext.create('Ext.window.Window', {
                                                         layout: 'fit',
                                                         bodyStyle: 'background-color:#D7F2FA;',
                                                         modal: true,
                                                         height: 600,
                                                         autoScroll:true,
                                                         title:'评论列表',
                                                         width: 685,
                                                         items:[{
                                                        	 xtype: 'panel',                                                            
                                                             width: 700,
                                                             height: 175,
                                                             items: [{
                                                            	 xtype: 'textfield',
                                                                 id:'comtext',
                                                                 width: 640,
                                                                 height: 30,
                                                                 cls: 'comlist'
                                                             },{
                                                            	 text: '评论',
                                                                 width: 60,
                                                                 height: 20,
                                                                 cls: 'combutton',
                                                                 handler: function () {
                                                                	 var l = Ext.getCmp('comwindow');
                                                                     Ext.Ajax.request({
                                                                         url: 'insertanswer',
                                                                         async: false,
                                                                         params: {
                                                                             'username': name,
                                                                             'content':Ext.getCmp("comtext").getRawValue(),
                                                                             'commentid':id,
                                                                             'replyname':username,
                                                                             'date':new Date()
                                                                         },
                                                                         method: 'post',
                                                                         success: function (response, options) {

                                                                        	 l.insert(0, {
                                                                                 xtype: 'panel',
                                                                                 cls: 'panel1',
                                                                                 height: 80,
                                                                                 border: true,
                                                                                 width: 685,
                                                                                 items: [{
                                                                                	 xtype: 'panel',
                                                                                     cls: 'friend_top',
                                                                                     height: 50,
                                                                                     items: [{
                                                                                         xtype: 'image',
                                                                                         height: 50,
                                                                                         width: 40,
                                                                                         cls: 'friendimage'
                                                                                     }, {
                                                                                         xtype: 'panel',
                                                                                         height: 50,
                                                                                         width: 640,
                                                                                         cls: 'friendmode',
                                                                                         items: [{
                                                                                             xtype: 'panel',
                                                                                             height: 20,
                                                                                             width: 640,
                                                                                             cls: 'panel_head',
                                                                                             html: '<h>'+name.replyname+'</h>'
                                                                                         }, {
                                                                                             xtype: 'panel',
                                                                                             height: 30,
                                                                                             width: 640,
                                                                                             cls: 'panel_text',
                                                                                             html: Ext.getCmp('comtext').getValue()
                                                                                         }]
                                                                                     }]
                                                                                 },{
                                                                                     xtype: 'toolbar',
                                                                                     cls: 'friend_comment',
                                                                                     border: false,
                                                                                     items: [{
                                                                                         xtype: 'label',
                                                                                         text: '发布于' + d
                                                                                     }, '->'
                                                                                     ]
                                                                                 }]
                                                                             })
                                                                             
                                                                         }
                                                                         })	 
                                                                 }
                                                                 }]
                                                         }]
                                                     }).show();
                                        		 });
                                        	 }
                                         }
                                     }]
                                }]
                        	});
                        }
                    });
                    
                }
            },{
            	xtype: 'panel',
                id:'publish_main',
                listeners: {
                    'beforerender': function () {
                    	Ext.Ajax.request({
                            url: 'pagemode',
                            async: false,
                            method: 'post',
                            params:{
                            	"username":username
                            },
                            success: function (response, options) {
                            	 var res = Ext.JSON.decode(response.responseText);
                                 var p = Ext.getCmp('publish_main');
                                 p.removeAll();
                                 Ext.Array.each(res, function (name, i, it) {
                                	 if(name.name!="null"){
                                		 var d = '发布于' + name.datetime;
                                		 p.add({
                                             xtype: 'panel',
                                             cls: 'panel1',
                                             height: 80,
                                             border: true,
                                             width: 685,
                                             items: [{
                                            	 xtype: 'panel',
                                                 cls: 'friend_top',
                                                 height: 50,
                                                 items: [{
                                                     xtype: 'image',
                                                     height: 50,
                                                     width: 40,
                                                     cls: 'friendimage'
                                                 }, {
                                                     xtype: 'panel',
                                                     height: 50,
                                                     width: 640,
                                                     cls: 'friendmode',
                                                     items: [{
                                                         xtype: 'panel',
                                                         height: 20,
                                                         width: 640,
                                                         cls: 'panel_head',
                                                         html: '<h>' + name.name + '</h>'
                                                     }, {
                                                         xtype: 'panel',
                                                         height: 30,
                                                         width: 640,
                                                         cls: 'panel_text',
                                                         html: name.comment
                                                     }]
                                                 }]
                                             },{
                                            	 xtype: 'toolbar',
                                                 cls: 'friend_comment',
                                                 border: false,
                                                 items:[{
                                                	 xtype: 'label',
                                                     text: d
                                                 },{
                                                	 xtype: 'tbfill' 
                                                 },{
                                                	 xtype: 'label',
                                                     text: '评论',
                                                     listeners: {
                                                    	 'render': function () {
                                                    		 Ext.fly(this.el).on('click',function (e, t) {
                                                    			 Ext.create('Ext.window.Window', {
                                                                     layout: 'fit',
                                                                     bodyStyle: 'background-color:#D7F2FA;',
                                                                     modal: true,
                                                                     height: 600,
                                                                     autoScroll:true,
                                                                     title:'评论列表',
                                                                     width: 685,
                                                                     items:[{
                                                                    	 xtype: 'panel',                                                            
                                                                         width: 700,
                                                                         
                                                                         autoScroll:true,
                                                                         items: [{
                                                                        	 xtype: 'textfield',
                                                                             id:'comtext',
                                                                             width: 640,
                                                                             height: 30,
                                                                             cls: 'comlist'
                                                                         },{
                                                                        	 xtype:'button',
                                                                        	 text: '评论',
                                                                             width: 60,
                                                                             height: 20,
                                                                             cls: 'combutton',
                                                                             handler: function () {
                                                                            	 var l = Ext.getCmp('comwindow');
                                                                            	 var date = new Date();
                                                                                 var m = date.getMonth() + 1;
                                                                                 var t = date.getHours();
                                                                                 var t1 = date.getMinutes();
                                                                                 if (m < 10)
                                                                                     m = '0' + m;
                                                                                 if (t < 10)
                                                                                     t = '0' + date.getHours();
                                                                                 if (t1 < 10)
                                                                                     t1 = '0' + date.getMinutes();
                                                                                 var d = date.getFullYear()+"-" + m+ '-' + date.getDate()+" " + t + ':' + t1+":00";
                                                                                 Ext.Ajax.request({
                                                                                     url: 'insertanswer',
                                                                                     async: false,
                                                                                     params: {
                                                                                         'username': name.name,
                                                                                         'content':Ext.getCmp("comtext").getRawValue(),
                                                                                         'commentid':name.commentid,
                                                                                         'replyname':username,
                                                                                         'date':d
                                                                                     },
                                                                                     method: 'post',
                                                                                     success: function (response, options) {
                                                                                    	 l.insert(0, {
                                                                                             xtype: 'panel',
                                                                                             cls: 'panel1',
                                                                                             height: 80,
                                                                                             border: true,
                                                                                             width: 685,
                                                                                             items: [{
                                                                                            	 xtype: 'panel',
                                                                                                 cls: 'friend_top',
                                                                                                 height: 50,
                                                                                                 items: [{
                                                                                                     xtype: 'image',
                                                                                                     height: 50,
                                                                                                     width: 40,
                                                                                                     cls: 'friendimage'
                                                                                                 }, {
                                                                                                     xtype: 'panel',
                                                                                                     height: 50,
                                                                                                     width: 640,
                                                                                                     cls: 'friendmode',
                                                                                                     items: [{
                                                                                                         xtype: 'panel',
                                                                                                         height: 20,
                                                                                                         width: 640,
                                                                                                         cls: 'panel_head',
                                                                                                         html: '<h>'+username+'</h>'
                                                                                                     }, {
                                                                                                         xtype: 'panel',
                                                                                                         height: 30,
                                                                                                         width: 640,
                                                                                                         cls: 'panel_text',
                                                                                                         html: Ext.getCmp('comtext').getValue()
                                                                                                     }]
                                                                                                 }]
                                                                                             },{
                                                                                                 xtype: 'toolbar',
                                                                                                 cls: 'friend_comment',
                                                                                                 border: false,
                                                                                                 items: [{
                                                                                                     xtype: 'label',
                                                                                                     text: '发布于' + d
                                                                                                 }
                                                                                                 ]
                                                                                             }]
                                                                                         })
                                                                                         
                                                                                     }
                                                                                     })	 
                                                                             }
                                                                             }, {
                                                                                 xtype: 'panel',
                                                                                 cls:'comwindow',
                                                                                 id:'comwindow',
                                                                                 listeners:{
                                                                                	 'beforerender':function(){
                                                                                		 Ext.Ajax.request({
                                                                                             url: 'getanswer',
                                                                                             async: false,
                                                                                             method: 'post',
                                                                                             params:{
                                                                                             	"commentid":name.commentid
                                                                                             },
                                                                                             success: function (response, options) {
                                                                                             	 var res = Ext.JSON.decode(response.responseText);
                                                                                                  var t = Ext.getCmp('comwindow');
                                                                                                  t.removeAll();
                                                                                                  Ext.Array.each(res, function (name, i, it) {
                                                                                                  	 if(name.content!="null")
                                                                                                  		 {
                                                                                              	t.insert(0, {
                                                                                              		xtype: 'panel',
                                                                                                      id:"com"+name.answerid,
                                                                                                      cls: 'panel1',
                                                                                                      height: 80,
                                                                                                      border: true,
                                                                                                      width: 685,
                                                                                                      items: [{
                                                                                                      	xtype: 'panel',
                                                                                                          cls: 'friend_top',
                                                                                                          height: 50,
                                                                                                          items: [{
                                                                                                              xtype: 'image',
                                                                                                              height: 50,
                                                                                                              width: 40,
                                                                                                              cls: 'friendimage'
                                                                                                          }, {
                                                                                                              xtype: 'panel',
                                                                                                              height: 50,
                                                                                                              width: 640,
                                                                                                              cls: 'friendmode',
                                                                                                              items: [{
                                                                                                                  xtype: 'panel',
                                                                                                                  height: 20,
                                                                                                                  width: 640,
                                                                                                                  cls: 'panel_head',
                                                                                                                  html: '<h>'+name.replyname+'</h>'
                                                                                                              }, {
                                                                                                                  xtype: 'panel',
                                                                                                                  height: 30,
                                                                                                                  width: 640,
                                                                                                                  cls: 'panel_text',
                                                                                                                  html: name.content
                                                                                                              }]
                                                                                                          }
                                                                                                              ]
                                                                                                          },{
                                                                                                              xtype: 'toolbar',
                                                                                                              id:'tool'+name.datetime,
                                                                                                              cls: 'friend_comment',
                                                                                                              border: false,
                                                                                                              items: [{
                                                                                                                  xtype: 'label',
                                                                                                                  text: '发布于' + name.datetime
                                                                                                              }]
                                                                                                      }]
                                                                                              	})
                                                                                                  }
                                                                                             })
                                                                                             }
                                                                                 		});
                                                                                		 intrr = setInterval(function() {
                                                                                     		Ext.Ajax.request({
                                                                                                 url: 'getanswer',
                                                                                                 async: false,
                                                                                                 method: 'post',
                                                                                                 params:{
                                                                                                 	"commentid":name.commentid
                                                                                                 },
                                                                                                 success: function (response, options) {
                                                                                                 	 var res = Ext.JSON.decode(response.responseText);
                                                                                                      var u = Ext.getCmp('comwindow');
                                                                                                      u.removeAll();
                                                                                                      Ext.Array.each(res, function (name, i, it) {
                                                                                                      	 if(name.content!="null")
                                                                                                      		 {
                                                                                                  	u.insert(0, {
                                                                                                  		xtype: 'panel',
                                                                                                          id:"com"+name.answerid,
                                                                                                          cls: 'panel1',
                                                                                                          height: 80,
                                                                                                          border: true,
                                                                                                          width: 685,
                                                                                                          items: [{
                                                                                                          	xtype: 'panel',
                                                                                                              cls: 'friend_top',
                                                                                                              height: 50,
                                                                                                              items: [{
                                                                                                                  xtype: 'image',
                                                                                                                  height: 50,
                                                                                                                  width: 40,
                                                                                                                  cls: 'friendimage'
                                                                                                              }, {
                                                                                                                  xtype: 'panel',
                                                                                                                  height: 50,
                                                                                                                  width: 640,
                                                                                                                  cls: 'friendmode',
                                                                                                                  items: [{
                                                                                                                      xtype: 'panel',
                                                                                                                      height: 20,
                                                                                                                      width: 640,
                                                                                                                      cls: 'panel_head',
                                                                                                                      html: '<h>'+name.replyname+'</h>'
                                                                                                                  }, {
                                                                                                                      xtype: 'panel',
                                                                                                                      height: 30,
                                                                                                                      width: 640,
                                                                                                                      cls: 'panel_text',
                                                                                                                      html: name.content
                                                                                                                  }]
                                                                                                              }
                                                                                                                  ]
                                                                                                              },{
                                                                                                                  xtype: 'toolbar',
                                                                                                                  id:'tool'+name.datetime,
                                                                                                                  cls: 'friend_comment',
                                                                                                                  border: false,
                                                                                                                  items: [{
                                                                                                                      xtype: 'label',
                                                                                                                      text: '发布于' + name.datetime
                                                                                                                  }]
                                                                                                          }]
                                                                                                  	})
                                                                                                      }
                                                                                                 })
                                                                                                 }
                                                                                     		})
                                                                                		 },15000)
                                                                                	 }
                                                                                 }
                                                                             }]
                                                                     }]
                                                                 }).show();
                                                    		 });
                                                    	 }
                                                     }
                                                 }]
                                             }]
                                         })
                                	 }
                                 });
                            }
                        });
                    	intr = setInterval(function() {
                    		Ext.Ajax.request({
                                url: 'pagemode',
                                async: false,
                                method: 'post',
                                params:{
                                	"username":username
                                },
                                success: function (response, options) {
                                	 var res = Ext.JSON.decode(response.responseText);
                                     var p = Ext.getCmp('publish_main');
                                     p.removeAll();
                                     Ext.Array.each(res, function (name, i, it) {
                                    	 if(name.name!="null"){
                                    		 var d = '发布于' + name.datetime;
                                    		 p.add({
                                                 xtype: 'panel',
                                                 cls: 'panel1',
                                                 height: 80,
                                                 border: true,
                                                 width: 685,
                                                 items: [{
                                                	 xtype: 'panel',
                                                     cls: 'friend_top',
                                                     height: 50,
                                                     items: [{
                                                         xtype: 'image',
                                                         height: 50,
                                                         width: 40,
                                                         cls: 'friendimage'
                                                     }, {
                                                         xtype: 'panel',
                                                         height: 50,
                                                         width: 640,
                                                         cls: 'friendmode',
                                                         items: [{
                                                             xtype: 'panel',
                                                             height: 20,
                                                             width: 640,
                                                             cls: 'panel_head',
                                                             html: '<h>' + name.name + '</h>'
                                                         }, {
                                                             xtype: 'panel',
                                                             height: 30,
                                                             width: 640,
                                                             cls: 'panel_text',
                                                             html: name.comment
                                                         }]
                                                     }]
                                                 },{
                                                	 xtype: 'toolbar',
                                                     cls: 'friend_comment',
                                                     border: false,
                                                     items:[{
                                                    	 xtype: 'label',
                                                         text: d
                                                     },{
                                                    	 xtype: 'tbfill' 
                                                     },{
                                                    	 xtype: 'label',
                                                         text: '评论',
                                                         listeners: {
                                                        	 'render': function () {
                                                        		 Ext.fly(this.el).on('click',function (e, t) {
                                                        			 Ext.create('Ext.window.Window', {
                                                                         layout: 'fit',
                                                                         bodyStyle: 'background-color:#D7F2FA;',
                                                                         modal: true,
                                                                         height: 600,
                                                                         autoScroll:true,
                                                                         title:'评论列表',
                                                                         width: 685,
                                                                         items:[{
                                                                        	 xtype: 'panel',                                                            
                                                                             width: 700,
                                                                             
                                                                             autoScroll:true,
                                                                             items: [{
                                                                            	 xtype: 'textfield',
                                                                                 id:'comtext',
                                                                                 width: 640,
                                                                                 height: 30,
                                                                                 cls: 'comlist'
                                                                             },{
                                                                            	 xtype:'button',
                                                                            	 text: '评论',
                                                                                 width: 60,
                                                                                 height: 20,
                                                                                 cls: 'combutton',
                                                                                 handler: function () {
                                                                                	 var l = Ext.getCmp('comwindow');
                                                                                	 var date = new Date();
                                                                                     var m = date.getMonth() + 1;
                                                                                     var t = date.getHours();
                                                                                     var t1 = date.getMinutes();
                                                                                     if (m < 10)
                                                                                         m = '0' + m;
                                                                                     if (t < 10)
                                                                                         t = '0' + date.getHours();
                                                                                     if (t1 < 10)
                                                                                         t1 = '0' + date.getMinutes();
                                                                                     var d = date.getFullYear()+"-" + m+ '-' + date.getDate()+" " + t + ':' + t1+":00";
                                                                                     Ext.Ajax.request({
                                                                                         url: 'insertanswer',
                                                                                         async: false,
                                                                                         params: {
                                                                                             'username': name.name,
                                                                                             'content':Ext.getCmp("comtext").getRawValue(),
                                                                                             'commentid':name.commentid,
                                                                                             'replyname':username,
                                                                                             'date':d
                                                                                         },
                                                                                         method: 'post',
                                                                                         success: function (response, options) {
                                                                                        	 l.insert(0, {
                                                                                                 xtype: 'panel',
                                                                                                 cls: 'panel1',
                                                                                                 height: 80,
                                                                                                 border: true,
                                                                                                 width: 685,
                                                                                                 items: [{
                                                                                                	 xtype: 'panel',
                                                                                                     cls: 'friend_top',
                                                                                                     height: 50,
                                                                                                     items: [{
                                                                                                         xtype: 'image',
                                                                                                         height: 50,
                                                                                                         width: 40,
                                                                                                         cls: 'friendimage'
                                                                                                     }, {
                                                                                                         xtype: 'panel',
                                                                                                         height: 50,
                                                                                                         width: 640,
                                                                                                         cls: 'friendmode',
                                                                                                         items: [{
                                                                                                             xtype: 'panel',
                                                                                                             height: 20,
                                                                                                             width: 640,
                                                                                                             cls: 'panel_head',
                                                                                                             html: '<h>'+username+'</h>'
                                                                                                         }, {
                                                                                                             xtype: 'panel',
                                                                                                             height: 30,
                                                                                                             width: 640,
                                                                                                             cls: 'panel_text',
                                                                                                             html: Ext.getCmp('comtext').getValue()
                                                                                                         }]
                                                                                                     }]
                                                                                                 },{
                                                                                                     xtype: 'toolbar',
                                                                                                     cls: 'friend_comment',
                                                                                                     border: false,
                                                                                                     items: [{
                                                                                                         xtype: 'label',
                                                                                                         text: '发布于' + d
                                                                                                     }
                                                                                                     ]
                                                                                                 }]
                                                                                             })
                                                                                             
                                                                                         }
                                                                                         })	 
                                                                                 }
                                                                                 }, {
                                                                                     xtype: 'panel',
                                                                                     cls:'comwindow',
                                                                                     id:'comwindow',
                                                                                     listeners:{
                                                                                    	 'beforerender':function(){
                                                                                    		 Ext.Ajax.request({
                                                                                                 url: 'getanswer',
                                                                                                 async: false,
                                                                                                 method: 'post',
                                                                                                 params:{
                                                                                                 	"commentid":name.commentid
                                                                                                 },
                                                                                                 success: function (response, options) {
                                                                                                	 var res = Ext.JSON.decode(response.responseText);
                                                                                                     var p = Ext.getCmp('comwindow');
                                                                                                     p.removeAll();
                                                                                                     Ext.Array.each(res, function (name, i, it) {
                                                                                                     	 if(name.content!="null")
                                                                                                     		 {
                                                                                                 	p.insert(0, {
                                                                                                 		xtype: 'panel',
                                                                                                         id:"com"+name.commentid,
                                                                                                         cls: 'panel1',
                                                                                                         height: 80,
                                                                                                         border: true,
                                                                                                         width: 685,
                                                                                                         items: [{
                                                                                                         	xtype: 'panel',
                                                                                                             cls: 'friend_top',
                                                                                                             height: 50,
                                                                                                             items: [{
                                                                                                                 xtype: 'image',
                                                                                                                 height: 50,
                                                                                                                 width: 40,
                                                                                                                 cls: 'friendimage'
                                                                                                             }, {
                                                                                                                 xtype: 'panel',
                                                                                                                 height: 50,
                                                                                                                 width: 640,
                                                                                                                 cls: 'friendmode',
                                                                                                                 items: [{
                                                                                                                     xtype: 'panel',
                                                                                                                     height: 20,
                                                                                                                     width: 640,
                                                                                                                     cls: 'panel_head',
                                                                                                                     html: '<h>'+name.replyname+'</h>'
                                                                                                                 }, {
                                                                                                                     xtype: 'panel',
                                                                                                                     height: 30,
                                                                                                                     width: 640,
                                                                                                                     cls: 'panel_text',
                                                                                                                     html: name.content
                                                                                                                 }]
                                                                                                             }
                                                                                                                 ]
                                                                                                             },{
                                                                                                                 xtype: 'toolbar',
                                                                                                                 id:'tool'+name.datetime,
                                                                                                                 cls: 'friend_comment',
                                                                                                                 border: false,
                                                                                                                 items: [{
                                                                                                                     xtype: 'label',
                                                                                                                     text: '发布于' + name.datetime
                                                                                                                 }]
                                                                                                         }]
                                                                                                 	})
                                                                                                     }
                                                                                                })
                                                                                                 }
                                                                                     		});
                                                                                    		 intrr = setInterval(function() {
                                                                                         		Ext.Ajax.request({
                                                                                                     url: 'getanswer',
                                                                                                     async: false,
                                                                                                     method: 'post',
                                                                                                     params:{
                                                                                                     	"commentid":name.answerid
                                                                                                     },
                                                                                                     success: function (response, options) {
                                                                                                     	 var res = Ext.JSON.decode(response.responseText);
                                                                                                          var p = Ext.getCmp('comwindow');
                                                                                                          p.removeAll();
                                                                                                          Ext.Array.each(res, function (name, i, it) {
                                                                                                          	 if(name.content!="null")
                                                                                                          		 {
                                                                                                      	p.insert(0, {
                                                                                                      		xtype: 'panel',
                                                                                                              id:"com"+name.commentid,
                                                                                                              cls: 'panel1',
                                                                                                              height: 80,
                                                                                                              border: true,
                                                                                                              width: 685,
                                                                                                              items: [{
                                                                                                              	xtype: 'panel',
                                                                                                                  cls: 'friend_top',
                                                                                                                  height: 50,
                                                                                                                  items: [{
                                                                                                                      xtype: 'image',
                                                                                                                      height: 50,
                                                                                                                      width: 40,
                                                                                                                      cls: 'friendimage'
                                                                                                                  }, {
                                                                                                                      xtype: 'panel',
                                                                                                                      height: 50,
                                                                                                                      width: 640,
                                                                                                                      cls: 'friendmode',
                                                                                                                      items: [{
                                                                                                                          xtype: 'panel',
                                                                                                                          height: 20,
                                                                                                                          width: 640,
                                                                                                                          cls: 'panel_head',
                                                                                                                          html: '<h>'+name.replyname+'</h>'
                                                                                                                      }, {
                                                                                                                          xtype: 'panel',
                                                                                                                          height: 30,
                                                                                                                          width: 640,
                                                                                                                          cls: 'panel_text',
                                                                                                                          html: name.content
                                                                                                                      }]
                                                                                                                  }
                                                                                                                      ]
                                                                                                                  },{
                                                                                                                      xtype: 'toolbar',
                                                                                                                      id:'tool'+name.datetime,
                                                                                                                      cls: 'friend_comment',
                                                                                                                      border: false,
                                                                                                                      items: [{
                                                                                                                          xtype: 'label',
                                                                                                                          text: '发布于' + name.datetime
                                                                                                                      }]
                                                                                                              }]
                                                                                                      	})
                                                                                                          }
                                                                                                     })
                                                                                                     }
                                                                                         		})
                                                                                    		 },15000)
                                                                                    	 }
                                                                                     }
                                                                                 }]
                                                                         }]
                                                                     }).show();
                                                        		 });
                                                        	 }
                                                         }
                                                     }]
                                                 }]
                                             })
                                    	 }
                                     });
                                }
                            })
                    	},15000)
                    }
                }
            }]
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})