var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var username=cp.get("username");
var states = Ext.create('Ext.data.Store', {
    fields: ['name'],
    data: [
        { "name": "购入路由" },
        { "name": "分享流量" },
        { "name": "提高收费" }

    ]
});
Ext.define('static.app.bill', {
    extend: 'Ext.form.Panel',
    id: 'billp',
    height: 1000,
    width: 685,
    cls:'panel_f',
    title:'历史账单',
    items: [{
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'datefield',
            name: 'startDate',
            id:'startDate1',
            fieldLabel: '日期',
            value: new Date(),
            margin: '5 5 0 0',
            allowBlank: false,
            listeners: {
                'change': function () {
                    Ext.Ajax.request({
                        url: 'pagefee',
                        async: false,
                        params: {
                            'startDate': Ext.getCmp('startDate1').getRawValue(),
                            'username':username
                        },
                        method: 'post',
                        success: function (response, options) {

                            var res = Ext.JSON.decode(response.responseText);
                            // alert(res.lastmonthflow + " " + res.remainflow + " " + res.usedflow + " " + res.getflow);
                            Ext.getCmp('lastmonthflow1').setRawValue(res.lastmonthflow + '元');
                            Ext.getCmp('remainflow1').setRawValue(res.remainflow + '元');
                            Ext.getCmp('usedflow1').setRawValue(res.usedflow + '元');
                            Ext.getCmp('getflow1').setRawValue(res.getflow + '元');
                        }
                    });
                }
            }
        }, {
            xtype: 'textfield',
            value: '5.2M',
            name: 'route',
            id:'lastmonthflow1',
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
            value: '40M',
            name: 'fee',
            id:'usedflow1',
            fieldLabel: '已支出费用',
            readOnly: true,
            margin: '5 5 0 0',
            allowBlank: false
            
        }, {
            xtype: 'textfield',
            value: '40M',
            name: 'fee',
            id:'remainflow1',
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
            value: '40M',
            name: 'fee',
            id:'getflow1',
            fieldLabel: '收入费用',
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
                    'startDate': Ext.getCmp('startDate1').getRawValue(),
                    'username':username
                },
                method: 'post',
                success: function (response, options) {

                    var res = Ext.JSON.decode(response.responseText);
                    // alert(res.lastmonthflow + " " + res.remainflow + " " + res.usedflow + " " + res.getflow);
                    Ext.getCmp('lastmonthflow1').setRawValue(res.lastmonthflow + '元');
                    Ext.getCmp('remainflow1').setRawValue(res.remainflow + '元');
                    Ext.getCmp('usedflow1').setRawValue(res.usedflow + '元');
                    Ext.getCmp('getflow1').setRawValue(res.getflow + '元');
                }
            });
        }
    }
})