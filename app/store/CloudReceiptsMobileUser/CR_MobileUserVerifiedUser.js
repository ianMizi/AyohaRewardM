Ext.define('ianMizi.store.CloudReceiptsMobileUser.CR_MobileUserVerifiedUser', {
});


function CR_MobileUserVerifiedUser(ID,CR_MykadNo) {

    Ext.Ajax.request({

        // url: document.location.protocol + '//' + document.location.host + '/API/GeoFence/GeofenceDelete',
        url: GetAPIurl() + '/CloudReceiptsMobileUser/CRMobileUserVerifiedUser',
        params: {

            ID: ID,
            CR_MykadNo: CR_MykadNo,

        },
        success: function (result, request) {

            //var strStatus = setStatus(FlatBillStatus)
            //Ext.Msg.alert('Success', 'Receipt has been ' + strStatus);



        },
        failure: function (result, request) {
            Ext.Msg.alert('Error', request);

        }
    });
}