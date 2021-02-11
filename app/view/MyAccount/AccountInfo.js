/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */



var isPushroutesArrayFirstLoad = 'Yes';
var isPushroutesArrayFromTab = 'No';

Ext.define('ianMizi.view.MyAccount.AccountInfo', {
    extend: 'Ext.tab.Panel',
    xtype: 'UserAccount',
    requires: [
         'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio'
    ],
    id: 'basicform',
    config: {

        activeItem: 0,
        tabBar: {
            // dock:'bottom',
            // ui: 'plain',
            ui: 'neutral',
            layout: {

                pack: 'center'

            },
            listeners: {

            },
        },


        items: [

{

    xtype: 'toolbar',
    title: '<font size="4" color="white">My Accounts</font>',
    docked: 'top',
    id: 'toolbarMyAccountTop',

    style: {
        background: '#f44336',
    },
    items:
           [


               {
                   xtype: 'button',

                   id: 'btnMyAccountHome',
                   //  text: 'Show',
                   iconCls: 'list',
                   // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       DrawerMenuShow();
                   }



               },
            {
                xtype: 'spacer'
            },
              {
                  xtype: 'button',
                  id: 'btnNotificationMyAccount',
                  // badgeText: '1',
                  html: '<div ><img src="resources/icons/Notification.png" width="30" height="30" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {
                      loadNotificationSummary();
                  }
              },



           ]

},







            {
                title: '<font size="2" color="black"><b> Account Info</b><br></font><font size="2" color="black"><b>Info</b></font>',
                xtype: 'formpanel',
                id: 'AccountInfo',
                listeners: {

                    activate: function () {
                        setMyAccountInfo();
                        tabActive = 'AccInfo';
                        if (isPushroutesArrayFirstLoad == 'No') {
                            routesArray.push("basicform,tab,0");
                            //    routesArrayBasicForm.push("basicform,tab,0");
                            console.log('Masukan :basicform,tab,0');
                        }
                        isPushroutesArrayFirstLoad = 'No';
                        setThemeloginpage();
                        console.log('Modified :isPushroutesArrayFirstLoad=Nos');
                    }

                },

                items: [
                    {


                        xtype: 'fieldset',
                        id: 'fieldsetAccount',
                        title: 'Account Info',
                        defaults: {
                            labelWidth: '45%',

                        },


                        items: [

                            {
                                xtype: 'container',

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
                                  // hidden:true,
                                  margin: '0 0 0 0',
                                  html: '<font size="3" color="black"><b><u>MobilePhone:</u></b></font>'
                              },
                                {
                                    xtype: 'textfield',
                                    id: 'AccountInfo_CR_PhoneNumber',
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




                ],





            },












//////////////////////////////


{
    title: '<font size="2" color="black"><b>Ent.Subscribed</b></font>',
    xtype: 'formpanel',
    id: 'EntSubscribed',
    scrollable: false,
    listeners: {

        activate: function () {
            document.getElementById("input-searchEnterpriseSubscribed").addEventListener("keyup", SearchEnterpriseSubscribedOnKeyUp);
            LoadingPanelShow();
            loadEnterpriseSubscribedList();
            _DataStore_EnterpriseSubscribergetBySubcriberAccNoStore = Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoStore');

            if (isPushroutesArrayFirstLoad == 'No') {
                //routesArray.push("mainView,view,4");
                routesArray.push("basicform,tab,1");
                // routesArrayBasicForm.push("basicform,tab,1");
                console.log('Masuk :basicform,tab,1');
            }
            isPushroutesArrayFirstLoad = 'No';

        }

    },

    items: [






           {
               xtype: 'EnterpriseSubscribed'
           }



















    ],





},




{
    //title: '<font size="2" color="black"><b>Monitored<br>Account</b></font>',
    title: '<font size="2" color="black" ><b>Monitor</b></font>',
    xtype: 'formpanel',

    id: 'MonitoringAcc',
    scrollable: false,
    listeners: {

        activate: function () {

            if (isPushroutesArrayFirstLoad == 'No') {
                routesArray.push("basicform,tab,2");
                //   routesArrayBasicForm.push("basicform,tab,2");
                console.log('Masuk :basicform,tab,2');

            }
            isPushroutesArrayFirstLoad = 'No';
            LoadingCustomMsgShow('MONITOR ACC.<br>Not Available<br>Upgrade Pro!', '1');

        }

    },

    items: [





                {

                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        // pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            margin: '40 0 0 0',
                            html: '<img src="resources/icons/ProVersionRed.png" style="width="180" height="160"" />',
                        },
                        {
                            xtype: 'button',
                            align: 'strecth',
                            height: 100,
                            ui: 'plain',
                            html: '<font size="3" color="grey" ><b>Enabled/assigned new bills and receipts<br> notification to others cloud receipts <br>user account</b></font>',
                        },



                    ]
                }





















    ],





},






        ]

    }

});








window.popRightAway = function () {

    popFileSelector();
};
popFileSelector = function () {
    var el = document.getElementById("fileElem");
    if (el) {
        el.click();
    }
};




function addImgProfileEdit(imgsrc) {
    var img = document.createElement('img');
    img.setAttribute("src", imgsrc.target.result);
    img.setAttribute("width", "150");
    img.setAttribute("height", "150");
    document.getElementById("opProfileEdit").insertBefore(img);

}

function getAsTextProfileEdit(readFile) {
    var reader = new FileReader();
    reader.readAsText(readFile, 'UTF-8');
    reader.onload = loadedProfileEdit;
}

function loadedProfileEdit(evt) {
    alert("File Loaded Successfully" + fileString);
    var fileString = evt.target.result;
    $("#opProfileAdd").text(fileString);
}




function setMyAccountInfo() {

    Ext.getCmp('AccountInfo_CR_ID').setValue(GetCurrentAccountID());
    Ext.getCmp('AccountInfo_CR_AccountNo').setValue(GetCurrentAccountNo());
    Ext.getCmp('AccountInfo_CR_AccountName').setValue(GetCurrentAccountName());
    Ext.getCmp('AccountInfo_CR_MykadNo').setValue(GetCurrentMyKadNo());
    Ext.getCmp('AccountInfo_CR_PhoneNumber').setValue(GetCurrentPhoneNumber());
    Ext.getCmp('AccountInfo_CR_Email').setValue(GetCurrentEmail());
    Ext.getCmp('AccountInfo_CR_RegisterDate').setValue(GetCurrentRegisterDate());
    Ext.getCmp('AccountInfo_CR_Status').setValue(GetCurrentAccountStatus());
    Ext.getCmp('AccountInfo_CR_Version').setValue(GetCurrentVersion());
    Ext.getCmp('Login_CR_UseName').setValue(GetCurrentUserName());
}


function CRMobileUserUpdateAccountInfo() {

    Ext.Ajax.request({

        url: GetAPIurl() + '/CloudReceiptsMobileUser/CRMobileUserUpdateAccountInfo',

        params: {
            ID: Ext.getCmp('AccountInfo_CR_ID').getValue(),
            CR_AccountName: Ext.getCmp('AccountInfo_CR_AccountName').getValue(),
            CR_MobilePhone: Ext.getCmp('AccountInfo_CR_PhoneNumber').getValue(),
            CR_Email: Ext.getCmp('AccountInfo_CR_Email').getValue(),
            CR_Photo: GetCurrPictureProfile()
        },
        success: function (result, request) {
            LoadingCustomMsgHide();
            LoadingCustomMsgShow('Success!', '3');

        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });


}

function CRMobileUserUpdateLoginInfo() {

    Ext.Ajax.request({

        url: GetAPIurl() + '/CloudReceiptsMobileUser/CRMobileUserUpdateLoginInfo',

        params: {
            ID: Ext.getCmp('AccountInfo_CR_ID').getValue(),
            CR_UserName: Ext.getCmp('Login_CR_UseName').getValue(),
            CR_Password: Ext.getCmp('Login_CR_Password_txt').getValue()

        },
        success: function (result, request) {
            var ConfirmPwds = Ext.getCmp('Login_CR_Password_txt').getValue();
            localStorage.setItem('CurrPassword', ConfirmPwds);
            Ext.getCmp('Login_CR_Password').setValue(ConfirmPwds);
            LoadingCustomMsgHide();
            LoadingCustomMsgShow('Success!', '3');
            Ext.getCmp('btnSavePassword').setDisabled(true);
            Ext.getCmp('Login_CR_Password').setHidden(false);
            Ext.getCmp('Login_CR_Password_txt').setHidden(true);


        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });


}



function CRMobileUserDisableAccount() {

    Ext.Ajax.request({

        url: GetAPIurl() + '/CloudReceiptsMobileUser/CRMobileUserDisableAccount',

        params: {
            ID: Ext.getCmp('AccountInfo_CR_ID').getValue()

        },
        success: function (result, request) {
            LoadingCustomMsgHide();
            LoadingCustomMsgShow('Success!', '3');

        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });


}


//function EnableuploadPicProfile() {
//    alert('uploadPicProfilecc');
//    var file = document.getElementById('imageUpload').files[0];
//    if (file) {

//        if (file.type.match("image.*")) {
//            var reader = new FileReader();
//            reader.readAsDataURL(file/*, "UTF-8"*/);
//            reader.onload = function (event) {
//                ContentString = event.target.result;
//                Ext.getCmp('Pictureprofile').setSrc(ContentString);
//            //    localStorage.setItem('EnterpriseLogo64', ContentString);
//                //console.log(ContentString);
//            };


//        }
//        else {

//        }
//    }
//}


//function startReadProfileImage(evt) {



//}
