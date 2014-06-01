Ext.define('app.view.left', {
    extend: 'Ext.panel.Panel',
    cls: 'leftpanel',
    initComponent: function () {
        this.items = [{
            xtype: 'panel',

            height: 230,
            width: 300,
            items: [{
                xtype: 'image',

                height: 128,
                width: 128,
                cls: 'image',
            }, {
                xtype: 'panel',
                cls: 'name',
                height: 128,
                width: 128,
                border: false,
                html: '<h>Annie</h>'
            }, {
                xtype: 'buttongroup',
                cls: 'buttongroup',
                height: 180,

                items: [
                     {
                         xtype: 'button',
                         cls: 'button_icon',
                         text: '<h>102</h><p>心情</p>'
                     }, { xtype: 'tbseparator' }, {
                         xtype: 'button',
                         cls: 'button_icon',
                         text: '<h>230</h><p>收听</p>'
                     }, { xtype: 'tbseparator' }, {
                         xtype: 'button',
                         cls: 'button_icon',
                         text: '<h>709</h><p>听众</p>'
                     }]
            }]
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})