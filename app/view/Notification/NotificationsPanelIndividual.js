Ext.define('ianMizi.view.Notification.NotificationsPanelIndividual', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'NotificationsPanelIndividual',
    id: 'NotificationsPanelIndividualID',
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
                title: '<font size="4" color="white">News & Promotion</font>',
                docked: 'top',
                id: 'NotificationsPanelIndividualtoolbarTop',
                style: {

                    background: '#f44336',

                },

                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnNotificationsPanelIndividualHome',
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
                                            id: 'btnNotification_NotificationsPanelIndividual',
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
                style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                height: 34,
                hidden:true,
                layout: {
                    type: 'hbox'
                },
                items: [


               {
                   xtype: 'label',
                   id: 'lblCountNotificationsNotificationsPanelIndividual',
                   // hidden:true,
                   margin: '5 0 0 0',
                   html: '<font size="3" color="black">News & Promo-(0)</font>'
               },

                {
                    xtype: 'spacer',

                }, {
                    xtype: 'label',
                    id: 'lblYearNotificationsNotificationsPanelIndividual',
                    margin: '5 0 0 0',
                    html: '2017-'
                },
               {
                   xtype: 'label',
                   id: 'lblMonthNotificationsNotificationsPanelIndividual',
                   margin: '5 0 0 0',
                   html: 'September '
               },
                ]
            },


 {
     xtype: 'list',
     flex: 1,
     store: 'NotificationTypeNStore',
     id: 'NotificationsPanelIndividualID',

     mode: 'SINGLE',
     disableSelection: true,
     itemTpl: '<div class="myContent">' +
                      //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left"><img src="data:image/png;base64,{Logo64}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">{SentFrom}<br>Total Paid:RM{TotalPaid}<br>Account No:{FlatBillAccountNo}<br>Date:{NotificationDate}</th></tr></table>' +

                          // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:solid;border-width:1px;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;background-color:#f44336;color:white" colspan="2">{NotificationDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#f44336;color:white" colspan="2"><img src="{Logo64}"style="width: 172px; height: 172px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>{SentFrom}</b><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="{AdvertisementImage}"style="width: 100%; height: 172px;  max-height:200px; " /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right">Was Read on:<br>{NotificationReadDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right"><button class="button">Delete</button></td></tr></table>' +
                          //  ori '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-top: 1px solid black;overflow:hidden;word-break:normal;text-align:right;background-color:#f00;color:white" colspan="2">Published On:{NotificationDate}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom: 2px solid white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#f00;color:white" colspan="2"><br><img src="{Logo64}" style="width: 142px; height: 142px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>{SentFrom}</b><br>{EnterpriseAddress}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="{AdvertisementImage}"style="width: 100%; height: 172px;  max-height:200px; " /><br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button OnClick="openwebsite(\' {EnterpriseWebsite} \');" style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><img src="resources/icons/webRed.png" style="float:left;margin-right:0.5em;width: 16px; height: 16px;"><u>Website</u></button><button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/EmailRed.png" style="float:left;margin-right:0.5em;width: 16px; height: 16px;"><a href="mailto:{EnterpriseEmail}">Email&nbsp;&nbsp;</a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/telephoneRed.png" style="float:left;margin-right:0.5em;width: 20px; height: 16px;"><a href="tel:{EnterprisePhoneNo}">Call</a>&nbsp;&nbsp;&nbsp;&nbsp;</button><br><br></td></tr></table>' +

 '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px none black;overflow:hidden;word-break:normal;text-align:right;background-color:#F7FDFA;color:#616161" colspan="2">Published On:{NotificationDate}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px none white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#F7FDFA;color:#616161" colspan="2"><br><img src="{Logo64}" style="width: 122px; height: 122px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>{SentFrom}</b><br>{EnterpriseAddress}<br><font color="#616161" size="2px">________________________________________________</font></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:{NotificationTitle}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>{Notification}<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="{AdvertisementImage}"style="width: 100%; height: 172px;  max-height:200px; " /><br><br><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button  style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><a href={EnterpriseWebsite}><img src="resources/icons/websiteblackedit.png" style="width: 36px; height: 36px;" /></a></button>&nbsp;&nbsp;<button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/emailblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:{EnterpriseEmail}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/callblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/fbblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/twiterblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/instablackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you turned on for product and promotion update.To unscribed this nofication go to enterprise info and turn off the notification feature</i> </font><br><br><font  color="#616161" size="1px">Powered By:Cloud-Receipts.Com</font></td></tr></table>' +


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
