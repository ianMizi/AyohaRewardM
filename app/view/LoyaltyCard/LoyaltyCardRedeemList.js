Ext.define('ianMizi.view.LoyaltyCard.LoyaltyCardRedeemList', {

});

var _LoyaltyCardRedeemList;


var isLoyaltyCardRedeemListOpen = 'N';











function LoyaltyCardRedeemList() {

    _LoyaltyCardRedeemList =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingLoyaltyCardRedeemListID',
         draggable: false,



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
                             _LoyaltyCardRedeemList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isLoyaltyCardRedeemListOpen = 'N';
                         } if (e.direction == "right") {
                             _LoyaltyCardRedeemList.hide(Ext.fx.Animation({
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
                          //  hidden:true,
                            //flex: 1,
                           // height:'35%',
                            height: 270,
                           // height: 218,
                            width: '100%',

                           docked: 'top',
                           // style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',
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

                                    xtype: 'container',
                                    width: '100%',
                                   // width: 40,
                                    //zIndex:-10,
                                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                    //hidden: true,
                                   docked: 'top',
                                    id: 'containerLoyaltyCardRedeemListHeader1',
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

                                                //{
                                                //    xtype: 'container',
                                                //    margin: '0 0 0 -5',
                                                //    // hidden:true,
                                                //    //style: 'background-color: white;',
                                                //    style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 0px 10px 10px 0px;box-shadow: 5px 10px 18px #888888;',
                                                //    zIndex: 80,
                                                //    height: 25,
                                                //    width: 40,
                                                //    // margin: '70 0 0 0',
                                                //    id: 'containerCloseRedeemList',
                                                //    layout: {

                                                //        type: 'hbox',
                                                //        pack: 'center',
                                                //        align: 'center'
                                                //    },
                                                //    items: [


                                                        
                                                //    ]
                                                //},

                                                          //{
                                                          //    xtype: 'button',

                                                          //    height: 25,
                                                          //    width: 40,
                                                          //    zIndex: 80,
                                                          //    margin: '0 0 0 -45',

                                                          //    id: 'btnCloseRedeemList',
                                                          //    text: 'X',
                                                          //    //iconCls: 'list',
                                                          //    //html: '<div ><img src="resources/icons/Icon_Android48.png" width="30px" height="30px" alt="Company Name"/></div>',
                                                          //    // html: '<div ><img src="resources/icons/burgerMenuRed.png" width="25px" height="25px" alt="Company Name"/></div>',                                        
                                                          //    ui: 'plain',
                                                          //    handler: function () {
                                                          //        //  Ext.getCmp('mainView').setActiveItem(1);
                                                          //        //NavigatePageMovementMap();
                                                          //        //localStorage.clear();
                                                          //        //myStopFunction();
                                                          //        LoyaltyCardRedeemListHide()

                                                          //    }



                                                          //},
                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btnLoyaltyCardRedeemListBack',
                                                                  height: 30,
                                                                  width: 35,
                                                                  margin:'-10 0 0 0',
                                                                  // iconCls: 'list',
                                                                  html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                  ui: 'plain',
                                                                  handler: function () {
                                                                      _LoyaltyCardRedeemList.hide(Ext.fx.Animation({
                                                                          type: 'slideOut',
                                                                          direction: 'left',
                                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                                          duration: 250

                                                                      }));
                                                                      isLoyaltyCardRedeemListOpen = 'N';
                                                                  }
                                                              },
                                             {
                                                 margin: '-10 0 0 0',
                                                 html: '<font size=2 color=white><b>Redeem Points</b></font>'
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
                                                                      zIndex: 80,
                                                                      height: 25,
                                                                      width: 70,
                                                                      // margin: '70 0 0 0',
                                                                      id: 'containerLoyaltyCardRedeemListHaiUser',
                                                                      layout: {

                                                                          type: 'hbox',
                                                                          pack: 'center',
                                                                          align: 'center'
                                                                      },
                                                                      items: [


                                                                          {
                                                                              margin: '0 0 0 0',
                                                                              id: 'htmlLoyaltyCardRedeemListHaiUser',
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
                                                                   zIndex: 80,
                                                                   height: 40,
                                                                   width: 40,
                                                                   // margin: '70 0 0 0',
                                                                   id: 'containerLoyaltyCardRedeemListPictureUser',
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
                                                                           margin: '0 0 0 -5',
                                                                           id: 'btnLoyaltyCardRedeemListUserInfo',
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
                                    margin: '-31 0 0 0',
                                   // zIndex: 190,
                                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                    //hidden: true,
                                    docked: 'top',
                                    id: 'containerLoyaltyCardRedeemListCompanyLogoHeader',
                                    style: {
                                        // background: '#D25959',
                                        background: 'transparent',
                                        // border: '2px'
                                    },
                                    //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;background: transparent;',
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
                                                   margin: '-1 0 0 0',
                                                    //zIndex: 90,
                                                   style: 'background-color: transparent;',
                                                   //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 50px 50px 50px 50px;',
                                                   //zIndex: 80,
                                                   //height: 90,
                                                   //width: 90,
                                                   // margin: '70 0 0 0',
                                                   id: 'containerLoyaltyCardRedeemListCompanyLogo',
                                                   layout: {

                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'
                                                   },
                                                   items: [
                                                       {
                                                           xtype: 'button',
                                                           height: 140,
                                                           width: 140,
                                                           margin: '0 0 0 0',
                                                           id: 'btnLoyaltyCardRedeemListCompanyLogo',
                                                           //badgeText: "2",
                                                           html: '<div style="margin:3px 0px 0px 0px"><img src="resources/icons/ccrlogo.png" width="130" height="130" alt="Company Name"></div>',
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
                                                                      xtype: 'container',
                                                                      margin: '-8 0 0 0',
                                                                      style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                                      //style: 'background-color: white;',
                                                                      //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                      zIndex: 80,
                                                                      height: 25,
                                                                      width: 250,
                                                                      // margin: '70 0 0 0',
                                                                      id: 'containerLoyaltyCardRedeemListCompanyName',
                                                                      layout: {

                                                                          type: 'vbox',
                                                                          pack: 'center',
                                                                          align: 'center'
                                                                      },
                                                                      items: [


                                                                          {
                                                                              margin: '0 0 0 0',
                                                                              id: 'htmlLoyaltyCardRedeemListCompanyName',
                                                                              html: '<font size=3 color=white><b>Community Coffee Sdn Bhd</b></font>'
                                                                          }
                                                                      ]
                                                                  },
                                                                   {
                                                                       margin: '0 0 0 0',
                                                                       html: '<font size=2 color=white><b>Redeem Your Point.!</b></font>'
                                                                   },

                                                               {
                                                                   margin: '-8 0 0 0',
                                                                   html: '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:50px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;color:white;width:100%;height:110px">1005</div>',
                                                                   //  html: '<font size=13 color=black><b>1005</b></font>'
                                                               },
                                                               {
                                                                   margin: '-65 0 0 0',
                                                                   html: '<font size=2 color=white><b>Points</b></font>'
                                                               },

                                           ]

                                },

                                {
                                    xtype: 'container',
                                    id: 'containerLoyaltyCardRedeemListMasterHeaderTop',
                                    // hidden:true,
                                    width: '100%',
                                    height: 25,
                                    //  zIndex: 90,

                                    // style: "background-color: transparent;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;",
                                    // style: 'border-bottom:1px solid #D25959;background-color:transparent',
                                    //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;',
                                    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                    style: {
                                        // background: '#D25959',
                                        background: 'transparent',
                                        // border: '2px'
                                    },
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [
                                        {
                                            xtype: 'container',
                                            id: 'containerLoyaltyCardRedeemListMasterHeader',
                                            width: '100%',
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
                                                    html: '<img src="resources/icons/pointHistory.png" width="20" height="20" alt="Company Name">',
                                                },
                                                {
                                                    //  width: 150,
                                                    html: '<font size=2 color=black>Redeem Prize</font>'
                                                },
                                                {
                                                    xtype: 'spacer'
                                                },
                                                //{
                                                //    id: 'LoyaltyCardRedeemListMasterHeader_PointHistorySearchTxt',
                                                //    margin: '-5 10 0 0',
                                                //    width: 120,
                                                //    height: 16,
                                                //    html: '<input type="text" id="input-RedeemListHistorySearchTxt" placeholder="Search " style="border-color:purple;color:black;width:120px;text-align: center">'
                                                //}
                                            ]

                                        },
                                    ]
                                },

                            ]
                        },
                   //{
                   //    xtype: 'container',
                   //    //  margin: '0 0 0 0',
                   //    // docked: 'bottom',
                   //    style: 'background-color: transparent;',
                   //    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                   //    zIndex: 80,
                   //    // height: '2%',
                   //    height: 10,
                   //    width: '100%',
                   //    // margin: '70 0 0 0',

                   //    layout: {

                   //        type: 'vbox',
                   //        pack: 'left',
                   //        align: 'left'
                   //    },
                   //    items: [
                   //         {
                   //             margin: '0 0 0 0',
                   //             html: '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;overflow:hidden;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:20px">Redeem Items List</div>',
                   //             //  html: '<font size=13 color=black><b>1005</b></font>'
                   //         },
                   //    ]

                   //},


                
                 




                      
    


{
    xtype: 'container',
    docked: 'top',
   // hidden:true,
    //  margin: '0 0 0 0',
   //  docked: 'bottom',
    style: 'background-color: transparent;',
    id:'containerRedeemListItems',
    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
    zIndex: 90,
    //height:200,
   // autoHeight:true,
   // height: '100%',
   // flex:1,
  //  maxHeight:'100%',
  //height:'63%',
    width: '100%',
    // margin: '70 0 0 0',

    layout: {

        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    items: [

        {
            xtype: 'list',
            // height: '64%',
            height: '100%',
           // height: 200,
            //   flex: 2,
            store: 'RedeemItemgetByEnterpriseAccNoStore',
            id: 'LoyaltyCardRedeemListID',
            mode: 'SINGLE',
            //  disableSelection: true,
            // disableSelection: true,


            itemTpl: '<div class="myContent">' +

                //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal;width: 70px;"><img src="{AccPicProfile}" style="width: 62px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal"><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal">{EmployeeName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/CheckInRed1.png" style="width: 16px; height: 16px;" />Check-In Location:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{EndPointNameModified}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/latestDestination.png" style="width: 16px; height: 16px;" />Movement Purpose:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{MovementPurpose}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;"><img src="resources/icons/TimerRed3.png" style="width: 16px; height: 16px;" />Check-In DateTime:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{DateDT}</div></th></tr></thead></table>'

                // <tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal"></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:bottom;word-break:normal"><div><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeem">Redeem</button></div></td></tr>
                 //'<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed;width: 100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:2px 2px;text-align:left;vertical-align:middle;word-break:normal;"><img src="http://42.1.63.57/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;" /></th><th onclick=" MultipleTrackingMap_LiveTrackingZoomTo({ID})" style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{ItemName}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-25px 0px 0px 0px;">Point Required:</div><br><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:-27px 0px 0px 16px">{ItemPoint}</div></th></tr></thead></table>'
                 '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="http://42.1.63.57/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
             + '</div>',

            width: '100%',
            // height: 600,
            // height: '100%',

            listeners: {


                itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                },

                itemsingletap: function (dataview, index, target, record, e, eOpts) {

                    //var ReceiptImg = (record.get('ID'));
                    //MovementClaimReceiptImageShow(ReceiptImg);
                }
            }





        },

      


        

    ]
},


{
    xtype: 'container',
    id: 'containerLoyaltyCardPointTitleOutter',
    width: '100%',
    height: 60,
    docked:'bottom',
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
            width: '50%',
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
                         LoyaltyCardRedeemListShow();
                     }
                 },
                  {
                      margin: '-7 0 0 0',
                      html: '<font size=2 color=grey><b>Redeem Prize</b></font>'
                  },

            ]
        },

            {
                xtype: 'container',
                id: 'containerLoyaltyCardPointTitleRedeemHistory',
                width: '50%',
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
                         id: 'btnRedeemHistory_LoyaltyCardPoint',
                         //  badgeText: '1',
                         margin: '-5 0 0 0',
                         height: 45,
                         width: 45,
                         html: '<img src="resources/icons/redeemHistory.png" width="35" height="35" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {
                             // NotificationsPanelShow();
                             LoyaltyCardRedeemListShow();
                         }
                     },
                      {
                          margin: '-7 0 0 0',
                          html: '<font size=2 color=grey><b>Redeem History</b></font>'
                      },

                ]
            },

    ]

},



//{
//    xtype: 'container',
//    id: 'containerLoyaltyCardRedeemListOutter',
//   // height: 50,
//    width: '100%',
//    zIndex: 80,
//  //  hidden:true,
//    style: "background-color: transparent",
//   // style: "background-color: #F35B57;",
//    docked: 'bottom',
//    layout: {
//        type: 'vbox',
//        pack: 'center',
//        align: 'center'

//    },
//    items: [








//          //{
//          //    margin: '0 0 0 0',
//          //    zIndex: 80,
//          //    html: '<font size=2 color=black><b>Contact Us</b></font>',
//          //},
//        //{
//        //    xtype: 'container',
//        //    id: 'containerLoyaltyCardRedeemListInner',
//        //    margin: '0 0 0 0',
//        //   // height: 52,
//        //    width: '100%',
//        //    zIndex: 80,
//        //    //hidden:true,
//        //    style: "background-color: transparent",
//        //    //style: "background-color: #F35B57;",
//        //    // docked: 'bottom',
//        //    layout: {
//        //        type: 'hbox',
//        //        pack: 'center',
//        //        align: 'center'

//        //    },
//        //    items: [
//        //    {
//        //        xtype: 'button',
//        //        height: 32,
//        //        width: 32,
//        //        margin: '0 0 0 0',
//        //        id: 'btnLoyaltyCardRedeemListbottomFB',
//        //        //badgeText: "2",
//        //        html: '<div ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>',
//        //        ui: 'plain',
//        //        handler: function () {
//        //            alert("sdfdsf");

//        //        }
//        //    },
//        //   {
//        //       xtype: 'button',
//        //       height: 32,
//        //       width: 32,
//        //       margin: '0 0 0 0',
//        //       id: 'btnLoyaltyCardPointbottomInsta',
//        //       //badgeText: "2",
//        //       html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
//        //       ui: 'plain',
//        //       handler: function () {
//        //           alert("sdfdsf");

//        //       }
//        //   },
//        //   {
//        //       xtype: 'button',
//        //       height: 32,
//        //       width: 32,
//        //       margin: '0 0 0 0',
//        //       id: 'btnLoyaltyCardRedeemListbottomTwitter',
//        //       //badgeText: "2",
//        //       html: '<div ><img src="resources/icons/twitter.png" width="22" height="22" alt="Company Name"></div>',
//        //       ui: 'plain',
//        //       handler: function () {
//        //           alert("sdfdsf");

//        //       }
//        //   },
//        //   {
//        //       xtype: 'button',
//        //       height: 32,
//        //       width: 32,
//        //       margin: '0 0 0 0',
//        //       id: 'btnLoyaltyCardRedeemListbottomWeb',
//        //       //badgeText: "2",
//        //       html: '<div ><img src="resources/icons/website.png" width="22" height="22" alt="Company Name"></div>',
//        //       ui: 'plain',
//        //       handler: function () {
//        //           alert("sdfdsf");

//        //       }
//        //   },
//        //    {
//        //        xtype: 'button',
//        //        height: 32,
//        //        width: 32,
//        //        margin: '0 0 0 0',
//        //        id: 'btnLoyaltyCardRedeemListbottomCall',
//        //        //badgeText: "2",
//        //        html: '<div ><img src="resources/icons/calling.png" width="22" height="22" alt="Company Name"></div>',
//        //        ui: 'plain',
//        //        handler: function () {
//        //            alert("sdfdsf");

//        //        }
//        //    },

//        //    {
//        //        xtype: 'button',
//        //        height: 32,
//        //        width: 32,
//        //        margin: '0 0 0 0',
//        //        id: 'btnLoyaltyCardRedeemListbottomWassap',
//        //        //badgeText: "2",
//        //        html: '<div ><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"></div>',
//        //        ui: 'plain',
//        //        handler: function () {
//        //            alert("sdfdsf");

//        //        }
//        //    },


//        //    ]
//        //}










//    ]

//},

















]
                 

//{
//    xtype: 'container',
//    id: 'containerLoyaltyCardRedeemListOuter',
//    height: 32,
//    //hidden:true,
//    style: "background-color: transparent",
//    //style: "background-color: #F35B57;",
//    docked: 'bottom',
//    layout: {
//        type: 'vbox',
//        pack: 'center',
//        align: 'center'

//    },


//    items: [

        
    
            
//    ]

//},


            // ]


         //},
















     });
    return _LoyaltyCardRedeemList;



}



function LoyaltyCardRedeemListShow() {

    Ext.Viewport.remove(_LoyaltyCardRedeemList);
    this.overlay = Ext.Viewport.add(LoyaltyCardRedeemList());
    this.overlay.show();
    isLoyaltyCardRedeemListOpen = 'Y';
    adjustHeight();
    LoadLoyaltyCardRedeemList();


}





function LoyaltyCardRedeemListHide() {
    _LoyaltyCardRedeemList.hide(); isLoyaltyCardRedeemListOpen = 'N';
}





function LoadLoyaltyCardRedeemList() {
   
    Ext.getStore('RedeemItemgetByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('RedeemItemgetByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('RedeemItemgetByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('RedeemItemgetByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('RedeemItemgetByEnterpriseAccNoStore');
        count = myStore.getCount();

       // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(2000);
}

function adjustHeight() {   
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(270);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    var newHeight = adjustedHeight - 70;
    //alert(adjustedHeight);
    //alert(newHeight)
  
    Ext.getCmp('containerRedeemListItems').setHeight(newHeight);
  


   
}