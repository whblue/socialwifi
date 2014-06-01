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
            text: '<h>账号管理</h>'
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})