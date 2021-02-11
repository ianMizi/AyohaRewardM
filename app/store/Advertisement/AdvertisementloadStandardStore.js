Ext.define('ianMizi.store.Advertisement.AdvertisementloadStandardStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.Advertisement.AdvertisementModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            url: GetAPIurl() + '/Advertisement/AdvertisementloadStandard',
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

