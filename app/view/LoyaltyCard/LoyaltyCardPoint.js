Ext.define('ianMizi.view.LoyaltyCard.LoyaltyCardPoint', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'xtypeLoyaltyCardPoint',
    id: 'LoyaltyCardPointID',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
        //scrollable: {
        //    direction: 'vertical',
        //    directionLock: true
        //},

        //style: "background-color: #157fcc; color:white;",

        //    style: "background-color: #D25959; color:black;",

       // style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
        style:' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //style: 'background-image: url("resources/icons/kedaikopibg.jpg"); background-size: 100% 100%;border-bottom:1px none;',

        // style: "background-color: #f5f5f5;",
        items: [



            {
                //xtype: 'toolbar',
                xtype: 'container',
               hidden:true,
               // title: '<font size="4" color="white">Loyalty Card</font>',
                docked: 'top',
                id: 'LoyaltyCardPointtoolbarTop',
                style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
               
                //style: {

                //    background: '#f44336',

                //   // background: 'transparent',
                //},
                width: '100%',
                height: 40,
             //   style: "background-color: transparent",
                //style: "background-color: #F35B57;",

                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },


                items:
                       [

                          

                           //{
                           //    xtype: 'button',
                           //    id: 'btnLoyaltyCardPointHome',
                           //    // iconCls: 'list',
                           //    html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="25" height="20" alt="Company Name"></div>',
                           //    ui: 'plain',
                           //    handler: function () {
                           //        DrawerMenuShow();

                           //    }
                           //},
                             {
                                 xtype: 'spacer'
                             },

                                        {
                                            xtype: 'button',
                                            id: 'btnNotification_LoyaltyCardPoint',
                                            //  badgeText: '1',
                                            html: '<div ><img src="resources/icons/NotificationWhite.png" width="30" height="30" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                                // NotificationsPanelShow();
                                            }
                                        },


                       ]
            },

            //{

            //    xtype: 'container',
            //    width: '100%',
            //    // width: 40,
               
            //    //  title: '<font size="3" color="white">Live Tracking Map</font>',
            //    //hidden: true,
            //    docked: 'top',
            //    id: 'containerLoyaltyCardHeader',
            //    style: {
            //        // background: '#D25959',
            //        background: 'transparent',
            //        // border: '2px'
            //    },
            //    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            //    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
            //    layout: {
            //        type: 'hbox',
            //        pack: 'center',
            //        align: 'center',
            //    },
            //    // hidden:true,
            //    items:
            //           [

                           
            //                         {
            //                             xtype: 'button',
            //                             id: 'btnLoyaltyCardPointHome',
            //                             height: 30,
            //                             width: 35,
            //                             // iconCls: 'list',
            //                             html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="25" height="20" alt="Company Name"></div>',
            //                             ui: 'plain',
            //                             handler: function () {
            //                                 DrawerMenuShow();

            //                             }
            //                         },
            //                          {
            //                              xtype: 'spacer',

            //                          },



            //                                  {
            //                                      xtype: 'container',
            //                                      //   margin: '0 0 0 5',
            //                                      // hidden:true,
            //                                      //style: 'background-color: white;',
            //                                      style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                
            //                                      height: 25,
            //                                      width: 70,
            //                                      // margin: '70 0 0 0',
            //                                      id: 'containerHastaMapHaiUser',
            //                                      layout: {

            //                                          type: 'hbox',
            //                                          pack: 'center',
            //                                          align: 'center'
            //                                      },
            //                                      items: [


            //                                          {
            //                                              margin: '0 0 0 0',
            //                                              id: 'htmlHastaMapHaiUser',
            //                                              html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
            //                                          }
            //                                      ]
            //                                  },
            //                               {
            //                                   xtype: 'container',
            //                                   margin: '0 0 0 -5',
            //                                   // hidden: true,
            //                                   //style: 'background-color: white;',
            //                                   style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
            //                                   height: 40,
            //                                   width: 40,
            //                                   // margin: '70 0 0 0',
            //                                   id: 'containerHastaMapPictureUser',
            //                                   layout: {

            //                                       type: 'hbox',
            //                                       pack: 'center',
            //                                       align: 'center'
            //                                   },
            //                                   items: [
            //                                       {
            //                                           xtype: 'button',
            //                                           height: 40,
            //                                           width: 40,
            //                                           margin: '0 0 0 -11',
            //                                           id: 'btnMovementMapSingleTrackingInfo',
            //                                           //badgeText: "2",
            //                                           html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
            //                                           ui: 'plain',
            //                                           handler: function () {

            //                                               //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
            //                                               //  setupMovementMap(2);





            //                                               //Ext.getCmp('mainView').setActiveItem(16);
            //                                               //loadNotificationSummary();
            //                                           }
            //                                       },



            //                                   ]
            //                               },










            //           ]

            //},




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
                      //  docked: 'top',
                        id: 'containerLoyaltyCardHeader',
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
                                                 id: 'btnLoyaltyCardBack',
                                                 height: 30,
                                                 width: 35,
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     DrawerMenuShow();

                                                 }
                                             },
                                             {
                                                 margin: '0 0 0 0',
                                                 html: '<font size=2 color=white><b>Loyalty Points</b></font>'
                                             },
                                              {
                                                  xtype: 'spacer',

                                              },



                                                      {
                                                          xtype: 'container',
                                                          //   margin: '0 0 0 5',
                                                          // hidden:true,
                                                          //style: 'background-color: white;',
                                                          style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',

                                                          height: 25,
                                                          width: 70,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerHastaMapHaiUser',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'
                                                          },
                                                          items: [


                                                              {
                                                                  margin: '0 0 0 0',
                                                                  id: 'htmlHastaMapHaiUser',
                                                                  html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                              }
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
                                                       id: 'containerHastaMapPictureUser',
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
                                                               id: 'btnMovementMapSingleTrackingInfo',
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
                        margin: '-25 0 0 0',
                        width: '100%',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
{
    xtype: 'container',

    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    items: [

        {
            margin: '2 0 0 0',
            height: 130,
            width: 130,
            html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
        },
        {
            xtype: 'container',

            width: '100%',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center'

            },
            items: [

                 {
                     margin: '0 0 0 0',

                     html: '<font size=3 color=white><b>Community Coffee Roastes Sdn Bhd</b></font>',
                 },
            //     {
            //         margin: '-8 0 0 0',

            //         html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
            //     },
            //      {
            //          margin: '-7 0 0 0',

            //          html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
            //      },
            ]

        }

    ]
},
                     {
                         xtype: 'container',
                         height: 1,
                         width: '90%',
                         style: {

                             background: 'white',

                         },
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center'

                         },
                     },




                      //{
                      //    zIndex: 40,
                      //    margin: '-25 0 0 0',
                      //    html: '<div class="btn--shockwave is-active"><div class="transboxLoyaltyCardPointContainer"></div></div>',
                      //    height: 100,
                      //    width: '100%',
                      //},
                      {
                          xtype: 'container',
                          height: 90,
                          width: '80%',
                          //// style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',   
                          //style: 'background-color: rgb(255 230 0);background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                          //  style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',

                          style: {

                              background: 'transparent',

                          },
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center'

                          },
                          items: [
                              {
                                  margin: '-10 0 0 0',
                                  html: '<font size=2 color=white><b>Congrulation !</b></font>'
                              },

                              {
                                  margin: '-10 0 0 0',
                                  //  html:'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:50px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;width:100%;height:100px">1000</div>',
                                  html: '<font size=13 color=white><b>1005</b></font>'
                              },
                               {
                                   margin: '-20 0 0 0',
                                   html: '<font size=2 color=white><b>Points</b></font>'
                               },

                          {
                              xtype: 'container',
                              width: '100%',
                              margin: '-65 0 0 -7',
                              style: {

                                  background: 'transparent',

                              },
                              layout: {
                                  type: 'hbox',
                                  pack: 'right',
                                  align: 'right'

                              },
                              items: [

                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      margin: '-2 0 0 0',
                                      style: {

                                          background: 'transparent',

                                      },
                                      layout: {
                                          type: 'vbox',
                                          pack: 'right',
                                          align: 'right'

                                      },
                                      items: [

                                        {
                                            xtype: 'button',
                                            id: 'btnRedeem_LoyaltyCardPoint',
                                            //  badgeText: '1',
                                            margin: '-13 15 0 0',
                                            height: 55,
                                            width: 55,
                                            html: '<div class="blink_me"><img src="resources/icons/gift-hearts-icon.png" width="45" height="45" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                                // NotificationsPanelShow();
                                                LoyaltyCardRedeemListShow();
                                            }
                                        },
                                         {
                                             //margin: '10 0 0 0',
                                             margin: '-11 15 0 0',
                                             id: 'htmlBtnLoyaltyCardPointRedeem',
                                             html: '<div class="blink_me"><button OnClick="LoyaltyCardRedeemListShow()" class="buttonLoyaltyCardPointRedeem">Redeem</button></div>'
                                         }

                                      ]

                                  },


                              ]
                          }

                          ]
                      },
                        ]

                    },


                     //{
                     //    xtype: 'container',

                     //    width: '100%',
                     //    layout: {
                     //        type: 'vbox',
                     //        pack: 'center',
                     //        align: 'center'

                     //    },
                     //    items: [

                     //        {
                     //            margin: '2 0 0 0',
                     //            height: 130,
                     //            width: 130,
                     //            html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
                     //        },
                     //        {
                     //            xtype: 'container',

                     //            width: '100%',
                     //            layout: {
                     //                type: 'vbox',
                     //                pack: 'center',
                     //                align: 'center'

                     //            },
                     //            items: [

                     //                 {
                     //                     margin: '0 0 0 0',

                     //                     html: '<font size=3 color=white><b>Community Coffee Roastes Sdn Bhd</b></font>',
                     //                 },
                     //            //     {
                     //            //         margin: '-8 0 0 0',

                     //            //         html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                     //            //     },
                     //            //      {
                     //            //          margin: '-7 0 0 0',

                     //            //          html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                     //            //      },
                     //            ]

                     //        }

                     //    ]
                     //},
                     //{
                     //    xtype: 'container',
                     //    height: 1,
                     //    width: '90%',
                     //    style: {

                     //        background: 'white',

                     //    },
                     //    layout: {
                     //        type: 'hbox',
                     //        pack: 'center',
                     //        align: 'center'

                     //    },
                     //},

                    


                     // //{
                     // //    zIndex: 40,
                     // //    margin: '-25 0 0 0',
                     // //    html: '<div class="btn--shockwave is-active"><div class="transboxLoyaltyCardPointContainer"></div></div>',
                     // //    height: 100,
                     // //    width: '100%',
                     // //},
                     // {
                     //     xtype: 'container',
                     //     height: 90,
                     //     width: '80%',
                     //     //// style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',   
                     //     //style: 'background-color: rgb(255 230 0);background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                     //   //  style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                          
                     //     style: {

                     //         background: 'transparent',

                     //     },
                     //     layout: {
                     //         type: 'vbox',
                     //         pack: 'center',
                     //         align: 'center'

                     //     },
                     //     items: [

                     //         {
                     //             margin:'-10 0 0 0',
                     //           //  html:'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:50px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;width:100%;height:100px">1000</div>',
                     //             html: '<font size=13 color=white><b>1005</b></font>'
                     //         },
                     //          {
                     //             margin: '-20 0 0 0',
                     //              html: '<font size=2 color=white><b>Points</b></font>'
                     //          },
                              
                     //     {
                     //         xtype: 'container',                            
                     //         width: '100%',
                     //         margin: '-55 0 0 -7',
                     //         style: {

                     //             background: 'transparent',

                     //         },
                     //         layout: {
                     //             type: 'hbox',
                     //             pack: 'right',
                     //             align: 'right'

                     //         },
                     //         items: [

                     //             {
                     //                 xtype: 'container',
                     //                 width: '100%',
                     //                 margin: '-2 0 0 0',
                     //                 style: {

                     //                     background: 'transparent',

                     //                 },
                     //                 layout: {
                     //                     type: 'vbox',
                     //                     pack: 'right',
                     //                     align: 'right'

                     //                 },
                     //                 items: [

                     //                   {
                     //                       xtype: 'button',
                     //                       id: 'btnRedeem_LoyaltyCardPoint',
                     //                       //  badgeText: '1',
                     //                       margin:'-13 15 0 0',
                     //                       height: 55,
                     //                       width:55,
                     //                       html: '<div class="blink_me"><img src="resources/icons/gift-hearts-icon.png" width="45" height="45" alt="Company Name"></div>',
                     //                       ui: 'plain',
                     //                       handler: function () {
                     //                           // NotificationsPanelShow();
                     //                           LoyaltyCardRedeemListShow();
                     //                       }
                     //                   },
                     //                    {
                     //                        //margin: '10 0 0 0',
                     //                        margin: '-11 15 0 0',
                     //                        id: 'htmlBtnLoyaltyCardPointRedeem',
                     //                        html: '<div class="blink_me"><button OnClick="LoyaltyCardRedeemListShow()" class="buttonLoyaltyCardPointRedeem">Redeem</button></div>'
                     //                    }

                     //                 ]

                     //             },
                                  
                                  
                     //         ]
                     // }

                     //     ]
                     // },
                        



                         {
                             xtype: 'container',
                             id: 'containerLoyaltyCardPointMasterHeader',
                             width: '96%',
                             height: 25,
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
                                     id: 'btnPointLoyaltyCard',
                                     html: '<img src="resources/icons/pointHistory.png" width="20" height="20" alt="Company Name">',
                                 },
                                 {
                                     //  width: 150,
                                     margin:'0 0 0 5',
                                     id:'htmlPointLoyaltyCardLbl',
                                     html: '<font size=2 color=black>Point History</font>'
                                 },
                                 {
                                     xtype: 'spacer'
                                 },
                                 {
                                     id: 'LoyaltyCardPointMasterHeader_PointHistorySearchTxt',
                                       margin: '-5 10 0 0',
                                     width: 120,
                                     height: 16,
                                     html: '<input type="text" id="input-PointHistorySearchTxt" placeholder="Search " style="border-color:purple;color:black;width:120px;text-align: center">'
                                 },
                                 {
                                     hidden:true,
                                     id: 'htmlLoyaltyCardClientID',
                                     html: '<font size=2 color=black>Client ID:0000</font>'
                                    
                                 }
                             ]

                         },

                      

                      //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                      {
                          xtype: 'tabpanel',
                         // hidden: true,
                          //  hidden:true,
                          id: 'tabpanelLoyaltyCardPoint',
                         // style: 'border-top:2px solid #ECF0F1;background: white;',
                          // style: 'background-color: black;',
                          // margin: '-20 0 0 -26',
                          // margin: '25 0 0 0',

                          //width: 200,
                          width: '96%',
                          height: 360,
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
                          //docked: 'bottom',
                         

                          //initialize: function (c) {
                          //    //this.getTabBar().hide();

                          //},
                          //defaults: {
                          //    //scrollable: true,
                          //    //layout: 'center',
                          //    //userCls: 'card',
                              
                          //    tab: {
                          //        height: 10,
                          //        activeItem: 0,
                          //    }
                          //},


                          //config: {
       
                          //    activeItem: 0,
                          //    width: '96%',
                          //    height: 360,
                          //    tabBar: {
                          //        // ui: 'plain',
                          //        ui: 'neutral',
                          //        // docked:'bottom',

                          //        layout: {


                          //            pack: 'center'

                          //        },
                          //        listeners: {

                          //        },
                          //    },

                           

                          items: [



      {
          xtype: 'container',
          id: 'containerLoyaltyCardPointMaster',
          width: '100%',
          height: 360,
          //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
          style: "background-color: white;",
          //style: "background-color: #F35B57;",
          title: 'LoyaltyCardPointMaster',
          layout: {
              type: 'vbox',
              pack: 'center',
              align: 'center'

          },
          listeners: {
              initialize: function (c) {

                  this.element.on({
                      swipe: function (e, node, options) {
                          if (e.direction == "left") {
                              //  alert("Hey! I swipe left");
                              Ext.getCmp('tabpanelLoyaltyCardPoint').setActiveItem(1);
                          } else {
                              //  alert("Hey! I swipe right");

                          }
                      }
                  });
              }
          },


          items: [




                {
                    xtype: 'list',
                    height: '100%',
                    store: 'FlatBillGetByIcStore',
                    id: 'LoyaltyCardPointListID',
                    mode: 'SINGLE',
                    // disableSelection: true,
                    itemTpl: '<div class="myContent">' +
                        // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                        //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                         // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                        //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                      // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                     //backgroundimage '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-image: url(resources/icons/backgroundlistdowngrades.jpg);background-repeat:no-repeat;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                       //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

                         //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div style="background-color: white; color: black; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:42px" ><font size=5>10</font><br>Point</div><b>{FlatBillShotDescModified}</b><br>{FlatBillDate} - {FlatBillAccountNo}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:left;font-size:16px;padding:0px 0px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                         '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{FlatBillShotDescModified}<br>{FlatBillDate} - {FlatBillAccountNo}<br><div style="border-bottom: 1px none black;border-top: 1px none black;background-color: white;">Total Paid:RM{FlatBillFinalAmount}</div></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal"><div style="border: 1px solid grey;height:60px;width:60px;border-radius: 60px;vertical-align:middle;text-align:center;"><div style="margin:10px 0px 0px 0px;"><font size=3><b>100</b></font></div><br><div style="margin:-20px 0px 0px 0px;"><font size=2><b>Point</b></font></div></div></th></tr></thead></table>' +




                       // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 74px" class="tg"><colgroup><col style="width: 49px"><col style="width: 25px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr></thead></table>'
                      // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
                   //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                      '</div>',
                    width: '100%',
                    listeners: {
                        itemsingletap: function (list, idx, target, records, evt) {
                            LoadingPanelShow();
                            Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                            Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                            Ext.getCmp('mainView').setActiveItem(2);
                            Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                            Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                            FlatBillID_ID = records.get('ID');
                            FlatBillID = records.get('FlatBillID');
                            FlatBillStatus = records.get('FlatBillStatus');
                            FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                            CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                            ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                            localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                            Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                            var CurrFlatBillStatusAndCategory = '<b>New</b>';
                            localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                            //StatusDetailReceiptMenuShow();
                            directedMenu('New');
                            Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                                BillID: FlatBillID
                            });
                            Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                            Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                                TemplateCode: ReceiptTemplateCode

                            });
                            Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                            GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                            // detailsReceiptsprocess(FlatBillID);
                            // generateReceipts(CloudreceiptAccNo, FlatBillID);



                            //  detailsReceiptsprocess(FlatBillID);

                        },
                        deselect: function (list, records) {

                        }
                    },

                },













          ]

      },


                               {
                                   xtype: 'container',
                                   id: 'containerLoyaltyCardPointMasterQRCodePoint',
                                   width: '100%',
                                   height: 360,
                                   //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                   style: "background-color: white;",
                                   //style: "background-color: #F35B57;",
                                   title: 'LoyaltyCardPointMasterQRCodePoint',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   listeners: {
                                       initialize: function (c) {

                                           this.element.on({
                                               swipe: function (e, node, options) {
                                                   if (e.direction == "left") {
                                                       //  alert("Hey! I swipe left");
                                                    
                                                   } else {
                                                       //  alert("Hey! I swipe right");
                                                       Ext.getCmp('tabpanelLoyaltyCardPoint').setActiveItem(0);
                                                   }
                                               }
                                           });
                                       }
                                   },

                                   items: [

                               
                                       {
                                           id: 'htmlLoyaltyCardPointMasterQRCodePoint',
                                           margin:'18 0 0 20',
                                           width: '100%',
                                           height: 360,
                                           html:'<img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;" />',
                                       }



                                   ]

                               },

                             

                          ]

                      //}
                      },






























                      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



















                      //{
                      //    xtype: 'container',
                      //    id: 'containerLoyaltyCardPointMaster',
                      //    width: '96%',
                      //    height: 360,
                      //    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                      //    style: "background-color: white;",
                      //    //style: "background-color: #F35B57;",

                      //    layout: {
                      //        type: 'vbox',
                      //        pack: 'center',
                      //        align: 'center'

                      //    },


                      //    items: [

                              

                               
                      //          {
                      //              xtype: 'list',
                      //              height: '100%',
                      //              store: 'FlatBillGetByIcStore',
                      //              id: 'LoyaltyCardPointListID',
                      //              mode: 'SINGLE',
                      //             // disableSelection: true,
                      //              itemTpl: '<div class="myContent">' +
                      //                  // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                      //                  //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                      //                   // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                      //                  //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                      //                // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                      //               //backgroundimage '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-image: url(resources/icons/backgroundlistdowngrades.jpg);background-repeat:no-repeat;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                      //                 //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

                      //                   //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div style="background-color: white; color: black; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:42px" ><font size=5>10</font><br>Point</div><b>{FlatBillShotDescModified}</b><br>{FlatBillDate} - {FlatBillAccountNo}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:left;font-size:16px;padding:0px 0px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                      //                   '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{FlatBillShotDescModified}<br>{FlatBillDate} - {FlatBillAccountNo}<br><div style="border-bottom: 1px none black;border-top: 1px none black;background-color: white;">Total Paid:RM{FlatBillFinalAmount}</div></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal"><div style="border: 1px solid grey;height:60px;width:60px;border-radius: 60px;vertical-align:middle;text-align:center;"><div style="margin:10px 0px 0px 0px;"><font size=3><b>100</b></font></div><br><div style="margin:-20px 0px 0px 0px;"><font size=2><b>Point</b></font></div></div></th></tr></thead></table>' +




                      //                 // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 74px" class="tg"><colgroup><col style="width: 49px"><col style="width: 25px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr></thead></table>'
                      //                // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
                      //             //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                      //                '</div>',
                      //              width: '100%',
                      //              listeners: {
                      //                  itemsingletap: function (list, idx, target, records, evt) {
                      //                      LoadingPanelShow();
                      //                      Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                      //                      Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                      //                      Ext.getCmp('mainView').setActiveItem(2);
                      //                      Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                      //                      Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                      //                      FlatBillID_ID = records.get('ID');
                      //                      FlatBillID = records.get('FlatBillID');
                      //                      FlatBillStatus = records.get('FlatBillStatus');
                      //                      FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                      //                      CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                      //                      ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                      //                      localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                      //                      Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                      //                      var CurrFlatBillStatusAndCategory = '<b>New</b>';
                      //                      localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                      //                      //StatusDetailReceiptMenuShow();
                      //                      directedMenu('New');
                      //                      Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                      //                          BillID: FlatBillID
                      //                      });
                      //                      Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                      //                      Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                      //                          TemplateCode: ReceiptTemplateCode

                      //                      });
                      //                      Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                      //                      GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                      //                      // detailsReceiptsprocess(FlatBillID);
                      //                      // generateReceipts(CloudreceiptAccNo, FlatBillID);



                      //                      //  detailsReceiptsprocess(FlatBillID);

                      //                  },
                      //                  deselect: function (list, records) {

                      //                  }
                      //              },

                      //          },





                               


                               




                      //    ]

                      //},
                      {
                          xtype: 'container',
                          id: 'containerLoyaltyCardPointTitleOutter',
                          width: '96%',
                          height: 60,
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
                                  id: 'containerLoyaltyCardPointTitlePointHistory',
                                  width: '33.3%',
                                  height: 50,
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
                                           id: 'btnPointHistory_LoyaltyCardPoint',
                                           //  badgeText: '1',
                                           margin: '-5 0 0 0',
                                           height: 45,
                                           width: 45,
                                           html: '<img src="resources/icons/pointHistory.png" width="35" height="35" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {
                                               // NotificationsPanelShow();
                                               // LoyaltyCardRedeemListShow();
                                               Ext.getCmp('tabpanelLoyaltyCardPoint').setActiveItem(0);
                                               Ext.getCmp('btnPointLoyaltyCard').setHtml('<img src="resources/icons/pointHistory.png" width="20" height="20" alt="Company Name">');
                                               Ext.getCmp('htmlPointLoyaltyCardLbl').setHtml('<font size=2 color=black>Point History</font>');
                                               Ext.getCmp('htmlLoyaltyCardClientID').setHidden(true);
                                               Ext.getCmp('LoyaltyCardPointMasterHeader_PointHistorySearchTxt').setHidden(false);
                                              
                                                   
                                           }
                                       },
                                        {
                                            margin: '-7 0 0 0',
                                            html: '<font size=2 color=grey><b>Points History</b></font>'
                                        },

                                  ]
                              },

                                  {
                                      xtype: 'container',
                                      id: 'containerLoyaltyCardPointTitleQrCode',
                                      width: '33.3%',
                                      height: 50,
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
                                               id: 'btnQrCode_LoyaltyCardPoint',
                                               //  badgeText: '1',
                                               margin: '-5 0 0 0',
                                               height: 45,
                                               width: 45,
                                               html: '<img src="resources/icons/qrcodetwo.png" width="35" height="35" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   // NotificationsPanelShow();
                                                   Ext.getCmp('tabpanelLoyaltyCardPoint').setActiveItem(1);
                                                   CreateQRCodeForLoyaltyCardPoint();

                                                   Ext.getCmp('btnPointLoyaltyCard').setHtml('<img src="resources/icons/qrcodetwo.png" width="20" height="20" alt="Company Name">');
                                                 

                                                   Ext.getCmp('htmlLoyaltyCardClientID').setHidden(true);
                                                   Ext.getCmp('LoyaltyCardPointMasterHeader_PointHistorySearchTxt').setHidden(true);
                                                

                                                   
                                                 //  LoyaltyCardRedeemListShow();
                                               }
                                           },
                                            {
                                                margin: '-7 0 0 0',
                                                html: '<font size=2 color=grey><b>QR Code Point</b></font>'
                                            },

                                      ]
                                  },

                                  {
                                      xtype: 'container',
                                      id: 'containerLoyaltyCardPointTitleRedeem',
                                      width: '33.3%',
                                      height: 50,
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
                                               id: 'btnRedeem_LoyaltyCardPointBottom',
                                               //  badgeText: '1',
                                               margin: '-5 0 0 0',
                                               height: 45,
                                               width: 45,
                                               html: '<img src="resources/icons/redeemHistory.png" width="35" height="35" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   // NotificationsPanelShow();
                                                 
                                                   LoyaltyCardRedeemListShow();


                                                   //  LoyaltyCardRedeemListShow();
                                               }
                                           },
                                            {
                                                margin: '-7 0 0 0',
                                                html: '<font size=2 color=grey><b>Redeem</b></font>'
                                            },

                                      ]
                                  },

                          ]

                      },
                      {
                          xtype: 'container',
                          id: 'containerLoyaltyCardPointbottom',
                          hidden:true,
                          style: "background-color: transparent",
                          //style: "background-color: #F35B57;",
                          docked: 'bottom',
                          layout: {
                              type: 'hbox',
                              pack: 'center',
                              align: 'center'

                          },


                          items: [


                                    {
                                        xtype: 'button',
                                        height: 32,
                                        width: 32,
                                        margin: '0 0 0 0',
                                        id: 'btnLoyaltyCardPointbottomFB',
                                        //badgeText: "2",
                                        html: '<div ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            alert("sdfdsf");

                                        }
                                    },
                                     {
                                         xtype: 'button',
                                         height: 32,
                                         width: 32,
                                         margin: '0 0 0 0',
                                         id: 'btnLoyaltyCardPointbottomInsta',
                                         //badgeText: "2",
                                         html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             alert("sdfdsf");

                                         }
                                     },

                          ]

                      },
                       
            //{
            //    xtype: 'container',

            //    margin: '-10 0 0 0',
            //    layout: {
            //        type: 'vbox',
            //        pack: 'start',
            //        align: 'center'

            //    },
            //    items: [


            //         {
            //             //   xtype: 'panel',
            //             //  bodyPadding: 10,
            //             //height: 180,
            //             //width: 350,

            //             //  margin: '-50 0 0 0',

            //             //   html: '<img src="resources/icons/MostiTrackICon2.png"/>',

            //             html: '<img src="resources/icons/CloudReceipt3.png" width="180" height="180"/>',
            //             //  html: '<img src="resources/icons/CloudReceipt.png" width="180" height="160"/>',



            //             //  html: '<img src="resources/icons/MostiTrackICon2.png" style="max-height:100%; max-width:100%;"/>',


            //         },

            //         {
            //             id: 'loginlblversion',
            //             margin: '-30 0 0 0',
            //             html: '<font size="2" color="white">v Standard 1.0</font>',
            //         },
            //          {
            //              xtype: 'panel',
            //              height: 10
            //          },
            //        {
            //            margin: '0 0 0 -155',
            //            html: '<font size=1px color=white><b>USERNAME</b></font>',
            //        },

            //         {


            //             id: 'inputUserNameID',

            //             html: '<input name="firstname" id="UN"></input>',





            //         },
            //         {
            //             xtype: 'spacer',
            //             height: '6px',
            //         },
            //          {
            //              margin: '0 0 0 -155',
            //              html: '<font size=1px color=white><b>PASSWORD</b></font>',
            //          },
            //            {


            //                id: 'inputPwdID',

            //                html: '<input type="password" name="lastname" id="PW"></input>',


            //            },
            //             {
            //                 xtype: 'container',
            //                 layout: {
            //                     type: 'hbox',
            //                     pack: 'end',
            //                     align: 'right'
            //                 },



            //                 margin: '2 0 0 0',
            //                 items: [

            //                     {
            //                         margin: '8 -8 0 0',
            //                         id: 'rememberMeCheckboxID',

            //                         html: '<input type="checkbox" value="remember-me" id="remember_me">',
            //                     },
            //                     {
            //                         margin: '0 0 2 -90',
            //                         id: 'rememberMeFontID',
            //                         html: '<button style="background-color: Transparent;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;color:white;" id="btnrememberme" ">Remember Me?</button>'
            //                         //   html: '<font size="2px" color="white">Remember Me?</font>',
            //                     }
            //                 ]

            //                 //id: 'rememberMeCheckboxID',
            //                 //html: '<input type="checkbox" value="remember-me" id="remember_me" onclick="handleClick(this);" >RememberMe',

            //             },


            //                         //////{
            //                         //////    xtype: 'button',
            //                         //////    align: 'stretch',
            //                         //////    //align: 'left',


            //                         //////    ui: 'plain',

            //                         //////    margin: '0 0 0 125',
            //                         //////    html: '<font size=1px color=white><b>Forgot Password?</b></font>',
            //                         //////    handler: function () {
            //                         //////        ForgotPasswordPanelShow();
            //                         //////        //  ForgotPasswordShow();
            //                         //////    },
            //                         //////},

            //             //{
            //             //    margin: '0 0 0 125',
            //             //    html: '<font size=1px color=white><b>Forgot Password?</b></font>',
            //             //},

            //    ]

            //},

             //{
             //    xtype: 'container',
             //    width: '100%',
             //    height:1,
             //},











    

















                ]
            },






        ]
    },
    initialize: function () {

    }
});



function CreateQRCodeForLoyaltyCardPoint() {
    //var billIDs = (getUrlParameter('BillID')); // "1234"
    //var templatecodes = (getUrlParameter('TemplateCode')); // "edit"
    //   var srcUrl = 'https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';
    jQuery('#qrcodeCanvas').qrcode({
        //text: "http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
        //text: 'http://42.1.63.57/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
        text: GetCurrentAccountNo()
    });

    var can = document.getElementsByTagName("canvas");
    var src = can[0].toDataURL("image/png");
    Ext.getCmp('htmlLoyaltyCardPointMasterQRCodePoint').setHtml('<img src="' + src + '" style="width: 90%; height: 90%; border:1px solid white;" />');
    src = "";
   // Ext.getCmp('htmlLoyaltyCardClientID').setHtml('<font size=2 color=black>ID:' + GetCurrentAccountNo() + '</font>');
    Ext.getCmp('htmlPointLoyaltyCardLbl').setHtml('<font size=2 color=black>QR Code Point (' + GetCurrentAccountNo() + ')</font>');
    //console.log("QRCodeImg" + src);
    //localStorage.setItem('QRCodeImg', src);
}


function LoyaltyCardPointAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(251);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    var newHeight = adjustedHeight - 99;
   
    //alert(newHeight)

    Ext.getCmp('tabpanelLoyaltyCardPoint').setHeight(newHeight);
    Ext.getCmp('containerLoyaltyCardPointMaster').setHeight(newHeight);

    




}