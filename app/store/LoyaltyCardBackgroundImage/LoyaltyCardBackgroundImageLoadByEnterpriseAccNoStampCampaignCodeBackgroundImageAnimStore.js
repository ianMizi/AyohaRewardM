Ext.define('ianMizi.store.LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'ianMizi.model.LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/LoyaltyCardBackgroundImage/LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnim',
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
