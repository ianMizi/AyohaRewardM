Ext.define('ianMizi.view.MyAccount.Scan_QRCode_StampCard', {

});



//function Scan_QRCode_StampCard() {
//    var TempStampQRCode = GetCurrStampCardQrCode();
//    Ext.getStore('AyohaUserStampCardLoadByStampCardCodeStore').getProxy().setExtraParams({
//        TempStampQRCode: TempStampQRCode
//    });

//    Ext.StoreMgr.get('AyohaUserStampCardLoadByStampCardCodeStore').load();
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('AyohaUserStampCardLoadByStampCardCodeStore').getProxy().setExtraParams({
//            TempStampQRCode: TempStampQRCode
//        });

//        Ext.StoreMgr.get('AyohaUserStampCardLoadByStampCardCodeStore').load();
//        var myStore = Ext.getStore('AyohaUserStampCardLoadByStampCardCodeStore');
//        count = myStore.getCount();
     
//        if (count >= 1) {
//            var modelRecord = myStore.getAt(0);
//            var ID = modelRecord.get('ID');
//            var StampCardCode = modelRecord.get('StampCardCode');
//            var StampCampaignCode = modelRecord.get('StampCampaignCode');
//            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
//            var SubscriberAccNo = modelRecord.get('SubscriberAccNo');
         

//            if (EnterpriseAccNo != GetEnterpriseHQAccNo()) {
//                swalFireFail('Not Valid Qr Code!');
//                return;
//            } if (StampCampaignCode != GetCurrStampCampaignCode()) {
//                swalFireFail('Not Valid Qr Code!');
//                return;
//            }else
//            {
//                Scan_QRCode_StampCard_InsertStampLoyalty(ID, StampCardCode, StampCampaignCode, EnterpriseAccNo, SubscriberAccNo, TempStampQRCode);

//            }


//        } else {

//        }
//    });
//    task.delay(500);

//}



//function Scan_QRCode_StampCard_InsertStampLoyalty(ID, StampCardCode, StampCampaignCode, EnterpriseAccNo, SubscriberAccNo, TempStampQRCode) {



 

//    var obj = {        
//        "SubscriberAccNo": SubscriberAccNo,
//        "EnterpriseAccNo": EnterpriseAccNo,
//        "StampCode": StampCardCode,
//        "StampQrCode": TempStampQRCode,
//        "StampedBy": 'TARMIZI',
//        "StampedByPhoneModel": localStorage.getItem('device_model'),
//        "StampedByUserAccNo": GetCurrAyohaEnterpriseUserAccountNo(),
//        "StampedByPhoneSerialNo": localStorage.getItem('device_serial'),
//        "StampedByPhoneManufacturer": localStorage.getItem('device_manufacturer'),
//        "StampedByPhonePlatform": localStorage.getItem('device_platform'),
//        "StampedByOneSignalID": localStorage.getItem('player_id'),
//        "StampedByPhoneRawInfo": localStorage.getItem('SimInfo'),
//        "StampedCampaignCode": StampCampaignCode
//        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

//    };
//    console.log(obj);
//    var _value = Ext.Ajax.request({

//        type: "POST",

//        url: GetAPIurl() + '/LoyaltyStamp/LoyaltyStampInsertLog',

//        dataType: "json",
//        data: JSON.stringify(obj),
//        headers: {
//            "Content-Type": "application/json; charset=utf-8"
//        },

//        success: function (result, request) {

//            //console.log(result.responseText);


//            data = Ext.decode(result.responseText.trim());

//            if (data.success == "true") {

               
               
//                Scan_QRCode_StampCard_Reload(StampCampaignCode, EnterpriseAccNo, SubscriberAccNo);


//            }
//            else {

//                swalFireFail("Scan Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
//            }
//            Ext.Viewport.unmask();

//        },

//        failure: function (result, request) {
//            Ext.Viewport.unmask();
//            swalFireFail("Scan Failed!!");
//        }

//    });


//}







//function Scan_QRCode_StampCard_Reload(strStampCampaignCode, EnterpriseAccNo, SubscriberAccNo) {


   

   

//    Ext.getStore('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').getProxy().setExtraParams({
//        StampCampaignCode: strStampCampaignCode,
//        EnterpriseAccNo: EnterpriseAccNo,
//        SubscriberAccNo: SubscriberAccNo,
//    });
//    Ext.StoreMgr.get('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').load();
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').getProxy().setExtraParams({
//            StampCampaignCode: strStampCampaignCode,
//            EnterpriseAccNo: EnterpriseAccNo,
//            SubscriberAccNo: SubscriberAccNo,
//        });





//        Ext.StoreMgr.get('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').load();
//        var myStore = Ext.getStore('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore');
//        count = myStore.getCount();
//        Ext.Viewport.setMasked(false);







//        if (count <= 0) {
//            return;
//        }
      
//        var No = 0;


//        for (var ii = 0; ii < count; ii++) {
//            var modelRecord = myStore.getAt(ii);
//            var TextOne = modelRecord.get('TextOne');
//            var TextTwo = modelRecord.get('TextTwo');
//            var StampContent = modelRecord.get('StampContent');
//            var StampContentNote = modelRecord.get('StampContentNote');
//            var StampedStatus = modelRecord.get('StampedStatus');

//            var StampedBy = modelRecord.get('StampedBy');
//            var StampedDate = modelRecord.get('StampedDate');
//            var StampedTime = modelRecord.get('StampedTime');



//            console.log(StampedStatus);

//            No = ii + 1;
//            var x = TextOne;
//            if (x != No) {
//                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
//                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + TextOne + '</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>' + TextTwo + '</font></div></div>');

//                if (StampedStatus == "YES") {

//                    var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
//                    var randomcolor = getRandomColor();
//                    var replaceBgColor = ycontent.replace("#85929E", randomcolor);
//                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));





//                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
//                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
//                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
//                    Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');


//                    if (No == 1) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');


//                    }




//                    if (No == 4) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');


//                    }
//                    if (No == 7) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
//                    }
//                    if (No == 10) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
//                    }
//                }


//            } else {
//                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
//                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">' + TextOne + '</div></div>');

//                if (StampedStatus == "YES") {

//                    var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
//                    var randomcolor = getRandomColor();
//                    var replaceBgColor = ycontent.replace("#85929E", randomcolor);
//                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));






//                    Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
//                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
//                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
//                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');

//                    if (No == 1) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');


//                    }


//                    if (No == 4) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
//                    }
//                    if (No == 7) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
//                    }
//                    if (No == 10) {
//                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
//                    }
//                }


//                //   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',  

//            }
//            var str = StampContent;
//            var n = str.includes("background-image");


//            if (n) {
//                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
//                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(StampContent);
//            }


          


//        }
//        var CountLoyaltyStamped=parseInt(localStorage.getItem('CountLoyaltyStamped')) + 1;
       
//        Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + localStorage.getItem('CountStampCardRowShow') + '</b></font>');


//        localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
//        var CountStampCardRowShow = parseInt(localStorage.getItem('CountStampCardRowShow'));

//        if (CountLoyaltyStamped == CountStampCardRowShow) {
//            Ext.getCmp('btnQrCode_FloatPanel_AyohaCardManagement_PreviewCard').setHtml('<img src="resources/icons/ResetPurpleOne.png" width="25" height="25" alt="Company Name">');
//            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_StampQrCode').setHtml('<font size=2 color=grey><b>Reset Card</b></font>');
//        }



//        Timer_CheckStampedStatus();
      
//    });
//    task.delay(2000);
//}


//var CheckStampedStatusInterval;

//function Timer_CheckStampedStatus() {
//    console.log("Start Checking Timer...");
//    var interval = parseInt(1500);
//    var i = 0;
//    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
//    CheckStampedStatusInterval = setInterval(function () {
//        i++;

//        if (i == 1) {
//            clearInterval(CheckStampedStatusInterval);
//            console.log("Checking To Function Scan_QRCode_StampCard_Check_StampedStatus()...");
//            Scan_QRCode_StampCard_Check_StampedStatus();


//            i = 0;
//        }

//    }, interval);
//}


//function Scan_QRCode_StampCard_Check_StampedStatus() {
//    var TempStampQRCode = GetCurrStampCardQrCode();
//    console.log("Function Scan_QRCode_StampCard_Check_StampedStatus(), start process:" + TempStampQRCode);
//    Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
//        TempStampQRCode: TempStampQRCode
//    });

//    Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('AyohaUserStampCardCheckStampedStatusStore').getProxy().setExtraParams({
//            TempStampQRCode: TempStampQRCode
//        });

//        Ext.StoreMgr.get('AyohaUserStampCardCheckStampedStatusStore').load();
//        var myStore = Ext.getStore('AyohaUserStampCardCheckStampedStatusStore');
//        count = myStore.getCount();
//        var modelRecord = myStore.getAt(0);
//        var StampedStatus = modelRecord.get('StampedStatus');

//        if (count >= 1) {
         
          

//            if (StampedStatus == "YES") {
//                clearInterval(CheckStampedStatusInterval);
//                FloatPanel_AyohaCardManagement_StampQrCodeHide();
//                FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();
//               // swalFireSuccess("Scan Succesfully!");
//            } else {
//                Timer_CheckStampedStatus();
//                console.log(StampedStatus);
//            }
           


//        } else {
//            Timer_CheckStampedStatus();
//            console.log(StampedStatus);
//        }
//    });
//    task.delay(2000);
//}


