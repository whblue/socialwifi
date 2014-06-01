Ext.define('static.app.route', {
    extend: 'Ext.panel.Panel',
    height: 1000,
    width: 685,
    id: 'route',
    title:'我的路由',
    requires: ['static.app.GMapPanel'],
    items: [{
        xtype: 'gmapanel',
        id:'mymap',
        width: 696,
        height: 505,
        //cls: 'routeimage'
        xtype: 'gmappanel',
        listeners: {
            'afterrender': function () {
                //var point = new google.maps.LatLng(40, 100);
                //var marker = new google.maps.Marker(point);
                //map.addMarker(point, marker, false, false);
                
            }

        }

    }, {
        xtype: 'form',
        title: '路由器详情',
        cls: 'panel_f',
        height:500,
        items: [{
            xtype: 'panel',
           
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'textfield',
                value: '192.168.1.254',
                name: 'fee',
                fieldLabel: 'LAN口地址',
                margin: '5 5 0 0',
                allowBlank: false
            }, {
                xtype: 'textfield',
                value: '255.255.0.0',
                name: 'fee',
                fieldLabel: '子网掩码',
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
                value: '192.168.1.254',
                name: 'fee',
                fieldLabel: 'WAN口地址',
                margin: '5 5 0 0',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'box',
                margin: '5 5 0 0',
                fieldLabel: '子网掩码',
                value: '255.255.0.0'
            }]
        },{
            xtype: 'panel',
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'textfield',
                name: 'start',
                fieldLabel: '网关',

                margin: '5 5 0 0',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'route',
                id:'ip1',
                fieldLabel: 'IP地址',
                margin: '5 5 0 0',
                allowBlank: false
            }]
        },]
        }]
})