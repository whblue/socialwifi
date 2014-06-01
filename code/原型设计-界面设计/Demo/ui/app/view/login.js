Ext.define('app.view.login', {
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
                alert("wefwefe");
                var Login = Ext.getCmp('login');
                if (Login.getForm().isValid()) {
                    Login.getForm().submit({
                        clientValidation: true,
                        waitMsg: '请稍后',
                        waitTitle: '正在验证登录',

                        success: function (form, action) {
                            Ext.MessageBox.wait('请等待', '页面跳转中……');
                            window.location.href = 'index.html';
                            Ext.Msg.alert(action.result.msg);
                            var cp = new Ext.state.CookieProvider();
                            Ext.state.Manager.setProvider(cp);
                            var us = Ext.getCmp('p1');
                            cp.set('username', us.getValue());

                        },
                        failure: function (form, action) {
                            // Ext.Msg.alert('系统错误', action.result.msg);

                        }
                    });

                };
            }
        }, {
            xtype: 'button',
            text: '登录',
            cls: 'logi',
            height: 32,
            width: 135,
            action: 'login',
            handler: function () {
                alert("wefwefe");
                var Login = Ext.getCmp('login');
                if (Login.getForm().isValid()) {
                    Login.getForm().submit({
                        clientValidation: true,
                        waitMsg: '请稍后',
                        waitTitle: '正在验证登录',

                        success: function (form, action) {
                            Ext.MessageBox.wait('请等待', '页面跳转中……');
                            window.location.href = 'index.html';
                            Ext.Msg.alert(action.result.msg);
                            var cp = new Ext.state.CookieProvider();
                            Ext.state.Manager.setProvider(cp);
                            var us = Ext.getCmp('p1');
                            cp.set('username', us.getValue());

                        },
                        failure: function (form, action) {
                            // Ext.Msg.alert('系统错误', action.result.msg);

                        }
                    });

                };
            }
        }]
    }],


    renderTo: Ext.getBody()
})
