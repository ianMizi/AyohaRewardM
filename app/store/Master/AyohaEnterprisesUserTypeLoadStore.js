

Ext.define('ianMizi.store.Master.AyohaEnterprisesUserTypeLoadStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'ianMizi.model.Master.AyohaEnterprisesUserTypeModel',
        autoLoad: true,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByAccNo',
            //url: 'http://192.168.0.103:9019/Receipts/ReceiptgetByIc',
            url: GetAPIurl() + '/AyohaEnterprisesUserType/AyohaEnterprisesUserTypeLoad',

            actionMethods: {
                read: 'GET'
            },
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        },

    }
});
