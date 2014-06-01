Ext.define('app.view.friend', {
    extend: 'Ext.panel.Panel',
    id: 'friend',
    title: '我的好友',
    height: 1000,
    border: true,
    width: 685,
    items: [{
        xtype: 'panel',
        id:'frilist',
        items: [{
            xtype: 'panel',
            cls: 'panel_f',
            height: 1000,
            border: true,
            width: 685,
            items: [{
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
                            html: '<h>Lucy</h>'
                        }, {
                            xtype: 'panel',
                            height: 30,
                            width: 620,
                            cls: 'panel_text',
                            html: '分组'
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
                
                ]
        }]

    }]
})