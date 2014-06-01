Ext.Loader.setConfig({ enabled: true });
Ext.onReady(function () {
    Ext.create('Ext.panel.Panel', {
        requires: [
            'static.app.head',
            'static.app.left',
            'static.app.right'
        ],
        id: 'frame',
        cls:'frame',
        border: false,
        autoScroll: true,
     
        items: [
            Ext.create('static.app.head') ,
            {
                xtype: 'panel',
                cls: 'main',
                items: [
                    Ext.create('static.app.left'),
                    Ext.create('static.app.right')
                ]
            },
            {
                xtype: 'box',
                cls: 'reference',
                frame: true,
                html: '<h2>copyright @whblue version2.0</h2>'
            }
        ],
        listeners: {
            'beforerender': function () {
                //alert('登录')
                var cp = new Ext.state.CookieProvider();
                Ext.state.Manager.setProvider(cp);
                var username = cp.get("username");
                if (username == null) {
                    Ext.create('Ext.window.Window', {
                        id: 'lo',
                        layout: 'fit',
                        bodyStyle: 'background-color:#D7F2FA;',
                        modal: true,
                        height: 210,
                        autoScroll: true,
                        title: '登陆',
                        width: 300,
                        items: [{
                            xtype: 'form',
                            id: 'login',
                            height: 210,
                            width: 300,
                            items: [{
                                xtype: 'textfield',
                                cls: 'login',
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
                                xtype: 'textfield',
                                width: 240,
                                fieldLabel: '路由器',
                                readOnly:true,
                                cls: 'logi',
                                labelWidth: 55,
                                value:'route1',
                                name: 'route',
                            }, {
                                xtype: 'button',
                                width: 120,
                                text: '登录',
                                cls: 'log',
                                handler: function () {
                                    var t = Ext.getCmp('login').getForm();
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
                                                alert(action.result.username);
                                                var t = action.result.username
                                                cp.set('username', action.result.username);
                                                Ext.getCmp('usernam').setText('Annie');
                                                Ext.getCmp('lo').hide();
                                            },
                                            failure: function (form, action) {
                                                Ext.Msg.alert('系统错误', action.result.msg);

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
        renderTo:Ext.getBody()
    })
});