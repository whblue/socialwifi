Ext.define('static.app.left', {
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
                xtype: 'label',
                id:'usernam',
                cls: 'name',
                height: 128,
                width: 128,
                border: false
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
        }, {
            xtype: 'panel',
            height: 770,
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
                }]
            }]
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})