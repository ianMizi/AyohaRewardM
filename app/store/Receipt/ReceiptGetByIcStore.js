Ext.define('ianMizi.store.Receipt.ReceiptGetByIcStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.Field',
        'Ext.util.Grouper'
    ],
    config: {
        model: 'ianMizi.model.Receipt.ReceiptModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
         //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByAccNo',
            //url: 'http://192.168.0.103:9019/Receipts/ReceiptgetByIc',
            url: GetAPIurl() + '/Receipts/ReceiptgetByIc',
            
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

        groupDir: "DESC" ,
        grouper: {
    groupFn: function(record) {
        return '<div style="display: none";>' + record.get('BillId') + ' </div>' + '<font size=5>' + record.get('CompanyName') + ' (RM' + record.get('TotalAmount') + ')</font>' + '<br>' + record.get('UTCBillDate') + '<br>' + record.get('PlateNumber') + ' -' + record.get('VehicleModel');
    },
    sortProperty: 'UTCBillDate'
        }
    }
});
