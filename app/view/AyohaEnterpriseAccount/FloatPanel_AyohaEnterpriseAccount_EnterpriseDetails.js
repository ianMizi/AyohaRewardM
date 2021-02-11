
Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails', {

});

var _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails;


var isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'N';



var isDeleteorSave;


function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails() {

    _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails =
    Ext.create('Ext.Panel', {
        zIndex: 200,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsID',
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
                            _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(Ext.fx.Animation({
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

                                id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHeader',
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
                                                         id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(Ext.fx.Animation({
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
                                                         id: 'htmlFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_TitleHeaderTxt',
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
                                                                  id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHaiUser',
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
                                                                          id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailseWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailseWallet',
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
                                                               id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsPictureUser',
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
                                                                       id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsInfo',
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
                                id: 'containerFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInformation',
                                width: '100%',
                                // height: 360,
                                height: '95%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsMaster',
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
                                                    Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails').setActiveItem(1);
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
                                                 margin: '2 0 0 0',
                                                 height: 160,
                                                 width: 160,
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogo',
                                                 html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
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

                                                                                html: '<font size=2 color=white>*Uploaded Image</font>',

                                                                            },


                                                                      ]
                                                                  },


                                               {
                                                   id: 'HtmlinputImgFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsUploadedImage',
                                                   hidden: true,
                                                   margin: '0 0 0 0',
                                                   width: '100%',
                                                   html: '<input type="file" id="inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage" accept="image/*"  onchange="inputImgFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsUploadedLogoImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                                   //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                               },





                                               {
                                                   margin: '-2 0 0 0',

                                                   id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName',
                                                   width: '100%',
                                                   height: 20,
                                                   html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                               },

                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage',
                                                                 name: 'clickablebtnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage',
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

                          html: '<font size=2 color=white>*Enterprise Name</font>',

                      },

                       {
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName',
                           margin: '-2 0 0 0',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                       },



                       {
                           margin: '3 0 0 0',
                           hidden: true,
                           html: '<font size=2 color=white>Enterprise HQAccNo</font>',

                       },

                       {
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseHQAccNo',
                           margin: '-2 0 0 0',
                           hidden: true,
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseHQAccNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                       },

                        {
                            margin: '3 0 0 0',
                            //  hidden:true,
                            id: 'HtmlFloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo_txt',
                            html: '<font size=2 color=white>Enterprise AccNo</font>',

                        },

                       {
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseAccNo',
                           margin: '-2 0 0 0',
                          // hidden: true,
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                       },

                        {
                            margin: '3 0 0 0',

                            html: '<font size=2 color=white>*Address</font>',

                        },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address',
                           width: '90%',
                           height: 50,
                           // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                           html: '<textarea id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" style="width:100%;height:50px;padding: 0px 0px;box-sizing: border-box;border: 1px solid white;border-radius: 4px;background-color: transparent;color:white;font-size: 12px;font-weight:bold" wrap="hard" ></textarea>'
                           // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                       },
                       ////




                       /////




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

                                                          html: '<font size=2 color=white>Business Registration No.</font>',

                                                      },


                                                ]
                                            },






               {

                   id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo',
                   margin: '-2 0 0 0',
                   width: '100%',
                   height: 20,
                   html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


               },

                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/ballonInfoIconWhite.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {

                                           }
                                       },

                           ]

                       },

                       {
                           margin: '3 0 0 0',

                           html: '<font size=2 color=white>Email</font>',

                       },

                       {

                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail',
                           margin: '-2 0 0 0',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                       },





                       {
                           margin: '3 0 0 0',

                           html: '<font size=2 color=white>Phone No</font>',

                       },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                       },


                       //////




                       ///////
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

                                                      html: '<font size=2 color=white>*Business Type</font>',

                                                  },


                                            ]
                                        },







                     {
                         margin: '-2 0 0 0',
                         id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseBusinessType',
                         width: '100%',
                         height: 20,
                         html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                     },

                                    ]

                                },


                                 //{
                                 //    xtype:'container'

                                 //},
                                   {
                                       xtype: 'button',
                                       id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType',
                                       //  badgeText: '1',
                                       margin: '0 0 -10 0',
                                       height: 35,
                                       width: 35,
                                       html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                       ui: 'plain',
                                       handler: function () {
                                           FloatPanel_BusinessTypeListShow();
                                           _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();
                                       }
                                   },

                       ]

                   },



                       {
                           margin: '3 0 0 0',

                           html: '<font size=2 color=white>Enterprise Description</font>',

                       },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },










                       /////

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

                                                        html: '<font size=2 color=white>Facebook</font>',

                                                    },


                                                ]
                                            },





               {
                   margin: '-2 0 0 0',
                   id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook',
                   width: '90%',
                   height: 20,
                   html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

               },


                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/facebookWhiteIcon.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {

                                           }
                                       },

                           ]

                       },
                       ////








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

                                                         html: '<font size=2 color=white>Twitter</font>',

                                                     },


                                                ]
                                            },






                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },

                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/twitterWhiteIcon.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {

                                           }
                                       },

                           ]

                       },



                       //////

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

                                                       html: '<font size=2 color=white>Instagram</font>',

                                                   },

                                                ]
                                            },





                {
                    margin: '-2 0 0 0',
                    id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram',
                    width: '90%',
                    height: 20,
                    html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                },


                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/instagramWhiteIcon.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {

                                           }
                                       },

                           ]

                       },




                       /////







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

                              html: '<font size=2 color=white>WebSite</font>',

                          },

                                                  ]
                                              },






                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },



                                          ]

                                      },


                                       //{
                                       //    xtype:'container'

                                       //},
                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite',
                                             //  badgeText: '1',
                                             margin: '0 0 -10 0',
                                             height: 35,
                                             width: 35,
                                             html: '<img src="resources/icons/websiteWhiteIcon.png" width="25" height="25" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {

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

                                                       html: '<font size=2 color=white>Enterprise Location Coordinate</font>',

                                                   },

                                                ]
                                            },




                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate',
                           width: '100%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },


                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/ballonInfoIconWhite.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {

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

                                                     html: '<font size=2 color=white>*Enterprise Branch Type(HQ/Branch)</font>',

                                                 },


                                                ]
                                            },




                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType',
                           width: '100%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },


                                        ]

                                    },


                                     //{
                                     //    xtype:'container'

                                     //},
                                       {
                                           xtype: 'button',
                                           id: 'btnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType',
                                           //  badgeText: '1',
                                           margin: '0 0 -10 0',
                                           height: 35,
                                           width: 35,
                                           html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {
                                               FloatPanel_EnterprisesBranchTypeListShow();
                                           }
                                       },

                           ]

                       },






                        {
                            margin: '3 0 0 0',

                            html: '<font size=2 color=white>*Owner/PIC</font>',

                        },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },

                       {
                           margin: '3 0 0 0',

                           html: '<font size=2 color=white>*Owner/PIC Contact No</font>',

                       },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },
                          {
                              margin: '3 0 0 0',
                              hidden: true,
                              html: '<font size=2 color=white>Loyalty Card Type</font>',

                          },

                       {
                           hidden: true,
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },
                           {
                               margin: '3 0 0 0',
                               id:'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_RegisterDate',
                               html: '<font size=2 color=white>Register Date</font>',

                           },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },

                       {
                           margin: '3 0 0 0',
                           hidden: true,
                           html: '<font size=2 color=white>Register By</font>',

                       },

                       {
                           hidden: true,
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedBy',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedBy" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },

                       {
                           margin: '3 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersionTxt',
                           html: '<font size=2 color=white>Versions</font>',

                       },

                       {
                           margin: '-2 0 0 0',
                           id: 'FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion',
                           width: '90%',
                           height: 20,
                           html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion"   style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                       },
              {
                  xtype: 'container',

                  width: '100%',
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
                  xtype: 'button',
                  //  align: 'stretch',
                  flex: 1,
                  ui: 'plain',
                  // width: '80%',
                  height: 50,
                  margin: '7 0 0 0',
                  id: 'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Delete',
                  // width: '80%',
                  //style: {
                  //    background: '#FA8072',
                  //},
                  // padding: '10px',
                  //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                  text: '<button class="buttonStampCampaignCreate">Delete</button>',

                  handler: function () {


                      isDeleteorSave = 'Delete';

                      Swal.fire({
                          title: 'Are you sure want to delete?',
                          // text: "You won't be able to revert this!",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: 'Yes'
                      }).then(function (result) {
                          if (result.isConfirmed) {


                              FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("InActive");
                            
                          }
                      })


                  
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
                                                                  //  },
                         {
                             xtype: 'button',
                             flex: 1,
                             //  align: 'stretch',

                             ui: 'plain',
                             //  width: '80%',
                             height: 50,
                             margin: '7 0 0 0',
                             id: 'btn_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Save',
                             // width: '80%',
                             //style: {
                             //    background: '#FA8072',
                             //},
                             // padding: '10px',
                             //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                             text: '<button class="buttonStampCampaignCreate">Save</button>',

                             handler: function () {
                                 isDeleteorSave = 'Save';
                                 FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount("Active");
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



                                     //////////////////////








                                        ]

                                    },












                                ]

                            },
                              




                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails;



}








function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsShow(EnterpriseAccNo) {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails());
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'Y';


    Load_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisesLoadByEnterpriseAccNoStore(EnterpriseAccNo);

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_uploadEnterpriseLogoImg();
      }
    );






}



function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsAddNewShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails());
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'Y';

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadLogoImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_uploadEnterpriseLogoImg();
      }
    );



    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersionTxt').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_RegisterDate').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate').setHidden(true);
    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseAccNo').setHidden(true);
    Ext.getCmp('HtmlFloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo_txt').setHidden(true);

    Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Add New Enterprise</b></font>')
}


function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHide() {
    _FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails.hide(); isFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsOpen = 'N';
}



//var StampCount;

function Load_FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisesLoadByEnterpriseAccNoStore(EnterpriseAccNo) {

    Ext.getStore('EnterprisesLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
        EnterpriseAccNo: EnterpriseAccNo,

    });
    Ext.StoreMgr.get('EnterprisesLoadByEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisesLoadByEnterpriseAccNoStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccNo
        });
        Ext.StoreMgr.get('EnterprisesLoadByEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('EnterprisesLoadByEnterpriseAccNoStore');
        var modelRecord = myStore.getAt(0);




        Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogo').setHtml('<img src="' + modelRecord.get('EnterpriseLogoPath') + '" width="160" height="160"/>')

        globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID = modelRecord.get('ID');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value = modelRecord.get('EnterpriseLogoName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseHQAccNo').value = modelRecord.get('EnterpriseHQAccNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value = modelRecord.get('EnterpriseAccNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value = modelRecord.get('EnterpriseName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value = modelRecord.get('EnterpriseAddress');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo').value = modelRecord.get('EnterpriseRegistrationNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value = modelRecord.get('EnterpriseEmail');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo').value = modelRecord.get('EnterprisePhoneNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value = modelRecord.get('EnterpriseType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions').value = modelRecord.get('EnterpriseDescriptions');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook').value = modelRecord.get('EnterpriseFacebook');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter').value = modelRecord.get('EnterpriseTwiter');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram').value = modelRecord.get('EnterpriseInstagram');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite').value = modelRecord.get('EnterpriseWebsite');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate').value = modelRecord.get('EnterpriseCoordinate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value = modelRecord.get('EnterpriseBusinessType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value = modelRecord.get('PersonInCharge');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value = modelRecord.get('PICContactNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType').value = modelRecord.get('LoyaltyCardType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedDate').value = modelRecord.get('CreatedDate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCreatedBy').value = modelRecord.get('CreatedBy');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion').value = modelRecord.get('AyohaVersion');

        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}











var globalEnterpriseLogoImageBase64;
var globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID;
function inputImgFloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsUploadedLogoImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    if (FileSize > 4096) {


        swalFireFail("Image size cannot exceeds 4 MB!");
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalEnterpriseLogoImageBase64 = event.target.result;
                    document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value = fileName;
                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogo').setHtml('<img src=' + globalEnterpriseLogoImageBase64 + ' width="160" height="160"/>')


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





function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_uploadEnterpriseLogoImg() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_UploadedLogoImage").click();
    });
}















function FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_SaveAyohaEnterpriseAccount(RowStatus) {



    var EnterpriseName= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value;
    var EnterpriseAddress = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value;
    var BusinessType= document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value;
    var EnterpriseType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value;
    var PersonInChargeContactNo =  document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value;
    var PersonInCharge = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value;




    if (!EnterpriseName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Name required!</font>");
        return;
    }
    if (!EnterpriseAddress) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Address required!</font>");
        return;
    }
    if (!BusinessType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Business Type required!</font>");
        return;
    }
    if (!EnterpriseType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Enterprise Branch Type required!</font>");
        return;
    }
    if (!PersonInChargeContactNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Contact No required!</font>");
        return;
    }
    if (!PersonInCharge) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Person In Charge Name required!</font>");
        return;
    }
    var imgbase64;

    if (globalEnterpriseLogoImageBase64) {
        imgbase64 = globalEnterpriseLogoImageBase64;
    } else {
        imgbase64 = "ExistingImage";
    }
    var EnterpriseAccNo;
    if (isAddNewEnterprise == 'Y') {
        var currEnterpriseAccNo = GetEnterpriseAccNo();
        var res = currEnterpriseAccNo.split("-");
        var genNumber = Math.floor(Math.random() * 99999) + 1;
        EnterpriseAccNo = res[0] + "-" + genNumber;
        globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID = 0;
    } else
    {
        EnterpriseAccNo=  document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseAccNo').value
        
    }
  
   

    var gile = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value;
    console.log(gile);
    var ImgPaths = "http://42.1.63.57/AyohaImgCard/Logo/" + GetEnterpriseAccNo() + "/" + document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalFloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_ID,
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "EnterpriseAccNo": EnterpriseAccNo,
        "EnterpriseName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseName').value,
        "EnterpriseAddress": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address').value,
        "EnterprisePhoneNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterprisePhoneNo').value,
        "EnterpriseRegistrationNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseRegistrationNo').value,
        "EnterpriseEmail": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseEmail').value,
        "EnterpriseWebsite": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseWebsite').value,
        "EnterpriseDescriptions": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseDescriptions').value,
        "EnterpriseFacebook": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseFacebook').value,
        "EnterpriseTwiter": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseTwitter').value,
        "EnterpriseInstagram": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseInstagram').value,
        "EnterpriseCoordinate": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseCoordinate').value,
        "EnterpriseLogoPath": ImgPaths,
        "EnterpriseLogoName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseLogoName').value,
        "RowStatus": RowStatus,
        "CreatedBy": document.getElementById('UN').value,
        "PICContactNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInChargeContactNo').value,
        "PersonInCharge": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_PersonInCharge').value,
        "LoyaltyCardType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_LoyaltyCardType').value,
        "EnterpriseType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseType').value,
        "EnterpriseBusinessType": gile,
        "AyohaVersion": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_EnterpriseVersion').value,
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

                isDeleteorSave
                swalFireSuccess(isDeleteorSave + " Succesfully!");
                


            }
            else {

                swalFireFail(isDeleteorSave + " Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail(isDeleteorSave + "Failed!!");
        }
       
    });
    FloatPanel_AyohaEnterpriseAccount_EnterpriseDetailsHide();
    Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseHQAccNoStore();
}