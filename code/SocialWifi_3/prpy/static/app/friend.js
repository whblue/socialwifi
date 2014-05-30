var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var username=cp.get('username');
var ownername=cp.set("owner");
var sta = Ext.create('Ext.data.Store', {
    fields: ['id', 'name'],
    autoDestory:true,
    data : [
        {"id":"1", "name":"best","value":5},
        {"id":"2", "name":"common","value":10},
        {"id":"3", "name":"family","value":0},
        {"id":"4", "name":"never","value":100}
    ]
});

function getfe(name){
	if(name=='best')
		return 5;
	else if(name=='common')
		return 10;
	else if(name=='family')
		return 0;
	else 
		return 100;
}
Ext.define('static.app.friend', {
    extend: 'Ext.panel.Panel',
    id: 'friend',
    title: '我的收听',
    height: 1000,
    border: true,
    width: 685,
    items: [{
        xtype: 'panel',
        id:'frilist',
        items: [{
            xtype: 'panel',
            cls: 'panel_f',
            id:'panel_f',
            height: 1000,
            border: true,
            width: 685,
            /*items: [{
                xtype: 'panel',
                cls: 'friend_t',
                height: 90,
                width: 660,
                items: [{
                    xtype: 'panel',
                    
                    height: 50,
                    width: 660,
                    border: true,
                    
                }, {
                    xtype: 'toolbar',
                    cls: 'friend_comment',
                    border: false,
                    width: 660,
                    items: [{
                        xtype: 'button',
                        text: '设置分组',
                        handler: function () {
                            Ext.Msg.prompt('分组', '请输入分组名称', function (btn, text) {
                                if (btn == 'ok') {
                                    // process text value and close...

                                }
                            });
                        }
                    }, '-', {
                        xtype: 'button',
                        text: '设置备注',
                        handler: function () {
                            Ext.Msg.prompt('备注', '请输入备注名称', function (btn, text) {
                                if (btn == 'ok') {
                                    // process text value and close...
                                }
                            });
                        }
                    }, '-', {
                        xtype: 'button',
                        text: '取消关注',
                        handler: function () {
                            Ext.Msg.alert('取消关注', '已取消');
                        }
                    }]
                }]
                }
                
            ],*/
            listeners: {
                'beforerender': function () {
                    Ext.Ajax.request({
                        url: 'friend',
                        timeout: 60000,
                        method: 'post',
                        params:{
                        	"username":username
                        },
                        success: function (response, options) {
                            // alert(response.responseText)
                            var res = Ext.JSON.decode(response.responseText);
                            var t = Ext.getCmp('panel_f');
                            Ext.Array.each(res, function (name, i, it) {

                            	if(name.friendname!=username)
                                t.add(0,{
                                    xtype: 'panel',
                                    cls: 'friend_t',
                                    height: 90,
                                    width: 660,
                                    items: [{
                                        xtype: 'panel',
                    
                                        height: 50,
                                        width: 660,
                                        border: true,
                                        items: [{
                                            xtype: 'image',
                                            height: 50,
                                            width: 40,
                                            cls: 'friendimage'
                                        }, {
                                            xtype: 'panel',
                                            height: 50,
                                            width: 620,
                                            cls: 'friendmode',
                                            items: [{
                                                xtype: 'panel',
                                                height: 20,
                                                width: 620,
                                                cls: 'panel_h',
                                                html: '<h>'+name.friendname+'</h>'
                                            }, {
                                                xtype: 'label',
                                                id: 'fri' + name.friendname,
                                                height: 30,
                                                width: 620,
                                                cls: 'panel_text',
                                                text:  name.authorityname
                                            }]
                                        }
                                        ]
                                    }, {
                                        xtype: 'toolbar',
                                        cls: 'friend_comment',
                                        border: false,
                                        width: 660,
                                        items: [{
                                            xtype: 'button',
                                            text: '设置分组',
                                            handler: function () {
                                            	
                                            	var team=Ext.create('Ext.window.Window', {
                                            		id:'cor',
                                            	    title: '修改分组',
                                            	    height: 200,
                                            	    width: 300,
                                            	    bodyStyle: 'background-color:#D7F2FA;',
                                            	    modal: true,
                                            	    autoScroll:true,
                                            	    layout: 'fit',
                                            	    items:[{
                                            	    	xtype:'panel',
                                            	    	cls:'teamcls',
                                            	    	width:190,
                                            	    	height:70,
                                            	    	items:[{
                                            	            xtype: 'combo',
                                            	            width:180,
                                            	           // cls:'teambox',
                                            	            //name: 'teambox',
                                            	            id:'teambox2',
                                            	            margin: '5 5 0 0',
                                            	            fieldLabel: '分组名',
                                            	            labelCls:'teamlabel',
                                            	            labelWidth:50,
                                            	            store: sta,
                                            	            queryMode: 'local',
                                            	            displayField: 'name',
                                            	            valueField: 'name',
                                            	        }]
                                            	    }],
                                            	    buttons: [
                                            	              { text: '确定',
                                            	            	handler:function(){
                                            	            		team.hide();
                                            	            		var old=name.authorityname;
                                            	            		var nw=Ext.getCmp('teambox2').getValue( );
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
                                            	            		if(old!=nw)
                                            	            		Ext.Ajax.request({
                                            	                        url: 'updatefriend',
                                            	                        async: false,
                                            	                        params: {
                                            	                            'friendname': name.friendname,
                                            	                            'username':username,
                                            	                            'flag':0,
                                            	                            'authority':nw
                                            	                        },
                                            	                        method: 'post',
                                            	                        success: function (response, options) {
                                            	                        	Ext.getCmp('fri' + name.friendname).setText(nw);
                                            	                        	Ext.Ajax.request({
                                                    	                        url: 'insert_important_message',
                                                    	                        async: false,
                                                    	                        params: {
                                                    	                            'receivename': name.friendname,
                                                    	                            'username':username,
                                                    	                            'content':"您的分组已被改变为"+nw+",资费变为"+getfe(nw),
                                                    	                            'datetime':d
                                                    	                        },
                                                    	                        method: 'post',
                                                    	                        success: function (response, options) {
                                                    	                        	
                                                    	                        }
                                                    	                    });  
                                            	                        }
                                            	                    });
                                            	            	}
                                            	              },
                                            	              { text: '取消'}
                                            	            ]
                                            	    }).show();
                                            }
                                        },'-', {
                                            xtype: 'button',
                                            text: '取消关注',
                                            handler: function () {
                                            	var old= name.authorityname;
                                                Ext.Msg.alert('取消关注', '已取消');
                                                Ext.Ajax.request({
                        	                        url: 'deletefriend',
                        	                        async: false,
                        	                        params: {
                        	                            'friendname': name.friendname,
                        	                            'username':username
                        	                        },
                        	                        method: 'post',
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
                                	            		if(old!=nw)
                                	            		Ext.Ajax.request({
                                	                        url: 'updatefriend',
                                	                        async: false,
                                	                        params: {
                                	                            'friendname': name.friendname,
                                	                            'username':username,
                                	                            'flag':0,
                                	                            'authority':nw
                                	                        },
                                	                        method: 'post',
                                	                        success: function (response, options) {
                                	                        	Ext.getCmp('fri' + name.friendname).setText(nw);
                                	                        	Ext.Ajax.request({
                                        	                        url: 'insert_important_message',
                                        	                        async: false,
                                        	                        params: {
                                        	                            'receivename': name.friendname,
                                        	                            'username':username,
                                        	                            'content':"小样~不会卖萌被删了吧",
                                        	                            'datetime':d
                                        	                        },
                                        	                        method: 'post',
                                        	                        success: function (response, options) {
                                        	                        	Ext.Msg.show({
                                                                 		     title:'消息提示?',
                                                                 		     msg: "已经成功取消",
                                                                 		     buttons: Ext.Msg.YESNOCANCEL,
                                                                 		     icon: Ext.Msg.QUESTION
                                                                     	 }); 
                                        	                        }
                                        	                    });  
                                	                        }
                                	                    });
                        	                        	
                        	                        }
                        	                    }); 
                                            }
                                        } ,'-', {
                                            xtype: 'button',
                                            text: '发送消息',
                                            handler: function () {
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
                                            	Ext.Msg.prompt('消息', '说点啥:', function(btn, text){
                                            	    if (btn == 'ok'){
                                            	        // process text value and close...
                                            	    	Ext.Ajax.request({
                                                            url: 'insertmessage',
                                                            async: true,
                                                            method: 'post',
                                                            params:{
                                                            	"username":username,
                                                            	"receivename":name.friendname,
                                                            	"content":username+"说："+text,
                                                            	"datetime":d
                                                            },
                                                            success: function (response, options) {
                                                            	
                                                            }
                                                         });
                                            	    }
                                            	});
                                                 
                                            }
                                        }]
                                    }]
                                })
                                // alert(map.getMap());

                                //marker.setMap(map.getMap());
                            })

                        }
                    });
                }
            }
        }]

    }]
})