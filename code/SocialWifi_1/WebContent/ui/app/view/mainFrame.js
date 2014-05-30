
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "路由器一", leaf: true },
            { text: "路由器二", leaf: true },
            { text: "路由器三", leaf: true },
            { text: "路由器四", leaf: true }
        ]
    }
});
var authority = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            {
                text: "密友", leaf: true
            },
            {
                text: "打招呼", expanded: true
            },
            { text: "陌生人", leaf: true }
        ]
    }
});
var friendstore = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            {
                text: "密友", expanded: true, children: [
                    { text: "Lucy", leaf: true },
                    { text: "Lily", leaf: true }
                ]
            },
            {
                text: "打招呼", expanded: true, children: [
                  { text: "Ivy", leaf: true },
                  { text: "Algebra", leaf: true }
                ]
            },
            {
                text: "陌生人", expanded: true, children: [
                    { text: "John", leaf: true },
                    { text: "Lee", leaf: true }
                ]
            }
        ]
    }
});
var fee = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            {
                text: "本月消费", leaf: true, children: [
                    { text: "本地路由器", leaf: true },
                    { text: "外用路由", leaf: true }
                ]
            },
            {
                text: "计费模式", expanded: true, children: [
                  { text: "优惠模式", leaf: true },
                  { text: "普通模式", leaf: true }
                ]
            }
        ]
    }
});
var states = Ext.create('Ext.data.Store', {
    fields: ['name'],
    data: [
        { "name": "购入路由" },
        { "name": "分享流量" },
        { "name": "提高收费" }

    ]
});
Ext.define('app.view.mainFrame', {
    extend: 'Ext.panel.Panel',

    id: 'frame',
    border: false,
    autoScroll: true,
    initComponent: function () {
        this.items = [{
            id: 'desk',
            region: 'north',
            border: false,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                cls: 'head',
                fixed: true,
                x: 0,
                y: 0,

                items: [{
                    xtype: 'button',
                    cls: 'button_home',
                    text: '<h>demo</h>'
                }, {
                    xtype: 'splitbutton',
                    cls: 'button_text',
                    text: '<h>我的首页</h>'
                }, {
                    xtype: 'splitbutton',
                    cls: 'button_text',
                    text: '<h>我的路由</h>'
                }, {
                    xtype: 'splitbutton',
                    cls: 'button_text',
                    text: '<h>我的好友</h>'
                }, {
                    xtype: 'splitbutton',
                    cls: 'button_text',
                    text: '<h>历史账单</h>'
                }, {
                    xtype: 'textfield',
                    cls: 'search'
                }, {
                    xtype: 'splitbutton',
                    cls: 'button_text',
                    text: '<h>账号管理</h>'
                }]
            }],
            items: [{
                xtype: 'panel',
                cls: 'main',
                shadow: 'frame',
                shadowOffset: 24,
                height: 1000,
                items: [{

                    xtype: 'panel',
                    cls: 'leftpanel',
                    shadow: true,
                    shadowOffset: 3,
                    height: 1000,
                    items: [{
                        region: 'north',
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
                        }],
                    }, {
                        xtype: 'panel',
                        cls: 'acpanel',
                        height: 500,
                        defaults: {
                            // applied to each contained panel
                            bodyStyle: 'padding:15px'
                        },
                        layout: {
                            // layout-specific configs go here
                            type: 'accordion',
                            titleCollapse: false,
                            animate: true,
                            activeOnTop: true
                        },
                        items: [{
                            title: '我的首页',
                            xtype: 'treepanel',
                            rootVisible: false,
                            store: authority
                        }, {
                            title: '我的好友',
                            xtype: 'treepanel',
                            rootVisible: false,
                            store: friendstore
                        }, {
                            title: '路由管理',
                            xtype: 'treepanel',
                            rootVisible: false,
                            store: store
                        }, {
                            title: '历史账单',
                            xtype: 'treepanel',
                            rootVisible: false,
                            store: fee
                        }]
                    }]
                }, {

                    xtype: 'panel',
                    cls: 'rightpanel',
                    height: 1000,
                    items: [{
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
                            xtype: 'image',
                            width: 502,
                            height: 200,
                            cls: 'routeimage'
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
                                    id:'start',
                                    name: 'startDate',
                                    fieldLabel: '日期',
                                    value: '11/27/2013',
                                    margin: '0 5 0 0',
                                    allowBlank: false,
                                    listeners: {
                                        select: {
                                            fn: function(){
                                            	var date=Ext.getCmp('start').getValue();
                                            	Ext.Ajax.request({
                                            	    url: 'http://localhost:8080/SocialWifi_1/fee',
                                            	    params: {
                                            	        date:date
                                            	    },
                                            	    success: function(response){
                                            	        
                                            	        obj = Ext.JSON.decode(response.responseText);
                                            	        Ext.getCmp('last').setValue(obj.last);
                                            	        Ext.getCmp('obtain').setValue(obj.obtain);
                                            	        
                                            	        Ext.getCmp('remain').setValue(obj.remain);
                                            	        Ext.getCmp('used').setValue(obj.used);
                                            	        
                                            	        /*var obtain=text.obtain;
                                            	        alert(obtain+"wfwefw");*/
                                            	    }
                                            	});
                                            }
                                        }
                                    }
                                }, {
                                    xtype: 'textfield',
                                    id:'last',
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
                                    id:'used',
                                    fieldLabel: '已使用流量',
                                    readOnly: true,
                                    margin: '5 5 0 0',
                                    allowBlank: false
                                }, {
                                    xtype: 'textfield',
                                    value: '40M',
                                    id:'remain',
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
                                    id:'obtain',
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

                    }]

                }]

            }, {
                xtype: 'box',
                cls: 'reference',
                frame: true,
                html: '<h2>copyright @whblue version1.0</h2>'
            }]
        }];
        this.callParent();
        this.renderTo = Ext.getBody();
    }

})