Ext.define('ianMizi.view.LoyaltyCard.LoyaltyCardStamp', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'xtypeLoyaltyCardStamp',
    id: 'LoyaltyCardStampID',
    config: {
        styleHtmlContent: true,
        layout: 'vbox',
        fullscreen: true,
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },

        //style: "background-color: #157fcc; color:white;",

        //    style: "background-color: #D25959; color:black;",

        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      // style: 'background-image: url("resources/icons/kedaikopibg.jpg"); background-size: 100% 100%;border-bottom:1px none;',
       
       // style: "background-color: #f5f5f5;",
        items: [



            //{
            //    xtype: 'toolbar',
            //    title: '<font size="4" color="white">Loyalty Card</font>',
            //    hidden:true,
            //    docked: 'top',
            //    id: 'LoyaltyCardStamptoolbarTop',
            //    style: {

            //        background: '#f44336',

            //    },

            //    items:
            //           [
            //               {
            //                   xtype: 'button',
            //                   id: 'btnLoyaltyCardStampHome',
            //                  // iconCls: 'list',
            //                   html: '<div ><img src="resources/icons/latestBurgerMenuWhite2.png" width="25" height="20" alt="Company Name"></div>',
            //                   ui: 'plain',
            //                   handler: function () {
            //                       DrawerMenuShow();

            //                   }
            //               },
            //                 {
            //                     xtype: 'spacer'
            //                 },

            //                            {
            //                                xtype: 'button',
            //                                id: 'btnNotification_LoyaltyCardStamp',
            //                                //  badgeText: '1',
            //                                html: '<div ><img src="resources/icons/NotificationWhite.png" width="30" height="30" alt="Company Name"></div>',
            //                                ui: 'plain',
            //                                handler: function () {
            //                                    // NotificationsPanelShow();
            //                                }
            //                            },


            //           ]
            //},






            {

                xtype: 'container',
                width: '100%',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                 docked: 'top',
                id: 'containerLoyaltyCardStamperHeader',
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
                                         id: 'btnLoyaltyCardStampBack',
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
                                         html: '<font size=2 color=white><b>Loyalty Card Stamp</b></font>'
                                     },
                                      {
                                          xtype: 'spacer',

                                      },



                                              {
                                                  xtype: 'container',
                                                  //   margin: '0 0 0 5',
                                                  // hidden:true,
                                                  //style: 'background-color: white;',
                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                  height: 25,
                                                  width: 70,
                                                  // margin: '70 0 0 0',
                                                  id: 'containerLoyaltyCardStampHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlLoyaltyCardStampHaiUser',
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
                                                          id: 'containerLoyaltyCardStampeWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnLoyaltyCardStampeWallet',
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
                                               id: 'containerLoyaltyCardStampPictureUser',
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
                                                       id: 'btnLoyaltyCardStampInfo',
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

               
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [





                     {
                         xtype: 'container',
                         margin: '-10 0 0 0',
                         width: '100%',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items: [

                             {
                                 margin: '0 0 0 0',
                                 height: 130,
                                 width: 120,
                                 html: '<img src="resources/icons/ccrlogo.png" width="120" height="130"/>',
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
                                   
                                 ]

                             }

                         ]
                     },
                     {
                         xtype: 'container',
                         height:1,
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

                     {
                         margin: '5 0 0 0',
                        id:'htmlMyLoyaltyCardStamp',
                         html: '<font size=2 color=white><b>My Loyalty Card Stamp</b></font>',
                     },
                  
                     {
                         xtype: 'container',
                         id: 'containerLoyaltyCardStampQrCode',
                         width:'100%',
                         hidden:true,
                         style: "background-color: transparent",
                         //style: "background-color: #F35B57;",
                        
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },


                         items: [

                              

                              


                               {
                                   id: 'htmlLoyaltyCardStampQRCode',
                                   margin: '18 0 0 20',
                                   width: '100%',
                                   height: 360,
                                   html: '<img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;" />',
                               }










                         ]

                     },


















                     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                      {
                          xtype: 'container',
                          id: 'containerLoyaltyCardStampMaster',
                          width:'100%',
                          //hidden:true,
                          style: "background-color: transparent",
                          //style: "background-color: #F35B57;",
                        
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center'

                          },


                          items: [

                               {
                                   xtype: 'container',
                                   id: 'containerLoyaltyCardStamp1',
                                   //hidden:true,
                                   style: "background-color: transparent",
                                   //style: "background-color: #F35B57;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'

                                   },


                                   items: [
                                       {
                                           xtype: 'container',
                                           id: 'containerLoyaltyCardStamp01',
                                           //hidden:true,
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
                                                    height: 80,
                                                    width: 80,
                                                    margin: '0 0 0 0',
                                                    id: 'btnLoyaltyCardStamp1',
                                                    //badgeText: "2",
                                                    html: '<div class="blink_me"><div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: purple;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">1</div></div></div>',
                                                    ui: 'plain',
                                                    handler: function () {
                                                        alert("sdfdsf");

                                                    }
                                                },
                                                {
                                                    margin: '-10 0 0 0',
                                                    html:'<font size=1 color=purple><b>17/10/2020 7:18:05PM</b></font>'
                                                },
                                                 {
                                                     margin: '-10 0 0 0',
                                                     html: '<font size=1 color=purple><b>Wati</b></font>'
                                                 }
                                           ]
                                       },
                                        

                                           {
                                               xtype: 'button',
                                               height: 80,
                                               width: 80,
                                               margin: '0 0 0 0',
                                               id: 'btnLoyaltyCardStamp2',
                                               //badgeText: "2",
                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: brown;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">2</div></div>',
                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">2</div></div>',


                                               ui: 'plain',
                                               handler: function () {
                                                   alert("sdfdsf");

                                               }
                                           },
                                            {
                                                xtype: 'button',
                                                height: 80,
                                                width: 80,
                                                margin: '0 0 0 0',
                                                id: 'btnLoyaltyCardStamp3',
                                                //badgeText: "2",
                                              //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: blue;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">50%</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>Off</font></div></div>',
                                                html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">50%</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>Off</font></div></div>',


                                                ui: 'plain',
                                                handler: function () {
                                                    alert("sdfdsf");

                                                }
                                            },

                                   ]

                               },

                               {
                                   xtype: 'container',
                                   id: 'containerLoyaltyCardStamp2',
                                   //hidden:true,
                                   style: "background-color: transparent",
                                   //style: "background-color: #F35B57;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'

                                   },


                                   items: [

                                         {
                                             xtype: 'button',
                                             height: 80,
                                             width: 80,
                                             margin: '0 0 0 0',
                                             id: 'btnLoyaltyCardStamp4',
                                             //badgeText: "2",
                                           //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #8A54EE;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">4</div></div>',
                                             html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">4</div></div>',


                                             ui: 'plain',
                                             handler: function () {
                                                 alert("sdfdsf");

                                             }
                                         },

                                           {
                                               xtype: 'button',
                                               height: 80,
                                               width: 80,
                                               margin: '0 0 0 0',
                                               id: 'btnLoyaltyCardStamp5',
                                               //badgeText: "2",
                                              // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #00FF00;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">5</div></div>',
                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">5</div></div>',

                                               ui: 'plain',
                                               handler: function () {
                                                   alert("sdfdsf");

                                               }
                                           },
                                            {
                                                xtype: 'button',
                                                height: 80,
                                                width: 80,
                                                margin: '0 0 0 0',
                                                id: 'btnLoyaltyCardStamp6',
                                                //badgeText: "2",
                                               // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #F5B34D;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">6</div></div>',
                                                html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">6</div></div>',

                                                ui: 'plain',
                                                handler: function () {
                                                    alert("sdfdsf");

                                                }
                                            },

                                   ]

                               },






                               {
                                   xtype: 'container',
                                   id: 'containerLoyaltyCardStamp3',
                                   //hidden:true,
                                   style: "background-color: transparent",
                                   //style: "background-color: #F35B57;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'

                                   },


                                   items: [

                                         {
                                             xtype: 'button',
                                             height: 80,
                                             width: 80,
                                             margin: '0 0 0 0',
                                             id: 'btnLoyaltyCardStamp7',
                                             //badgeText: "2",
                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #E35CE1;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:15px 0px 0px 0px"><font size=5>ONLY</font></div><br><div style="margin:-20px 0px 0px 0px"><font size=5>RM1</font></div></div>',
                                             html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:15px 0px 0px 0px"><font size=5>ONLY</font></div><br><div style="margin:-20px 0px 0px 0px"><font size=5>RM1</font></div></div>',

                                             ui: 'plain',
                                             handler: function () {
                                                 alert("sdfdsf");

                                             }
                                         },

                                           {
                                               xtype: 'button',
                                               height: 80,
                                               width: 80,
                                               margin: '0 0 0 0',
                                               id: 'btnLoyaltyCardStamp8',
                                               //badgeText: "2",
                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: orange;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">8</div></div>',
                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">8</div></div>',

                                               ui: 'plain',
                                               handler: function () {
                                                   alert("sdfdsf");

                                               }
                                           },
                                            {
                                                xtype: 'button',
                                                height: 80,
                                                width: 80,
                                                margin: '0 0 0 0',
                                                id: 'btnLoyaltyCardStamp9',
                                                //badgeText: "2",
                                                //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #808000;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">9</div></div>',
                                                html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">9</div></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    alert("sdfdsf");

                                                }
                                            },

                                   ]

                               },


                               {
                                   xtype: 'container',
                                   id: 'containerLoyaltyCardStamp4',
                                   //hidden:true,
                                   style: "background-color: transparent",
                                   //style: "background-color: #F35B57;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'

                                   },


                                   items: [

                                         {
                                             xtype: 'button',
                                             height: 80,
                                             width: 80,
                                             margin: '0 0 0 0',
                                             id: 'btnLoyaltyCardStamp10',
                                             //badgeText: "2",
                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #008080;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">10</div></div>',
                                             html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">10</div></div>',

                                             ui: 'plain',
                                             handler: function () {
                                                 alert("sdfdsf");

                                             }
                                         },

                                           
                                            {
                                                xtype: 'button',
                                                height: 100,
                                                width: 100,
                                                margin: '0 0 0 0',
                                                id: 'btnLoyaltyCardStamp11',
                                                //badgeText: "2",
                                                //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1.png); background-size: 100% 100%;" ></div>',
                                                html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" ></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    alert("sdfdsf");

                                                }
                                            },

                                   ]

                               },




                          ]

                      },
                     


                       







                        //{
                        //    margin: '5 0 0 0',

                        //    html: '<font size=2 color=white><b>Contact Us</b></font>',
                        //},



                        //{
                        //    xtype: 'container',
                        //    id: 'containerLoyaltyCardStampbottom',
                        //    //hidden:true,
                        //    style: "background-color: transparent",
                        //    //style: "background-color: #F35B57;",
                         
                        //    layout: {
                        //        type: 'hbox',
                        //        pack: 'center',
                        //        align: 'center'

                        //    },


                        //    items: [


                        //              {
                        //                  xtype: 'button',
                        //                  height: 32,
                        //                  width: 32,
                        //                  margin: '0 0 0 0',
                        //                  id: 'btnLoyaltyCardStampbottomFB',
                        //                  //badgeText: "2",
                        //                  html: '<div ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>',
                        //                  ui: 'plain',
                        //                  handler: function () {
                        //                      alert("sdfdsf");

                        //                  }
                        //              },
                        //               {
                        //                   xtype: 'button',
                        //                   height: 32,
                        //                   width: 32,
                        //                   margin: '0 0 0 0',
                        //                   id: 'btnLoyaltyCardStampbottomInsta',
                        //                   //badgeText: "2",
                        //                   html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
                        //                   ui: 'plain',
                        //                   handler: function () {
                        //                       alert("sdfdsf");

                        //                   }
                        //               },
                        //               {
                        //                   xtype: 'button',
                        //                   height: 32,
                        //                   width: 32,
                        //                   margin: '0 0 0 0',
                        //                   id: 'btnLoyaltyCardStampbottomTwitter',
                        //                   //badgeText: "2",
                        //                   html: '<div ><img src="resources/icons/twitter.png" width="22" height="22" alt="Company Name"></div>',
                        //                   ui: 'plain',
                        //                   handler: function () {
                        //                       alert("sdfdsf");

                        //                   }
                        //               },
                        //               {
                        //                   xtype: 'button',
                        //                   height: 32,
                        //                   width: 32,
                        //                   margin: '0 0 0 0',
                        //                   id: 'btnLoyaltyCardStampbottomWeb',
                        //                   //badgeText: "2",
                        //                   html: '<div ><img src="resources/icons/website.png" width="22" height="22" alt="Company Name"></div>',
                        //                   ui: 'plain',
                        //                   handler: function () {
                        //                       alert("sdfdsf");

                        //                   }
                        //               },
                        //                {
                        //                    xtype: 'button',
                        //                    height: 32,
                        //                    width: 32,
                        //                    margin: '0 0 0 0',
                        //                    id: 'btnLoyaltyCardStampbottomCall',
                        //                    //badgeText: "2",
                        //                    html: '<div ><img src="resources/icons/calling.png" width="22" height="22" alt="Company Name"></div>',
                        //                    ui: 'plain',
                        //                    handler: function () {
                        //                        alert("sdfdsf");

                        //                    }
                        //                },

                        //                {
                        //                    xtype: 'button',
                        //                    height: 32,
                        //                    width: 32,
                        //                    margin: '0 0 0 0',
                        //                    id: 'btnLoyaltyCardStampbottomWassap',
                        //                    //badgeText: "2",
                        //                    html: '<div ><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"></div>',
                        //                    ui: 'plain',
                        //                    handler: function () {
                        //                        alert("sdfdsf");

                        //                    }
                        //                },
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



              







    //{
    //    xtype: 'container',
    //    id: 'containerLoyaltyCardStampbottom',
    //    //hidden:true,
    //    style: "background-color: transparent",
    //    //style: "background-color: #F35B57;",
    //    docked: 'bottom',
    //    layout: {
    //        type: 'hbox',
    //        pack: 'center',
    //        align: 'center'

    //    },


    //    items: [

            
    //              {
    //                  xtype: 'button',
    //                  height: 32,
    //                  width: 32,
    //                  margin: '0 0 0 0',
    //                  id: 'btnLoyaltyCardStampbottomFB',
    //                  //badgeText: "2",
    //                  html: '<div ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>',
    //                  ui: 'plain',
    //                  handler: function () {
    //                      alert("sdfdsf");

    //                  }
    //              },
    //               {
    //                   xtype: 'button',
    //                   height: 32,
    //                   width: 32,
    //                   margin: '0 0 0 0',
    //                   id: 'btnLoyaltyCardStampbottomInsta',
    //                   //badgeText: "2",
    //                   html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
    //                   ui: 'plain',
    //                   handler: function () {
    //                       alert("sdfdsf");

    //                   }
    //               },
    //               {
    //                   xtype: 'button',
    //                   height: 32,
    //                   width: 32,
    //                   margin: '0 0 0 0',
    //                   id: 'btnLoyaltyCardStampbottomTwitter',
    //                   //badgeText: "2",
    //                   html: '<div ><img src="resources/icons/twitter.png" width="22" height="22" alt="Company Name"></div>',
    //                   ui: 'plain',
    //                   handler: function () {
    //                       alert("sdfdsf");

    //                   }
    //               },
    //               {
    //                   xtype: 'button',
    //                   height: 32,
    //                   width: 32,
    //                   margin: '0 0 0 0',
    //                   id: 'btnLoyaltyCardStampbottomWeb',
    //                   //badgeText: "2",
    //                   html: '<div ><img src="resources/icons/website.png" width="22" height="22" alt="Company Name"></div>',
    //                   ui: 'plain',
    //                   handler: function () {
    //                       alert("sdfdsf");

    //                   }
    //               },
    //                {
    //                    xtype: 'button',
    //                    height: 32,
    //                    width: 32,
    //                    margin: '0 0 0 0',
    //                    id: 'btnLoyaltyCardStampbottomCall',
    //                    //badgeText: "2",
    //                    html: '<div ><img src="resources/icons/calling.png" width="22" height="22" alt="Company Name"></div>',
    //                    ui: 'plain',
    //                    handler: function () {
    //                        alert("sdfdsf");

    //                    }
    //                },

    //                {
    //                    xtype: 'button',
    //                    height: 32,
    //                    width: 32,
    //                    margin: '0 0 0 0',
    //                    id: 'btnLoyaltyCardStampbottomWassap',
    //                    //badgeText: "2",
    //                    html: '<div ><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"></div>',
    //                    ui: 'plain',
    //                    handler: function () {
    //                        alert("sdfdsf");

    //                    }
    //                },
    //    ]

    //},

















                ]
            },
       

            {
                xtype: 'container',
                id: 'containerLoyaltyCardStampTitleOutter',
                width: '100%',
                height: 95,
                docked:'bottom',
                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                style: "background-color: transparent;",

                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [
                         

                    {
                        xtype: 'container',
                        id: 'containerLoyaltyCardStampTitleInner',
                        width: '100%',
                        height: 35,
                       
                        style: "background-color:transparent;",
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align:'center',
                        },
                        items: [

                           
                              {
                                  margin: '-32 0 0 0',

                                  html: '<font size=2 color=white><b>Contact Us</b></font>',
                              },
                            {
                                xtype: 'container',
                                id: 'containerLoyaltyCardStampbottom',
                                //hidden:true,
                                style: "background-color: transparent",
                                //style: "background-color: #F35B57;",

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
                                              id: 'btnLoyaltyCardStampbottomFB',
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
                                               id: 'btnLoyaltyCardStampbottomInsta',
                                               //badgeText: "2",
                                               html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
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
                                               id: 'btnLoyaltyCardStampbottomTwitter',
                                               //badgeText: "2",
                                               html: '<div ><img src="resources/icons/twitter.png" width="22" height="22" alt="Company Name"></div>',
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
                                               id: 'btnLoyaltyCardStampbottomWeb',
                                               //badgeText: "2",
                                               html: '<div ><img src="resources/icons/website.png" width="22" height="22" alt="Company Name"></div>',
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
                                                id: 'btnLoyaltyCardStampbottomCall',
                                                //badgeText: "2",
                                                html: '<div ><img src="resources/icons/calling.png" width="22" height="22" alt="Company Name"></div>',
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
                                                id: 'btnLoyaltyCardStampbottomWassap',
                                                //badgeText: "2",
                                                html: '<div ><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    alert("sdfdsf");

                                                }
                                            },
                                ]

                            },
                        ]
                    },


                    {


                        xtype: 'container',
                        id: 'containerLoyaltyCardStampButtons',
                        width: '86%',
                        height: 60,
                        //docked: 'bottom',
                        // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                        // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;border-radius:20px 20px 0px 0px;',
                       // style: "background-color: transparent",

                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [

                            {
                                xtype: 'container',
                                id: 'containerLoyaltyCardStampTitlePointHistory',
                                width: '38%',
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
                                         id: 'btnPointHistory_LoyaltyCardStamp',
                                         //  badgeText: '1',
                                         margin: '-5 0 0 0',
                                         height: 45,
                                         width: 45,
                                         html: '<img src="resources/icons/StampTwo.png" width="35" height="35" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                             Ext.getCmp('htmlMyLoyaltyCardStamp').setHtml('<font size=2 color=white><b>My Loyalty Card</b></font>')
                                             Ext.getCmp('containerLoyaltyCardStampMaster').setHidden(false);
                                             Ext.getCmp('containerLoyaltyCardStampQrCode').setHidden(true);

                                         }
                                     },
                                      {
                                          margin: '-7 0 0 0',
                                          html: '<font size=2 color=grey><b>Stamp Card</b></font>'
                                      },

                                ]
                            },

                        {
                            xtype: 'container',
                            id: 'containerLoyaltyCardStampTitleQrCode',
                            width: '38%',
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
                                     id: 'btnQrCode_LoyaltyCardStamp',
                                     //  badgeText: '1',
                                     margin: '-5 0 0 0',
                                     height: 45,
                                     width: 45,
                                     html: '<img src="resources/icons/qrcodetwo.png" width="35" height="35" alt="Company Name">',
                                     ui: 'plain',
                                     handler: function () {
                                         // NotificationsPanelShow();
                                      

                                        // Ext.getCmp('btnPointLoyaltyCard').setHtml('<img src="resources/icons/qrcodetwo.png" width="20" height="20" alt="Company Name">');


                                         CreateQRCodeForLoyaltyCardStamp();



                                         //  LoyaltyCardRedeemListShow();
                                     }
                                 },
                                  {
                                      margin: '-7 0 0 0',
                                      html: '<font size=2 color=grey><b>Stamp QR Code</b></font>'
                                  },

                            ]
                        },



                        ]



                    },










                    

                        //{
                        //    xtype: 'container',
                        //    hidden:true,
                        //    id: 'containerLoyaltyCardStampTitleRedeem',
                        //    width: '33.3%',
                        //    height: 50,
                        //    style: "background-color: transparent",
                        //    //style: "background-color: #F35B57;",

                        //    layout: {
                        //        type: 'vbox',
                        //        pack: 'center',
                        //        align: 'center'

                        //    },
                        //    items: [

                        //         {
                        //             xtype: 'button',
                        //             id: 'btnRedeem_LoyaltyCardStampBottom',
                        //             //  badgeText: '1',
                        //             margin: '-5 0 0 0',
                        //             height: 45,
                        //             width: 45,
                        //             html: '<img src="resources/icons/redeemHistory.png" width="35" height="35" alt="Company Name">',
                        //             ui: 'plain',
                        //             handler: function () {
                        //                 // NotificationsPanelShow();

                        //                 LoyaltyCardRedeemListShow();


                        //                 //  LoyaltyCardRedeemListShow();
                        //             }
                        //         },
                        //          {
                        //              margin: '-7 0 0 0',
                        //              html: '<font size=2 color=grey><b>Redeem</b></font>'
                        //          },

                        //    ]
                        //},

                ]

            },









                



        ]
    },
    initialize: function () {

    }
});






function CreateQRCodeForLoyaltyCardStamp() {
    //var billIDs = (getUrlParameter('BillID')); // "1234"
    //var templatecodes = (getUrlParameter('TemplateCode')); // "edit"
    //   var srcUrl = 'https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';


    Ext.getCmp('htmlMyLoyaltyCardStamp').setHtml('<font size=2 color=white><b>Stamp QR Code</b></font>')
    Ext.getCmp('containerLoyaltyCardStampMaster').setHidden(true);
    Ext.getCmp('containerLoyaltyCardStampQrCode').setHidden(false);
    
  




    jQuery('#qrcodeCanvas').qrcode({
        //text: "http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
        //text: 'http://42.1.63.57/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
        text: GetCurrentAccountNo()
    });

    var can = document.getElementsByTagName("canvas");
    var src = can[0].toDataURL("image/png");
    Ext.getCmp('htmlLoyaltyCardStampQRCode').setHtml('<img src="' + src + '" style="width: 90%; height: 90%; border:1px solid white;" />');
    src = "";
    // Ext.getCmp('htmlLoyaltyCardClientID').setHtml('<font size=2 color=black>ID:' + GetCurrentAccountNo() + '</font>');
   // Ext.getCmp('htmlPointLoyaltyCardLbl').setHtml('<font size=2 color=black>QR Code Point (' + GetCurrentAccountNo() + ')</font>');
    //console.log("QRCodeImg" + src);
    //localStorage.setItem('QRCodeImg', src);
}