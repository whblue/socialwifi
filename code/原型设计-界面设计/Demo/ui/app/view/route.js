Ext.define('app.view.route', {
    extend: 'Ext.panel.Panel',
    height: 1000,
    width: 685,
    id: 'route',
    title:'我的路由',
    items: [{
        xtype: 'gmappanel',
        width: 696,
        height: 405,
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
    }, {
        xtype: 'form',
        title:'路由器使用详情',
        items: [{
            xtype: 'panel',
            layout: {
                type: 'hbox'
            },
            items: [{
                xtype: 'textfield',
                value: '5.2M',
                name: 'start',
                fieldLabel: '经度',
                readOnly: true,
                margin: '5 5 0 0',
                allowBlank: false
            }, {
                xtype: 'textfield',
                value: '5.2M',
                name: 'route',
                fieldLabel: '纬度',
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
                fieldLabel: '使用流量',
                readOnly: true,
                margin: '5 5 0 0',
                allowBlank: false
            }, {
                xtype: 'textfield',
                value: '40M',
                name: 'fee',
                fieldLabel: '借出流量',
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
                fieldLabel: '剩余流量',
                readOnly: true,
                margin: '5 5 0 0',
                allowBlank: false
            }, {
                xtype: 'textfield',
                name: 'box',
                margin: '5 5 0 0',
                fieldLabel: '描述详情',
                readOnly: true
            }]
        }]
        }]
})