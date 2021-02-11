
//Ext.define('ianMizi.view.MyAccount.Dashboard', {
//    extend: 'Ext.tab.Panel',
//    xtype: 'UserAccount',
var detectIndex = [];
Ext.define('ianMizi.view.MyAccount.Dashboard', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'Dashboard',
    id: 'DashboardID',
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
        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //style: 'background-image: url("resources/icons/kedaikopibg.jpg"); background-size: 100% 100%;border-bottom:1px none;',

        // style: "background-color: #f5f5f5;",
        items: [







            {
                xtype: 'container',
                style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
              //  style: "background-color: transparent;",
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

                        id: 'containerMyAccount_DashboardHeader',
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
                                                 id: 'btnMyAccount_DashboardBack',
                                                 height: 35,
                                                 width: 35,
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                                     //    type: 'slideOut',
                                                     //    direction: 'left',
                                                     //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                     //    duration: 250

                                                     //}));
                                                     //isLoyaltyCardRedeemListOpen = 'N';
                                                 }
                                             },
                                             {
                                                 margin: '0 0 0 0',
                                                 id: 'htmlMyAccount_Dashboard_TitleHeaderTxt',
                                                 html: '<font size=2 color=white><b>Ayoha-Reward Pro v 1.0</b></font>'
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
                                                        margin: '5 0 0 0',
                                                          // hidden: true,
                                                          //style: 'background-color: white;',
                                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                          style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                          height: 25,
                                                          width: 75,
                                                          // margin: '70 0 0 0',
                                                          id: 'containerMyAccount_DashboardHaiUser',
                                                          layout: {

                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center'
                                                          },
                                                          items: [


                                                              {
                                                                  margin: '2 0 0 0',
                                                                  id: 'htmlMyAccount_DashboardHaiUser',
                                                                  html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  // hidden: true,
                                                                  style: 'background-color: transparent;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerMyAccount_DashboardeWallet',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'left',
                                                                      align: 'left'
                                                                  },
                                                                  items: [
                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnMyAccount_DashboardeWallet',
                                                                           margin: '4 0 0 8',
                                                                           height: 30,
                                                                           width: 35,
                                                                           // iconCls: 'list',
                                                                           html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               Ayoha_eWallet();

                                                                           }
                                                                       },
                                                                       //{
                                                                       //    height: 30,
                                                                       //    margin: '10 0 0 0',
                                                                       //    width: 65,
                                                                          
                                                                       //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                                       //},
                                                                       {
                                                                           xtype: 'button',
                                                                           id: 'btnMyAccount_DashboardeWalletValue',
                                                                           margin: '7 0 0 2',
                                                                           height: 30,
                                                                           width: 65,
                                                                        
                                                                           // iconCls: 'list',
                                                                           html: '<div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM00.00</div>',
                                                                           ui: 'plain',
                                                                           handler: function () {
                                                                               Ayoha_eWallet();

                                                                           }
                                                                       },
                                                                       //{
                                                                       //    margin: '7 0 0 2',
                                                                         
                                                                       //}
                                                                  ]
                                                              },

                                                          ]
                                                      },
                                                   {
                                                       xtype: 'container',
                                                       margin: '5 0 0 -5',
                                                      // hidden: true,
                                                       //style: 'background-color: white;',
                                                       style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                       height: 35,
                                                       width: 35,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerMyAccount_DashboardPictureUser',
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
                                                               margin: '0 0 0 -8',
                                                               id: 'btnMyAccount_DashboardPicProfile',
                                                               //badgeText: "2",
                                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
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



                                                   {
                                                       xtype: 'panel',
                                                       width:5
                                                   }






                               ]

                    },

                      //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                      {
                          xtype: 'tabpanel',
                          style: "background-color: transparent;",
                          // hidden: true,
                          //  hidden:true,
                          id: 'tabpanelMyAccount_Dashboard',
                          // style: 'border-top:2px solid #ECF0F1;background: white;',
                          // style: 'background-color: black;',
                          // margin: '-20 0 0 -26',
                          // margin: '25 0 0 0',

                          //width: 200,
                          width: '100%',
                          height: '100%',
                          //height: 120,
                          //height: 50,
                          //  zIndex: 200,
                          //  docked: 'bottom',
                          tabBarPosition: 'top',
                          ui: 'plain',
                          // docked: 'bottom',

                          initialize: function (c) {
                              this.getTabBar().hide();
                          },

                          //scrollable: {
                          //    direction: 'vertical',
                          //    directionLock: true
                          //},


                          items: [



      {
          xtype: 'container',
          id: 'containerMyAccount_DashboardMaster',
          width: '100%',
          height: '100%',
          //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
          style: "background-color: transparent;",
          //style: "background-color: #F35B57;",
          title: 'DashboardNewMaster',
          layout: {
              type: 'vbox',
              //pack: 'center',
              //align: 'center'

          },
          scrollable: {
              direction: 'vertical',
              directionLock: true
          },
          listeners: {
              initialize: function (c) {

                  this.element.on({
                      swipe: function (e, node, options) {
                          if (e.direction == "left") {
                              //  alert("Hey! I swipe left");
                            //  Ext.getCmp('tabpanelDashboard').setActiveItem(1);
                          } else {
                              //  alert("Hey! I swipe right");

                          }
                      }
                  });
              }
          },


          items: [


              {
                  xtype: 'container',
                  style: "background-color: transparent;",
                  width: '100%',
                
                  //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                  layout: {
                      type: 'vbox',
                      pack: 'center',
                      align: 'center'

                  },
                  items: [
                            {
                                //width: 220,
                                //// hidden:true,
                                ////  id: 'Pictureprofile',
                                //// margin: '10 0 5 -20',
                                ////left:-2,
                                //height: 150,
                                //  html: '<img src="resources/icons/founder.jpg" width="220" height="150" border:2px solid red; border-radius: 50%; max-width:300px; alt="Company Name">',
                                id: 'htmlDashboard_EnterpriseLogo',
                                html: '<img src="resources/icons/ccrlogo.png" style="width: 160px; height: 160px; border:2px solid grey; border-radius: 50%; max-width:250px; " />',
                            },


                        {
                            margin: '0 0 0 0',
                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                            id:'htmlDashboard_EnterpriseName',
                            html: '<div style="color:white;text-align: center;font-size:14px;width:100%;"><b>The Community Coffea Sdn Bhd</b></div>'
                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                        },

                          {
                              margin: '0 0 0 0',
                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                              id: 'htmlDashboard_EnterpriseAddress',
                              html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Petronas Wangsa Maju Sekysen 3,Jalan Genting Kelang,5215461 Ampang. Selangor Darul Ehsan</div>'
                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                          },


                  ]

              },


                {
                    xtype: 'container',
                    width: '100%',
                    /// hidden:true,
                    margin: '10 0 0 0',
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
                             margin: '0 0 0 14',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             html: '<div style="color:white;text-align: center;font-size:14px;width:100%;"><b>Enterprise Rewards</b></div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },
                    ]
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height: 100,
                    margin: '0 0 0 0',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    style: 'background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                        {
                            xtype:'spacer'
                        },
                        {
                            xtype: 'container',
                            width: '92%',
                            height: 100,
                            margin: '0 0 0 0',
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
                                               margin: '0 0 0 0',
                                               html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Cloud-Rewards Stamps</div>',
                                           },
                                            {
                                                margin: '0 0 0 0',
                                                html: '<div style="color:white;text-align: center;font-size:38px;width:100%;font-weight:bold">8025</div>',
                                            },
                                             {
                                                 margin: '-5 0 0 0',
                                                 html: '<div style="color:white;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Stamp 9685.</div>',
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
                                                height: 80,
                                                width: 80,

                                                margin: '2 0 0 0',
                                                id: 'btnMyAccount_DashboardStamp',
                                                //badgeText: "2",
                                                html: '<img src="resources/icons/crStampPurpleDashboard.png" width="70" height="70" alt="Company Name">',
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
                            xtype: 'spacer'
                        },
                    ]

                },

                {
                    xtype: 'container',
                    width: '100%',
                    height: 100,
                    margin: '10 0 0 0',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    style: 'background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'container',
                            width: '92%',
                            height: 100,
                            margin: '0 0 0 0',
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
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                           {
                                               margin: '0 0 0 0',
                                               html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Cloud-Rewards Points</div>',
                                           },
                                            {
                                                margin: '0 0 0 0',
                                                html: '<div style="color:white;text-align: center;font-size:38px;width:100%;font-weight:bold">5621</div>',
                                            },
                                             {
                                                 margin: '-5 0 0 0',
                                                 html: '<div style="color:white;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Point 154682.</div>',
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
                                                height: 80,
                                                width: 80,

                                                margin: '2 0 0 0',
                                                id: 'btnMyAccount_DashboardPoint',
                                                //badgeText: "2",
                                                html: '<img src="resources/icons/crPointPurpleDashboard.png" width="70" height="70" alt="Company Name">',
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
                            xtype: 'spacer'
                        },
                    ]

                },
              
                 {
                     xtype: 'container',
                     width: '100%',
                     /// hidden:true,
                     margin: '10 0 0 0',
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
                              margin: '0 0 0 14',
                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;"><b>Enterprise Activity</b></div>'
                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                          },
                     ]
                 },




                 {

                     xtype: 'container',
                     style: "background-color: transparent;",
                     width: '100%',
                     //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                     layout: {
                         type: 'hbox',
                         pack: 'center',
                         align: 'center'

                     },
                     items: [
                          {
                              xtype: 'spacer'
                          },
                         {
                             xtype: 'container',
                             width: '45%',
                             height: 100,
                             margin: '0 0 0 0',
                             style: 'background-color:white;border-radius: 10px 10px 10px 10px;',
                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                             layout: {
                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center',
                             },
                             items: [
                                   {
                                       xtype: 'container',
                                       width: '100%',

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
                                         
                                       },
                                       items: [
                                            {
                                                margin: '0 0 0 0',
                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                                            },
                                            
                                       ]
                                   },
                                      {
                                          xtype: 'container',
                                          width: '100%',

                                          margin: '-5 0 0 0',
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [
                                               {
                                                 
                                                       xtype: 'button',
                                                       height: 60,
                                                       width: 60,
                                                  
                                                       margin: '0 0 0 0',
                                                       id: 'btnMyAccount_Dashboard_Enterprise_Activity_Stamp',
                                                       //badgeText: "2",
                                                       html: '<img src="resources/icons/latestStampcardPurple.png" width="50" height="50" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                           //  setupMovementMap(2);





                                                           //Ext.getCmp('mainView').setActiveItem(16);
                                                           //loadNotificationSummary();
                                                       }
                                                   },
                                                   {
                                                       margin: '0 0 0 0',
                                                       html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">100</div>',
                                                   },
                                                   //margin: '10 0 0 0',
                                                   //html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                                              
                                          ]
                                      },
                                   {
                                       margin: '-5 0 0 0',
                                       html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Stamps</div>',
                                   },
                             ]
                         },

                         {
                             xtype:'spacer'
                         },



                           {
                               xtype: 'container',
                               width: '45%',
                               height: 100,
                               margin: '0 0 0 0',
                               style: 'background-color:white;border-radius: 10px 10px 10px 10px;',
                              // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                     {
                                         xtype: 'container',
                                         width: '100%',

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

                                         },
                                         items: [
                                              {
                                                  margin: '0 0 0 0',
                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Loyal Customers</div>',
                                              },

                                         ]
                                     },
                                        {
                                            xtype: 'container',
                                            width: '100%',

                                            margin: '-5 0 0 0',
                                            //style: {
                                            //    // background: '#D25959',
                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                            //    // border: '2px'
                                            //},
                                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                            style: 'background-color:transparent',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                 {

                                                     xtype: 'button',
                                                     height: 60,
                                                     width: 60,

                                                     margin: '0 0 0 0',
                                                     id: 'btnMyAccount_Dashboard_Enterprise_Activity_LoyalCustomer',
                                                     //badgeText: "2",
                                                     html: '<img src="resources/icons/userlistPurple.png" width="50" height="50" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {

                                                         //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                         //  setupMovementMap(2);





                                                         //Ext.getCmp('mainView').setActiveItem(16);
                                                         //loadNotificationSummary();
                                                     }
                                                 },
                                                     {
                                                         margin: '0 0 0 0',
                                                         html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">357</div>',
                                                     },
                                                     //margin: '10 0 0 0',
                                                     //html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                                            ]
                                        },
                                         {
                                             margin: '-5 0 0 0',
                                             html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Total Loyal Customers</div>',
                                         },

                               ]
                           },
                            {
                                xtype: 'spacer'
                            },
                     ]


                 },










                 //////////
                 {

                     xtype: 'container',
                     style: "background-color: transparent;",
                     width: '100%',
                     margin: '10 0 0 0',
                     //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                     layout: {
                         type: 'hbox',
                         pack: 'center',
                         align: 'center'

                     },
                     items: [
                          {
                              xtype: 'spacer'
                          },
                         {
                             xtype: 'container',
                             width: '45%',
                             height: 100,
                             margin: '0 0 0 0',
                             style: 'background-color:white;border-radius: 10px 10px 10px 10px;',
                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                             layout: {
                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center',
                             },
                             items: [
                                   {
                                       xtype: 'container',
                                       width: '100%',

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

                                       },
                                       items: [
                                            {
                                                margin: '0 0 0 0',
                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Points</div>',
                                            },

                                       ]
                                   },
                                      {
                                          xtype: 'container',
                                          width: '100%',

                                          margin: '-5 0 0 0',
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [
                                               {

                                                   xtype: 'button',
                                                   height: 60,
                                                   width: 60,

                                                   margin: '0 0 0 0',
                                                   id: 'btnMyAccount_Dashboard_Enterprise_Activity_Point',
                                                   //badgeText: "2",
                                                   html: '<img src="resources/icons/pointPurpleOne.png" width="50" height="50" alt="Company Name">',
                                                   ui: 'plain',
                                                   handler: function () {

                                                       //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                       //  setupMovementMap(2);





                                                       //Ext.getCmp('mainView').setActiveItem(16);
                                                       //loadNotificationSummary();
                                                   }
                                               },
                                                   {
                                                       margin: '0 0 0 0',
                                                       html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">568</div>',
                                                   },
                                                   //margin: '10 0 0 0',
                                                   //html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                                          ]
                                      },
                                   {
                                       margin: '-5 0 0 0',
                                       html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Points</div>',
                                   },
                             ]
                         },

                         {
                             xtype: 'spacer'
                         },



                           {
                               xtype: 'container',
                               width: '45%',
                               height: 100,
                               margin: '0 0 0 0',
                               style: 'background-color:white;border-radius: 10px 10px 10px 10px;',
                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                     {
                                         xtype: 'container',
                                         width: '100%',

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

                                         },
                                         items: [
                                              {
                                                  margin: '0 0 0 0',
                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Memberships</div>',
                                              },

                                         ]
                                     },
                                        {
                                            xtype: 'container',
                                            width: '100%',

                                            margin: '-5 0 0 0',
                                            //style: {
                                            //    // background: '#D25959',
                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                            //    // border: '2px'
                                            //},
                                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                            style: 'background-color:transparent',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                 {

                                                     xtype: 'button',
                                                     height: 60,
                                                     width: 60,

                                                     margin: '0 0 0 0',
                                                     id: 'btnMyAccount_Dashboard_Enterprise_Activity_Memberships',
                                                     //badgeText: "2",
                                                     html: '<img src="resources/icons/membershipPurpleThree.png" width="50" height="50" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {

                                                         //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                         //  setupMovementMap(2);



                                                         setDashBoardPushNotificationsQuota();
                                                         setDashBoardSMSQuota();
                                                         setDashBoardWhatAppQuota()

                                                         //Ext.getCmp('mainView').setActiveItem(16);
                                                         //loadNotificationSummary();
                                                     }
                                                 },
                                                     {
                                                         margin: '0 0 0 0',
                                                         html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                     },
                                                     //margin: '10 0 0 0',
                                                     //html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                                            ]
                                        },
                                         {
                                             margin: '-5 0 0 0',
                                             html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Total Memberships</div>',
                                         },

                               ]
                           },
                            {
                                xtype: 'spacer'
                            },
                     ]


                 },



                 ///////////////////////////////////////////////////////////////////////////////




                 {
                     xtype: 'container',
                     margin: '10 0 0 0',
                     id: 'ContainerHeaderDashboardBlastingQuotaRemainingID',
                     style: "background-color:transparent",
                     layout: {
                         type: 'vbox',
                         pack: 'center',
                         // pack: 'left'
                     },
                     width: '100%',
                     //height:270,
                     height: 260,
                     items: [
                        





                           {
                               margin: '0 0 0 20',
                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                               html: '<div style="color:white;text-align: left;font-size:14px;width:100%;"><b>Blasting Message Quota</b></div>'
                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                           },




                           {
                               xtype: 'container',
                               margin: '0 0 0 0',
                               id: 'ContainerMyAccount_Dashboard_BlastingMessageQuota_Inner',
                               style: "background-color:transparent",
                               scrollable: {
                                   direction: 'horizontal',
                                   directionLock: true
                               },
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                                   // pack: 'left'
                               },
                               width: '100%',
                               //height:270,
                               height: 200,
                               items: [
                                   //ori
                                   //{
                                   //    xtype: 'container',
                                   //    width: 163,
                                   //    //  height:'100%',
                                   //    style: "border:3px none #EAEDED",
                                   //    layout: {
                                          
                                   //        type: 'vbox',
                                   //        align: 'center',
                                   //        pack: 'start'
                                          
                                   //    },
                                   //    items: [
                                          

                                   //          {
                                                 
                                   //              html: '<div id="chartPushNotificationsDashboard"></div>',
                                   //            //  margin: '-35 0 0 0',
                                   //          },


                                   //          {
                                   //              xtype: 'container',
                                   //              width: '100%',
                                   //              //  height:'100%',
                                   //              margin: '-31 0 0 -25',
                                   //              style: "border:3px none #EAEDED",
                                   //              layout: {

                                   //                  type: 'vbox',
                                   //                  align: 'center',
                                   //                  pack: 'start'

                                   //              },
                                   //              items: [
                                   //                   {
                                   //                       xtype: 'button',
                                   //                       height: 27,
                                   //                       width: 30,
                                   //                     //  margin: '-33 0 0 0',
                                   //                       id: 'btnDashboard_PushNotification',
                                   //                       //badgeText: "2",
                                   //                       html: '<img src="resources/icons/Notification1.png" width="20" height="20" alt="Company Name">',
                                   //                       ui: 'plain',
                                   //                       handler: function () {


                                   //                       }
                                   //                   },
                                   //            {
                                   //               margin: '-5 0 0 0',
                                   //                width: '100%',
                                   //                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                   //                html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Push Notification</div><br><div style="color:white;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>30/1000</b></div><br><div style="color:white;text-align: center;font-size:25px;width:100%;margin:-165px 0px 0px 5px;"><b>55%</b></div>',
                                   //                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                   //            },

                                   //              ]
                                   //          },
                                                

                                   //    ]

                                   //},
                                   //{
                                   //    xtype: 'container',
                                   //    width: 170,
                                   //    //  height:'100%',
                                   //    style: "border:3px none #EAEDED",
                                   //    layout: {

                                   //        type: 'vbox',
                                   //        align: 'center',
                                   //        pack: 'start'

                                   //    },
                                   //    items: [
                                          

                                   //          {

                                   //              html: '<div id="chartSMSDashboard"></div>',
                                   //              //  margin: '-35 0 0 0',
                                   //          },

                                   //          {
                                   //              xtype: 'container',
                                   //              width: '100%',
                                   //              //  height:'100%',
                                   //              margin: '-31 0 0 -60',
                                   //              style: "border:3px none #EAEDED",
                                   //              layout: {

                                   //                  type: 'vbox',
                                   //                  align: 'center',
                                   //                  pack: 'start'

                                   //              },
                                   //              items: [
                                   //                   {
                                   //                       xtype: 'button',
                                   //                       height: 27,
                                   //                       width: 30,
                                   //                       //  margin: '-33 0 0 0',
                                   //                       id: 'btnDashboard_SMS',
                                   //                       //badgeText: "2",
                                   //                       html: '<img src="resources/icons/Sms-icon.png" width="20" height="20" alt="Company Name">',
                                   //                       ui: 'plain',
                                   //                       handler: function () {


                                   //                       }
                                   //                   },
                                   //            {
                                   //                margin: '-5 0 0 0',
                                   //                width: '100%',
                                   //                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                   //                html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">SMS</div><br><div style="color:white;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>10/1000</b></div><br><div style="color:white;text-align: center;font-size:25px;width:100%;margin:-165px 0px 0px 5px;"><b>10%</b></div>',
                                   //                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                   //            },
                                   //              ]
                                   //          },
                                           

                                   //    ]
                                   //},
                                   //{
                                   //    xtype: 'container',
                                   //    width: 170,
                                   //    //  height:'100%',
                                   //    style: "border:3px none #EAEDED",
                                   //    layout: {

                                   //        type: 'vbox',
                                   //        align: 'center',
                                   //        pack: 'start'

                                   //    },
                                   //    items: [
                                          
                                   //          {

                                   //              html: '<div id="chartWhatAppDashboard"></div>',
                                   //              //  margin: '-35 0 0 0',
                                   //          },
                                   //            {
                                   //                xtype: 'container',
                                   //                width: '100%',
                                   //                //  height:'100%',
                                   //                margin: '-31 0 0 -117',
                                   //                style: "border:3px none #EAEDED",
                                   //                layout: {

                                   //                    type: 'vbox',
                                   //                    align: 'center',
                                   //                    pack: 'start'

                                   //                },
                                   //                items: [
                                   //                     {
                                   //                         xtype: 'button',
                                   //                         height: 27,
                                   //                         width: 30,
                                   //                         //  margin: '-33 0 0 0',
                                   //                         id: 'btnDashboard_WhatApp',
                                   //                         //badgeText: "2",
                                   //                         html: '<img src="resources/icons/wassap.png" width="20" height="20" alt="Company Name">',
                                   //                         ui: 'plain',
                                   //                         handler: function () {


                                   //                         }
                                   //                     },
                                   //              {
                                   //                  margin: '-5 0 0 0',
                                   //                  width: '100%',
                                   //                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                   //                  html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Whats App</div><br><div style="color:white;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>80/1000</b></div><br><div style="color:white;text-align: center;font-size:25px;width:100%;margin:-165px 0px 0px 5px;"><b>3%</b></div>',
                                   //                  // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                   //              },




                                   //                ]
                                   //            },
                                             

                                   //    ]



                                   //},






                                   {
                                       xtype:'panel',
                                       width:15
                                   },




                                      {
                                          xtype: 'container',
                                          width: 210,
                                          //  height:'100%',
                                          style: "border:3px none #EAEDED",
                                          layout: {

                                              type: 'vbox',
                                              align: 'center',
                                              pack: 'start'

                                          },
                                          items: [


                                                {

                                                    html: '<div id="chartPushNotificationsDashboard"></div>',
                                                    //  margin: '-35 0 0 0',
                                                },


                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    //  height:'100%',
                                                    margin: '-31 0 0 -25',
                                                    style: "border:3px none #EAEDED",
                                                    layout: {

                                                        type: 'vbox',
                                                        align: 'center',
                                                        pack: 'start'

                                                    },
                                                    items: [
                                                         {
                                                             xtype: 'button',
                                                             height: 27,
                                                             width: 30,
                                                             //  margin: '-33 0 0 0',
                                                             id: 'btnMyAccount_Dashboard_BlastingMessageQuota_PushNotification',
                                                             //badgeText: "2",
                                                             html: '<img src="resources/icons/Notification1.png" width="20" height="20" alt="Company Name">',
                                                             ui: 'plain',
                                                             handler: function () {


                                                             }
                                                         },
                                                  {
                                                      margin: '-5 0 0 0',
                                                      width: '100%',
                                                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Push Notification</div><br><div style="color:white;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>30/1000</b></div><br><div style="color:white;text-align: center;font-size:25px;width:100%;margin:-165px 0px 0px 5px;"><b>55%</b></div>',
                                                      // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                  },

                                                    ]
                                                },


                                          ]

                                      },
                                   {
                                       xtype: 'container',
                                       width: 160,
                                       //  height:'100%',
                                       style: "border:3px none #EAEDED",
                                       layout: {

                                           type: 'vbox',
                                           align: 'center',
                                           pack: 'start'

                                       },
                                       items: [


                                             {

                                                 html: '<div id="chartSMSDashboard"></div>',
                                                 //  margin: '-35 0 0 0',
                                             },

                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 //  height:'100%',
                                                 margin: '-31 0 0 -60',
                                                 style: "border:3px none #EAEDED",
                                                 layout: {

                                                     type: 'vbox',
                                                     align: 'center',
                                                     pack: 'start'

                                                 },
                                                 items: [
                                                      {
                                                          xtype: 'button',
                                                          height: 27,
                                                          width: 30,
                                                          //  margin: '-33 0 0 0',
                                                          id: 'btnMyAccount_Dashboard_BlastingMessageQuota_SMS',
                                                          //badgeText: "2",
                                                          html: '<img src="resources/icons/Sms-icon.png" width="20" height="20" alt="Company Name">',
                                                          ui: 'plain',
                                                          handler: function () {


                                                          }
                                                      },
                                               {
                                                   margin: '-5 0 0 0',
                                                   width: '100%',
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">SMS</div><br><div style="color:white;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>10/1000</b></div><br><div style="color:white;text-align: center;font-size:25px;width:100%;margin:-165px 0px 0px 5px;"><b>10%</b></div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },
                                                 ]
                                             },


                                       ]
                                   },



                               ]

                           },


                         

                         //////////////

                         {
                             xtype: 'container',
                             margin: '0 0 0 0',
                             id: 'ContainerMyAccount_Dashboard_BlastingMessageQuota_InnerExt',
                             style: "background-color:transparent",
                           
                             layout: {
                                 type: 'hbox',
                                 pack: 'center',
                                 // pack: 'left'
                             },
                             width: '100%',
                             //height:270,
                             height: 200,
                             items: [

                                   {
                                       xtype: 'panel',
                                       width: 15
                                   },
                                 {
                                     xtype: 'container',
                                     width: 210,
                                     //  height:'100%',
                                     style: "border:3px none #EAEDED",
                                     layout: {

                                         type: 'vbox',
                                         align: 'center',
                                         pack: 'start'

                                     },
                                     items: [

                                           {

                                               html: '<div id="chartWhatAppDashboard"></div>',
                                               //  margin: '-35 0 0 0',
                                           },
                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 //  height:'100%',
                                                 margin: '-31 0 0 -117',
                                                 style: "border:3px none #EAEDED",
                                                 layout: {

                                                     type: 'vbox',
                                                     align: 'center',
                                                     pack: 'start'

                                                 },
                                                 items: [
                                                      {
                                                          xtype: 'button',
                                                          height: 27,
                                                          width: 30,
                                                          //  margin: '-33 0 0 0',
                                                          id: 'btnMyAccount_Dashboard_BlastingMessageQuota_WhatApp',
                                                          //badgeText: "2",
                                                          html: '<img src="resources/icons/wassap.png" width="20" height="20" alt="Company Name">',
                                                          ui: 'plain',
                                                          handler: function () {


                                                          }
                                                      },
                                               {
                                                   margin: '-5 0 0 0',
                                                   width: '100%',
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   html: '<div style="color:white;text-align: center;font-size:12px;width:100%;">Whats App</div><br><div style="color:white;text-align: center;font-size:14px;width:100%;margin:-25px 0px 0px 0px"><b>80/1000</b></div><br><div style="color:white;text-align: center;font-size:25px;width:100%;margin:-165px 0px 0px 5px;"><b>3%</b></div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },




                                                 ]
                                             },













                                     ]






                                 },



                                 {
                                     xtype: 'container',
                                     width: 60,
                                     //  height:'100%',
                                     style: "border:3px none #EAEDED",
                                     layout: {

                                         type: 'vbox',
                                         align: 'center',
                                         pack: 'start'

                                     },
                                     items: [


                                         

                                           


                                     ]
                                 },
                             ]
                         },

                         
                         




                         


                         




                     ]
                 },





{
    xtype: 'panel',
    height:150
},


/////////

{
    xtype: 'container',
    width: '100%',
    /// hidden:true,
    margin: '10 0 0 0',
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
             margin: '0 0 0 14',
             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
             html: '<div style="color:white;text-align: center;font-size:14px;width:100%;"><b>VIA Advertisement</b></div>'
             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
         },
    ]
},
                {
                    xtype: 'container',
                    width: '100%',
                    height: 250,
                    margin: '0 0 0 0',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    style: 'background-color:transparent',

                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'container',
                            width: '95%',
                            height: 330,
                            margin: '0 0 0 0',
                            //style: {
                            //    // background: '#D25959',
                            //    background: 'rgba(76, 175, 80, 0.3);',
                            //    // border: '2px'
                            //},
                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                            style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 0px 0px;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            //scrollable: {
                            //    direction: 'horizontal',
                            //    directionLock: true
                            //},
                            items: [

{
    xtype: 'container',

    // hidden: true,
    style: 'background-color: transparent;',
    //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

    height: 0,
    width: '100%',
    // margin: '70 0 0 0',
    id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia',
    layout: {

        type: 'vbox',
        pack: 'start',
        align: 'left'
    },
    items: [
        {
            xtype: 'container',
            margin: '2 0 0 0',
            // hidden: true,
            style: 'background-color: transparent;',
            //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
            // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

            height: 3,
            width: '100%',
            // margin: '70 0 0 0',
            id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia_TimingBar',
            layout: {

                type: 'hbox',
                pack: 'center',
                align: 'center'
            },
            items: [
                {
                    xtype: 'spacer'
                },
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing0',
    margin: '0 0 0 0',
    flex: 1,
    // hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    html: '<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">',

    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing1',
    margin: '0 0 0 0',
    flex: 1,
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    hidden: true,
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing2',
    margin: '0 0 0 0',
    flex: 1,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    hidden: true,
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing3',
    margin: '0 0 0 0',
    flex: 1,
    hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing4',
    margin: '0 0 0 0',
    flex: 1,
    hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing5',
    margin: '0 0 0 0',
    flex: 1,
    hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing6',
    margin: '0 0 0 0',
    flex: 1,
    hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing7',
    margin: '0 0 0 0',
    flex: 1,
    hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing8',
    margin: '0 0 0 0',
    flex: 1,
    hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Timing9',
    margin: '0 0 0 0',
    flex: 1,
    hidden: true,
    // iconCls: 'list',
    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
    // html: '<div style="color:white;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {


    }
},
{
    xtype: 'spacer'
}, {
    xtype: 'button',
    id: 'btnDashboard_PreviewAdvertisement_Start',
   hidden: true,
    margin: '7 10 0 0',
    height: 25,
    width: 25,
    html: '<img src="resources/icons/playPurpleOne.png" style="width: 15px; height: 15px;">',
    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
    ui: 'plain',
    handler: function () {
        VIAAdvertismentAutoSlide();
        Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(true);
        Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(false);

    }
},
     {
         xtype: 'button',       
         id: 'btnDashboard_PreviewAdvertisement_Stop',
         margin: '7 10 0 0',
         height: 25,
         width: 25,
         html: '<img src="resources/icons/stopPurple.png" style="width: 15px; height: 15px;">',
         // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
         ui: 'plain',
         handler: function () {

             clearInterval(VIAAdvertismentAutoSlideTimer);
             Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(false);
             Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(true);

         }
     },
            ]
        },

        {
            xtype: 'container',
            //   margin: '0 0 0 5',
            // hidden: true,
            style: 'background-color: transparent;',
            //  style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
            //height: 25,
            //width: 70,
            margin: '25 15 0 0',
            id: 'containerDashboard_PreviewAdvertisementHeaderOutter',
            layout: {

                type: 'hbox',
                pack: 'start',
                align: 'center'
            },
            items: [


              {
                  xtype: 'button',
                  id: 'btnDashboard_PreviewAdvertisement_PicProfile',
                  margin: '0 0 0 10',
                  height: 60,
                  width: 60,
                  // iconCls: 'list',
                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                  html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {


                  }
              },
              {
                  xtype: 'button',
                  id: 'btnDashboard_PreviewAdvertisement_UserNameProfile',
                  margin: '0 0 0 0',
                  height: 60,
                  width: 250,
                  // iconCls: 'list',
                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                  html: '<div style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold">Unjun Restaurant Sdn Bhd</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',

                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {


                  }
              },
            {
                xtype:'spacer'
            },
              
             
              
            ]
        },

    ]
},



                                {
                                    xtype: 'carousel',                                    
                                    id: 'Dashboard_PreviewAdvertisement_Carousel',
                                    width: '96%',
                                    height: '100%',
                                    
                                    //delay :2000,
                                 //  carouselSlideDelay: 1000,
                                   // autoSlide: true,
                                    indicator: false,
                                
                                   
                                    initialize: function (c) {
                                        this.element.on({
                                            tap: function (e, node, options) {
                                                FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
                                            }
                                        });
                                    },
                                   
                                  
                                    listeners:
                             {

                                 activeitemchange: function (container, newCard, oldCard, index) {

                                     //console.log("newCard Index:"+carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard));
                                     //console.log("oldCard Index:" + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard));

                                     


                                     if (ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] != 'NULL') {
                                         //  Ext.getCmp('containerDashboard_Advertisement_CaptionText').setHidden(false);
                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(false);
                                         Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;');
                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] + '</div>');

                                     } else {
                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(true);
                                         Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;');
                                     }

                                     if (carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard) > carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard))
                                     {
                                        // console.log("kanan");
                                         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                                       
                                     } else {
                                       //  console.log("kiri");
                                         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">')
                                     }



                                 },
                             },
                             //       activeitem: function () {
                             //           var crsl = this.getHomecrslId();
                             //           setInterval(function () {
                             //               crsl.next();
                             //               if (crsl.getActiveIndex() === crsl.getMaxItemIndex()) {
                             //                   crsl.setActiveItem(0);
                             //               }
                             //           }, 2000);
                             //       },

                                  
                                    // items: [
                                    //   {
                                    //       xtype: 'image',
                                    //       margin: '7 0 0 0',
                                    //       id: 'Dashboard_carouselFloatPanel_PreviewAdvertisement_1',
                                    //      // hidden:true,
                                    //       src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/satay.jpg',
                                    //       height: '98%',
                                    //       width: '100%',
                                    //       mode: 'image'
                                    //   },
                                    //   {
                                    //       xtype: 'image',                                         
                                    //       id: 'Dashboard_carouselFloatPanel_PreviewAdvertisement_2',
                                    //       src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/kedaikekbackground.jpg',
                                    //       margin: '7 0 0 0',
                                    //       height: '98%',
                                    //       width: '100%',
                                    //       mode: 'image'
                                    //   },
                                    //{
                                    //    xtype: 'image',
                                    //    id: 'Dashboard_carouselFloatPanel_PreviewAdvertisement_3',
                                    //    src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/karipap.jpg',
                                    //    margin: '7 0 0 0',
                                    //    height: '98%',
                                    //    width: '100%',
                                    //    mode: 'image'
                                    //},
                                    //  {
                                    //      xtype: 'image',
                                    //      id: 'Dashboard_carouselFloatPanel_PreviewAdvertisement_4',
                                    //      src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/restaurant.jpg',
                                    //      margin: '7 0 0 0',
                                    //      height: '98%',
                                    //      width: '100%',
                                    //      mode: 'image'
                                    //  }, {
                                    //      xtype: 'image',
                                    //      id: 'Dashboard_carouselFloatPanel_PreviewAdvertisement_5',
                                    //      src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/pizza.jpg',
                                    //      margin: '7 0 0 0',
                                    //      height: '98%',
                                    //      width: '100%',
                                    //      mode: 'image'
                                    //  },
                                    //{
                                    //    xtype: 'image',
                                    //    id: 'Dashboard_carouselFloatPanel_PreviewAdvertisement_6',
                                    //    src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/laksapadu.jpg',
                                    //    margin: '7 0 0 0',
                                    //    height: '98%',
                                    //    width: '100%',
                                    //    mode: 'image'
                                    //},                                  
                                    //{
                                    //    xtype: 'video',
                                    //    enableControls: true,
                                    //    margin: '7 0 0 0',
                                    //    height: '98%',
                                    //    width: '100%',
                                    //    url: 'http://42.1.63.57/AyohaImgCard/AdvertisementVideo/CRCom-71100/aslam.mp4',
                                    //    loop: true,
                                    //    posterUrl: 'resources/icons/videoPurple.png',
                                    //    mode: 'video'
                                    //},
                                    //  ]
                                },
                                
                            ]
                        },

                        {
                            xtype: 'spacer'
                        },
                    ]

                },
                {
                    xtype: 'container',
                    width: '91.1%',
                    height: 60,
                   //hidden:true,
                    margin: '14 0 0 16',
                 
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    id: 'containerDashboard_Advertisement_CaptionText',
                    // hidden:true,
                   
                    style: 'background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;',
                    items: [
                         {
                             id: 'htmlDashboard_Advertisement_CaptionText',
                             html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold"></div>',
                         }
                    ]
                },
                
                {
                    xtype: 'container',
                    width: '95%',
                    height:46,
                    /// hidden:true,
                    margin: '4 0 0 9',
                    style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 10px 10px;',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'transparent',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [

                        {
                            xtype: 'container',
                            id: 'DashboardAdvertisementButtonHeader_bottom',
                            //hidden:true,
                            width: '100%',
                            style: "background-color: transparent",
                            //style: "background-color: #F35B57;",
                            margin: '0 0 0 0',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'

                            },
                            items: [
                                 {
                                     width: '75%',
                                     margin: '0 0 0 5',
                                     id:'htmlDasboardAdvertisementTitleTxt',
                                     html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">Ramadhan AlMubarak 2021 Promotion.Started:March 2020</div>',

                                     // html: '<font size=2 color=black><b>Contact Us</b></font>',
                                 },
                                 {
                                     xtype: 'container',
                                    
                                     //hidden:true,
                                     width: '25%',
                                     style: "background-color: transparent",
                                     //style: "background-color: #F35B57;",
                                     margin: '0 0 0 -5',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'center'

                                     },
                                     items: [
                                          {
                                              
                                              margin: '0 0 0 0',
                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;">Visit Us</div>',

                                              // html: '<font size=2 color=black><b>Contact Us</b></font>',
                                          },
                                          {
                                              xtype: 'container',
                                              id: 'DashboardAdvertisementButton_bottom',
                                              //hidden:true,
                                              width: '100%',
                                              style: "background-color: transparent",
                                              //style: "background-color: #F35B57;",
                                              margin: '0 0 0 0',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'center',
                                                  align: 'center'

                                              },


                                              items: [

                                                   {
                                                       xtype: 'button',
                                                       height: 26,
                                                       width: 26,
                                                       margin: '0 0 0 0',
                                                       id: 'btnDashboardAdvertisementbottom_Location',
                                                       //badgeText: "2",
                                                       html: '<div ><img src="resources/icons/locationThree.png" width="16" height="16" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {

                                                           var Coordinate = GetEnterpriseCoordinate().split(",");
                                                           PlaceMarkerlat = Coordinate[0];
                                                           PlaceMarkerlng = Coordinate[1];

                                                           //var addressLongLat = PlaceMarkerlat + ',' + PlaceMarkerlng;                                                          
                                                           //window.open("geo:" + addressLongLat);
                                                           window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system');

                                                       }
                                                   },
                                                        {
                                                            xtype: 'button',
                                                            height: 28,
                                                            width: 28,
                                                            margin: '0 0 0 0',
                                                            id: 'btnDashboardAdvertisementbottom_FB',
                                                            //badgeText: "2",
                                                            html: '<div ><img src="resources/icons/Facebooklogo.png" width="18" height="18" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                //alert(GetEnterpriseFacebook());
                                                                //window.open("fb://page/1999591407027990" + ModifiedMediaFileName);
                                                                // setTimeout(function () { window.open("fb://profile/100002717204522"); }, 25);
                                                                //setTimeout(function () { window.open("fb://page/107468437955395"); }, 25);
                                                                setTimeout(function () { window.open("fb://page/" + GetEnterpriseFacebook() + ""); }, 25);



                                                                //window.location = "appname://";

                                                                //setTimeout(function () { window.location = "https://www.facebook.com/ianMizi.CloudReceipts"; }, 25);
                                                                //window.location = "fb://";

                                                            }
                                                        },
                                                         {
                                                             xtype: 'button',
                                                             height: 28,
                                                             width: 28,
                                                             margin: '0 0 0 0',
                                                             id: 'btnDashboardAdvertisementbottom_Insta',
                                                             //badgeText: "2",
                                                             html: '<div ><img src="resources/icons/instagram.png" width="18" height="18" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 // alert(GetEnterpriseInstagram());

                                                                 setTimeout(function () { window.open("instagram://user?username=" + GetEnterpriseInstagram() + ""); }, 25);


                                                             }
                                                         },
                                                         {
                                                             xtype: 'button',
                                                             height: 28,
                                                             width: 28,
                                                             margin: '0 0 0 0',
                                                             hidden: true,
                                                             id: 'btnDashboardAdvertisementbottom_Twitter',
                                                             //badgeText: "2",
                                                             html: '<div ><img src="resources/icons/twitter.png" width="18" height="18" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {

                                                                 setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

                                                             }
                                                         },
                                                         {
                                                             xtype: 'button',
                                                             height: 28,
                                                             width: 28,
                                                             margin: '0 0 0 0',
                                                             id: 'btnDashboardAdvertisementbottom_Web',
                                                             hidden: true,
                                                             //badgeText: "2",
                                                             html: '<div ><img src="resources/icons/websiteIcon.png" width="18" height="18" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {

                                                                 window.open(GetEnterpriseWebsite());
                                                                 //setTimeout(function () { window.open(GetEnterpriseWebsite()); }, 25);
                                                                 //setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

                                                             }
                                                         },
                                                           {
                                                               xtype: 'button',
                                                               height: 28,
                                                               width: 28,
                                                               margin: '0 0 0 0',
                                                               id: 'btnDashboardAdvertisementbottom_Email',
                                                               hidden: true,
                                                               //badgeText: "2",
                                                               html: '<div ><img src="resources/icons/EmailRed.png" width="18" height="18" alt="Company Name"></div>',
                                                               ui: 'plain',
                                                               handler: function () {

                                                                   window.open("mailto:" + GetEnterpriseEmail() + "");

                                                               }
                                                           },
                                                          {
                                                              xtype: 'button',
                                                              height: 28,
                                                              width: 28,
                                                              margin: '0 0 0 0',
                                                              id: 'btnDashboarddvertisementbottom_Call',
                                                              hidden: true,
                                                              //badgeText: "2",
                                                              html: '<div ><img src="resources/icons/calling.png" width="18" height="18" alt="Company Name"></div>',
                                                              ui: 'plain',
                                                              handler: function () {

                                                                  setTimeout(function () { window.open("tel:0133376958"); }, 25);


                                                              }
                                                          },
                                                          //{
                                                          //    //xtype: 'button',
                                                          //    //align: 'stretch',
                                                          //    //height: 32,
                                                          //    //width: 92,
                                                          //    id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassap',
                                                          //    // ui: 'plain',
                                                          //    //  window.open("http://" + url, "_blank");
                                                          //    //  html: '<img src="resources/icons/whatApplogosnew.png" style="width: 32px; height: 32px;" />'


                                                          //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/whatApplogosnew.png" style="width: 22px; height: 22px;" /></a>'
                                                          //}
                                                          {
                                                              xtype: 'button',
                                                              height: 28,
                                                              width: 28,
                                                              margin: '0 0 0 0',
                                                              hidden:true,
                                                              id: 'btnDashboardAdvertisementbottom_Wassap',
                                                              //badgeText: "2",
                                                              html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                                              ui: 'plain',
                                                              handler: function () {

                                                                  var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;

                                                                  // window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);

                                                                  window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);

                                                              }
                                                          },
                                              ]

                                          },
                                     ]

                                 },
                               
                            ]
                        },
                        

                            
                        



                    ]
                },

///////
{
    xtype: 'panel',
    height: 15
},

{
    xtype: 'container',
    width: '100%',
    /// hidden:true,
    margin: '10 0 0 0',
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
             margin: '0 0 0 14',
             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
             html: '<div style="color:white;text-align: center;font-size:14px;width:100%;"><b>Hot Seat Promotion!</b></div>'
             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
         },
    ]
},
                {
                    xtype: 'container',
                    width: '100%',
                    height: 250,
                    margin: '0 0 0 0',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    style: 'background-color:transparent',
                  
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                        {
                            xtype:'spacer'
                        },
                        {
                            xtype: 'container',
                            width: '95%',
                            height: 280,
                            margin: '0 0 0 0',
                            //style: {
                            //    // background: '#D25959',
                            //    background: 'rgba(76, 175, 80, 0.3);',
                            //    // border: '2px'
                            //},
                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                            // style: 'background-color:rgba(255, 255, 255, 0);border-radius: 10px 10px 10px 10px;',
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            scrollable: {
                                direction: 'horizontal',
                                directionLock: true
                            },
                            items: [
                              {
                                  xtype: 'panel',
                                  width: 7
                              },
                                 {
                                     xtype: 'container',
                                     height: 270,
                                     width: 230,
                                     margin: '0 0 0 0',
                                     //style: {
                                     //    // background: '#D25959',
                                     //    background: 'rgba(76, 175, 80, 0.3);',
                                     //    // border: '2px'
                                     //},
                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;border:2px none #ECF0F1;',
                                     style: 'background-color:transparent;',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'center',
                                         align: 'center',
                                     },
                                     items: [


                                         {
                                             xtype: 'container',
                                             width: '100%',
                                             height: 30,
                                             docked:'bottom',
                                             /// hidden:true,
                                             margin: '-2 0 0 0',
                                             style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                             //style: {
                                             //    // background: '#D25959',
                                             //    background: 'transparent',
                                             //    // border: '2px'
                                             //},
                                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                           //  style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [
                                                 //{
                                                 //    margin: '-2 0 0 0',

                                                 //    html: '<font size=2 color=black><b>Contact Us</b></font>',
                                                 //},

                                                     {
                                                         xtype: 'container',
                                                         id: 'DashboardHotSeatAdvertisementButton_bottom0',
                                                         //hidden:true,
                                                         width: '100%',
                                                         style: "background-color: transparent",
                                                         //style: "background-color: #F35B57;",
                                                         margin: '0 0 0 0',
                                                         layout: {
                                                             type: 'hbox',
                                                             pack: 'center',
                                                             align: 'center'

                                                         },
                                                     


                                                         items: [

                                                             {
                                                                 xtype: 'button',
                                                                 margin: '0 0 0 0',
                                                                 ui: 'plain',
                                                                 id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt0',
                                                                 width:'100%',
                                                                 //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Car Wash Promotion! >></b></div>',
                                                                 handler: function () {
                                                                     
                                                                     }
                                                                 

                                                             }
                                                              
                                                                     //{
                                                                     //    xtype: 'button',
                                                                     //    height: 28,
                                                                     //    width: 28,
                                                                     //    margin: '0 0 0 0',
                                                                     //    id: 'btnDashboardAdvertisementbottom_Wassap',
                                                                     //    //badgeText: "2",
                                                                     //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                                                     //    ui: 'plain',
                                                                     //    handler: function () {

                                                                     //        //var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;

                                                                     //        //// window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);

                                                                     //        //window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);

                                                                     //    }
                                                                     //},
                                                         ]

                                                     },




                                             ]
                                         },



                                         {
                                             xtype: 'button',
                                             id: 'btnDashboard_HotSeatAdvertisement_PicProfile0',
                                             margin: '-2 0 0 0',
                                             //docked:'top',
                                             height: 60,
                                             width: 60,
                                             // iconCls: 'list',
                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                             html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                                             // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                             ui: 'plain',
                                             handler: function () {


                                             }
                                         },
                                         {
                                             xtype: 'container',
                                             // width: '91.1%',
                                             width: 228,
                                             height: 60,
                                             hidden:true,
                                             margin: '14 0 0 16',

                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             id: 'containerDashboard_HotSeatAdvertisement_ProfileText0',
                                             // hidden:true,

                                             style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                             items: [
                                                 
                                             ]
                                         },
                                         {
                                             xtype: 'button',
                                             id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile0',
                                             margin: '-20 0 0 0',
                                             height: 60,
                                             //width: 228,
                                             width: '100%',
                                             // iconCls: 'list',
                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                             //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                             html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',

                                             // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                             ui: 'plain',
                                             handler: function () {


                                             }
                                         },
                                                                  {

                                                      height: 210,
                                                      width: 230,
                                                      id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat0',
                                                      margin: '-70 0 0 0',
                                                      html: '<img src="resources/icons/TC-Car-Wash-Promo.jpg"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;">',
                                                     
                                                  },
                                          //{
                                          //    xtype: 'container',
                                          //    style: 'background-color:transparent;',
                                          //    height: 210,
                                          //    width: 230,
                                          //    layout: {
                                          //        type: 'vbox',
                                          //    },
                                          //    initialize: function (c) {
                                          //        this.element.on({
                                          //            tap: function (e, node, options) {
                                                          
                                          //            }
                                          //        });
                                          //    },
                                          //    items: [
                          
                                          //    ]
                                          //},
                                           
                                     ]
                                 },
                              
                                {
                                    xtype: 'panel',
                                    width:15
                                },



                                {
                                    xtype: 'container',
                                    height: 270,
                                    width: 230,
                                    margin: '0 0 0 0',
                                    //style: {
                                    //    // background: '#D25959',
                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                    //    // border: '2px'
                                    //},
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;border:2px none #ECF0F1;',
                                    style: 'background-color:transparent;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [


                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            height: 30,
                                            docked: 'bottom',
                                            /// hidden:true,
                                            margin: '-2 0 0 0',
                                            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                            //style: {
                                            //    // background: '#D25959',
                                            //    background: 'transparent',
                                            //    // border: '2px'
                                            //},
                                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                            //  style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                //{
                                                //    margin: '-2 0 0 0',

                                                //    html: '<font size=2 color=black><b>Contact Us</b></font>',
                                                //},

                                                    {
                                                        xtype: 'container',
                                                        id: 'DashboardHotSeatAdvertisementButton_bottom1',
                                                        //hidden:true,
                                                        width: '100%',
                                                        style: "background-color: transparent",
                                                        //style: "background-color: #F35B57;",
                                                        margin: '0 0 0 0',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },


                                                        items: [

                                                            {
                                                                xtype: 'button',
                                                                margin: '0 0 0 0',
                                                                ui: 'plain',
                                                                width: '100%',
                                                                id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt1',
                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Opening Restauran Promotion! >></b></div>',
                                                                handler: function () {

                                                                    //var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;

                                                                    //// window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);

                                                                    //window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);

                                                                }


                                                            }

                                                                    //{
                                                                    //    xtype: 'button',
                                                                    //    height: 28,
                                                                    //    width: 28,
                                                                    //    margin: '0 0 0 0',
                                                                    //    id: 'btnDashboardAdvertisementbottom_Wassap',
                                                                    //    //badgeText: "2",
                                                                    //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                                                    //    ui: 'plain',
                                                                    //    handler: function () {

                                                                    //        //var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;

                                                                    //        //// window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);

                                                                    //        //window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);

                                                                    //    }
                                                                    //},
                                                        ]

                                                    },




                                            ]
                                        },



                                        {
                                            xtype: 'button',
                                            id: 'btnDashboard_HotSeatAdvertisement_PicProfile1',
                                            margin: '-2 0 0 0',
                                            //docked:'top',
                                            height: 60,
                                            width: 60,
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                                            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {


                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            // width: '91.1%',
                                            width: 228,
                                            height: 60,
                                            hidden: true,
                                            margin: '14 0 0 16',

                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            id: 'containerDashboard_HotSeatAdvertisement_ProfileText1',
                                            // hidden:true,

                                            style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                            items: [

                                            ]
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile1',
                                            margin: '-20 0 0 0',
                                            height: 60,
                                            //width: 228,
                                            width: '100%',
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',

                                            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {


                                            }
                                        },

                                          {

                                              height: 210,
                                              width: 230,
                                              id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat1',
                                              margin: '-70 0 0 0',
                                              html: '<img src="resources/icons/restorantpromo.jpg"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;">',
                                              // xtype: 'button',
                                              // height: 200,
                                              // width: 200,

                                              // margin: '2 0 0 0',
                                              // id: 'btnMyAccount_Dashboard_PromotionAdvertisement_HotSeat1',
                                              // html: '<img src="resources/icons/TC-Car-Wash-Promo.jpg" width="190" height="190" alt="Company Name">',
                                              //// html: '<div class="cardcontainer_img"><img src="resources/icons/TC-Car-Wash-Promo.jpg" width="190" height="190" alt="Company Name"></div>',
                                              // ui: 'plain',
                                              // handler: function () {

                                              //     //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                              //     //  setupMovementMap(2);





                                              //     //Ext.getCmp('mainView').setActiveItem(16);
                                              //     //loadNotificationSummary();
                                              // }
                                          },
                                    ]
                                },
                                
                                {
                                    xtype: 'panel',
                                    width: 15
                                },

                                {
                                    xtype: 'container',
                                    height: 270,
                                    width: 230,
                                    margin: '0 0 0 0',
                                    //style: {
                                    //    // background: '#D25959',
                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                    //    // border: '2px'
                                    //},
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;border:2px none #ECF0F1;',
                                    style: 'background-color:transparent;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [


                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            height: 30,
                                            docked: 'bottom',
                                            /// hidden:true,
                                            margin: '-2 0 0 0',
                                            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                            //style: {
                                            //    // background: '#D25959',
                                            //    background: 'transparent',
                                            //    // border: '2px'
                                            //},
                                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                            //  style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                //{
                                                //    margin: '-2 0 0 0',

                                                //    html: '<font size=2 color=black><b>Contact Us</b></font>',
                                                //},

                                                    {
                                                        xtype: 'container',
                                                        id: 'DashboardHotSeatAdvertisementButton_bottom2',
                                                        //hidden:true,
                                                        width: '100%',
                                                        style: "background-color: transparent",
                                                        //style: "background-color: #F35B57;",
                                                        margin: '0 0 0 0',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },


                                                        items: [

                                                            {
                                                                xtype: 'button',
                                                                margin: '0 0 0 0',
                                                                ui: 'plain',
                                                                width: '100%',
                                                                id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt2',
                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Opening Restauran Promotion! >></b></div>',
                                                                handler: function () {

                                                                   
                                                                }


                                                            }

                                                                    //{
                                                                    //    xtype: 'button',
                                                                    //    height: 28,
                                                                    //    width: 28,
                                                                    //    margin: '0 0 0 0',
                                                                    //    id: 'btnDashboardAdvertisementbottom_Wassap',
                                                                    //    //badgeText: "2",
                                                                    //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                                                    //    ui: 'plain',
                                                                    //    handler: function () {

                                                                    //        //var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;

                                                                    //        //// window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://ianmizi.com/ayohaimg/"+ModifiedMediaFileName);

                                                                    //        //window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://ianmizi.com/ayohaimg/" + ModifiedMediaFileName);

                                                                    //    }
                                                                    //},
                                                        ]

                                                    },




                                            ]
                                        },



                                        {
                                            xtype: 'button',
                                            id: 'btnDashboard_HotSeatAdvertisement_PicProfile2',
                                            margin: '-2 0 0 0',
                                            //docked:'top',
                                            height: 60,
                                            width: 60,
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                                            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {


                                            }
                                        },
                                        {
                                            xtype: 'container',
                                            // width: '91.1%',
                                            width: 228,
                                            height: 60,
                                            hidden: true,
                                            margin: '14 0 0 16',

                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            id: 'containerDashboard_HotSeatAdvertisement_ProfileText2',
                                            // hidden:true,

                                            style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                            items: [

                                            ]
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile2',
                                            margin: '-20 0 0 0',
                                            height: 60,
                                            //width: 228,
                                            width: '100%',
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',

                                            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {


                                            }
                                        },

                                          {

                                              height: 210,
                                              width: 230,
                                              id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat2',
                                              margin: '-70 0 0 0',
                                              html: '<img src="resources/icons/toypromo.jpg"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;">',
                                              // xtype: 'button',
                                              // height: 200,
                                              // width: 200,

                                              // margin: '2 0 0 0',
                                              // id: 'btnMyAccount_Dashboard_PromotionAdvertisement_HotSeat1',
                                              // html: '<img src="resources/icons/TC-Car-Wash-Promo.jpg" width="190" height="190" alt="Company Name">',
                                              //// html: '<div class="cardcontainer_img"><img src="resources/icons/TC-Car-Wash-Promo.jpg" width="190" height="190" alt="Company Name"></div>',
                                              // ui: 'plain',
                                              // handler: function () {

                                              //     //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                              //     //  setupMovementMap(2);





                                              //     //Ext.getCmp('mainView').setActiveItem(16);
                                              //     //loadNotificationSummary();
                                              // }
                                          },
                                    ]
                                },




                                 
                            ]
                        },

                        {
                            xtype: 'spacer'
                        },
                    ]

                },







                {
                    xtype: 'panel',
                  //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                    height:200
                },

               

               //{
               //    xtype: 'container',
               //    style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
               //    width: '100%',
               //    height:200,
               //    //  style: "background-color: transparent;",
               //    layout: {
               //        type: 'vbox',
               //        pack: 'start',
               //        align: 'center'

               //    },
               //}
               
                 
              ////////////////////////////////
                


                









          ]

      },


                               {
                                   xtype: 'container',
                                   id: 'containerDashboardNewMasterQRCodePoint',
                                   width: '100%',
                                   height: 360,
                                   //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                   style: "background-color: white;",
                                   //style: "background-color: #F35B57;",
                                   title: 'DashboardNewMasterQRCodePoint',
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
                                                       Ext.getCmp('tabpanelDashboardNew').setActiveItem(0);
                                                   }
                                               }
                                           });
                                       }
                                   },

                                   items: [





                                   ]

                               },



                          ]

                          //}
                      },



                      
                      




                      {

                          xtype: 'container',
                          width: '100%',
                          // width: 40,
                          docked: 'bottom',
                          height: 55,
                          //  title: '<font size="3" color="white">Live Tracking Map</font>',
                          //hidden: true,

                          id: 'containerMyAccount_Dashboard_MenuBottom',
                          style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                          //style: {
                          //    // background: '#D25959',
                          //    background: 'transparent',
                          //    // border: '2px'
                          //},
                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                          // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                          layout: {
                              type: 'hbox',
                              pack: 'start',
                              align: 'center',
                          },




                          // hidden:true,
                          items:
                                 [
                                     {
                                         xtype: 'container',
                                         width: '78%',
                                         style: "background-color: transparent",
                                         height: 55,
                                         layout: {
                                             type: 'hbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         scrollable: {
                                             direction: 'horizontal',
                                             directionLock: true
                                         },
                                         items: [


                                             {
                                                 xtype: 'container',
                                                 width: 600,
                                                 style: "background-color: transparent",
                                                 height: 55,
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center',
                                                 },
                                                 items: [



                                                     {
                                                         xtype: 'container',
                                                         id: 'containerMyAccount_Dashboard_MenuBottom_Logout',
                                                         //width: '33%',
                                                         //height: 30,
                                                         margin: '0 0 0 0',
                                                         flex: 1,
                                                         style: "background-color: transparent",
                                                         //style: "background-color: #F35B57;",

                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'

                                                         },
                                                         items: [

                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btn_MyAccount_Dashboard_MenuBottom_Logout',
                                                                  //  badgeText: '1',
                                                                  margin: '0 0 0 0',

                                                                  height: 36,
                                                                  width: 36,
                                                                  html: '<img src="resources/icons/logoutPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                  ui: 'plain',
                                                                  handler: function () {
                                                                      FloatPanel_AyohaUserRegistrationAddNewShow();
                                                                  }
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerMyAccount_Dashboard_MenuBottom_LogoutTxt',
                                                                  width: '100%',
                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [
                                                                      {
                                                                          margin: '-12 0 0 0',
                                                                          // id: 'htmlStampHistoryTxt',
                                                                          html: '<font size=1 color=grey>LogOut</font>'
                                                                      },
                                                                      {
                                                                          margin: '-12 0 0 0',
                                                                          // id: 'htmlStampHistoryTxt',
                                                                          html: '<font size=1 color=white>.</font>'
                                                                      },
                                                                  ]

                                                              },


                                                         ]
                                                     },
                                                     {
                                                         xtype: 'container',
                                                         id: 'containerMyAccount_Dashboard_MenuBottom_MyAccount',
                                                         //width: '33%',
                                                         //height: 30,
                                                         margin: '0 0 0 0',
                                                         flex: 1,
                                                         style: "background-color: transparent",
                                                         //style: "background-color: #F35B57;",

                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'

                                                         },
                                                         items: [

                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btn_MyAccount_Dashboard_MenuBottom_MyAccount',
                                                                  //  badgeText: '1',
                                                                  margin: '0 0 0 0',

                                                                  height: 36,
                                                                  width: 36,
                                                                  html: '<img src="resources/icons/userInfoPurple.png" width="26" height="26" alt="Company Name">',
                                                                  ui: 'plain',
                                                                  handler: function () {
                                                                      FloatPanel_AyohaEnterpriseAccountShow();
                                                                  }
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerMyAccount_Dashboard_MenuBottom_MyAccountTxt',
                                                                  width: '100%',
                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [
                                                                      {
                                                                          margin: '-12 0 0 0',
                                                                          // id: 'htmlStampHistoryTxt',
                                                                          html: '<font size=1 color=grey>My</font>'
                                                                      },
                                                                      {
                                                                          margin: '-12 0 0 0',
                                                                          // id: 'htmlStampHistoryTxt',
                                                                          html: '<font size=1 color=grey>Account</font>'
                                                                      },
                                                                  ]

                                                              },


                                                         ]
                                                     },

                                               {
                                                   xtype: 'container',
                                                   id: 'containerMyAccount_Dashboard_MenuBottom_CardSetting',
                                                   //width: '33%',
                                                   //height: 30,
                                                   margin: '0 0 0 0',
                                                   flex: 1,
                                                   style: "background-color: transparent",
                                                   //style: "background-color: #F35B57;",

                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                        {
                                                            xtype: 'button',
                                                            id: 'btn_MyAccount_Dashboard_MenuBottom_CardSetting',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',

                                                            height: 36,
                                                            width: 36,
                                                            html: '<img src="resources/icons/settingPurple.png" width="26" height="26" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                FloatPanel_AyohaCardManagementShow();
                                                            }
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_CardSettingTxt',
                                                            width: '100%',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>Card</font>'
                                                                },
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>Setting</font>'
                                                                },
                                                            ]

                                                        },


                                                   ]
                                               },



                                               {
                                                   xtype: 'container',
                                                   id: 'containerMyAccount_Dashboard_MenuBottom_MyCustomer',
                                                   //width: '33%',
                                                   //height: 30,
                                                   margin: '0 0 0 0',
                                                   flex: 1,
                                                   style: "background-color: transparent",
                                                   //style: "background-color: #F35B57;",

                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                        {
                                                            xtype: 'button',
                                                            id: 'btn_MyAccount_Dashboard_MenuBottom_MyCustomer',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',

                                                            height: 36,
                                                            width: 36,
                                                            html: '<img src="resources/icons/userlistPurple.png" width="26" height="26" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                LoadingPanelShow();
                                                                FloatPanel_SubscriberListShow();
                                                            }
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_MyCustomerTxt',
                                                            width: '100%',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>My</font>'
                                                                },
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>Customer</font>'
                                                                },
                                                            ]

                                                        },


                                                   ]
                                               },

                                               {
                                                   xtype: 'container',
                                                   id: 'containerMyAccount_Dashboard_MenuBottom_MyPromotion',
                                                   //width: '33%',
                                                   //height: 30,
                                                   margin: '0 0 0 0',
                                                   flex: 1,
                                                   style: "background-color: transparent",
                                                   //style: "background-color: #F35B57;",

                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                        {
                                                            xtype: 'button',
                                                            id: 'btn_MyAccount_Dashboard_MenuBottom_MyPromotion',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',

                                                            height: 36,
                                                            width: 36,
                                                            html: '<img src="resources/icons/mypromotionOne.png" width="26" height="26" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                FloatPanel_AdvertisementShow();
                                                            }
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_MyPromotionTxt',
                                                            width: '100%',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>My</font>'
                                                                },
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>Promotion</font>'
                                                                },
                                                            ]

                                                        },


                                                   ]
                                               },




                                                   {
                                                       xtype: 'container',
                                                       id: 'containerMyAccount_Dashboard_MenuBottom_Notification',
                                                       //width: '33%',
                                                       //height: 30,
                                                       margin: '0 0 0 0',
                                                       flex: 1,
                                                       style: "background-color: transparent",
                                                       //style: "background-color: #F35B57;",

                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'center'

                                                       },
                                                       items: [

                                                            {
                                                                xtype: 'button',
                                                                id: 'btn_MyAccount_Dashboard_MenuBottom_Notification',
                                                                //  badgeText: '1',
                                                                margin: '0 0 0 0',

                                                                height: 36,
                                                                width: 36,
                                                                html: '<img src="resources/icons/NotificationPurple.png" width="26" height="26" alt="Company Name">',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                    FloatLoyaltyCardStampShow();
                                                                }
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                id: 'containerMyAccount_Dashboard_MenuBottom_NotificationTxt',
                                                                width: '100%',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>Notification</font>'
                                                                    },
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>.</font>'
                                                                    },
                                                                ]

                                                            },


                                                       ]
                                                   },



                                                   {
                                                       xtype: 'container',
                                                       id: 'containerMyAccount_Dashboard_MenuBottom_MessagingTool',
                                                       //width: '33%',
                                                       //height: 30,
                                                       margin: '0 0 0 0',
                                                       flex: 1,
                                                       style: "background-color: transparent",
                                                       //style: "background-color: #F35B57;",

                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'center'

                                                       },
                                                       items: [

                                                            {
                                                                xtype: 'button',
                                                                id: 'btn_MyAccount_Dashboard_MenuBottom_MessagingTool',
                                                                //  badgeText: '1',
                                                                margin: '0 0 0 0',

                                                                height: 36,
                                                                width: 36,
                                                                html: '<img src="resources/icons/BlastingMsgPurple.png" width="26" height="26" alt="Company Name">',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                }
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                id: 'containerMyAccount_Dashboard_MenuBottom_MessagingToolTxt',
                                                                width: '100%',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>Messaging</font>'
                                                                    },
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>Tools</font>'
                                                                    },
                                                                ]

                                                            },


                                                       ]
                                                   },



                                                   {
                                                       xtype: 'container',
                                                       id: 'containerMyAccount_Dashboard_MenuBottom_Community',
                                                       //width: '33%',
                                                       //height: 30,
                                                       margin: '0 0 0 0',
                                                       flex: 1,
                                                       style: "background-color: transparent",
                                                       //style: "background-color: #F35B57;",

                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'center'

                                                       },
                                                       items: [

                                                            {
                                                                xtype: 'button',
                                                                id: 'btn_MyAccount_Dashboard_MenuBottom_Community',
                                                                //  badgeText: '1',
                                                                margin: '0 0 0 0',

                                                                height: 36,
                                                                width: 36,
                                                                html: '<img src="resources/icons/communityPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                    FloatPanel_MembershipCardManagementShow();
                                                                }
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                id: 'containerMyAccount_Dashboard_MenuBottom_CommunityTxt',
                                                                width: '100%',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>Membership</font>'
                                                                    },
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>Card</font>'
                                                                    },
                                                                ]

                                                            },


                                                       ]
                                                   },


                                                   {
                                                       xtype: 'container',
                                                       id: 'containerMyAccount_Dashboard_MenuBottom_MyStore',
                                                       //width: '33%',
                                                       //height: 30,
                                                       margin: '0 0 0 0',
                                                       flex: 1,
                                                       style: "background-color: transparent",
                                                       //style: "background-color: #F35B57;",

                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'center'

                                                       },
                                                       items: [

                                                            {
                                                                xtype: 'button',
                                                                id: 'btn_MyAccount_Dashboard_MenuBottom_MyStore',
                                                                //  badgeText: '1',
                                                                margin: '0 0 0 0',

                                                                height: 36,
                                                                width: 36,
                                                                html: '<img src="resources/icons/myOnlineStorePurple.png" width="26" height="26" alt="Company Name">',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                }
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                id: 'containerMyAccount_Dashboard_MenuBottom_MyStoreTxt',
                                                                width: '100%',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>My</font>'
                                                                    },
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>Store</font>'
                                                                    },
                                                                ]

                                                            },


                                                       ]
                                                   },








                                                 ]

                                             },



                                             












                                         ]
                                     },

                                              

                                                

                                                //{
                                                //    margin: '0 0 0 0',
                                                //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                //},

                                                {
                                                    xtype: 'container',
                                                   margin: '10 0 0 0',
                                                    // hidden: true,
                                                   style: 'background-color: transparent;',
                                                    //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                    height: 80,
                                                    width: '20%',
                                                    // margin: '70 0 0 0',
                                                    id: 'containerMyAccount_Dashboard_MenuBottom_QrCodeScanOutter',
                                                    layout: {

                                                        type: 'vbox',
                                                        pack: 'start',
                                                        align: 'center'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            margin: '-40 0 0 -3',
                                                            // hidden: true,
                                                            //style: 'background-color: white;',
                                                            style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                            height: 80,
                                                            width: 80,
                                                            // margin: '70 0 0 0',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_QrCodeScanInner',
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
                                                                    id: 'btnMyAccount_Dashboard_MenuBottom_QrCodeScan',
                                                                    html: '<img src="resources/icons/scanQrCodePurple.png" width="45" height="45" alt="Company Name">',
                                                                    //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                       
                                                                        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                        //  setupMovementMap(2);
                                                                        FloatPanel_QrCodeScanner_ScanLoyaltyStampCardShow();
                                                                       
                                                                      //  FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();


                                                                        //Ext.getCmp('mainView').setActiveItem(16);
                                                                        //loadNotificationSummary();
                                                                    }
                                                                },



                                                            ]
                                                        },
                                                    ]
                                                },
                                                        
                                                     

                                                





                                 ]

                      },






















                ]
            },






        ]
    },
    initialize: function () {

    }
});



var TotalSend = 100;


var PNremainingval;
function setDashBoardPushNotificationsQuota() {


    
    var percentchartPN = 0;
    var valUsedPercentage;


    PNremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartPN = setInterval(function () {









        percentchartPN += 1;
        dataPNDashBoard.setValue(0, 1, percentchartPN);
        dataPNDashBoard.setValue(1, 1, 100 - percentchartPN);


       //// Ext.getCmp('PushNotificationspercentageTxtPushNotificationsDashboard').setHtml('<font size="4" color="#067ab5"><b>' + percentchartPN + '%</b></font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2" color="#067ab5"><b>' + TotalSend + '/' + 500 + '</b></font>');
        // Ext.getCmp('PushNotificationsTotalOverviewTxtPushNotificationsDashboard').setHtml('<font size="2" color="#067ab5"><b>' + TotalSend + '/' + GetCurrEnterprisePushNotificationQuota() + '</b></font>');



        //Ext.getCmp('SMSCountOverTxtSMSDashboard').setHtml('<font size="2" color="black">&nbsp;&nbsp;&nbsp;<b>SMS<br>' + chartSMSusedval + '/' + chartSMSremainingval + '</b></font>');
      //  Ext.getCmp('PushNotificationsCountOverTxtPushNotificationsDashboard').setHtml('<font size="2" color="black"><b><u>Quota:</u></b></font><br><font size="5" color="black"><b>' + 500 + '</b></font><br><font size="2" color="black"><b><u>Used:</u></b></font><br><font size="5" color="black"><b>' + TotalSend + '</b></font><br><font size="2" color="black"><b><u>Balance:</u></b><br><font size="5" color="black"><b>' + PNremainingval + '</b></font>');

        chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
        if (percentchartPN > valUsedPercentage) {
            clearInterval(handlerchartPN);
            dataPNDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', PNremainingval],
            ]);
            chartPushNotificationsDashboard = new google.visualization
       .PieChart(document.getElementById('chartPushNotificationsDashboard'));
            chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
        }


    }, 30);








}




var SMSremainingval;

function setDashBoardSMSQuota() {



    var percentchartSMS = 0;
    var valUsedPercentage;


    SMSremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartSMS = setInterval(function () {


        percentchartSMS += 1;
        dataSMSDashBoard.setValue(0, 1, percentchartSMS);
        dataSMSDashBoard.setValue(1, 1, 100 - percentchartSMS);
        chartSMSDashboard.draw(dataSMSDashBoard, optionSMSDashBoard);
        if (percentchartSMS > valUsedPercentage) {
            clearInterval(handlerchartSMS);
            dataSMSDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', SMSremainingval],
            ]);
            chartSMSDashboard = new google.visualization
       .PieChart(document.getElementById('chartSMSDashboard'));
            chartSMSDashboard.draw(dataSMSDashBoard, optionSMSDashBoard);
        }


    }, 30);








}



var WhatAppremainingval;

function setDashBoardWhatAppQuota() {



    var percentchartWhatApp = 0;
    var valUsedPercentage;


    WhatAppremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartSMS = setInterval(function () {

        percentchartWhatApp += 1;
        dataWhatAppDashBoard.setValue(0, 1, percentchartWhatApp);
        dataWhatAppDashBoard.setValue(1, 1, 100 - percentchartWhatApp);

        chartWhatAppDashboard.draw(dataWhatAppDashBoard, optionWhatAppDashBoard);
        if (percentchartWhatApp > valUsedPercentage) {
            clearInterval(handlerchartSMS);
            dataWhatAppDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', WhatAppremainingval],
            ]);
            chartWhatAppDashboard = new google.visualization
       .PieChart(document.getElementById('chartWhatAppDashboard'));
            chartWhatAppDashboard.draw(dataWhatAppDashBoard, optionWhatAppDashBoard);
        }


    }, 30);

  

   
   

    loadVIAAdvertisement();



}





//var myVar = setInterval(VIAAdvertismentAutoSlide, 2000);

//function VIAAdvertismentAutoSlide() {
//    i++;
//}



var VIAAdvertismentAutoSlideTimer;
var currDirection;

function VIAAdvertismentAutoSlide() {
    var i = 0;
    var interval = parseInt(3000);
    var crsl = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
    
    var maxIndenx = crsl.getMaxItemIndex();
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    VIAAdvertismentAutoSlideTimer = setInterval(function () {
       
        crsl.next();
        globalMediaFileName = ArrMediaFileName[crsl.getActiveIndex()+1];
      //  console.log(globalMediaFileName);
      
        ////if (ArrCaptionTextVIAAdvertisement[crsl.getActiveIndex()] != 'NULL') {
        ////    //  Ext.getCmp('containerDashboard_Advertisement_CaptionText').setHidden(false);
        ////    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(false);
        ////    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;');
        ////    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionTextVIAAdvertisement[crsl.getActiveIndex()] + '</div>');

        ////} else {
        ////      Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(true);
        ////    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;');
        ////}
        if (crsl.getActiveIndex() === crsl.getMaxItemIndex()) {
            // crsl.previous();
            Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setActiveItem(0);
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing1').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing2').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing3').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing4').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing5').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing6').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing7').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing8').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing9').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
        }
        //if (crsl.getActiveIndex() === 0) {
        //    crsl.next();
        //}
      
    }, interval);
}



var carouselDasboardVIAAdertisement;
var ArrCaptionTextVIAAdvertisement = [];
function loadVIAAdvertisement() {
    Ext.getStore('AdvertisementloadMediaAdvertisementVIAStore').getProxy().setExtraParams({
        //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    });
    Ext.StoreMgr.get('AdvertisementloadMediaAdvertisementVIAStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AdvertisementloadMediaAdvertisementVIAStore').getProxy().setExtraParams({
            //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
            //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('AdvertisementloadMediaAdvertisementVIAStore').load();
        var myStore = Ext.getStore('AdvertisementloadMediaAdvertisementVIAStore');

        var count = myStore.getCount();
      
        CountAdvertisementMedia = count - 1;
        var modelRecorded = myStore.getAt(0);
        var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        var AdvertisementCode = modelRecorded.get('AdvertisementCode');
        var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
        var EnterpriseName = modelRecorded.get('EnterpriseName');
        var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');        
        localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);

        
        Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
        Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
        Ext.getCmp('htmlDasboardAdvertisementTitleTxt').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AdvertisementTitle + '</div>');


        //console.log(GetEnterpriseHQAccNo());
        //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
        //var modelRecord = myStore.getAt(0);

        //var Complaint = modelRecord.get('Complaint');
        // var MinStoreAlert = modelRecord.get('MinStoreAlert');
        // var StoreBalance = modelRecord.get('TotalStock');

        carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
        ArrCaptionTextVIAAdvertisement.length = 0;
        ArrMediaFileName.length = 0;

        for (i = 0; i < count; i++) {
            var modelRecord = myStore.getAt(i);

            var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var MediaFileName = modelRecord.get('MediaFileName');




        
            ArrMediaFileName.push(MediaFileName);

            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + i).setHidden(false);
            //  xtype: 'pinchzoomimage',
            if (MediaType == "Image") {
                carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'image', margin: '7 0 0 0' });
                // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            }
            if (MediaType == "Video") {
                carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: true, enableControls: true, margin: '7 0 0 0' });

            }

            if (AdvertismentMediaNote) {
                ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
            } else {
                ArrCaptionTextVIAAdvertisement.push('NULL');
            }
           

            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }
      
      
       

        //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);


        var modelRecords = myStore.getAt(0);
        localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));
      
       
        Ext.Viewport.setMasked(false);
        VIAAdvertismentAutoSlide();
        loadAdvertisementloadHotSeatStore();

    });
    task.delay(2000);
 
}






var ArrAdvertisementCodeHotSeat = [];
function loadAdvertisementloadHotSeatStore() {
    Ext.getStore('AdvertisementloadHotSeatStore').getProxy().setExtraParams({
        //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    });
    Ext.StoreMgr.get('AdvertisementloadHotSeatStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AdvertisementloadHotSeatStore').getProxy().setExtraParams({
            //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
            //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('AdvertisementloadHotSeatStore').load();
        var myStore = Ext.getStore('AdvertisementloadHotSeatStore');

        var count = myStore.getCount();

        //CountAdvertisementMedia = count - 1;
        //var modelRecorded = myStore.getAt(0);
        //var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        //var AdvertisementCode = modelRecorded.get('AdvertisementCode');
        //var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
        //var EnterpriseName = modelRecorded.get('EnterpriseName');
        //var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
      //  localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);




        //Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
        //Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');


       

        //carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
        //ArrCaptionTextVIAAdvertisement.length = 0;
        ArrAdvertisementCodeHotSeat.length = 0;

        for (i = 0; i < count; i++) {
            var modelRecord = myStore.getAt(i);

            var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
            var EnterpriseName = modelRecord.get('EnterpriseName');
            var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
            var AdvertisementCode = modelRecord.get('AdvertisementCode');

            //ArrMediaFileName.push(MediaFileName);
            Ext.getCmp('btnDashboard_HotSeatAdvertisement_PicProfile' + i).setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
            Ext.getCmp('btnDashboard_HotSeatAdvertisement_UserNameProfile' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">' + EnterpriseName + '</div><br>');


            Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement'+i+'()">');

            Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');

            ArrAdvertisementCodeHotSeat.push(AdvertisementCode);


            ////  xtype: 'pinchzoomimage',
            //if (MediaType == "Image") {
            //    carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'image', margin: '7 0 0 0' });
            //    // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            //}
            //if (MediaType == "Video") {
            //    carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: true, enableControls: true, margin: '7 0 0 0' });

            //}

            //if (AdvertismentMediaNote) {
            //    ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
            //} else {
            //    ArrCaptionTextVIAAdvertisement.push('NULL');
            //}


            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }




        //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);


        //var modelRecords = myStore.getAt(0);
        //localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        //localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        //localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        //localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        //localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        //localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        //localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));


        Ext.Viewport.setMasked(false);
      //  VIAAdvertismentAutoSlide();

    });
    task.delay(2000);

}

function openAdvertisement0() {
  
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[0]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement");
}
function openAdvertisement1() {

    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[1]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement");
}
function openAdvertisement2() {

    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[2]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement");
}

function Ayoha_eWallet() {
    swalFireGeneralMsg('eWallet will be available in next  Version.!.Thank You for your support.');
}