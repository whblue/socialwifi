var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var username=cp.get('username');
var routeid=cp.get('routeid');
var states = Ext.create('Ext.data.Store', {
    fields: ['name'],
    data: [
        { "name": "购入路由" },
        { "name": "分享流量" },
        { "name": "提高收费" }

    ]
});
Ext.Ajax.on('beforerequest', function (conn, options) {
    if (!(/^http:.*/.test(options.url) || /^https:.*/.test(options.url))) {
        if (Ext.util.Cookies.get('csrftoken') == null) {
            Ext.util.Cookies.set('csrftoken', 'csrftoken')
        }
        if (typeof (options.headers) == "undefined") {
            options.headers = { 'X-CSRFToken': Ext.util.Cookies.get('csrftoken') };
        } else {
            options.headers['X-CSRFToken'] = Ext.util.Cookies.get('csrftoken');
        }
    }
}, this);
Ext.define('static.app.right', {
    extend: 'Ext.panel.Panel',
    id:'right',
    cls: 'rightpanel',
    requires: ['static.app.GMapPanel'],
    initComponent: function () {
        this.items=[{
            cls: 'homewindow',
            id: 'homewindow',
            xtype: 'panel',
            minHeight: 257,
            minWidth: 696,
            height: 100,
            width: 696,
            border: true,
            autoScroll:true,
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
                        ],
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
                    }],
                
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
            }],
            listeners: {
                'beforerender': function () {
                    Ext.Ajax.request({
                        url: 'pagemode',
                        async: false,
                        method: 'post',
                        params:{
                        	username:username
                        	
                        },
                        success: function (response, options) {
                           // alert(response.responseText)
                            var res = Ext.JSON.decode(response.responseText);
                            var p = Ext.getCmp('homewindow');
                            p.removeAll();
                            
                            if(res.username!="null")
                            Ext.Array.each(res, function (name, i, it) {
                                if(name.name!="null"){
                                	//alert(name.name)
                                var d = '发布于' + name.datetime;
                                p.add({
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
                                                    html:'<h>'+name.name+'</h>'
                                                }, {
                                                    xtype: 'panel',
                                                    height: 30,
                                                    width: 640,
                                                    cls: 'panel_text',
                                                    html: name.comment
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
                                            }, { xtype: 'tbfill' }, {
                                                xtype: 'label',
                                                text: '评论(1)',
                                                listeners: {
                                                    //'render': function () {
                                                    //    Ext.fly(this.el).on('click',
                                                    //        function (e, t) {
                                                    //            Ext.create('Ext.window.Window', {
                                                    //                layout: 'fit',
                                                    //                bodyStyle: 'background-color:#D7F2FA;',
                                                    //                modal: true,
                                                    //                height: 600,
                                                    //                autoScroll: true,
                                                    //                title: '评论列表',
                                                    //                width: 685,
                                                    //                items: [{
                                                    //                    xtype: 'panel',

                                                    //                    width: 700,
                                                    //                    height: 175,
                                                    //                    items: [{
                                                    //                        xtype: 'textfield',
                                                    //                        id: 'comtext',
                                                    //                        width: 640,
                                                    //                        height: 30,
                                                    //                        cls: 'comlist'
                                                    //                    }, {
                                                    //                        xtype: 'button',
                                                    //                        text: '评论',
                                                    //                        width: 60,
                                                    //                        height: 20,
                                                    //                        cls: 'combutton',
                                                    //                        handler: function () {
                                                    //                            var l = Ext.getCmp('comwindow');

                                                    //                            l.insert(0, {
                                                    //                                xtype: 'panel',
                                                    //                                cls: 'panel1',
                                                    //                                height: 80,
                                                    //                                border: true,
                                                    //                                width: 685,
                                                    //                                items: [
                                                    //                                    {
                                                    //                                        xtype: 'panel',
                                                    //                                        cls: 'friend_top',
                                                    //                                        height: 50,
                                                    //                                        items: [{
                                                    //                                            xtype: 'image',
                                                    //                                            height: 50,
                                                    //                                            width: 40,
                                                    //                                            cls: 'friendimage'
                                                    //                                        }, {
                                                    //                                            xtype: 'panel',
                                                    //                                            height: 50,
                                                    //                                            width: 640,
                                                    //                                            cls: 'friendmode',
                                                    //                                            items: [{
                                                    //                                                xtype: 'panel',
                                                    //                                                height: 20,
                                                    //                                                width: 640,
                                                    //                                                cls: 'panel_head',
                                                    //                                                html: '<h>Lucy</h>'
                                                    //                                            }, {
                                                    //                                                xtype: 'panel',
                                                    //                                                height: 30,
                                                    //                                                width: 640,
                                                    //                                                cls: 'panel_text',
                                                    //                                                html: Ext.getCmp('comtext').getValue()
                                                    //                                            }]
                                                    //                                        }
                                                    //                                        ]
                                                    //                                    }, {
                                                    //                                        xtype: 'toolbar',
                                                    //                                        cls: 'friend_comment',
                                                    //                                        border: false,
                                                    //                                        items: [{
                                                    //                                            xtype: 'label',
                                                    //                                            text: d
                                                    //                                        }, '->', {
                                                    //                                            xtype: 'label',

                                                    //                                            text: '回复(' + x + ')',
                                                    //                                            listeners: {

                                                    //                                            }
                                                    //                                        }]
                                                    //                                    }]
                                                    //                            }

                                                    //                            );


                                                    //                            Ext.getCmp('comm').setText("")
                                                    //                        }
                                                    //                    }, {
                                                    //                        xtype: 'panel',
                                                    //                        id: 'comwindow'
                                                    //                    }]
                                                    //                }]
                                                    //            }).show();
                                                    //        });

                                                    //}
                                                }
                                            }]
                                        }]
                                }
                                );}
                            })

                        }
                    });
                }
            }
        }, {
            cls: 'friendwindow',
            id: 'friendwindow',
            xtype: 'panel',
            minHeight: 257,
            minWidth: 696,
            height: 100,
            width: 696,
            border: true,
            collapsible: true,
            title: '我的好友',
            layout: {
                type: 'hbox'
            },
            listeners:{
            	'beforerender':function(){
            		Ext.Ajax.request({
                        url: 'get_same_route',
                        timeout: 60000,
                        method: 'post',
                        params:{
                        	"routeid":routeid,
                        	"username":username
                        },
                        success: function (response, options) {
                            // alert(response.responseText)
                            var res = Ext.JSON.decode(response.responseText);
                            if(res[0].username!='null')
                            {
                            	var t = Ext.getCmp('friendwindow');
                            	t.removeAll();
                                Ext.Array.each(res, function (name, i, it) {
                                	if(username!=name.username)
                                	t.insert(0,{
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
                                            text: name.username,
                                            cls: 'nearname'
                                        }, {
                                            xtype: 'button',
                                            id:'near'+name.username,
                                            width: 50,
                                            height: 30,
                                            text: '收听',
                                            cls: 'nearbutton',
                                            listeners:{
                                            	'beforerender':function(){
                                            		if(name.flag==0)
                                            		{
                                            			Ext.getCmp('near'+name.username).setText("已收听");
                                            			Ext.getCmp('near'+name.username).setDisabled(true);
                                            		}	
                                            	},
                                            	'render': function () {
                                              		 Ext.fly(this.el).on('click',function (e, t) {
                                              			 var right = Ext.getCmp('right');
                                                        // alert(right);
                                              			var cp = new Ext.state.CookieProvider();
                                              			Ext.state.Manager.setProvider(cp);
                                              			alert(name.username)
                                              			cp.set("visitor",name.username);
                                                         right.removeAll();
                                                         var home = Ext.create('static.app.whosepage');
                                                         right.add(home);
                                              		 });
                                              	 }
                                            },
                                            handler:function(){
                                            	var date = new Date();
                                                var m = date.getMonth() + 1;
                                                var t = date.getHours();
                                                var t1 = date.getMinutes();
                                                if (m < 10)
                                                    m = '0' + m;
                                                if (t < 10)
                                                    t = '0' + date.getHours();
                                                if (t1 < 10)
                                                    t1 = '0' + date.getMinutes();
                                                var d = date.getFullYear()+"-" + m+ '-' + date.getDate()+" " + t + ':' + t1+":00";
                                                var con=username+"在"+d+"成为您的新听众";
                                                Ext.Ajax.request({
                                                    url: 'addfriend',
                                                    async: false,
                                                    params: {
                                                        'username': username,
                                                        'friendname':name.username,
                                                        'content':con,
                                                        'datetime':d
                                                    },
                                                    method: 'post',
                                                    success: function (response, options) {
                                                   	 
                                                    }
                                                });
                                            }
                                        }]
                                    });
                                });
                            }
                           

                        }
                    });
            	}
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
            minHeight: 257,
            minWidth: 696,
            height: 100,
            width: 696,
            border: true,
            collapsible: true,
            title: '路由管理',
            items: [{
                width: 696,
                height: 205,
                id:'routemap',
                //cls: 'routeimage'
                xtype: 'gmappanel',
                //center: {
                //    geoCodeAddr: "31.27581099999999,120.72925099999998",
                //    //marker: { title: '中科大苏州研究院' }
                //}
                //},
                //markers: [{
                //    lat: 31.27578,
                //    lng: 120.72920,
                //    title: '可用WIFI1'

                //}]
                listeners: {
                    'beforerender': function () {
                        Ext.Ajax.request({
                            url: 'pagewifi',
                            timeout: 60000,
                            method: 'post',
                            success: function (response, options) {
                                // alert(response.responseText)
                                var res = Ext.JSON.decode(response.responseText);
                                var map = Ext.getCmp('routemap');
                                
                                map.apiReady();
                               // alert(map.getMap());
                                Ext.Array.each(res, function (name, i, it) {

                                    var point = new google.maps.LatLng(name.longitude, name.latitude);
                                    var marker = new google.maps.Marker(point);
                                    map.addMarker(point, marker, false, false);
                                    // alert(map.getMap());

                                    //marker.setMap(map.getMap());
                                })

                            }
                        });
                        //var map = Ext.getCmp('routemap');
                        ////alert(map.getMap())
                        //var point = new google.maps.LatLng();
                        //marker = new google.maps.Marker(point);
                        //map.addMarker(point, marker, false, false);
                        //alert('wenter');
                        //var map = Ext.getCmp('routemap');
                        ////alert(map.getMap()+"re");

                        //var point = new google.maps.LatLng(31.27581099999999,120.72925099999998);
                        //var marker = new google.maps.Marker(point);

                        //map.addMarker(point,marker,false,false);
                        //map.redraw();
                    }
                }
            }],
            
        }, {
            cls: 'feewindow',
            id: 'feewindow',
            xtype: 'form',
            minHeight: 257,
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
                        id:'startdate',
                        fieldLabel: '日期',                       
                        margin: '0 5 0 0',
                        allowBlank: false,
                        value: new Date()
                    }, {
                        xtype: 'textfield',
                        name: 'lastmonthflow',
                        id: 'lastmonthflow',
                        fieldLabel: '上月结余费用',
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
                        
                        name: 'usedflow',
                        id: 'usedflow',
                        fieldLabel: '已支出费用',
                        readOnly: true,
                        margin: '5 5 0 0',
                        allowBlank: false
                    }, {
                        xtype: 'textfield',
                        
                        name: 'remainflow',
                        id: 'remainflow',
                        fieldLabel: '结余费用',
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
                        name: 'fee',
                        fieldLabel: '收入费用',
                        name: 'getflow',
                        id: 'getflow',
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
                }],
                listeners: {
                    'beforerender': function () {
                       // alert(Ext.getCmp('startdate').getRawValue() + "wefre");
                        Ext.Ajax.request({
                            url: 'pagefee',
                            async: false,
                            params: {
                                'startDate': Ext.getCmp('startdate').getRawValue(),
                                'username':name
                            },
                            method: 'post',
                            success: function (response, options) {
                                
                                var res = Ext.JSON.decode(response.responseText);
                               // alert(res.lastmonthflow + " " + res.remainflow + " " + res.usedflow + " " + res.getflow);
                                Ext.getCmp('lastmonthflow').setRawValue(res.lastmonthflow + '元');
                                Ext.getCmp('remainflow').setRawValue(res.remainflow + '元');
                                Ext.getCmp('usedflow').setRawValue(res.usedflow + '元');
                                Ext.getCmp('getflow').setRawValue(res.getflow + '元');
                            }
                        });
                    }
                }
            }]

        }];
        this.callParent(arguments);
        this.renderTo = Ext.getBody();
    },
    
})