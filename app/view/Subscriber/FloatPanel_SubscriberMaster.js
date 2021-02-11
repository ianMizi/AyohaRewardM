
Ext.define('ianMizi.view.Subscriber.FloatPanel_SubscriberMaster', {

});

var _FloatPanel_SubscriberMaster;


var isFloatPanel_SubscriberMasterOpen = 'N';






function FloatPanel_SubscriberMaster() {

    _FloatPanel_SubscriberMaster =
    Ext.create('Ext.Panel', {
        zIndex: 200,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_SubscriberMasterID',
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
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isLoyaltyCardRedeemListOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
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

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_SubscriberMasterHeader',
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
                                                         id: 'btnFloatPanel_SubscriberMasterBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             _FloatPanel_SubscriberMaster.hide(Ext.fx.Animation({
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
                                                         id: 'htmlFloatPanel_SubscriberMaster_TitleHeaderTxt',
                                                         html: '<font size=2 color=white><b>My Account</b></font>'
                                                     },
                                                      {
                                                          xtype: 'spacer',

                                                      },

                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_SubscriberMaster_UserAccountName',
                                                          hidden:true,
                                                          html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                      },

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
                                                               id: 'containerFloatPanel_SubscriberMasterHaiUser',
                                                               layout: {

                                                                   type: 'vbox',
                                                                   pack: 'center',
                                                                   align: 'center'
                                                               },
                                                               items: [


                                                                   {
                                                                       margin: '2 0 0 0',
                                                                       id: 'htmlFloatPanel_SubscriberMasterHaiUser',
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
                                                                       id: 'containerFloatPanel_SubscriberMastereWallet',
                                                                       layout: {

                                                                           type: 'hbox',
                                                                           pack: 'left',
                                                                           align: 'left'
                                                                       },
                                                                       items: [
                                                                            {
                                                                                xtype: 'button',
                                                                                id: 'btnFloatPanel_SubscriberMastereWallet',
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
                                                                                id: 'btnFloatPanel_SubscriberMastereWalletValue',
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
                                                       id: 'containerFloatPanel_SubscriberMasterPictureUser',
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
                                                               id: 'btnFloatPanel_SubscriberMasterPicProfile',
                                                               //badgeText: "2",
                                                               html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: white;border-radius: 30px 30px 30px 30px;width:30px;height:30px" ><img src="resources/icons/myAccountBlack1.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%;  margin:-1px 0px 0px 2px"></div>',
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
                                  id: 'tabpanelFloatPanel_SubscriberMaster',
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
                  id: 'containerFloatPanel_SubscriberMasterMaster',
                  width: '100%',
                  height: '94%',
                  //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                  style: "background-color: transparent;",
                  //style: "background-color: #F35B57;",
                  title: 'FloatPanel_SubscriberMasterMaster',
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
                                      Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
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
                                   margin: '2 0 0 0',                                 
                                   height: 160,
                                   width: 160,
                                   id: 'FloatPanel_SubscriberMasterPicProfile',
                                   name: 'namecontainerFloatPanel_SubscriberMasterPicProfile',                                  
                                   layout: {
                                       type: 'vbox',
                                       pack: 'start',
                                       align: 'center'

                                   },
                                   items: [
                                       {
                                           margin: '0 0 0 0',
                                           height: 160,
                                           width: 160,
                                           id:'htmlFloatPanel_SubscriberMasterPicProfile',
                                           html: '<img src="resources/icons/ccrlogo.png" width="160" height="160"/>',
                                       },

                                   ]

                               },

                               


                                                {
                                                    id: 'HtmlinputImgFloatPanel_SubscriberMasterUploadedPhoto',
                                                    hidden: true,
                                                    margin: '0 0 0 0',
                                                    width: '100%',
                                                    html: '<input type="file" id="inputImg-FloatPanel_SubscriberMasterUploadedPhoto" accept="image/*"  onchange="inputImgFloatPanel_SubscriberMasterUploadedPhoto()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                                    //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                                },





                                                {
                                                    margin: '-2 0 0 0',
                                                    hidden: true,
                                                    id: 'FloatPanel_SubscriberMasterPhotoName',
                                                    width: '100%',
                                                    height: 20,
                                                    html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhotoName"  readOnly style="border-color:white;color:#F2F2F2;width:100%;text-align: right;font-size:12px;">'


                                                },

                                                {
                                                    xtype: 'container',
                                                    margin: '-12 0 0 0',
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
                                              id: 'btnFloatPanel_SubscriberMaster_Delete',
                                              hidden: true,
                                              //  badgeText: '1',
                                              margin: '0 0 0 0',
                                              height: 40,
                                              width: 40,
                                              html: '<img src="resources/icons/deleteWhiteTwo.png" width="30" height="30" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                 
                                              }
                                          },
{
    xtype: 'button',
    id: 'btnFloatPanel_SubscriberMaster_Save',
    hidden: true,
    //  badgeText: '1',
    margin: '0 0 0 0',
    height: 40,
    width: 40,
    html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
    ui: 'plain',
    handler: function () {
        Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);


        Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(true);


        Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(true);


        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(true);

        Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(false);
        Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(true);
        FloatPanel_SubscriberMaster_SaveMyAccount();
       
    }
},

                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_SubscriberMaster_Edit',
                                                //  badgeText: '1',
                                                margin: '0 0 0 0',
                                                height: 40,
                                                width: 40,
                                                html: '<img src="resources/icons/editWhiteOne.png" width="30" height="30" alt="Company Name">',
                                                ui: 'plain',
                                                handler: function () {





                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(false);
                                                    Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);


                                                    Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(false);


                                                    Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(false);


                                                    Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(false);

                                                    Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(true);
                                                    Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(false);


                                                

                                                    





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
            margin: '-5 0 0 0',
            id:'htmlAccountNameLabel',

            html: '<font size=2 color=white>Account Name</font>',

        },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterAccountName',
            margin: '-5 0 0 0',
            width: '80%',
          //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterAccountName"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="TARMIZI BIN RAHIM">'


        },
        {
            hidden: true,
            id: 'FloatPanel_SubscriberMasterAccountName_edit',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterAccountName_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="TARMIZI BIN RAHIM">'


        },

         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>Email</font>',

         },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterEmail',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterEmail"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="IanMizi09@gmail.com">'


        },

        {
            hidden: true,
            id: 'FloatPanel_SubscriberMasterEmail_edit',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterEmail_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="IanMizi09@gmail.com">'


        },
         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>Phone No</font>',

         },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterPhoneNo',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhoneNo"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="+60133376958">'


        },

         {
             hidden: true,
             id: 'FloatPanel_SubscriberMasterPhoneNo_edit',
             margin: '-5 0 0 0',
             width: '80%',
             //  height: 20,
             html: '<input type="text" id="input-FloatPanel_SubscriberMasterPhoneNo_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="+60133376958">'


         },

         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>DOB (Optional)</font>',

         },
        {
            //hidden: true,
            id: 'FloatPanel_SubscriberMasterDOB',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="date" id="input-FloatPanel_SubscriberMasterDOB"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;">',


        },

        {
            hidden: true,
            id: 'FloatPanel_SubscriberMasterDOB_edit',
            margin: '-5 0 0 0',
            width: '80%',
            //  height: 20,
            html: '<input type="date" id="input-FloatPanel_SubscriberMasterDOB_edit"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;">',


        },

         {
             margin: '5 0 0 0',

             html: '<font size=2 color=white>Date Registered</font>',

         },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterCreatedDate',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterCreatedDate"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="19/02/1983">'


          },


          {
              margin: '5 0 0 0',

              html: '<font size=2 color=white>Version</font>',

          },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterVersion',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterVersion" readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="Ayoha Reward v 1.0">'


          },


           {
               margin: '5 0 0 0',

               html: '<font size=2 color=white>Status</font>',

           },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterStatus',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterStatus"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="Active">'


          },

          {
              margin: '5 0 0 0',

              html: '<font size=2 color=white>Last Login Date</font>',

          },

          {
              //hidden: true,
              id: 'FloatPanel_SubscriberMasterLastLoginDate',
              margin: '-5 0 0 0',
              width: '80%',
              //  height: 20,
              html: '<input type="text" id="input-FloatPanel_SubscriberMasterLastLoginDate"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="Active">'


          },




          {
              xtype: 'container',             
              width: '100%',
              id:'containerFloatPanel_SubscriberMaster_isUserverified',
              style: ' background-color:transparent',
              margin: '5 0 0 0',
              layout: {
                  type: 'hbox',
                  pack: 'start',
                  align: 'center'

              },
              items: [

                       {
                           xtype: 'container',

                           width: '40%',
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
                                       align: 'left'

                                   },
                                   items: [
                                   {
                                       margin: '3 0 0 0',

                                       html: '<font size=2 color=white>Account Verifed?</font>',

                                   },



                                   ]
                               },




         {
             margin: '-2 0 0 0',
             id: 'FloatPanel_SubscriberMasterisUserVerified',
             width: '25%',
             height: 20,
             html: '<input type="text" id="input-FloatPanel_SubscriberMasterisUserVerified" readOnly style="border-color:transparent;color:#F2F2F2;width:100%;text-align: left;font-size:16px;font-weight:bold;">'

         },


                           ]

                       },


                        //{
                        //    xtype:'container'

                        //},
                         {
                             xtype: 'button',
                             hidden:true,
                             id: 'btnFloatPanel_SubscriberMasterisUserVerifiedMessage',
                             //  badgeText: '1',
                             margin: '0 0 -10 -30',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/errorklipklip.gif" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                                 //isFromUserEnterpriseDetails = 'Y';
                                 //FloatPanel_EnterprisesUserTypeListShow();
                             }
                         },
                          //{
                          //    xtype: 'button',
                          //    id: 'btnFloatPanel_SubscriberMasterisUserVerified',
                          //    //  badgeText: '1',
                          //    margin: '0 0 -10 -30',
                          //    height: 35,
                          //    width: 35,
                          //    html: '<img src="resources/icons/verifiedWhiteOne.png" width="25" height="25" alt="Company Name">',
                          //    ui: 'plain',
                          //    handler: function () {
                          //        //isFromUserEnterpriseDetails = 'Y';
                          //        //FloatPanel_EnterprisesUserTypeListShow();
                          //    }
                          //},

              ]

          },


          


        
{
    xtype: 'container',
    hidden:true,
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


//{
//    xtype: 'button',
//    id: 'btnFloatPanel_SubscriberMaster_Edit',
//    //  badgeText: '1',
//    margin: '0 0 0 0',
//    height: 40,
//    width: 40,
//    html: '<img src="resources/icons/editWhiteOne.png" width="30" height="30" alt="Company Name">',
//    ui: 'plain',
//    handler: function () {





//        Ext.getCmp('btnFloatPanel_SubscriberMaster_Edit').setHidden(true);
//        Ext.getCmp('btnFloatPanel_SubscriberMaster_Save').setHidden(false);
//        Ext.getCmp('btnFloatPanel_SubscriberMaster_Delete').setHidden(true);


//        Ext.getCmp('FloatPanel_SubscriberMasterAccountName').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterAccountName_edit').setHidden(false);


//        Ext.getCmp('FloatPanel_SubscriberMasterEmail').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterEmail_edit').setHidden(false);


//        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterPhoneNo_edit').setHidden(false);

//        Ext.getCmp('FloatPanel_SubscriberMasterDOB').setHidden(true);
//        Ext.getCmp('FloatPanel_SubscriberMasterDOB_edit').setHidden(false);


        

        
//    }
//},
]
},
  {
      xtype: 'container',
      height: 40,
      width: '100%',
      style: {

          background: 'transparent',

      },
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





              {
                  xtype: 'container',
                  id: 'containerFloatPanel_SubscriberMasterChangePassword',
                  width: '100%',
                  height: '94%',
                  //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                  style: "background-color: transparent;",
                  //style: "background-color: #F35B57;",
                  title: 'FloatPanel_SubscriberMasterChangePassword',
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
                                      Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);
                                  } else {
                                      Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(0);

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
    xtype: 'container',
    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items: [
        //{
        //    margin: '-5 0 0 0',
        //    id: 'htmlCurrentPasswordLabel',
        //    width: '80%',
        //    html: '<div style="width:100%;text-align: left;font-size:16px;font-weight:bold;"><font size=2 color=white>Current Password</font></div',

        //},
      
        //{
           
        //    id: 'FloatPanel_SubscriberMasterCurrenrPassword',
        //    margin: '-5 0 0 0',
        //    width: '80%',
        //    //  height: 20,
        //    html: '<input type="password" id="input-FloatPanel_SubscriberMasterCurrentPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" >'


        //},




        


        {
            xtype: 'container',
            width: '100%',
            margin: '100 0 0 0',
            //   hidden: true,
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
                                     margin: '3 0 0 35',

                                     html: '<font size=2 color=white>Current Password</font>',

                                 },



                                 ]
                             },




        {
            margin: '-2 0 0 35',
            id: 'FloatPanel_SubscriberMasterChangePassword_CurrentPassword',
            width: '90%',
            height: 20,
            html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

        },


                         ]

                     },


                      //{
                      //    xtype:'container'

                      //},
                        {
                            xtype: 'button',
                            id: 'btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon',
                            //  badgeText: '1',
                            hidden: true,
                            margin: '0 0 -10 -30',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >',
                            ui: 'plain',
                            handler: function () {

                            }
                        },

            ]

        },

                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not Matched!</div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },





{
    xtype: 'container',
    width: '100%',
    margin: '60 0 0 0',
    //   hidden: true,
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
                             margin: '3 0 0 35',
                             id:'htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel',
                             html: '<font size=2 color=#ECF0F1>New Password</font>',

                         },



                         ]
                     },




{
    margin: '-2 0 0 35',
    id: 'FloatPanel_SubscriberMasterChangePassword_NewPassword',
    width: '90%',
    height: 20,
    html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword"  style="border-color:#ECF0F1;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

},


                 ]

             },


              //{
              //    xtype:'container'

              //},
                {
                    xtype: 'button',
                    id: 'btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon',
                    //  badgeText: '1',
                    hidden: true,
                    margin: '0 0 -10 -30',
                    height: 35,
                    width: 35,
                    html: '<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >',
                    ui: 'plain',
                    handler: function () {

                    }
                },

    ]

},

                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>',
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },

                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   margin: '30 0 0 0',
                                                   id: 'container_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword',
                                                   //   hidden: true,
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
                                                                            margin: '3 0 0 35',
                                                                            id:'htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel',
                                                                            html: '<font size=2 color=#ECF0F1>*Confirm Password</font>',

                                                                        },



                                                                        ]
                                                                    },




                                              {
                                                  margin: '-2 0 0 35',
                                                  id: 'FloatPanel_SubscriberMasterChangePassword_ConfirmPassword',
                                                  width: '90%',
                                                  height: 20,
                                                  html: '<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword"  style="border-color:#ECF0F1;color:#F2F2F2;width:100%;text-align: left;font-size:20px;font-weight:bold;">'

                                              },


                                                                ]

                                                            },


                                                             //{
                                                             //    xtype:'container'

                                                             //},
                                                               {
                                                                   xtype: 'button',
                                                                   id: 'btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon',
                                                                   hidden: true,
                                                                   margin: '0 0 -10 -30',
                                                                   height: 35,
                                                                   width: 35,
                                                                   html: '<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;" >',
                                                                   ui: 'plain',
                                                                   handler: function () {

                                                                   }
                                                               },

                                                   ]

                                               },
                                               {
                                                   margin: '4 0 0 0',
                                                   width: '90%',
                                                   hidden: true,
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:white;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:white;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   id: 'htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt',
                                                   html: '<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },



        // {
        //     margin: '35 0 0 0',
        //     width: '80%',
        //     html: '<div style="width:100%;text-align: left;font-size:16px;font-weight:bold;"><font size=2 color=white>New Password</font></div',
          

        // },
       

        //{
           
        //    id: 'FloatPanel_SubscriberMasterNewPassword',
        //    margin: '-5 0 0 0',
        //    width: '80%',
        //    //  height: 20,
        //    html: '<input type="password" id="input-FloatPanel_SubscriberMasterNewPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;">'


        //},
        // {
        //     margin: '5 0 0 0',

        //     width: '80%',
        //     html: '<div style="width:100%;text-align: left;font-size:16px;font-weight:bold;"><font size=2 color=white>Confirm Password</font></div',

        // },
        

        // {
          
        //     id: 'FloatPanel_SubscriberMasterConfirmPassword',
        //     margin: '-5 0 0 0',
        //     width: '80%',
        //     //  height: 20,
        //     html: '<input type="text" id="input-FloatPanel_SubscriberMasterConfirmPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:16px;font-weight:bold;" value="+60133376958">'


        // },

        




          


          {
              xtype: 'container',
              margin: '30 0 0 0',
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
    id: 'btnFloatPanel_SubscriberMasterChangePassword_Save',
    hidden: true,
    margin: '0 0 0 0',
    height: 40,
    width: 40,
    html: '<img src="resources/icons/saveWhiteOne.png" width="30" height="30" alt="Company Name">',
    ui: 'plain',
    handler: function () {
     
        FloatPanel_SubscriberMaster_UpdatePasswordMyAccount();
    }
},

      
              ]
          },




  {
      xtype: 'container',
      height: 40,
      width: '100%',
      style: {

          background: 'transparent',

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






                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_SubscriberMasterMasterStampHistory',
                                           width: '100%',
                                           height: '100%',
                                           //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                           style: "background-color: transparent;",
                                           //style: "background-color: #F35B57;",
                                           title: 'FloatPanel_SubscriberMasterMasterStampHistory',
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
                                                               Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(3);
                                                           } else {
                                                               Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);

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
                                                                              id:'htmlSubscriberMaster_TotalStampCount',
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
                                                                              id: 'btnDashboardAyohaStamps',
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
                                                          height:10
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

                                                                         width:'50%',
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
    
    height: '81%',
    store: 'LoyaltyStampLoadBySubscriberAccNoStore',
    id: 'FloatPanel_ListSubscriberMaster_StampHistory_SubscriberView',
    mode: 'SINGLE',
    grouped:true,
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
                                                                
            var StampedCampaignCode = records.get('StampedCampaignCode');
            var EnterpriseAccNo = records.get('EnterpriseAccNo');
            var StartDate = records.get('StartDate');
            var EndDate = records.get('EndDate');
            var SubscriberAccNo = records.get('SubscriberAccNo');
            var EnterpriseName = records.get('EnterpriseName');
            var StampRuleRemarks = records.get('StampRuleRemarks');
            var isStampRulePopUp = records.get('isStampRulePopUp');
            var StampCampaignName = records.get('StampCampaignName');
            var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
            var CountStampCardRowShow = records.get('CountStampCardRowShow');
            localStorage.setItem('StampCampaignCode', StampedCampaignCode);

            localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
            localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
            //alert(StampRuleRemarks); alert(isStampRulePopUp);
           
            FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);
           
            
        },
        deselect: function (list, records) {

        }
    },
                                                         },


                                                      {
                                                          xtype: 'list',
                                                         hidden:true,
                                                          height: '81%',
                                                          store: 'LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore',
                                                          id: 'FloatPanel_ListSubscriberMaster_StampHistory_EnterpriseView',
                                                          mode: 'SINGLE',
                                                          grouped:true,
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
                                                                
                                                                  var StampedByDate = records.get('StampedByDate');
                                                                  var StampedBy = records.get('StampedBy');
                                                                  alert(StampedBy);
                                                              },
                                                              deselect: function (list, records) {

                                                              }
                                                          },

                                                      },

                                                 ]
                                             },


                                           ]

                                       },
























                                       {
                                           xtype: 'container',
                                           id: 'containerFloatPanel_SubscriberMasterMasterPointHistory',
                                           width: '100%',
                                           height: '100%',
                                           //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                           style: "background-color: transparent;",
                                           //style: "background-color: #F35B57;",
                                           title: 'FloatPanel_SubscriberMasterMasterPointHistory',
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
                                                               Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(4);
                                                           } else {
                                                               Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);

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
                                                                             html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">TOTAL POINT</div>',
                                                                         },
                                                                          {
                                                                              margin: '-10 0 0 0',
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
                                                                              id: 'btnDashboardAyohaStamps',
                                                                              //badgeText: "2",
                                                                              html: '<img src="resources/icons/PointDashboard.png" width="50" height="50" alt="Company Name">',
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
                                                                         html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Receipts History</div>'
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
                                                          store: 'FlatBillGetByIcStore',
                                                          id: 'FloatPanel_ListSubscriberMasterPointHistory',
                                                          mode: 'SINGLE',
                                                          grouped: true,
                                                          disableSelection: true,
                                                          itemTpl: '<div class="myContent">' +
                                                                '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{FlatBillShotDescModified}<br>{FlatBillDate} - {FlatBillAccountNo}<br><div style="border-bottom: 1px none black;border-top: 1px none black;background-color: white;">Total Paid:RM{FlatBillFinalAmount}</div></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal"><div style="border: 1px solid grey;height:60px;width:60px;border-radius: 60px;vertical-align:middle;text-align:center;"><div style="margin:10px 0px 0px 0px;"><font size=3><b>100</b></font></div><br><div style="margin:-20px 0px 0px 0px;"><font size=2><b>Point</b></font></div></div></th></tr></thead></table>' +



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

                              //////////////////////////////////////////

                              {

                                  xtype: 'container',
                                  width: '96%',
                                  // width: 40,
                                  docked: 'bottom',
                                  margin:'0 0 0 7',
                                  height: 55,
                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                  //hidden: true,

                                  id: 'containerFloatPanel_SubscriberMaster_MenuBottom',
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
                                                 width: '100%',
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
                                                         width: 500,
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
                                                                 id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyProfile',
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
                                                                          id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_MyProfile',
                                                                          //  badgeText: '1',
                                                                          margin: '0 0 0 0',

                                                                          height: 36,
                                                                          width: 36,
                                                                          html: '<img src="resources/icons/MyAccountPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                          ui: 'plain',
                                                                          handler: function () {
                                                                              Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(0);
                                                                          }
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          id: 'containerFloatPanel_SubscriberMaster_MenuBottom_MyProfileTxt',
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
                                                                                  html: '<font size=1 color=grey>Profile</font>'
                                                                              },
                                                                          ]

                                                                      },


                                                                 ]
                                                             },

                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_SubscriberMaster_MenuBottom_ChangePassword',
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
                                                                    id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_ChangePassword',
                                                                    //  badgeText: '1',
                                                                    margin: '0 0 0 0',

                                                                    height: 36,
                                                                    width: 36,
                                                                    html: '<img src="resources/icons/ChangePasswordPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    id: 'containerFloatPanel_SubscriberMaster_MenuBottom_ChangePasswordTxt',
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
                                                                            html: '<font size=1 color=grey>Change</font>'
                                                                        },
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>Password</font>'
                                                                        },
                                                                    ]

                                                                },


                                                           ]
                                                       },



                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_SubscriberMaster_MenuBottom_StampCardHistory',
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
                                                                    id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_StampCardHistory',
                                                                    //  badgeText: '1',
                                                                    margin: '0 0 0 0',

                                                                    height: 36,
                                                                    width: 36,
                                                                    html: '<img src="resources/icons/StampTiltLeftOne.png" width="26" height="26" alt="Company Name">',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                       // Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                                        Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoStore();
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);
                                                                        Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    id: 'containerFloatPanel_SubscriberMaster_MenuBottom_StampCardHistoryTxt',
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
                                                                            html: '<font size=1 color=grey>Stamped</font>'
                                                                        },
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>History</font>'
                                                                        },
                                                                    ]

                                                                },


                                                           ]
                                                       },

                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_SubscriberMaster_MenuBottom_PointCardHistory',
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
                                                                    id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_PointCardHistory',
                                                                    //  badgeText: '1',
                                                                    margin: '0 0 0 0',

                                                                    height: 36,
                                                                    width: 36,
                                                                    html: '<img src="resources/icons/pointPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(3);
                                                                        Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(3);
                                                                        Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Points History</b></font>');
                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    id: 'containerFloatPanel_SubscriberMaster_MenuBottom_PointCardHistoryTxt',
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
                                                                            html: '<font size=1 color=grey>Point</font>'
                                                                        },
                                                                        {
                                                                            margin: '-12 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            html: '<font size=1 color=grey>History</font>'
                                                                        },
                                                                    ]

                                                                },


                                                           ]
                                                       },




                                                           {
                                                               xtype: 'container',
                                                               id: 'containerFloatPanel_SubscriberMaster_MenuBottom_RedeemHistory',
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
                                                                        id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_RedeemHistory',
                                                                        //  badgeText: '1',
                                                                        margin: '0 0 0 0',

                                                                        height: 36,
                                                                        width: 36,
                                                                        html: '<img src="resources/icons/redeemHistory.png" width="26" height="26" alt="Company Name">',
                                                                        ui: 'plain',
                                                                        handler: function () {
                                                                          
                                                                        }
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        id: 'containerFloatPanel_SubscriberMaster_MenuBottom_RedeemHistoryTxt',
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
                                                                                html: '<font size=1 color=grey>Redeem</font>'
                                                                            },
                                                                            {
                                                                                margin: '-12 0 0 0',
                                                                                // id: 'htmlStampHistoryTxt',
                                                                                html: '<font size=1 color=grey>History</font>'
                                                                            },
                                                                        ]

                                                                    },


                                                               ]
                                                           },



                                                           {
                                                               xtype: 'container',
                                                               id: 'containerFloatPanel_SubscriberMaster_MenuBottom_Setting',
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
                                                                        id: 'btn_FloatPanel_SubscriberMaster_MenuBottom_Setting',
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
                                                                        id: 'containerFloatPanel_SubscriberMaster_MenuBottom_SettingTxt',
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
                                                                                html: '<font size=1 color=grey>Setting</font>'
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



                                                           


                                                           








                                                         ]

                                                     },
















                                                 ]
                                             },





                                                        //{
                                                        //    margin: '0 0 0 0',
                                                        //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                        //},

                                                        









                                         ]

                              },




                              //////////////////////////////////////
                              {
                                  xtype: 'container',
                                  id: 'containerFloatPanel_SubscriberMasterTitleOutter',
                                  hidden:true,
                                  width: '100%',
                                  docked:'bottom',
                                  height: 55,
                                  // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',

                                  layout: {
                                      type: 'hbox',
                                      pack: 'start',
                                      align: 'center'

                                  },
                                  //scrollable: {
                                  //    direction: 'horizontal',
                                  //    directionLock: true
                                  //},
                                  items: [

                                       {
                                           xtype: 'container',
                                           width: '100%',
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

                                                        //letak sini

                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatPanel_SubscriberMasterTitleCustomerInfo',
                                                            flex: 1,
                                                            //width: '33.3%',
                                                            //height: 45,
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
                                                                     id: 'btnCustomerInfo_FloatPanel_SubscriberMaster',
                                                                     //  badgeText: '1',
                                                                     margin: '0 0 0 0',
                                                                     height: 36,
                                                                     width: 36,
                                                                     html: '<img src="resources/icons/MyAccountPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                     ui: 'plain',
                                                                     handler: function () {
                                                                         // NotificationsPanelShow();
                                                                         // LoyaltyCardRedeemListShow();
                                                                         Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(0);
                                                                         Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Account</b></font>');
                                                                         Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                                         Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=grey><b>Change Password</b></font>');
                                                                         Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
                                                                         Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>My Account</u></b></font>');

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
                                                                                 id: 'htmlCustomerInfoTxt',
                                                                                 html: '<font size=1 color=grey>Account</font>'
                                                                             },
                                                                         ]

                                                                     },

                                                                  

                                                            ]
                                                        },

                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_SubscriberMasterChangePassword',
                                              //width: '33.3%',
                                              //height: 45,
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
                                                       id: 'btnChangePassword_FloatPanel_SubscriberMaster',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/ChangePasswordPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                           Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(1);
                                                           Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                           Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                           Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=purple><b><u>Change Password</u></b></font>');
                                                           Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
                                                           Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=grey><b>Customer Info</b></font>');

                                                           //  LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        margin: '-12 0 0 0',
                                                        id: 'htmlChangePasswordTxt',
                                                        html: '<font size=1 color=grey><b>Change Password</b></font>'
                                                    },

                                              ]
                                          },



                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_SubscriberMasterStampCardHistory',
                                              //width: '33.3%',
                                              //height: 45,
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
                                                       id: 'btnStampCardHistory_FloatPanel_SubscriberMaster',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/StampTiltLeftOne.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore();
                                                           Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(2);
                                                           Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Stamp Card History</b></font>');

                                                           Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                           Ext.getCmp('htmlStampHistoryTxt').setHtml('<font size=1 color=purple><b><u>Stamp History</u></b></font>');
                                                           Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
                                                           Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=grey><b>Customer Info</b></font>');

                                                           //  LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        margin: '-12 0 0 0',
                                                        id: 'htmlStampHistoryTxt',
                                                        html: '<font size=1 color=grey><b>Stamp History</b></font>'
                                                    },

                                              ]
                                          },




                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_SubscriberMasterStampPointHistory',
                                              //width: '33.3%',
                                              //height: 45,
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
                                                       id: 'btnStampPointHistory_FloatPanel_SubscriberMaster',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/pointPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').setActiveItem(3);
                                                           Ext.getCmp('htmlFloatPanel_SubscriberMaster_TitleHeaderTxt').setHtml('<font size=2 color=white><b>Points History</b></font>');
                                                           Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
                                                           Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
                                                           Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=purple><b><u>Point History</u></b></font>');
                                                           Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=grey><b>Customer Info</b></font>');
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
                                              id: 'containerFloatPanel_SubscriberMasterTitleRedeemHistory',
                                              //width: '33.3%',
                                              //height: 45,
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
                                                       id: 'btnRedeemHistory_FloatPanel_SubscriberMasterBottom',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/redeemHistory.png" width="26" height="26" alt="Company Name">',
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










                                     

                                  ]

                              },







                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_SubscriberMaster;



}








function FloatPanel_SubscriberMasterShow() {

    Ext.Viewport.remove(_FloatPanel_SubscriberMaster);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberMaster());
    this.overlay.show();
    isFloatPanel_SubscriberMasterOpen = 'Y';

   
    Ext.getCmp('tabpanelFloatPanel_SubscriberMaster').getTabBar().hide();
    Ext.getCmp('htmlRedeemHistoryTxt').setHtml('<font size=1 color=grey><b>Redeem History</b></font>');
    Ext.getCmp('htmlChangePasswordTxt').setHtml('<font size=1 color=grey><b>Stamp History</b></font>');
    Ext.getCmp('htmlPointHistoryTxt').setHtml('<font size=1 color=grey><b>Point History</b></font>');
    Ext.getCmp('htmlCustomerInfoTxt').setHtml('<font size=1 color=purple><b><u>My Account</u></b></font>');


    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_SubscriberMasterPicProfile]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_SubscriberMaster_UploadPhoto();
      }
    );






    document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_CurrentPassword);
   

    FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore();
}




function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_CurrentPassword() {


    var currKl = document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_CurrentPassword").value;
    console.log(GetCurrAyohaUserKatalaluan());
    if ( currKl.length >= GetCurrAyohaUserKatalaluan().length-2 )  {
        if (currKl == GetCurrAyohaUserKatalaluan()) {

            Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Matched!</div>');

            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=white>New Password</font>');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=white>*Confirm Password</font>');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');

            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(false);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_NewPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword").addEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword);

            
            
        } else {

            Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not Matched!</div>');
            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(false);
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=#ECF0F1>New Password</font>');
            Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=#ECF0F1>*Confirm Password</font>');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_NewPassword").removeEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword);
            document.getElementById("input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword").removeEventListener("keyup", OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword);
          
        }
        Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(false);
    } else {


        Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(false);
        Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_NewPasswordLabel').setHtml('<font size=2 color=#ECF0F1>New Password</font>');
        Ext.getCmp('htmlFloatPanel_SubscriberMasterChangePassword_ConfirmPasswordLabel').setHtml('<font size=2 color=#ECF0F1>*Confirm Password</font>');
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Current Password is Required!</div>');
        Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_NewPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_NewPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
        Ext.getCmp('FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').setHtml('<input type="password" id="input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword" readOnly style="border-color:#ECF0F1;color:white;width:100%;text-align: left;font-size:20px;font-weight:bold;">');
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_Save').setHidden(true);


    }


}








function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_NewPassword() {
    Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(true);

    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;


    if (Password.length < 6) {

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password cannot less than 6 charaters!</div>');
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
        //Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('20 0 0 0');


        if (ConfirmPassword) {
            if (Password != ConfirmPassword) {
                Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');
                
            }


          
        }

       
    } else {
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);



            if (ConfirmPassword) {
                if (Password == ConfirmPassword) {
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
                    //  Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
                }
                if (Password != ConfirmPassword) {
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
                    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
                    Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

                }
            }





    }



    //if (Password.length > 6) {
    //    //Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
    //    //Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);
    //    // Ext.getCmp('container_FloatPanel_AyohaUserRegistrationPassword').setMargin('30 0 0 0');

    //    if (ConfirmPassword) {
    //        if (Password == ConfirmPassword) {
    //            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
    //            Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
    //            Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');
    //            //  Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);
    //        }
    //    }
       
    //}

    
}


function OnKeyUp_FloatPanel_SubscriberMasterChangePassword_ConfirmPassword() {
    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;
    Ext.getCmp('btFloatPanel_SubscriberMasterChangePassword_CurrentPassword_MessageIcon').setHidden(true);
    Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_CurrentPassword_Message').setHidden(true);
    if ((Password == ConfirmPassword) && (Password.length >= 6)) {




        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');


        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/checkmark.gif" style="width: 25px; height: 25px; border:2px none grey; border-radius: 50%; max-width:25px;" >');

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password is matched!</div>');
      



    } else {

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageTxt').setHidden(true);

        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHidden(false);
        Ext.getCmp('htmFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageTxt').setHtml('<div style="color:white;text-align: right;font-size:11px;width:100%;">Password Not is matched!</div>');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHidden(true);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_NewPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');

        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHidden(false);
        Ext.getCmp('btnFloatPanel_SubscriberMasterChangePassword_ConfirmPassword_MessageIcon').setHtml('<img src="resources/icons/errorklipklip.gif" style="width: 25px; height: 25px;">');





    }
}
















function FloatPanel_SubscriberMasterHide() {
    _FloatPanel_SubscriberMaster.hide(); isFloatPanel_SubscriberMasterOpen = 'N';
}



var StampCount;
function Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore() {

    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrentAccountNo(),
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrentAccountNo(),
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');       
        // adjustHeight();
        Ext.Viewport.setMasked(false);

       






    });
    task.delay(2000);
}







function Load_FloatPanel_SubscriberMaster_LoyaltyStampLoadBySubscriberAccNoStore() {
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        StampCount = myStore.getCount();
        Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);
}









function FloatPanel_SubscriberMaster_UploadPhoto() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_SubscriberMasterUploadedPhoto").click();
    });
}

var globalFloatPanel_SubscriberMasterImg64;
function inputImgFloatPanel_SubscriberMasterUploadedPhoto() {
    var file = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_SubscriberMasterUploadedPhoto').files[0].name;

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
                    globalFloatPanel_SubscriberMasterImg64 = event.target.result;
                    document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value = fileName;

                  
                    Ext.getCmp('btnFloatPanel_SubscriberMasterPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + globalFloatPanel_SubscriberMasterImg64 + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
                    Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<img src="' + globalFloatPanel_SubscriberMasterImg64 + '"  style="width: 200px; height: 200px; border:2px solid white; border-radius: 50%; "/>');


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

function FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore() {

    Ext.getStore('AyohaUserProfileLoadProfileStore').getProxy().setExtraParams({
        AccountNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('AyohaUserProfileLoadProfileStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoadProfileStore').getProxy().setExtraParams({
            AccountNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('AyohaUserProfileLoadProfileStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoadProfileStore');
        var modelRecord = myStore.getAt(0);
        

     //   'ID',
     //'AccountNo',
     //'AccountName',
     //'Email',
     //'PhoneNo',
     //'Photo',
     //'Gender',
     //'DOB',
     //'RowStatus',
     //'CreatedDate',
     //'ModifiedDate',
     //'UserName',
     //'Katalaluan',
     //'LastLoginDate',
     //'PhotoName',
     //'GUID',
     //'isUserVerified',
     //'VerifyString',
     //'AyohaVersion',

        Ext.getCmp('btnFloatPanel_SubscriberMasterPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
        Ext.getCmp('htmlFloatPanel_SubscriberMasterPicProfile').setHtml('<img src="' + modelRecord.get('Photo') + '"  style="width: 160px; height: 160px; border:2px solid white; border-radius: 50%; "/>');
        Ext.getCmp('htmlFloatPanel_SubscriberMasterHaiUser').setHtml('<font size=2 color=black><b>Hi '+modelRecord.get('AccountName')+'!</b></font>');



        localStorage.setItem('AyohaUserID', modelRecord.get('ID'));
        document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value = modelRecord.get('PhotoName');
        document.getElementById('input-FloatPanel_SubscriberMasterAccountName').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_SubscriberMasterEmail').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo').value = modelRecord.get('PhoneNo');
        document.getElementById('input-FloatPanel_SubscriberMasterDOB').value = modelRecord.get('DOB');


            
        document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value = modelRecord.get('AccountName');
        document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value = modelRecord.get('Email');
        document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value = modelRecord.get('PhoneNo');
        document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value = modelRecord.get('DOB');


        document.getElementById('input-FloatPanel_SubscriberMasterCreatedDate').value = modelRecord.get('CreatedDate');
        document.getElementById('input-FloatPanel_SubscriberMasterVersion').value = modelRecord.get('AyohaVersion');
        document.getElementById('input-FloatPanel_SubscriberMasterStatus').value = modelRecord.get('RowStatus');
        document.getElementById('input-FloatPanel_SubscriberMasterLastLoginDate').value = modelRecord.get('LastLoginDate');
        document.getElementById('input-FloatPanel_SubscriberMasterisUserVerified').value = modelRecord.get('isUserVerified');


        var isUserVerified = modelRecord.get('isUserVerified');
        Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHidden(false);
        if (isUserVerified == "NO") {
            Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHtml('<img src="resources/icons/errorklipklip.gif" width="25" height="25" alt="Company Name">');
        } if (isUserVerified == "YES") {
            Ext.getCmp('btnFloatPanel_SubscriberMasterisUserVerifiedMessage').setHtml('<img src="resources/icons/checkmark.gif" width="25" height="25" alt="Company Name">');
        }

        

   

       
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);

}



function FloatPanel_SubscriberMaster_SaveMyAccount() {

    var AccountName = document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value;
    var Email =  document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value;
    var PhoneNo =document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value;
    var DOB =document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value;



    if (!AccountName) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Account Name required!</font>");
        return;
    }
    if (!PhoneNo) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Phone No required!</font>");
        return;
    }
    if (!Email) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Email required!</font>");
        return;
    }
 
   

    //if (!globalFloatPanel_SubscriberMasterImg64) {
    //    swalFireFail("Save Failed!!!" + "<br><font size=2>Profile Picture required!</font>");
    //    return;
    //}


    

    var imgbase64;

    if (globalFloatPanel_SubscriberMasterImg64) {
        imgbase64 = globalFloatPanel_SubscriberMasterImg64;
    } else {
        imgbase64 = "ExistingImage";
    }
  
    //AP.ID, AP.AccountNo, AP.AccountName, AP.Email, AP.PhoneNo
    //  , AP.Photo, AP.Gender, AP.DOB, AP.PhotoName

 
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "ID":GetCurrAyohaUserID(),
        "AccountNo": GetCurrAyohaUserAccountNo(),
        "AccountName": document.getElementById('input-FloatPanel_SubscriberMasterAccountName_edit').value,
        "Email": document.getElementById('input-FloatPanel_SubscriberMasterEmail_edit').value,
        "PhoneNo": document.getElementById('input-FloatPanel_SubscriberMasterPhoneNo_edit').value,
        "Photo": imgbase64,
        "Gender": "NA",
        "DOB": document.getElementById('input-FloatPanel_SubscriberMasterDOB_edit').value,
        "PhotoName": document.getElementById('input-FloatPanel_SubscriberMasterPhotoName').value,
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
 
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdate',

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
                FloatPanel_SubscriberMaster_AyohaUserProfileLoadProfileStore();
            }
            else {

                swalFireFail( "Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}


function FloatPanel_SubscriberMaster_UpdatePasswordMyAccount() {
    var Password = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_NewPassword').value;
    var ConfirmPassword = document.getElementById('input-FloatPanel_SubscriberMasterChangePassword_ConfirmPassword').value;
  
    if (Password != ConfirmPassword)  {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password Not Matched!</font>");
        return;

    } if (Password.length < 6) {
        swalFireFail("Save Failed!!!" + "<br><font size=2>Password Cannot less than 6 characters!</font>");
        return;
    }


    else {

        
        var objn = {
            "ID": GetCurrAyohaUserID(),
            "AccountNo": GetCurrAyohaUserAccountNo(),
            "Katalaluan": ConfirmPassword,
           

        };

        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileUpdateKataLaluan',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Change Password succeed!");
                    FloatPanel_SubscriberMasterHide();
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
}