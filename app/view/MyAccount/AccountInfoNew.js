Ext.define('ianMizi.view.MyAccount.AccountInfoNew', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'xtypeAccountInfoNew',
    id: 'AccountInfoNewID',
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

                    


                         



                      //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                      {
                          xtype: 'tabpanel',
                          // hidden: true,
                          //  hidden:true,
                          id: 'tabpanelAccountInfoNew',
                          // style: 'border-top:2px solid #ECF0F1;background: white;',
                          // style: 'background-color: black;',
                          // margin: '-20 0 0 -26',
                          // margin: '25 0 0 0',

                          //width: 200,
                          width: '96%',
                          height: 360,
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
          id: 'containerAccountInfoNewMaster',
          width: '100%',
          height: 360,
          //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
          style: "background-color: white;",
          //style: "background-color: #F35B57;",
          title: 'AccountInfoNewMaster',
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
                              Ext.getCmp('tabpanelAccountInfoNew').setActiveItem(1);
                          } else {
                              //  alert("Hey! I swipe right");

                          }
                      }
                  });
              }
          },


          items: [




                {


                    xtype: 'fieldset',
                    id: 'fieldsetAccount',
                    title: 'Account Info',
                    style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    defaults: {
                        labelWidth: '45%',

                    },


                    items: [

                        {
                            xtype: 'container',
                            style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'

                            }, items: [
                                {

                                    xtype: 'image',
                                    src: 'resources/icons/CloudReceipt4.png',
                                    width: 220,
                                    id: 'Pictureprofile',
                                    // margin: '10 0 5 -20',
                                    //left:-2,
                                    height: 150,
                                },

                            ]
                        },
                        //{

                        //    xtype: 'image',
                        //    src: 'resources/icons/CloudReceipt4.png',
                        //    width: 220,
                        //    id: 'Pictureprofile',
                        //    margin: '10 0 5 -20',
                        //    //left:-2,
                        //    height: 150,
                        //},

                                              {
                                                  xtype: 'button',
                                                  align: 'stretch',
                                                  //height: 34,
                                                  //width: 200,
                                                  id: 'btnSetPictureProfileID',
                                                  hidden: true,
                                                  // padding: '10px',
                                                  //style: {
                                                  //    background: '#D25959',
                                                  //},
                                                  //text: '<font size=3px color=white><center><b>choocgfdgfdgfse</b></center></font>',
                                                  text: 'Choose Image',
                                                  handler: function () {

                                                  }
                                              },




                                               {
                                                   xtype: 'container',
                                                   id: 'UsrAccEditPhotoCont',
                                                   //  hidden: true,
                                                   // disabled: true,
                                                   items: [
                                                    {
                                                        //html: '<input type="file" id="fileElemPicProfile" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)" />',

                                                        html: '<link href="http://42.1.63.57/CRCSS/ratchet.css" rel="stylesheet"/><label for="imageUpload" class="btn btn-primary btn-block btn-outlined">Upload Picture Profile</label><input type="file" id="imageUpload" accept="image/*" style="display: none" onchange="EnableuploadPicProfile()" />',

                                                        //   html: '<div style="padding:10px;font-weight:bolder; background-color:#446655;color: white;margin-top:10px;width:112px;overflow: hidden;">UPLOAD IMAGE <input id="imageUpload"  style="width:100px;color:#446655;display: none;" type="file" accept="image/*" onchange="EnableuploadPicProfile()" /></div>',

                                                        //  html: '<input type="file" id="imageUpload" accept="image/*" onchange="EnableuploadPicProfile()" />',






                                                        // html: '<input type=file id="fileOpenProfileEdit" onchange="startReadProfileEdit()"/>',
                                                        // html: '<input type=file id="fileOpenProfileEdit" />',
                                                        //   html: '<input type=file id="fileOpenProfileEdit"/>',
                                                    }
                                                   ]

                                               },


                   {
                       xtype: 'textfield',
                       id: 'AccountInfo_CR_ID',
                       label: 'ID',
                       hidden: true,
                       disabled: true,
                       autoCapitalize: true,
                       //required: true,
                       clearIcon: true
                   },
                   {
                       xtype: 'label',
                       id: 'lblAccountInfo_CR_AccountNo',
                       // hidden:true,
                       margin: '0 0 0 0',
                       html: '<font size="3" color="black"><b><u>Account No:</u></b></font>'
                   },
                        {
                            xtype: 'textfield',
                            id: 'AccountInfo_CR_AccountNo',
                            label: '',
                            disabled: true,
                            // name:'Accou',
                            //placeHolder: 'Tom Roy',
                            autoCapitalize: true,
                            //required: true,
                            clearIcon: true
                        },
                         {
                             xtype: 'label',
                             id: 'lblAccountInfo_CR_MykadNo',
                             // hidden:true,
                             margin: '0 0 0 0',
                             html: '<font size="3" color="black"><b><u>MyKad/ID:</u></b></font>'
                         },

                            {
                                xtype: 'textfield',
                                id: 'AccountInfo_CR_MykadNo',
                                label: '',
                                disabled: true,
                                //placeHolder: 'Tom Roy',
                                autoCapitalize: true,
                                //required: true,
                                clearIcon: true
                            },
                             {
                                 xtype: 'label',
                                 id: 'lblAccountInfo_CR_AccountName',
                                 // hidden:true,
                                 margin: '0 0 0 0',
                                 html: '<font size="3" color="black"><b><u>Accont Name:</u></b></font>'
                             },
                           {
                               xtype: 'textfield',
                               id: 'AccountInfo_CR_AccountName',
                               label: '',

                               // name:'Accou',
                               //placeHolder: 'Tom Roy',
                               autoCapitalize: true,
                               //required: true,
                               clearIcon: true
                           },

                          {
                              xtype: 'label',
                              id: 'lblAccountInfo_CR_PhoneNumber',
                              style: 'background-color:transparent',
                              // hidden:true,
                              margin: '0 0 0 0',
                              html: '<font size="3" color="black"><b><u>MobilePhone:</u></b></font>'
                          },
                            {
                                xtype: 'textfield',
                                id: 'AccountInfo_CR_PhoneNumber',
                                style: 'background-color:transparent',
                                label: '',
                                //placeHolder: 'Tom Roy',
                                autoCapitalize: true,
                                //required: true,
                                clearIcon: true, component: {
                                    xtype: 'input',
                                    type: 'tel'
                                },

                                placeHolder: 'cell #'

                            },



                              {
                                  xtype: 'label',
                                  id: 'lblAccountInfo_CR_Email',
                                  // hidden:true,
                                  margin: '0 0 0 0',
                                  html: '<font size="3" color="black"><b><u>Email:</u></b></font>'
                              },

                               {
                                   xtype: 'emailfield',
                                   id: 'AccountInfo_CR_Email',
                                   label: '',
                                   //placeHolder: 'Tom Roy',
                                   autoCapitalize: true,
                                   //required: true,
                                   clearIcon: true
                               },


                                {
                                    xtype: 'label',
                                    id: 'lblAccountInfo_CR_RegisterDate',
                                    // hidden:true,
                                    margin: '0 0 0 0',
                                    html: '<font size="3" color="black"><b><u>Register Date:</u></b></font>'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'AccountInfo_CR_RegisterDate',
                                    label: '',
                                    disabled: true,
                                    //placeHolder: 'Tom Roy',
                                    autoCapitalize: true,
                                    //required: true,
                                    clearIcon: true
                                },

                                 {
                                     xtype: 'label',
                                     id: 'lblAccountInfo_CR_Status',
                                     // hidden:true,
                                     margin: '0 0 0 0',
                                     html: '<font size="3" color="black"><b><u>Status:</u></b></font>'
                                 },

                                    {
                                        xtype: 'textfield',
                                        id: 'AccountInfo_CR_Status',
                                        label: '',
                                        //placeHolder: 'Tom Roy',
                                        disabled: true,
                                        autoCapitalize: true,
                                        //required: true,
                                        clearIcon: true
                                    },
                                    {
                                        xtype: 'label',
                                        id: 'lblAccountInfo_CR_Version',
                                        // hidden:true,
                                        margin: '0 0 0 0',
                                        html: '<font size="3" color="black"><b><u>Version:</u></b></font>'
                                    },
                                    {
                                        xtype: 'textfield',
                                        id: 'AccountInfo_CR_Version',
                                        label: '',
                                        //placeHolder: 'Tom Roy',
                                        disabled: true,
                                        autoCapitalize: true,
                                        //required: true,
                                        clearIcon: true
                                    },

                                    {
                                        xtype: 'spacer',
                                        //ui: 'plain',
                                        //text:'.',
                                        //pading:'5px'
                                    },

                             {
                                 xtype: 'container',
                                 id: 'ContainerbtnAccInfo',
                                 // hidden:true,
                                 margin: '5 0 0 0',
                                 defaults: {
                                     xtype: 'button',
                                     height: 42,
                                     //style: 'margin: .5em',
                                     flex: 1
                                 },
                                 layout: {
                                     type: 'hbox'
                                 },
                                 items: [
                                     {
                                         //text: 'Save',
                                         ui: 'plain',
                                         scope: this,
                                         text: '<button class="buttonSave buttonSaves">Save</button>',
                                         hasDisabled: false,
                                         handler: function (btn) {
                                             LoadingCustomMsgShow('Processing..', '4');
                                             CRMobileUserUpdateAccountInfo();


                                         }
                                     },

                                 ]

                             },

                             {
                                 xtype: 'spacer',
                                 height: 5,
                                 //ui: 'plain',
                                 //text:'.',
                                 //pading:'5px'
                             },
                              //{
                              //    xtype: 'button',
                              //    text: '-',
                              //    ui: 'plain',
                              //},










                    ]
                },



                {
                    xtype: 'fieldset',
                    id: 'fieldset2',
                    title: 'Login Info',
                    defaults: {

                        labelWidth: '45%'
                    },
                    items: [




                        {
                            xtype: 'textfield',
                            id: 'Login_CR_UseName',
                            label: 'UserName',
                            //placeHolder: 'Tom Roy',
                            autoCapitalize: true,
                            //required: true,
                            clearIcon: true
                        },
                        {
                            // xtype: 'textfield',
                            xtype: 'passwordfield',
                            id: 'Login_CR_Password',
                            label: 'Password',
                            //placeHolder: 'Tom Roy',
                            autoCapitalize: true,
                            //required: true,
                            clearIcon: true
                        },
                         {
                             xtype: 'textfield',
                             id: 'Login_CR_Password_txt',
                             label: 'Password',
                             hidden: true,
                             //placeHolder: 'Tom Roy',
                             autoCapitalize: true,
                             //required: true,
                             clearIcon: true
                         },
                           {
                               xtype: 'spacer',
                               height: 5,
                           },
                         {
                             xtype: 'container',
                             id: 'ContainerbtnLoginInfo',
                             width: '100%',
                             //  hidden:true,
                             defaults: {
                                 xtype: 'button',
                                 //height: 42,
                                 //  width:'100%',
                                 //style: 'margin: .5em',
                                 //flex: 1
                             },
                             layout: {
                                 type: 'hbox'
                             },
                             items: [
                                 {
                                     //text: 'Save',
                                     ////scope: this,
                                     //id: 'btnSavePassword',


                                     //xtype: 'button',
                                     xtype: 'button',
                                     id: 'btnSavePassword',
                                     ui: 'plain',
                                     width: '50%',
                                     margin: '0 0 0 -10',
                                     height: 42,
                                     //width: 100,
                                     //height: 50,
                                     //  width: '80%',
                                     //padding: '10px',
                                     //style: {
                                     //    background: '#FA8072',
                                     //},
                                     //  text: '<font size=3px color=white><center><b>Log-In</b></center></font>',
                                     text: '<button class="buttonSave buttonSaves">Save</button>',

                                     disabled: true,
                                     handler: function () {

                                         LoadingCustomMsgShow('Processing..', '4');
                                         CRMobileUserUpdateLoginInfo();



                                     }
                                 },

                                  {
                                      // text: 'Show Password.',
                                      xtype: 'button',
                                      ui: 'plain',
                                      margin: '0 0 0 -40',
                                      text: '<button class="buttonSave buttonSaves">Show Password</button>',
                                      // scope: this,
                                      id: 'btnshowpwd',
                                      width: '70%',
                                      height: 42,
                                      hasDisabled: false,
                                      handler: function (btnn) {


                                          LoadingReconfirmPwdPanelShow();



                                      }
                                  },
                                {
                                    // text: 'Hide Password',
                                    xtype: 'button',
                                    ui: 'plain',
                                    margin: '0 0 0 -40',
                                    width: '70%',
                                    height: 42,
                                    text: '<button class="buttonSave buttonSaves">Hide Password</button>',
                                    scope: this,
                                    hidden: true,
                                    id: 'btnhidepwd',
                                    // hasDisabled: false,
                                    handler: function (btn) {
                                        UserAccpwdConfirmHide();
                                        pwdsts = '0';
                                        Ext.getCmp('btnshowpwd').setHidden(false);
                                        Ext.getCmp('btnhidepwd').setHidden(true);
                                        Ext.getCmp('LoginPasswordtxt').setHidden(true);
                                        Ext.getCmp('LoginPassword').setHidden(false);


                                    }

                                },

                             ]

                         },

                          {
                              xtype: 'spacer',
                              height: 5,
                          },
                    ]




                },









          ]

      },


                               {
                                   xtype: 'container',
                                   id: 'containerAccountInfoNewMasterQRCodePoint',
                                   width: '100%',
                                   height: 360,
                                   //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                   style: "background-color: white;",
                                   //style: "background-color: #F35B57;",
                                   title: 'AccountInfoNewMasterQRCodePoint',
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
                                                       Ext.getCmp('tabpanelAccountInfoNew').setActiveItem(0);
                                                   }
                                               }
                                           });
                                       }
                                   },

                                   items: [


                                       {
                                           id: 'htmlAccountInfoNewMasterQRCodePoint',
                                           margin: '18 0 0 20',
                                           width: '100%',
                                           height: 360,
                                           html: '<img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;" />',
                                       }



                                   ]

                               },



                          ]

                          //}
                      },



                      {
                          xtype: 'container',
                          id: 'containerAccountInfoNewTitleOutter',
                          width: '96%',
                          height: 60,
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
                                  id: 'containerAccountInfoNewTitlePointHistory',
                                  width: '33.3%',
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
                                           id: 'btnPointHistory_AccountInfoNew',
                                           //  badgeText: '1',
                                           margin: '-5 0 0 0',
                                           height: 45,
                                           width: 45,
                                           html: '<img src="resources/icons/pointHistory.png" width="35" height="35" alt="Company Name">',
                                           ui: 'plain',
                                           handler: function () {
                                               // NotificationsPanelShow();
                                               // LoyaltyCardRedeemListShow();
                                               Ext.getCmp('tabpanelAccountInfoNew').setActiveItem(0);
                                               Ext.getCmp('btnPointLoyaltyCard').setHtml('<img src="resources/icons/pointHistory.png" width="20" height="20" alt="Company Name">');
                                               Ext.getCmp('htmlPointLoyaltyCardLbl').setHtml('<font size=2 color=black>Point History</font>');
                                               Ext.getCmp('htmlLoyaltyCardClientID').setHidden(true);
                                               Ext.getCmp('AccountInfoNewMasterHeader_PointHistorySearchTxt').setHidden(false);


                                           }
                                       },
                                        {
                                            margin: '-7 0 0 0',
                                            html: '<font size=2 color=grey><b>Points History</b></font>'
                                        },

                                  ]
                              },

                                  {
                                      xtype: 'container',
                                      id: 'containerAccountInfoNewTitleQrCode',
                                      width: '33.3%',
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
                                               id: 'btnQrCode_AccountInfoNew',
                                               //  badgeText: '1',
                                               margin: '-5 0 0 0',
                                               height: 45,
                                               width: 45,
                                               html: '<img src="resources/icons/qrcodetwo.png" width="35" height="35" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   // NotificationsPanelShow();
                                                   Ext.getCmp('tabpanelAccountInfoNew').setActiveItem(1);
                                                   CreateQRCodeForAccountInfoNew();

                                                   Ext.getCmp('btnPointLoyaltyCard').setHtml('<img src="resources/icons/qrcodetwo.png" width="20" height="20" alt="Company Name">');


                                                   Ext.getCmp('htmlLoyaltyCardClientID').setHidden(true);
                                                   Ext.getCmp('AccountInfoNewMasterHeader_PointHistorySearchTxt').setHidden(true);



                                                   //  LoyaltyCardRedeemListShow();
                                               }
                                           },
                                            {
                                                margin: '-7 0 0 0',
                                                html: '<font size=2 color=grey><b>QR Code Point</b></font>'
                                            },

                                      ]
                                  },

                                  {
                                      xtype: 'container',
                                      id: 'containerAccountInfoNewTitleRedeem',
                                      width: '33.3%',
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
                                               id: 'btnRedeem_AccountInfoNewBottom',
                                               //  badgeText: '1',
                                               margin: '-5 0 0 0',
                                               height: 45,
                                               width: 45,
                                               html: '<img src="resources/icons/redeemHistory.png" width="35" height="35" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   // NotificationsPanelShow();

                                                   LoyaltyCardRedeemListShow();


                                                   //  LoyaltyCardRedeemListShow();
                                               }
                                           },
                                            {
                                                margin: '-7 0 0 0',
                                                html: '<font size=2 color=grey><b>Redeem</b></font>'
                                            },

                                      ]
                                  },

                          ]

                      },
                      {
                          xtype: 'container',
                          id: 'containerAccountInfoNewbottom',
                          hidden: true,
                          style: "background-color: transparent",
                          //style: "background-color: #F35B57;",
                          docked: 'bottom',
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
                                        id: 'btnAccountInfoNewbottomFB',
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
                                         id: 'btnAccountInfoNewbottomInsta',
                                         //badgeText: "2",
                                         html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             alert("sdfdsf");

                                         }
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





function AccountInfoNewAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(251);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    var newHeight = adjustedHeight - 99;

    //alert(newHeight)

    Ext.getCmp('tabpanelAccountInfoNew').setHeight(newHeight);
    Ext.getCmp('containerAccountInfoNewMaster').setHeight(newHeight);






}