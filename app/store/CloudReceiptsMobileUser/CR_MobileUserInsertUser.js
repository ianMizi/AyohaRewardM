Ext.define('ianMizi.store.CloudReceiptsMobileUser.CR_MobileUserInsertUser', {
});
function CR_MobileUserInsertUser(CR_MykadNo, CR_UseName, CR_Password, CR_Email, CR_PhoneNumber) {

    Ext.Ajax.request({

        // url: document.location.protocol + '//' + document.location.host + '/API/GeoFence/GeofenceDelete',
        url: GetAPIurl() + '/CloudReceiptsMobileUser/CRMobileUserInsertUser',
        params: {

            CR_MykadNo: CR_MykadNo,
            CR_UseName: CR_UseName,
            CR_Password: CR_Password,
            CR_Email: CR_Email,
            CR_PhoneNumber: CR_PhoneNumber,

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