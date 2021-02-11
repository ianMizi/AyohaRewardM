Ext.define('ianMizi.store.AyohaUserStampCard.AyohaUserStampCardLoadByStampCardCodeStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.AyohaUserStampCard.AyohaUserStampCardModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCardLoadByStampCardCode',
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
