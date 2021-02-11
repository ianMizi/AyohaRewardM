/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'ianMizi',

    requires: [
           'Ext.MessageBox',
             'Ext.form.*',
           'Ext.field.*',
           'Ext.Img',
           'Ext.app.History',
           'Ext.Map'
    ],
    models: ['Customer.CustomerModel', 'Receipt.FlatBillModel', 'CloudReceiptsMobileUser.CloudReceiptsMobileUserModel', 'Notifications.NotificationsModel',
        'Enterprise.EnterpriseModel', 'EnterpriseSubscriber.EnterpriseSubscriberModel', 'ReceiptTemplate.ReceiptTemplateModel', 'Receipt.ReceiptModel',
        'RedeemItem.RedeemItemModel', 'LoyaltyStamp.LoyaltyStampModel', 'Subscriber.SubscriberModel', 'StampCampaign.StampCampaignModel', 'StampCard.StampCardModel',
        'StampContentDefaultTemplate.StampContentDefaultTemplateModel', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageModel', 'AyohaEnterpriseAccount.AyohaEnterpriseAccountModel',
    'Master.BusinessTypeModel', 'Master.EnterprisesBranchTypeModel', 'Enterprises.EnterprisesModel', 'AyohaEnterprisesUser.AyohaEnterprisesUserModel', 'Master.AyohaEnterprisesUserStatusModel',
    'Master.AyohaEnterprisesUserTypeModel', 'StampCampaignEnterprises.StampCampaignEnterprisesModel', 'StampCampaignStamper.StampCampaignStamperModel', 'Advertisement.AdvertisementModel',
    'Advertisement.AdvertisementImagesModel', 'Advertisement.AdvertisementVideoModel', 'Advertisement.AdvertisementAudioModel', 'Master.AdvertisementTypeModel', 'Master.ModuleModel', 'AdvertisementLinkModule.AdvertisementLinkModuleModel',
    'Advertisement.AdvertisementDashboardCountModel', 'Master.AdvertisementApprovalStatusModel', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogModel', 'AyohaUserProfile.AyohaUserProfileModel', 'AyohaUserStampCard.AyohaUserStampCardModel',
    'TemporaryStampQrCode.TemporaryStampQrCodeModel', 'LoyaltyStamp.LoyaltyStampCheckQRCodeModel', 'Master.MembershipCardPaymentCycleModel'],
    stores: ['Enterprise.EnterprisegetAllStore', 'Enterprise.EnterprisegetDetailsStore', 'Customer.CustomerStore', 'Receipt.FlatBillGetByIcStore', 'Receipt.FlatBillDetailByBillIDStore',
     'CloudReceiptsMobileUser.CR_MobileUserVerifyRegistrationEmailIDStore', 'CloudReceiptsMobileUser.CR_MobileUserVerifyRegistrationMyKadNoStore',
    'CloudReceiptsMobileUser.CR_MobileUserVerifyRegistrationUserNameStore', 'CloudReceiptsMobileUser.CR_MobileUserInsertUser',
    'CloudReceiptsMobileUser.CR_MobileUserGetVerifyStringStore', 'CloudReceiptsMobileUser.CR_MobileUserVerifiedUser', 'CloudReceiptsMobileUser.CR_MobileUserLoadUser',
    'CloudReceiptsMobileUser.CR_MobileUserLoadMyKadNoStore', 'Notifications.NotificationsStore', 'Notifications.NotificationTypeNStore', 'Notifications.NotificationTypeNAllStore',
    'Receipt.FlatBillSearchCReceiptStore', 'EnterpriseSubscriber.EnterpriseSubscribergetBySubcriberAccNoStore', 'ReceiptTemplate.ReceiptTemplateGetByEnterpriseAccNo',
    'ReceiptTemplate.ReceiptTemplateGetByTemplateCode', 'Notifications.NotificationsCountTypeNNStore', 'Notifications.NotificationsCountTypeRStore', 'Receipt.ReceiptCountByCategoryGetByIcStore',
    'EnterpriseSubscriber.EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore', 'CloudReceiptsMobileUser.CR_MobileUserGetRegeneratedPwd',
    'RedeemItem.RedeemItemgetByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore',
    'LoyaltyStamp.LoyaltyStampLoadByStampedByUserAccNoAndEnterpriseAccNoStore', 'Subscriber.SubscriberLoadByEnterpriseAccountNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore'
    , 'StampCampaign.StampCampaignLoadByEnterpriseAccNoStore', 'StampCampaign.StampCampaignLoadByStampCampaignCodeStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccNoStore',
    'StampContentDefaultTemplate.StampContentDefaultTemplateResetByIDStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore',
    'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore', 'AyohaEnterpriseAccount.AyohaEnterprisesUserLoginStore',
    'Master.BusinessTypeLoadStore', 'Master.EnterprisesBranchTypeStore', 'Enterprises.EnterprisesLoadByEnterpriseAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoginStore',
    'Master.AyohaEnterprisesUserTypeLoadStore', 'Master.AyohaEnterprisesUserStatusLoadStore', 'Enterprises.EnterprisesLoadByEnterpriseHQAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore',
    'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByAccountNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByEnterpriseAccNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByStampCampaignCodeStore',
    'StampCampaignStamper.StampCampaignStamperLoadByStampCampaignCodeStore', 'Advertisement.AdvertisementloadByEnterpriseHQAccNoStore', 'Advertisement.AdvertisementloadByApprovedAdvertisementStartDateEndDateStore',
    'Advertisement.AdvertisementAudioloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementVideoloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore',
    'Master.AdvertisementTypeLoadAllStore', 'Master.ModuleloadMasterStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementDashboardCountByEnterpriseHQAccNoStore',
    'Master.AdvertisementApprovalStatusLoadMasterStore', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogLoadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementloadMediaStore', 'Advertisement.AdvertisementloadMediaPreviewStore',
    'Enterprises.EnterprisesContactUsLinkStore', 'Advertisement.AdvertisementloadMediaAdvertisementVIAStore', 'Advertisement.AdvertisementloadStandardStore', 'Advertisement.AdvertisementloadHotSeatStore', 'AyohaUserProfile.AyohaUserProfileLoginStore',
    'AyohaUserProfile.AyohaUserProfileLoadProfileStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore',
    'TemporaryStampQrCode.TemporaryStampQrCodeGenerateTempQrCodeStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCardCodeStore', 'AyohaUserStampCard.AyohaUserStampCardCheckStampedStatusStore',
    'LoyaltyStamp.LoyaltyStampCheckExistingStampQrCodeStore', 'Master.MembershipCardPaymentCycleLoadStore'],
    views: [
         //'Enterprise.EnterpriseList', 'Config.Configs', 'Main', 'Login', 'Receipt.SummaryReceipt', 'Menu.DrawerMenu', 'Menu.StatusMenus', 'Menu.StatusDetailReceiptMenu', 'Menu.SearchResultReceiptMenu',
     'Enterprise.EnterpriseList', 'Config.Configs', 'Main', 'LoginAyohaUser', 'Receipt.SummaryReceipt', 'Menu.DrawerMenu', 'Menu.StatusMenus', 'Menu.StatusDetailReceiptMenu', 'Menu.SearchResultReceiptMenu',
         'Receipt.DetailReceipt', 'Receipt.LoadingPanel', 'MyAccount.AccountInfo', 'Registrations', 'Dashboard.Dashboards',
        'FloatPanel.LoadingRegistration', 'FloatPanel.LoadingVerifyCode', 'FloatPanel.LoadingCustomMsg', 'FloatPanel.LoadingToastMsg',
        'FloatPanel.LoadingReconfirmPwdPanel', 'FloatPanel.ReceiptSearchResultCriteria', 'Notification.NotificationsPanel', 'Notification.NotificationSummary', 'Route', 'Receipt.FilterReceipt',
    'Receipt.SearchResultReceipt', 'Enterprise.EnterpriseDetails', 'MyAccount.EnterpriseSubscribed', 'Receipt.ReceiptTemplate', 'Menu.ReceiptCategoryMenu',
    'FloatPanel.ReceiptStatusCategoryPanel', 'Menu.DetailReceiptMenu', 'Menu.DetailReceiptMenuPanel','MyAccount.Dashboard',
    'Notification.NotificationsPanelIndividual', 'Print.SingleReceipt', 'FloatPanel.SearchReceiptsFilterEnterprisePanel', 'FloatPanel.AboutPanel', 'FloatPanel.ForgotPasswordPanel',
    'FloatPanel.TestRoutePanel', 'FloatPanel.NotificationIndividualPanel', 'Config.JqueryQRcode', 'Config.QRcode',
    'LoyaltyCard.LoyaltyCardStamp', 'LoyaltyCard.LoyaltyCardPoint', 'LoyaltyCard.LoyaltyCardRedeemList', 'Enterprise.ScanQrCode', 'LoyaltyCard.FloatLoyaltyCardPoint', 'LoyaltyCard.FloatLoyaltyCardStamp',
    'Subscriber.FloatPanel_SubscriberList', 'Subscriber.FloatPanel_AddSubscriberMenu', 'Subscriber.FloatPanel_SubscriberAddNewQrCode', 'Subscriber.FloatPanel_SubscriberMenu',
    'Subscriber.Subscriber_FloatLoyaltyCardStamp', 'Subscriber.FloatPanel_SubscriberMaster', 'AyohaCardManagement.FloatPanel_AyohaCardManagement', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCard',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardForm', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCard', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCardContent', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard_ContentNote', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCardBackgroundImg',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardBackgroundImg', 'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount', 'Master.FloatPanel_BusinessTypeList', 'Master.FloatPanel_EnterprisesBranchTypeList',
    'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword', 'Master.FloatPanel_EnterprisesUserTypeList', 'Master.FloatPanel_EnterprisesUserStatusList',
    'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails', 'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_EnterprisesList',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_UserEnterprisesList', 'Advertisement.FloatPanel_Advertisement', 'Advertisement.FloatPanel_AdvertisementSetting', 'Master.FloatPanel_AdvertisementType',
    'Advertisement.FloatPanel_AdvertisementCalendar', 'Advertisement.FloatPanel_AddEdit_AdvertisementImages', 'Master.FloatPanel_AdvertisementLinkModule', 'Master.FloatPanel_AdvertisementApprovalStatus',
    'AdvertisementApprovalStatusLog.FloatPanel_AdvertisementApprovalStatusLog', 'Advertisement.FloatPanel_PreviewAdvertisement', 'Config.PinchZoomImage', 'Registration.FloatPanel_AyohaUserRegistration',
    'AyohaCardManagement.FloatPanel_AyohaCardManagement_AdvertisementButton', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_StampQrCode','AyohaCardManagement.FloatPanel_AyohaCardManagement_StampSuccesAnimation',
    'QrCodeScanner.FloatPanel_QrCodeScanner_ScanLoyaltyStampCard', 'QrCodeScanner.FloatPanel_QrCodeScanner_CenterLineMessage', 'QrCodeScanner.Scan_QRCode_StampCard_Process', 'QrCodeScanner.FloatPanel_QrCodeScanner_StampSuccessAnimation',
    'MembershipCardManagement.FloatPanel_MembershipCardManagement', 'MembershipCardManagement.FloatPanel_MembershipCardManagement_EditCard', 'Master.FloatPanel_MembershipCardPaymentCycle'],
    

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //  Ext.Viewport.add(Ext.create('ReceiptsWorld.view.MyAccount.VehicleList'));
        // Initialize the main view
       Ext.Viewport.add(Ext.create('ianMizi.view.Main'));

       // Ext.Viewport.add(Ext.create('ianMizi.view.Subscriber.SubscriberList'));


        //enablefocuslogin();

        var currentTime = new Date()
        var month = currentTime.getMonth() + 1
        var monthconvert = ConvertinputTypeMonth(month);
        var year = currentTime.getFullYear();
        var fullyM = year + '-' + monthconvert;
        // console.log(fullyM);
        document.getElementById("NotificationmonthID").value = fullyM;
        Initialnotificationdateonchange(monthconvert);

        //  TestRoutePanelShow();
        //  loadRememberMe();
        //  localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
        //   Ext.Viewport.add(Ext.create('ReceiptsWorld.view.Registrations'));
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});

var OneSignalPlayerID
var SimInfo;
var device_model;
var device_platform;
var device_uuid;
var device_version;
var device_manufacturer;
var device_isVirtual;
var device_serial;
var deviceRawPhoneinfo;
var currIP;
var networkState;

document.addEventListener('deviceready', function () {
    enablefocuslogin();
    localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
    networkState = navigator.connection.type;
    routesArray.push("mainView,view,0");
    //setThemeloginpage();




  
    // Call syncHashedEmail anywhere in your app if you have the user's email.
    // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
    // window.plugins.OneSignal.syncHashedEmail(userEmail);



  























    //  networkinterface.getIPAddress(getIPcallback);
    //window.plugins.OneSignal.setLogLevel(
    //    { logLevel: 4, visualLevel: 4 }
    //    );


    //  window.plugins.sim.getSimInfo(successCallback, errorCallback);
    //window.plugins.OneSignal.getIds(successGetPlayerID(ids));

    window.plugins.OneSignal.getIds(function (ids) {
        // alert("LatestplayerID:" + ids.userId);

        // Ext.getCmp('loginuserNameTextField').setValue(ids.userId);
        Ext.getCmp('CR_OneSignalID').setValue(ids.userId);
        //var playerID = Ext.getCmp('CR_OneSignalID').getValue();


        localStorage.setItem('player_id', ids.userId);
        localStorage.setItem('device_model', device.model);

        localStorage.setItem('device_platform', device.platform);
        localStorage.setItem('device_uuid', device.uuid);

        localStorage.setItem('device_version', device.version);
        localStorage.setItem('device_manufacturer', device.manufacturer);

        localStorage.setItem('device_isVirtual', device.isVirtual);
        localStorage.setItem('device_serial', device.serial);

        window.plugins.sim.getSimInfo(successCallback, errorCallback);
        // dekat class main.js
        notificationReceivednOpensetMykad();


    });
    // device_model = device.model;
    // device_platform=device.platform;
    // device_uuid = device.uuid;
    // device_version = device.version;
    // device_manufacturer = device.manufacturer;
    // device_isVirtual = device.isVirtual;
    // device_serial = device.serial;

    displayRememberMe();
    //  alert(device_model);
    var notificationReceivedCallback = function (jsonData) {
        //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        //alert('info: ' + JSON.stringify(jsonData));

        //  Ext.getCmp('btnNotificationSummaryReceipt').setBadgeText('5');


        var month = GetCurrentMonth();
        var day = GetCurrentDay();
        var year = GetCurrentYear();
        loadSummaryReceiptFromReceivedPushNotification(GetCurrentMyKadNo(), "2", month, year, GetCurrentAccountNo(), "Status", "Y");
        countNotificationNNtypeAndRType();
    };


    var notificationOpenedCallback = function (jsonData) {
        //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        //    alert('info: ' + JSON.stringify(jsonData));


        var month = GetCurrentMonth();
        var day = GetCurrentDay();
        var year = GetCurrentYear();
        var myString = JSON.stringify(jsonData);
        var n = myString.includes("Promo/News");
        if (n) {
            loadNotificationSummary();
            //var result = myString.substring(myString.indexOf('(') + 1, myString.indexOf(')'));
            //var sillyString = result.substr(5);
            //var NotiCode = sillyString.slice(0, -1);

        } else {
            Ext.getCmp('mainView').setActiveItem(1);
            routesArray.push("mainView,view,1");
            loadSummaryReceiptFromReceivedPushNotification(GetCurrentMyKadNo(), "2", month, year, GetCurrentAccountNo(), "Status", "Y")
        }



    };
    //window.plugins.OneSignal.init('eb840aed-ded6-4a47-96d0-e3276962852b',
    //    { googleProjectNumber: '919701359018' }, notificationOpenedCallback);

    //window.plugins.OneSignal.setSubscription(true);

    // window.plugins.OneSignal.enableNotificationWhenActive(true);


    window.plugins.OneSignal
      .startInit("eb840aed-ded6-4a47-96d0-e3276962852b")
      .handleNotificationOpened(notificationOpenedCallback)
        .handleNotificationReceived(notificationReceivedCallback)
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();

    //  window.plugins.OneSignal
    //.startInit("YOUR_APPID")
    //.handleNotificationReceived(function (jsonData) {
    //    alert("Notification received:\n" + JSON.stringify(jsonData));
    //    console.log('Did I receive a notification: ' + JSON.stringify(jsonData));
    //})
    //.endInit();





    // Call syncHashedEmail anywhere in your app if you have the user's email.
    // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
    // window.plugins.OneSignal.syncHashedEmail("tarmizi.rahim@ianMizi.com");
}, false);


if (Ext.os.is('Android')) {
    document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);

    function onBackKeyDown(eve) {
        eve.preventDefault();

        Routes();
        //  enablefocuslogin();

    }
}




function successCallback(result) {
    // SimInfo = JSON.stringify(result);
    localStorage.setItem('SimInfo', JSON.stringify(result));

    networkinterface.getCarrierIPAddress(function (ip) {
        // alert("getCarrierIPAddress:" + ip);
        localStorage.setItem('device_ip', ip);
    });

    // With subnet and error handler
    networkinterface.getWiFiIPAddress(
        function (ip, subnet) {

            localStorage.setItem('device_ip', myip);
        },
        function (err) {

            //  localStorage.setItem('device_ip', "Err: " + err);
            localStorage.setItem('device_ip', myip);
        }
    );





    //networkinterface.getWiFiIPAddress(function (ip) { alert(ip); });
    //networkinterface.getCarrierIPAddress(function (ip) { alert(ip); });

    //networkinterface.getIPAddress(function (ip) {
    //    alert(ip);
    //    localStorage.setItem('device_ip', ip);
    //});
}

function errorCallback(error) {
    localStorage.setItem('SimInfo', JSON.stringify(error));

    networkinterface.getCarrierIPAddress(function (ip) {
        // alert("getCarrierIPAddress:" + ip);
        localStorage.setItem('device_ip', myip);
    });

    // With subnet and error handler
    networkinterface.getWiFiIPAddress(
        function (ip, subnet) {

            localStorage.setItem('device_ip', myip);
        },
        function (err) {

            localStorage.setItem('device_ip', myip);
        }
    );

    //networkinterface.getIPAddress(function (ip) {
    //    alert(ip);
    //    localStorage.setItem('device_ip', ip);
    //});
}


function getIPcallback(ip) {
    //  currIP = ip;
    alert("IP:" + ip);
}

var countTab = 0;
function ExitDoubleTap() {
    navigator.app.exitApp();
    //Ext.getCmp('mainView').setActiveItem(0);

    //if (countTab == 0)
    //{
    //    countTab++;


    //    setTimeout(function () {

    //        countTab = 0;
    //        LoadingToastMsgShow();
    //        LoadingToastMsgHide();
    //    }, 2000);
    //}else
    //{
    //    navigator.app.exitApp();
    //}

}
