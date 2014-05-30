
var x = 0;
var intr;
Ext.define('static.app.whosepage', {
    extend: 'Ext.panel.Panel',
    autoDestory:true,
    collapsible: true,
    id: 'whosepage',
  
    initComponent: function () {
    	var cp = new Ext.state.CookieProvider();
    	Ext.state.Manager.setProvider(cp);
    	var visitor=cp.get("visitor");
        this.items = [{
            xtype: 'panel',
            cls: 'homepage',
            height: 1000,
            autoScroll:true,
            items:[{
            	xtype: 'panel',
                id:'publish_visitor',
                listeners: {
                    'beforerender': function () {
                    	//alert("vistor"+visitor);
                    	Ext.getCmp('whosepage').setTitle(visitor+'的首页')
                    	Ext.Ajax.request({
                            url: 'page_whose',
                            async: false,
                            method: 'post',
                            params:{
                            	"username":visitor
                            },
                            success: function (response, options) {
                            	 var res = Ext.JSON.decode(response.responseText);
                                 var p = Ext.getCmp('publish_visitor');
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
                                                                                                                  html: '<h>'+username+'</h>'
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
                    }
                }
            }]
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})