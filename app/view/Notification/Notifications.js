//Ext.define('ReceiptsWorld.view.Notification.Notifications', {

//});




//var _NotificationsPanel;
//var isFromNotification = 'N';
//var countNotification;
//function NotificationsPanel() {
//    _NotificationsPanel =
//      Ext.create('Ext.Panel', {
//          requires: [
//     'Ext.dataview.List',
//     'Ext.data.Store'
//          ],
//          xtype: 'panel',
//          //height: 200,
//          height: '90%',
//          width: '100%',
//          id: 'NotificationsPanelD',
//          draggable: false,
//          right: 0,
//          zIndex:30,
//          // bottom: 260,
//          top: 45,
//          modal: true,
//          hideOnMaskTap: true,
//          showAnimation: {
//              type: 'slideIn',
//              direction: 'left',
//              duration: 200,
//              //easing: 'ease-in'
//          },
//          hideAnimation: {
//              //type: 'reveal',
//              //duration: 250,
//              type: 'slideOut',

//              direction: 'right',
//              duration: 200
//          },
//          style: 'border-bottom:1px solid;background-color:#f44336;',
//          items: {

//              xtype: 'container',
//              //style: 'background-color: transparent;',
//              layout: {
//                  type: 'vbox',
//                  //pack: 'left',
//                  //align: 'end'
//              },

//              items: [




//                     {
//                         xtype: 'container',
//                         style: 'border-bottom:1px solid;background-color:#f44336;',
//                         layout: {
//                             type: 'hbox'
//                         },
//                         items: [
                     

//                        {
//                            xtype: 'label',
//                            id: 'lblNotifications',
//                            margin: '-5 0 0 0',
//                            html: '<font size="3" color="white">Notification</font>'
//                        },

                        
//                         ]
//                     },

//                     {
//                         xtype: 'list',
//                         //flex: 1,
//                         store: 'NotificationsStore',
//                         id: 'NotificationsStoreID',
//                         mode: 'SINGLE',
//                         width:'100%',
//                         disableSelection: true,
//                         itemTpl: '<div class="myContent">' +
//                       '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left"><img src="data:image/png;base64,{Logo64}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><b>{NotificationTitle}</b><br>{SentFrom}<br>Date:{NotificationDate}</th></tr></table>' +
//                           //   '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{SentFrom}<br>Total Paid:RM{TotalPaid}<br>Account No:{FlatBillAccountNo}<br>Date:{NotificationDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{Logo64}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +
//                               '</div>',
//                        height: '80%',
//                       //  height: 160,

//                         emptyText: '<div class="myContent">No Notification</div>',
//                         listeners: {
//                             itemsingletap: function (list, idx, target, records, evt) {
                               
                               
//                               //  LoadingPanelShow();
//                                 //Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
//                                 //Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
//                                 //Ext.getCmp('mainView').setActiveItem(2);
//                                 //Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
//                                 //Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
//                                 var NT = records.get('NotificationType');
//                                 var ID = records.get('ID');
//                                 alert(NT);
//                                 alert(ID);
//                                 console.log(NT);
//                                 if (NT == 'N') {
//                                     // loadNotificationTypeN(ID);
//                                     loadNotificationTypeN_All();
//                                     Ext.getCmp('mainView').setActiveItem(5);
//                                     isFromNotification = 'Y';
//                                 }else
//                                 {
//                                     isFromNotification = 'Y';
//                                     NotificationsPanelHide();
//                                     Ext.getCmp('mainView').setActiveItem(1);
//                                     loadSummaryReceipt(GetCurrentMyKadNo(), "2", GetCurrentAccountNo(), "Status")
//                                     Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
//                                     Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
//                                     Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                              

                                    
//                                 }
//                                 UpdateNotificationReadStatus(ID)
//                                 //FlatBillStatus = records.get('FlatBillStatus');
//                                 //FlatBillUpdateDate = records.get('FlatBillUpdateDate');
//                                 //Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
//                                 //StatusDetailReceiptMenuShow();
//                                 //Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
//                                 //    BillID: FlatBillID
//                                 //});
//                                 //Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
//                                 //detailsReceiptsprocess(FlatBillID);

//                             },
//                             deselect: function (list, records) {

//                             }
//                         },

//                     },

                     

//              ]

//          },


//      });
//    return _NotificationsPanel;
//}



//function NotificationsPanelHide() {

//    if (isFromDrawerMenu != 'Y') {
//        _NotificationsPanel.hide();

//    }
//    isFromDrawerMenu = 'N';
//    routeNotificationIsOpen = 'N';
//}



//function NotificationsPanelShow() {
//    routeNotificationIsOpen = 'Y';
//    Ext.Viewport.remove(_NotificationsPanel);
//    this.overlay = Ext.Viewport.add(NotificationsPanel());
//    this.overlay.show();
//    loadNotification();
//}

