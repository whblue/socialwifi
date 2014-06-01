Ext.Loader.setConfig({ enabled: true });
Ext.Loader.setPath('app', 'app');
Ext.require('app.view.login');
Ext.onReady(function () {
    Ext.create('app.view.login');
});