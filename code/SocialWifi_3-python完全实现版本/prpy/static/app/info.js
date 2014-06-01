var cp = new Ext.state.CookieProvider();
Ext.state.Manager.setProvider(cp);
var name=cp.get('username');
Ext.define('static.app.info', {
    extend: 'Ext.form.Panel',
    id: 'info',
    height: 1000,
    width: 685,
    cls:'panel_f',
    title:'个人信息',
    items: [{
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
        	xtype: 'textfield',          
            name: 'username2',
            id:'username2',
            fieldLabel: '用户名',
            
            readOnly: true,
            margin: '5 5 0 0',
            allowBlank: false
        }, {
            xtype: 'textfield',
            
            name: 'password2',
            id:'password2',
            fieldLabel: '密码',
            inputType: 'password',
            margin: '5 5 0 0',
            allowBlank: false
        }]
    }, {
        xtype: 'panel',
        cls:'infop',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'textfield',
            
            name: 'tag1',
            id:'tag1',
            fieldLabel: '标签1',
            margin: '5 5 0 0',
            allowBlank: false
            
        }, {
            xtype: 'textfield',
            
            name: 'tag2',
            id:'tag2',
            fieldLabel: '标签2',
            margin: '5 5 0 0',
            allowBlank: false
        }]
    }, {
        xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'datefield',           
            name: 'birth',
            id:'birth',
            fieldLabel: '生日',
            margin: '5 5 0 0',
            allowBlank: false
        }]
    },{
    	xtype: 'panel',
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'button',
            width:150,
            cls:'confr',
            text:'确认',
            handler:function(){
            	Ext.Msg.prompt('身份验证', '请输入密码', function(btn, text){
            		Ext.Ajax.request({
                        url: 'login',
                        async: false,
                        params: {
                            'username':name,
                            'password':text
                        },
                        method: 'post',
                        success: function (response, options) {
                        	alert("校验成功");
                        	var t = Ext.getCmp('info').getForm();
                            if (t.isValid()) {
                                t.submit({
                                    clientValidation: true,
                                    waitMsg: '请稍后',
                                    waitTitle: '正在修改',
                                    url: 'updateinfo',
                                    method: 'post',
                                    params: {
                                        'username': name,
                                        'tag':Ext.getCmp('tag1').getValue(),
                                        'password':Ext.getCmp('password2').getValue(),
                                        'birth':Ext.getCmp('birth').getValue(),
                                        'location':"null"
                                    },
                                    success: function (form, action) {
                                        Ext.MessageBox.wait('请等待', '修改中……');

                                        Ext.Msg.alert(action.result.msg);
                                        
                                    },
                                    failure: function (form, action) {
                                        Ext.Msg.alert('系统错误', action.result.msg);
                                    }
                                });
                        }
                        },
                        failure: function (form, action) {
                            Ext.Msg.alert('密码错误', "无法修改数据");
                        }
                    }); 
            	});
            	
            }
        }, {
        	xtype: 'button',  
        	width:150,
        	cls:'clear',
            text:'重置',
            handler:function(){
            	var t = Ext.getCmp('info').getForm();
            	t.reset();
            }
        }]
    }],
    listeners: {
        'beforerender': function () {
            // alert(Ext.getCmp('startdate').getRawValue() + "wefre");
        	 Ext.Ajax.request({
                 url: 'getinfo',
                 async: false,
                 params: {
                     'username': name
                 },
                 method: 'post',
                 success: function (response, options) {

                     var res = Ext.JSON.decode(response.responseText);
                     // alert(res.lastmonthflow + " " + res.remainflow + " " + res.usedflow + " " + res.getflow);
                     Ext.getCmp('username2').setRawValue(res.username );                     
                     Ext.getCmp('tag1').setRawValue(res.tag);
                     var cp = new Ext.state.CookieProvider();
                     Ext.state.Manager.setProvider(cp);
                     cp.set('tag', res.tag);
                     
                     Ext.getCmp('birth').setRawValue(res.birth );
                     
                 }
             });
        }
    }
})