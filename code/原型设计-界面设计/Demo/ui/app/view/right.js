var states = Ext.create('Ext.data.Store', {
    fields: ['name'],
    data: [
        { "name": "购入路由" },
        { "name": "分享流量" },
        { "name": "提高收费" }

    ]
});
Ext.define('app.view.right', {
    extend: 'Ext.panel.Panel',
    id:'right',
    cls: 'rightpanel',
    requires: ['app.ux.GMapPanel'],
    initComponent: function () {
        this.items=[{
            cls: 'homewindow',
            id: 'homewindow',
            xtype: 'panel',
            minHeight: 245,
            minWidth: 696,
            height: 100,
            width: 696,
            border: true,
            x: 0,
            y: 0,
            collapsible: true,
            title: '我的首页',
            items: [{
                xtype: 'panel',
                cls: 'panel1',
                height: 80,
                border: true,
                width: 685,
                items: [
                    {
                        xtype: 'panel',
                        cls: 'friend_top',
                        height: 50,
                        items: [{
                            xtype: 'image',
                            height: 50,
                            width: 40,
                            cls: 'friendimage'
                        }, {
                            xtype: 'panel',
                            height: 50,
                            width: 640,
                            cls: 'friendmode',
                            items: [{
                                xtype: 'panel',
                                height: 20,
                                width: 640,
                                cls: 'panel_head',
                                html: '<h>Lucy</h>'
                            }, {
                                xtype: 'panel',
                                height: 30,
                                width: 640,
                                cls: 'panel_text',
                                html: '今天天气不错，心情也好'
                            }]
                        }
                        ]
                    }, {
                        xtype: 'toolbar',
                        cls: 'friend_comment',
                        border: false,
                        items: [{
                            xtype: 'label',
                            text: '发布于11月27日 16：27'
                        }, '->', {
                            xtype: 'label',
                            text: '评论(2)'
                        }]
                    }]
            }, {
                xtype: 'panel',
                cls: 'panel1',
                height: 80,
                border: true,
                width: 685,
                items: [
                    {
                        xtype: 'panel',
                        cls: 'friend_top',
                        height: 50,
                        items: [{
                            xtype: 'image',
                            height: 50,
                            width: 40,
                            cls: 'friendimage'
                        }, {
                            xtype: 'panel',
                            height: 50,
                            width: 640,
                            cls: 'friendmode',
                            items: [{
                                xtype: 'panel',
                                height: 20,
                                width: 640,
                                cls: 'panel_head',
                                html: '<h>Lily</h>'
                            }, {
                                xtype: 'panel',
                                height: 30,
                                width: 640,
                                cls: 'panel_text',
                                html: '今天天气太差了，心情也很郁闷'
                            }]
                        }
                        ]
                    }, {
                        xtype: 'toolbar',
                        cls: 'friend_comment',
                        border: false,
                        items: [{
                            xtype: 'label',
                            text: '发布于11月27日 18：27'
                        }, '->', {
                            xtype: 'label',
                            text: '评论(7)'
                        }]
                    }]
            }]
        }, {
            cls: 'friendwindow',
            id: 'friendwindow',
            xtype: 'panel',
            minHeight: 245,
            minWidth: 696,
            height: 100,
            width: 696,
            border: true,
            collapsible: true,
            title: '我的好友',
            layout: {
                type: 'hbox'
            },
            items: [{
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
                    text: 'A',
                    cls: 'nearname'
                }, {
                    xtype: 'button',
                    width: 50,
                    height: 30,
                    text: '收听',
                    cls: 'nearbutton'
                }]
            }, {
                xtype: 'panel',
                cls: 'nearfriend',
                width: 120,
                height: 70,
                items: [{
                    xtype: 'image',
                    width: 50,
                    height: 60,
                    cls: 'nearicon_B'
                }, {
                    xtype: 'label',
                    width: 60,
                    height: 20,
                    text: 'B',
                    cls: 'nearname'
                }, {
                    xtype: 'button',
                    width: 50,
                    height: 30,
                    text: '收听',
                    cls: 'nearbutton'
                }]
            }, {
                xtype: 'panel',
                cls: 'nearfriend',
                width: 120,
                height: 70,
                items: [{
                    xtype: 'image',
                    width: 50,
                    height: 60,
                    cls: 'nearicon_C'
                }, {
                    xtype: 'label',
                    width: 60,
                    height: 20,
                    text: 'C',
                    cls: 'nearname'
                }, {
                    xtype: 'button',
                    width: 50,
                    height: 30,
                    text: '收听',
                    cls: 'nearbutton'
                }]
            }, {
                xtype: 'panel',
                cls: 'nearfriend',
                width: 120,
                height: 70,
                items: [{
                    xtype: 'image',
                    width: 50,
                    height: 60,
                    cls: 'nearicon_D'
                }, {
                    xtype: 'label',
                    width: 60,
                    height: 20,
                    text: 'D',
                    cls: 'nearname'
                }, {
                    xtype: 'button',
                    width: 50,
                    height: 30,
                    text: '收听',
                    cls: 'nearbutton'
                }]
            }, {
                xtype: 'panel',
                cls: 'nearfriend',
                width: 120,
                height: 70,
                items: [{
                    xtype: 'image',
                    width: 50,
                    height: 60,
                    cls: 'nearicon_E'
                }, {
                    xtype: 'label',
                    width: 60,
                    height: 20,
                    text: 'E',
                    cls: 'nearname'
                }, {
                    xtype: 'button',
                    width: 50,
                    height: 30,
                    text: '收听',
                    cls: 'nearbutton'
                }]
            }]


        }, {
            cls: 'routewindow',
            id: 'routewindow',
            xtype: 'panel',
            minHeight: 245,
            minWidth: 696,
            height: 100,
            width: 696,
            border: true,
            collapsible: true,
            title: '路由管理',
            items: [{
                //xtype: 'image',
                width: 696,
                height: 205,
                //cls: 'routeimage'
                xtype: 'gmappanel',
                center: {
                    geoCodeAddr: "31.27581099999999,120.72925099999998",
                    marker: { title: '中科大苏州研究院' }
                },
                markers: [{
                    lat: 31.27578,
                    lng: 120.72920,
                    title: '可用WIFI1'

                }, {
                    lat: 30,
                    lng: 120,
                    title: '可用WIFI2'
                }]
            }]
        }, {
            cls: 'feewindow',
            id: 'feewindow',
            xtype: 'form',
            minHeight: 245,
            minWidth: 696,
            height: 100,
            width: 696,
            border: true,
            collapsible: true,
            title: '账单管理',
            items: [{
                xtype: 'fieldset',
                title: '我的账单',
                width: 680,
                height: 200,
                collapsible: true,
                cls: 'bill',
                items: [{
                    xtype: 'panel',
                    layout: {
                        type: 'hbox'
                    },
                    items: [{
                        xtype: 'datefield',

                        name: 'startDate',
                        fieldLabel: '日期',
                        value: '11/27/2013',
                        margin: '0 5 0 0',
                        allowBlank: false
                    }, {
                        xtype: 'textfield',
                        value: '5.2M',
                        name: 'route',
                        fieldLabel: '上月结余流量',
                        readOnly: true,
                        margin: '5 5 0 0',
                        allowBlank: false
                    }]
                }, {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox'
                    },
                    items: [{
                        xtype: 'textfield',
                        value: '40M',
                        name: 'fee',
                        fieldLabel: '已使用流量',
                        readOnly: true,
                        margin: '5 5 0 0',
                        allowBlank: false
                    }, {
                        xtype: 'textfield',
                        value: '40M',
                        name: 'fee',
                        fieldLabel: '结余流量',
                        readOnly: true,
                        margin: '5 5 0 0',
                        allowBlank: false
                    }]
                }, {
                    xtype: 'panel',
                    layout: {
                        type: 'hbox'
                    },
                    items: [{
                        xtype: 'textfield',
                        value: '40M',
                        name: 'fee',
                        fieldLabel: '收入流量',
                        readOnly: true,
                        margin: '5 5 0 0',
                        allowBlank: false
                    }, {
                        xtype: 'combo',
                        name: 'box',
                        margin: '5 5 0 0',
                        fieldLabel: '增加收入',
                        store: states,
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'name',
                    }]
                }]
            }]

        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})