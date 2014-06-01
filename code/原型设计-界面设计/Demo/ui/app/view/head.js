Ext.define('app.view.head', {
    extend: 'Ext.toolbar.Toolbar',
    requires:['app.view.homepage'],
    id: 'maintoolbar',
    cls:'head',
    initComponent: function () {
        this.items = [{
            xtype: 'button',
            cls: 'button_home',
            text: '<h>demo</h>'
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>我的首页</h>',
            handler: function () {
                var right = Ext.getCmp('right');
                alert(right);
                right.removeAll();
                var home = Ext.create('app.view.homepage');
                right.add(home);
            }
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>我的好友</h>',
            handler: function () {
                var right = Ext.getCmp('right');
                alert(right);
                right.removeAll();
                var home = Ext.create('app.view.friend');
                right.add(home);
            }
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>我的路由</h>',
            handler: function () {
                var right = Ext.getCmp('right');
                alert(right);
                right.removeAll();
                var home = Ext.create('app.view.route');
                right.add(home);
            }
        }, {
            xtype: 'splitbutton',
            cls: 'button_text',
            text: '<h>历史账单</h>',
            handler: function () {
                var right = Ext.getCmp('right');
                alert(right);
                right.removeAll();
                var home = Ext.create('bill');
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