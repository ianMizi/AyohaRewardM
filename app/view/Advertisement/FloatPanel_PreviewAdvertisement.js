
Ext.define('ianMizi.view.Advertisement.FloatPanel_PreviewAdvertisement', {

});

var _FloatPanel_PreviewAdvertisement;

var swipeDirection;
var globalMediaFileName;
var isFloatPanel_PreviewAdvertisementOpen = 'N';
var _FloatPanel_PreviewAdvertisement_isFirstLoad = 'Y';





function FloatPanel_PreviewAdvertisement() {

    _FloatPanel_PreviewAdvertisement =
    Ext.create('Ext.Panel', {
        zIndex: 350,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_PreviewAdvertisementID',
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
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_PreviewAdvertisement.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_PreviewAdvertisement.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
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
                                docked:'top',

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_PreviewAdvertisementHeader',
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
                                             

                                               //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                               //hidden: true,

                                               id: 'containerFloatPanel_PreviewAdvertisementHeaderInner',
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
                                               items: [

                                                     {
                                                         xtype: 'button',
                                                         id: 'btnFloatPanel_PreviewAdvertisementBacks',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                       
                                                             _FloatPanel_PreviewAdvertisement_isFirstLoad = 'Y';
                                                             isFloatPanel_PreviewAdvertisementOpen = 'N';
                                                             _FloatPanel_PreviewAdvertisement.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));

                                                         }
                                                     },
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlFloatPanel_PreviewAdvertisement_TitleHeaderTxt',
                                                         html: '<font size=2 color=white><b>Preview Advertisement</b></font>'
                                                     },
                                                      {
                                                          xtype: 'spacer',

                                                      },

                                               ]
                                           },



                                                      {
                                                          xtype: 'container',
                                                           
                                                          // hidden: true,
                                                          style: 'background-color: transparent;',
                                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                         // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                          height: 0,
                                                          width: '100%',
                                                          // margin: '70 0 0 0',
                                                          id: 'containerFloatPanel_PreviewAdvertisement_HeaderTitleAndMedia',
                                                          layout: {

                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'left'
                                                          },
                                                          items: [
                                                              {
                                                                  xtype: 'container',
                                                                  margin: '-5 0 0 0',
                                                                  // hidden: true,
                                                                  style: 'background-color: transparent;',
                                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                                  height: 3,
                                                                  width: '100%',
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_PreviewAdvertisement_HeaderTitleAndMedia_TimingBar',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [
                                                                      {
                                                                          xtype:'spacer'
                                                                      },
 {
     xtype: 'button',
     id: 'btnFloatPanel_PreviewAdvertisement_Timing0',
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
      id: 'btnFloatPanel_PreviewAdvertisement_Timing1',
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
       id: 'btnFloatPanel_PreviewAdvertisement_Timing2',
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
        id: 'btnFloatPanel_PreviewAdvertisement_Timing3',
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
         id: 'btnFloatPanel_PreviewAdvertisement_Timing4',
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
          id: 'btnFloatPanel_PreviewAdvertisement_Timing5',
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
           id: 'btnFloatPanel_PreviewAdvertisement_Timing6',
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
            id: 'btnFloatPanel_PreviewAdvertisement_Timing7',
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
             id: 'btnFloatPanel_PreviewAdvertisement_Timing8',
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
              id: 'btnFloatPanel_PreviewAdvertisement_Timing9',
              margin: '0 0 0 0',
              flex: 1,
              hidden:true,
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
                                                                   margin: '30 15 0 0',
                                                                   id: 'containerFloatPanel_PreviewAdvertisementHeaderOutter',
                                                                  layout: {

                                                                      type: 'hbox',
                                                                      pack: 'start',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                    {
                                                                        xtype: 'button',
                                                                        id: 'btnFloatPanel_PreviewAdvertisement_PicProfile',
                                                                        margin: '0 0 0 20',
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
                                                                        id: 'btnFloatPanel_PreviewAdvertisement_UserNameProfile',
                                                                        margin: '0 0 0 0',
                                                                        height: 60,
                                                                        width: 250,
                                                                        // iconCls: 'list',
                                                                        //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                                        html: '<div style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold">IanMizi Technology Sdn Bhd</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',

                                                                        // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                                        ui: 'plain',
                                                                        handler: function () {


                                                                        }
                                                                    },
                                                                     //{
                                                                     //    xtype: 'button',
                                                                     //    id: 'btnFloatPanel_PreviewAdvertisement_Audio',
                                                                     //    margin: '0 0 0 0',
                                                                     //    height: 55,
                                                                     //    width: 55,
                                                                     //    // iconCls: 'list',
                                                                     //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/audioPurple.png" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;"></div>',
                                                                     //    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                                     //    ui: 'plain',
                                                                     //    handler: function () {


                                                                     //    }
                                                                     //},
                                                                     
                                                                      //{
                                                                      //    xtype: 'button',
                                                                      //    id: 'btnMyAccount_DashboardeWalletsss',
                                                                      //    margin: '10 0 0 0',
                                                                      //    height: 45,
                                                                      //    width: 45,
                                                                      //    // iconCls: 'list',
                                                                      //    html: '<div ><img src="resources/icons/audioPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                                      //    ui: 'plain',
                                                                      //    handler: function () {
                                                                      //        DrawerMenuShow();

                                                                      //    }
                                                                      //},
                                                                  ]
                                                              },

                                                          ]
                                                      },
                                                              
                                                           







                                       ]

                            },



                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_PreviewAdvertisementTitleOutter',
                                width: '100%',
                               // height: 35,
                                docked: 'bottom',
                               
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                                style: "background-color: transparent;",
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center',
                                },
                                items: [
                                    {
                                        xtype: 'container',
                                        id: 'containerPreviewAdvertisementTitleInner',
                                        width: '100%',
                                        //height: 35,
                                        height: 80,
                                        margin: '-85 0 0 0',
                                        style: "background-color:transparent;",
                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'center',
                                        },
                                        items: [
                                            {
                                                xtype: 'container',
                                                width: '96%',
                                                id: 'containerFloatPanel_Advertisement_CaptionText',
                                               // hidden:true,
                                                margin: '-80 0 0 0',
                                                height: 75,
                                                style: 'background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'

                                                },
                                                items: [
                                                    {
                                                        id:'htmlFloatPanel_Advertisement_CaptionText',
                                                        html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">Aslam cucu angah rahem..</div>',
                                                    }
                                                ]
                                            },
                                            {
                                                xtype: 'spacer',
                                                width: '96%',
                                                height:55
                                            },
                                              {
                                                  margin: '-30 0 0 0',

                                                  html: '<font size=2 color=white><b>Contact Us</b></font>',
                                              },
                                            {
                                                xtype: 'container',
                                                id: 'containerPreviewAdvertisementButton_bottom',
                                                //hidden:true,
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
                                                         height: 32,
                                                         width: 32,
                                                         margin: '0 0 0 0',
                                                         id: 'btnFloatPanel_PreviewAdvertisementbottom_Location',
                                                         //badgeText: "2",
                                                         html: '<div ><img src="resources/icons/locationThree.png" width="22" height="22" alt="Company Name"></div>',
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
                                                              height: 32,
                                                              width: 32,
                                                              margin: '0 0 0 0',
                                                              id: 'btnFloatPanel_PreviewAdvertisementbottom_FB',
                                                              //badgeText: "2",
                                                              html: '<div ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>',
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
                                                               height: 32,
                                                               width: 32,
                                                               margin: '0 0 0 0',
                                                               id: 'btnFloatPanel_PreviewAdvertisementbottom_Insta',
                                                               //badgeText: "2",
                                                               html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                  // alert(GetEnterpriseInstagram());

                                                                   setTimeout(function () { window.open("instagram://user?username=" + GetEnterpriseInstagram() + ""); }, 25);
                                                                  

                                                               }
                                                           },
                                                           {
                                                               xtype: 'button',
                                                               height: 32,
                                                               width: 32,
                                                               margin: '0 0 0 0',
                                                               id: 'btnFloatPanel_PreviewAdvertisementbottom_Twitter',
                                                               //badgeText: "2",
                                                               html: '<div ><img src="resources/icons/twitter.png" width="22" height="22" alt="Company Name"></div>',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                
                                                                   setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

                                                               }
                                                           },
                                                           {
                                                               xtype: 'button',
                                                               height: 32,
                                                               width: 32,
                                                               margin: '0 0 0 0',
                                                               id: 'btnFloatPanel_PreviewAdvertisementbottom_Web',
                                                               //badgeText: "2",
                                                               html: '<div ><img src="resources/icons/websiteIcon.png" width="22" height="22" alt="Company Name"></div>',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                  
                                                                   window.open(GetEnterpriseWebsite());
                                                                   //setTimeout(function () { window.open(GetEnterpriseWebsite()); }, 25);
                                                                   //setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

                                                               }
                                                           },
                                                             {
                                                                 xtype: 'button',
                                                                 height: 32,
                                                                 width: 32,
                                                                 margin: '0 0 0 0',
                                                                 id: 'btnFloatPanel_PreviewAdvertisementbottom_Email',
                                                                 //badgeText: "2",
                                                                 html: '<div ><img src="resources/icons/EmailRed.png" width="22" height="22" alt="Company Name"></div>',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                   
                                                                     window.open("mailto:" + GetEnterpriseEmail() + "");

                                                                 }
                                                             },
                                                            {
                                                                xtype: 'button',
                                                                height: 32,
                                                                width: 32,
                                                                margin: '0 0 0 0',
                                                                id: 'btnFloatPanel_PreviewAdvertisementbottom_Call',
                                                                //badgeText: "2",
                                                                html: '<div ><img src="resources/icons/calling.png" width="22" height="22" alt="Company Name"></div>',
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
                                                                height: 32,
                                                                width: 32,
                                                                margin: '0 0 0 0',
                                                                id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassap',
                                                                //badgeText: "2",
                                                                html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"/></a>',
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

                            


                           


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////
                              
                              {
                                  xtype: 'container',
                                  width: '100%',
                                  height: '100%',
                                  margin: '0 0 0 0',
                                 // style: 'background-color:transparent',
                                  style: 'background-color:black',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'

                                  },
                                  items: [
                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_PreviewAdvertisement_CarouselLoading',
                                           width: '80%',
                                           height: 300,
                                           //hidden:true,
                                           // style: "background-color: transparent",
                                           //style: "background-color: #F35B57;",
                                           style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center'

                                           },

                                       },
                                       
                                       {
                                           xtype: 'carousel',
                                           hidden:true,
                                           id:'FloatPanel_PreviewAdvertisement_Carousel',
                                           width: '96%',
                                           height: '50%',
                                           indicator: false,
                                           listeners: {
                                              
                                               //initialize: function (c) {
                                               //    this.element.on({
                                               //        swipe: function (e, node, options) {
                                               //            if (e.direction == "left") {
                                               //                swipeDirection = "Left";
                                                             
                                               //            } else {
                                               //                swipeDirection = "Right";
                                               //            }
                                               //        }
                                               //    });
                                               //},
                                               activeitemchange: function (container, newCard, oldCard, index) {
                                                   // console.log('Current index:' + container.getActiveIndex());


                                                   if (_FloatPanel_PreviewAdvertisement_isFirstLoad == 'N') {
                                                       var valCaptionText = ArrCaptionText[container.getActiveIndex()];
                                                       globalMediaFileName = ArrMediaFileName[container.getActiveIndex()];

                                                       if (ArrCaptionText[container.getActiveIndex()] != 'NULL') {
                                                           Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(false);
                                                           Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + valCaptionText + '</div>');
                                                       } else {
                                                           Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
                                                       }

                                                       var NextIndex = container.getActiveIndex() + 1;
                                                     


                                                       if (myCarousel.getInnerItems().indexOf(oldCard) > myCarousel.getInnerItems().indexOf(newCard)) {
                                                           console.log("kanan");
                                                           Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + NextIndex).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                                                         //  Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + myCarousel.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');

                                                       } else {
                                                           console.log("kiri");
                                                           Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">');
                                                       }
                                                     
                                                   }

                                               },
                                             
                                           },
                                        
                                           //listeners: {
                                           //    element: 'element',
                                           //    delegate: 'a.navigation',
                                           //    tap: function (e) {
                                           //        var target = e.getTarget(null, 1, true),
                                           //            direction = target.getAttribute('direction'),
                                           //            active = this.getActiveItem(),
                                           //            items = this.getInnerItems(),
                                           //            idx = items.indexOf(active);

                                           //        this.setActiveItem(idx + (direction === 'next' ? 1 : -1));
                                           //    }
                                           //},

                                           //listeners: {
                                           //    cardswitch: function (container, newCard, oldCard, index) {
                                           //        console.log(container, newCard, oldCard, index);
                                           //        Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + index + '</div>');
                                           //    },
                                           //},


                                           //listeners: {
                                           //    order: 'after',
                                           //    initialize: function(c) {
                                           //        this.element.on({
                                           //            swipe: function(event, node, options) {    
                               
                                
                                           //                console.log("CountAdvertisementMedia:" + CountAdvertisementMedia);
                        
                                           //                if(event.direction == "left" ) {
                                                              
                                           //                    MoveCountSwipe = MoveCountSwipe + 1;                                                           
                                           //                    Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + MoveCountSwipe + '</div>');
                                           //                    console.log("Swipe left:" + MoveCountSwipe);
                                                               

                                           //                    if (MoveCountSwipe >= CountAdvertisementMedia) {
                                           //                        MoveCountSwipe = CountAdvertisementMedia;
                                           //                        console.log("Swipe left,reset to=" + CountAdvertisementMedia);
                                                                  
                                           //                    }
                                           //                   // var CaptionText = ArrCaptionText = [CountAdvertisementMedia];
                                                              
                                           //                }
                                
                                           //                if (event.direction == "right") {
                                                             
                                           //                    MoveCountSwipe = MoveCountSwipe - 1;
                                                            
                                           //                    Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + MoveCountSwipe + '</div>');
                                           //                    console.log("Swipe right:" + MoveCountSwipe);
                                           //                    if (MoveCountSwipe <= 1) {
                                           //                        MoveCountSwipe = 1;
                                           //                        console.log("Swipe right,reset to=1");
                                                                   
                                           //                    }
                                           //                }
                                           //            }
                                           //        });
                                           //    }
                                           //},


                                         // margin: '-20 0 0 0',
                                          // items: [
                                            //   {
                                            //       xtype: 'image',
                                            //       id: 'carouselFloatPanel_PreviewAdvertisement_1',
                                            //      // hidden:true,
                                            //       src: 'http://42.1.63.57/AyohaImgCard/AdvertisementImage/CRCom-71100/satay.jpg',
                                            //       height: '100%',
                                            //       width: '100%',
                                            //       mode: 'image'
                                            //   },
                                            //   {
                                            //       xtype: 'image',
                                            //       id: 'carouselFloatPanel_PreviewAdvertisement_2',
                                            //       hidden: true,
                                            //       src: '',
                                            //       height: '100%',
                                            //       width: '100%',
                                            //       mode: 'image'
                                            //   },
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_3',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //  {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_4',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  }, {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_5',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  },
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_6',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //  {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_7',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  }, {
                                            //      xtype: 'image',
                                            //      id: 'carouselFloatPanel_PreviewAdvertisement_8',
                                            //      hidden: true,
                                            //      src: '',
                                            //      height: '100%',
                                            //      width: '100%',
                                            //      mode: 'image'
                                            //  },
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_9',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //{
                                            //    xtype: 'image',
                                            //    id: 'carouselFloatPanel_PreviewAdvertisement_10',
                                            //    hidden: true,
                                            //    src: '',
                                            //    height: '100%',
                                            //    width: '100%',
                                            //    mode: 'image'
                                            //},
                                            //{
                                            //    xtype: 'video',
                                            //    enableControls: true,
                                            //    //x: 600,
                                            //    //y: 300,
                                            //    //width: 300,
                                            //    //height: 250,
                                            //    height: '100%',
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



                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_PreviewAdvertisement;



}






var MoveCountSwipe;

function FloatPanel_PreviewAdvertisementShow(Module) {

    Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
    this.overlay.show();
    isFloatPanel_PreviewAdvertisementOpen = 'Y';
    _FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
    Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
    MoveCountSwipe = 0;
    swipeDirection = 'Left';

  
    //carousel.add({ xtype: 'image', src: 'image URL' });
    //carousel.add({ xtype: 'image', src: 'image URL' });
    //carousel.add({ xtype: 'image', src: 'image URL' });
    Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module);
    showHideContactUs();
}





function FloatPanel_PreviewAdvertisementHide() {
    _FloatPanel_PreviewAdvertisement_isFirstLoad = 'Y';
    _FloatPanel_PreviewAdvertisement.hide(); isFloatPanel_PreviewAdvertisementOpen = 'N';
}


var myCarousel;

function Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module) {
   
    var AdvertismentCodes;

    if (Module == "FloatPanel_PreviewAdvertisement") {
         AdvertismentCodes = document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value;
    }
    if (Module == "Dashboard_PreviewAdvertisement") {
        AdvertismentCodes = localStorage.getItem("Dashboard_AdvertismentCode");
    }
    if (Module == "Dashboard_PreviewVIAAdvertisement") {
        AdvertismentCodes = localStorage.getItem("Dashboard_VIAAdvertismentCode");
    }
    if (Module == "FloatPanel_AyohaCardManagement_AdvertisementButton") {
        AdvertismentCodes = localStorage.getItem("FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode");
    }

    
    console.log(Module);
    console.log(AdvertismentCodes);
    //var ScreeHeight = parseInt(screen.height);
    //var CaserolImageHeight = ScreeHeight -

    

    //var CaserolImageHeight = Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').getSize();
    //console.log(CaserolImageHeight);

    Ext.getStore('AdvertisementloadMediaPreviewStore').getProxy().setExtraParams({
        AdvertisementCode: AdvertismentCodes,
        EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    });
    Ext.StoreMgr.get('AdvertisementloadMediaPreviewStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AdvertisementloadMediaPreviewStore').getProxy().setExtraParams({
            AdvertisementCode: AdvertismentCodes,
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('AdvertisementloadMediaPreviewStore').load();
        var myStore = Ext.getStore('AdvertisementloadMediaPreviewStore');
        var modelRecorded = myStore.getAt(0);
        var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        var EnterpriseName = modelRecorded.get('EnterpriseName');
        var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');

        Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
        Ext.getCmp('btnFloatPanel_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
        //console.log(EnterpriseLogoPath);
       
        var count = myStore.getCount();
        CountAdvertisementMedia = count - 1;
       // console.log(CountAdvertisementMedia);
        //console.log(GetEnterpriseHQAccNo());
        //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
        //var modelRecord = myStore.getAt(0);

        //var Complaint = modelRecord.get('Complaint');
        // var MinStoreAlert = modelRecord.get('MinStoreAlert');
        // var StoreBalance = modelRecord.get('TotalStock');
      
        myCarousel = Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel');
        ArrCaptionText.length = 0;
        ArrMediaFileName.length = 0;
       
        for (i = 0; i < count; i++) {
            var modelRecord = myStore.getAt(i);

            var AdvertismentMediaUrl =modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote =modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var MediaFileName = modelRecord.get('MediaFileName');
            
           


            ArrMediaFileName.push(MediaFileName);
            
            Ext.getCmp('btnFloatPanel_PreviewAdvertisement_Timing' + i).setHidden(false);
          //  xtype: 'pinchzoomimage',
            if (MediaType == "Image") {
               myCarousel.add({ xtype: 'image', src: AdvertismentMediaUrl , height: '100%', width: '100%', mode: 'image' });
               // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            }
            if (MediaType == "Video") {
                myCarousel.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: true, enableControls: true, });

            }

            if (AdvertismentMediaNote) {
                ArrCaptionText.push(AdvertismentMediaNote);
            } else {
                ArrCaptionText.push('NULL');
            }
          
           
            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }
        if (ArrCaptionText[0] != 'NULL') {
            Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(false);

            Ext.getCmp('htmlFloatPanel_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionText[0] + '</div>');

        } else {
            Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
        }
        

        Ext.getCmp('containerFloatPanel_PreviewAdvertisement_CarouselLoading').setHidden(true);
        Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(false);

        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}


var ArrCaptionText = [];
var ArrMediaFileName = [];
var CountAdvertisementMedia


function showHideContactUs() {

    if (GetEnterprisePhoneNo()) {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Call').setHidden(false);
    } else {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Call').setHidden(true);
    }
    if (GetEnterpriseEmail()) {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Email').setHidden(false);
    } else {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Email').setHidden(true);
    }
    if (GetEnterpriseWebsite()) {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Web').setHidden(false);
    } else {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Web').setHidden(true);
    }
    if (GetEnterpriseFacebook()) {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_FB').setHidden(false);
    } else {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_FB').setHidden(true);
    }
    if (GetEnterpriseTwiter()) {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Twitter').setHidden(false);
    } else {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Twitter').setHidden(true);
    }
    if (GetEnterpriseInstagram()) {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Insta').setHidden(false);
    } else {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Insta').setHidden(true);
    }
    if (GetEnterpriseCoordinate()) {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Location').setHidden(false);
    } else {
        Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_Location').setHidden(true);
    }
}