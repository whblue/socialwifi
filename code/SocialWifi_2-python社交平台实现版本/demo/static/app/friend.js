Ext.define('static.app.friend', {
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
            id:'panel_f',
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
                            xtype: 'label',
                            id:'fri',
                            height: 30,
                            width: 620,
                            cls: 'panel_text',
                            text: '分组'
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
                
            ],
            listeners: {
                'beforerender': function () {
                    Ext.Ajax.request({
                        url: 'friend',
                        timeout: 60000,
                        method: 'post',
                        success: function (response, options) {
                            // alert(response.responseText)
                            var res = Ext.JSON.decode(response.responseText);
                            var t = Ext.getCmp('panel_f');
                            Ext.Array.each(res, function (name, i, it) {

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
                                                html: '<h>'+name.friendname+'</h>'
                                            }, {
                                                xtype: 'label',
                                                id: 'fri' + name.friendid,
                                                height: 30,
                                                width: 620,
                                                cls: 'panel_text',
                                                text:  name.authorityname
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
                                                        alert(text);
                                                        Ext.getCmp('fri' + name.friendid).setText(text);
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