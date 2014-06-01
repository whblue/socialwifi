Ext.define('app.view.bill', {
    extend: 'Ext.form.Panel',
    id: 'billp',
    height: 1000,
    width:685,
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
})