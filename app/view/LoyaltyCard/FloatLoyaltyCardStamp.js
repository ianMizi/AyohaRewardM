
Ext.define('ianMizi.view.LoyaltyCard.FloatLoyaltyCardStamp', {

});

var _FloatLoyaltyCardStamp;


var isFloatLoyaltyCardStampOpen = 'N';






function FloatLoyaltyCardStamp() {

    _FloatLoyaltyCardStamp =
    Ext.create('Ext.Panel', {
        zIndex: 20,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatLoyaltyCardStampID',
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
                            _FloatLoyaltyCardStamp.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatLoyaltyCardStamp.hide(Ext.fx.Animation({
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
                                docked:'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatLoyaltyCardStampHeader',
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
                                                         id: 'btnFloatLoyaltyCardStampBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatLoyaltyCardStamp.hide(Ext.fx.Animation({
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
                                                         html: '<font size=2 color=white><b>My Loyalty Card Stamp</b></font>'
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
                                                                  id: 'containerFloatLoyaltyCardStampHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatLoyaltyCardStampHaiUser',
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
                                                                          id: 'containerFloatLoyaltyCardStampeWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatLoyaltyCardStampeWallet',
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
                                                               id: 'containerFloatLoyaltyCardStampPictureUser',
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
                                                                       id: 'btnFloatLoyaltyCardStampInfo',
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
                                style: "background-color: transparent",
                                height: '100%',
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true
                                },
                               
                                items: [

                                    {
                                        xtype: 'container',
                                        style: "background-color: transparent",
                                        height: 700,
                                        width: '100%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'center'

                                        },
                                       

                                        items: [





                                             {
                                                 xtype: 'container',
                                                 margin: '-45 0 0 0',
                                                // margin: '0 0 0 0',
                                                 width: '100%',
                                                 height: 300,
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

                                             {
                                                 margin: '5 0 0 0',

                                                 id: 'htmlMyFloatLoyaltyCardStamp',
                                             
                                                 html: '<font size=2 color=white><b>Expired Date: No Expiry</b></font>',
                                             },

                                                

                                                 ]
                                             },
                                           

                                             {
                                                 xtype: 'container',
                                                 id: 'containerFloatLoyaltyCardStampQrCode',
                                                 width: '100%',
                                                 height: 200,
                                                 hidden: true,
                                                 style: "background-color: transparent",
                                                 //style: "background-color: #F35B57;",

                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },


                                                 items: [






                                                       {
                                                           id: 'htmlFloatLoyaltyCardStampQRCode',
                                                           margin: '-100 0 0 20',
                                                           width: '100%',
                                                           height: '100%',
                                                           html: '<img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;" /><font size=2 color=white><b>Show This QR Code to be scanned by merchandiser</b></font>',
                                                       },





                                                       


                                                 ]

                                             },


















                                             ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatLoyaltyCardStampMaster',
                                                  width: '100%',
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
                                                           id: 'containerFloatLoyaltyCardStamp1',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                           //style: "background-color: #F35B57;",
                                                          height: 80,
                                                         //  height: 120,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [
                                                               {
                                                                   xtype: 'container',
                                                                   id: 'containerFloatLoyaltyCardStamp01',
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
                                                           id: 'btnStampTopImgOne_FloatLoyaltyCardStamp1',
                                                         hidden: true,
                                                           //   margin: '-10 0 0 0',
                                                           margin: '-95 0 0 0',
                                                           height: 110,
                                                           width: 100,
                                                           zIndex:100,
                                                           html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                           ui: 'plain',
                                                           handler: function () {
                                                             

                                                           }
                                                       },
                                                                   
                                                                        {
                                                                            xtype: 'button',
                                                                            height: 80,
                                                                            width: 80,
                                                                            zIndex: -10,
                                                                            margin: '-95 0 0 0',
                                                                            id: 'btnFloatLoyaltyCardStamp1',
                                                                            //badgeText: "2",
                                                                            html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp1">1</div></div>',
                                                                          //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: purple;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">1</div></div>',
                                                                            ui: 'plain',
                                                                            handler: function () {
                                                                               

                                                                            }
                                                                        },

                                                                        {
                                                                          hidden: true,
                                                                            margin: '-10 0 0 0',
                                                                           // margin: '-40 0 0 0',
                                                                            id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp1',
                                                                            html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                        },
                                                                         //{
                                                                         //    margin: '-10 0 0 0',
                                                                         //    id: 'htmlStampedByFloatLoyaltyCardStamp1',
                                                                         //    html: '<font size=1 color=white><b>Wati</b></font>'
                                                                         //}
                                                                   ]
                                                               },




                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardStamp02',
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
                                                                              id: 'btnStampTopImgOne_FloatLoyaltyCardStamp2',
                                                                              hidden: true,
                                                                              //margin: '-10 0 0 0',
                                                                              margin: '-95 0 0 0',
                                                                              height: 110,
                                                                              width: 100,
                                                                              zIndex: 100,
                                                                              html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                              ui: 'plain',
                                                                              handler: function () {


                                                                              }
                                                                          },
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 80,
                                                                              width: 80,
                                                                              zIndex: -10,
                                                                              margin: '-95 0 0 0',
                                                                              id: 'btnFloatLoyaltyCardStamp2',
                                                                              //badgeText: "2",
                                                                             // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: brown;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">2</div></div>',
                                                                              html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp2">2</div></div>',


                                                                              ui: 'plain',
                                                                              handler: function () {
                                                                             

                                                                              }
                                                                          },
 {
     hidden: true,
     margin: '-10 0 0 0',
     id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp2',
     html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
 },
                                                                         //{
                                                                         //    margin: '-10 0 0 0',
                                                                         //    id: 'htmlStampedByFloatLoyaltyCardStamp2',
                                                                         //    html: '<font size=1 color=white><b>Wati</b></font>'
                                                                         //}
                                                                     ]
                                                                 },





                                                                   {
                                                                       xtype: 'container',
                                                                       id: 'containerFloatLoyaltyCardStamp03',
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
                                                                                                               id: 'btnStampTopImgOne_FloatLoyaltyCardStamp3',
                                                                                                               hidden: true,
                                                                                                               margin: '-95 0 0 0',
                                                                                                               height: 110,
                                                                                                               width: 100,
                                                                                                               zIndex: 100,
                                                                                                               html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                                               ui: 'plain',
                                                                                                               handler: function () {


                                                                                                               }
                                                                                                           },
                                                                            {
                                                                                xtype: 'button',
                                                                                height: 80,
                                                                                width: 80,
                                                                                zIndex: -10,
                                                                                margin: '-95 0 0 0',
                                                                                id: 'btnFloatLoyaltyCardStamp3',
                                                                                //badgeText: "2",
                                                                               // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: blue;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">50%</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>Off</font></div></div>',
                                                                                html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp3">50%</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>Off</font></div></div>',


                                                                                ui: 'plain',
                                                                                handler: function () {


                                                                                }
                                                                            },
                                                                            {
                                                                                hidden: true,
                                                                                margin: '-10 0 0 0',
                                                                                id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp3',
                                                                                html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                            },

                                                                       ]
                                                                   },


                                                                  
                                                                   

                                                           ]

                                                       },

                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatLoyaltyCardStamp2',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                           //style: "background-color: #F35B57;",
                                                           height: 80,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [



                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardStamp04',
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
                                                                                id: 'btnStampTopImgOne_FloatLoyaltyCardStamp4',
                                                                                hidden: true,
                                                                                margin: '-95 0 0 0',
                                                                                height: 110,
                                                                                width: 100,
                                                                                zIndex: 100,
                                                                                html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                ui: 'plain',
                                                                                handler: function () {


                                                                                }
                                                                            },


                                                                             {
                                                                                 xtype: 'button',
                                                                                 //height: 80,
                                                                                 //width: 80,
                                                                                 //margin: '0 0 0 0',
                                                                                 height: 80,
                                                                                 width: 80,
                                                                                 zIndex: -10,
                                                                                 margin: '-95 0 0 0',
                                                                                 id: 'btnFloatLoyaltyCardStamp4',
                                                                                 //badgeText: "2",
                                                                                 //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #8A54EE;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">4</div></div>',
                                                                                 html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp4">4</div></div>',

                                                                               
                                                                                 ui: 'plain',
                                                                                 handler: function () {
                                                                                    

                                                                                 }
                                                                             },
                                                                               {
                                                                                   hidden: true,
                                                                                   margin: '-10 0 0 0',
                                                                                   id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp4',
                                                                                   html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                               },

                                                                     ]
                                                                 },










                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardStamp05',
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
                                                                                id: 'btnStampTopImgOne_FloatLoyaltyCardStamp5',
                                                                                hidden: true,
                                                                                margin: '-95 0 0 0',
                                                                                height: 110,
                                                                                width: 100,
                                                                                zIndex: 100,
                                                                                html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                ui: 'plain',
                                                                                handler: function () {


                                                                                }
                                                                            },
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 80,
                                                                              width: 80,
                                                                              zIndex: -10,
                                                                              margin: '-95 0 0 0',
                                                                              id: 'btnFloatLoyaltyCardStamp5',
                                                                              //badgeText: "2",
                                                                              // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #00FF00;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">5</div></div>',
                                                                              html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp5">5</div></div>',

                                                                              ui: 'plain',
                                                                              handler: function () {
                                                                                  alert("sdfdsf");

                                                                              }
                                                                          },
                                                                           {
                                                                               hidden: true,
                                                                               margin: '-10 0 0 0',
                                                                               id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp5',
                                                                               html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                           },

                                                                     ]
                                                                 },
                                                             



                                                             
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardStamp06',
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
                                                                             id: 'btnStampTopImgOne_FloatLoyaltyCardStamp6',
                                                                             hidden: true,
                                                                             margin: '-95 0 0 0',
                                                                             height: 110,
                                                                             width: 100,
                                                                             zIndex: 100,
                                                                             html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                             ui: 'plain',
                                                                             handler: function () {


                                                                             }
                                                                         },

                                                                           {
                                                                               xtype: 'button',
                                                                               height: 80,
                                                                               width: 80,
                                                                               zIndex: -10,
                                                                               margin: '-95 0 0 0',
                                                                               id: 'btnFloatLoyaltyCardStamp6',
                                                                               //badgeText: "2",
                                                                               // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #F5B34D;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">6</div></div>',
                                                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp6">6</div></div>',

                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                 

                                                                               }
                                                                           },
                                                                             {
                                                                                 hidden: true,
                                                                                 margin: '-10 0 0 0',
                                                                                 id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp6',
                                                                                 html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                             },
                                                                     ]
                                                                 
                                                                 },



                                                                  
                                                                  

                                                           ]

                                                       },






                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatLoyaltyCardStamp3',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                           //style: "background-color: #F35B57;",
                                                           height: 80,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [




                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatLoyaltyCardStamp07',
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
                                                                              id: 'btnStampTopImgOne_FloatLoyaltyCardStamp7',
                                                                              hidden: true,
                                                                              margin: '-95 0 0 0',
                                                                              height: 110,
                                                                              width: 100,
                                                                              zIndex: 100,
                                                                              html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                              ui: 'plain',
                                                                              handler: function () {


                                                                              }
                                                                          },

                                                                             {
                                                                                 xtype: 'button',
                                                                                 height: 80,
                                                                                 width: 80,
                                                                                 zIndex: -10,
                                                                                 margin: '-95 0 0 0',
                                                                                 id: 'btnFloatLoyaltyCardStamp7',
                                                                                 //badgeText: "2",
                                                                                 //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #E35CE1;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:15px 0px 0px 0px"><font size=5>ONLY</font></div><br><div style="margin:-20px 0px 0px 0px"><font size=5>RM1</font></div></div>',
                                                                                 html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:15px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp7"><font size=5>ONLY</font></div><br><div style="margin:-20px 0px 0px 0px"><font size=5>RM1</font></div></div>',

                                                                                 ui: 'plain',
                                                                                 handler: function () {
                                                                                     alert("sdfdsf");

                                                                                 }
                                                                             },
                                                                              {
                                                                                  hidden: true,
                                                                                  margin: '-10 0 0 0',
                                                                                  id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp7',
                                                                                  html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                              },
                                                                      ]
                                                                  },




                                                              
                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatLoyaltyCardStamp08',
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
                                                                              id: 'btnStampTopImgOne_FloatLoyaltyCardStamp8',
                                                                              hidden: true,
                                                                              margin: '-95 0 0 0',
                                                                              height: 110,
                                                                              width: 100,
                                                                              zIndex: 100,
                                                                              html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                              ui: 'plain',
                                                                              handler: function () {


                                                                              }
                                                                          },
                                                                            {
                                                                                xtype: 'button',
                                                                                height: 80,
                                                                                width: 80,
                                                                                zIndex: -10,
                                                                                margin: '-95 0 0 0',
                                                                                id: 'btnFloatLoyaltyCardStamp8',
                                                                                //badgeText: "2",
                                                                                //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: orange;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">8</div></div>',
                                                                                html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp8">8</div></div>',

                                                                                ui: 'plain',
                                                                                handler: function () {
                                                                                    alert("sdfdsf");

                                                                                }
                                                                            },
                                                                             {
                                                                                 hidden: true,
                                                                                 margin: '-10 0 0 0',
                                                                                 id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp8',
                                                                                 html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                             },
                                                                      ]
                                                                  },

                                                                 



                                                                 
                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatLoyaltyCardStamp09',
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
                                                                               id: 'btnStampTopImgOne_FloatLoyaltyCardStamp9',
                                                                               hidden: true,
                                                                               margin: '-95 0 0 0',
                                                                               height: 110,
                                                                               width: 100,
                                                                               zIndex: 100,
                                                                               html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                               ui: 'plain',
                                                                               handler: function () {


                                                                               }
                                                                           },
                                                                             {
                                                                                 xtype: 'button',
                                                                                 height: 80,
                                                                                 width: 80,
                                                                                 zIndex: -10,
                                                                                 margin: '-95 0 0 0',
                                                                                 id: 'btnFloatLoyaltyCardStamp9',
                                                                                 //badgeText: "2",
                                                                                 //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #808000;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">9</div></div>',
                                                                                 html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp9">9</div></div>',
                                                                                 ui: 'plain',
                                                                                 handler: function () {
                                                                                     alert("sdfdsf");

                                                                                 }
                                                                             },
                                                                             {
                                                                                 hidden: true,
                                                                                 margin: '-10 0 0 0',
                                                                                 id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp9',
                                                                                 html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                             },
                                                                      ]
                                                                  },

                                                                 

                                                           ]

                                                       },


                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatLoyaltyCardStamp4',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                           //style: "background-color: #F35B57;",
                                                           height: 80,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [



                                                                
                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatLoyaltyCardStamp10',
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
                                                                               id: 'btnStampTopImgOne_FloatLoyaltyCardStamp10',
                                                                               hidden: true,
                                                                               margin: '-95 0 0 0',
                                                                               height: 110,
                                                                               width: 100,
                                                                               zIndex: 100,
                                                                               html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                               ui: 'plain',
                                                                               handler: function () {


                                                                               }
                                                                           },

                                                                           {
                                                                               xtype: 'button',
                                                                               height: 80,
                                                                               width: 80,
                                                                               zIndex: -10,
                                                                               margin: '-95 0 0 0',
                                                                               id: 'btnFloatLoyaltyCardStamp10',
                                                                               //badgeText: "2",
                                                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #008080;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">10</div></div>',
                                                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp10">10</div></div>',

                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                
                                                                               }
                                                                           },


                                                                            {
                                                                                hidden: true,
                                                                                margin: '-10 0 0 0',
                                                                                id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp10',
                                                                                html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
                                                                            },
                                                                      ]
                                                                  },










                                                                      {
                                                                          xtype: 'container',
                                                                          id: 'containerFloatLoyaltyCardStamp11',
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
                                                                                    id: 'btnStampTopImgOne_FloatLoyaltyCardStamp11',
                                                                                    hidden: true,
                                                                                    margin: '-95 0 0 0',
                                                                                    height: 110,
                                                                                    width: 100,
                                                                                    zIndex: 100,
                                                                                    html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                    ui: 'plain',
                                                                                    handler: function () {
                                                                                      

                                                                                    }
                                                                                },

                                                                                  {
                                                                                      xtype: 'button',
                                                                                      height: 100,
                                                                                      width: 100,
                                                                                      // margin: '0 0 0 0',
                                                                                      zIndex: -10,
                                                                                      margin: '-95 0 0 0',
                                                                                      id: 'btnFloatLoyaltyCardStamp11',
                                                                                      //badgeText: "2",
                                                                                      //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1.png); background-size: 100% 100%;" ></div>',
                                                                                      html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',
                                                                                      ui: 'plain',
                                                                                      handler: function () {
                                                                                          alert("sdfdsf");

                                                                                      }
                                                                                  },

                                                                                   {
                                                                                       hidden: true,
                                                                                       margin: '-10 0 0 0',
                                                                                       id: 'htmlDateTimeStampbyFloatLoyaltyCardStamp11',
                                                                                       html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>'
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


                            





                                 



                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              


                              {
                                  xtype: 'container',
                                  id: 'containerFloatLoyaltyCardStampTitleOutter',
                                  width: '100%',
                                  height: 95,
                                  docked: 'bottom',
                                 
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
                                          id: 'containerFloatLoyaltyCardStampTitleInner',
                                          width: '100%',
                                          height: 35,
                                          margin: '5 0 0 0',
                                          style: "background-color:transparent;",
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [


                                                {
                                                    margin: '-20 0 0 0',

                                                    html: '<font size=2 color=white><b>Contact Us</b></font>',
                                                },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatLoyaltyCardStampbottom',
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
                                                                id: 'btnFloatLoyaltyCardStampbottomFB',
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
                                                                 id: 'btnFloatLoyaltyCardStampbottomInsta',
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
                                                                 id: 'btnFloatLoyaltyCardStampbottomTwitter',
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
                                                                 id: 'btnFloatLoyaltyCardStampbottomWeb',
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
                                                                  id: 'btnFloatLoyaltyCardStampbottomCall',
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
                                                                  id: 'btnFloatLoyaltyCardStampbottomWassap',
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
                                          id: 'containerFloatLoyaltyCardStampButtons',
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
                                                  id: 'containerFloatLoyaltyCardStampTitlePointHistory',
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
                                                           id: 'btnPointHistory_FloatLoyaltyCardStamp',
                                                           //  badgeText: '1',
                                                           margin: '-5 0 0 0',
                                                           height: 45,
                                                           width: 45,
                                                           html: '<img src="resources/icons/StampTwo.png" width="35" height="35" alt="Company Name">',
                                                           ui: 'plain',
                                                           handler: function () {
                                                               Ext.getCmp('htmlMyFloatLoyaltyCardStamp').setHtml('<font size=2 color=white><b>Expired Date:No Expiry</font>')
                                                               Ext.getCmp('containerFloatLoyaltyCardStampMaster').setHidden(false);
                                                               Ext.getCmp('containerFloatLoyaltyCardStampQrCode').setHidden(true);

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
                                              id: 'containerFloatLoyaltyCardStampTitleQrCode',
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
                                                       id: 'btnQrCode_FloatLoyaltyCardStamp',
                                                       //  badgeText: '1',
                                                       margin: '-5 0 0 0',
                                                       height: 45,
                                                       width: 45,
                                                       html: '<img src="resources/icons/qrcodetwo.png" width="35" height="35" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();


                                                           // Ext.getCmp('btnPointLoyaltyCard').setHtml('<img src="resources/icons/qrcodetwo.png" width="20" height="20" alt="Company Name">');


                                                           CreateQRCodeForFloatLoyaltyCardStamp();



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


                ]
            },












        ]





    });
    return _FloatLoyaltyCardStamp;



}








function FloatLoyaltyCardStampShow() {

    Ext.Viewport.remove(_FloatLoyaltyCardStamp);
    this.overlay = Ext.Viewport.add(FloatLoyaltyCardStamp());
    this.overlay.show();
    isFloatLoyaltyCardStampOpen = 'Y';
   
    Load_FloatLoyaltyCard_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore();


}





function FloatLoyaltyCardStampHide() {
    _FloatLoyaltyCardStamp.hide(); isFloatLoyaltyCardStampOpen = 'N';
}








function CreateQRCodeForFloatLoyaltyCardStamp() {
    //var billIDs = (getUrlParameter('BillID')); // "1234"
    //var templatecodes = (getUrlParameter('TemplateCode')); // "edit"
    //   var srcUrl = 'https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';


    Ext.getCmp('htmlMyFloatLoyaltyCardStamp').setHtml('<font size=2 color=white><b>Stamp QR Code</b></font>')
    Ext.getCmp('containerFloatLoyaltyCardStampMaster').setHidden(true);
    Ext.getCmp('containerFloatLoyaltyCardStampQrCode').setHidden(false);






    jQuery('#qrcodeCanvas').qrcode({
        //text: "http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
        //text: 'http://42.1.63.57/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
        text: GetCurrentAccountNo()
    });

    var can = document.getElementsByTagName("canvas");
    var src = can[0].toDataURL("image/png");
    Ext.getCmp('htmlFloatLoyaltyCardStampQRCode').setHtml('<img src="' + src + '" style="width: 90%; height: 90%; border:1px solid white;" /><br><font size=2 color=white><b>*This QR Code to be scanned by merchandiser</b></font>');
    src = "";
    // Ext.getCmp('htmlLoyaltyCardClientID').setHtml('<font size=2 color=black>ID:' + GetCurrentAccountNo() + '</font>');
    // Ext.getCmp('htmlPointLoyaltyCardLbl').setHtml('<font size=2 color=black>QR Code Point (' + GetCurrentAccountNo() + ')</font>');
    //console.log("QRCodeImg" + src);
    //localStorage.setItem('QRCodeImg', src);
}


function Load_FloatLoyaltyCard_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore() {
   
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').getProxy().setExtraParams({
    SubscriberAccNo: GetCurrentAccountNo(),
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo:  GetCurrentAccountNo(),
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore');
        count = myStore.getCount();

        // adjustHeight();
        Ext.Viewport.setMasked(false);

        if (count <= 0) {
            return;
        }

        var No = 0;
        

        Ext.getCmp('containerFloatLoyaltyCardStampMaster').setMargin('-5 0 0 0');
        for (var ii = 0; ii < count; ii++) {
            var modelRecord = myStore.getAt(ii);
            var StampedByDate = modelRecord.get('StampedByDate');
            var StampedBy = modelRecord.get('StampedBy');
            No=ii+1;

            
            var x = document.getElementById("divContentFloatLoyaltyCardStamp" + No).textContent;
            console.log(x);



          
          
          
            if (x != No) {
                var ycontent = Ext.getCmp('btnFloatLoyaltyCardStamp' + No).getHtml();               
                var randomcolor = getRandomColor();
                var replaceBgColor = ycontent.replace("#85929E", randomcolor);             
                Ext.getCmp('btnStampTopImgOne_FloatLoyaltyCardStamp' + No).setHidden(false);
                Ext.getCmp('btnFloatLoyaltyCardStamp' + No).setHtml(replaceBgColor.replace("#566573", 'white'));
                Ext.getCmp('htmlDateTimeStampbyFloatLoyaltyCardStamp' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                Ext.getCmp('htmlDateTimeStampbyFloatLoyaltyCardStamp' + No).setHidden(false);
            } else{

                Ext.getCmp('btnStampTopImgOne_FloatLoyaltyCardStamp' + No).setHidden(false);
                Ext.getCmp('btnFloatLoyaltyCardStamp' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + No + '</div></div>');
                //Ext.getCmp('htmlDateTimeStampbyFloatLoyaltyCardStamp' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                Ext.getCmp('htmlDateTimeStampbyFloatLoyaltyCardStamp' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                Ext.getCmp('htmlDateTimeStampbyFloatLoyaltyCardStamp' + No).setHidden(false);
            }
            if (No == 1) {
                Ext.getCmp('containerFloatLoyaltyCardStamp1').setHeight(100);
            }
            if (No == 4) {
                Ext.getCmp('containerFloatLoyaltyCardStamp2').setHeight(100);
            }
            if (No == 7) {
                Ext.getCmp('containerFloatLoyaltyCardStamp3').setHeight(100);
            }
            if (No == 10) {
                Ext.getCmp('containerFloatLoyaltyCardStamp4').setHeight(100);
            }
            
        }







    });
    task.delay(2000);
}





function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return '#fac;background-image: linear-gradient(#ff00de75, #c800ffc9)';
}
