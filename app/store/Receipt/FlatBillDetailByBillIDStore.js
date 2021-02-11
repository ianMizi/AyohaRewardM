

Ext.define('ianMizi.store.Receipt.FlatBillDetailByBillIDStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.Receipt.FlatBillModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
          //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBillDetails',
            url: GetAPIurl() + '/FlatBill/FlatBillgetFlatBillDetails',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});








