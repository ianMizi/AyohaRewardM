Ext.define('ianMizi.view.Menu.DrawerMenu', {

});


var _DrawerMenu;
var isFromDrawerMenu = 'N';
function DrawerMenuPanel() {

    _DrawerMenu =
          Ext.create('Ext.Container', {

              xtype: 'container',
              height: '100%',
             // height: 615,
              width: 280,
              id: 'DrawerMenuID',
              zIndex: 100,
              // centered: true,
              left: -1,
              //top:32,
              modal: true,
              hideOnMaskTap: true,
              layout:{
                  type:'fit'
              },
              showAnimation: {
                  type: 'slideIn',
                  direction: 'right',
                  duration: 250,
                  //easing: 'ease-in'
              },
              hideAnimation: {
                  //type: 'reveal',
                  //duration: 250,
                  type: 'slideOut',

                  direction: 'left',
                  duration: 250
              },

              //   style: "background-color: #157fcc; color:white; border:2px solid white",
              items: [


                    {

                        xtype: 'container',
                        // style: "background-color: #157fcc; color:white;",
                        style: 'border-right:1px solid;background-color:white;',
                       // style: 'background-image: url("resources/icons/slideNavi1.PNG"); background-size: 100% 100%;',
                        height: '100%',
                       // height: 615,
                        width: 280,
                        // top:5,
                        layout: {
                            type: 'vbox',
                            //pack: 'left',
                            //align: 'end'
                        },
                    

                        items: [



                          






                            {
                                xtype: 'container',
                              //  style: 'border-bottom:1px solid;background-color:#D25959;',
                              //////  style: 'border-bottom:1px solid;background-color:white;',
                               // style: 'border-bottom:1px solid;background-color:#F7FDFA;',
                                style: GetCurrentToolbarStyle(),
                              //  style: 'background-image: url("resources/icons/BGsummaryReceipt4.jpg"); background-size: 100% 100%;border-bottom:1px solid;',
                                //height: 250,
                                height: '100%',
                                width:280,
                                layout: {
                                    type: 'vbox',
                                    //pack: 'center',
                                    align: 'center',

                                }, scrollable: {
                                    direction: 'vertical',
                                    directionLock: true
                                },
                              
                                items: [

                                    {
                                        xtype: 'container',
                                        style: 'background-color:transparent;',
                                      //  style: 'border-bottom:1px none;background-color:#f44336;',
                                       // style: 'background-image: url("resources/icons/headerDrawerMenu.jpg"); background-size: 100% 100%;border-bottom 0px none;',
                                        width: 280,
                                        layout: {
                                            type: 'hbox',
                                            
                                        },
                                        items: [
                                            {
                                                xtype: 'button',
                                                id: 'btnDrawerMenuCRVersion',
                                                html: '<font size=2px color=white><b>Basic</b></font>',
                                                ui: 'plain',
                                                handler: function () {
                                                    AboutPanelShow();

                                                }
                                            },
                             {
                                 xtype: 'spacer'
                             },

                                        {
                                            xtype: 'button',
                                            id: 'btnDrawerMenuCRImageSignature',
                                            // badgeText: '1',
                                            html: '<div ><img src="resources/icons/CloudReceipt3.png" width="32" height="32" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                                AboutPanelShow();
                                               
                                               
                                              
                                            }
                                        },

                                        ]
                                    },

                                      {
                                          xtype: 'container',
                                          //  style: 'border-bottom:1px solid;background-color:#D25959;',
                                        //  style: 'border-bottom:1px solid;background-color:#f44336;',
                                          // style: 'border-bottom:1px solid;background-color:#F7FDFA;',
                                       //   style: 'background-image: url("resources/icons/BGsummaryReceipt4.jpg"); background-size: 100% 100%;border-bottom:1px solid;',
                                          style: 'background-color:transparent;',
                                          //height: 250,
                                        
                                          width: 280,
                                          layout: {
                                              type: 'vbox',
                                              //pack: 'center',
                                              align: 'center',

                                          },
                                          items: [

                                                {
                                                    xtype: 'button',
                                                    height: 178,
                                                    width: 178,
                                                    id: 'btnImgAccount',
                                                    ui: 'plain',
                                                    margin: '3 0 0 0',
                                                    // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                                    html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px none white; border-radius: 50%; max-width:200px;" />',
                                                    handler: function () {

                                                        DrawerMenuHide();
                                                        if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                                        { StatusDetailReceiptMenuHide(); }

                                                        if (IsDetailReceiptMenuShow == 'Yes')
                                                        { DetailReceiptMenuHide(); }

                                                        if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                                            DetailReceiptMenuPanelHide();
                                                        }
                                                        routesArray.push("mainView,view,4");
                                                        Ext.getCmp('mainView').setActiveItem(4);
                                                        Ext.getCmp('Login_CR_Password').setHidden(false);
                                                        Ext.getCmp('Login_CR_Password_txt').setHidden(true);
                                                        Ext.getCmp('btnSavePassword').setDisabled(true);
                                                        routeCurrPage = '4';
                                                        //  document.getElementById("imageUpload").addEventListener("click", EnableuploadPicProfile);
                                                        //   document.getElementById("imageUpload").addEventListener("change", EnableuploadPicProfile);
                                                        setMyAccountInfo();
                                                    }
                                                },
                                                 {

                                                     id: 'loginInfoPanelUserName',
                                                     html: '<font size=2px color=white><b>User@Cloud-Receipts.Com</b></font>',
                                                 },

                               {
                                   id: 'loginInfoPaneltxtlastlogin',
                                   html: '<font size=2px color=white><b>Last Login</b></font>',
                               },
                              {

                                  id: 'loginInfoPanelLastLogin',
                                  html: '<font size=2px color=white><i>19-02-1983 12:45:23</i></font>',
                              },
                                          ]
                                      },
                                  
                            





                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height:62,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '0 0 0 10',
                                   id: 'btnMyAccount',
                                   html: '<img src="resources/icons/myAccountBlack1.png" style="width: 52px; height: 52px;" />',
                                   handler: function () {
                                       DrawerMenuHide();
                                       FloatPanel_AyohaEnterpriseAccountShow();
                                    ////////   if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                    ////////   { StatusDetailReceiptMenuHide(); }

                                    ////////   if (IsDetailReceiptMenuShow == 'Yes')
                                    ////////   { DetailReceiptMenuHide(); }

                                    ////////   if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                    ////////       DetailReceiptMenuPanelHide();
                                    ////////   }
                                    ////////   routesArray.push("mainView,view,4");
                                    ////////   Ext.getCmp('mainView').setActiveItem(4);
                                    ////////   Ext.getCmp('Login_CR_Password').setHidden(false);
                                    ////////   Ext.getCmp('Login_CR_Password_txt').setHidden(true);
                                    ////////   Ext.getCmp('btnSavePassword').setDisabled(true);
                                    ////////   routeCurrPage = '4';
                                    ////////   isPushroutesArrayFirstLoad = 'No';
                                    //////// //  document.getElementById("imageUpload").addEventListener("click", EnableuploadPicProfile);
                                    //////////   document.getElementById("imageUpload").addEventListener("change", EnableuploadPicProfile);
                                    ////////   setMyAccountInfo();
                                  
                                   }
                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnMyAccountlbl',
                                     width:200,
                                     margin: '15 0 0 -30',
                                     html: '<font size=4px color=black><b>My Account</b></font>',
                                     handler: function () {
                                         DrawerMenuHide();
                                         FloatPanel_AyohaEnterpriseAccountShow();
                                         //StatusDetailReceiptMenuHide();
                                       //  if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       //  { StatusDetailReceiptMenuHide(); }

                                       //  if (IsDetailReceiptMenuShow == 'Yes')
                                       //  { DetailReceiptMenuHide(); }

                                       //  if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                       //      DetailReceiptMenuPanelHide();
                                       //  }
                                       //  routesArray.push("mainView,view,4");
                                       //  Ext.getCmp('mainView').setActiveItem(4);
                                       //  Ext.getCmp('Login_CR_Password').setHidden(false);
                                       //  Ext.getCmp('Login_CR_Password_txt').setHidden(true);
                                       //  Ext.getCmp('btnSavePassword').setDisabled(true);
                                       //  routeCurrPage = '4';
                                       //  isPushroutesArrayFirstLoad = 'No';
                                       ////  document.getElementById("imageUpload").addEventListener("click", EnableuploadPicProfile);
                                       ////  document.getElementById("imageUpload").addEventListener("change", EnableuploadPicProfile);
                                       //  setMyAccountInfo();
                                        
                                     }

                                 },

                                  
                                  ]
                              },

                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '0 0 0 10',
                                   id: 'btnEnterpriseList',
                                   html: '<img src="resources/icons/enterprise.png" style="width: 52px; height: 52px;" />',
                                   handler: function () {
                                    
                                       DrawerMenuHide();
                                       if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       { StatusDetailReceiptMenuHide(); }
                                       if (IsDetailReceiptMenuShow == 'Yes')
                                       { DetailReceiptMenuHide(); }

                                       if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                           DetailReceiptMenuPanelHide();
                                       }
                                       document.getElementById("input-searchEnterprise").addEventListener("keyup", SearchEnterpriseOnKeyUp);
                                       //    document.getElementById("input-searchEnterprise").addEventListener("keydown", SearchEnterpriseOnKeyDown);
                                       routesArray.push("mainView,view,9");
                                       Ext.getCmp('mainView').setActiveItem(9);
                                      
                                       LoadingPanelShow();
                                       routeCurrPage = '9';
                                       loadEnterpriseList();
                                       _DataStore_EnterprisegetAllStore = Ext.getStore('EnterprisegetAllStore');
                                    
                                   }
                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnEnterpriseListlbl',
                                     width: 200,
                                     margin: '15 0 0 -30',
                                     html: '<font size=4px color=black><b>Enterprises</b></font>',
                                     handler: function () {
                                       
                                         DrawerMenuHide();                                      
                                         if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         { StatusDetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuShow == 'Yes')
                                         { DetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                             DetailReceiptMenuPanelHide();
                                         }
                                         Ext.getCmp('fieldsetEnterpriseSubscriptions').setHidden(false);
                                         document.getElementById("input-searchEnterprise").addEventListener("keyup", SearchEnterpriseOnKeyUp);
                                         //  document.getElementById("input-searchEnterprise").addEventListener("keydown", SearchEnterpriseOnKeyDown);
                                         routesArray.push("mainView,view,9");
                                         Ext.getCmp('mainView').setActiveItem(9);
                                         //Ext.getCmp('TreatmentList_TreatmentList_SearchTxt').focus(true, 200);
                                         routeCurrPage = '9';
                                         LoadingPanelShow();
                                         loadEnterpriseList();
                                         _DataStore_EnterprisegetAllStore = Ext.getStore('EnterprisegetAllStore');
                                        
                                     }

                                 },


                                  ]
                              },


                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '0 0 0 10',
                                   id: 'btnCloudReceipts',
                                   html: '<img src="resources/icons/CloudReceipt1.png" style="width: 52px; height: 52px;" />',

                                   handler: function () {
                                      LoadingPanelShow();
                                       DrawerMenuHide();
                                       StatusDetailReceiptMenuHide();
                                       routeCurrPage = '1';
                                    //   reChangetxtandButton('NewReceipt');
                                       if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       { StatusDetailReceiptMenuHide(); }
                                       if (IsDetailReceiptMenuShow == 'Yes')
                                       { DetailReceiptMenuHide(); }

                                       if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                           DetailReceiptMenuPanelHide();
                                       }

                                       //Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                                       //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                       //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
                                       //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                       //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                       //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                       //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                       //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                       //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);

                                       //routesArray.push("mainView,view,1");

                                       //routesArray.push("NewReceipt");
                                       //loadlistsummaryreceipt('NewReceipt');
                                       //Ext.getCmp('mainView').setActiveItem(1);



                                       FloatPanel_SubscriberMenuShow();


                                       routeCurrPage = '16';
                                       //  routesArray.push("mainView,view,1");

                                       //routesArray.push("NewReceipt");
                                       //loadlistsummaryreceipt('NewReceipt');

                                       Ext.getCmp('mainView').setActiveItem(16);
                                       loadSubscriberLoadByEnterpriseAccountNoStore();

                                       }





                                     
                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnCloudReceiptslbl',
                                     width: 200,
                                     margin: '15 0 0 -30',
                                     html: '<font size=4px color=black><b>My Loyalty Customers</b></font>',
                                     handler: function () {
                                         LoadingPanelShow();
                                         DrawerMenuHide();
                                         if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         { StatusDetailReceiptMenuHide(); }


                                         if (IsDetailReceiptMenuShow == 'Yes')
                                         { DetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                             DetailReceiptMenuPanelHide();
                                         }
                                         ////////////////routeCurrPage = '1';
                                         //////////////////  routesArray.push("mainView,view,1");

                                         ////////////////routesArray.push("NewReceipt");
                                         ////////////////loadlistsummaryreceipt('NewReceipt');
                                       
                                         ////////////////Ext.getCmp('mainView').setActiveItem(1);



                                         routeCurrPage = '16';
                                         //  routesArray.push("mainView,view,1");

                                         //routesArray.push("NewReceipt");
                                         //loadlistsummaryreceipt('NewReceipt');

                                         Ext.getCmp('mainView').setActiveItem(16);



                                         FloatPanel_SubscriberMenuShow();
                                         loadSubscriberLoadByEnterpriseAccountNoStore();




                                         //reChangetxtandButton('NewReceipt');

                                         //loadSummaryReceipt(GetCurrentMyKadNo(), "2", GetCurrentAccountNo(), "Status")
                             
                                         //Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                                         //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                         //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
                                         //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                         //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                         //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                         //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                         //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                         //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                                     }
                                 },


                                  ]
                              },
                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 58,
                                   margin: '0 0 0 10',
                                   id: 'btnSearchCloudReceipts',
                                   html: '<img src="resources/icons/SearchBlack.png" style="width: 50px; height: 48px;" />',

                                   handler: function () {
                                       DrawerMenuHide();
                                       if (IsDetailReceiptMenuShow == 'Yes')
                                       { DetailReceiptMenuHide(); }

                                       if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                           DetailReceiptMenuPanelHide();
                                       }
                                       if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       { StatusDetailReceiptMenuHide(); }
                                       //routeCurrPage = '7';
                                       //createSliderTotalPaidRange();
                                       //routesArray.push("mainView,view,7");
                                       //Ext.getCmp('mainView').setActiveItem(7);
                                       //GanerateCalender();



                                       routeCurrPage = '15';
                                       routesArray.push("mainView,view,15");
                                       // routesArray.push("basicform,tab,0");
                                       Ext.getCmp('mainView').setActiveItem(15);
                                   }






                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnSearchCloudReceiptslbl',
                                     width: 200,
                                     margin: '15 0 0 -30',
                                     html: '<font size=4px color=black><b>Search Receipts</b></font>',
                                     handler: function () {
                                        
                                         DrawerMenuHide();
                                         if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         { StatusDetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuShow == 'Yes')
                                         { DetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                             DetailReceiptMenuPanelHide();
                                         }
                                         //routeCurrPage = '7';
                                         //createSliderTotalPaidRange();
                                         //routesArray.push("mainView,view,7");
                                         //Ext.getCmp('mainView').setActiveItem(7);
                                         //GanerateCalender();


                                         routeCurrPage = '15';
                                         routesArray.push("mainView,view,15");
                                         // routesArray.push("basicform,tab,0");
                                         Ext.getCmp('mainView').setActiveItem(15);
                                      
                                     }
                                 },


                                  ]
                              },

                              //{
                              //    xtype: 'container',
                              //    style: 'border-bottom:0px solid;background-color:white;',
                              //    width: 280,
                              //    height: 62,
                              //   // hidden:true,
                              //    layout: {
                              //        type: 'hbox'
                              //    },
                              //    items: [
                              // {
                              //     xtype: 'button',
                              //     ui: 'plain',
                              //     height: 62,
                              //     margin: '0 0 0 10',
                              //     id: 'btnDashboard',
                              //     html: '<img src="resources/icons/DashboardBlack.png" style="width: 52px; height: 52px;" />',

                              //     handler: function () {
                              //         DrawerMenuHide();
                              //         // StatusDetailReceiptMenuHide();
                              //         if (_StatusDetailReceiptMenusIsShow == 'Yes')
                              //         { StatusDetailReceiptMenuHide(); }

                              //         if (IsDetailReceiptMenuShow == 'Yes')
                              //         { DetailReceiptMenuHide(); }

                              //         if (IsDetailReceiptMenuPanelShow == 'Yes') {
                              //             DetailReceiptMenuPanelHide();
                              //         }
                              //         routeCurrPage = '6';
                              //         Ext.getCmp('mainView').setActiveItem(6);
                              //     }






                              // },

                              //   {
                              //       xtype: 'button',
                              //       ui: 'plain',
                              //       id: 'btnDashboardlbl',
                              //       width: 200,
                              //       margin: '15 0 0 -25',
                              //       //  html: '<font style="size:4px;color:black"><b>DashBoard</b></font>',
                              //       html: '<img src="resources/icons/dashboard-rednewlatest.png" style="width: 150px; height: 48px;" />',
                              //       handler: function () {
                              //        //   LoadingPanelShow();
                              //           DrawerMenuHide();
                              //           if (_StatusDetailReceiptMenusIsShow == 'Yes')
                              //           { StatusDetailReceiptMenuHide(); }


                                     

                              //           if (IsDetailReceiptMenuShow == 'Yes')
                              //           { DetailReceiptMenuHide(); }

                              //           if (IsDetailReceiptMenuPanelShow == 'Yes') {
                              //               DetailReceiptMenuPanelHide();
                              //           }
                              //           routeCurrPage = '6';
                              //           Ext.getCmp('mainView').setActiveItem(6);


                                      
                              //       }
                              //   },


                              //    ]
                              //},




                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  hidden: true,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '0 0 0 10',
                                   id: 'btnScanQRcode',
                                   html: '<img src="resources/icons/qrCodeicon.png" style="width: 52px; height: 52px;" />',

                                   handler: function () {
                                       //DrawerMenuHide();
                                       //StatusDetailReceiptMenuHide();
                                       //routeCurrPage = '6';
                                       //Ext.getCmp('mainView').setActiveItem(6);
                                   }






                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnScanQrCodelbl',
                                     width: 200,
                                     margin: '15 0 0 -30',
                                     html: '<font size=4px color=black><b>Scan QR Code</b></font>',
                                     handler: function () {
                                         //   LoadingPanelShow();
                                         //DrawerMenuHide();
                                         //if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         //{ StatusDetailReceiptMenuHide(); }
                                         //routeCurrPage = '6';
                                         //Ext.getCmp('mainView').setActiveItem(6);



                                     }
                                 },


                                  ]
                              },





                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '0 0 0 10',
                                   id: 'btnDrawerMenuNotification',
                                   html: '<img src="resources/icons/newsnpromo.png" style="width: 52px; height: 52px;" />',

                                   handler: function () {
                                       LoadingPanelShow();
                                       DrawerMenuHide();
                                       if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       { StatusDetailReceiptMenuHide(); }

                                      

                                       if (IsDetailReceiptMenuShow == 'Yes')
                                       { DetailReceiptMenuHide(); }

                                       if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                           DetailReceiptMenuPanelHide();
                                       }
                                       isFromDrawerMenu = 'Y';
                                    
                                       routeCurrPage = '5';

                                       var count = countNotificationTypeNN;
                                       console.log(count);
                                       if (count >= 1) {
                                           loadNotificationSummary();
                                       } else {
                                           loadNotificationTypeN_All();
                                           routesArray.push("mainView,view,5");
                                           Ext.getCmp('mainView').setActiveItem(5);
                                       }

                                       document.getElementById("input-SearchNotificationPanel_SearchTxt").addEventListener("keyup", inputSearchNotificationPanel_SearchTxtOnKeyUp);
                                       _DataStore_SearchNotificationPanelSearchTxt = Ext.getStore('NotificationTypeNAllStore');
                                   }






                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnDrawerMenuNotificationlbl',
                                     width: 205,
                                     margin: '15 0 0 -30',
                                     html: '<font size=4px color=black><b>News/Promotion</b></font>',
                                     handler: function () {
                                         LoadingPanelShow();
                                         DrawerMenuHide();
                                         if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         { StatusDetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuShow == 'Yes')
                                         { DetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                             DetailReceiptMenuPanelHide();
                                         }
                                         isFromDrawerMenu = 'Y';
                                         routeCurrPage = '5';
                                         var count = countNotificationTypeNN;
                                         console.log(count);
                                         if (count >= 1) {
                                             loadNotificationSummary();
                                         } else
                                         {
                                             routesArray.push("mainView,view,5");
                                             Ext.getCmp('mainView').setActiveItem(5);
                                             loadNotificationTypeN_All();
                                         }
                                        
                                         document.getElementById("input-SearchNotificationPanel_SearchTxt").addEventListener("keyup", inputSearchNotificationPanel_SearchTxtOnKeyUp);
                                         _DataStore_SearchNotificationPanelSearchTxt = Ext.getStore('NotificationTypeNAllStore');

                                       
                                     }
                                 },


                                  ]
                              },

                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '2 0 0 10',
                                   id: 'btnLogout',
                                   html: '<img src="resources/icons/logoutBlack2.png" style="width: 52px; height: 52px;" />',
                                   handler: function () {
                                       Ext.Viewport.setMasked(false);
                                       DrawerMenuHide();
                                       //////////StatusDetailReceiptMenuHide();

                                       ////////if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       ////////{ StatusDetailReceiptMenuHide(); }

                                       ////////if (IsDetailReceiptMenuShow == 'Yes')
                                       ////////{ DetailReceiptMenuHide(); }

                                       ////////if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                       ////////    DetailReceiptMenuPanelHide();
                                       ////////}
                                       ////////routeCurrPage = '0';
                                       ////////setTheme();
                                       ////////routesArray.push("mainView,view,0");
                                       ////////Ext.getCmp('mainView').setActiveItem(0);



                                       routesArray.push("mainView,view,17");
                                       Ext.getCmp('mainView').setActiveItem(17);
                                   }
                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnLogoutlbl',
                                     width: 280,
                                     margin: '15 0 0 -85',
                                     html: '<font size=4px color=black><b>LogOut</b></font>',
                                     handler: function () {
                                         Ext.Viewport.setMasked(false);
                                         DrawerMenuHide();
                                         // StatusDetailReceiptMenuHide();

                                         //////////if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         //////////{ StatusDetailReceiptMenuHide(); }

                                         //////////if (IsDetailReceiptMenuShow == 'Yes')
                                         //////////{ DetailReceiptMenuHide(); }

                                         //////////if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                         //////////    DetailReceiptMenuPanelHide();
                                         //////////}
                                         //////////routeCurrPage = '0';
                                         //////////setTheme();
                                         //////////routesArray.push("mainView,view,0");
                                         //////////Ext.getCmp('mainView').setActiveItem(0);

                                         routesArray.push("mainView,view,17");
                                         Ext.getCmp('mainView').setActiveItem(17);
                                     }
                                 },
                                                                   


                                  ]
                              },


                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  // hidden:true,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '0 0 0 10',
                                   id: 'btnDashboard',
                                   html: '<img src="resources/icons/DashboardBlack.png" style="width: 52px; height: 52px;" />',

                                   handler: function () {
                                       //DrawerMenuHide();
                                       //// StatusDetailReceiptMenuHide();
                                       //if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       //{ StatusDetailReceiptMenuHide(); }

                                       //if (IsDetailReceiptMenuShow == 'Yes')
                                       //{ DetailReceiptMenuHide(); }

                                       //if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                       //    DetailReceiptMenuPanelHide();
                                       //}

                                     
                                       //Ext.getCmp('DashboardstoolbarTop').setTitle('<font size="4" color="white">Dashboard</font>');
                                       //Ext.getCmp('btnlblDashboardandCloudBill').setHtml('<font size="3" color="grey" ><b>Real time Dashboard, captured every<br> transaction made by enterprise <br>and insight your expenses<br> in fancy graphical graph</b></font>');
                                       //routeCurrPage = '6';
                                       //routesArray.push("mainView,view,6");
                                       //Ext.getCmp('mainView').setActiveItem(6);








                                       LoadingPanelShow();
                                       DrawerMenuHide();
                                       if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       { StatusDetailReceiptMenuHide(); }


                                       if (IsDetailReceiptMenuShow == 'Yes')
                                       { DetailReceiptMenuHide(); }

                                       if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                           DetailReceiptMenuPanelHide();
                                       }
                                       routeCurrPage = '1';
                                       //  routesArray.push("mainView,view,1");

                                       routesArray.push("NewReceipt");
                                       loadlistsummaryreceipt('NewReceipt');







                                       routeCurrPage = '14';
                                       routesArray.push("mainView,view,14");
                                       Ext.getCmp('mainView').setActiveItem(14);



                                       //Ext.getCmp('tabpanelLoyaltyCardPoint').getTabBar().hide();


                                       //Ext.getCmp('DashboardstoolbarTop').setTitle('<font size="4" color="white">Loyalty Card</font>');
                                       LoyaltyCardPointAdjustHeight();
                                   }






                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnDashboardlbl',
                                     width: 200,
                                     height:55,
                                     margin: '5 0 0 -20',
                                     //  html: '<font style="size:4px;color:black"><b>DashBoard</b></font>',
                                     html: '<img src="resources/icons/dashboard-rednewlatest.png" style="width: 150px; height: 48px;" />',
                                     handler: function () {
                                         ////   LoadingPanelShow();
                                         //DrawerMenuHide();
                                         //if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         //{ StatusDetailReceiptMenuHide(); }




                                         //if (IsDetailReceiptMenuShow == 'Yes')
                                         //{ DetailReceiptMenuHide(); }

                                         //if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                         //    DetailReceiptMenuPanelHide();
                                         //}
                                         //routeCurrPage = '6';
                                         //routesArray.push("mainView,view,6");
                                         //Ext.getCmp('mainView').setActiveItem(6);
                                         //Ext.getCmp('DashboardstoolbarTop').setTitle('<font size="4" color="white">Dashboard</font>');
                                         //Ext.getCmp('btnlblDashboardandCloudBill').setHtml('<font size="3" color="grey" ><b>Real time Dashboard, captured every<br> transaction made by enterprise <br>and insight your expenses<br> in fancy graphical graph</b></font>');

                                       
                                         LoadingPanelShow();
                                         DrawerMenuHide();
                                         if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         { StatusDetailReceiptMenuHide(); }


                                         if (IsDetailReceiptMenuShow == 'Yes')
                                         { DetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                             DetailReceiptMenuPanelHide();
                                         }
                                         routeCurrPage = '1';
                                         //  routesArray.push("mainView,view,1");

                                         routesArray.push("NewReceipt");
                                         loadlistsummaryreceipt('NewReceipt');


                                      



                                         routeCurrPage = '14';
                                         routesArray.push("mainView,view,14");
                                         Ext.getCmp('mainView').setActiveItem(14);


                                         //Ext.getCmp('tabpanelLoyaltyCardPoint').getTabBar().hide();



                                         ////Ext.getCmp('DashboardstoolbarTop').setTitle('<font size="4" color="white">Loyalty Card</font>');
                                         LoyaltyCardPointAdjustHeight();

                                     }
                                 },


                                  ]
                              },



                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 62,
                                  // hidden:true,
                                  layout: {
                                      type: 'hbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 62,
                                   margin: '0 0 0 10',
                                   id: 'btnCloudBill',
                                   html: '<img src="resources/icons/cloudbill.png" style="width: 52px; height: 52px;" />',

                                   handler: function () {
                                       DrawerMenuHide();
                                       // StatusDetailReceiptMenuHide();
                                       if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                       { StatusDetailReceiptMenuHide(); }

                                       if (IsDetailReceiptMenuShow == 'Yes')
                                       { DetailReceiptMenuHide(); }

                                       if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                           DetailReceiptMenuPanelHide();
                                       }
                                       routeCurrPage = '13';
                                       routesArray.push("mainView,view,13");
                                       Ext.getCmp('mainView').setActiveItem(13);






                                       Ext.getCmp('DashboardstoolbarTop').setTitle('<font size="4" color="white">Loyalty Card</font>');
                                     //  Ext.getCmp('btnlblDashboardandCloudBill').setHtml('<font size="3" color="grey" ><b>Receive real time digital bill<br> in a single place. <brTnen,  connect to payment gateway for <br> make payment.easy and all centraliized!</b></font>');
                                   }






                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     id: 'btnCloudBilllbl',
                                     width: 200,
                                     height: 55,
                                     margin: '5 0 0 -20',
                                     //  html: '<font style="size:4px;color:black"><b>DashBoard</b></font>',
                                     html: '<img src="resources/icons/cloudbills.png" style="width: 150px; height: 48px;" />',
                                     handler: function () {
                                         //   LoadingPanelShow();
                                         DrawerMenuHide();
                                         if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                         { StatusDetailReceiptMenuHide(); }




                                         if (IsDetailReceiptMenuShow == 'Yes')
                                         { DetailReceiptMenuHide(); }

                                         if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                             DetailReceiptMenuPanelHide();
                                         }
                                         //routeCurrPage = '6';
                                         //routesArray.push("mainView,view,6");
                                         //Ext.getCmp('mainView').setActiveItem(6);
                                         //Ext.getCmp('DashboardstoolbarTop').setTitle('<font size="4" color="white">Cloud Bills</font>');


                                         routeCurrPage = '13';
                                         routesArray.push("mainView,view,13");
                                         Ext.getCmp('mainView').setActiveItem(13);






                                         Ext.getCmp('DashboardstoolbarTop').setTitle('<font size="4" color="white">Loyalty Card</font>');


                                      //   Ext.getCmp('btnlblDashboardandCloudBill').setHtml('<font size="3" color="grey" ><b>Receive real time digital bill<br> in a single place. <br>Then,  connect to payment gateway for <br> make payment<br>.Easy and  centraliized!</b></font>');


                                     }
                                 },


                                  ]
                              },
                              {
                                  xtype: 'container',
                                  style: 'border-bottom:0px solid;background-color:white;',
                                  width: 280,
                                  height: 262,
                                

                                  layout: {
                                      type: 'vbox'
                                  },
                                  items: [
                               {
                                   xtype: 'button',
                                   ui: 'plain',
                                   height: 162,
                                   margin: '2 0 0 10',
                                   id: 'btnAboutCloudReceipts',
                                   html: '<img src="resources/icons/CloudReceipt1.png" style="width: 152px; height: 152px;" />',
                                   handler: function () {
                                       AboutPanelShow();
                                   }
                               },

                                 {
                                     xtype: 'button',
                                     ui: 'plain',
                                     align:'strecth',
                                     height: 42,
                                     margin: '-28 0 0 0',
                                     id: 'btnAboutCloudReceiptsAbout',
                                     html: '<font size="2" color="black">About Cloud-Receipt Application</font>',
                                     handler: function () {
                                         AboutPanelShow();
                                     }
                                   
                                   //  html: '<a href="fb://page/1999591407027990" target="_blank" rel="alternate">Abouts Cloud-Recebbbbiptms<br>v Standard 1.0</a>'
                                 },


                                   //{
                                   //    xtype: 'button',
                                   //    ui: 'plain',
                                   //    height: 162,
                                   
                                   //    id: 'btnAboutCloudReceipt1s',
                                   //    html: '<img src="resources/icons/CloudReceipt5.png" style="width: 152px; height: 152px;" />'
                                   //},
                                  ]
                              },

                                     



                                ]
                            },



                           

                            //{
                            //    margin: '-50 0 0 5',
                            //    html: '<font size=2px color=black><u><b>ATTract-Angkasa Trigger Tracking <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and Trace&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></u><br>This application is initiated by The<br> National Space Agency(ANGKASA)<br>under The Ministry of Science,<br>Technology and Innovation(MOSTI) <br> funded by MOSTI Social Innovation<br> (MSI)Grant.</font>',
                            //},




                        ]

                    },

                     


              ],



          });

    return _DrawerMenu





}


function DrawerMenuShow() {
    Ext.Viewport.remove(_DrawerMenu);
    this.overlay = Ext.Viewport.add(DrawerMenuPanel());
    this.overlay.show();
    routeDrawerIsOpen = 'Y';
    setCountNotificationLabel();

    var LastLoginDate = GetCurrentLastLoginDate();
    var CurrUserName = GetCurrentUserName();
    var CurrentVersion = GetCurrentVersion();
    var btnImgAccount = GetCurrPictureProfile();
    if (btnImgAccount) {
        Ext.getCmp('btnImgAccount').setHtml('<img src="' + btnImgAccount + '" style="width: 172px; height: 172px; border:1px none white; border-radius: 50%; max-width:200px;" />');
    }

    if (LastLoginDate) {
        Ext.getCmp('loginInfoPanelLastLogin').setHtml('<font size=2px color=white><i>' + LastLoginDate + '</i></font>');
    }
 
    Ext.getCmp('btnDrawerMenuCRVersion').setHtml('<font size=2px color=white>Version:<b>' + CurrentVersion + '</b></font>');
    Ext.getCmp('loginInfoPanelUserName').setHtml('<font size=2px color=white><b>' + CurrUserName + '@Cloud-Receipts.Com</b></font>');
    isPushroutesArrayFirstLoad = 'No';
    routeDrawerMenuPanelIsOpen = 'Y';
    //var result = countNotificationTypeNN;
    //if (countNotificationTypeNN >= 1) {
    //    Ext.getCmp('btnDrawerMenuNotificationlbl').setBadgeText(result);
    //}
    
}


function DrawerMenuHide() {
    _DrawerMenu.hide();
    routeDrawerMenuPanelIsOpen = 'N';
    routeDrawerIsOpen = 'N';
}