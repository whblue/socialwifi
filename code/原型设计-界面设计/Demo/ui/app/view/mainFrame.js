Ext.Loader.setConfig({ enabled: true });
Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        requires:[
            'app.view.head',
            'app.view.left',
            'app.view.right'
        ],
        id: 'frame',
        cls:'frame',
        border: false,
        autoScroll: true,
        listeners: {
            'beforerender': function () {
                var cp = new Ext.state.CookieProvider();
                Ext.state.Manager.setProvider(cp);
                var username = cp.get("username");
                if (username == null) {
                    Ext.create('Ext.window.Window', {
                        layout: 'fit',
                        bodyStyle: 'background-color:#D7F2FA;',
                        modal: true,
                        height: 210,
                        autoScroll: true,
                        title: '登陆',
                        width: 300,
                        items: [{
                            xtype: 'form',
                            id:'login',
                            height: 210,
                            width: 300,
                            items: [{
                                xtype: 'textfield',
                                cls:'login',
                                width: 240,
                                fieldLabel: '用户名',
                                labelWidth: 55,
                                name: 'username',
                            }, {
                                xtype: 'textfield',
                                width: 240,
                                fieldLabel: '密码',
                                cls: 'logi',
                                labelWidth: 55,
                                inputType: 'password',
                                name: 'password',
                            }, {
                                xtype: 'button',
                                width: 120,
                                text:'登录',
                                cls: 'log',
                                handler:function(){
                                    var t=Ext.getCmp('login').getForm();
                                    if (t.isValid()){
                                        Login.getForm().submit({
                                            clientValidation: true,
                                            waitMsg:'请稍后',
                                            waitTitle:'正在验证登录',
                                            url:'../logon.action',
                                            method:'post',
                                            success : function(form, action) {  
                                                Ext.MessageBox.wait('请等待', '页面跳转中……');
                                                window.location.href = 'index.jsp'; 
                                                Ext.Msg.alert(action.result.msg);    
                                                var cp = new Ext.state.CookieProvider();
                                                Ext.state.Manager.setProvider(cp);
                                                cp.set('username',action.result.username);
                    
                                            },  
                                            failure : function(form, action) {  
                                                Ext.Msg.alert('系统错误',action.result.msg);
                	 
                                            }  
                                        });
                                    }
                                }
                                
                            }]
                        }]
                       
                    }).show();
                }
            }
        },
        items: [
            Ext.create('app.view.head') ,
            {
                xtype: 'panel',
                cls: 'main',
                items: [
                    Ext.create('app.view.left'),
                    Ext.create('app.view.right')
                ]
            },
            {
                xtype: 'box',
                cls: 'reference',
                frame: true,
                html: '<h2>copyright @whblue version2.0</h2>'
            }
        ],
        renderTo:Ext.getBody()
    })
});