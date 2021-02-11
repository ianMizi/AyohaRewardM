Ext.define('ianMizi.view.Config.Configs', {
});

var FlatBillID;
var FlatBillStatus;
var FlatBillUpdateDate;
var FlatBillID_ID;

var currentTimeGlobal = new Date()

function swalFireSuccess(Msg) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '<font size=5 >'+Msg+'</font>',
        showConfirmButton: true,
        // timer: 2500
    });
}


function swalFireFail(Msg) {
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: '<font size=5 color=red>' + Msg + '</font>',
        showConfirmButton: true,
        // timer: 2500
    });
}



function swalFireGeneralMsg(Msg) {
    Swal.fire({
        title: GetCurrAyohaVersion(),
        text: Msg,
        showConfirmButton: false,
        imageUrl: "resources/icons/cloudrewardlogopurple.png",
        imageWidth: 400,
        imageHeight: 230,
        imageAlt: 'Cloud-Reward Pro v 1.0',
        footer: '<a href>ianMizi Technology Sdn Bhd</a>'
    })
}


function swalFireSuccessStampedCardMsg(Msg) {
    Swal.fire({
        // title: GetCurrAyohaVersion(),
        title:Msg,
       // text: Msg,
        // background: 'rgba(255, 255, 255, 0.0)',
        showConfirmButton: false,
        imageUrl: "resources/icons/redeemAnimatedOne.gif",
        width: '280px', /*set width container*/
        height: '80px', /*set width container*/
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Ayoha-Reward Pro v 1.0',
        footer: '<a href>Bawang Corner Restaurant</a>'
    });
   // $(".swal2-modal").css('background-color', 'transparent');//Optional changes the color of the sweetalert 
    //$(".swal2-container.in").css('background-color', 'rgba(43, 165, 137, 0.45)');//changes the color of the overlay
    $(".swal2-container.swal2-backdrop-show, .swal2-container.swal2-noanimation").css('background-color', 'rgba(0, 0, 0, 0.0)');//changes the color of the overlay


    

}

function GetCurrStampCardQrCode() {

    var _value = localStorage.getItem('CurrStampCardQrCode');
   // var _value = '0133376958-346273';
    return _value;
}






function GetCurrStampCampaignCode() {

    var _value = localStorage.getItem('StampCampaignCode');
    return _value;
}

function GetCurrAyohaEnterpriseUserAccountNo() {

    //var _value = localStorage.getItem('AyohaEnterpriseUserAccountNo');
    var _value = '0133376958-346273';
    return _value;
}


function GetCurrAyohaVersion() {

    var _value = localStorage.getItem('AyohaVersion');
    return _value;
}

function GetCurrAyohaUserAccountNo() {

    var _value = localStorage.getItem('AyohaUserAccountNo');
    return _value;
}
function GetCurrAyohaUserID() {

    var _value = localStorage.getItem('AyohaUserID');
    return _value;
}

function GetCurrAyohaUserKatalaluan() {

    var _value = localStorage.getItem('AyohaUserKatalaluan');
    return _value;
}

function GetStartDateStampCardCampaign() {

    var _value = localStorage.getItem('StartDateStampCardCampaign');
    return _value;
}

function GetEndDateStampCardCampaign() {

    var _value = localStorage.getItem('EndDateStampCardCampaign');
    return _value;
}

function GetCurrStampCampaignCode() {

    var _value = localStorage.getItem('StampCampaignCode');
    return _value;
}

function GetOriginalAdevertisementStartDate() {

    var _value = localStorage.getItem('OriginalAdevertisementStartDate');
    return _value;
}

function GetOriginalAdevertisementEndDate() {

    var _value = localStorage.getItem('OriginalAdevertisementEndDate');
    return _value;
}

function GetOriginalAdvertisementPeriod() {

    var _value = localStorage.getItem('OriginalAdvertisementPeriod');
    return _value;
}
function GetCurrAdvertisementType() {

    var _value = localStorage.getItem('AdvertisementType');
    return _value;
}

function CreateAdvertisementCode() {

    var d = new Date().getTime();
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;
        if (d > 0) {
            var r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            var r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid  + '-' + GetEnterpriseAccNo();
  
}


function GenerateRandomNo()
{
    var _value;
    _value= Math.floor((Math.random() * 9999999) + 1);
    return _value;
}
function GetDateToday() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;

    return today;
}

function GetCurrentMonth() {

    var _value = currentTimeGlobal.getMonth() + 1;
    return _value;
}

function GetCurrentYear() {

    var _value = currentTimeGlobal.getFullYear();
    return _value;
}


function GetCurrentDay() {

    var _value = currentTimeGlobal.getDate();
    return _value;
}
function GetCurrentdevicemodel() {

    var _value = device_model;
    return _value;
}

function GetCurrentdeviceplatform() {

    var _value = device_platform;
    return _value;
}

function GetCurrentdeviceuuid() {

    var _value = device_uuid;
    return _value;
}

function GetCurrentdeviceversion() {

    var _value = device_version;
    return _value;
}
function GetCurrentdevicemanufacturer() {

    var _value = device_manufacturer;
    return _value;
}

function GetCurrentdeviceisVirtual() {

    var _value = device_isVirtual;
    return _value;
}



function GetCurrentdeviceserial() {
   // var _value = localStorage.getItem('device_serial');
    var _value = "K3V4C19312000961";
    return _value;
}


function GetCurrentIP() {

    var _value = currIP;
    return _value;
}

function GetCurrentConnectionState() {

    var _value = currConnectionState;
    return _value;
}
function GetCurrentFlatBillID_ID() {

    var _value = FlatBillID_ID;
    return _value;
}

function GetCurrentFlatBillID() {

    var _value = FlatBillID;   
    return _value;
}


function GetCurrentFlatBillStatus() {

    var _value = FlatBillStatus;
    return _value;
}


function GetFlatBillStatusUpdateDate() {

    var _value = FlatBillUpdateDate;
    return _value;
}


function GetAPIurl() {

   // var _value = 'http://42.1.63.57:17655';
   // var _value = 'http://192.168.0.107:9018';
    var _value = 'http://42.1.63.57/CRMOBILEAPI/';
  //  var _value = 'http://tarmizi-004-site6.etempurl.com/webapiresit/webapiresit/';
  //  var _value = 'http://cloudreceipts.sytes.net:9018/'
    return _value;
}


function GetCurrentOneSignalPlayerID() {

    var _value = OneSignalPlayerID;
    return _value;
}
function GetCurrentOneSimInfo() {

    var _value = SimInfo;
    return _value;
}

function GetCurrentAccountID() {

    var _value = localStorage.getItem('CurrAccountID');
    return _value;
}

function GetCurrentMyKadNo() {

    var _value = localStorage.getItem('CurrMykadNo');
    return _value;
}

function GetCurrentAccountNo() {

    var _value = localStorage.getItem('CurrAccountNo');
    return _value;
}


function GetCurrentUserAccountNo() {

    var _value = localStorage.getItem('CurrentUserAccountNo');
    return _value;
}


function GetCurrentAccountName() {

    var _value = localStorage.getItem('CurrAccountName');
    return _value;
}



function GetCurrentUserLogin() {

    var _value = localStorage.getItem('CurrentUserLogin');
    return _value;
}


function GetCurrentUserName() {

    var _value = localStorage.getItem('CurrUserName');
    return _value;
}
function GetCurrentPassword() {

    var _value = localStorage.getItem('CurrPassword');
    return _value;
}

function GetCurrentEmail() {

    var _value = localStorage.getItem('CurrEmail');
    return _value;
}
function GetCurrentPhoneNumber() {

    var _value = localStorage.getItem('CurrPhoneNumber');
    return _value;
}

function GetCurrentRegisterDate() {

    var _value = localStorage.getItem('CurrRegisterDate');
    return _value;
}
function GetCurrentAccountStatus() {

    var _value = localStorage.getItem('CurrAccountStatus');
    return _value;
}

function GetCurrentLastLoginDate() {

    var _value = localStorage.getItem('CurrLastLoginDate');
    return _value;
}

function GetCurrentLoginIP() {

    var _value = localStorage.getItem('CurrLoginIP');
    return _value;
}

function GetCurrentVersion() {

    var _value = localStorage.getItem('CurrVersion');
    return _value;
}

function GetCurrFlatBillStatusAndCategory() {
    var _value = localStorage.getItem('CurrFlatBillStatusAndCategory');
    return _value;
}


function GetCurrCloudReceiptAccount() {

    var _value = localStorage.getItem('CurrCloudReceiptAccount');
    return _value;
}

function GetCurrCountNotificationTypeR() {
    var _value = localStorage.getItem('CurrCountNotificationTypeR');
    return _value;
}

function GetCurrCountNotificationTypeNN() {
    var _value = localStorage.getItem('CurrCountNotificationTypeNN');
    return _value;
}

function GetCurrSumCountNotification() {
    var _value = localStorage.getItem('CurrSumCountNotification');
    return _value;
}


function GetCurrPictureProfile() {
    var _value = localStorage.getItem('CurrPictureProfile');
    return _value;
}

function GetCurrDayLeft() {
    var _value = localStorage.getItem('CurrDayLeft');
    return _value;
}

function GetCurrentToolbarStyle() {

    var _value = 'background: #f44336';
    if (GetCurrentVersion() == 'Standard 1.1') {
        _value = 'background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;';
    } 

   
    return _value;
   
}





function GetNotificationDate() {
    var _value = localStorage.getItem('NotificationDate');
    return _value;
}

function GetNotificationLogo64() {
    var _value = localStorage.getItem('NotificationLogo64');
    return _value;
   
}
function GetSentFrom() {
    var _value = localStorage.getItem('SentFrom');
    return _value;
}
function GetEnterpriseAccNo() {
    var _value = localStorage.getItem('EnterpriseAccNo');
    return _value;
}

function GetEnterpriseHQAccNo() {
    var _value = localStorage.getItem('EnterpriseHQAccNo');
    return _value;
}
function GetEnterpriseAddress() {
    var _value = localStorage.getItem('EnterpriseAddress');
    return _value;
}

function GetNotificationTitle() {
    var _value = localStorage.getItem('NotificationTitle');
    return _value;
}

function GetNotification() {
    var _value = localStorage.getItem('Notification');
    return _value;
}

function GetAdvertisementImage() {
    var _value = localStorage.getItem('AdvertisementImage');
    return _value;
}



function GetQRCodeImg() {

    var _value = localStorage.getItem('QRCodeImg');
    return _value;

}

function ConvertMonth(Month) {
    var Bulan
    if (Month == '1') {
        Bulan = 'January';
    }
    if (Month == '2') {
        Bulan = 'February';
    } if (Month == '3') {
        Bulan = 'March';
    } if (Month == '4') {
        Bulan = 'April';
    } if (Month == '5') {
        Bulan = 'May';
    } if (Month == '6') {
        Bulan = 'June';
    } if (Month == '7') {
        Bulan = 'July';
    } if (Month == '8') {
        Bulan = 'August';
    } if (Month == '9') {
        Bulan = 'September';
    } if (Month == '10') {
        Bulan = 'Oktober';
    } if (Month == '11') {
        Bulan = 'November';
    } if (Month == '12') {
        Bulan = 'December';
    }





    return Bulan
}



function ConvertinputTypeMonth(Month) {
    var Bulan
    if (Month == '1') {
        Bulan = '01';
    }
    if (Month == '2') {
        Bulan = '02';
    } if (Month == '3') {
        Bulan = '03';
    } if (Month == '4') {
        Bulan = '04';
    } if (Month == '5') {
        Bulan = '05';
    } if (Month == '6') {
        Bulan = '06';
    } if (Month == '7') {
        Bulan = '07';
    } if (Month == '8') {
        Bulan = '08';
    } if (Month == '9') {
        Bulan = '09';
    } if (Month == '10') {
        Bulan = '10';
    } if (Month == '11') {
        Bulan = '11';
    } if (Month == '12') {
        Bulan = '12';
    }





    return Bulan
}

function notificationdateonchange() {
    var MonthYearNoti = document.getElementById('NotificationmonthID').value;
   

    if (MonthYearNoti.includes("01")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    }
    if (MonthYearNoti.includes("02")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -37 0 0');
    }
    if (MonthYearNoti.includes("03")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -54 0 0');
    } if (MonthYearNoti.includes("04")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -65 0 0');
    } if (MonthYearNoti.includes("05")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    }
    if (MonthYearNoti.includes("06")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -64 0 0');
    } if (MonthYearNoti.includes("07")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -69 0 0');
    } if (MonthYearNoti.includes("08")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -50 0 0');
    } if (MonthYearNoti.includes("09")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -26 0 0');
    } if (MonthYearNoti.includes("10")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    } if (MonthYearNoti.includes("11")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -28 0 0');
    } if (MonthYearNoti.includes("12")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -30 0 0');
    }

    var input0 = MonthYearNoti;
    var partsOfStr = input0.split('-');
    loadNotificationTypeN_All_fromInputMonthYear(partsOfStr[0], partsOfStr[1])
    document.getElementById("input-SearchNotificationPanel_SearchTxt").addEventListener("keyup", inputSearchNotificationPanel_SearchTxtOnKeyUp);
    _DataStore_SearchNotificationPanelSearchTxt = Ext.getStore('NotificationTypeNAllStore');
    //if (MonthYearNoti.includes("05")) {
    //    Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    //}



}




function Initialnotificationdateonchange(val) {
    var MonthYearNoti = val;
    if (MonthYearNoti.includes("01")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    }
    if (MonthYearNoti.includes("02")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -37 0 0');
    }
    if (MonthYearNoti.includes("03")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -54 0 0');
    } if (MonthYearNoti.includes("04")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -65 0 0');
    } if (MonthYearNoti.includes("05")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    }
    if (MonthYearNoti.includes("06")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -64 0 0');
    } if (MonthYearNoti.includes("07")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -69 0 0');
    } if (MonthYearNoti.includes("08")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -50 0 0');
    } if (MonthYearNoti.includes("09")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -26 0 0');
    } if (MonthYearNoti.includes("10")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -44 0 0');
    } if (MonthYearNoti.includes("11")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -28 0 0');
    } if (MonthYearNoti.includes("12")) {
        Ext.getCmp('Notificationmonth').setMargin('5 -30 0 0');
    }
    //if (MonthYearNoti.includes("05")) {
    //    Ext.getCmp('Notificationmonth').setMargin('5 -68 0 0');
    //}



}
function setTheme() {
    if (GetCurrentVersion() == 'Standard 1.1') {
      ////  Ext.getCmp('xtypeLogin').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('DashboardstoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //// // Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('toolbarMyAccountTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('DetailReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      ////  Ext.getCmp('RegistrationsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //////  Ext.getCmp('LoyaltyCardStamptoolbarTop').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');
      ////  //Ext.getCmp('LoyaltyCardPointtoolbarTop').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');
      ////  Ext.getCmp('LoyaltyCardPointtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))');
      ////  //Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/BGsummary6.jpg"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('imgSearchNotificationPanel').setHidden(false);
      ////  Ext.getCmp('SearchNotificationPanel_SearchTxt').setHidden(false);

      ////  Ext.getCmp('labelCountSearchNotificationPanel').setHidden(false);
      ////  Ext.getCmp('Notificationmonth').setHidden(false);
      ////  Ext.getCmp('btnNotificationmonthIDcalender').setHidden(false);
      ////  Ext.getCmp('lblYearNotificationsPanel').setHidden(true);
      ////  Ext.getCmp('lblMonthNotificationsPanel').setHidden(true);
      ////  //////Ext.getCmp('DashboardstoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('toolbarMyAccountTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('DetailReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('RegistrationsTop').setStyle('background: #f44336');
      ////  //////Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
      ////  Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.1</font>');
        
        
    } else {
        //Ext.getCmp('xtypeLogin').setStyle('background: #f44336');
        //Ext.getCmp('DashboardstoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background: #f44336');
        //Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('toolbarMyAccountTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('DetailReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background: #f44336');
        //Ext.getCmp('RegistrationsTop').setStyle('background: #f44336');



        Ext.getCmp('xtypeLogin').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('DashboardstoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('toolbarEnterpriseDetailsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      //  Ext.getCmp('EnterpriseListtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('toolbarMyAccountTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationsPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationsPanelIndividualtoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('NotificationSummarytoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('DetailReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('FilterReceiptsReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('SearchResultReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('SummaryReceipttoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
        Ext.getCmp('RegistrationsTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
     
        Ext.getCmp('containerSummaryreceiptButton').setStyle('background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;');
        Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.0</font>');
        Ext.getCmp('imgSearchNotificationPanel').setHidden(false);
        Ext.getCmp('SearchNotificationPanel_SearchTxt').setHidden(false);

        Ext.getCmp('labelCountSearchNotificationPanel').setHidden(false);
        Ext.getCmp('Notificationmonth').setHidden(false);
        Ext.getCmp('btnNotificationmonthIDcalender').setHidden(false);
        Ext.getCmp('lblYearNotificationsPanel').setHidden(true);
        Ext.getCmp('lblMonthNotificationsPanel').setHidden(true);
    }

}



function setThemeloginpage() {
  
    //if (GetCurrentVersion() == 'Standard 1.1') {
    //    Ext.getCmp('xtypeLogin').setStyle('background-image: url("resources/icons/backgroundlogin.jpg"); background-size: 100% 100%;');      
    //    Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.1</font>');


    //} else {
    //    Ext.getCmp('xtypeLogin').setStyle('background: #f44336');     
    //    Ext.getCmp('loginlblversion').setHtml('<font size="2" color="white">v Standard 1.0</font>');
      
    //}

}


function setThemeNotificationPanelIndividual() {
    if (GetCurrentVersion() == 'Standard 1.1') {
     
        Ext.getCmp('NotificationIndividualPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');



    } else {
      
        Ext.getCmp('NotificationIndividualPaneltoolbarTop').setStyle('background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);');
      
    }
}


function summaryreceiptbottomtoolbarVstandard1point1(val) {
    console.log("summaryreceiptbottomtoolbarVstandard1point1");





    if (val == 'NewReceipt') {
        //ori
       
       // Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black"><u><b>New Receipt(s)</b></u></font>');
      //  Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/newreceiptredlatestedit.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="red"><u><b>New Receipt(s)</b></u></font>');


        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white">Partially Paid</font>')

    } if (val == 'Claimable') {
        

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="red"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white">Partially Paid</font>')
    } if (val == 'Partially Paid') {

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="red"><b><u>Partially Paid</u></b></font>')

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')
    }

    if (val == 'Deposit') {
      

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="red"><b><u>Deposit</u></b></font>')

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>')

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>')
    }

    if (val == 'Warranty') {
     

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="red"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white">General</font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');

    } if (val == 'General') {
      

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="red"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white">Recently Confirm</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');

    } if (val == 'RecentlyConfirm') {
        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="red"><b><u>Recently Confirm</u></b></font>')


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="white">Recently Void</font>');
    } if (val == 'RecentlyVoid') {

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/CancelWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="red"><b><u>Recently Reject</u></b></font>');

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/ConfirmWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="white"><b><u>Recently Confirm</u></b></font>')


        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalWhite.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="white"><b><u>General</u></b></font>')


        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="white"><b><u>Warranty</u></b></font>');
        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="white"><b><u>Deposit</u></b></font>');

        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="white"><b><u>Partially Paid</u></b></font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="white"><b><u>Claimable</u></b></font>');

        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="white"><u><b>New Receipt(s)</b></u></font>');

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/searchicon.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="white">Search</font>');

        
    }
  
    receiptCategoryCount();

}





//var summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//function summaryreceiptlistbackgroundcolor() {
//    summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//    if (GetCurrentVersion() == 'Standard 1.1') {

//        summaryreceiptlistbackgroundcolorset = 'BGsummaryReceipt.jpg';
//        console.log('if');
//    } else {
//        console.log('else')
//        summaryreceiptlistbackgroundcolorset = 'Picture62.jpg';
//    }
//}

//function getValuesummaryreceiptlistbackgroundcolor() {
//    window.summaryreceiptlistbackgroundcolorset; // yup, it's "test"
//}



var summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';

var objs = {
    fs: function () {
        
        summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';
        if (GetCurrentVersion() == 'Standard 1.1') {

            summaryreceiptlistcolorset = 'backgroundlistupgrades.jpg';
            console.log('if');
        } else {
            console.log('else')
            summaryreceiptlistcolorset = 'backgroundlistdowngrades.jpg';
        }
      
    }
};
//objs.fs();












var summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';

var obj = {
    f: function () {
       
        summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';
       
        if (GetCurrentVersion() == 'Standard 1.1') {

            summaryreceiptlistbackgroundcolorset = 'backgroundlogin.jpg';
            localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistupgrades.jpg');
            console.log('if');
        } else {
            console.log('else')
            summaryreceiptlistbackgroundcolorset = 'Picture62.jpg';
            localStorage.setItem('CurrReceiptlistBgcolor', 'backgroundlistdowngrades.jpg');
        }
       
    }
};
//obj.f();









function CustomePanelSetHeight(containerOne, containerTwo) {

    var x = parseInt(screen.width);
    var y = parseInt(screen.height)-270;
    var y2 = parseInt(screen.height) - 274;
    console.log("y:" + y + "  y2:" + y2);


   



    Ext.getCmp(containerOne).setHeight(y);
    Ext.getCmp(containerTwo).setHeight(y2);







}



function GetEnterprisePhoneNo() {

    var _value = localStorage.getItem('EnterprisePhoneNo');
    return _value;
}
function GetEnterpriseEmail() {

    var _value = localStorage.getItem('EnterpriseEmail');
    return _value;
}

function GetEnterpriseWebsite() {

    var _value = localStorage.getItem('EnterpriseWebsite');
    return _value;
}

function GetEnterpriseFacebook() {

    var _value = localStorage.getItem('EnterpriseFacebook');
    return _value;
}
function GetEnterpriseTwiter() {

    var _value = localStorage.getItem('EnterpriseTwiter');
    return _value;
}

function GetEnterpriseInstagram() {

    var _value = localStorage.getItem('EnterpriseInstagram');
    return _value;
}
function GetEnterpriseCoordinate() {

    var _value = localStorage.getItem('EnterpriseCoordinate');
    return _value;
}

function GetPICContactNo() {

    var _value = localStorage.getItem('PICContactNo');
    return _value;
}

function GetPersonInCharge() {

    var _value = localStorage.getItem('PersonInCharge');
    return _value;
}
