
Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails', {

});

var _FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails;


var isFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsOpen = 'N';

var isFromUserEnterpriseDetails;

var isDeleteorSave;


function FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails() {

    _FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails =
    Ext.create('Ext.Panel', {
        zIndex: 200,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsID',
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
                            _FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsOpen = 'N';
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

                                id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsHeader',
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
                                                         id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsOpen = 'N';
                                                         }
                                                     },
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_TitleHeaderTxt',
                                                         html: '<font size=2 color=white><b>Add New User</b></font>'
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
                                                                  id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsHaiUser',
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
                                                                          id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailseWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailseWallet',
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
                                                               id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPictureUser',
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
                                                                       id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsInfo',
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
                                id: 'containerFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_EnterpriseInformation',
                                width: '100%',
                                // height: 360,
                                height: '95%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsMaster',
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
                                                    Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails').setActiveItem(1);
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
                                                  id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPicProfile',
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
                                                                                 hidden: true,
                                                                                 html: '<font size=2 color=white>*Uploaded Image</font>',

                                                                             },


                                                                       ]
                                                                   },


                                                {
                                                    id: 'HtmlinputImgFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadedPhoto',
                                                    hidden: true,
                                                    margin: '0 0 0 0',
                                                    width: '100%',
                                                    html: '<input type="file" id="inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadedPhoto" accept="image/*"  onchange="inputImgFloatPanel_AyohaEnterpriseAccountUserEnterpriseUploadedProfileImg()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                                    //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                                },





                                                {
                                                    margin: '-2 0 0 0',

                                                    id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhotoName',
                                                    width: '100%',
                                                    height: 20,
                                                    html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhotoName"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: right;font-size:12px;">'


                                                },

                                                               ]

                                                           },


                                                            //{
                                                            //    xtype:'container'

                                                            //},
                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadPhoto',
                                                                  name: 'clickablebtnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadPhoto',
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
                                                 hidden: true,
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoto',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoto"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                             },
                                            {
                                                margin: '3 0 0 0',
                                                hidden: true,
                                                html: '<font size=2 color=white>ID</font>',

                                            },

                                             {
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsID',
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsID"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                             },



                                              {
                                                  margin: '3 0 0 0',
                                                  hidden: true,
                                                  html: '<font size=2 color=white>Account No</font>',

                                              },

                                             {
                                                 //margin: '-2 0 0 0',
                                                 //id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber',
                                                 //margin: '-2 0 0 0',
                                                 //width: '80%',
                                                 //height: 20,
                                                 //html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;">'

                                                 hidden: true,
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountNo',
                                                 margin: '-2 0 0 0',
                                                 width: '80%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'



                                             },

                                             {
                                                 margin: '3 0 0 0',
                                                 //hidden: true,
                                                 html: '<font size=2 color=white>*Account Name</font>',

                                             },

                                             {
                                                 //hidden: true,
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountName',
                                                 margin: '-2 0 0 0',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                             },



                                             {
                                                 margin: '3 0 0 0',

                                                 html: '<font size=2 color=white>Email</font>',

                                             },

                                             {

                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsEmail',
                                                 margin: '-2 0 0 0',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsEmail"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                             },





                                             {
                                                 margin: '3 0 0 0',

                                                 html: '<font size=2 color=white>*Phone Number</font>',

                                             },

                                             {
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'


                                             },


                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 hidden:true,
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
                                                id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserType',
                                                width: '100%',
                                                height: 20,
                                                html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsDOB" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                                            },


                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserDOB',
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
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsARegisterDate',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsRegisterDate" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                                             },




                                             {
                                                 margin: '3 0 0 0',
                                                 hidden: true,
                                                 html: '<font size=2 color=white>IsUserVerified</font>',

                                             },

                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsIsUserVerified',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsIsUserVerified"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                                             },



                                             {
                                                 margin: '3 0 0 0',
                                                 hidden: true,
                                                 html: '<font size=2 color=white>VerifyString</font>',

                                             },

                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsVerifyString',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsVerifyString"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                                             },
                                             {
                                                 margin: '3 0 0 0',
                                                 hidden: true,
                                                 html: '<font size=2 color=white>Verify Date</font>',

                                             },

                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsVeriyDate',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsVeriyDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                                             },




                                              {
                                                  margin: '3 0 0 0',
                                                  hidden: true,
                                                  html: '<font size=2 color=white>ModifiedBy</font>',

                                              },

                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsModifiedBy',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsModifiedBy"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                                             },
                                             {
                                                 margin: '3 0 0 0',
                                                 hidden: true,
                                                 html: '<font size=2 color=white>ModifiedDate</font>',

                                             },

                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsModifiedDate',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsModifiedDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                                             },
                                              {
                                                  margin: '3 0 0 0',
                                                  hidden: true,
                                                  html: '<font size=2 color=white>EnterpriseAccNo</font>',

                                              },

                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsEnterpriseAccNo',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsEnterpriseAccNo"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

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

                                                                                html: '<font size=2 color=white>*User Type</font>',

                                                                            },



                                                                            ]
                                                                        },




                                                  {
                                                      margin: '-2 0 0 0',
                                                      id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserType',
                                                      width: '100%',
                                                      height: 20,
                                                      html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserType" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                                                  },


                                                                    ]

                                                                },


                                                                 //{
                                                                 //    xtype:'container'

                                                                 //},
                                                                   {
                                                                       xtype: 'button',
                                                                       id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserType',
                                                                       //  badgeText: '1',
                                                                       margin: '0 0 -10 0',
                                                                       height: 35,
                                                                       width: 35,
                                                                       html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                                                       ui: 'plain',
                                                                       handler: function () {
                                                                           isFromUserEnterpriseDetails = 'Y';
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

                                                                           html: '<font size=2 color=white>*UserStatus</font>',

                                                                       },



                                                                      ]
                                                                  },




                                            {
                                                margin: '-2 0 0 0',
                                                id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserStatus',
                                                width: '100%',
                                                height: 20,
                                                html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserStatus"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                                            },


                                                              ]

                                                          },


                                                           //{
                                                           //    xtype:'container'

                                                           //},
                                                             {
                                                                 xtype: 'button',
                                                                 id: 'btnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserStatus',
                                                                 //  badgeText: '1',
                                                                 margin: '0 0 -10 0',
                                                                 height: 35,
                                                                 width: 35,
                                                                 html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {
                                                                     isFromUserEnterpriseDetails = 'Y';
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
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsLastLoginDate',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsLastLoginDate" readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                                             },

                                    

                                     {
                                         margin: '26 0 0 0',

                                         html: '<font size=3 color=white>Login</font>',

                                     },


                                      {
                                          margin: '6 0 0 0',

                                          html: '<font size=2 color=white>*User Name</font>',

                                      },

                                             {
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserName',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserName"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                                             },
                                             {
                                                 margin: '3 0 0 0',

                                                 html: '<font size=2 color=white>*Password</font>',

                                             },

                                             {
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPassword',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="password" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

                                             },



                                             {
                                                 hidden: true,
                                                 margin: '-2 0 0 0',
                                                 id: 'FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPasswordTxt',
                                                 width: '100%',
                                                 height: 20,
                                                 html: '<input type="text" id="input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPasswordTxT"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

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
                                                 hidden:true,
                                                 //  align: 'stretch',
                                                 flex: 1,
                                                 ui: 'plain',
                                                 // width: '80%',
                                                 height: 50,
                                                 margin: '7 0 0 0',
                                                 id: 'btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Delete',
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


                                                       

                                                             FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_SaveDelete("InActive")

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
                                                            hidden: true,
                                                            //  align: 'stretch',

                                                            ui: 'plain',
                                                            //  width: '80%',
                                                            height: 50,
                                                            margin: '7 0 0 0',
                                                            id: 'btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Save',
                                                            // width: '80%',
                                                            //style: {
                                                            //    background: '#FA8072',
                                                            //},
                                                            // padding: '10px',
                                                            //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                                                            text: '<button class="buttonStampCampaignCreate">Save</button>',

                                                            handler: function () {
                                                                isDeleteorSave = 'Save';
                                                               
                                                                FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_SaveDelete("Active")
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











                                ]

                            },





                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails;



}








function FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsShow(AccountNo) {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails());
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsOpen = 'Y';


    


    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadPhoto]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_UserEnterpriseDetailsUploadPhoto();
      }
    );


    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Delete').setHidden(false);
    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Save').setHidden(false);


    Load_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo);
}



function FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAddNewShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails());
    this.overlay.show();
    isFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsOpen = 'Y';
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsRegisterDate').value = date;
    document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsLastLoginDate').value = date;

    
    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadPhoto]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_UserEnterpriseDetailsUploadPhoto();
      }
    );

    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Delete').setHidden(true);
    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_Save').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Add New User</b></font>')
}


function FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsHide() {
    _FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails.hide(); isFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsOpen = 'N';
}



//var StampCount;

function Load_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_AyohaEnterprisesUserLoadByAccountNoStore(AccountNo) {

    Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore').getProxy().setExtraParams({
        AccountNo: AccountNo,

    });
    Ext.StoreMgr.get('AyohaEnterprisesUserLoadByAccountNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore').getProxy().setExtraParams({
            AccountNo: AccountNo
        });
        Ext.StoreMgr.get('AyohaEnterprisesUserLoadByAccountNoStore').load();
        var myStore = Ext.getStore('AyohaEnterprisesUserLoadByAccountNoStore');
        var modelRecord = myStore.getAt(0);




        Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPicProfile').setHtml('<img src="' + modelRecord.get('Photo') + '" width="160" height="160"/>')

        globalFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_ID = modelRecord.get('ID');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhotoName').value = modelRecord.get('PhotoName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsID').value = modelRecord.get('AyohaEnterpriseUserID');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountNo').value = modelRecord.get('AccountNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountName').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsEmail').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber').value = modelRecord.get('PhoneNumber');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsDOB').value = modelRecord.get('DOB');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsRegisterDate').value = modelRecord.get('RegisterDate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsIsUserVerified').value = modelRecord.get('IsUserVerified');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsVerifyString').value = modelRecord.get('VerifyString');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsVeriyDate').value = modelRecord.get('VeriyDate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsModifiedBy').value = modelRecord.get('ModifiedBy');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsModifiedDate').value = modelRecord.get('ModifiedDate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsEnterpriseAccNo').value = modelRecord.get('EnterpriseAccNo');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserType').value = modelRecord.get('UserType');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserStatus').value = modelRecord.get('UserStatus');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsLastLoginDate').value = modelRecord.get('LastLoginDate');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserName').value = modelRecord.get('UseName');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPassword').value = modelRecord.get('Password');
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPasswordTxT').value = modelRecord.get('Password');

        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}












var globalFloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_ID;
function inputImgFloatPanel_AyohaEnterpriseAccountUserEnterpriseUploadedProfileImg() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadedPhoto').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadedPhoto').files[0].name;

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
                    globalUserEnterpriseProfileImgImageBase64 = event.target.result;
                    document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhotoName').value = fileName;
                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPicProfile').setHtml('<img src=' + globalUserEnterpriseProfileImgImageBase64 + ' width="160" height="160"/>')


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





function FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_UserEnterpriseDetailsUploadPhoto() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUploadedPhoto").click();
    });
}

var isAddNewUserEnterprise;
function FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetails_SaveDelete(RowStatus) {
    var AccountName = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountName').value;
    var UserType = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserType').value;
    var UserStatus = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserStatus').value;
    var UserName = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserName').value;
    var Password = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPassword').value;
    var PhoneNo = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber').value;



    if (!AccountName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Account Name required!</font>");
        return;
    }
    if (!PhoneNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Phone No required!</font>");
        return;
    }
    if (!UserType) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>User Type required!</font>");
        return;
    }
    if (!UserStatus) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>User Status required!</font>");
        return;
    }
    if (!UserName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>User Name required!</font>");
        return;
    }
    if (!Password) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password required!</font>");
        return;
    }
   
    var imgbase64;

    if (globalUserEnterpriseProfileImgImageBase64) {
        imgbase64 = globalUserEnterpriseProfileImgImageBase64;
    } else {
        imgbase64 = "ExistingImage";
    }
    var EnterpriseAccNo;
    if (isAddNewUserEnterprise == "Y") {
        var UserEnterprisePhoneNumber = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber').value;
       
        var genNumber = Math.floor(Math.random() * 99999) + 1;
        var AccountNo = UserEnterprisePhoneNumber + "-" + genNumber;
    
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountNo').value = AccountNo;      
        document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsID').value = 0;
    } 

   


    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "AyohaEnterpriseUserID": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsID').value,
        "AccountNo": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountNo').value,
        "AccountName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsAccountName').value,
        "UseName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserName').value,
        "Password": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPassword').value,
        "Email": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsEmail').value,
        "PhoneNumber": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhoneNumber').value,
        "PicProfilePhoto64": imgbase64,
        "ModifiedBy": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserName').value,
        "EnterpriseAccNo": GetEnterpriseHQAccNo(),
        "UserType": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserType').value,
        "UserStatus": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsUserStatus').value,
        "PhotoName": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsPhotoName').value,
        "DOB": document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsDOB').value,
        "SerialPhoneNo": GetCurrentdeviceserial(),
        "RowActive": RowStatus
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

                swalFireSuccess(isDeleteorSave +" Succesfully!");
                Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
                FloatPanel_AyohaEnterpriseAccount_UserEnterpriseDetailsHide();

            }
            else {

                swalFireFail(isDeleteorSave + "Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail(isDeleteorSave + "Failed!!");
        }

    });
}














