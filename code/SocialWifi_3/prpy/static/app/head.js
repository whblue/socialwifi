var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var username=cp.get("username");
Ext.define('static.app.head', {
    extend: 'Ext.toolbar.Toolbar',
    requires:['static.app.homepage',
		'static.app.friend',
		'static.app.route'
    ],
    id: 'maintoolbar',
    cls:'head',
    initComponent: function () {
        this.items = [{
            xtype: 'button',
            cls: 'button_home',
            text: '<h>demo</h>',
            handler: function () {
            	window.location.href = 'index.html';
               // var right = Ext.getCmp('right');
                // alert(right);
               // right.removeAll();
                //var home = Ext.create('static.app.right');
                //right.add(home);
            }
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>我的首页</h>',
            handler: function () {
                var right = Ext.getCmp('right');
               // alert(right);
                right.removeAll();
                var home = Ext.create('static.app.homepage');
                right.add(home);
            }
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>我的好友</h>',
            handler: function () {
                var right = Ext.getCmp('right');
               // alert(right);
                right.removeAll();
                var home = Ext.create('static.app.friend');
                right.add(home);
            }
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>我的路由</h>',
            handler: function () {
                var right = Ext.getCmp('right');
                //alert(right);
                right.removeAll();
                var home = Ext.create('static.app.route');
                right.add(home);
            }
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>历史账单</h>',
            handler: function () {
                var right = Ext.getCmp('right');
                //alert(right);
                right.removeAll();
                var home = Ext.create('static.app.bill');
                right.add(home);
            }
        }, {
            xtype: 'textfield',
            cls: 'search'
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            id:'manage',
            text: '<h>账号管理</h>',
            listeners:{
            	'beforerender':function(){
            		intrr = setInterval(function() {
                 		Ext.Ajax.request({
                             url: 'checkcount',
                             async: false,
                             method: 'post',
                             params:{
                             	"username":username
                             },
                             success: function (response, options) {
                             	 var res = Ext.JSON.decode(response.responseText);
                             	 if(res.count>0)
                             	{
                             		Ext.getCmp('manage').setText('<h>账号管理</h>'+'<u>'+res.count+'</u>')
                             		Ext.getCmp('msg').setText('消息提示'+'<u>'+res.count+'</u>')
                             	}
                             	 else
                             	{
                              		Ext.getCmp('manage').setText('<h>账号管理</h>')
                              		Ext.getCmp('msg').setText('消息提示')
                              	} 
                             }
                 		})
            		 },1500);
            		inte = setInterval(function() {
            			var cp = new Ext.state.CookieProvider();
                		Ext.state.Manager.setProvider(cp);
           		    	 var own=cp.get("own");
            			Ext.Ajax.request({
                            url: 'check_important_message',
                            async: false,
                            method: 'post',
                            params:{
                            	"username":username,
                            	"ownername":own
                            },
                            success: function (response, options) {
                            	//alert("enerter");
                            	
                            	 var res = Ext.JSON.decode(response.responseText);
                            	
                                 if(res[0].content!="null")
                            	 {
                                	var t=Ext.getCmp('connect');
                 		    		t.setIconCls("connect-no");
                     				t.setText("未连接");
                     				t.setDisabled(true);            				
                         			
                     				 
                       		    	cp.set("connect",'no');
                       		    	 
                       		    	 
                          			var t2=new Date();
                          			var t1=cp.get("start");
                          			var tr=cp.get("count");
                          			var u=(t2-t1);
                          			var usedflow=Math.round(u/1000/60)*tr;
                          			
                          			Ext.Ajax.request({
                                          url: 'updateaccount',
                                          async: false,
                                          method: 'post',
                                          params:{
                                          	"username":username,
                                          	"usedflow":usedflow,
                                          	"getflow":0
                                      
                                          },
                                          success: function (response, options) {
                                          	
                                          	Ext.Ajax.request({
                                                  url: 'updateaccount',
                                                  async: false,
                                                  method: 'post',
                                                  params:{
                                                  	"username":own,
                                                  	"usedflow":0,
                                                  	"getflow":usedflow
                                              
                                                  },
                                                  success: function (response, options) {
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
                                                  	if(username!=own)
                                                  		Ext.Ajax.request({
                                                              url: 'insertmessage',
                                                              async: false,
                                                              method: 'post',
                                                              params:{
                                                              	"username":own,
                                                              	"receivename":username,
                                                              	"content":username+"本次资费为"+usedflow,
                                                              	"datetime":d
                                                              },
                                                              success: function (response, options) {
                                                              	Ext.Ajax.request({
                                                                      url: 'insertmessage',
                                                                      async: false,
                                                                      method: 'post',
                                                                      params:{
                                                                      	"username":username,
                                                                      	"receivename":own,
                                                                      	"content":username+"本次资费为"+usedflow+"元",
                                                                      	"datetime":d
                                                                      },
                                                                      success: function (response, options) {
                                                                    	 // alert("get")
                                                                    	  Ext.Ajax.request({
                                                                              url: 'updatemessage',
                                                                              async: false,
                                                                              method: 'post',
                                                                              params:{
                                                                              	"id":res[0].id
                                                                              },
                                                                              success: function (response, options) {
                                                                            	  Ext.Msg.show({
                                                                           		     title:'消息提示?',
                                                                           		     msg: "资费调整请重新登录"+res[0].content,
                                                                           		     buttons: Ext.Msg.YESNOCANCEL,
                                                                           		     icon: Ext.Msg.QUESTION,
                                                                           		     fn:function(btn,text){
                                                                           		    	 if(btn=='yes'){
                                                                           		    		window.location.href='login.html&routeid='+cp.get("routeid");
                                                                           		    	 }
                                                                           		     }
                                                                               	 }); 
                                                                              		 
                                                                              }
                                                                  		})
                                                                    	  
                                                                      }
                                                                   });
                                                              }
                                                           });
                                             	    		
                                                  	
                                                  		 
                                                  }
                                      		})
                                          		 
                                          }
                              		});
                                	
                            	 }	 
                            }
                		});
            		 },1500);
            		 
            	}
            },
            menu: new Ext.menu.Menu({
                items: [
                    // these will render as dropdown menu items when the arrow is clicked:
                    {text: '个人资料', id:'infoee',
                    	handler: function(){ var right = Ext.getCmp('right');
                        //alert(right);
                        right.removeAll();
                        var info = Ext.create('static.app.info');
                        right.add(info); }},
                    {text: '消息提示', id:'msg',cls:'tu',
                    		handler: function(){
                    			Ext.create('Ext.window.Window', {
                    			    title: '未读消息',
                    			    height: 400,
                    			    width: 400,
                    			    bodyStyle: 'background-color:#D7F2FA;',
                    			    modal: true,
                    			    autoScroll:true,
                    			    layout: 'fit',
                    			    items:[{
                    			    	xtype:'panel',
                    			    	id:'unread',
                    			    	autoScroll:true
                    			    }],
                    			    listeners:{
                    			    	'beforerender':function(){
                    			    		Ext.Ajax.request({
                                                url: 'getmessage',
                                                async: false,
                                                method: 'post',
                                                params:{
                                                	"username":username
                                                },
                                                success: function (response, options) {
                                                	 var res = Ext.JSON.decode(response.responseText);
                                                     var p = Ext.getCmp('unread');
                                                     p.removeAll();
                                                     Ext.Array.each(res, function (name, i, it) {
                                                     	 if(name.content!="null")
                                                     		 {
                                                 	p.insert(0, {
                                                 		xtype: 'panel',
                                                 		autoScroll:true,
                                                         border:true,
                                                         cls: 'panel_u',
                                                         height: 30,
                                                         border: true,
                                                         width: 400,
                                                         items: [{
                                                                 xtype: 'toolbar',
                                                                id:'to'+name.id,
                                                                 cls: 'friend_comment',
                                                                 border: false,
                                                                 items: [{
                                                                     xtype: 'label',
                                                                     text:  name.content,
                                                                     listeners:{
                                                                    	 'render': function () {
                                                                    		 Ext.fly(this.el).on('click',function (e, t) {
                                                                    			 Ext.Ajax.request({
                                                                                     url: 'updatemessage',
                                                                                     async: false,
                                                                                     method: 'post',
                                                                                     params:{
                                                                                     	"id":name.id
                                                                                     },
                                                                                     success: function (response, options) {
                                                                                     	 
                                                                                     		 
                                                                                     }
                                                                         		})
                                                                    		 })
                                                                    	}
                                                                     }
                                                                 }]
                                                         }]
                                                 	})
                                                     }
                                                })
                                                		 
                                                }
                                    		});
                    			    		
                    			    	}
                    			    }
                    			}).show();
                    		}}
                ]
            })
            
        },{
        	xtype:'button',
        	id:'connect',
        	width:80,
        	cls:'connect',
        	/*listeners:{       	
        		'render':function(){
        			var t=Ext.getCmp('connect');
        			t.on("disable",function(){
        				alert("enter");
        			});
        			alert("wefwefw");
        			
        		}
        	},*/
        	handler:function(){
        		Ext.Msg.show({
        		     title:'断开网络?',
        		     msg: '网络即将断开?',
        		     buttons: Ext.Msg.YESNOCANCEL,
        		     icon: Ext.Msg.QUESTION,
        		     fn:function(btn,text){
        		    	
                     	
        		    	if(btn=='yes')
        		    	{
        		    		var t=Ext.getCmp('connect');
        		    		t.setIconCls("connect-no");
            				t.setText("未连接");
            				t.setDisabled(true);            				
                			
            				 var cp = new Ext.state.CookieProvider();
                   			Ext.state.Manager.setProvider(cp);
              		    	 var own=cp.get("own");
              		    	var flag=cp.set("connect",'no');
              		    	 
              		    	 
                 			var t2=new Date();
                 			var t1=cp.get("start");
                 			var tr=cp.get("count");
                 			var u=(t2-t1);
                 			var usedflow=Math.round(u/1000/60)*tr;
                 			
                 			Ext.Ajax.request({
                                 url: 'updateaccount',
                                 async: false,
                                 method: 'post',
                                 params:{
                                 	"username":username,
                                 	"usedflow":usedflow,
                                 	"getflow":0
                             
                                 },
                                 success: function (response, options) {
                                 	
                                 	Ext.Ajax.request({
                                         url: 'updateaccount',
                                         async: false,
                                         method: 'post',
                                         params:{
                                         	"username":own,
                                         	"usedflow":0,
                                         	"getflow":usedflow
                                     
                                         },
                                         success: function (response, options) {
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
                                         	if(username!=own)
                                         		Ext.Ajax.request({
                                                     url: 'insertmessage',
                                                     async: false,
                                                     method: 'post',
                                                     params:{
                                                     	"username":own,
                                                     	"receivename":username,
                                                     	"content":username+"本次资费为"+usedflow,
                                                     	"datetime":d
                                                     },
                                                     success: function (response, options) {
                                                     	Ext.Ajax.request({
                                                             url: 'insertmessage',
                                                             async: false,
                                                             method: 'post',
                                                             params:{
                                                             	"username":username,
                                                             	"receivename":own,
                                                             	"content":username+"本次资费为"+usedflow,
                                                             	"datetime":d
                                                             },
                                                             success: function (response, options) {
                                                             	
                                                             }
                                                          });
                                                     }
                                                  });
                                    	    		
                                         	
                                         		 
                                         }
                             		})
                                 		 
                                 }
                     		})
                			
                			
        		    	}
        		     }
        		
        		});
        	},
        	listeners:{
        		'beforerender':function(){
        			var cp = new Ext.state.CookieProvider();
        			Ext.state.Manager.setProvider(cp);
        			var flag=cp.get("connect");
        			var t=Ext.getCmp('connect');
        			if(flag=='no')
        			{

        				t.setIconCls("connect-no");
        				t.setText("未连接");
        				t.setDisabled(true);
        			}
        			else if(flag=='yes'){
        				t.setIconCls("connect-yes");
        				t.setText("已连接");
        			}
        		
        		}
        	}
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})