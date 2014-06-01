Ext.Loader.setConfig({ enabled: true });
Ext.Loader.setPath('app', 'app');
Ext.require('static.app.login');
Ext.onReady(function () {
    Ext.create('static.app.login');
});