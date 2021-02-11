


Ext.define('ianMizi.store.Enterprise.EnterprisegetAllStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.Field',
        'Ext.util.Grouper'
    ],
    config: {
        model: 'ianMizi.model.Enterprise.EnterpriseModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByAccNo',
            //url: 'http://192.168.0.103:9019/Receipts/ReceiptgetByIc',
            url: GetAPIurl() + '/Enterprise/EnterprisegetAll',

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

        groupDir: "ASC",
        grouper: {
            groupFn: function (record) {
                //return '<div style="display: none";>' + record.get('BillId') + ' </div>' + '<font size=5>' + record.get('CompanyName') + ' (RM' + record.get('TotalAmount') + ')</font>' + '<br>' + record.get('UTCBillDate') + '<br>' + record.get('PlateNumber') + ' -' + record.get('VehicleModel');
                //   return '<div>' + record.get('EnterpriseName') + ' </div>';
                return record.get('EnterpriseName')[0];

            },
            sortProperty: 'EnterpriseName'
        }
    }
});

//function loadEnterpriselist()
//{
//    console.log('loadEnterpriselist');
//    _DataStore_EnterprisegetAllStore = Ext.create('Ext.data.Store', {
//        model: 'ReceiptsWorld.model.Enterprise.EnterpriseModel',
//        id: 'EnterprisegetAllStoreID',
//        requires: [
//          'Ext.data.Field',
//          'Ext.util.Grouper'
//        ],
//        proxy: {
//            type: 'ajax',
//            //  url:'http://192.168.0.102:9012/GPSUser/GPSUserLog_in',
//            url: GetAPIurl() + '/Enterprise/EnterprisegetAll',
//            actionMethods: {
//                read: 'GET'
//            },

//            reader: {
//                type: 'json',
//                rootProperty: 'results',
//                totalProperty: 'total',
//                successProperty: 'success',
//                messageProperty: 'message'
//            }
//        },
//        groupDir: "ASC",
//        grouper: {
//            groupFn: function (record) {
//                //return '<div style="display: none";>' + record.get('BillId') + ' </div>' + '<font size=5>' + record.get('CompanyName') + ' (RM' + record.get('TotalAmount') + ')</font>' + '<br>' + record.get('UTCBillDate') + '<br>' + record.get('PlateNumber') + ' -' + record.get('VehicleModel');
//                //   return '<div>' + record.get('EnterpriseName') + ' </div>';
//                return record.get('EnterpriseName')[0];

//            },
//            sortProperty: 'EnterpriseName'
//        }
//        //autoLoad: true
//    });
//}
