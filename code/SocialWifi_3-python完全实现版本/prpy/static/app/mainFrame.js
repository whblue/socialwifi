Ext.Loader.setConfig({ enabled: true });
Ext.onReady(function () {
	var h=Ext.create('static.app.head');
	var l= Ext.create('static.app.left');
	var r= Ext.create('static.app.right');
    Ext.create('Ext.panel.Panel', {
        requires: [
            'static.app.head',
            'static.app.left',
            'static.app.right'
        ],
        id: 'frame',
        cls:'frame',
        border: false,
        autoScroll: true,
     
        items: [
            h ,
            {
                xtype: 'panel',
                cls: 'main',
                items: [
                    l,
                    r
                ]
            },
            {
                xtype: 'box',
                cls: 'reference',
                frame: true,
                html: '<h2>copyright @whblue version3.0</h2>'
            }
        ],
      
        renderTo:Ext.getBody()
    })
});