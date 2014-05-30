Ext.define('static.app.login', {
    extend: 'Ext.panel.Panel',
    border: false,
    id: 'login',
    cls: 'loginframe',
    width: 1000,
    height: 500,
    layout: {
        type: 'hbox',       
        align: 'stretch',    
        padding: 5
    },
    items: [{
        xtype: 'panel',
        width: 600,
        height:500
    },{
        xtype: 'form',
        id:'logini',
        cls:'loginform',
        width:400,
        height: 500,
        items: [{
            id: 'p1',
            xtype: 'textfield',
            width: 135,
            height: 32,
            cls: 'username',
            name: 'username',
            fieldCls: 'user'
        }, {
            id: 'p2',
            xtype: 'textfield',
            inputType: 'password',
            width: 135,
            height: 32,
            cls: 'password',
            name: 'password',
            fieldCls: 'pas',
            style: {
                background: 'url(./extjs4/resources/image/pwd.png) no-repeat left center',
                paddingLeft: '32px'
            }
        }, {
            xtype: 'button',
            text: '注册',
            cls: 'logi',
            height: 32,
            width: 135,
            action: 'login',
            handler: function () {
            	var t = Ext.getCmp('logini').getForm();
                if (t.isValid()) {
                    t.submit({
                        clientValidation: true,
                        waitMsg: '请稍后',
                        waitTitle: '注册中',
                        url: 'registeruser',
                        method: 'post',
                        success: function (form, action) {
                            Ext.MessageBox.wait('请等待', '注册中');
                            var url=window.location.href;
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
                                url: 'insertstatus',
                                async: false,
                                method: 'post',
                                params:{
                                	"routeid":url.slice(41),
                                	"username":Ext.getCmp("p1").getRawValue(),
                                	"datetime":d,
                                	"status":-1
                                },
                                success: function (response, options) {
                                	
                                }
                             });
                            
                            Ext.Msg.alert(action.result.msg);
                      },
                        failure: function (form, action) {
                            Ext.Msg.alert('错误', action.result.msg);
                        }
                    });
            }
        }}, {
            xtype: 'button',
            text: '登录',
            cls: 'logi',
            height: 32,
            width: 135,
            action: 'login',
            handler: function () {
            	var t = Ext.getCmp('logini').getForm();
                if (t.isValid()) {
                    t.submit({
                        clientValidation: true,
                        waitMsg: '请稍后',
                        waitTitle: '正在验证登录',
                        url: 'login',
                        method: 'post',
                        success: function (form, action) {
                            Ext.MessageBox.wait('请等待', '密码校验……');

                            Ext.Msg.alert(action.result.msg);
                            var cp = new Ext.state.CookieProvider();
                            Ext.state.Manager.setProvider(cp);
                            cp.set('userid', action.result.userid);
                            cp.set('username', action.result.username);
                            cp.set('visitor', action.result.username);
                            cp.set('tag', "null");
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
                            
                            var url=window.location.href;
                            if(action.result.msg=='Success')
                        	{
                            	cp.set('routeid',url.slice(41));
                            	Ext.Ajax.request({
                                    url: 'getfee',
                                    async: false,
                                    method: 'post',
                                    params:{
                                    	"routeid":url.slice(41),
                                    	"username":action.result.username
                                    },
                                    success: function (response, options) {
                                    	var res = Ext.JSON.decode(response.responseText);
                                    	cp.set('start', new Date());
                                    	//alert(res.count);
                                    	cp.set('count', res.count);
                                    	//alert(res.owner);
                                    	cp.set('own',res.owner);
                                    	//alert(res.content);
                                    	Ext.Msg.show({
                                   	     title:'接受安排?',
                                   	     msg: res.content,
                                   	     closable:false,
                                   	     buttons: Ext.Msg.YESNO,
                                   	     icon: Ext.Msg.QUESTION,
                                   	     fn: function(btn, text)
                                   	     {
                                   	    	cp.set("connect", btn);
                                   	    	//alert(btn);
                                   	    	if(btn=='yes')
                                   	    	{
                                   	    		Ext.Ajax.request({
                                                    url: 'updatestatus',
                                                    async: false,
                                                    method: 'post',
                                                    params:{
                                                    	"routeid":url.slice(41),
                                                    	"status":1,
                                                    	"username":action.result.username,
                                                    	"datetime":d
                                                    },
                                                    success: function (response, options) {
                                                    	
                                                    	if(action.result.username!=res.owner)
                                                    	{
                                                    		Ext.Ajax.request({
                                                                url: 'addfriend',
                                                                async: false,
                                                                params: {
                                                                    'username': action.result.username,
                                                                    'friendname':res.owner,
                                                                    'content':action.result.username+"在"+d+"收听了您",
                                                                    'datetime':d
                                                                },
                                                                method: 'post',
                                                                success: function (response, options) {
                                                                	Ext.Ajax.request({
                                                                        url: 'insertmessage',
                                                                        async: true,
                                                                        method: 'post',
                                                                        params:{
                                                                        	"username":action.result.username,
                                                                        	"receivename":res.owner,
                                                                        	"content":action.result.username+"在"+d+"使用了您的"+url.slice(41)+"号路由器",
                                                                        	"datetime":d
                                                                        },
                                                                        success: function (response, options) {
                                                                        	window.location.href='index.html';
                                                                        }
                                                                     });
                                                                }
                                                            });
                                               	    		
                                                    	}
                                                    	else 
                                                    		window.location.href='index.html';
                                                    }
                                                 });
                                   	    		
                                   	    	}
                                   	    	else{
                                   	    		window.location.href='index.html';
                                   	    	}
                                   	    	 
                                         }
                                        });
                                   	    	
                                   	     }                                         
                                   	});
                                    }
                         
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('系统错误', action.result.msg);
                        }
                    });
            }}
        }]
    }],


    renderTo: Ext.getBody()
})
