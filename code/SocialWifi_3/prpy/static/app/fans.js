var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var username=cp.get('username');
var ownername=cp.set("owner");
var sta = Ext.create('Ext.data.Store', {
    fields: ['id', 'name'],
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

Ext.define('static.app.fans', {
    extend: 'Ext.panel.Panel',
    id: 'fans',
    title: '我的听众',
    height: 1000,
    border: true,
    width: 685,
    items: [{
        xtype: 'panel',
        id:'fanslist',
        items: [{
            xtype: 'panel',
            cls: 'panel_f',
            id:'panel_f1',
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
                        url: 'fan',
                        timeout: 60000,
                        method: 'post',
                        params:{
                        	"username":username
                        },
                        success: function (response, options) {
                            // alert(response.responseText)
                            var res = Ext.JSON.decode(response.responseText);
                            var t = Ext.getCmp('panel_f1');
                            Ext.Array.each(res, function (name, i, it) {

                            	if(name.ownername!=username)
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
                                                html: '<h>'+name.ownername+'</h>'
                                            }, {
                                                xtype: 'label',
                                                id: 'fan' + name.ownername,
                                                height: 30,
                                                width: 620,
                                                cls: 'panel_text',
                                                text:  name.ownerauthority
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
                                            	if(Ext.getCmp('teamwindow')==undefined)
                                            	var team=Ext.create('Ext.window.Window', {
                                            	    title: '修改分组',
                                            	    id:'teamwindow',
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
                                            	            id:'teambox3',
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
                                            	            		var old= name.ownername;
                                            	            		var nw=Ext.getCmp('teambox3').getValue( );
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
                                            	                            'friendname': name.ownername,
                                            	                            'username':username,
                                            	                            'flag':1,
                                            	                            'authority':nw
                                            	                        },
                                            	                        method: 'post',
                                            	                        success: function (response, options) {
                                            	                        	Ext.getCmp('fan' + name.ownername).setText(nw);
                                            	                        	Ext.Ajax.request({
                                            	    	                        url: 'insert_important_message',
                                            	    	                        async: false,
                                            	    	                        params: {
                                            	    	                            'receivename': name.ownername,
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
                                            	    });
                                            	team.show();
                                            }
                                        }, '-', {
                                            xtype: 'button',
                                            text: '移除粉丝',
                                            handler: function () {
                                            	
                                                //Ext.Msg.alert('移除粉丝', '已取消');
                                            	var old= name.ownername;
                                                Ext.Ajax.request({
                        	                        url: 'deletefriend',
                        	                        async: false,
                        	                        params: {
                        	                            'friendname': name.ownername,
                        	                            'username':username,
                        	                            'flag':1
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
                                	                    Ext.Ajax.request({
                                	                        url: 'insert_important_message',
                                	                        async: false,
                                	                        params: {
                                	                            'receivename': name.ownername,
                                	                            'username':username,
                                	                            'content':"小样，被发现了吧",
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
                                        },'-', {
                                            xtype: 'button',
                                            text: '加为好友',
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
                                                var con=username+"在"+d+"成为您的新听众";
                                            	Ext.Ajax.request({
                                                    url: 'addfriend',
                                                    async: false,
                                                    params: {
                                                        'username': username,
                                                        'friendname':ownername,
                                                        'content':con,
                                                        'datetime':d
                                                    },
                                                    method: 'post',
                                                    success: function (response, options) {
                                                    	
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