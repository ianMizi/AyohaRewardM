

Ext.define('ianMizi.view.MainMenu', {
    //  extend: 'Ext.Panel', //Ext.navigation.View
    extend: 'Ext.tab.Panel',
    xtype: 'ClaimDashboard',
    id: 'ClaimDashboardID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    // zIndex: 20,





    // styleHtmlContent: true,

    config: {

        activeItem: 0,
        tabBar: {
            //  ui: 'plain',
            ui: 'neutral',
            //  docked:'bottom',
            layout: {


                pack: 'center'

            },
            listeners: {

            },
        },
        style: {

            // background: '#f44336',
            background: 'white',

        },
        //style: ' background-color:white;',
        // layout: 'fit', //  add a layout
        items:
        [


            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_AyohaCardManagement_EditCardHeader',
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
                                         id: 'btnFloatPanel_AyohaCardManagement_EditCardBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {

                                             _FloatPanel_AyohaCardManagement_EditCard.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'left',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             isFloatPanel_AyohaCardManagement_EditCardOpen = 'N';
                                         }
                                     },
                                     {
                                         margin: '0 0 0 0',
                                         id: 'htmlFloatPanel_AyohaCardManagement_EditCard_TitleHeaderTxt',
                                         html: '<font size=2 color=white><b>Ayoha Stamp Card Setting</b></font>'
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
                                                  id: 'containerFloatPanel_AyohaCardManagement_EditCardHaiUser',
                                                  layout: {

                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'
                                                  },
                                                  items: [


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaCardManagement_EditCardHaiUser',
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
                                                          id: 'containerFloatPanel_AyohaCardManagement_EditCardeWallet',
                                                          layout: {

                                                              type: 'hbox',
                                                              pack: 'left',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_AyohaCardManagement_EditCardeWallet',
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
                                               id: 'containerFloatPanel_AyohaCardManagement_EditCardPictureUser',
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
                                                       id: 'btnFloatPanel_AyohaCardManagement_EditCardInfo',
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
                //   hidden:true,
                //  title: '<font size="4" color="white">Dashboard</font>',
                docked: 'bottom',
                width: '100%',
                height: 70,
                id: 'ClaimDashboardPaneltoolbarBottom',
                style: {

                    // background: '#f44336',
                    background: '#D25959',

                },
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items:
                       [
                           {
                               xtype: 'container',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                      {
                                          xtype: 'button',
                                          id: 'btnClaimDashboardMovemementClaim',
                                          //  iconCls: 'list',
                                          height: 60,
                                          width: 60,
                                          html: '<div ><img src="resources/icons/MileageWhiteLogo.png" width="50px" height="50px" alt="Company Name"/></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              DrawerMenuShow();
                                              //  autoRememberme();
                                              //   Ext.getCmp('mainView').setActiveItem(1);
                                              //loginFromPushNotifiaction();
                                          }
                                      },
                                      {
                                          xtype: 'button',
                                          id: 'btnClaimDashboardMovemementClaimTxt',
                                          margin: '-15 0 0 0',
                                          //  iconCls: 'list',
                                          height: 30,
                                          width: 113,
                                          html: '<div><u><font size=2 color=white><b>Movement Claim</b></font></u></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              DrawerMenuShow();
                                              //  autoRememberme();
                                              //   Ext.getCmp('mainView').setActiveItem(1);
                                              //loginFromPushNotifiaction();
                                          }

                                      }
                               ]

                           },

                               {
                                   xtype: 'container',
                                   margin: '0 0 -25 0',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   items: [
                                          {
                                              xtype: 'button',
                                              id: 'btnClaimDashboardBehaviour',
                                              // badgeText: '1',
                                              height: 40,
                                              width: 40,
                                              html: '<div ><img src="resources/icons/BehaviourWhite.png" width="30" height="30" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                              }
                                          },
                                             {
                                                 xtype: 'button',
                                                 id: 'btnClaimDashboardBehaviourTxt',
                                                 margin: '-15 0 0 0',
                                                 //  iconCls: 'list',
                                                 height: 30,
                                                 width: 100,
                                                 html: '<div><font size=1.5 color=white>Behaviour</font></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     DrawerMenuShow();
                                                     //  autoRememberme();
                                                     //   Ext.getCmp('mainView').setActiveItem(1);
                                                     //loginFromPushNotifiaction();
                                                 }

                                             }

                                   ]


                               },




                       ]
            },



 {
     title: 'Movement Claims',
     style: ' background-color:white;',
     // xtype: 'listgeofenceitems',
     xtype: 'container',
     width: '100%',
     layout: {
         type: 'vbox',
         //pack: 'center',
         //align: 'center',
     },
     listeners: {

         activate: function () {



         }

     },


     items: [


         {
             xtype: 'container',
             hidden: true,
             //  height: 30,
             width: '100%',
             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center',
             },
             items: [

                 {
                     //xtype: 'segmentedbutton',
                     xtype: 'container',
                     layout: {
                         type: 'hbox',
                         //pack: 'center',
                         //align: 'center',
                     },
                     flex: 1,
                     defaults: {
                         flex: 1
                     },
                     items: [

                         {
                             xtype: 'container',
                             style: 'background-color: white;',
                             layout: {
                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center',
                             },
                             items: [
                                  {
                                      xtype: 'button',
                                      text: '<font size=3 color=black>APPROVED</font>',
                                      ui: 'plain',
                                      handler: function () {
                                          Ext.getCmp('tabpanelClaimDashboardApproved').setActiveItem(0);
                                      }
                                  },
                             ]

                         },


                           {
                               xtype: 'container',
                               style: 'background-color: #ECF0F1;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                    {
                                        xtype: 'button',
                                        text: '<font size=3 color=#ABB2B9>REJECTED</font>',
                                        ui: 'plain',
                                        handler: function () {
                                            Ext.getCmp('tabpanelClaimDashboardApproved').setActiveItem(1);
                                        }
                                    },
                               ]

                           },



                     ]
                 },



             ]
         },
         {
             xtype: 'container',
             style: 'background-color: grey;',
             width: '100%',
             height: 1,
             hidden: true,
         },



         {
             xtype: 'tabpanel',
             //  hidden:true,
             id: 'tabpanelClaimDashboardApproved',
             style: 'background-color: transparent;',
             // style: 'background-color: black;',
             //  margin: '-10 0 0 0',
             // margin: '25 0 0 0',

             //width: 200,
             width: '100%',
             height: '100%',
             //  zIndex:200,
             // docked: 'bottom',
             tabBarPosition: 'bottom',
             ui: 'plain',


             initialize: function (c) {
                 this.getTabBar().hide();

             },
             //scrollable: {
             //    direction: 'vertical',
             //    directionLock: true
             //},
             //defaults: {
             //    //scrollable: true,
             //    //layout: 'center',
             //    //userCls: 'card',
             //    tab: {
             //        height: 10
             //    }
             //},
             items: [
                 {

                     xtype: 'container',
                     title: 'Approved Movement',
                     //  hidden:true,
                     id: 'panelDashboardClaim_ApprovedChart',
                     style: 'background-color: white;',
                     //   style: 'background-color: red;',
                     margin: '0 0 0 0',
                     //  margin: '-65 0 0 0',
                     width: '100%',
                     // width: 200,
                     height: '100%',

                     //  docked: 'bottom',

                     layout: {
                         type: 'vbox',

                         //   align: 'left',

                         //   align: 'center',
                         //  pack: 'start'

                     },
                     scrollable: {
                         direction: 'vertical',
                         directionLock: true
                     },
                     items: [

                  {
                      xtype: 'container',
                      style: 'background-color: transparent;',
                      //  hidden:true,
                      width: '100%',
                      height: 33,

                      margin: '-10 0 0 0',
                      layout: {
                          type: 'hbox',
                          pack: 'left',
                          // align: 'start',

                      },

                      items: [

                          {
                              //xtype: 'button',
                              //ui: 'plain',
                              height: 45,
                              width: 45,
                              xtype: 'image',
                              margin: '0 0 0 0',
                              id: 'btnimgDashboard',
                              src: 'resources/icons/iconDashboardMainMenu.png',
                          },
                          {
                              margin: '13 0 0 -3',
                              html: '<u><font size=2><b>Movement Claim</b></font></u>'
                          },
                           //{
                           //    xtype: 'button',
                           //    height: 38,
                           //    width: 150,

                           //    ui: 'plain',
                           //    id: 'btnYearClaimaaa',
                           //    margin: '50 50 0 0',
                           //    // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                           //    html: '<div style="width: 140px; height: 28px; border:1px solid black; border-radius: 50%; max-width:200px;background-color:green"><font size=1px color=white>2019</font></div>',
                           //    handler: function () {






                           //        //   setMyAccountInfo();
                           //    }
                           //},

                      {
                          xtype: 'spacer'
                      },

                      {
                          xtype: 'container',

                          layout: {
                              type: 'vbox',

                          },
                          items: [
                              {
                                  xtype: 'button',
                                  height: 32,
                                  width: 32,
                                  zIndex: 40,
                                  id: 'btnYearClaimCalender',
                                  ui: 'plain',
                                  margin: '12 0 0 30',
                                  // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                  html: '<img src="resources/icons/CalenderClaim.png" style="width: 22px; height: 22px;" />',
                                  handler: function () {






                                      //   setMyAccountInfo();
                                  }

                              },
              {
                  xtype: 'button',
                  height: 88,
                  width: 88,
                  id: 'btnYearClaim',
                  ui: 'plain',

                  margin: '-30 0 0 0',
                  // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                  html: '<div style="width: 78px; height: 78px; border:3px solid white; border-radius: 50%; max-width:200px;background-color:green"><br><font size=5px color=white>2019</font><br><font size=2px color=white>Year</font></div>',
                  handler: function () {






                      //   setMyAccountInfo();
                  }
              },
                          ]
                      },



                      {
                          xtype: 'container',

                          layout: {
                              type: 'vbox',

                          }, items: [
                               {
                                   xtype: 'button',
                                   height: 32,
                                   width: 32,
                                   zIndex: 40,
                                   id: 'btnMonthClaimCalender',
                                   ui: 'plain',
                                   margin: '12 0 0 30',
                                   // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                   html: '<img src="resources/icons/CalenderClaim.png" style="width: 22px; height: 22px;" />',
                                   handler: function () {






                                       //   setMyAccountInfo();
                                   }

                               },
                                {
                                    xtype: 'button',

                                    height: 88,
                                    width: 88,
                                    id: 'btnMonthClaim',
                                    ui: 'plain',
                                    margin: '-30 0 0 0',
                                    // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                    html: '<div style="width: 78px; height: 78px; border:3px solid white; border-radius: 50%; max-width:200px;background-color:green"><br><font size=5px color=white>Dec</font><br><font size=2px color=white>Month</font></div>',
                                },
                          ]
                      }



                      ]
                  },
                 {


                     xtype: 'container',
                     style: 'background-color: green;',
                     id: 'containerHeaderClaim',

                     height: 30,
                     width: '100%',
                     layout: {
                         type: 'hbox',
                         //  align: 'left',

                         //  align: 'center',
                         //  pack: 'start'

                     },
                     items: [
                         {
                             id: 'htmlHeaderClaimTxt',
                             html: '<font size=5px color=white>RM 28.00 </font><br><div style="width: 100px; height: 24px; border:1px solid green; border-radius: 10%;background-color:green;margin:-9px 0px 0px 0px;text-align:center;"><font size=1px color=white>Approved Claim</div>'
                         },


                     ]
                 },


                 //{
                 //    xtype: 'panel',

                 //},

                 ////////////////// aprroved,rejected,submited,not submit


                 {
                     xtype: 'container',
                     // zIndex:-200,
                     width: '100%',
                     layout: {
                         type: 'hbox',
                         align: 'left',

                         //  align: 'center',
                         //  pack: 'start'

                     },
                     items: [


                             {
                                 xtype: 'container',
                                 style: 'background-color: transparent;',
                                 //height: 400,
                                 height: 250,
                                 width: '100%',
                                 margin: '0 0 0 0',
                                 layout: {
                                     type: 'vbox',

                                 },

                                 items: [
                                     {
                                         id: 'htmlMovementStatusTxt',
                                         html: '<div style="margin:15px 0px 0px 5px;z-Index:100"><font size=1 color=black><u><b>Movement Claim Status : </b></u></font><font class="blink_me" size=1 color=black><b><u>Approved</u></b></font></div>'
                                     },

                                     {
                                         id: 'htmlMovementCountTxt',
                                         xtype: 'button',
                                         ui: 'plain',
                                         width: 112,
                                         height: 56,
                                         margin: '100 0 0 124',
                                         //html: '<div style="margin:85px 0px 0px 75px;z-Index:100"><font size=6 color=black><u><b>25</b></u></font><br><font size=1 color=black><b>Movement Count</b></font></div>',
                                         html: '<font size=6 color=black><u><b>25</b></u></font><br><font size=1 color=black><b>Movement Recorded</b></font>',
                                         handler: function () {

                                         }


                                     },
                                     {
                                         // margin: '0 0 0 5',

                                         html: '<div id="piechartMovementClaimStatusDashboard_values" style="width: 550px; height: 400px;margin:-40px 0px 0px -95px;background-color: transparent;"></div>'
                                     },
                                     //{
                                     //    xtype:'spacer'
                                     //}



                                 ]
                             },
                     ]
                 },

{
    xtype: 'container',
    width: '100%',
    margin: '34 0 0 0',
    layout: {
        type: 'hbox',
        align: 'left',
        pack: 'left',
    },
    items: [
         {
             xtype: 'button',
             ui: 'plain',

             width: 60,
             height: 20,
             margin: '0 0 0 22',
             id: 'btnApprovedLegendStatusCountTxt',
             // html: '<div class="blink_me" style:"text-align:center;width:30px;height:30px;margin:0px 0px 50px 0px" ><div style:"margin:0px 0px 30px 0px"><font size=1 color=black>24</font></div><br><div style:"margin:-10px 0px 0px 0px"><font size=1 color=black>Approved</font></div></div>',
             html: '<div class="blink_me"><font size=1 color=black>10</font></div>',
             handler: function () {

             }
         },

         {
             xtype: 'panel',
             width: 20
         },
          {
              xtype: 'button',
              ui: 'plain',

              width: 60,
              height: 20,
              margin: '0 0 0 0',
              id: 'btnRejectedLegendStatusCountTxt',
              // html: '<div class="blink_me" style:"text-align:center;width:30px;height:30px;margin:0px 0px 50px 0px" ><div style:"margin:0px 0px 30px 0px"><font size=1 color=black>24</font></div><br><div style:"margin:-10px 0px 0px 0px"><font size=1 color=black>Approved</font></div></div>',
              html: '<div ><font size=1 color=black>15</font></div>',
              handler: function () {

              }
          },
          {
              xtype: 'panel',
              width: 20
          },
          {
              xtype: 'button',
              ui: 'plain',

              width: 60,
              height: 20,
              margin: '0 0 0 0',
              id: 'btnSubmittedLegendStatusCountTxt',
              // html: '<div class="blink_me" style:"text-align:center;width:30px;height:30px;margin:0px 0px 50px 0px" ><div style:"margin:0px 0px 30px 0px"><font size=1 color=black>24</font></div><br><div style:"margin:-10px 0px 0px 0px"><font size=1 color=black>Approved</font></div></div>',
              html: '<div><font size=1 color=black>25</font></div>',
              handler: function () {

              }
          },
           {
               xtype: 'panel',
               width: 20
           },
          {
              xtype: 'button',
              ui: 'plain',

              width: 60,
              height: 20,
              margin: '0 0 0 0',
              id: 'btnNotSubmittedLegendStatusCountTxt',
              // html: '<div class="blink_me" style:"text-align:center;width:30px;height:30px;margin:0px 0px 50px 0px" ><div style:"margin:0px 0px 30px 0px"><font size=1 color=black>24</font></div><br><div style:"margin:-10px 0px 0px 0px"><font size=1 color=black>Approved</font></div></div>',
              html: '<div><font size=1 color=black>0</font></div>',
              handler: function () {

              }
          },
    ]
},

   {
       xtype: 'container',
       width: '100%',
       margin: '-4 0 0 0',
       layout: {
           type: 'hbox',
           align: 'left',
           pack: 'left',
       },
       items: [
           {
               xtype: 'button',
               ui: 'plain',
               width: 26,
               height: 23,

               id: 'btnApprovedLegendStatus',
               html: '<div class="blink_me" style="background-color: green;width:16px;height:16px;border-radius: 50%;"></div>',
               handler: function () {

               }
           },
            {
                xtype: 'button',
                ui: 'plain',

                width: 60,
                height: 20,
                margin: '0 0 0 -6',
                id: 'btnApprovedLegendStatusTxt',
                // html: '<div class="blink_me" style:"text-align:center;width:30px;height:30px;margin:0px 0px 50px 0px" ><div style:"margin:0px 0px 30px 0px"><font size=1 color=black>24</font></div><br><div style:"margin:-10px 0px 0px 0px"><font size=1 color=black>Approved</font></div></div>',
                html: '<div class="blink_me"><font size=1 color=black>Approved</font></div>',
                handler: function () {

                }
            },
              {
                  xtype: 'button',
                  ui: 'plain',
                  width: 26,
                  height: 23,
                  id: 'btnRjectedLegendStatus',
                  html: '<div style="background-color: red;width:16px;height:16px;border-radius: 50%;"></div>',
                  handler: function () {

                  }
              },
            {
                xtype: 'button',
                ui: 'plain',
                width: 60,
                height: 20,
                margin: '0 0 0 -6',
                id: 'btnRjectedLegendStatusTxt',
                html: '<font size=1 color=black>Rejected</font>',
                handler: function () {

                }
            },
            {
                xtype: 'button',
                ui: 'plain',
                width: 26,
                height: 23,
                id: 'btnSubmittedLegendStatus',
                html: '<div style="background-color: orange;width:16px;height:16px;border-radius: 50%;"></div>',
                handler: function () {

                }
            },
            {
                xtype: 'button',
                ui: 'plain',
                width: 60,
                height: 20,
                margin: '0 0 0 -6',
                id: 'btnSubmittedLegendStatusTxt',
                html: '<font size=1 color=black>Submitted</font>',
                handler: function () {

                }
            },
            {
                xtype: 'button',
                ui: 'plain',
                width: 26,
                height: 23,
                id: 'btnNotSubmittedLegendStatus',
                html: '<div style="background-color: grey;width:16px;height:16px;border-radius: 50%;"></div>',
                handler: function () {

                }
            },
            {
                xtype: 'button',
                ui: 'plain',
                width: 80,
                height: 20,
                id: 'btnNotSubmittedLegendStatusTxt',
                margin: '0 0 0 -6',
                html: '<font size=1 color=black>Not Submitted</font>',
                handler: function () {

                }
            },
       //{
       //    html: '<div style="background-color: red;width:20px;height:20px"></div></div><font size=1 color=black><b>Rejected  |</b></font>'
       //},
       // {
       //     html: '<div style="background-color: orange;width:20px;height:20px"></div></div><font size=1 color=black><b>Submitted  |</b></font>'
       // },
       // {
       //     html: '<div style="background-color: grey;width:20px;height:20px"></div></div><font size=1 color=black><b>Not Submit  |</b></font>'
       // },
       ]

   },


                 ///////////////////


{
    xtype: 'container',
    width: '100%',
    layout: {
        type: 'hbox',
        align: 'left',

        //  align: 'center',
        //  pack: 'start'

    },
    items: [


            {
                xtype: 'container',
                height: 300,
                width: '90%',
                margin: '0 0 0 0',
                layout: {
                    type: 'hbox',
                    pack: 'start'
                },

                items: [
                    {
                        // margin: '-12 0 0 5',
                        html: '<div id="barchartMovementClaimDashboard_values" style="width: 100%; height: 200px;"></div>'
                    },

                ]
            },



        {
            xtype: 'container',
            height: 300,
            width: '10%',
            margin: '0 0 0 0',
            layout: {
                type: 'vbox',

            },

            items: [
                {
                    xtype: 'panel',
                    height: 58,
                },
                {

                    xtype: 'button',
                    height: 32,
                    width: 32,
                    zIndex: 100,
                    id: 'btnClaimParking',
                    ui: 'plain',
                    //  margin: '12 0 0 30',
                    // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                    html: '<img src="resources/icons/clipart-park-park-sign-16.png" style="width: 22px; height: 22px;" />',
                    handler: function () {






                        //   setMyAccountInfo();
                    }


                },
                   {

                       xtype: 'button',
                       height: 32,
                       width: 32,
                       zIndex: 100,
                       id: 'btnClaimAccomodation',
                       ui: 'plain',
                       //  margin: '12 0 0 30',
                       // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                       html: '<img src="resources/icons/homelessness-social-housing-icon-colour.png" style="width: 22px; height: 22px;" />',
                       handler: function () {






                           //   setMyAccountInfo();
                       }


                   },
                      {

                          xtype: 'button',
                          height: 32,
                          width: 32,
                          zIndex: 100,
                          id: 'btnClaimPublicTransport',
                          ui: 'plain',
                          //  margin: '12 0 0 30',
                          // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                          html: '<img src="resources/icons/bus_train_icon.png" style="width: 22px; height: 22px;" />',
                          handler: function () {






                              //   setMyAccountInfo();
                          }


                      },
                         {

                             xtype: 'button',
                             height: 32,
                             width: 32,
                             zIndex: 100,
                             id: 'btnClaimToll',
                             ui: 'plain',
                             //  margin: '12 0 0 30',
                             // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                             html: '<img src="resources/icons/TollIcon.png" style="width: 22px; height: 22px;" />',
                             handler: function () {






                                 //   setMyAccountInfo();
                             }


                         },
                            {

                                xtype: 'button',
                                height: 32,
                                width: 32,
                                zIndex: 100,
                                id: 'btnClaimFuel',
                                ui: 'plain',
                                //  margin: '12 0 0 30',
                                // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                html: '<img src="resources/icons/FuelIcon.png" style="width: 22px; height: 22px;" />',
                                handler: function () {






                                    //   setMyAccountInfo();
                                }


                            },
                               {

                                   xtype: 'button',
                                   height: 32,
                                   width: 32,
                                   zIndex: 100,
                                   id: 'btnClaimMileage',
                                   ui: 'plain',
                                   //  margin: '12 0 0 30',
                                   // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                   html: '<img src="resources/icons/mileagered.png" style="width: 22px; height: 22px;" />',
                                   handler: function () {






                                       //   setMyAccountInfo();
                                   }


                               },

            ]
        },

       //{
       //    xtype: 'container',
       //    height: 300,
       //    width: '100%',
       //    margin: '-200 0 0 0',
       //    layout: {
       //        type: 'vbox',
       //        pack: 'center'
       //    },

       //    items: [
       //        {
       //            margin: '-12 0 0 5',
       //            html: '<div id="barchartPushNotificationsDashboard_values" style="width: 500px; height: 200px;"></div>'
       //        },

       //    ]
       //},



    ]
},

{
    xtype: 'container',
    height: 25,
    width: '100%',
    style: 'border-bottom:1px none grey;',
    margin: '-38 0 0 0',
    layout: {
        type: 'hbox',
        pack: 'center'
    },

    items: [
        {
            xtype: 'spacer'
        },
        {
            html: '<button OnClick="btnViewMovementlistClick({ID})" class="buttonViewDrillDownChart"><img src="resources/icons/claiminfo.png" height="10" width="10">&nbsp;&nbsp;Drill Down</button>'
        },

    ]

},



{
    xtype: 'container',
    width: '100%',
    layout: {
        type: 'hbox',
        align: 'left',

        //  align: 'center',
        //  pack: 'start'

    },
    items: [


            {
                xtype: 'container',
                //  style: 'background-color: green;',
                //height: 400,
                height: 250,
                width: '100%',
                margin: '0 0 0 0',
                layout: {
                    type: 'vbox',

                },

                items: [
                    {
                        html: '<div style="margin:1px 0px 0px 135px;z-Index:50"><font size=1 color=black><b>Movement Vehice</b></font></div>'
                    },
                    {
                        // margin: '0 0 0 5',

                        html: '<div id="barchartMovementVehicleDashboard_values" style="width: 550px; height: 400px;margin:-60px 0px 0px -95px;z-Index:-50"></div>'
                    },
                    //{
                    //    xtype:'spacer'
                    //}

                ]
            },
    ]
},


////////////////////////////////////////


                     {
                         xtype: 'container',
                         style: 'background-color: transparent;',
                         //  hidden:true,
                         width: '100%',
                         height: 33,

                         margin: '0 0 0 0',
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             // align: 'start',

                         },

                         items: [




                         {
                             xtype: 'spacer'
                         },

                         {
                             xtype: 'container',
                             layout: {
                                 type: 'vbox',

                             },
                             items: [
                                 {
                                     xtype: 'button',
                                     height: 32,
                                     width: 32,
                                     zIndex: 100,
                                     id: 'btnYearOnlyClaimCalender',
                                     ui: 'plain',
                                     margin: '12 0 0 30',
                                     // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                                     html: '<img src="resources/icons/CalenderClaim.png" style="width: 22px; height: 22px;" />',
                                     handler: function () {






                                         //   setMyAccountInfo();
                                     }

                                 },
                         {
                             xtype: 'button',
                             height: 88,
                             width: 88,
                             id: 'btnYearOnlyClaim',
                             ui: 'plain',

                             margin: '-30 0 0 0',
                             // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
                             html: '<div style="width: 78px; height: 78px; border:3px solid white; border-radius: 50%; max-width:200px;background-color:green"><br><font size=5px color=white>2019</font><br><font size=2px color=white>Year</font></div>',
                             handler: function () {






                                 //   setMyAccountInfo();
                             }
                         },
                             ]
                         },







                         ]
                     },
{


    xtype: 'container',
    style: 'background-color: green;',
    height: 30,
    width: '100%',
    layout: {
        type: 'hbox',
        //  align: 'left',

        //  align: 'center',
        //  pack: 'start'

    },
    items: [
        {
            html: '<font size=5px color=white>RM 28.00 </font><br><div style="width: 100px; height: 24px; border:1px solid green; border-radius: 10%;background-color:green;margin:-13px 0px 0px 0px;text-align:center"><font size=1px color=white>Total Claim</div>'
        },


    ]
},



///////////////////////////////////////

{
    xtype: 'container',
    width: '100%',
    layout: {
        type: 'hbox',
        align: 'left',

        //  align: 'center',
        //  pack: 'start'

    },
    items: [


            {
                xtype: 'container',
                //  style: 'background-color: green;',
                //height: 400,
                height: 400,
                width: '100%',
                margin: '0 0 0 0',
                layout: {
                    type: 'vbox',

                },

                items: [
                    //{
                    //    margin: '0 0 0 0',
                    //    html: '<div style="margin:1px 0px 0px 135px;z-Index:50"><font size=1 color=black><b>Movement Vehice</b></font></div>'
                    //},
                    {
                        // margin: '0 0 0 5',

                        html: '<div id="barchartMovementYearlyDashboard_values" style="width: 550px; height: 400px;margin:-20px 0px 0px -35px;z-Index:-50"></div>'
                    },
                    //{
                    //    xtype:'spacer'
                    //}

                ]
            },
    ]
},













        //{

        //    xtype: 'button',
        //    height: 32,
        //    width: 32,
        //    zIndex: 100,
        //    id: 'btnClaimMzzileage',
        //    ui: 'plain',
        //    //  margin: '12 0 0 30',
        //    // html: '<img src="resources/icons/CloudReceipt2.png" style="width: 172px; height: 172px; border:1px solid white; border-radius: 50%; max-width:200px;" />',
        //    html: '<img src="resources/icons/mileagered.png" style="width: 22px; height: 22px;" />',
        //    handler: function () {






        //        //   setMyAccountInfo();
        //    }


        //},



                     ]
                 },

                  {

                      xtype: 'container',
                      title: 'Rejected Chart',
                      //  hidden:true,
                      id: 'panelDashboardClaim_RejectedChart',
                      //    style: 'background-color: transparent;',
                      style: 'background-color: black;',
                      // margin: '-20 0 0 -26',
                      //  margin: '-65 0 0 0',
                      width: '100%',
                      // width: 200,
                      height: 130,

                      //  docked: 'bottom',

                      layout: {
                          type: 'vbox',

                          //   align: 'left',

                          //   align: 'center',
                          // pack: 'start'

                      },
                      items: [

                       {
                           html: 'testing2'
                       }
                      ]
                  },
             ]
         }














     ]


 },



  {
      title: 'Behaviour',
      // xtype: 'listgeofenceitems',
      xtype: 'panel',
      listeners: {

          activate: function () {



          }

      },


  },




        ]
    },
    initialize: function () {

        this.getTabBar().hide();

    }
});









