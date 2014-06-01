var publish = function () {
    
}
var x = 0;
Ext.define('app.view.homepage', {
    extend: 'Ext.panel.Panel',
    collapsible: true,
    id: 'homepage',
    title: '我的首页',
    listeners:{
        'beforerender': function () {
            Ext.getCmp('button_publish').setDisabled(true);
        }
    },
    initComponent: function () {
        this.items = [{
            xtype: 'panel',
            cls: 'homepage',
            height:1000,
            items: [{
                xtype: 'textarea',
                name: 'mood',
                id: 'mode',
                width: 640,
                cls: 'publish',
                listeners: {
                    'focus': function () {
                        Ext.getCmp('button_publish').setDisabled(false);
                    }
                }
            }, {
                xtype: 'button',
                text: '发布',
                id:'button_publish',
                cls: 'button_publish',
                handler: function () {

                    var p = Ext.getCmp('publish_main');
                    var date = new Date();
                    var m = date.getMonth() + 1
                    var d = '发布于' + m+ '月' + date.getDate() + '日 ' + date.getHours() + ':' + date.getMinutes();
                    p.insert(0, {
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
                                        html: Ext.getCmp('mode').getValue()
                                    }]
                                }
                                ]
                            }, {
                                xtype: 'toolbar',
                                cls: 'friend_comment',
                                border: false,
                                items: [{
                                    xtype: 'label',
                                    text: d
                                }, '->', {
                                    xtype: 'label',
                                    id:'comm',
                                    text: '评论(' + x + ')',
                                    listeners: {
                                        'render': function () {
                                            Ext.fly(this.el).on('click',
                                                function (e, t) {
                                                    Ext.create('Ext.window.Window', {
                                                        layout: 'fit',
                                                        bodyStyle: 'background-color:#D7F2FA;',
                                                        modal: true,
                                                        height: 600,
                                                        autoScroll:true,
                                                        title:'评论列表',
                                                        width: 685,
                                                        items: [{
                                                            xtype: 'panel',
                                                            
                                                            width: 700,
                                                            height: 175,
                                                            items: [{
                                                                xtype: 'textfield',
                                                                id:'comtext',
                                                                width: 640,
                                                                height: 30,
                                                                cls: 'comlist'
                                                            }, {
                                                                xtype: 'button',
                                                                text: '评论',
                                                                width: 60,
                                                                height: 20,
                                                                cls: 'combutton',
                                                                handler: function () {
                                                                    var l = Ext.getCmp('comwindow');
                                                                    
                                                                    l.insert(0, {
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
                                                                                        html: Ext.getCmp('comtext').getValue()
                                                                                    }]
                                                                                }
                                                                                ]
                                                                            }, {
                                                                                xtype: 'toolbar',
                                                                                cls: 'friend_comment',
                                                                                border: false,
                                                                                items: [{
                                                                                    xtype: 'label',
                                                                                    text: d
                                                                                }, '->', {
                                                                                    xtype: 'label',
                                                                                    
                                                                                    text: '回复(' + x + ')',
                                                                                    listeners: {
                                                                                        
                                                                                    }
                                                                                }]
                                                                            }]
                                                                    }

                                                                    );
                                                                    
                                                                    
                                                                    Ext.getCmp('comm').setText("")
                                                                }
                                                            }, {
                                                                xtype: 'panel',
                                                                id:'comwindow'
                                                            }]
                                                        }]
                                                    }).show();
                                                });

                                        }
                                    }
                                }]
                            }]
                    }
                    );
                    x = x + 1;
                }
            }, {
                xtype: 'panel',
                id:'publish_main'
                
            }]
        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    }
})