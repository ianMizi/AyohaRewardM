
Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement', {

});

var _FloatPanel_AyohaCardManagement;


var isFloatPanel_AyohaCardManagementOpen = 'N';






function FloatPanel_AyohaCardManagement() {

    _FloatPanel_AyohaCardManagement =
    Ext.create('Ext.Panel', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaCardManagementID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
        },
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
                type: 'slideOut',
                direction: 'left',
                easing: 'cubic-bezier(.7,0,.7,1)',
                duration: 250          
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaCardManagement.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                           
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaCardManagement.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                        }

                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaCardManagementHeader',
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
                                    align: 'center',
                                },
                                // hidden:true,
                                items:
                                       [


                                                     {
                                                         xtype: 'button',
                                                         id: 'btnFloatPanel_AyohaCardManagementBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             FloatPanel_AyohaCardManagementHide();
                                                             FloatPanel_AyohaCardManagement_AddCardHide();
                                                             //_FloatPanel_AyohaCardManagement.hide(Ext.fx.Animation({
                                                             //    type: 'slideOut',
                                                             //    direction: 'left',
                                                             //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                             //    duration: 250

                                                             //}));
                                                           
                                                         }
                                                     },
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlFloatPanel_AyohaCardManagement_TitleHeaderTxt',
                                                         html: '<font size=2 color=white><b>Ayoha Card Management</b></font>'
                                                     },
                                                      {
                                                          xtype: 'spacer',

                                                      },



                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  //hidden: true,
                                                                  //style: 'background-color: white;',
                                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_AyohaCardManagementHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_AyohaCardManagementHaiUser',
                                                                          html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          //   margin: '0 0 0 5',
                                                                          hidden: true,
                                                                          style: 'background-color: transparent;',

                                                                          height: 25,
                                                                          width: 70,
                                                                          // margin: '70 0 0 0',
                                                                          id: 'containerFloatPanel_AyohaCardManagementeWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_AyohaCardManagementeWallet',
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
                                                                                   html: '<font size=2 color=white><b>RM00.00</b></font>'
                                                                               }
                                                                          ]
                                                                      },

                                                                  ]
                                                              },
                                                           {
                                                               xtype: 'container',
                                                               margin: '0 0 0 -5',

                                                               //style: 'background-color: white;',
                                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                               height: 40,
                                                               width: 40,
                                                               // margin: '70 0 0 0',
                                                               id: 'containerFloatPanel_AyohaCardManagementPictureUser',
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
                                                                       id: 'btnFloatPanel_AyohaCardManagementInfo',
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











                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              {
                                  xtype: 'tabpanel',
                                  // hidden: true,
                                  //  hidden:true,
                                  id: 'tabpanelFloatPanel_AyohaCardManagement',
                                  // style: 'border-top:2px solid #ECF0F1;background: white;',
                                  // style: 'background-color: black;',
                                  // margin: '-20 0 0 -26',
                                  // margin: '25 0 0 0',

                                  //width: 200,
                                  width: '96%',
                                  height: '100%',
                                  //height: 120,
                                  //height: 50,
                                  //  zIndex: 200,
                                  //  docked: 'bottom',
                                  tabBarPosition: 'top',
                                  ui: 'plain',
                                  // docked: 'bottom',

                                  initialize: function (c) {
                                      //this.getTabBar().hide();


                                  },



                                  items: [



                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_AyohaCardManagementStampCardList',
                                           width: '100%',
                                           height: '100%',
                                           //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                           style: "background-color: transparent;",
                                           //style: "background-color: #F35B57;",
                                           title: 'FloatPanel_AyohaCardManagementCardLis',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center'

                                           },
                                           //listeners: {
                                           //    initialize: function (c) {

                                           //        this.element.on({
                                           //            swipe: function (e, node, options) {
                                           //                if (e.direction == "left") {
                                           //                    //  alert("Hey! I swipe left");

                                           //                } else {
                                           //                    //  alert("Hey! I swipe right");
                                           //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
                                           //                }
                                           //            }
                                           //        });
                                           //    }
                                           //},

                                           items: [


                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 height: '100%',
                                                 style: "background-color: transparent;",
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'start',
                                                     align: 'left'

                                                 },
                                                 items: [

                                                      {
                                                          xtype: 'container',
                                                          width: '100%',
                                                          height: 65,
                                                          margin: '10 0 0 0',
                                                          //style: {
                                                          //    // background: '#D25959',
                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                          //    // border: '2px'
                                                          //},
                                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                          style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center',
                                                          },
                                                          items: [
                                                                {
                                                                    xtype: 'container',
                                                                    width: '60%',

                                                                    margin: '0 0 0 0',
                                                                    //style: {
                                                                    //    // background: '#D25959',
                                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                                    //    // border: '2px'
                                                                    //},
                                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                    style: 'background-color:transparent',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'center',
                                                                    },
                                                                    items: [
                                                                         {
                                                                             margin: '10 0 0 0',
                                                                             html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">AYOHA STAMP CARDS</div>',
                                                                         },
                                                                          {
                                                                              margin: '-10 0 0 0',
                                                                              id: 'htmlFloatPanel_AyohaCardManagementCardCount',
                                                                              html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                          },
                                                                    ]
                                                                },

                                                                {
                                                                    xtype: 'container',
                                                                    width: '40%',

                                                                    margin: '0 0 0 0',
                                                                    //style: {
                                                                    //    // background: '#D25959',
                                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                                    //    // border: '2px'
                                                                    //},
                                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                    style: 'background-color:transparent',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'center',
                                                                    },
                                                                    items: [
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 60,
                                                                              width: 60,

                                                                              margin: '2 0 0 0',
                                                                              id: 'btnFloatPanel_AyohaCardManagementCardImage',
                                                                              //badgeText: "2",
                                                                              html: '<img src="resources/icons/StampCardChopPurplenew.png" width="50" height="50" alt="Company Name">',
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
                                                          xtype: 'panel',
                                                          height: 10
                                                      },

                                                         {
                                                             xtype: 'container',
                                                             width: '100%',
                                                             // style: 'background-color:black;color:white',
                                                             style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'start',
                                                                 align: 'center'

                                                             },
                                                             //height: 50,
                                                             // margin:'10 0 0 0',
                                                             items: [

                                                                     //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                                     //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                                     //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                                     //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                                     //    '</div></div></div>'

                                                                     {

                                                                         width: '50%',
                                                                         html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Loyalty Stamp Card</div>'
                                                                     },

                                                                     //{

                                                                     //    width: '50%',
                                                                     //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                                     //},
                                                                     //     //{
                                                                          //    margin: '-8 0 0 0',

                                                                          //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                                          //},
                                                                          // {
                                                                          //     margin: '-7 0 0 0',

                                                                          //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                                          // },


                                                             ]
                                                         },

                                                      {
                                                          xtype: 'list',
                                                          //flex:1,
                                                          height: '81%',
                                                          store: 'StampCampaignLoadByEnterpriseAccNoStore',
                                                          id: 'FloatPanel_AyohaCardManagementLoyaltyCardID',
                                                          mode: 'SINGLE',
                                                          //grouped: true,
                                                          disableSelection: true,
                                                          itemTpl: '<div class="myContent">' +
                                                              // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                                                              //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                                                               // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                                                              //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                                                            // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                                                           //backgroundimage '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-image: url(resources/icons/backgroundlistdowngrades.jpg);background-repeat:no-repeat;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                                                             //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

                                                               //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div style="background-color: white; color: black; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:42px" ><font size=5>10</font><br>Point</div><b>{FlatBillShotDescModified}</b><br>{FlatBillDate} - {FlatBillAccountNo}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:left;font-size:16px;padding:0px 0px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                                                             //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                                           ////'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal"><font size=1>Stamp Card Reward Name:</font><br>{StampCampaignName}<br>{StampCardType}<br>{StartDate}<br>{EndDate}</div>' +

                                                                    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">'
                                                                    + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Stamp Card Loyalty Name</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StampCampaignName}</div>'
                                                                    + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Card Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StampCardType}</div>'
                                                                     + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{StartDate}</div>'
                                                                     + '<br>'
                                                                    + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Campaign End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{EndDate}</div>'
                                                                    + '{StampCampaignModelButton}'


                                                                    + '</div>' +
                                                             // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 74px" class="tg"><colgroup><col style="width: 49px"><col style="width: 25px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr></thead></table>'
                                                            // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
                                                         //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                                                            '</div>',
                                                          width: '100%',
                                                          listeners: {
                                                              itemsingletap: function (list, idx, target, records, evt) {
                                                           
                                                                  var StampCampaignCode = records.get('StampCampaignCode');
                                                                    var StampCampaignName = records.get('StampCampaignName');
                                                                     var StampCardType = records.get('StampCardType');
                                                                 var StartDate = records.get('StartDate');
                                                                 var EndDate = records.get('EndDate');
                                                                  var RowStatus = records.get('RowStatus');
                                                                     var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                                  var CreatedByAccNo = records.get('CreatedByAccNo');
                                                                      var CreatedBy = records.get('CreatedBy');
                                                                      var CreatedDate = records.get('CreatedDate');
                                                                     var ModifiedBy = records.get('ModifiedBy');
                                                                     var ModifiedDate = records.get('ModifiedDate');
                                                                     var StartDateOnly = records.get('StartDateOnly');
                                                                     var EndDateOnly = records.get('EndDateOnly');
                                                                     var BackgroundImage = records.get('StampCardBackground');
                                                                     var isAnimated = records.get('isAnimated');
                                                                     var AnimatedInterval = records.get('AnimatedInterval');

                                                                     var StampRuleRemarks = records.get('StampRuleRemarks');
                                                                     var isStampRulePopUp = records.get('isStampRulePopUp');
                                                                     var LoyaltyCustomerType = records.get('LoyaltyCustomerType');

                                                                     var StampCampaignPremiumQRCode = records.get('StampCampaignPremiumQRCode');
                                                                     
                                                                     
                                                                     FloatPanel_AyohaCardManagement_EditCardShow(StampCampaignName, StampCampaignCode, CreatedBy, ModifiedBy, CreatedDate, ModifiedDate, StampCardType, StartDateOnly, EndDateOnly, BackgroundImage, isAnimated, AnimatedInterval
                                                                         , StampRuleRemarks, isStampRulePopUp, LoyaltyCustomerType, StampCampaignPremiumQRCode);

                                                                     Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(StampCampaignCode, EnterpriseAccNo)
                                                                  //Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(1);
                                                              },
                                                              deselect: function (list, records) {

                                                              }
                                                          },

                                                      },

                                                 ]
                                             },


                                           ]

                                       },
























                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_AyohaCardManagementPointCardList',
                                           width: '100%',
                                           height: '100%',
                                           //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                           style: "background-color: transparent;",
                                           //style: "background-color: #F35B57;",
                                           title: 'FloatPanel_AyohaCardManagementCardListDetails',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center'

                                           },
                                           //listeners: {
                                           //    initialize: function (c) {

                                           //        this.element.on({
                                           //            swipe: function (e, node, options) {
                                           //                if (e.direction == "left") {
                                           //                    //  alert("Hey! I swipe left");

                                           //                } else {
                                           //                    //  alert("Hey! I swipe right");
                                           //                    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').setActiveItem(0);
                                           //                }
                                           //            }
                                           //        });
                                           //    }
                                           //},

                                           items: [


                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 height: '100%',
                                                 style: "background-color: transparent;",
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'start',
                                                     align: 'center'

                                                 },
                                                 items: [



                                                         {
                                                             xtype: 'container',
                                                             width: '100%',
                                                             // style: 'background-color:black;color:white',
                                                             style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'start',
                                                                 align: 'center'

                                                             },
                                                             //height: 50,
                                                             // margin:'10 0 0 0',
                                                             items: [

                                                                     //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                                     //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                                     //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                                     //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                                     //    '</div></div></div>'

                                                                     {

                                                                         width: '50%',
                                                                         html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Point Card </div>'
                                                                     },


                                                                          //{
                                                                          //    margin: '-8 0 0 0',

                                                                          //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                                          //},
                                                                          // {
                                                                          //     margin: '-7 0 0 0',

                                                                          //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                                          // },


                                                             ]
                                                         },

                                                      {
                                                          xtype: 'list',
                                                          //flex:1,
                                                          height: '81%',
                                                          store: 'StampCardLoadByStampCampaignCodeEnterpriseAccNoStore',
                                                          id: 'FloatPanel_AyohaCardManagementLoyaltyCardDetailsID',
                                                          mode: 'SINGLE',
                                                          //  grouped: true,
                                                          disableSelection: true,
                                                          itemTpl: '<div class="myContent">' +
                                                                    '{StampContent}' +

                                                            '</div>',
                                                          width: '100%',
                                                          listeners: {
                                                              itemsingletap: function (list, idx, target, records, evt) {


                                                              },
                                                              deselect: function (list, records) {

                                                              }
                                                          },

                                                      },

                                                 ]
                                             },


                                           ]

                                       },













                                  ]

                                  //}
                              },










                        ]
                    },





















                    {
                        xtype: 'container',
                        id: 'FloatPanel_AyohaCardManagementTitleOutter',
                        width: '96%',
                        height: 45,
                        margin:'0 0 0 7',
                        // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                        style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        docked:'bottom',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaCardManagement_StampCard',
                                flex:1,
                                //width: '33.3%',
                                //height: 45,
                                style: "background-color: transparent",
                                //style: "background-color: #F35B57;",

                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [

                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaCardManagement_StampCard',
                                         //  badgeText: '1',
                                         margin: '0 0 0 0',
                                         height: 40,
                                         width: 40,
                                         html: '<img src="resources/icons/latestStampcardPurple.png" width="30" height="30" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {


                                         }
                                     },
                                      {
                                          margin: '-12 0 0 0',
                                          html: '<font size=1 color=purple><b><u>Ayoha Stamp Card</u></b></font>'
                                      },

                                ]
                            },

                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaCardManagement_PointCard',
                                    //width: '33.3%',
                                    //height: 45,
                                    flex:1,
                                    style: "background-color: transparent",
                                    //style: "background-color: #F35B57;",

                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaCardManagement_PointCard',
                                             //  badgeText: '1',
                                             margin: '0 0 0 0',
                                             height: 40,
                                             width: 40,
                                             html: '<img src="resources/icons/pointPurpleOne.png" width="30" height="30" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {


                                                 //  LoyaltyCardRedeemListShow();
                                             }
                                         },
                                          {
                                              margin: '-12 0 0 0',
                                              html: '<font size=1 color=grey><b>Ayoha Point Card</b></font>'
                                          },

                                    ]
                                },

                                

                        ]

                    },



























                ]
            },












        ]





    });
    return _FloatPanel_AyohaCardManagement;



}








function FloatPanel_AyohaCardManagementShow() {
  
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement());
    this.overlay.show();
    isFloatPanel_AyohaCardManagementOpen = 'Y';


    Ext.getCmp('tabpanelFloatPanel_AyohaCardManagement').getTabBar().hide();
    Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
    FloatPanel_AyohaCardManagement_AddCardShow();
    //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');

}





function FloatPanel_AyohaCardManagementHide() {
    FloatPanel_AyohaCardManagement_AddCardHide();
    _FloatPanel_AyohaCardManagement.hide(); isFloatPanel_AyohaCardManagementOpen = 'N';
}



//var StampCount;
function Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore() {

    Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('StampCampaignLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('StampCampaignLoadByEnterpriseAccNoStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaCardManagementCardCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);



    });
    task.delay(2000);
}



function Load_FloatPanel_AyohaCardManagement_StampCardLoadByStampCampaignCodeEnterpriseAccNoStore(strStampCampaignCode, EnterpriseAccNo) {

    Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        StampCampaignCode: strStampCampaignCode,
        EnterpriseAccNo: EnterpriseAccNo
    });
    Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            StampCampaignCode: strStampCampaignCode,
            EnterpriseAccNo: EnterpriseAccNo
        });
        Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}






