

var _NotificationsPanel;
var isFromNotification = 'N';
var countNotification;



Ext.define('ianMizi.view.Notification.NotificationSummary', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'NotificationSummaryList',
    id: 'NotificationSummaryID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    zIndex: 20,
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [


            {
                xtype: 'toolbar',
                title: '<font size="4" color="white">Notifications</font>',
                docked: 'top',
                id: 'NotificationSummarytoolbarTop',
                style: {

                    background: '#f44336',

                },

                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnNotificationSummaryPanelHome',
                               iconCls: 'list',
                               //  html: '<div ><img src="resources/icons/ListIcon.png" width="30" height="30" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   DrawerMenuShow();

                               }
                           },
                             {
                                 xtype: 'spacer'
                             },

                                        {
                                            xtype: 'button',
                                            id: 'btnNotificationSummaryPanel',
                                            // badgeText: '1',
                                            html: '<div ><img src="resources/icons/Notification.png" width="30" height="30" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {

                                                loadNotificationSummary();
                                            }
                                        },


                       ]
            },


            //{
            //    xtype: 'container',
            //    style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
            //    height: 34,
            //    layout: {
            //        type: 'hbox'
            //    },
            //    items: [


            //   {
            //       xtype: 'label',
            //       id: 'lblCountNotificationsPanel',
            //       // hidden:true,
            //       margin: '5 0 0 0',
            //       html: '<font size="3" color="black">News & Promo-(0)</font>'
            //   },

            //    {
            //        xtype: 'spacer',

            //    }, {
            //        xtype: 'label',
            //        id: 'lblYearNotificationsPanel',
            //        margin: '5 0 0 0',
            //        html: '2017-'
            //    },
            //   {
            //       xtype: 'label',
            //       id: 'lblMonthNotificationsPanel',
            //       margin: '5 0 0 0',
            //       html: 'September '
            //   },
            //    ]
            //},


 //////{
 //////    xtype: 'list',
 //////    flex: 1,
 //////    store: 'NotificationTypeNAllStore',
 //////    id: 'NotificationsPanelListStoreID',

 //////    mode: 'SINGLE',
 //////    disableSelection: true,
 //////    itemTpl: '<div class="myContent">' +
 //////                     //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left"><img src="data:image/png;base64,{Logo64}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">{SentFrom}<br>Total Paid:RM{TotalPaid}<br>Account No:{FlatBillAccountNo}<br>Date:{NotificationDate}</th></tr></table>' +

 //////                          '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:solid;border-width:1px;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right" colspan="2">{NotificationDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="data:image/png;base64,{Logo64}"style="width: 72px; height: 72px; border:2px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{SentFrom}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right">Was Read on:<br>{NotificationReadDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"><button class="button">Delete</button></td></tr></table>' +
 //////                             '</div>',
 //////    height: '100%',
 //////    listeners: {
 //////        itemsingletap: function (list, idx, target, records, evt) {
          

 //////        },
 //////        deselect: function (list, records) {

 //////        }
 //////    },

 //////},



 {
     xtype: 'list',
     //flex: 1,
     store: 'NotificationsStore',
     id: 'NotificationsStoreID',
     mode: 'SINGLE',
     width: '100%',
     disableSelection: true,
     itemTpl: '<div class="myContent">' +
      //   '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:52px;height:52px"><img src="data:image/png;base64,{Logo64}"style="border:1px solid white; border-radius: 50%; max-width:70px" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left"><b>{NotificationTitle}</b><br>{SentFrom}<br>Date:{NotificationDate}</th></tr></table>' +
         '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:62px;height:52px"><img src="{Logo64}" style="border:1px solid white; border-radius: 50%; max-width:80px" /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:15px;height:52px;vertical-align:top">&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><b>{NotificationTitle}</b><br>{SentFrom}<br>Date:{NotificationDate}</th></tr></table>' +
  // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left"><img src="data:image/png;base64,{Logo64}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><b>{NotificationTitle}</b><br>{SentFrom}<br>Date:{NotificationDate}</th></tr></table>' +
       //   '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{SentFrom}<br>Total Paid:RM{TotalPaid}<br>Account No:{FlatBillAccountNo}<br>Date:{NotificationDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{Logo64}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +
           '</div>',
     height: '100%',
     //  height: 160,

     emptyText: '<div class="myContent">No Notification</div>',
     listeners: {
         itemsingletap: function (list, idx, target, records, evt) {
             LoadingPanelShow();

             //  LoadingPanelShow();
             //Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
             //Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
             //Ext.getCmp('mainView').setActiveItem(2);
             //Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
             //Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
             var NT = records.get('NotificationType');
             var ID = records.get('ID');
           
            
             var NotificationCode = records.get('NotificationCode');
             var ReceiptTemplateCode = records.get('ReceiptTemplateCode');
           
             var FlatBillID = records.get('FlatbilliD');
             console.log('FlatBillID:' + FlatBillID);
             console.log(NT);
             if (NT == 'R') {
                 Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                     BillID: FlatBillID
                 });
                 Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();



                 Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                     TemplateCode: ReceiptTemplateCode

                 });
                 Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                 Ext.getCmp('mainView').setActiveItem(2);
                 directedMenu('New');
                 //dekat receipttemplate classs
                 GenerateReceipt(FlatBillID, ReceiptTemplateCode);
             }
             if (NT == 'NN') {
                  loadNotificationTypeN(ID);
                 //loadNotificationTypeN_All();
                  routesArray.push("mainView,view,12");
                 Ext.getCmp('mainView').setActiveItem(12);
                 isFromNotification = 'Y';
             }
             setTimeout(function () {
                 UpdateNotificationReadStatus(ID,NT);               
               
             }, 1000);
             //setTimeout(function () {
               
             //    setCountNotificationLabel();
             //}, 500);
            
             //console.log(NT);
             //if (NT == 'N') {
             //    // loadNotificationTypeN(ID);
             //    //loadNotificationTypeN_All();
             //    Ext.getCmp('mainView').setActiveItem(5);
             //    isFromNotification = 'Y';
             //} else {
             //    isFromNotification = 'Y';
             //    //NotificationsPanelHide();
             //    Ext.getCmp('mainView').setActiveItem(1);
             //    loadSummaryReceipt(GetCurrentMyKadNo(), "2", GetCurrentAccountNo(), "All")
             //    Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
             //    Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
             //    Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);



             //}
             /////////UpdateNotificationReadStatus(ID)
             //FlatBillStatus = records.get('FlatBillStatus');
             //FlatBillUpdateDate = records.get('FlatBillUpdateDate');
             //Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
             //StatusDetailReceiptMenuShow();
             //Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
             //    BillID: FlatBillID
             //});
             //Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
             //detailsReceiptsprocess(FlatBillID);

         },
         deselect: function (list, records) {

         }
     },

 },




        ]
    },
    initialize: function () {

        //var currentTime = new Date()
        //var month = currentTime.getMonth() + 1


        //var monthconvert = ConvertMonth(month);
        //// returns the year (four digits)
        //var year = currentTime.getFullYear();


        //Ext.getCmp('lblYearNotificationsPanel').setHtml('<font size="3" color="black">' + year + '-' + '</font>');
        //Ext.getCmp('lblMonthNotificationsPanel').setHtml('<font size="3" color="black">' + monthconvert + '&nbsp;&nbsp;' + '</font>');

    }
});



function showNotificationSummary() {
   
}










function loadNotificationSummary() {
   LoadingPanelShow();
   Ext.getCmp('mainView').setActiveItem(11);
   routesArray.push("mainView,view,11");
    // StatusDetailReceiptMenuHide();
    //  alert('loadNotificationSummary');
    console.log(GetCurrentAccountNo());
    console.log('sdfsdf:'+GetCurrentMyKadNo());
    countNotification = 0;
    Ext.getStore('NotificationsStore').getProxy().setExtraParams({
        CR_MykadNo: GetCurrentMyKadNo(),
        CR_AccountNo: GetCurrentAccountNo()
    });
    Ext.StoreMgr.get('NotificationsStore').load();
    LoadingPanelHide();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('NotificationsStore').getProxy().setExtraParams({
            CR_MykadNo: GetCurrentMyKadNo(),
            CR_AccountNo: GetCurrentAccountNo()
        });
        Ext.StoreMgr.get('NotificationsStore').load();
        var myStore = Ext.getStore('NotificationsStore');
        countNotification = myStore.getCount();
  
      
        // Ext.getCmp('lblNotifications').setHtml('<font size="3" color="white">Notificationss-(' + countNotification + ')</font>');
       
    });
   
   
    task.delay(2000);
 

}




function loadNotificationTypeN(ID) {



    //   alert('loadNotificatixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxon');
    Ext.getStore('NotificationTypeNStore').getProxy().setExtraParams({
        CR_MykadNo: GetCurrentMyKadNo(),
        ID: ID
    });
    Ext.StoreMgr.get('NotificationTypeNStore').load();




    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('NotificationTypeNStore').getProxy().setExtraParams({
            CR_MykadNo: GetCurrentMyKadNo(),
            ID: ID
        });
        Ext.StoreMgr.get('NotificationTypeNStore').load();
        // countNotificationNNtypeAndRType();
    

    });
    //  setCountNotificationLabel();

    LoadingPanelHide();
    task.delay(2000);


}




function UpdateNotificationReadStatus(ID,NT) {

    console.log(ID);
    console.log(NT);
    var result = localStorage.getItem('CurrSumCountNotification') - 1;
    console.log('CurrSumCountNotification:' + result);
    Ext.getCmp('btnNotification_NotificationsPanelIndividual').setBadgeText(result);
  
    Ext.Ajax.request({

        url: GetAPIurl() + '/Notifications/NotificationsUpdateReadNotifications',

        params: {
            ID: ID,
            CR_AccountNo: GetCurrentAccountNo(),

        },
        success: function (result, request) {

            console.log('Success');
            LoadingPanelHide();
            if (NT == 'R') {
                countNotificationTypeR = countNotificationTypeR - 1;
            } if (NT == 'NN') {
                countNotificationTypeNN = countNotificationTypeNN - 1;
            }

            setCountNotificationLabel();
           //countNotificationNNtypeAndRType();
           
            //   Ext.Msg.alert("Please Login.This Is a Temporary Account for demo purpose,your account will be Activated by Administrator after confirmed and signed service contract.<br>Agensi Angkasa Negara-Malaysia.");

        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error!', '2');
            //  LoadingCustomMsgHide();
            //  Ext.Msg.alert('Error', request);
            //  CustomeMsgBoxShow("Error");

        }
    });


}












var countNotificationTypeNN = 0;
function loadCountNotificationTypeNN() {


    // StatusDetailReceiptMenuHide();
    //  alert('loadNotificationSummary');

    Ext.getStore('NotificationsCountTypeNNStore').getProxy().setExtraParams({
        CR_MykadNo: GetCurrentMyKadNo(),
        CR_AccountNo: GetCurrentAccountNo()
    });
    Ext.StoreMgr.get('NotificationsCountTypeNNStore').load();



    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('NotificationsCountTypeNNStore').getProxy().setExtraParams({
            CR_MykadNo: GetCurrentMyKadNo(),
            CR_AccountNo: GetCurrentAccountNo()
        });
        Ext.StoreMgr.get('NotificationsCountTypeNNStore').load();
        var myStore = Ext.getStore('NotificationsCountTypeNNStore');
        countNotificationTypeNN = myStore.getCount();
        localStorage.setItem('CurrCountNotificationTypeNN', myStore.getCount());
        console.log('countNotificationTypeNN:' + countNotificationTypeNN);


        // Ext.getCmp('lblNotifications').setHtml('<font size="3" color="white">Notificationss-(' + countNotification + ')</font>');

    });


    task.delay(1000);



}



var countNotificationTypeR = 0;
function loadCountNotificationTypeR() {


    // StatusDetailReceiptMenuHide();
    //  alert('loadNotificationSummary');

    Ext.getStore('NotificationsCountTypeRStore').getProxy().setExtraParams({
        CR_MykadNo: GetCurrentMyKadNo(),
        CR_AccountNo: GetCurrentAccountNo()
    });
    Ext.StoreMgr.get('NotificationsCountTypeRStore').load();



    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('NotificationsCountTypeRStore').getProxy().setExtraParams({
            CR_MykadNo: GetCurrentMyKadNo(),
            CR_AccountNo: GetCurrentAccountNo()
        });
        Ext.StoreMgr.get('NotificationsCountTypeRStore').load();
        var myStore = Ext.getStore('NotificationsCountTypeRStore');
        localStorage.setItem('CurrCountNotificationTypeR', myStore.getCount());
        countNotificationTypeR = myStore.getCount();
        console.log('countNotificationTypeR:' + countNotificationTypeR);
        setCountNotificationLabel();
       
        // Ext.getCmp('lblNotifications').setHtml('<font size="3" color="white">Notificationss-(' + countNotification + ')</font>');

    });


    task.delay(1000);

    
}

function setCountNotificationLabel() {
     //countNotificationTypeNN = parseInt(localStorage.getItem('CurrCountNotificationTypeNN'));
     //countNotificationTypeR = parseInt(localStorage.getItem('CurrCountNotificationTypeR'));
   
    var result = countNotificationTypeNN + countNotificationTypeR;
    console.log(result);
    console.log('countNotificationTypeNN:' + countNotificationTypeNN);
    console.log('countNotificationTypeR:' + countNotificationTypeR);
    localStorage.setItem('CurrSumCountNotification', result);
   
    if (countNotificationTypeR >= 1 ) {
        Ext.getCmp('btnNotificationMyAccount').setBadgeText(result);
        Ext.getCmp('btnNotificationEnterpriseDetails').setBadgeText(result);
        Ext.getCmp('btnNotificationEnterpriseList').setBadgeText(result);
        Ext.getCmp('btnNotification_NotificationsPanel').setBadgeText(result);

      
        Ext.getCmp('btnNotificationSummaryPanel').setBadgeText(result);
        Ext.getCmp('btnNotificationDetailReceipt').setBadgeText(result);
        Ext.getCmp('btnNotificationFilterReceipts').setBadgeText(result);
        Ext.getCmp('btnNotificationSearchResultReceipt').setBadgeText(result);
    
        Ext.getCmp('btnNotificationSummaryReceipt').setBadgeText(result);
      //  Ext.getCmp('btnDrawerMenuNotificationlbl').setBadgeText(countNotificationTypeNN);
    }
    if (countNotificationTypeNN >= 1) {
        Ext.getCmp('btnNotificationMyAccount').setBadgeText(result);
        Ext.getCmp('btnNotificationEnterpriseDetails').setBadgeText(result);
        Ext.getCmp('btnNotificationEnterpriseList').setBadgeText(result);
        Ext.getCmp('btnNotification_NotificationsPanel').setBadgeText(result);


        Ext.getCmp('btnNotificationSummaryPanel').setBadgeText(result);
        Ext.getCmp('btnNotificationDetailReceipt').setBadgeText(result);
        Ext.getCmp('btnNotificationFilterReceipts').setBadgeText(result);
        Ext.getCmp('btnNotificationSearchResultReceipt').setBadgeText(result);

        Ext.getCmp('btnNotificationSummaryReceipt').setBadgeText(result);
        //  Ext.getCmp('btnDrawerMenuNotificationlbl').setBadgeText(countNotificationTypeNN);
    }
    if (countNotificationTypeNN >= 1 &&  routeDrawerIsOpen == 'Y') {
        Ext.getCmp('btnDrawerMenuNotificationlbl').setBadgeText(countNotificationTypeNN);
        console.log('btnNotification_NotificationsPanelIndividual:' + result);
        Ext.getCmp('btnNotification_NotificationsPanelIndividual').setBadgeText(result);
    }
    //if (countNotificationTypeNN >= 1 && routeDrawerIsOpen == 'N') {
    //    console.log('btnNotification_NotificationsPanelIndividual:' + result);
    //    Ext.getCmp('btnNotification_NotificationsPanelIndividual').setBadgeText(result);
    //    Ext.getCmp('btnNotificationMyAccount').setBadgeText(result);
    //}
}



function countNotificationNNtypeAndRType() {
    console.log('countNotificationNNtypeAndRType');
    setTimeout(function () {
        loadCountNotificationTypeNN();
        loadCountNotificationTypeR();
      
    }, 2000);
  
  
}