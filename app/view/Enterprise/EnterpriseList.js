








var _DataStore_EnterprisegetAllStore;

Ext.define('ianMizi.view.Enterprise.EnterpriseList', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'EnterpriseList',
    id: 'EnterpriseListID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
  
    config: {
        // style: ' background-color:white;',
        style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        layout: 'vbox', //  add a layout
        items:
        [
              {
                  xtype: 'toolbar',
                  title: '<font size="4" color="white">Enterprise</font>',
                  docked: 'top',
                  id: 'EnterpriseListtoolbarTop',
                  hidden: true,
                  style: {

                      background: '#f44336',

                  },

                  // style: GetCurrentToolbarStyle(),

                  items:
                         [
                             {
                                 xtype: 'button',
                                 id: 'btnEnterpriseListHome',
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
                                              id: 'btnNotificationEnterpriseList',
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
                width: '100%',
                height:154,
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                docked: 'top',
                id: 'containerEnterpriseListHeaderTop',
                style: {
                    // background: '#D25959',
                    background: 'transparent',
                    // border: '2px'
                },
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                },
                // hidden:true,
                items:
                       [
                           {
                               xtype: 'container',
                               width: '100%',
                               margin:'3 0 0 0',
                               // height:170,
                               // width: 40,

                               //  title: '<font size="3" color="white">Live Tracking Map</font>',
                               //hidden: true,
                              // docked: 'top',
                               id: 'containerEnterpriseListHeader',
                               style: {
                                   // background: '#D25959',
                                   background: 'transparent',
                                   // border: '2px'
                               },
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                   
                               },
                               items: [

                                   {
                                       xtype: 'button',
                                       id: 'btnEnterpriseListBack',
                                       //hidden: true,
                                       height: 30,
                                       width: 35,
                                       margin: '0 0 0 0',
                                       // iconCls: 'list',
                                       html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="25" height="20" alt="Company Name"></div>',
                                       ui: 'plain',
                                       handler: function () {
                                           DrawerMenuShow();

                                       }
                                   },
                                     {
                                         margin: '0 0 0 0',
                                        // hidden: true,
                                         html: '<font size=2 color=white><b>My Loyalty Card</b></font>'
                                     },
                                      {
                                          xtype: 'spacer',

                                      },



                                              {
                                                  xtype: 'container',
                                                    margin: '5 0 0 5',
                                                  // hidden:true,
                                                  //style: 'background-color: white;',
                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                  height: 25,
                                                  width: 70,
                                                  // margin: '70 0 0 0',
                                                  id: 'containerEnterpriseListHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlEnterpriseListHaiUser',
                                                          html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                      },
                                                      {
                                                          xtype: 'container',
                                                          //   margin: '0 0 0 5',
                                                          // hidden:true,
                                                          style: 'background-color: transparent;',

                                                          height: 25,
                                                          width: 70,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerEnterpriseListeWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnEnterpriseListeWallet',
                                                                   margin: '4 0 0 -15',
                                                                   height: 30,
                                                                   width: 35,
                                                                   // iconCls: 'list',
                                                                   html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                   ui: 'plain',
                                                                   handler: function () {
                                                                       DrawerMenuShow();

                                                                   }
                                                               },
                                                               {
                                                                   margin: '7 0 0 2',
                                                                   html: '<font size=2 color=white><b>RM10.50</b></font>'
                                                               }
                                                          ]
                                                      },

                                                  ]
                                              },
                                           {
                                               xtype: 'container',
                                               margin: '0 0 0 -5',
                                               // hidden: true,
                                               //style: 'background-color: white;',
                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                               height: 40,
                                               width: 40,
                                               // margin: '70 0 0 0',
                                               id: 'containerEnterpriseListPictureUser',
                                               layout: {

                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center'
                                               },
                                               items: [
                                                   {
                                                       xtype: 'button',
                                                       height: 40,
                                                       width: 40,
                                                       margin: '0 0 0 -11',
                                                       id: 'btnEnterpriseListInfo',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                           //  setupMovementMap(2);





                                                           //Ext.getCmp('mainView').setActiveItem(16);
                                                           //loadNotificationSummary();
                                                       }
                                                   },



                                               ]
                                           },




                               ]
                           },

                    
                    {
                        width: '100%',
                        // height:170,
                        // width: 40,
                        margin: '11 0 0 0',
                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,
                        // docked: 'top',
                        id: 'containerEnterpriseListScanQRandAddNewButton',
                        style: {
                            // background: '#D25959',
                            background: 'transparent',
                            // border: '2px'
                        },
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                        layout: {
                            type: 'hbox',
                            pack: 'left',
                            align: 'left',

                        },
                        items: [
                            

                            {
                                //width: '50%',

                                //height: 80,
                                width: 100,
                                // height:170,
                                // width: 40,
                               // margin: '7 0 0 0',
                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,
                                // docked: 'top',
                                id: 'containerEnterpriseListAddNewButton',
                                style: {
                                    // background: '#D25959',
                                    background: 'transparent',
                                    // border: '2px'
                                },
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center',

                                },
                                items: [

                                      {
                                          xtype: 'button',
                                          id: 'btnEnterpriseListAddNewButton',
                                          //hidden: true,
                                          height: 80,
                                          width: 90,
                                          margin: '-20 0 0 0',
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/addNewCard.png" width="80" height="70" alt="Company Name"></div>',
                                          ui: 'plain',
                                          //ui: 'confirm',
                                          handler: function () {
                                              FloatLoyaltyCardStampShow();
                                          }
                                      },
                                        {
                                            xtype: 'button',
                                            id: 'btnEnterpriseListAddNewButtonTxt',
                                            //hidden: true,
                                            // height: 20,
                                            // width: 150,
                                            margin: '-18 0 0 -3',
                                            // iconCls: 'list',
                                            html: '<font size=1 color=white>Add New Card</font>',
                                            ui: 'plain',
                                            handler: function () {
                                                FloatLoyaltyCardStampShow();

                                            }
                                        },


                                ]
                            },
                            {
                                // width: '50%',
                                width: 100,
                                // height:170,
                                // width: 40,
                                //  margin: '7 0 0 0',
                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,
                                // docked: 'top',
                                id: 'containerEnterpriseListScqnQR',
                                style: {
                                    // background: '#D25959',
                                    background: 'transparent',
                                    // border: '2px'
                                },
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center',

                                },
                                items: [

                                      {
                                          xtype: 'button',
                                          id: 'btnEnterpriseListScanQR',
                                          //hidden: true,
                                          height: 80,
                                          width: 90,
                                          margin: '-20 0 0 0',
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/scanQRcodeGrey.png" width="80" height="70" alt="Company Name"></div>',
                                          ui: 'plain',
                                          //ui: 'confirm',
                                          handler: function () {
                                            ScanQrCodeShow();

                                             // QRScanner.prepare(onDone);

                                             

                                          }
                                      },
                                        {
                                            xtype: 'button',
                                            id: 'btnEnterpriseListScanQRTxt',
                                            //hidden: true,
                                            // height: 20,
                                            // width: 150,
                                            margin: '-18 0 0 8',
                                            // iconCls: 'list',
                                            html: '<font size=1 color=white>Scan Card</font>',
                                            ui: 'plain',
                                            handler: function () {
                                               // QRScanner.prepare(onDone);
                                              
                                                ScanQrCodeShow();

                                            }
                                        },


                                ]
                            },
                        ]
                    },



{
    xtype: 'container',
    id: 'containerEnterpriseListMasterHeader',
    width: '96%',
    height: 27,
    // style: "background-color: white",
    // style: 'border-bottom:1px solid #D25959;background-color:transparent',
    style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;',
    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
    //style: "background-color: #F35B57;",

    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items: [

        {
            width: 20,
            height: 20,
            margin: '0 0 0 20',
            id: 'btnEnterpriseListType',
            html: '<img src="resources/icons/AllPurple.png" width="20" height="20" alt="Company Name">',
        },
        {
            //  width: 150,
            margin: '0 0 0 5',
            id: 'htmlEnterpriseListTypeLbl',
            html: '<font size=2 color=black>All Cards(20)</font>'
        },
        {
            xtype: 'spacer'
        },
        {
            id: 'EnterpriseListMasterHeader_EnterpriseListTypeSearchTxt',
            margin: '-7 0 0 0',
            width: 145,
            height: 16,
            html: '<input type="text" id="input-searchEnterprise" placeHolder="Search Card" style="border-color:purple;color:black;width:145px;text-align: center;font-size:12px;">'
        },

          {
              xtype: 'button',
              id: 'btnEnterpriseListTSearch',
              hidden:true,
              //  badgeText: '1',
              margin: '0 0 0 -5',
              height: 30,
              width: 30,
              html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',
              ui: 'plain',
              handler: function () {
                  // NotificationsPanelShow();

                  LoyaltyCardRedeemListShow();


                  //  LoyaltyCardRedeemListShow();
              }
          },
        //{
        //    hidden: true,
        //    id: 'htmlLoyaltyCardClientID',
        //    html: '<font size=2 color=black>Client ID:0000</font>'

        //}
    ]

},







                       ]

            },

            {
                xtype: 'container',
                style: 'background-color: transparent;',
                hidden: true,
                //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
                // hidden:true,
                //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
                //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
                //   style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                //style: {
                //    backgroundImage: 'url(resources/icons/border7.png)',
                //    backgroundRepeat: 'no-repeat',
                //    //backgroundPosition: 'center'
                //    backgroundSize: 'cover'
                //},
                height: 30,
                layout: {
                    type: 'hbox',
                    pack: 'left',
                    align: 'left'

                },
                items: [
             {
                 xtype: 'label',
                 //  hidden: true,
                 margin: '-3 0 0 0',
                 id: 'imgSearchEnterpriseList',
                 html: '<img src="resources/icons/whiteLoyaltyCard.png" style="width: 32px; height: 30px;" />'
             },



             {
                 xtype: 'label',
                 id: 'lblAppNameEnterpriseList',
                 // hidden:true,
                 margin: '0 0 0 0',
                 html: '<font size="2" color="white"><b>Loyalty Cards</b></font>'
             },

               {
                   xtype: 'label',
                   id: 'lblSearchEnterpriseList',
                    hidden:true,
                   margin: '0 0 0 0',
                   html: '<font size="2" color="white"><b>Loyalty Cards</b></font>'
               },

                //{
                //    xtype: 'spacer',

                //},

                ]
            },

            {
                xtype: 'container',
                hidden: true,
                //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
               // ori style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px none;',
                style: 'background-color: transparent;',
                //   style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                //style: {
                //    backgroundImage: 'url(resources/icons/border7.png)',
                //    backgroundRepeat: 'no-repeat',
                //    //backgroundPosition: 'center'
                //    backgroundSize: 'cover'
                //},
                height: 38,
                layout: {
                    type: 'hbox'
                },
                items: [
             {
                 xtype: 'label',
                 //  hidden: true,
                 margin:'2 0 0 5',
                 id: 'imgSearchEnterpriseList',
                 html: '<img src="resources/icons/SearchBlack.png" style="width: 22px; height: 22px;" />'
             },

               //{
               //    xtype: 'label',
               //    id: 'lblSearchEnterpriseList',
               //    // hidden:true,
               //    margin: '5 0 0 0',
               //    html: '<font size="2" color="black">Search:</font>'
               //},

                //{
                //    xtype: 'label',
                //     hidden: true,
                //    id: 'imgSearchEnterpriseListSign',
                //    html: '|'

                //},
               //{
               //    xtype: 'searchfield',
               //   // xtype: 'textfield',
               //    id: 'TreatmentList_TreatmentList_SearchTxt',
               //    placeHolder: '|Search Enterprise',
               //    margin: '-2 0 0 0',
               //   // labelWidth: '50%',
               //    flex: 1,
               //    listeners: {

               //        activate: function () {
               //            console.log('Main container is active');
               //        },
               //        keyup: function (searchField) {
               //            queryString = Ext.getCmp('TreatmentList_TreatmentList_SearchTxt').getValue();


               //            //if (Ext.getCmp('TreatmentList_TreatmentList_SearchByTxt').getValue() == 1) {


               //            //Ext.getCmp('TreatmentList_TreatmentList').setStore(_DataStore_TreatmentList_Setting_LoadTreatmentPlan);


                          

               //            _DataStore_EnterprisegetAllStore = Ext.getStore('EnterprisegetAllStore');
               //            if (queryString.length > 1) {
               //                var thisRegEx = new RegExp(queryString, "i");
               //                _DataStore_EnterprisegetAllStore.filterBy(function (record) {
               //                    if (thisRegEx.test(record.get('EnterpriseName'))) {
               //                        return true;
               //                    };
               //                    return false;
               //                });
               //            }else
               //            {
                             
               //                _DataStore_EnterprisegetAllStore.clearFilter();
               //            }


               //            //}
               //        },
               //        clearicontap: function () {

               //            _DataStore_EnterprisegetAllStore.clearFilter();
               //        },
               //    }
               //},

               {
                   id: 'TreatmentList_TreatmentList_SearchTxt',
                   hidden:true,
                   margin: '9 0 0 7',
                   html: '<input type="text" id="input-searchEnterpriseOri" placeholder="Search" style="border-color:white;color:white;width:305px;text-align: left">'
               },

                ]
            },
            

 {
     xtype: 'list',
     flex: 1,
    // width:'95%',
     // store: 'EnterprisegetAllStore',
     store:'EnterpriseSubscribergetBySubcriberAccNoStore',
     id: 'EnterprisegetAllStoreID',
    // grouped: true,
     mode: 'SINGLE',
   //  indexBar: true,
    disableSelection: true,
     //itemTpl: '<div class="myContent">' +
     //     '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:bottom" colspan="3"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 3px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom"><br>Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2"><br>Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 16px;margin: -10px 2px 0px 5px;cursor: pointer;" >Receipt Detail</div></td></tr></table>' +
     //      '</div>',
     //itemTpl: '<div class="myContent" style="width:99%;border-left: 6px solid grey;border-radius: 20px 0px 0px 20px;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
    itemTpl: '<div class="myContent" style="width:99%;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
          // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{EnterpriseName}<br>{EnterpriseAddress}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">({EnterpriseRegistrationNo})</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Tel:{EnterprisePhoneNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Faxs:{EnterpriseFaxNo}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: 0px 0px 0px 0px;cursor: pointer;" >Tap for Detail</div></td></tr></table>' +
       //    '<table style="border-collapse:collapse;border-spacing:0"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="4">Tel:{EnterprisePhoneNo}<br>Fax:{EnterpriseFaxNo}<br>Website:http://{EnterpriseWebsite}<br>Email:{EnterpriseEmail}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Subscribed</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2">YES</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2">YES</td></tr></table>' +
          // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:18px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;border-bottom-width:1px;text-align:center" colspan="4">Tel:{EnterprisePhoneNo}<br>Fax:{EnterpriseFaxNo}<br>Website:http://{EnterpriseWebsite}<br>Email:{EnterpriseEmail}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Subscribtion</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center;vertical-align:top" colspan="2">YES</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center;vertical-align:top" colspan="2">YES</td></tr></table>' +


          ///original used '<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4">Tel:{EnterprisePhoneNo}<br>Fax:{EnterpriseFaxNo}<br>Website:http://{EnterpriseWebsite}<br>Email:{EnterpriseEmail}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Subscribtion</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">YES</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">YES</td></tr></table>' +

        //  '<table style="border-collapse:collapse;border-spacing:0;border-color:white;background-color:white;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:white;text-align:center"><br><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:white;text-align:center">Tel:{EnterprisePhoneNo}<br>Fax:{EnterpriseFaxNo}<br>Website:http://{EnterpriseWebsite}<br>Email:{EnterpriseEmail}</td></tr></table>' +

        //  '<table style="border-collapse:collapse;border-spacing:0;border-color:white;background-color:white;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Tel:{EnterprisePhoneNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">logo</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Fax:{EnterpriseFaxNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Website:http://{EnterpriseWebsite}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">logo</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Email:{EnterpriseEmail}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">logo</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2">Tap to Subscribe Cloud Receipt</td></tr></table>' +







        //original'<table style="border-collapse:collapse;border-spacing:0;border-color:white;background-color:white;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}<br><br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">Tel:{EnterprisePhoneNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left;vertical-align:middle" rowspan="2"><img src="resources/icons/telephoneRed.png"style="width: 16px; height: 16px;" /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Fax:{EnterpriseFaxNo}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Website:http://{EnterpriseWebsite}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"><img src="resources/icons/webRed.png"style="width: 16px; height: 16px;" /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Email:{EnterpriseEmail}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"><img src="resources/icons/EmailRed.png"style="width: 16px;height: 16px;" /><br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;background-color: white; color: red;padding:0px 0px;border-style:none;border-bottom-width:1px;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2" class="blink_me">Tap to Subscribe Cloud Receipt ! </td></tr></table>' +


       // '<table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo64}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{EnterpriseName}<br>{EnterpriseAddress}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:20px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2">Stamp<br>5/11</th></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">FB/Wassap/Imsta/Twitter/Web/Location/Call</td></tr></thead></table>' +
       // '<div style="width:99%;height:1px;text-align:center;"><img style="margin:20px 0px 0px 0px" src="resources/icons/aboutemail.png" height="15px" width="15px"></div>' +
      //  '<table style="border-collapse:collapse;border-spacing:10;width:99%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo64}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:#ffffff;border-color:#ffffff;border-right:1px solid grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><font size=3>Stamp<br>5/11</font></th></tr><tr></tr></thead></table>' +

       // ori jadi '<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo64}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br><img src="resources/icons/blackStamp.png"style="width: 35px; height: 35px; margin-top: -6px;" /><div style="margin:-25px 0px 0px 40px;"><font size="4"><b>10/11 Stamp</b></font></div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-12px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +



         '<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo64}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>{LoyaltyCardTypeReference}</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-12px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +

          //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff;border-radius: 10px 0px 0px 0px;font-family:Arial, sans-serif;font-size:20px;font-weight:bold;overflow:hidden;padding:5px 5px;text-align:left;text-decoration:normal;vertical-align:top;">{MovementDateOnly}<br><div style="margin:-10px 0px 0px 5px"><font size=2>{MovementTimeOnly}</font></div></th>{MovementHistorySummaryListStatus}</tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;border-right: 1px none white;"></td></tr></thead><tbody><tr>{MovementHistorySummaryListIsReturn}<td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:bottom;word-break:normal;border-right: 1px none white;"><div style="margin:0px 0px 0px -5px">&nbsp;&nbsp;<img src="{VehicleConverted}" style="width: 30px; height: 20px; margin:-3px 0px 0px -5px;" />&nbsp;&nbsp;{Distance}KM</div></td></tr><tr><td style="background-color:#ffffff;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:7px 5px;text-align:left;vertical-align:top;word-break:normal;border-bottom: 1px none white;border-radius: 0px 0px 10px 10px;" colspan="2"><div style="margin:-8px 0px 0px 0px">{EndPointName}</div></td></tr>  <tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;text-decoration:underline;vertical-align:top;word-break:normal" colspan="2">Purpose</td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:7px 5px;text-align:left;vertical-align:top;word-break:normal;border-radius: 0px 0px 10px 10px;" colspan="2"><div style="margin:-8px 0px 0px 0px">{MovementPurpose}</div><br>{MovementHistorySummaryListBottomRightButton}</td></tr></tbody></table>' +


   //   '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3"><div style="background-color: #78E1F8; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >Confirm</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
           //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#26ade4;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:white" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:white"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:white">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
          // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#26ade4;" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #26ade4; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >Confirm</div>{FlatBillWorkshop}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Date:{FlatBillDate}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
              //tiada border '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#26ade4;" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #26ade4; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >Confirm</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

            '</div>',
     height: '100%',
     listeners: {
         itemsingletap: function (list, idx, target, records, evt) {
             //LoadingPanelShow();
             ID = records.get('ID');
             EnterpriseAccNo = records.get('EnterpriseAccNo');
             localStorage.setItem('EnterpriseAccNo', records.get('EnterpriseAccNo'));
             
             //loadEnterpriseDetails(records.get('ID'), records.get('EnterpriseAccNo'));


             var LoyaltyCardType = records.get('LoyaltyCardType');

             if (LoyaltyCardType == "Point") {
                 FloatLoyaltyCardPointShow();
                 loadlistsummaryreceipt('NewReceipt');
                 Ext.getCmp('tabpanelFloatLoyaltyCardPoint').getTabBar().hide();
             }
             if (LoyaltyCardType == "Stamp") {
                 FloatLoyaltyCardStampShow();
             }

            
           

         },
         deselect: function (list, records) {

         }
     },

 },

 {
     xtype: 'container',
     id: 'containerEnterpriseListTitleOutter',
     width: '100%',
     docked:'bottom',
     height: 50,
     // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
     // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
     style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
     // style: "background-color: #EAEEF3;",

     layout: {
         type: 'hbox',
         pack: 'center',
         align: 'center'

     },
     items: [

          {
              xtype: 'container',
              id: 'containerEnterpriseListTypeAll',
              flex: 1,
              //width: '33.3%',
              //height: 45,
              // style: "background-color: transparent",
              style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

              layout: {
                  type: 'vbox',
                  pack: 'center',
                  align: 'center'

              },
              items: [

                   {
                       xtype: 'button',
                       id: 'btnEnterpriseListTypeAll',
                       //  badgeText: '1',
                       margin: '0 0 0 0',
                       height: 40,
                       width: 40,
                       html: '<img src="resources/icons/AllWhite.png" width="30" height="30" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           // NotificationsPanelShow();

                           LoyaltyCardRedeemListShow();


                           //  LoyaltyCardRedeemListShow();
                       }
                   },
                    {
                        margin: '-15 0 0 0',
                        html: '<font size=1 color=white><b>All Cards(20)</b></font>'
                    },

              ]
          },


         {
             xtype: 'container',
             id: 'containerEnterpriseListTypeRestaturant',
             flex: 1,
             //width: '33.3%',
             //height: 45,
             style: "background-color: transparent",
           //  style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },
             items: [

                  {
                      xtype: 'button',
                      id: 'btnEnterpriseListTypeRestaturant',
                      //  badgeText: '1',
                      margin: '0 0 0 0',
                      height: 40,
                      width: 40,
                      html: '<img src="resources/icons/restaurantPurple.png" width="30" height="30" alt="Company Name">',
                      ui: 'plain',
                      handler: function () {
                          // NotificationsPanelShow();

                          LoyaltyCardRedeemListShow();


                          //  LoyaltyCardRedeemListShow();
                      }
                  },
                   {
                       margin: '-15 0 0 0',
                       html: '<font size=1 color=grey><b>Food & Bev</b></font>'
                   },

             ]
         },

         {
             xtype: 'container',
             id: 'containerEnterpriseListTypeButik',
             flex: 1,
             //width: '33.3%',
             //height: 45,
            style: "background-color: transparent",
            // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },
             items: [

                  {
                      xtype: 'button',
                      id: 'btnEnterpriseListTypeButik',
                      //  badgeText: '1',
                      margin: '0 0 0 0',
                      height: 40,
                      width: 40,
                      html: '<img src="resources/icons/butikPurple.png" width="30" height="30" alt="Company Name">',
                      ui: 'plain',
                      handler: function () {
                          // NotificationsPanelShow();

                          LoyaltyCardRedeemListShow();


                          //  LoyaltyCardRedeemListShow();
                      }
                  },
                   {
                       margin: '-15 0 0 0',
                       html: '<font size=1 color=grey><b>Boutique</b></font>'
                   },

             ]
         },
         
         {
             xtype: 'container',
             id: 'containerEnterpriseListTypeGrocery',
             flex: 1,
             //width: '33.3%',
             //height: 45,
             style: "background-color: transparent",
             // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },
             items: [

                  {
                      xtype: 'button',
                      id: 'btnEnterpriseListTypeButik',
                      //  badgeText: '1',
                      margin: '0 0 0 0',
                      height: 40,
                      width: 40,
                      html: '<img src="resources/icons/groceryPurple.png" width="30" height="30" alt="Company Name">',
                      ui: 'plain',
                      handler: function () {
                          // NotificationsPanelShow();

                          LoyaltyCardRedeemListShow();


                          //  LoyaltyCardRedeemListShow();
                      }
                  },
                   {
                       margin: '-15 0 0 0',
                       html: '<font size=1 color=grey><b>Grocery</b></font>'
                   },

             ]
         },
             

             
{
    xtype: 'container',
    id: 'containerEnterpriseListTypeElectronic',
    flex: 1,
    //width: '33.3%',
    //height: 45,
    style: "background-color: transparent",
    // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    items: [

         {
             xtype: 'button',
             id: 'btnEnterpriseListTypeElectronic',
             //  badgeText: '1',
             margin: '0 0 0 0',
             height: 40,
             width: 40,
             html: '<img src="resources/icons/electronicPurple.png" width="30" height="30" alt="Company Name">',
             ui: 'plain',
             handler: function () {
                 // NotificationsPanelShow();

                 LoyaltyCardRedeemListShow();


                 //  LoyaltyCardRedeemListShow();
             }
         },
          {
              margin: '-15 0 0 0',
              html: '<font size=1 color=grey><b>Electronic</b></font>'
          },

    ]
},




{
    xtype: 'container',
    id: 'containerEnterpriseListTypeMore',
    flex: 1,
    //width: '33.3%',
    //height: 45,
    style: "background-color: transparent",
    // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    items: [

         {
             xtype: 'button',
             id: 'btnEnterpriseListTypeMore',
             //  badgeText: '1',
             margin: '0 0 0 0',
             height: 40,
             width: 40,
             html: '<img src="resources/icons/morePurple.png" width="30" height="30" alt="Company Name">',
             ui: 'plain',
             handler: function () {
                 // NotificationsPanelShow();

                 LoyaltyCardRedeemListShow();


                 //  LoyaltyCardRedeemListShow();
             }
         },
          {
              margin: '-15 0 0 0',
              html: '<font size=1 color=grey><b>More..</b></font>'
          },

    ]
},
     ]

 },

         //{
         //    xtype: 'list',
         //    flex: 1,
         //    store: 'FlatBillGetByIcStore',
         //    id: 'FlatBillGetByIcStoreNewID',
         //    mode: 'SINGLE',
         //    disableSelection: true,
         //    itemTpl: '<div class="myContent">' +
         //        // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
         //        //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
         //         // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


         //        //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
         //       '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
         //     //tiada border  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


         //      '</div>',
         //    height: '100%',
         //    listeners: {
         //        itemsingletap: function (list, idx, target, records, evt) {
         //            LoadingPanelShow();
         //            Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
         //            Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
         //            Ext.getCmp('mainView').setActiveItem(2);
         //            Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
         //            Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
         //            FlatBillID = records.get('FlatBillID');
         //            FlatBillStatus = records.get('FlatBillStatus');
         //            FlatBillUpdateDate = records.get('FlatBillUpdateDate');
         //            Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
         //            StatusDetailReceiptMenuShow();
         //            Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
         //                BillID: FlatBillID
         //            });
         //            Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
         //            detailsReceiptsprocess(FlatBillID);

         //        },
         //        deselect: function (list, records) {

         //        }
         //    },

         //},
          
          

        ]
    },
    initialize: function () {

       
    }
});

var countEnterpriseLoanFirst = 0
var countEnterpriseSubscribedLoadFirst = 0
function loadEnterpriseList() {


    var AccNo = Ext.getCmp('AccountInfo_CR_AccountNo').getValue();


    Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoStore').getProxy().setExtraParams({
        SubcriberAccNo: AccNo
    });
    Ext.StoreMgr.get('EnterpriseSubscribergetBySubcriberAccNoStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoStore').getProxy().setExtraParams({
            SubcriberAccNo: AccNo
        });
        _DataStore_EnterpriseSubscribergetBySubcriberAccNoStore=Ext.StoreMgr.get('EnterpriseSubscribergetBySubcriberAccNoStore').load();
        var myStore = Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoStore');
        countEnterpriseSubscribedLoadFirst = myStore.getCount();
        Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        Ext.Viewport.setMasked(false);
        LoadingPanelHide();








     
    });
    task.delay(2000);


    //Ext.getStore('EnterprisegetAllStore').getProxy().setExtraParams({
    //    None: 'None'
    //});
    //Ext.StoreMgr.get('EnterprisegetAllStore').load();

    //var task = Ext.create('Ext.util.DelayedTask', function () {

    //    Ext.getStore('EnterprisegetAllStore').getProxy().setExtraParams({
    //        None: 'None'
    //    });
    //    Ext.StoreMgr.get('EnterprisegetAllStore').load();
    //    var myStore = Ext.getStore('EnterprisegetAllStore');
    //    countEnterpriseLoanFirst = myStore.getCount();
    //    Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>')
    //    Ext.Viewport.setMasked(false);
    //    LoadingPanelHide();

    //});
    //task.delay(2000);



}





function SearchEnterpriseOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countEnterprise = 0;
   

    _DataStore_EnterpriseSubscribergetBySubcriberAccNoStore.clearFilter();
  
  var  queryString = document.getElementById('input-searchEnterprise').value;


              
                if (queryString) {
                    console.log(queryString.length);
                  
                    var thisRegEx = new RegExp(queryString, "i");
                    _DataStore_EnterpriseSubscribergetBySubcriberAccNoStore.filterBy(function (record) {
                        if (thisRegEx.test(record.get('EnterpriseName'))) {
                            console.log('ada0');
                           
                            countEnterprise = _DataStore_EnterpriseSubscribergetBySubcriberAccNoStore.getCount();
                            Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                            return true;
                          
                        };
                        return false;
                        console.log('tiada1');
                      
                      //  return false;
                    });
                    console.log('tiada3');
                    countEnterprise = _DataStore_EnterpriseSubscribergetBySubcriberAccNoStore.getCount();
                    
                    Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                } 


  else
                {
                    console.log('tiada2');
                    _DataStore_EnterpriseSubscribergetBySubcriberAccNoStore.clearFilter();
                    Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
                   // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
                    return false;
                }


                
            
}






