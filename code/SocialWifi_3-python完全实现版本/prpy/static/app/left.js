var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var username=cp.get('username');
var tag=cp.get('tag');
Ext.define('static.app.left', {
    extend: 'Ext.panel.Panel',
    cls: 'leftpanel',
    initComponent: function () {
        this.items = [{
            xtype: 'panel',

            height: 260,
            width: 300,
            items: [{
                xtype: 'image',

                height: 128,
                width: 128,
                cls: 'image',
            }, {
                xtype: 'label',
                id:'usernam',
                cls: 'name',
                height: 128,
                width: 128,
                border: false,
                listeners:{
                	"render":function(){
                		
                        var cp = new Ext.state.CookieProvider();
                        Ext.state.Manager.setProvider(cp);
                       // alert(cp.get("username"));
                		Ext.getCmp("usernam").setText(cp.get("username"))
                	}
                }
            }, {
                xtype: 'buttongroup',
                cls: 'buttongroup',
                height: 180,

                items: [
                     {
                         xtype: 'button',
                         id:'button_mode',
                         cls: 'button_icon',
                         text:'心情',
                         listeners:{
                        	 'beforerender':function(){
                        		 Ext.Ajax.request({
                                     url: 'countmode',
                                     async: false,
                                     params: {
                                         'username': username
                                     },
                                     method: 'post',
                                     success: function (response, options) {
                                    	 var res = Ext.JSON.decode(response.responseText);
                                    	 Ext.getCmp('button_mode').setText('<h>'+res.count+'</h><p>心情</p>')
                                     }
                                 });
                        		 
                        	 }
                         },
                         handler:function(){
                        	 var right = Ext.getCmp('right');
                             //alert(right);
                             right.removeAll();
                             var home = Ext.create('static.app.homepage');
                             right.add(home);
                         }
                     }, { xtype: 'tbseparator' }, {
                         xtype: 'button',
                         id:'button_befans',
                         cls: 'button_icon',
                         listeners:{
                         'beforerender':function(){
                    		 Ext.Ajax.request({
                                 url: 'countbefans',
                                 async: false,
                                 params: {
                                     'username': username
                                 },
                                 method: 'post',
                                 success: function (response, options) {
                                	 var res = Ext.JSON.decode(response.responseText);
                                	 Ext.getCmp('button_befans').setText('<h>'+res.count+'</h><p>收听</p>')
                                 }
                             });
                         }
                    	 },
                    	 handler:function(){
                        	 var right = Ext.getCmp('right');
                             //alert(right);
                             right.removeAll();
                             var home = Ext.create('static.app.friend');
                             right.add(home);
                    	 }
                     }, { xtype: 'tbseparator' }, {
                         xtype: 'button',
                         cls: 'button_icon',
                         id:'button_fans',
                         listeners:{
                         'beforerender':function(){
                    		 Ext.Ajax.request({
                                 url: 'countfans',
                                 async: false,
                                 params: {
                                     'username': username
                                 },
                                 method: 'post',
                                 success: function (response, options) {
                                	 var res = Ext.JSON.decode(response.responseText);
                                	 Ext.getCmp('button_fans').setText('<h>'+res.count+'</h><p>听众</p>')
                                 }
                             });
                    		 
                    	 }
                         },
                         handler:function(){
                        	 var right = Ext.getCmp('right');
                             //alert(right);
                             right.removeAll();
                             var home = Ext.create('static.app.fans');
                             right.add(home);
                         }
                     }]
            }]
        }, {
            xtype: 'panel',
            height: 770,
            id:'near_rec',
            items: [{
                xtype: 'label',
                cls:'nl',
                text:'附近的人'
            },{
                xtype: 'panel',
                cls: 'nearfriend',
                width: 120,
                height: 70,
                items: [{
                    xtype: 'image',
                    width: 50,
                    height: 60,
                    cls: 'nearicon_A'
                }, {
                    xtype: 'label',
                    width: 60,
                    height: 20,
                    text: 'NA',
                    cls: 'nearname'
                }, {
                    xtype: 'button',
                    width: 50,
                    height: 30,
                    text: '收听',
                    cls: 'nearbutton'
                }],
                listeners:{
                	'beforerender':function(){
                		Ext.Ajax.request({
                            url: 'getsamepeople',
                            async: false,
                            params: {
                                'username': username,
                                'tag':tag
                            },
                            method: 'post',
                            success: function (response, options) {
                            	var res = Ext.JSON.decode(response.responseText);
                                var p = Ext.getCmp('near_rec');
                                p.removeAll();
                                Ext.Array.each(res, function (name, i, it) {
                                    if(name.name!="null"){
                                    
                                    p.add({
                                        xtype: 'panel',
                                        cls: 'panel1',
                                        border: true,
                                        width: 300,
                                        items: [{
                                            xtype: 'panel',
                                            cls: 'nearfriend',
                                            width: 120,
                                            height: 70,
                                            items: [{
                                                xtype: 'image',
                                                width: 50,
                                                height: 60,
                                                cls: 'nearicon_A'
                                            }, {
                                                xtype: 'label',
                                                width: 60,
                                                height: 20,
                                                text: name.username,
                                                cls: 'nearname',
                                                listeners: {
                                                  	 'render': function () {
                                                   		 Ext.fly(this.el).on('click',function (e, t) {
                                                   			 var right = Ext.getCmp('right');
                                                             // alert(right);
                                                   			var cp = new Ext.state.CookieProvider();
                                                   			Ext.state.Manager.setProvider(cp);
                                                   			alert(name.username)
                                                   			cp.set("visitor",name.username);
                                                              right.removeAll();
                                                              var home = Ext.create('static.app.whosepage');
                                                              right.add(home);
                                                   		 });
                                                   	 }
                                                    }
                                            }, {
                                                xtype: 'button',
                                                width: 50,
                                                height: 30,
                                                text: '收听',
                                                cls: 'nearbutton',
                                                handler:function(){
                                                	
                                                	
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
                                                    var con=username+"在"+d+"成为您的新听众";
                                                    Ext.Ajax.request({
                                                        url: 'addfriend',
                                                        async: false,
                                                        params: {
                                                            'username': username,
                                                            'friendname':name.username,
                                                            'content':con,
                                                            'datetime':d
                                                        },
                                                        method: 'post',
                                                        success: function (response, options) {
                                                        	Ext.Msg.alert('消息', '您已成为对方的新听众');
                                                        }
                                                    });
                                                }
                                            }]
                                        }]
                                    }
                                    );}
                                })
                                
                                
                            }
                        });
                	}
                }
            }]
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})