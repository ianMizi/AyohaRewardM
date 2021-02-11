Ext.define('ianMizi.store.LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.LoyaltyStamp.LoyaltyStampModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/LoyaltyStamp/LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistory',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        },

        groupDir: "DESC",
        grouper: {
            groupFn: function (record) {
                return record.get('StampCampaignName');
            },
            sortProperty: 'StampedByDate'
        }
    }
});
