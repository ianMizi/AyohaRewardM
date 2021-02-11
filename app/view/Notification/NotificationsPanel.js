var _DataStore_SearchNotificationPanelSearchTxt;
Ext.define('ianMizi.view.Notification.NotificationsPanel', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'NotificationsPanelList',
    id: 'NotificationsPaneltID',
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
                title: '<font size="4" color="white">News & Promotionddddd</font>',
                docked: 'top',
                id: 'NotificationsPaneltoolbarTop',
                style: {

                    background: '#f44336',

                },

                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnNotificationsPanelHome',
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
                                            id: 'btnNotification_NotificationsPanel',
                                           // badgeText: '1',
                                            html: '<div ><img src="resources/icons/Notification.png" width="30" height="30" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                                loadNotificationSummary();
                                            }
                                        },


                       ]
            },


            {
                xtype: 'container',
               // style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
                height: 34,
                layout: {
                    type: 'hbox'
                },
                items: [
            

               //{
               //    xtype: 'label',
               //    id: 'lblCountNotificationsPanel',
               //     hidden:true,
               //    margin: '5 0 0 0',
               //    html: '<font size="3" color="black">News & Promo-(0)</font>'
               //},
                 {
                    // xtype: 'label',
                     //  hidden: true,
                     margin: '7 0 0 5',
                     id: 'imgSearchNotificationPanel',
                     html: '<img src="resources/icons/SearchBlack.png" style="width: 20px; height: 20px;" />'
                 },
                {
                    id: 'SearchNotificationPanel_SearchTxt',
                    margin: '4 0 0 0',
                    html: '<input type="text" id="input-SearchNotificationPanel_SearchTxt" placeholder="Search Notifications" style="border-color:red;color:black;width:140px;text-align: center;font-size:15px;">'
                },
                {
                    // xtype: 'label',
                    //  hidden: true,
                    margin: '5 0 0 0',
                    id: 'labelCountSearchNotificationPanel',
                    html: '<font size="3px" color="black">(0)</font>'
                },
                {
                    xtype: 'spacer',

                },

                {
                    // zIndex: 50,
                    id: 'Notificationmonth',
                    margin:'5 -22 0 0',
                    html: '<div style="width:160px;border:1px none red;text-align:right;"><input type="month" id="NotificationmonthID" name="Notificationmonth"  style="text-align:center;font-size:15px;color:black;padding:0px 0px 0px 18px"></div></div>',
                },
                 {
                     //xtype: 'button',
                     ////   align: 'stretch',
                    
                     //height: 45,
                     //width: 45,
                     id: 'btnNotificationmonthIDcalender',
                    // ui: 'plain',
                     margin: '7 3 0 0',
                     html: '<img src="resources/icons/calendar-icon.png" style="width: 20px; height: 20px;" />',
                     //handler: function () {

                      
                     //}
                 },
                {
                    hidden: true,
                    xtype: 'label',
                    id: 'lblYearNotificationsPanel',
                    margin: '5 0 0 0',
                    html: '2017-'
                },
               {
                   hidden: true,
                   xtype: 'label',
                   id: 'lblMonthNotificationsPanel',
                   margin: '5 0 0 0',
                   html: 'September '
               },
                ]
            },


 {
     xtype: 'list',
     flex: 1,
     store: 'NotificationTypeNAllStore',
     id: 'NotificationsPanelListStoreID',
   
     mode: 'SINGLE',
     disableSelection: true,
     itemTpl: '<div class="myContent">' +
                      //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left"><img src="data:image/png;base64,{Logo64}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">{SentFrom}<br>Total Paid:RM{TotalPaid}<br>Account No:{FlatBillAccountNo}<br>Date:{NotificationDate}</th></tr></table>' +

                          //ori '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px solid black;overflow:hidden;word-break:normal;text-align:right;background-color:#37474f;color:white" colspan="2">Published On:{NotificationDate}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px solid white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#37474f;color:white" colspan="2"><br><img src="{Logo64}" style="width: 122px; height: 122px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>{SentFrom}</b><br>{EnterpriseAddress}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="{AdvertisementImage}"style="width: 100%; height: 172px;  max-height:200px; " /><br>Contact Us:<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button OnClick="openwebsite(\' {EnterpriseWebsite} \');" style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><img src="resources/icons/webRed.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><u>Website</u></button><button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/EmailRed.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:{EnterpriseEmail}">Email&nbsp;&nbsp;</a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/telephoneRed.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}">Call</a>&nbsp;&nbsp;&nbsp;&nbsp;</button><br><br></td></tr></table>' +

// in use '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px solid black;overflow:hidden;word-break:normal;text-align:right;background-color:#37474f;color:white" colspan="2">Published On:{NotificationDate}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px solid white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#37474f;color:white" colspan="2"><br><img src="{Logo64}" style="width: 122px; height: 122px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>{SentFrom}</b><br>{EnterpriseAddress}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="{AdvertisementImage}"style="width: 100%; height: 172px;  max-height:200px; " /><br><br><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button  style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><a href={EnterpriseWebsite}><img src="resources/icons/websiteblackedit.png" style="width: 36px; height: 36px;" /></a></button>&nbsp;&nbsp;<button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/emailblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:{EnterpriseEmail}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/callblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/fbblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/twiterblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/instablackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you turned on for product and promotion update.To unscribed this nofication go to enterprise info and turn off the notification feature</i> </font><br><br><font  color="#616161" size="1px">Powered By:Cloud-Receipts.Com</font></td></tr></table>' +


 '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px none black;overflow:hidden;word-break:normal;text-align:right;background-color:#F7FDFA;color:#616161" colspan="2">Published On:{NotificationDate}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px none white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#F7FDFA;color:#616161" colspan="2"><br><img src="{Logo64}" style="width: 122px; height: 122px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>{SentFrom}</b><br>{EnterpriseAddress}<br><font color="#616161" size="2px">________________________________________________</font></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="{AdvertisementImage}"style="width: 100%; height: 172px;  max-height:200px; " /><br><br><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button  style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><a href={EnterpriseWebsite}><img src="resources/icons/websiteblackedit.png" style="width: 36px; height: 36px;" /></a></button>&nbsp;&nbsp;<button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/emailblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:{EnterpriseEmail}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/callblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/fbblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/twiterblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/instablackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you turned on for product and promotion update.To unscribed this nofication go to enterprise info and turn off the notification feature</i> </font><br><br><font  color="#616161" size="1px">Powered By:Cloud-Receipts.Com</font></td></tr></table>' +




                         //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-top: 1px solid black;overflow:hidden;word-break:normal;text-align:right;background-color:#f00;color:white" colspan="2">Published On:{NotificationDate}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom: 2px solid white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#f00;color:white" colspan="2"><br><img src="{Logo64}" style="width: 142px; height: 142px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>{SentFrom}</b><br>{EnterpriseAddress}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"> <button  OnClick="enlargeImage()"; style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;"><img src="{AdvertisementImage}" style="width: 100%; height: 172px;  max-height:200px; "/></button><br>Read on:{NotificationReadDate}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button OnClick="openwebsite(\' {EnterpriseWebsite} \');" style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><img src="resources/icons/webRed.png" style="float:left;margin-right:0.5em;width: 16px; height: 16px;"><u>Website</u></button><button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/EmailRed.png" style="float:left;margin-right:0.5em;width: 16px; height: 16px;"><a href="mailto:{EnterpriseEmail}">Email&nbsp;&nbsp;</a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/telephoneRed.png" style="float:left;margin-right:0.5em;width: 20px; height: 16px;"><a href="tel:{EnterprisePhoneNo}">Call</a>&nbsp;&nbsp;&nbsp;&nbsp;</button><br><br></td></tr></table>' +


                           '</div>',

    
     height: '100%',
     listeners: {
         itemsingletap: function (list, idx, target, records, evt) {
             localStorage.setItem("NotificationDate", records.get('NotificationDate'));
             localStorage.setItem("NotificationLogo64", records.get('Logo64'));
             localStorage.setItem("SentFrom", records.get('SentFrom'));
             localStorage.setItem("EnterpriseAddress", records.get('EnterpriseAddress'));
             localStorage.setItem("NotificationTitle", records.get('NotificationTitle'));
             localStorage.setItem("Notification", records.get('Notification'));
             localStorage.setItem("AdvertisementImage", records.get('AdvertisementImage'));
             localStorage.setItem("EnterpriseWebsite", records.get('EnterpriseWebsite'));
             localStorage.setItem("EnterpriseEmail", records.get('EnterpriseEmail'));
             localStorage.setItem("EnterprisePhoneNo", records.get('EnterprisePhoneNo'));
  
             

             NotificationIndividualPanelShow();
             setThemeNotificationPanelIndividual();
             //LoadingPanelShow();
            
            


         },
         deselect: function (list, records) {

         }
     },

 },



         
          

          

        ]
    },
    initialize: function () {

        var currentTime = new Date()
        var month = currentTime.getMonth() + 1


        var monthconvert = ConvertMonth(month);
        // returns the year (four digits)
        var year = currentTime.getFullYear();

     
        Ext.getCmp('lblYearNotificationsPanel').setHtml('<font size="3" color="black">' + year + '-' + '</font>');
        Ext.getCmp('lblMonthNotificationsPanel').setHtml('<font size="3" color="black">' + monthconvert + '&nbsp;&nbsp;' + '</font>');
      
    }
});


var countNotificationTypeNAll=0;
function loadNotificationTypeN_All() {
    var currentTime = new Date()
    var month = currentTime.getMonth() + 1
    var monthconvert = ConvertinputTypeMonth(month);
    var year = currentTime.getFullYear();
    

 //   alert("'" + GetCurrentMyKadNo() + "'");
    Ext.getStore('NotificationTypeNAllStore').getProxy().setExtraParams({
        CR_MykadNo:GetCurrentMyKadNo(),
        Year: year,
        Month: monthconvert
    });
    Ext.StoreMgr.get('NotificationTypeNAllStore').load();




    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('NotificationTypeNAllStore').getProxy().setExtraParams({
            CR_MykadNo: GetCurrentMyKadNo(),
            Year: year,
            Month: monthconvert

        });
        Ext.StoreMgr.get('NotificationTypeNAllStore').load();
        var myStore = Ext.getStore('NotificationTypeNAllStore');
        countNotificationTypeNAll = myStore.getCount();
        Ext.getCmp('labelCountSearchNotificationPanel').setHtml('<font size="2" color="black">(' + countNotificationTypeNAll + ')</font>');
       // console.log(myStore.getCount())
        //Ext.getCmp('lblCountNotificationsPanel').setHtml('<font size="2" color="red"><b>News & Promo-(' + myStore.getCount() + ')</b></font>');
        //   NotificationsPanelHide();
       // alert(countNotificationTypeNAll);

    });
    task.delay(2000);
    LoadingPanelHide();
   

}



function loadNotificationTypeN_All_fromInputMonthYear(y,m) {
  


    //   alert("'" + GetCurrentMyKadNo() + "'");
    Ext.getStore('NotificationTypeNAllStore').getProxy().setExtraParams({
        CR_MykadNo: GetCurrentMyKadNo(),
        Year: y,
        Month: m
    });
    Ext.StoreMgr.get('NotificationTypeNAllStore').load();




    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('NotificationTypeNAllStore').getProxy().setExtraParams({
            CR_MykadNo: GetCurrentMyKadNo(),
            Year: y,
            Month: m

        });
        Ext.StoreMgr.get('NotificationTypeNAllStore').load();
        var myStore = Ext.getStore('NotificationTypeNAllStore');
        countNotificationTypeNAll = myStore.getCount();
        Ext.getCmp('labelCountSearchNotificationPanel').setHtml('<font size="2" color="black">(' + countNotificationTypeNAll + ')</font>');
        // console.log(myStore.getCount())
        //Ext.getCmp('lblCountNotificationsPanel').setHtml('<font size="2" color="red"><b>News & Promo-(' + myStore.getCount() + ')</b></font>');
        //   NotificationsPanelHide();
        // alert(countNotificationTypeNAll);

    });
    task.delay(2000);
    LoadingPanelHide();


}









function inputSearchNotificationPanel_SearchTxtOnKeyUp() {
    console.log('input-SearchNotificationPanel_SearchTxt');
    var countSearchNotification = 0;


    _DataStore_SearchNotificationPanelSearchTxt.clearFilter();

    var queryString = document.getElementById('input-SearchNotificationPanel_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_SearchNotificationPanelSearchTxt.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countSearchNotification = _DataStore_SearchNotificationPanelSearchTxt.getCount();
                Ext.getCmp('labelCountSearchNotificationPanel').setHtml('<font size="3px" color="black">(' + countSearchNotification + ')</font>')
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
           countSearchNotification = _DataStore_SearchNotificationPanelSearchTxt.getCount();
          Ext.getCmp('labelCountSearchNotificationPanel').setHtml('<font size="3px" color="black">(' + countSearchNotification + ')</font>')
    }


    else {
        console.log('tiada2');
        _DataStore_SearchNotificationPanelSearchTxt.clearFilter();
        Ext.getCmp('labelCountSearchNotificationPanel').setHtml('<font size="2" color="black">(' + countNotificationTypeNAll + ')</font>');
        return false;
    }


    //}

}



function openwebsite(val) {
  //  alert(val);
    //  window.location.replace("http://"+val)
    var url = val.trim()
    window.open("http://" + url, "_blank");
}

function enlargeImage() {
    alert('hai');
}


