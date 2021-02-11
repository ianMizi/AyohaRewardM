
Ext.define('ianMizi.view.Advertisement.FloatPanel_Advertisement', {

});

var _FloatPanel_Advertisement;


var isFloatPanel_AdvertisementOpen = 'N';

var isFromEnterpriseAccount;



function FloatPanel_Advertisement() {

    _FloatPanel_Advertisement =
    Ext.create('Ext.Panel', {
        zIndex: 100,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AdvertisementID',
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
            type: 'popOut',
            //direction: 'up',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },

        //style: 'border-bottom:1px solid;background-color:#353839;',
        //  style: 'border-bottom:1px solid;background-color:white;',
        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_Advertisement.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_Advertisement.hide(Ext.fx.Animation({
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
                            type: 'fit',

                        },

                        //layout: {
                        //    type: 'vbox',
                        //    pack: 'start',
                        //    align: 'center'

                        //},

                        items: [


                            {

                                xtype: 'container',
                                width: '100%',
                                docked:'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AdvertisementHeader',
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
                                                         id: 'btnFloatPanel_AdvertisementBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_Advertisement.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isLoyaltyCardRedeemListOpen = 'N';
                                                         }
                                                     },
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlFloatPanel_Advertisement_TitleHeaderTxt',
                                                         html: '<font size=2 color=white><b>My Advertisment</b></font>'
                                                     },
                                                      {
                                                          xtype: 'spacer',

                                                      },

                                                      //{
                                                      //    margin: '0 0 0 0',
                                                      //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                      //},

                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  // hidden: true,
                                                                  //style: 'background-color: white;',
                                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_AdvertisementHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_AdvertisementHaiUser',
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
                                                                          id: 'containerFloatPanel_AdvertisementeWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_AdvertisementeWallet',
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
                                                               // hidden: true,
                                                               //style: 'background-color: white;',
                                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                               height: 40,
                                                               width: 40,
                                                               // margin: '70 0 0 0',
                                                               id: 'containerFloatPanel_AdvertisementPictureUser',
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
                                                                       id: 'btnFloatPanel_AdvertisementInfo',
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
                                xtype: 'container',
                                id: 'containerFloatPanel_Advertisement_SubmittedList',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_Advertisement_SubmittedList',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                               

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
                                              width: '99%',
                                              margin: '5 0 0 0',
                                              height: 85,
                                              style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'center',
                                                  align: 'center'

                                              },
                                              items: [
                                                  {
                                                      xtype: 'panel',
                                                      width: 7
                                                  },

                                                  {
                                                      xtype: 'container',
                                                      width: '75%',
                                                      height: 85,
                                                      margin: '0 0 0 0',
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
                                                                height: 40,
                                                                margin: '-7 0 0 0',
                                                                //style: {
                                                                //    // background: '#D25959',
                                                                //    background: 'rgba(76, 175, 80, 0.3);',
                                                                //    // border: '2px'
                                                                //},
                                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                style: 'background-color:transparent',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'start',
                                                                    align: 'left',
                                                                },
                                                                items: [
                                                                    {
                                                                        xtype: 'container',
                                                                        // width: '10%',
                                                                        flex: 1,
                                                                        margin: '0 0 0 10',
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
                                                                                 html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">SUBMITTED</div>',
                                                                             },
                                                                              {
                                                                                  margin: '-10 0 0 0',
                                                                                  id: 'htmlAdvertisementSubmittedCount',
                                                                                  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">1</div>',
                                                                              },
                                                                        ]
                                                                    },
                                                            {
                                                                xtype: 'container',
                                                                flex: 1,

                                                                margin: '0 0 0 10',
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
                                                                         html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">APPROVED</div>',
                                                                     },
                                                                      {
                                                                          margin: '-10 0 0 0',
                                                                          id: 'htmlAdvertisementApprovedCount',
                                                                          html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                      },
                                                                ]
                                                            },

                                                                ]
                                                            },



                                                            {
                                                                xtype: 'container',
                                                                width: '100%',
                                                                margin: '9 0 0 0',
                                                                //style: {
                                                                //    // background: '#D25959',
                                                                //    background: 'rgba(76, 175, 80, 0.3);',
                                                                //    // border: '2px'
                                                                //},
                                                                style: 'border-top:1px solid #ECF0F1;background: transparent;',
                                                                // style: 'background-color:transparent',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'start',
                                                                    align: 'left',
                                                                },
                                                                items: [

                                                               {
                                                                   xtype: 'container',
                                                                   flex: 1,

                                                                   margin: '2 0 0 0',
                                                                   //style: {
                                                                   //    // background: '#D25959',
                                                                   //    background: 'rgba(76, 175, 80, 0.3);',
                                                                   //    // border: '2px'
                                                                   //},
                                                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                   style: 'background-color:transparent',
                                                                   layout: {
                                                                       type: 'vbox',
                                                                       pack: 'start',
                                                                       align: 'center',
                                                                   },
                                                                   items: [
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">REJECTED</div>',
                                                                        },
                                                                         {
                                                                             margin: '-10 0 0 0',
                                                                             id: 'htmlAdvertisementRejectedCount',
                                                                             html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                         },
                                                                   ]
                                                               },
                                                               {
                                                                   xtype: 'container',
                                                                   flex: 1,

                                                                   margin: '2 0 0 0',
                                                                   //style: {
                                                                   //    // background: '#D25959',
                                                                   //    background: 'rgba(76, 175, 80, 0.3);',
                                                                   //    // border: '2px'
                                                                   //},
                                                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                   style: 'background-color:transparent',
                                                                   layout: {
                                                                       type: 'vbox',
                                                                       pack: 'start',
                                                                       align: 'center',
                                                                   },
                                                                   items: [
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">PUBLISHED</div>',
                                                                        },
                                                                         {
                                                                             margin: '-10 0 0 0',
                                                                             id: 'htmlAdvertisementPublishedCount',
                                                                             html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                         },
                                                                   ]
                                                               },


                                                                ]
                                                            }

                                                      ]

                                                  },
                                                  {
                                                      xtype: 'container',
                                                      width: '25%',

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
                                                          pack: 'start',
                                                          align: 'left',
                                                      },
                                                      items: [
                                                            {
                                                                xtype: 'button',
                                                                height: 75,
                                                                width: 75,

                                                                margin: '2 0 0 0',
                                                                id: 'btnEnterprisesListLog',
                                                                //badgeText: "2",
                                                                html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
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
                                               height: 5
                                           },

                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               // height: 1000,
                                               height: '100%',

                                               // margin: '0 0 0 0',
                                               //style: {
                                               //    // background: '#D25959',
                                               //    background: 'rgba(76, 175, 80, 0.3);',
                                               //    // border: '2px'
                                               //},
                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                               style: 'background-color:transparent',
                                               layout: {
                                                   type: 'fit',
                                                   //pack: 'start',
                                                   //align: 'center',
                                               },
                                               items: [

                                                    {
                                                        xtype: 'list',
                                                        //flex:1,
                                                        height: '85%',
                                                        //height: 610,
                                                        store: 'AdvertisementloadByEnterpriseHQAccNoStore',
                                                        id: 'Advertisement_SubmittedListID',
                                                        mode: 'SINGLE',
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
                                                                                                     // + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement Code</div><div style="width:auto;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Status</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementCode}<div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementStatus}</div></div>'
                                                                                      + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement Title</div><div style="width:auto;text-align:right;margin:-15px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Status</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementTitle}<div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementStatus}</div></div>'
                                                                                         //+ '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement Title</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementTitle}</div>'
                                                                                           + '<br>'
                                                                                           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement Type</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementType}</div>'
                                                                                            + '<br>'
                                                                                             + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement Media</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementMedia}</div>'
                                                                                            + '<br>'
                                                                                           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement Start Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementStartDate}</div>'
                                                                                            + '<br>'
                                                                                           + '<div style="width:100%;text-align:left;margin:-17px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement End Date</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementEndDate}</div>'

                                                                                          + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Advertisement Period</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{AdvertisementPeriod}-Days</div>'

                                                                                          + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Fees</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">RM{AdvertisementFees}</div>'
                                                                                                    + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Created By / Created Date:</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{CreatedBy} / {CreatedDate}</div>'
                                                                                                      + '<div style="width:100%;text-align:left;margin:0px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;">Moddified By / Modified Date:</div><br><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;display:block;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;">{ModifiedBy} / {ModifiedDate}</div>'
                                                                                       + '{AdvertisementStatusButton}'


                                                                                           + '</div>' +
                                                                                    // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 74px" class="tg"><colgroup><col style="width: 49px"><col style="width: 25px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr></thead></table>'
                                                                                   // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
                                                                                //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                                                                                   '</div>',
                                                        width: '100%',
                                                        listeners: {
                                                            itemsingletap: function (list, idx, target, records, evt) {
                                                                // ;
                                                                //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                                //FloatPanel_Advertisement_EnterpriseDetailsShow(EnterpriseAccNo);
                                                                //globalFloatPanel_AdvertisementSetting_ID = records.get('ID');
                                                                //document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value = records.get('AdvertisementCode');

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

                            },





                              {
                                  xtype: 'container',

                                  id: 'containerFloatPanel_AdvertisementTitleInner',
                                  width: '100%',
                                  // hidden:true,
                                  docked: 'bottom',
                                 // margin: '0 0 -5 0',
                                  height: 50,
                                  // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',

                                  layout: {
                                      type: 'hbox',
                                      pack: 'center',
                                      align: 'center'

                                  },
                                  items: [


                                        {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_MyAdvertisementSearch',
                                            // hidden: true,
                                            //  badgeText: '1',
                                            margin: '5 0 0 -5',
                                            height: 40,
                                            width: 40,
                                            html: '<img src="resources/icons/searchPurpleTwo.png" width="30" height="30" alt="Company Name">',
                                            ui: 'plain',
                                            handler: function () {
                                                // NotificationsPanelShow();

                                                // LoyaltyCardRedeemListShow();


                                                //  LoyaltyCardRedeemListShow();
                                            }
                                        },
                                        {
                                            id: 'FloatPanel_MyAdvertisementSearchTxt',
                                            margin: '0 0 0 0',
                                            width: '70%',
                                            height: 20,
                                            html: '<input type="text" id="input-MyAdvertisementSearchTxt" placeHolder="Search Advertisment Title" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                        },


                                        {
                                            xtype: 'spacer'
                                        },

                                        {
                                            xtype: 'button',
                                            hidden: true,
                                            id: 'btnFloatPanel_MyAdvertisement_Filter',
                                            // hidden: true,
                                            //  badgeText: '1',
                                            margin: '5 0 0 -5',
                                            height: 40,
                                            width: 40,
                                            html: '<img src="resources/icons/filterPurpleThree.png" width="30" height="30" alt="Company Name">',
                                            ui: 'plain',
                                            handler: function () {
                                                // NotificationsPanelShow();

                                                // LoyaltyCardRedeemListShow();


                                                //  LoyaltyCardRedeemListShow();
                                            }
                                        },




                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_MyAdvertisement_AddNew',
                                               // hidden: true,
                                               //  badgeText: '1',
                                               margin: '5 0 0 -5',
                                               height: 40,
                                               width: 40,
                                               html: '<img src="resources/icons/AddNewAdvertismentPurple.png" width="30" height="30" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   FloatPanel_AdvertisementSettingAddNewShow();
                                                   globalFloatPanel_AdvertisementSetting_ID = 0;
                                                   document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value = CreateAdvertisementCode();
                                                   Ext.getCmp('btnFloatPanel_AdvertisementSetting_Status').setHidden(true);
                                                   Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(true);
                                                   Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(true);
                                                   Ext.getCmp('Container_FloatPanel_AdvertisementSetting_Status').setHidden(true);
                                                   document.getElementById('input-FloatPanel_AdvertisementSetting_Fees').value = "0.00";
                                                   
                                                   // NotificationsPanelShow();

                                                   // LoyaltyCardRedeemListShow();


                                                   //  LoyaltyCardRedeemListShow();
                                               }
                                           },








                                  ]

                              },

                              






                        ]
                    },



               
                    
                    

                ]
            },












        ]





    });
    return _FloatPanel_Advertisement;



}








function FloatPanel_AdvertisementShow() {

    Ext.Viewport.remove(_FloatPanel_Advertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_Advertisement());
    this.overlay.show();
    isFloatPanel_AdvertisementOpen = 'Y';

    Load_FloatPanel_Advertisement_AdvertisementloadByEnterpriseHQAccNoStore();
    Load_FloatPanel_Advertisement_AdvertisementDashboardCountByEnterpriseHQAccNoStore();
    document.getElementById("input-MyAdvertisementSearchTxt").addEventListener("keyup", FloatPanel_Advertisement_inputMyAdvertisementSearchTxtOnKeyUp);

    // Load_FloatPanel_Advertisement_EnterprisesLoadByEnterpriseAccNoStore();
   // Load_FloatPanel_Advertisement_AyohaEnterprisesUserLoginStore()








    //var containerViewPicProfile = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_Advertisement_UserEnterpriseUploadPhoto]')[0];
    //var containerViewElPicProfile = containerViewPicProfile.element;
    //containerViewElPicProfile.on('singletap',
    //  function (event, node, options, eOpts) {

    //      uploadUserEnterpriseProfileImg();
    //  }
    //);




}





function FloatPanel_AdvertisementHide() {
    _FloatPanel_Advertisement.hide(); isFloatPanel_AdvertisementOpen = 'N';
}



//var StampCount;

//function Load_FloatPanel_Advertisement_EnterprisesLoadByEnterpriseHQAccNoStore() {

//    Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
//        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

//    });
//    Ext.StoreMgr.get('EnterprisesLoadByEnterpriseHQAccNoStore').load();
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
//            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
//        });
//        Ext.StoreMgr.get('EnterprisesLoadByEnterpriseHQAccNoStore').load();
//        var myStore = Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore');
//        var count = myStore.getCount();
//        Ext.getCmp('htmlEnterprisesListCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');


//        Ext.Viewport.setMasked(false);








//    });
//    task.delay(1000);

//}

var DataStore_AdvertisementSetting;
function Load_FloatPanel_Advertisement_AdvertisementloadByEnterpriseHQAccNoStore() {

    Ext.getStore('AdvertisementloadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

    });
    Ext.StoreMgr.get('AdvertisementloadByEnterpriseHQAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AdvertisementloadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('AdvertisementloadByEnterpriseHQAccNoStore').load();
        var myStore = Ext.getStore('AdvertisementloadByEnterpriseHQAccNoStore');
        DataStore_AdvertisementSetting = Ext.getStore('AdvertisementloadByEnterpriseHQAccNoStore');
        var count = myStore.getCount();
       // Ext.getCmp('htmlUserEnterprisesListCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');


        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}



function Load_FloatPanel_Advertisement_AdvertisementDashboardCountByEnterpriseHQAccNoStore() {

    Ext.getStore('AdvertisementDashboardCountByEnterpriseHQAccNoStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

    });
    Ext.StoreMgr.get('AdvertisementDashboardCountByEnterpriseHQAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AdvertisementDashboardCountByEnterpriseHQAccNoStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('AdvertisementDashboardCountByEnterpriseHQAccNoStore').load();
        var myStore = Ext.getStore('AdvertisementDashboardCountByEnterpriseHQAccNoStore');
        var modelRecord = myStore.getAt(0);
        var Submitted = modelRecord.get('Submitted');
        var Approved = modelRecord.get('Approved');
        var Rejected = modelRecord.get('Rejected');
        var Published = modelRecord.get('Published');


        //var count = myStore.getCount();
        Ext.getCmp('htmlAdvertisementSubmittedCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + Submitted + '</div>');
        Ext.getCmp('htmlAdvertisementApprovedCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + Approved + '</div>');
        Ext.getCmp('htmlAdvertisementRejectedCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + Rejected + '</div>');
        Ext.getCmp('htmlAdvertisementPublishedCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + Published + '</div>');
        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}






function FloatPanel_Advertisement_inputMyAdvertisementSearchTxtOnKeyUp() {
    console.log('input-MyAdvertisementSearchTxt');
    var countSearch = 0;


    DataStore_AdvertisementSetting.clearFilter();

    var queryString = document.getElementById('input-MyAdvertisementSearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        DataStore_AdvertisementSetting.filterBy(function (record) {
            if (thisRegEx.test(record.get('AdvertisementTitle'))) {
                console.log('ada0');

                countSearch = DataStore_AdvertisementSetting.getCount();
                return true;

            };
            return false;

            console.log('tiada1');
            countSearch = DataStore_AdvertisementSetting.getCount();
            //  return false;
        });
        console.log('tiada3');
    }


    else {
        console.log('tiada2');
        DataStore_AdvertisementSetting.clearFilter();;
        return false;
    }


    //}

}














