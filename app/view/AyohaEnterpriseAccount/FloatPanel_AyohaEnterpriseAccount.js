
Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount', {

});

var _FloatPanel_AyohaEnterpriseAccount;


var isFloatPanel_AyohaEnterpriseAccountOpen = 'N';

var isFromEnterpriseAccount;



function FloatPanel_AyohaEnterpriseAccount() {

    _FloatPanel_AyohaEnterpriseAccount =
    Ext.create('Ext.Panel', {
        zIndex: 100,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaEnterpriseAccountID',
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
                            _FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
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
                        id: 'containerFloatPanel_AyohaEnterpriseAccountTitleOutter',
                        width: '100%',
                        // hidden:true,
                        docked: 'bottom',

                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [

                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaEnterpriseAccountTitleInner',
                                width: '96%',
                                // hidden:true,
                              //  docked: 'bottom',
                                margin: '0 0 -5 0',
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
                                            xtype: 'container',
                                            id: 'containerFloatPanel_AyohaEnterpriseAccount_MyUserInfo',
                                            width: '33%',
                                            height: 30,
                                            margin: '-13 0 0 0',
                                            // flex: 1,
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
                                                     id: 'btn_FloatPanel_AyohaEnterpriseAccount_MyUserInfo',
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',
                                                     height: 38,
                                                     width: 38,
                                                     html: '<img src="resources/icons/userInfoPurple.png" width="30" height="30" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormEnterpriseAccount').setHidden(true);
                                                         Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormUserEnterprise').setHidden(true);
                                                         Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(0);
                                                         // NotificationsPanelShow();
                                                         //Load_FloatPanel_AyohaEnterpriseAccount_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                         //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(1);
                                                         //Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                         //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=#FAFAFA><b>Redeem History</b></font>');
                                                         //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=purple><b><u>Stamp History</u></b></font>');
                                                         //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=#FAFAFA><b>Point History</b></font>');
                                                         //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=#FAFAFA><b>Customer Info</b></font>');

                                                         //  LoyaltyCardRedeemListShow();
                                                     }
                                                 },
                                                  {
                                                      margin: '-12 0 0 0',
                                                      // id: 'htmlStampHistoryTxt',
                                                      html: '<font size=1 color=grey><b>User Info</b></font>'
                                                  },

                                            ]
                                        },


                                        {
                                            xtype: 'container',
                                            id: 'containerFloatPanel_AyohaEnterpriseAccountTitle_MyEnterprise',
                                            width: '33%',
                                            height: 30,
                                            margin: '-13 0 0 0',
                                            //width: '33.3%',
                                            //height: 45,
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
                                                     id: 'btnFloatPanel_AyohaEnterpriseAccount_MyEnterprise',
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',
                                                     height: 38,
                                                     width: 38,
                                                     html: '<img src="resources/icons/enterprisePurple.png" width="30" height="30" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         // NotificationsPanelShow();
                                                         // LoyaltyCardRedeemListShow();
                                                         Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormEnterpriseAccount').setHidden(false);
                                                         Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormUserEnterprise').setHidden(true);

                                                         Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(1);
                                                         Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseHQAccNoStore();
                                                         //Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Customer Info</b></font>');
                                                         //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=#FAFAFA><b>Redeem History</b></font>');
                                                         //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
                                                         //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
                                                         //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>Customer Info</u></b></font>');


                                                     }
                                                 },
                                                  {
                                                      margin: '-12 0 0 0',
                                                      // id: 'htmlCustomerInfoTxt',
                                                      html: '<font size=1 color=grey><b>My Enterprise</b></font>'
                                                  },

                                            ]
                                        },



                                        {
                                            xtype: 'container',
                                            id: 'containerFloatPanel_AyohaEnterpriseAccount_MyStaff',
                                            width: '33%',
                                            height: 30,
                                            margin: '-13 0 0 0',
                                            // flex: 1,
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
                                                     id: 'btn_FloatPanel_AyohaEnterpriseAccount_MyStaff',
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',
                                                     height: 38,
                                                     width: 38,
                                                     html: '<img src="resources/icons/loginlistPurple.png" width="30" height="30" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormEnterpriseAccount').setHidden(true);
                                                         Ext.getCmp('ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormUserEnterprise').setHidden(false);
                                                         Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(2);
                                                         Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
                                                         // NotificationsPanelShow();
                                                         //Load_FloatPanel_AyohaEnterpriseAccount_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                         //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(1);
                                                         //Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                         //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=#FAFAFA><b>Redeem History</b></font>');
                                                         //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=purple><b><u>Stamp History</u></b></font>');
                                                         //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=#FAFAFA><b>Point History</b></font>');
                                                         //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=#FAFAFA><b>Customer Info</b></font>');

                                                         //  LoyaltyCardRedeemListShow();
                                                     }
                                                 },
                                                  {
                                                      margin: '-12 0 0 0',
                                                      // id: 'htmlStampHistoryTxt',
                                                      html: '<font size=1 color=grey><b>Login List</b></font>'
                                                  },

                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            hidden: true,
                                            id: 'containerFloatPanel_AyohaEnterpriseAccountStampPointHistory',
                                            //width: '33.3%',
                                            //height: 45,
                                            flex: 1,
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
                                                     id: 'btnStampPointHistory_FloatPanel_AyohaEnterpriseAccount',
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',
                                                     height: 40,
                                                     width: 40,
                                                     html: '<img src="resources/icons/pointPurpleOne.png" width="30" height="30" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         // NotificationsPanelShow();
                                                         //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(2);
                                                         //Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Points History</b></font>');
                                                         //Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                         //Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
                                                         //Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=purple><b><u>Point History</u></b></font>');
                                                         //Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=grey><b>Customer Info</b></font>');
                                                         //  LoyaltyCardRedeemListShow();
                                                     }
                                                 },
                                                  {
                                                      margin: '-12 0 0 0',
                                                      id: 'htmlPointHistoryTxt',
                                                      html: '<font size=1 color=grey><b>Point History</b></font>'
                                                  },

                                            ]
                                        },
                                        {
                                            xtype: 'container',
                                            id: 'containerFloatPanel_AyohaEnterpriseAccountTitleRedeemHistory',
                                            hidden: true,
                                            //width: '33.3%',
                                            //height: 45,
                                            flex: 1,
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
                                                     id: 'btnRedeemHistory_FloatPanel_AyohaEnterpriseAccountBottom',
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',
                                                     height: 40,
                                                     width: 40,
                                                     html: '<img src="resources/icons/redeemHistory.png" width="30" height="30" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         // NotificationsPanelShow();




                                                         //  LoyaltyCardRedeemListShow();
                                                     }
                                                 },
                                                  {
                                                      margin: '-12 0 0 0',
                                                      id: 'htmlRedeemHistoryTxt',
                                                      html: '<font size=1 color=grey><b>Redeem History</b></font>'
                                                  },

                                            ]
                                        },

                                ]

                            },


                        ]

                    },
                    






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

                                id: 'containerFloatPanel_AyohaEnterpriseAccountHeader',
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
                                                         id: 'btnFloatPanel_AyohaEnterpriseAccountBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
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
                                                         id: 'htmlFloatPanel_AyohaEnterpriseAccount_TitleHeaderTxt',
                                                         html: '<font size=2 color=white><b>Enterprise Info</b></font>'
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
                                                                  id: 'containerFloatPanel_AyohaEnterpriseAccountHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_AyohaEnterpriseAccountHaiUser',
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
                                                                          id: 'containerFloatPanel_AyohaEnterpriseAccounteWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_AyohaEnterpriseAccounteWallet',
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
                                                               id: 'containerFloatPanel_AyohaEnterpriseAccountPictureUser',
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
                                                                       id: 'btnFloatPanel_AyohaEnterpriseAccountInfo',
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
                                  id: 'tabpanelFloatPanel_AyohaEnterpriseAccount',
                                  style: "background-color: transparent;",
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
                  id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterpriseInformation',
                  width: '100%',
                  height: '95%',
                  //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                  style: "background-color: transparent;",
                  //style: "background-color: #F35B57;",
                  title: 'FloatPanel_AyohaEnterpriseAccountMaster',
                  layout: {
                      type: 'vbox',
                      pack: 'start',
                      align: 'center'

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
                                      Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(1);
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
                          style: "background-color: transparent",
                          margin: '0 0 0 0',
                          width: '100%',
                          layout: {
                              type: 'vbox',
                              pack: 'start',
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

                   //{
                   //    margin: '0 0 0 0',

                   //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>',

                   //},

                           //{
                           //    xtype: 'container',
                           //    height: 1,
                           //    width: '80%',
                           //    style: {

                           //        background: 'white',

                           //    },
                           //    layout: {
                           //        type: 'hbox',
                           //        pack: 'center',
                           //        align: 'center'

                           //    },
                           //},





{
    xtype: 'container',
    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },
    items: [
         {
             margin: '3 0 0 0',

             html: '<font size=3 color=white>User Profile</font>',

         },
          {
              margin: '2 0 0 0',
              height: 150,
              width: 150,
              id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisePicProfile',
              html: '<img src="resources/icons/defaultImgPicProfileTwoWhite.png" width="150" height="150"/>',
          },





          {
              xtype: 'container',
              width: '100%',
              style: ' background-color:transparent',
              layout: {
                  type: 'hbox',
                  pack: 'start',
                  align: 'center'

              },
              items: [

                       {
                           xtype: 'container',

                           width: '90%',
                           style: {

                               background: 'transparent',

                           },
                           layout: {
                               type: 'vbox',
                               pack: 'left',
                               align: 'left'

                           },
                           items: [


                               {
                                   xtype: 'container',

                                   width: '100%',
                                   style: {

                                       background: 'transparent',

                                   },
                                   layout: {
                                       type: 'hbox',
                                       pack: 'start',
                                       align: 'center'

                                   },
                                   items: [
                                         {
                                             margin: '3 0 0 0',
                                             hidden:true,
                                             html: '<font size=2 color=white>*Uploaded Image</font>',

                                         },


                                   ]
                               },


            {
                id: 'HtmlinputImgFloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadedPhoto',
                hidden: true,
                margin: '0 0 0 0',
                width: '100%',
                html: '<input type="file" id="inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadedPhoto" accept="image/*"  onchange="inputImgFloatPanel_AyohaEnterpriseAccountUserEnterpriseUploadedProfileImg()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





            },





            {
                margin: '-2 0 0 0',

                id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhotoName',
                width: '100%',
                height: 20,
                html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhotoName"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: right;font-size:12px;">'


            },

                           ]

                       },


                        //{
                        //    xtype:'container'

                        //},
                          {
                              xtype: 'button',
                              id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadPhoto',
                              name: 'clickablebtnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadPhoto',
                              //  badgeText: '1',
                              margin: '0 0 -10 0',
                              height: 35,
                              width: 35,
                              html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {

                              }
                          },

              ]

          },

         {
             margin: '-2 0 0 0',
             hidden:true,
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoto',
             width: '80%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoto"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


         },
        {
            margin: '3 0 0 0',
            hidden: true,
            html: '<font size=2 color=white>ID</font>',

        },

         {
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseID',
             hidden: true,
             margin: '-2 0 0 0',
             width: '80%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseID"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


         },



          {
              margin: '3 0 0 0',
              hidden: true,
              html: '<font size=2 color=white>Account No</font>',

          },

         {
             //margin: '-2 0 0 0',
             //id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoneNumber',
             //margin: '-2 0 0 0',
             //width: '80%',
             //height: 20,
             //html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoneNumber"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;">'

             hidden: true,
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountNo',
             margin: '-2 0 0 0',
             width: '80%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'



         },

         {
             margin: '3 0 0 0',
             //hidden: true,
             html: '<font size=2 color=white>Account Name</font>',

         },

         {
             //hidden: true,
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountName',
             margin: '-2 0 0 0',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


         },



         {
             margin: '3 0 0 0',

             html: '<font size=2 color=white>Email</font>',

         },

         {

             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseEmail',
             margin: '-2 0 0 0',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseEmail"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


         },





         {
             margin: '3 0 0 0',

             html: '<font size=2 color=white>Phone Number</font>',

         },

         {
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoneNumber',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoneNumber"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


         },


         {
             xtype: 'container',
             width: '100%',
             style: ' background-color:transparent',
             layout: {
                 type: 'hbox',
                 pack: 'start',
                 align: 'center'

             },
             items: [

                      {
                          xtype: 'container',

                          width: '90%',
                          style: {

                              background: 'transparent',

                          },
                          layout: {
                              type: 'vbox',
                              pack: 'left',
                              align: 'left'

                          },
                          items: [


                              {
                                  xtype: 'container',

                                  width: '100%',
                                  style: {

                                      background: 'transparent',

                                  },
                                  layout: {
                                      type: 'hbox',
                                      pack: 'start',
                                      align: 'center'

                                  },
                                  items: [
                                  {
                                      margin: '3 0 0 0',

                                      html: '<font size=2 color=white>Date Of Birth</font>',

                                  },



                                  ]
                              },




        {
            margin: '-2 0 0 0',
            id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserType',
            width: '100%',
            height: 20,
            html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDOB" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

        },


                          ]

                      },


                       //{
                       //    xtype:'container'

                       //},
                         {
                             xtype: 'button',
                             id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserDOB',
                             //  badgeText: '1',
                             margin: '0 0 -10 0',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                               
                             }
                         },

             ]

         },



         {
             margin: '3 0 0 0',

             html: '<font size=2 color=white>Register Date</font>',

         },

         {
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseARegisterDate',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseRegisterDate" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

         },




         {
             margin: '3 0 0 0',
             hidden: true,
             html: '<font size=2 color=white>IsUserVerified</font>',

         },

         {
             hidden: true,
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseIsUserVerified',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseIsUserVerified"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },



         {
             margin: '3 0 0 0',
             hidden: true,
             html: '<font size=2 color=white>VerifyString</font>',

         },

         {
             hidden: true,
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseVerifyString',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseVerifyString"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },
         {
             margin: '3 0 0 0',
             hidden: true,
             html: '<font size=2 color=white>Verify Date</font>',

         },

         {
             hidden: true,
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseVeriyDate',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseVeriyDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },




          {
              margin: '3 0 0 0',
              hidden: true,
              html: '<font size=2 color=white>ModifiedBy</font>',

          },

         {
             hidden: true,
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseModifiedBy',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseModifiedBy"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },
         {
             margin: '3 0 0 0',
             hidden: true,
             html: '<font size=2 color=white>ModifiedDate</font>',

         },

         {
             hidden: true,
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseModifiedDate',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseModifiedDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },
          {
              margin: '3 0 0 0',
              hidden: true,
              html: '<font size=2 color=white>EnterpriseAccNo</font>',

          },

         {
             hidden: true,
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseEnterpriseAccNo',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseEnterpriseAccNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },



        
         






               {
                   xtype: 'container',
                   width: '100%',
                   style: ' background-color:transparent',
                   layout: {
                       type: 'hbox',
                       pack: 'start',
                       align: 'center'

                   },
                   items: [

                            {
                                xtype: 'container',

                                width: '90%',
                                style: {

                                    background: 'transparent',

                                },
                                layout: {
                                    type: 'vbox',
                                    pack: 'left',
                                    align: 'left'

                                },
                                items: [


                                    {
                                        xtype: 'container',

                                        width: '100%',
                                        style: {

                                            background: 'transparent',

                                        },
                                        layout: {
                                            type: 'hbox',
                                            pack: 'start',
                                            align: 'center'

                                        },
                                        items: [
                                        {
                                            margin: '3 0 0 0',

                                            html: '<font size=2 color=white>User Type</font>',

                                        },



                                        ]
                                    },




              {
                  margin: '-2 0 0 0',
                  id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserType',
                  width: '100%',
                  height: 20,
                  html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserType" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

              },


                                ]

                            },


                             //{
                             //    xtype:'container'

                             //},
                               {
                                   xtype: 'button',
                                   id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserType',
                                   //  badgeText: '1',
                                   margin: '0 0 -10 0',
                                   height: 35,
                                   width: 35,
                                   html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                   ui: 'plain',
                                   handler: function () {
                                       isFromEnterpriseAccount = 'Y';
                                       FloatPanel_EnterprisesUserTypeListShow();
                                   }
                               },

                   ]

               },

       

        



         {
             xtype: 'container',
             width: '100%',
             style: ' background-color:transparent',
             layout: {
                 type: 'hbox',
                 pack: 'start',
                 align: 'center'

             },
             items: [

                      {
                          xtype: 'container',

                          width: '90%',
                          style: {

                              background: 'transparent',

                          },
                          layout: {
                              type: 'vbox',
                              pack: 'left',
                              align: 'left'

                          },
                          items: [


                              {
                                  xtype: 'container',

                                  width: '100%',
                                  style: {

                                      background: 'transparent',

                                  },
                                  layout: {
                                      type: 'hbox',
                                      pack: 'start',
                                      align: 'center'

                                  },
                                  items: [
                                   {
                                       margin: '3 0 0 0',

                                       html: '<font size=2 color=white>UserStatus</font>',

                                   },



                                  ]
                              },




        {
            margin: '-2 0 0 0',
            id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserStatus',
            width: '100%',
            height: 20,
            html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserStatus"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

        },


                          ]

                      },


                       //{
                       //    xtype:'container'

                       //},
                         {
                             xtype: 'button',
                             id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserStatus',
                             //  badgeText: '1',
                             margin: '0 0 -10 0',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                                 isFromEnterpriseAccount = 'Y';
                                 FloatPanel_EnterprisesUserStatusListShow();
                             }
                         },

             ]

         },






         {
             margin: '3 0 0 0',

             html: '<font size=2 color=white>LastLoginDate</font>',

         },

         {
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseLastLoginDate',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseLastLoginDate" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

         },

{
    xtype: 'container',

    width: '100%',
    style: {

        background: 'transparent',

    },
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items: [




{
    xtype: 'button',
    flex: 1,
    //  align: 'stretch',

    ui: 'plain',
    //  width: '100%',
    height: 50,
    margin: '7 0 0 0',
    id: 'btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseSave',
    // width: '100%',
    //style: {
    //    background: '#FA8072',
    //},
    // padding: '10px',
    //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
    text: '<button class="buttonStampCampaignCreate">Update</button>',

    handler: function () {
        SaveAyohaEnterpriseUser();
        //var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
        //if (valTextOne) {

        //    SaveTextCardContent();

        //} else {
        //    Swal.fire({
        //        position: 'center',
        //        icon: 'error',
        //        title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
        //        showConfirmButton: true,
        //        // timer: 2500
        //    });
        //}






    },


},
    ]
},

 {
     margin: '6 0 0 0',

     html: '<font size=3 color=white>Login</font>',

 },


  {
      margin: '6 0 0 0',

      html: '<font size=2 color=white>UserName</font>',

  },

         {
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserName',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserName"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

         },
         {
             margin: '3 0 0 0',

             html: '<font size=2 color=white>Password</font>',

         },

         {
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisePassword',
             width: '100%',
             height: 20,
             html: '<input type="password" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },


         
         {
             hidden:true,
             margin: '-2 0 0 0',
             id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisePasswordTxt',
             width: '100%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePasswordTxT"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

         },

         

         {
             xtype: 'container',

             width: '100%',
             style: {

                 background: 'transparent',

             },
             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'

             },
             items: [




         {
             xtype: 'button',
             flex: 1,
             //  align: 'stretch',
             hidden:true,
             ui: 'plain',
             //  width: '100%',
             height: 50,
             margin: '7 0 0 0',
             id: 'btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseSaveLogin',
             // width: '100%',
             //style: {
             //    background: '#FA8072',
             //},
             // padding: '10px',
             //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
             text: '<button class="buttonStampCampaignCreate">Save</button>',

             handler: function () {
                 SaveAyohaEnterpriseUserUpdatePassword();
                 //var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
                 //if (valTextOne) {

                 //    SaveTextCardContent();

                 //} else {
                 //    Swal.fire({
                 //        position: 'center',
                 //        icon: 'error',
                 //        title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
                 //        showConfirmButton: true,
                 //        // timer: 2500
                 //    });
                 //}






             },


         },






         {
             xtype: 'button',
             flex: 1,
             //  align: 'stretch',

             ui: 'plain',
             //  width: '100%',
             height: 50,
             margin: '7 0 0 0',
             id: 'btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseShowPassword',
             // width: '100%',
             //style: {
             //    background: '#FA8072',
             //},
             // padding: '10px',
             //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
             text: '<button class="buttonStampCampaignCreate">Change Password</button>',

             handler: function () {
                 FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordShow();
                 //var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
                 //if (valTextOne) {

                 //    SaveTextCardContent();

                 //} else {
                 //    Swal.fire({
                 //        position: 'center',
                 //        icon: 'error',
                 //        title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
                 //        showConfirmButton: true,
                 //        // timer: 2500
                 //    });
                 //}






             },


         },
             ]
         },













    ]
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

          },








                          ]

                      },












                  ]

              },
              ///////////////////////////////////


              {
                  xtype: 'container',
                  id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterprisesList',
                  width: '100%',
                  height: '95%',
                  //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                  style: "background-color: transparent;",
                  //style: "background-color: #F35B57;",
                  title: 'FloatPanel_AyohaEnterpriseAccount_EnterprisesList',
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
                  //                    Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(0);
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
                                 margin: '30 0 0 0',
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
                                                    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">MY ENTERPRISE(S)</div>',
                                                },
                                                 {
                                                     margin: '-10 0 0 0',
                                                     id: 'htmlEnterprisesListCount',
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
                                                     id: 'btnEnterprisesListLog',
                                                     //badgeText: "2",
                                                     html: '<img src="resources/icons/dashboardEnterprise.png" width="50" height="50" alt="Company Name">',
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
                                 xtype: 'list',
                                 //flex:1,
                                 height: '95%',
                                 store: 'EnterprisesLoadByEnterpriseHQAccNoStore',
                                 id: 'FloatPanel_AyohaEnterpriseAccount_EnterprisesListListID',
                                 mode: 'SINGLE',                               
                                 disableSelection: true,
                                 itemTpl: '<div class="myContent" style="width:99%;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
                                //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                                 '<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-7px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div></th></tr><tr></tr></thead></table>' +


                                   '</div>',
                                 width: '100%',
                                 listeners: {
                                     itemsingletap: function (list, idx, target, records, evt) {
                                         isAddNewEnterprise = 'N';
                                         var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                         FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsShow(EnterpriseAccNo);
                                         //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(2);
                                         //Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseAccNoStore();
                                     },
                                     deselect: function (list, records) {

                                     }
                                 },

                             },

                        ]
                    },


                  ]

              },









              /////////////////////



              {
                  xtype: 'container',
                  id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterprisesList',
                  width: '100%',
                  height: '95%',
                  //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                  style: "background-color: transparent;",
                  //style: "background-color: #F35B57;",
                  title: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisesList',
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
                  //                    Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(0);
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
                                 margin: '30 0 0 0',
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
                                                    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">LOGIN LIST(S)</div>',
                                                },
                                                 {
                                                     margin: '-10 0 0 0',
                                                     id: 'htmlUserEnterprisesListCount',
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
                                                     id: 'btnUserEnterprisesListLog',
                                                     //badgeText: "2",
                                                     html: '<img src="resources/icons/dashboardUserList.png" width="50" height="50" alt="Company Name">',
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
                                 xtype: 'list',
                                 //flex:1,
                                 height: '95%',
                                 store: 'AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore',
                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterprisesListListID',
                                 mode: 'SINGLE',
                                 disableSelection: true,
                                 itemTpl: '<div class="myContent">' +
                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{AccountName}<br>{UserType}</div>' +

                                   '</div>',
                                 width: '100%',
                                 listeners: {
                                     itemsingletap: function (list, idx, target, records, evt) {
                                         isAddNewUserEnterprise = 'N';
                                         var AccountNo = records.get('AccountNo');
                                         FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsShow(AccountNo);
                                         //Load_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo);
                                         //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(2);
                                         //Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseAccNoStore();
                                     },
                                     deselect: function (list, records) {

                                     }
                                 },

                             },

                        ]
                    },


                  ]

              },












              /////////////////////////////

              




























                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterpriseStampPointTransactionLog',
                                           width: '100%',
                                           height: '95%',
                                           //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                           style: "background-color: transparent;",
                                           //style: "background-color: #F35B57;",
                                           title: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseStampPointTransactionLog',
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
                                           //                    Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(0);
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
                                                                             html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">TOTAL STAMPS</div>',
                                                                         },
                                                                          {
                                                                              margin: '-10 0 0 0',
                                                                              id: 'htmlUserEnterpriseStampPointTransactionLogCount',
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
                                                                              id: 'btnUserEnterpriseStampPointTransactionLog',
                                                                              //badgeText: "2",
                                                                              html: '<img src="resources/icons/StampDashboard.png" width="50" height="50" alt="Company Name">',
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
                                                                         html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Stamped Date&By</div>'
                                                                     },

                                                                     {

                                                                         width: '50%',
                                                                         html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
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
                                                          store: 'LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore',
                                                          id: 'UserEnterpriseStampPointTransactionLogListID',
                                                          mode: 'SINGLE',
                                                          grouped: true,
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
                                                           '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</div>' +


                                                             // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 74px" class="tg"><colgroup><col style="width: 49px"><col style="width: 25px"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal"></th></tr></thead></table>'
                                                            // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
                                                         //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


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
                        height: 1,
                        docked: 'bottom',
                        hidden:true,
                        id:'ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormEnterpriseAccount',
                       // margin: '0 20 60 0',
                        width: '100%',
                 
                        layout: {
                            type: 'hbox',
                            pack: 'right',
                            align: 'right'
                        },
                        items: [
                               {

                                   xtype: 'container',
                                   margin: '0 20 30 0',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',

                                   style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',
                                  // docked: 'bottom',
                                   height: 35,
                                   width: 150,

                                 



                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   height: 60,
                                   width: 60,
                                   items: [
                                             {

                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_AyohaEnterpriseAccount_AddFormEnterpriseAccount',
                                                 margin: '-3 0 0 -5',
                                                 height: 70,
                                                 width: 70,
                                                 html: '<img src="resources/icons/AddEnterprisePurple.png" width="30" height="30" alt="Company Name">',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     isAddNewEnterprise = 'Y';                                                     
                                                     FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsAddNewShow();
                                                    
                                                  
                                                 }
                                             },


                                   ]






                               }
                            
                        ]
                        
                    },
                    {
                        xtype: 'container',
                        height: 1,
                        docked: 'bottom',
                        hidden: true,
                        id: 'ContainerbtnFloatPanel_AyohaEnterpriseAccount_AddFormUserEnterprise',
                        // margin: '0 20 60 0',
                        width: '100%',

                        layout: {
                            type: 'hbox',
                            pack: 'right',
                            align: 'right'
                        },
                        items: [
                               {

                                   xtype: 'container',
                                   margin: '0 20 30 0',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',

                                   style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',
                                   // docked: 'bottom',
                                   height: 35,
                                   width: 150,





                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   height: 60,
                                   width: 60,
                                   items: [
                                             {

                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_AyohaEnterpriseAccount_AddFormUserEnterprise',
                                                 margin: '-3 0 0 -5',
                                                 height: 70,
                                                 width: 70,
                                                 html: '<img src="resources/icons/AddNewUserEnterpriseWhite.png" width="30" height="30" alt="Company Name">',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     // isAddNewEnterprise = 'Y';                                                     
                                                     //FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsAddNewShow();

                                                     isAddNewUserEnterprise = 'Y';
                                                     FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAddNewShow();
                                                 }
                                             },


                                   ]






                               }

                        ]

                    },

                ]
            },












        ]





    });
    return _FloatPanel_AyohaEnterpriseAccount;



}








function FloatPanel_AyohaEnterpriseAccountShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount());
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccountOpen = 'Y';


    Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').getTabBar().hide();
   
   // Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseAccNoStore();
    Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoginStore()








    var containerViewPicProfile = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadPhoto]')[0];
    var containerViewElPicProfile = containerViewPicProfile.element;
    containerViewElPicProfile.on('singletap',
      function (event, node, options, eOpts) {

          uploadUserEnterpriseProfileImg();
      }
    );




}





function FloatPanel_AyohaEnterpriseAccountHide() {
    _FloatPanel_AyohaEnterpriseAccount.hide(); isFloatPanel_AyohaEnterpriseAccountOpen = 'N';
}



//var StampCount;

function Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseHQAccNoStore() {
 
    Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),
       
    });
    Ext.StoreMgr.get('EnterprisesLoadByEnterpriseHQAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('EnterprisesLoadByEnterpriseHQAccNoStore').load();
        var myStore = Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore');
        var count = myStore.getCount();
        Ext.getCmp('htmlEnterprisesListCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');
       

        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}


function Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore() {
  
    Ext.getStore('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

    });
    Ext.StoreMgr.get('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore').load();
        var myStore = Ext.getStore('AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore');
        var count = myStore.getCount();
         Ext.getCmp('htmlUserEnterprisesListCount').setHtml('<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">' + count + '</div>');
   

        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}




function Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoginStore() {
    var UN = document.getElementById('UN').value;
    var PWD = document.getElementById('PW').value;
    console.log(UN);
    console.log(PWD);
    Ext.getStore('AyohaEnterprisesUserLoginStore').getProxy().setExtraParams({
        UseName: UN,
        Password: PWD,
        LoginOS: localStorage.getItem('device_platform'),
        LoginIP: localStorage.getItem('device_ip'),
        PhoneModel: localStorage.getItem('device_model'),
        PhoneImeiNo: localStorage.getItem('device_uuid'),
        PhoneVersion: localStorage.getItem('device_version'),
        PhonePlatform: localStorage.getItem('device_platform'),
        PhonePlatformVersion: localStorage.getItem('device_version'),
        PhoneManufacturer: localStorage.getItem('device_manufacturer'),
        PhoneSerial: GetCurrentdeviceserial(),
        RawPhoneInfo: localStorage.getItem('SimInfo'),
        PlayerID: localStorage.getItem('player_id'),
        
        });
    Ext.StoreMgr.get('AyohaEnterprisesUserLoginStore').load();
        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getStore('AyohaEnterprisesUserLoginStore').getProxy().setExtraParams({
                UseName: UN,
                Password: PWD,
                LoginOS: localStorage.getItem('device_platform'),
                LoginIP: localStorage.getItem('device_ip'),
                PhoneModel: localStorage.getItem('device_model'),
                PhoneImeiNo: localStorage.getItem('device_uuid'),
                PhoneVersion: localStorage.getItem('device_version'),
                PhonePlatform: localStorage.getItem('device_platform'),
                PhonePlatformVersion: localStorage.getItem('device_version'),
                PhoneManufacturer: localStorage.getItem('device_manufacturer'),
                PhoneSerial: GetCurrentdeviceserial(),
                RawPhoneInfo: localStorage.getItem('SimInfo'),
                PlayerID: localStorage.getItem('player_id'),
            });
            Ext.StoreMgr.get('AyohaEnterprisesUserLoginStore').load();
            var myStore = Ext.getStore('AyohaEnterprisesUserLoginStore');
            var modelRecord = myStore.getAt(0);




           // Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseLogo').setHtml('<img src="'+modelRecord.get('EnterpriseLogoPath')+'" width="160" height="160"/>')
           
            Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterprisePicProfile').setHtml('<img src=' + modelRecord.get('Photo') + '  style="width:150px;height:150px;border-radius: 50%;"/>');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhotoName').value = modelRecord.get('PhotoName');
           // document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoto').value = modelRecord.get('Photo');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseID').value = modelRecord.get('AyohaEnterpriseUserID');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountNo').value = modelRecord.get('AccountNo');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountName').value = modelRecord.get('AccountName');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseEmail').value = modelRecord.get('Email');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoneNumber').value = modelRecord.get('PhoneNumber');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDOB').value = modelRecord.get('DOB');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseRegisterDate').value = modelRecord.get('RegisterDate');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseIsUserVerified').value = modelRecord.get('IsUserVerified');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseVerifyString').value = modelRecord.get('VerifyString');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseVeriyDate').value = modelRecord.get('VeriyDate');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseModifiedBy').value = modelRecord.get('ModifiedBy');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseModifiedDate').value = modelRecord.get('ModifiedDate');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseEnterpriseAccNo').value = modelRecord.get('EnterpriseAccNo');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserType').value = modelRecord.get('UserType');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserStatus').value = modelRecord.get('UserStatus');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseLastLoginDate').value = modelRecord.get('LastLoginDate');
            

            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserName').value = modelRecord.get('UseName');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePassword').value = modelRecord.get('Password');
            document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePasswordTxT').value = modelRecord.get('Password');
            localStorage.setItem('EnterpriseHQAccNo', modelRecord.get('EnterpriseHQAccNo'));
            localStorage.setItem('EnterpriseAccNo', modelRecord.get('EnterpriseAccNo'));
            Ext.Viewport.setMasked(false);








        });
        task.delay(1000);
    }




var globalEnterpriseLogoImageBase64;
var globalFloatPanel_AyohaEnterpriseAccount_ID;







function uploadUserEnterpriseProfileImg() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadedPhoto").click();
    });
}



var globalUserEnterpriseProfileImgImageBase64

function inputImgFloatPanel_AyohaEnterpriseAccountUserEnterpriseUploadedProfileImg() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadedPhoto').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUploadedPhoto').files[0].name;

    var FileSize = file.size / 1024; // in MB
    //alert(FileSize);
    if (FileSize > 20480) {


        swalFireFail("Image size cannot exceeds 20 MB!");
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalUserEnterpriseProfileImgImageBase64 = event.target.result;
                    document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhotoName').value = fileName;
                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterprisePicProfile').setHtml('<img src=' + globalUserEnterpriseProfileImgImageBase64 + '  style="width:150px;height:150px;border-radius: 50%;"/>')
                   

                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                    // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}








function SaveAyohaEnterpriseUser() {

    var imgbase64;

    if (globalUserEnterpriseProfileImgImageBase64) {
        imgbase64 = globalUserEnterpriseProfileImgImageBase64;
    } else {
        imgbase64 = "ExistingImage";
    }

   
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "AyohaEnterpriseUserID": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseID').value,
        "AccountNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountNo').value,
        "AccountName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountName').value,
        "UseName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserName').value,
        "Password": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePassword').value,
        "Email": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseEmail').value,
        "PhoneNumber": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhoneNumber').value,
        "PicProfilePhoto64": imgbase64,
        "ModifiedBy": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserName').value,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "UserType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserType').value,
        "UserStatus": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserStatus').value,
        "PhotoName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePhotoName').value,
        "DOB": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDOB').value,
        "SerialPhoneNo": GetCurrentdeviceserial(),
        "RowActive":"Active"
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaEnterprisesUser/AyohaEnterprisesUserInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Succesfully!");



            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}




function SaveAyohaEnterpriseUserUpdatePassword() {

   

    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "AyohaEnterpriseUserID": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseID').value,
        "AccountNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseAccountNo').value,
        "ModifiedBy": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseUserName').value,
        "Password": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePassword').value,        
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaEnterprisesUser/AyohaEnterprisesUserUpdatePassword',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Succesfully!");



            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}










function SaveAyohaEnterpriseAccount() {

    var imgbase64;

    if (globalEnterpriseLogoImageBase64) {
        imgbase64 = globalEnterpriseLogoImageBase64;
    } else {
        imgbase64 = "ExistingImage";
    }
   

    var gile = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_BusinessType').value;
    console.log(gile);
    var ImgPaths = "http://42.1.63.57/AyohaImgCard/Logo/" + GetEnterpriseAccNo() + "/" + document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseLogoName').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalFloatPanel_AyohaEnterpriseAccount_ID,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "EnterpriseName":  document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseName').value,
        "EnterpriseAddress": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_Address').value,
        "EnterprisePhoneNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterprisePhoneNo').value,
        "EnterpriseRegistrationNo":document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseRegistrationNo').value,
        "EnterpriseEmail": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseEmail').value,
        "EnterpriseWebsite": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseWebsite').value,
        "EnterpriseDescriptions":document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDescriptions').value,
        "EnterpriseFacebook": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseFacebook').value,
        "EnterpriseTwiter": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseTwitter').value,
        "EnterpriseInstagram": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseInstagram').value,
        "EnterpriseCoordinate": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseCoordinate').value,
        "EnterpriseLogoPath": ImgPaths,
        "EnterpriseLogoName":document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseLogoName').value,
        "RowStatus": "Active",
        "CreatedBy": document.getElementById('UN').value,
        "PICContactNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_PersonInChargeContactNo').value,
        "PersonInCharge":  document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_PersonInCharge').value,
        "LoyaltyCardType":  document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_LoyaltyCardType').value,
        "EnterpriseType":document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseType').value ,
        "EnterpriseBusinessType": gile,
        "AyohaVersion": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseVersion').value,
        "EnterpriseLogoImg64": imgbase64,
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Enterprises/EnterprisesInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Succesfully!");

               

            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>"+result.responseText.trim()+"</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}

function Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesContactUsLinkStore() {
    Ext.getStore('EnterprisesContactUsLinkStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

    });
    Ext.StoreMgr.get('EnterprisesContactUsLinkStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisesContactUsLinkStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('EnterprisesContactUsLinkStore').load();
        var myStore = Ext.getStore('EnterprisesContactUsLinkStore');
        var count = myStore.getCount();
        var modelRecord = myStore.getAt(0);
       



      


        if (count >= 1) {

            localStorage.setItem("EnterprisePhoneNo",modelRecord.get('EnterprisePhoneNo'));
            localStorage.setItem("EnterpriseEmail", modelRecord.get('EnterpriseEmail'));
            localStorage.setItem("EnterpriseWebsite", modelRecord.get('EnterpriseWebsite'));
            localStorage.setItem("EnterpriseFacebook", modelRecord.get('EnterpriseFacebook'));
            localStorage.setItem("EnterpriseTwiter", modelRecord.get('EnterpriseTwiter'));
            localStorage.setItem("EnterpriseInstagram", modelRecord.get('EnterpriseInstagram'));
            localStorage.setItem("EnterpriseCoordinate", modelRecord.get('EnterpriseCoordinate'));
            localStorage.setItem("PICContactNo", modelRecord.get('PICContactNo'));
            localStorage.setItem("PersonInCharge", modelRecord.get('PersonInCharge'));
           
        } else {
            localStorage.setItem("EnterprisePhoneNo", "NA");
            localStorage.setItem("EnterpriseEmail", "NA");
            localStorage.setItem("EnterpriseWebsite", "NA");
            localStorage.setItem("EnterpriseFacebook", "NA");
            localStorage.setItem("EnterpriseTwiter", "NA");
            localStorage.setItem("EnterpriseInstagram", "NA");
            localStorage.setItem("EnterpriseCoordinate", "NA");
            localStorage.setItem("PICContactNo", "NA");
            localStorage.setItem("PersonInCharge", "NA");
        }










        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);
}
