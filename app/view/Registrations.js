

Ext.define('ianMizi.view.Registrations', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'Registrations',
    id: 'RegistrationsID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    zIndex: 20,
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
     
        items:
        [


            {
                xtype: 'toolbar',
                title: '<font size="4" color="white">Sign Up</font>',
                docked: 'top',
                id: 'RegistrationsTop',
                style: {

                    background: '#f44336',

                },

            },
            ////////{

            ////////    xtype: 'toolbar',
            ////////    docked: 'bottom',
            ////////    hidden:true,
            ////////    style: {
            ////////        background: '#D25959',
            ////////    },
            ////////    items: [
            ////////         {
            ////////             //docked: 'right',
            ////////             // width: 50,
            ////////             ui: 'decline',
            ////////             xtype: 'button',
            ////////             id: '_registerFormCancel',
            ////////             text: 'Cancel',
            ////////             handler: function () {
            ////////                 //Ext.getCmp('mainView').setActiveItem(0);
            ////////                // LoadingVerifyCodeShow();
            ////////             }
            ////////         },
            ////////         {
            ////////             xtype: 'spacer'
            ////////         },
            ////////         {
            ////////             ui: 'decline',
            ////////             xtype: 'button',
            ////////             id: '_registerFormSave',
            ////////             text: 'Save',

            ////////             handler: function () {
            ////////                 //var CR_MykadNo; var CR_UseName; var CR_Password; var CR_Email; var CR_PhoneNumber;
            ////////                 //CR_MykadNo = Ext.getCmp('CR_MykadNo').getValue();
            ////////                 //CR_UseName = Ext.getCmp('CR_UseName').getValue();
            ////////                 //CR_Password = Ext.getCmp('CR_Password').getValue();
            ////////                 //CR_Email = Ext.getCmp('CR_Email').getValue();
            ////////                 //CR_PhoneNumber = Ext.getCmp('CR_PhoneNumber').getValue();
                           
            ////////                 //if (CR_MykadNo.length > 1 && CR_UseName.length > 1 && CR_Password.length > 1 && CR_Email.length > 1 && CR_PhoneNumber.length > 1) {

            ////////                 //    LoadingCustomMsgShow('we will send verification code via SMS.Please confirm your phone no <b>' + CR_PhoneNumber + '</b>.', '5');
                             
                                
            ////////                 //}else
            ////////                 //{
            ////////                 //    LoadingCustomMsgShow('Not Valid!', '2');
            ////////                 //}
                            
            ////////             }
            ////////         },




            ////////    ]

            ////////},

            
            {

                xtype: 'fieldset',
            //    title: 'Registration Form',
                autoScroll: true,
                items: [
                    //{
                    //    xtype: 'textfield',
                    //    //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                    //    height: 10,
                    //    width:20,
                    //    id: 'CR_MykadNo',
                    //    required: true,
                    //    labelWrap: true,
                    //    disabled: false,
                    //    //   placeHolder: ''

                    //},
                    {
                        id:'htmlUserNameLabel',
                        margin: '0 0 0 15',
                        html:'<font size="2" color="black"><b>UserName</b></font>',
                        
                       
                    },
                     {
                         
                         id: 'htmlUserNameTxtBox',
                       margin:'0 0 0 15',
                       html: '<input type="text" id="CR_UseName" placeholder="email ID or phone number" style="border-color:red;color:black;width:305px;text-align: right">'
                        
                     },
                       {
                           id: 'htmlPasswordLabel',
                           margin: '0 0 0 15',
                           html: '<font size="2" color="black"><b>Password</b></font>',


                       },
                     {

                         id: 'htmlPasswordTxtBox',
                         margin: '0 0 0 15',
                         html: '<input type="text" id="CR_Password" style="border-color:red;color:black;width:305px;text-align: right">'

                     },
                       {
                           id: 'htmlConfirmPasswordLabel',
                           margin: '0 0 0 15',
                           html: '<font size="2" color="black"><b>Confirm Password</b></font>',


                       },
                     {

                         id: 'htmlConfirmPasswordTxtBox',
                         margin: '0 0 0 15',
                         html: '<input type="text" id="CR_Passwordconfirm" style="border-color:red;color:black;width:305px;text-align: right">'

                     },
                      {
                          id: 'htmlEmailLabel',
                          margin: '0 0 0 15',
                          html: '<font size="2" color="black"><b>Email</b></font>',


                      },
                     {

                         id: 'htmlEmailTxtBox',
                         margin: '0 0 0 15',
                         html: '<input type="text" id="CR_Email" style="border-color:red;color:black;width:305px;text-align: right">'

                     },
                     {
                         id: 'htmlMobilePhoneLabel',
                         margin: '0 0 0 15',
                         html: '<font size="2" color="black"><b>Mobile Phone</b></font>',


                     },
                     {

                         id: 'htmlMobilePhoneTxtBox',
                         margin: '0 0 0 15',
                         html: '<input type="text" id="CR_PhoneNumber" style="border-color:red;color:black;width:305px;text-align: right">'

                     },
                    //{
                    //    xtype: 'passwordfield',
                    //    label: 'Password',
                    //    id: 'CR_Password',
                    //    clearIcon: false,
                    //    labelWrap: true,
                    //    placeHolder: 'Enter Password',
                    //    listeners: {
                    //        blur: function () {
                              
                    //           checkConfirmPwd();
                    //        },
                    //        focus: function () {
                    //            checkConfirmPwd();
                    //        var val = Ext.getCmp('CR_UseName').getValue();
                    //        checkUserName(val);
                    //        }
                    //    }
                    //},
                    //{
                    //    xtype: 'passwordfield',
                    //    label: 'Confirm Password',
                    //    id: 'CR_Passwordconfirm',
                    //    labelWrap: true,
                    //    name: 'password',
                    //    placeHolder: 'Re-Enter Password',
                    //    listeners: {
                    //        blur: function () {
                    //            var val = Ext.getCmp('CR_Password').getValue();
                    //            if (val.length < 1) {
                    //                Ext.getCmp('CR_Password').focus(true, 200);
                    //            } else {
                    //                checkConfirmPwd();
                    //            }
                                 
                    //        },
                    //        focus: function () {
                    //            var val = Ext.getCmp('CR_Password').getValue();
                    //            if (val.length < 1) {
                    //                Ext.getCmp('CR_Password').focus(true, 200);
                    //            } else {
                    //                checkConfirmPwd();
                    //            }
                    //        }
                    //    }
                    //},
                    //{
                    //    xtype: 'emailfield',
                    //    label: 'Email',
                    //    id: 'CR_Email',
                    //    required: true,
                    //    labelWrap: true,
                    //    placeHolder: 'email@example.com',
                    //    listeners: {
                          
                    //    }
                    //},
                    //{
                       

                    //    xtype: 'textfield',
                    //    id: 'CR_PhoneNumber',
                    //    required: true,
                    //    component: {
                    //        xtype: 'input',
                    //        type: 'tel'
                    //    },
                    //    label: 'MobilePhone',
                    //    labelWrap: true,
                    //    placeHolder: 'will be verified by sms',
                    //    listeners: {
                    //        blur: function () {
                    //          //  validateFeedback();
                    //        },
                    //        focus: function () {
                    //          //  validateFeedback();
                    //            var val = Ext.getCmp('CR_Email').getValue();
                    //            checkEmailID(val);
                    //        }
                    //    }

                    //},



                    {
                        xtype: 'panel',
                        height:5
                    },



                    {
                        xtype: 'container',
                        id: 'ContainerSaveRegistration',
                        // bodyStyle: { "background-color": "red" },
                        // hidden:true,
                        //defaults: {
                        //    xtype: 'button',
                        //    style: 'margin: .5em',
                        //    flex: 1
                        //},
                        layout: {
                            type: 'vbox'
                        },
                        style: 'border-bottom:1px solid;background-color:#f44336;',
                        items: [


                              {
                                  xtype: 'label',
                                  // align: 'stretch',
                                  //align: 'left',
                                  labelWrap: true,
                                  id: 'txtregMykad',
                                  // ui: 'plain',

                                  //  padding: '5px',
                                  html: '<font size=3px color=white><center>By Default your Mobile Phone No will be your ID.Recommended to put your Mykad No(Malaysian Only) as ID for vast integration purposed.</center></font>',


                              },
                                {
                                    xtype: 'button',
                                    align: 'stretch',
                                    //align: 'left',

                                    id: 'txtIDreg',
                                    ui: 'plain',

                                    //  padding: '5px',
                                    html: '<div class="blink_me"><font size=3px color=white><u><center><b>MyKad or Mobile Phone No</b></center></u></font></div>',
                                    handler: function () {


                                    },


                                },
                        ]
                    },
                
               {

                   xtype: 'textfield',
                   label: 'ID',
                  // fieldStyle: 'background-color:yellow;background-image:none',
                   //style: 'background-color:yellow',
                   //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                   //height: '10%',
                   //width: '60%',
                   id: 'CR_MykadNo',
                   required: true,
                   labelWrap: true,
                   disabled: false,
                   clearIcon: false,
                    placeHolder: 'Mykad without(-)',
                    listeners: {
                        blur: function () {
                            validateFeedback();
                            //Ext.getCmp('CR_MykadNo').setValue('blur');
                        },
                        focus: function () {
                            validateFeedback();
                            //Ext.getCmp('CR_MykadNo').setValue('focus');
                        }
                    }
               },
                {

                    xtype: 'textfield',
                    label: 'OneSignalID',
                    // fieldStyle: 'background-color:yellow;background-image:none',
                    //style: 'background-color:yellow',
                    //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                    //height: '10%',
                    //width: '60%',
                    hidden: true,
                    id: 'CR_OneSignalID',
                    required: true,
                    labelWrap: true,
                    disabled: false,
                    clearIcon: false,
                  
                   
                },


                  {

                      xtype: 'textfield',
                      label: 'Device Model',
                      hidden:true,
                      // fieldStyle: 'background-color:yellow;background-image:none',
                      //style: 'background-color:yellow',
                      //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                      //height: '10%',
                      //width: '60%',
                      id: 'CR_DeviceModel',
                      required: true,
                      labelWrap: true,
                      disabled: false,
                      clearIcon: false,


                  },

               {
                   xtype: 'container',
                   id: 'ContainerSaveRegistration',
                   //height: 12,
                                     
               },
                {

                    id: 'SMSmockupComponent',
                    height: 1,
                    hidden:true,
                    html: ''
                },



                      {
                          xtype: 'spacer',
                          height: 5,
                      },

                    



                    {
                        //xtype: 'container',
                        //id: 'ContainerbtnSaveCancelRegistration',
                        ////  hidden:true,
                        //defaults: {
                        //    xtype: 'button',
                        //    style: 'margin: .5em',
                        //    ui:'decline',
                        //    flex: 1
                        //},



                          
                               xtype: 'container',
                               id: 'ContainerbtnSaveCancelRegistration',
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
                                 //text: 'Cancel',                                
                                 //id: 'btnCancelRegistration',
                                 xtype: 'button',
                                 id: 'btnCancelRegistration',
                                 ui: 'plain',
                                 width: '50%',
                                 margin:'0 0 0 0',
                                 height: 42,
                                 //width: 100,
                                 //height: 50,
                                 //  width: '80%',
                                 //padding: '10px',
                                 //style: {
                                 //    background: '#FA8072',
                                 //},
                                 //  text: '<font size=3px color=white><center><b>Log-In</b></center></font>',
                                 text: '<button class="buttonSave buttonSaves">Cancel</button>',
                                 hasDisabled: false,
                                 handler: function () {
                                     ResetRegistrationForm();
                                     routesArray.push("mainView,view,0");
                                     Ext.getCmp('mainView').setActiveItem(0);

                                 }
                             },

                             {
                                 //text: 'Save',
                                 //id: 'btnSaveRegistration',



                                 xtype: 'button',
                                 ui: 'plain',
                                 margin: '0 0 0 0',
                                 text: '<button class="buttonSave buttonSaves">Save</button>',
                                 // scope: this,
                                 id: 'btnSaveRegistration',
                                 width: '50%',
                                 height: 42,

                                 disabled: false,
                                 handler: function () {
                                
                                     var CR_MykadNo; var CR_UseName; var CR_Password; var CR_Email; var CR_PhoneNumber;
                                     //CR_MykadNo = Ext.getCmp('CR_MykadNo').getValue();
                                     //CR_UseName = Ext.getCmp('CR_UseName').getValue();
                                     //CR_Password = Ext.getCmp('CR_Password').getValue();
                                     //CR_Email = Ext.getCmp('CR_Email').getValue();
                                     //CR_PhoneNumber = Ext.getCmp('CR_PhoneNumber').getValue();
                             


                                     CR_MykadNo = Ext.getCmp('CR_MykadNo').getValue();
                                     CR_UseName = document.getElementById('CR_UseName').value;
                                     CR_Password = document.getElementById('CR_Password').value;
                                     CR_Email = document.getElementById('CR_Email').value;
                                     CR_PhoneNumber = document.getElementById('CR_PhoneNumber').value;




                                     
                                     if (CR_MykadNo.length > 1 && CR_UseName.length > 1 && CR_Password.length > 1 && CR_Email.length > 1 && CR_PhoneNumber.length > 1) {
                                      
                                         var storage = window.localStorage;                                      
                                         storage.setItem('MYKAD', CR_MykadNo) // Pass a key name and its value to add or update that key.
                                         LoadingCustomMsgShow('we will send verification code via SMS.Please confirm your phone no <b>' + CR_PhoneNumber + '</b>.', '5');


                                     } else {
                                         LoadingCustomMsgShow('Not Valid!', '2');
                                     }


                                 }
                             },




                                






                           
                        ]

                    },





                   













                  
















                ]
            },




                    {
                        xtype: 'container',
                        id: 'ContainerSaveCancelRegistrationEmail',
                        //  hidden:true,
                        //defaults: {
                        //    xtype: 'button',
                        //    style: 'margin: .5em',
                        //    ui: 'plain',
                        //    flex: 1
                        //},
                        margin:'-10 0 0 0',
                        height: 150,
                        layout: {
                            type: 'vbox'
                        },
                        items: [


                             {
                                 //xtype: 'button',
                                 //align: 'stretch',
                                 //align: 'left',

                                 id: 'txtIDregEmailaalll',
                                 //ui: 'plain',
                                 //height:50,

                                 //  padding: '5px',
                                 html: '<a href="mailto:Support@Cloud-Receipts.com?subject=Unable to sign up&body=Hi,I unable to sign up, please assist .     <br><br>Cloud-Receipts.com Reference ID:' + localStorage.getItem('device_serial') + 'TQ"><center><img src="resources/icons/crSupport.png" width="75" height="75"/><br><font size="2" color="black">Email to us if you have problem with registration</font></center></a>',
                                 //html: '<a href="mailto:Support@Cloud-Receipts.com"><center><img src="resources/icons/aboutemail.png" style="width: 32px; height: 32px;" /><br><font size="2" color="black">Email to us if you have problem with registration</font></center></a>'
                                 //html: '<font size="2" color="black">Email to us if you have problem with registration <br><a href="mailto:Admin@cloud-receipts.com">Admin@cloud-receipts.com</a></font>',
                                 //handler: function () {


                                 //},


                             },


                        ]

                    }





        ]
    },
    initialize: function () {
       
    }
});



var validUserName;
var checkUserNameDone = 'N';
var checkUserNameOldValue='N';
function checkUserName(UserName)
{
    console.log("checkUserNameDone:" + checkUserNameDone);
    console.log(UserName.length);



  




    if(UserName.length < 1)
    {
        //Ext.getCmp('htmlUserNameTxtBox').setHtml('<input type="text" id="CR_UseName" style="border-color:red;background-color:red;color:white;width:305px;text-align: right">');
        Ext.getCmp('htmlUserNameLabel').setHtml('<font size="2" color="red"><b>UserName</b></font>');
        document.getElementById("CR_UseName").focus();
       // Ext.getCmp('CR_UseName').focus(true, 200);
        checkUserNameDone = 'N';
       // Ext.getCmp('CR_UseName').setStyle('background-color', 'red');
        return;
        //this.getSeachField()
        //alert('error')
    }else
    {
        //  
        if (checkUserNameOldValue != UserName) { checkUserNameDone = 'N' }

        if (checkUserNameDone == 'N' )
        {
            Ext.getStore('CR_MobileUserVerifyRegistrationUserNameStore').getProxy().setExtraParams({
                UserName: UserName
            });
            Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationUserNameStore').load();
            //  LoadingPanelShow();
            LoadingCustomMsgShow('Checking...', '4');
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Name' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                Ext.getStore('CR_MobileUserVerifyRegistrationUserNameStore').getProxy().setExtraParams({
                    UserName: UserName
                });
                Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationUserNameStore').load();
                var myStore = Ext.getStore('CR_MobileUserVerifyRegistrationUserNameStore');
                var count = myStore.getCount();
                console.log("username:" + count);

            
                if (count >= 1) {
                    //   LoadingCustomMsgHide();

                    Ext.getCmp('htmlUserNameLabel').setHtml('<font size="2" color="red"><b>UserName</b></font>');

                 //   Ext.getCmp('CR_UseName').setLabel('<font size="3" color="red">UserName</font>');
                    checkUserNameDone = 'Y';
                    validUserName = false;
                    //  Ext.getCmp('CR_UseName').focus(true, 200);
                    document.getElementById("CR_UseName").focus();
                    LoadingCustomMsgShow('User Name Already Exist!', '2');
                } else
                {
                    // Ext.getCmp('CR_UseName').setLabel('<font size="3" color="green">UserName</font>');
                    Ext.getCmp('htmlUserNameLabel').setHtml('<font size="2" color="green"><b>UserName</b></font>');
                    checkUserNameDone = 'Y';
                    validUserName = true;
                    LoadingCustomMsgHide();
                }
                checkUserNameOldValue = UserName;
                Ext.Viewport.setMasked(false);
            });
            task.delay(2000);
        } else {
            //Ext.getCmp('CR_Password').setValue('');
        }
        if (validUserName == false) {
            //Ext.getCmp('CR_UseName').focus(true, 200);
            //Ext.getCmp('CR_UseName').setStyle('background-color', 'red');
            //  Ext.getCmp('htmlUserNameTxtBox').setHtml('<input type="text" id="CR_UseName" style="border-color:red;background-color:red;color:white;width:305px;text-align: right">');
            Ext.getCmp('htmlUserNameLabel').setHtml('<font size="2" color="red"><b>UserName</b></font>');
            document.getElementById("CR_UseName").focus();
           // return;
        }
        Ext.Viewport.setMasked(false);
    }


}

var checkConfirmPwdResult = 'F';
function checkConfirmPwd()
{
    var rpwd = Ext.getCmp('CR_Password').getValue();
    var cpwd = Ext.getCmp('CR_Passwordconfirm').getValue();

    //if (rpwd.length > 1 && cpwd.length > 1) {
        if (cpwd != rpwd) {
            checkConfirmPwdResult = 'F';
            Ext.getCmp('CR_Password').setLabel('<font size="3" color="red">Password</font>');
            Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="red">Confirm Password</font>');
        } else {
            checkConfirmPwdResult = 'S';
            if (rpwd.length > 1 && cpwd.length > 1) {
                Ext.getCmp('CR_Password').setLabel('<font size="3" color="green">Password</font>');
                Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="green">Confirm Password</font>');
            }else
            {
                    Ext.getCmp('CR_Password').setLabel('<font size="3" color="black">Password</font>');
                    Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="black">Confirm Password</font>');
            }
           
        }
    //}
        //if(checkPwdMatchIsInitialized=='Y')
        //{
        //    Ext.getCmp('CR_Password').setLabel('<font size="3" color="black">Password</font>');
        //    Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="black">Confirm Password</font>');
        //    checkPwdMatchIsInitialized = 'N';
        //}
    

}

function checkConfirmPwdFocus() {
    //var rpwd = Ext.getCmp('CR_Password').getValue();
    //var cpwd = Ext.getCmp('CR_Passwordconfirm').getValue();



    var rpwd = document.getElementById('CR_Password').value;
    var cpwd = document.getElementById('CR_Passwordconfirm').value;
  
  
    if (cpwd != rpwd) {
        checkConfirmPwdResult = 'F';
        Ext.getCmp('htmlPasswordLabel').setHtml('<font size="2" color="red"><b>Password</b></font>');
        Ext.getCmp('htmlConfirmPasswordLabel').setHtml('<font size="2" color="red"><b>Confirm Password</b></font>');
    } else {
        checkConfirmPwdResult = 'S';
        if (rpwd.length > 1 && cpwd.length > 1) {
            //Ext.getCmp('CR_Password').setLabel('<font size="3" color="green">Password</font>');
            //Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="green">Confirm Password</font>');
            Ext.getCmp('htmlPasswordLabel').setHtml('<font size="2" color="green"><b>Password</b></font>');
            Ext.getCmp('htmlConfirmPasswordLabel').setHtml('<font size="2" color="green"><b>Confirm Password</b></font>');
        } else {
            //Ext.getCmp('CR_Password').setLabel('<font size="3" color="black">Password</font>');
            //Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="black">Confirm Password</font>');
            Ext.getCmp('htmlPasswordLabel').setHtml('<font size="2" color="black"><b>Password</b></font>');
            Ext.getCmp('htmlConfirmPasswordLabel').setHtml('<font size="2" color="black"><b>Confirm Password</b></font>');
        }

    }

    var val = document.getElementById('CR_UseName').value;
    checkUserName(val);
    //}
    //if(checkPwdMatchIsInitialized=='Y')
    //{
    //    Ext.getCmp('CR_Password').setLabel('<font size="3" color="black">Password</font>');
    //    Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="black">Confirm Password</font>');
    //    checkPwdMatchIsInitialized = 'N';
    //}


}



var checkEmailIDDone = 'N';
var checkEmailIDOldValue = 'N';
var validEmail ;
function checkEmailID() {
    //console.log(checkEmailIDDone);
    //console.log(EmailID.length);
  //  var EmailID = Ext.getCmp('CR_Email').getValue();
    var EmailID = document.getElementById('CR_Email').value;
    validEmail = checkValidEmail();

    if (validEmail == false)
    {
        //Ext.getCmp('CR_Email').focus(true, 200);
        //Ext.getCmp('CR_Email').setLabel('<font size="3" color="red">Email</font>');
     //   Ext.getCmp('htmlEmailTxtBox').setHtml('<input type="text" id="CR_Email" style="border-color:red;background-color:red;color:white;width:305px;text-align: right">');
        Ext.getCmp('htmlEmailLabel').setHtml('<font size="2" color="red"><b>Email</b></font>');
        document.getElementById("CR_Email").focus();
        return;
    }




    if (EmailID.length < 1) {

        //  Ext.getCmp('CR_Email').focus(true, 200);
        document.getElementById("CR_Email").focus();
        checkEmailIDDone = 'N';
     
        return;
        //this.getSeachField()
        //alert('error')
    } else {
        //  

     

        if (checkEmailIDOldValue != EmailID) { checkEmailIDDone = 'N' }

        if (checkEmailIDDone == 'N') {
            Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore').getProxy().setExtraParams({
                EmailID: EmailID
            });
            Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationEmailIDStore').load();
            LoadingCustomMsgShow('Checking...', '4')
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'checkEmailID..' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore').getProxy().setExtraParams({
                    EmailID: EmailID
                });
                Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationEmailIDStore').load();
                var myStore = Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore');
                var count = myStore.getCount();
                console.log("email:"+count);
                if (count >= 1) {
                    // Ext.getCmp('CR_Email').setLabel('<font size="3" color="red">Email</font>');
                   // Ext.getCmp('htmlEmailTxtBox').setHtml('<input type="text" id="CR_Email" style="border-color:red;background-color:red;color:white;width:305px;text-align: right">');
                    Ext.getCmp('htmlEmailLabel').setHtml('<font size="2" color="red"><b>Email</b></font>');
                    document.getElementById("CR_Email").focus();
                    checkEmailIDDone = 'N';
                    validEmail = false;
                  //  Ext.getCmp('CR_Email').focus(true, 200);
                    LoadingCustomMsgShow('Email ID Already Exist!', '2')
                } else {
                    //   Ext.getCmp('CR_Email').setLabel('<font size="3" color="green">Email</font>');
                  //  Ext.getCmp('htmlEmailTxtBox').setHtml('<input type="text" id="CR_Email" style="border-color:red;color:black;width:305px;text-align: right">');
                    Ext.getCmp('htmlEmailLabel').setHtml('<font size="2" color="green"><b>Email</b></font>');
                    checkEmailIDDone = 'Y';
                    validEmail = true;
                    LoadingCustomMsgHide();
                }
                checkEmailIDOldValue = EmailID;
                Ext.Viewport.setMasked(false);
            });
            task.delay(2000);
        } else {
            //Ext.getCmp('CR_Password').setValue('');
        }
       
    }
    //if (validEmail == false) {
    //    Ext.getCmp('CR_Email').focus(true, 200);
    //    Ext.getCmp('CR_Email').setLabel('<font size="3" color="red">Email</font>');

    //}

}




function checkValidEmail() {

    //var email = 

   // var x = Ext.getCmp('CR_Email').getValue();
    var x = document.getElementById('CR_Email').value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        //    alert("Not a valid e-mail address");
        //  Ext.getCmp('CR_Email').focus(true, 200);
        document.getElementById("CR_Email").focus();
        return false;
    }else
    {
        return true;
    }




    //var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //if (!filter.test(email.value)) {
    //  //  alert('Please provide a valid email address');
    //  //  email.focus;
    //    return false;
    //}else
    //{
    //    return true;
    //}
}








var checkMyKadNoDone = 'N';
var checkMyKadNoOldValue;
var validMykadNo;
function checkMyKadNo(MyKadNo) {
    console.log(checkMyKadNoDone);
    console.log(MyKadNo.length);



    if (MyKadNo.length < 1) {

        Ext.getCmp('CR_MykadNo').focus(true, 200);
        checkMyKadNoDone = 'N';
        validMykadNo = false;
        return;
        //this.getSeachField()
        //alert('error')
    } else {
        //  



        if (checkMyKadNoOldValue != MyKadNo) { checkMyKadNoDone = 'N' }

        if (checkMyKadNoDone == 'N') {
            Ext.getStore('CR_MobileUserVerifyRegistrationMyKadNoStore').getProxy().setExtraParams({
                MyKadNo: MyKadNo
            });
            Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationMyKadNoStore').load();
            LoadingCustomMsgShow('Proccesing...', '4');
            Ext.Viewport.mask({ xtype: 'loadmask', message: 'checkMyKadID..' });
            var task = Ext.create('Ext.util.DelayedTask', function () {
                Ext.getStore('CR_MobileUserVerifyRegistrationMyKadNoStore').getProxy().setExtraParams({
                    MyKadNo: MyKadNo
                });
                Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationMyKadNoStore').load();
                var myStore = Ext.getStore('CR_MobileUserVerifyRegistrationMyKadNoStore');
                var count = myStore.getCount();
                if (count >= 1) {
                    Ext.getCmp('txtIDreg').setHtml('<div class="blink_me"><font size=3px color=white><u><center><b>MyKad/ID Already Exist!!</b></center></u></font></div>');
                    Ext.getCmp('CR_MykadNo').setLabel('<div class="blink_me"><font size=3px color=red><b>ID</b></font></div>');
                    checkMyKadNoDone = 'Y';
                    validMykadNo = false;
                    Ext.getCmp('CR_MykadNo').focus(true, 200);
                    LoadingCustomMsgShow('MyKad ID Already Exist!', '2');
                } else {
                 //   Ext.getCmp('txtIDreg').setHtml('<font size="3" color="green">MyKad/ID</font>');
                    checkMyKadNoDone = 'Y';
                    validMykadNo = true;
                    var CR_MykadNo; var CR_UseName; var CR_Password; var CR_Email; var CR_PhoneNumber;
                    CR_MykadNo=  Ext.getCmp('CR_MykadNo').getValue();
                    CR_UseName= Ext.getCmp('CR_UseName').getValue();
                    CR_Password= Ext.getCmp('CR_Password').getValue();
                    CR_Email=Ext.getCmp('CR_Email').getValue();
                    CR_PhoneNumber = Ext.getCmp('CR_PhoneNumber').getValue();

                    CRMobileUserInsertUser(CR_MykadNo, CR_UseName, CR_Password, CR_Email, CR_PhoneNumber);

                    
                }
                checkMyKadNoOldValue = MyKadNo;
                Ext.Viewport.setMasked(false);
            });
            task.delay(2000);
        } else {
            //Ext.getCmp('CR_Password').setValue('');
        }

    }


}












function CRMobileUserInsertUser(CR_MykadNo, CR_UseName, CR_Password, CR_Email, CR_PhoneNumber) {

    Ext.Ajax.request({

        url: GetAPIurl()  + '/CloudReceiptsMobileUser/CRMobileUserInsertUser',

        params: {

            CR_MykadNo: CR_MykadNo,
            CR_UseName: CR_UseName,
            CR_Password: CR_Password,
            CR_Email: CR_Email,
            CR_PhoneNumber: CR_PhoneNumber,




            CR_LoginIP: localStorage.getItem('device_ip'),
            CR_PhoneModel: localStorage.getItem('device_model'),
            CR_PhoneUniqueID: localStorage.getItem('device_uuid'),
            CR_PhonePlatform: localStorage.getItem('device_platform'),
            CR_PhoneVersion: localStorage.getItem('device_version'),



            CR_PhoneManufacturer: localStorage.getItem('device_manufacturer'),
            CR_PhoneIsVirtual: localStorage.getItem('device_isVirtual'),
            CR_PhoneSerial: localStorage.getItem('device_serial'),
            CR_RawPhoneInfo: localStorage.getItem('SimInfo'),
            CR_PlayerID: localStorage.getItem('player_id')


        },
        success: function (result, request) {
        
            //Ext.getCmp('loginuserNameTextField').setValue(UserName);
            //Ext.getCmp('loginpasswordTextField').setValue(Password);
            LoadingCustomMsgHide();

            setTimeout(function () { LoadingVerifyCodeShow(); }, 1000);
           

            //   Ext.Msg.alert("Please Login.This Is a Temporary Account for demo purpose,your account will be Activated by Administrator after confirmed and signed service contract.<br>Agensi Angkasa Negara-Malaysia.");

        },
        failure: function (result, request) {
            LoadingCustomMsgHide();
            Ext.Msg.alert('Error', request);
          //  CustomeMsgBoxShow("Error");
          
        }
    });
}












var validPhoneNo;
function validateFeedback() {
  //  var z = Ext.getCmp('CR_PhoneNumber').getValue();

    var z = document.getElementById('CR_PhoneNumber').value;
  //  var z = document.forms["myForm"]["num"].value;
    if (z.length > 1) {
        validPhoneNo = true;
        Ext.getCmp('htmlMobilePhoneLabel').setHtml('<font size="2" color="green">Mobile Phone</font>');
        //if (!/^[0-9]+$/.test(z)) {
        //    console.log("Please only enter numeric characters only for your Age! (Allowed input:0-9)")
        //} else {
        //    console.log('true');
        //}

    }else
    {
        validPhoneNo = false;
     //   Ext.getCmp('CR_PhoneNumber').focus(true, 200);
        document.getElementById("CR_PhoneNumber").focus();
        Ext.getCmp('htmlMobilePhoneLabel').setHtml('<font size="2" color="red">Mobile Phone</font>');
    }
   
}


function ResetRegistrationForm() {
    //Ext.getCmp('CR_UseName').setValue('');
    //Ext.getCmp('CR_Password').setValue('');
    //Ext.getCmp('CR_Passwordconfirm').setValue('');
    //Ext.getCmp('CR_Email').setValue('');
    //Ext.getCmp('CR_PhoneNumber').setValue('');
    //Ext.getCmp('CR_MykadNo').setValue('');
    //Ext.getCmp('CR_UseName').setLabel('<font size="3" color="black">UserName</font>');
    //Ext.getCmp('CR_Password').setLabel('<font size="3" color="black">Password</font>');
    //Ext.getCmp('CR_Passwordconfirm').setLabel('<font size="3" color="black">Confirm Password</font>');
    //Ext.getCmp('CR_Email').setLabel('<font size="3" color="black">Email</font>');
    //Ext.getCmp('CR_PhoneNumber').setLabel('<font size="3" color="black">Mobile Phone</font>');
    //Ext.getCmp('CR_MykadNo').setLabel('<font size="3" color="black">ID</font>');

    Ext.getCmp('htmlUserNameTxtBox').setHtml('<input type="text" id="CR_UseName" placeholder="suggestion:your email ID or phone number" style="border-color:red;color:black;width:305px;text-align: right">');
    Ext.getCmp('htmlUserNameLabel').setHtml('<font size="2" color="black">User Name</font>');
    document.getElementById("CR_UseName").value = "";

    Ext.getCmp('htmlPasswordLabel').setHtml('<font size="2" color="black">Password</font>');
    document.getElementById("CR_Password").value = "";
   
    Ext.getCmp('htmlConfirmPasswordLabel').setHtml('<font size="2" color="black">Confirm Password</font>');
    document.getElementById("CR_Passwordconfirm").value = "";


    Ext.getCmp('htmlEmailLabel').setHtml('<font size="2" color="black">Email</font>');
    document.getElementById("CR_Email").value = "";

    Ext.getCmp('htmlMobilePhoneLabel').setHtml('<font size="2" color="black">Mobile Phone</font>');
    document.getElementById("CR_PhoneNumber").value = "";

    Ext.getCmp('CR_MykadNo').setValue('');
}

function setMykadfromMobilePhone() {
    var phno = document.getElementById("CR_PhoneNumber").value;
    console.log("phno:" + phno);
    Ext.getCmp('CR_MykadNo').setValue(phno);
}

function focusblurevent() {
    document.getElementById("CR_Password").addEventListener("focus", checkConfirmPwdFocus);
    document.getElementById("CR_Password").addEventListener("blur", checkConfirmPwdFocus);
    document.getElementById("CR_Passwordconfirm").addEventListener("focus", checkConfirmPwdFocus);
    document.getElementById("CR_Passwordconfirm").addEventListener("blur", checkConfirmPwdFocus);
    document.getElementById("CR_PhoneNumber").addEventListener("focus", checkEmailID);
    document.getElementById("CR_PhoneNumber").addEventListener("keyup", setMykadfromMobilePhone);
    
  
}