Ext.define('ianMizi.view.Registration.Register', {
});

var _registrationForm;


function RegistrationForm() {
    _registrationForm =
      Ext.create('Ext.Panel', {

          draggable: false,
          centered: true,
          scrollable: true,
          //height: 343,
          //width: 450,
          // flex: 1,
          width: '95%',
          height: '90%',
          modal: false,
          hideOnMaskTap: false,
          showAnimation: {
              type: 'popIn',
              duration: 250,
              easing: 'ease-out'
          },
          hideAnimation: {
              type: 'popOut',
              duration: 250,
              easing: 'ease-out'
          },
          //  config: {
          //  style: "background-color: #57A0DC; color:white;",
          items: [

               {

                   xtype: 'toolbar',
                   title: 'Register Account',
                   docked: 'top',
                   style: {
                       background: '#D25959',
                   },

               },
                
               {

                   xtype: 'fieldset',
                   title: 'Registration Form',

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
                           xtype: 'textfield',
                           label: 'Username',
                           id: 'CR_UseName',
                           labelWrap: true,
                         
                           placeHolder: 'Enter Username'
                       },
                       {
                           xtype: 'passwordfield',
                           label: 'Password',
                           id: 'CR_Password',
                           labelWrap: true,                          
                           placeHolder: 'Enter Password'
                       },
                       {
                           xtype: 'passwordfield',
                           label: 'Confirm Password',
                           id: 'CR_Passwordconfirm',
                           labelWrap: true,
                           name: 'password',
                           placeHolder: 'Enter Password'
                       },
                       {
                           xtype: 'emailfield',
                           label: 'Email',
                           id: 'CR_Email',
                           required: true,
                           labelWrap: true,
                         
                           placeHolder: 'email@example.com-Required'
                       },
                       {
                           //xtype: 'urlfield',
                           //label: 'Mobile Phone',
                           //id: 'Gpsmobilep',
                           //labelWrap: true,
                           //name: 'Mobile',
                           //placeHolder: 'Optional'

                           xtype: 'textfield',
                           id: 'CR_PhoneNumber',
                           component: {
                               xtype: 'input',
                               type: 'tel'
                           },
                           label: 'MobilePhone',
                           labelWrap: true,
                           placeHolder: 'cell #'

                       },

                   ]
               },

                    {

                        xtype: 'toolbar',
                        docked: 'bottom',
                        style: {
                            background: '#D25959',
                        },
                        items: [
                             {
                                 //docked: 'right',
                                 // width: 50,
                                 ui: 'decline',
                                 xtype: 'button',
                                 id: '_regFormCancel',
                                 text: 'Cancel',
                                 handler: function () {

                                     RegistrationFormHide();
                                 }
                             },
                             {
                                 xtype: 'spacer'
                             },
                             {
                                 ui: 'decline',
                                 xtype: 'button',
                                 id: '_regFormsave',
                                 text: 'Save',

                                 handler: function (btn) {
                                     var UserName = Ext.getCmp('loginregGpsusr').getValue();
                                     var Password = Ext.getCmp('loginregGpspwd').getValue();
                                     var Cpassword = Ext.getCmp('loginregGpspwdconfirm').getValue();
                                     var Version = '3';
                                     var Status = '1';
                                     var AccountNos = 'C01';
                                     var RegisterBy = Ext.getCmp('loginregGpsusr').getValue();
                                     var UpdateBy = Ext.getCmp('loginregGpsusr').getValue();
                                     var LoginIPs = 'MostiTrack';
                                     var LoginType = Ext.getCmp('loginregGpsmobilep').getValue();
                                     var Browsers = Ext.browser.name;
                                     var OSs = detectOs();
                                     var EmailReg = Ext.getCmp('loginregGpsemail').getValue();
                                     var chekcemailresult = contains(EmailReg, '@');



                                     if (!UserName) {
                                         CustomeMsgBoxShow("Not valid");

                                         return;
                                     }
                                     if (!Password) {
                                         CustomeMsgBoxShow("Not valid");
                                         return;
                                     }

                                     var length = Password.length;
                                     if (length < 8) {
                                         //  Ext.Msg.alert('Error', 'Password atleast 8 char!');
                                         CustomeMsgBoxShow("Error,Password atleast 8 char!");
                                         //if ((messageboxss())) {
                                         //    Ext.Viewport.add(messageboxss('Password atleast 8 char'));
                                         //}
                                         return;
                                     }


                                     if (Password != Cpassword) {
                                         //if ((messageboxss())) {
                                         //    Ext.Viewport.add(messageboxss('Password Not match'));
                                         //}
                                         // Ext.Msg.alert('Error', 'Password Not match !');
                                         CustomeMsgBoxShow("Error! Password Not match");
                                         return;
                                     }




                                     if (EmailReg) {
                                         if (chekcemailresult == false) {
                                             CustomeMsgBoxShow("Error! Not valid Email");
                                             //  Ext.Msg.alert('Error', 'Not valid Email!');
                                             //if ((messageboxss())) {
                                             //    Ext.Viewport.add(messageboxss('Not valid Email'));
                                             //}
                                             return;
                                         }
                                     }
                                     else {
                                         //  Ext.Msg.alert('Error', 'Email Is required!');
                                         CustomeMsgBoxShow("Error! Email Is required");
                                         //if ((messageboxss())) {
                                         //    Ext.Viewport.add(messageboxss('NEmail Is required'));
                                         //}
                                         return;
                                     }



                                     _DataStore_User_Login.getProxy().setExtraParams({
                                         US: UserName,
                                         PW: Password,
                                         PLYR: Browsers,
                                         SISOP: detectOs(),
                                         //IP: myip,
                                         IPADD: 'MostiTrack',
                                     });



                                     Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking ID..' });
                                     var task = Ext.create('Ext.util.DelayedTask', function () {

                                         _DataStore_User_Login.getProxy().setExtraParams({
                                             US: UserName,
                                             PW: Password,
                                             PLYR: Browsers,
                                             SISOP: detectOs(),
                                             //IP: myip,
                                             IPADD: 'MostiTrack',
                                         });

                                         //  _DataStore_GPSUserLogin.getProxy().setUrl(document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserLoginR');

                                         _DataStore_User_Login.load({

                                             callback: function (record, operation, success) {


                                                 if (success) {
                                                     var store = _DataStore_User_Login.getAt(0);
                                                     var count = _DataStore_User_Login.getCount();
                                                     var countParse = parseInt(count)
                                                     var DBUserName = '';

                                                     if (store != null) {


                                                         if (countParse >= 1) {
                                                             alert(count);
                                                             DBUserName = store.get('UserName');
                                                             if (UserName == DBUserName) {
                                                                 //  Ext.Msg.alert("UserName already Exist.!!<br>Create Different User Name");
                                                                 CustomeMsgBoxShow("UserName already Exist!");
                                                             } else {
                                                                 InsertGPSuserloginreg(UserName, Password, Version, Status, AccountNos, RegisterBy, UpdateBy,
                                                                                                               LoginIPs, LoginType, Browsers, OSs, EmailReg);
                                                             }





                                                         }

                                                     }
                                                     else {
                                                         Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Name..' });
                                                         var task = Ext.create('Ext.util.DelayedTask', function () {
                                                             _DataStore_CheckUserName.getProxy().setExtraParams({
                                                                 US: UserName,

                                                             });
                                                             _DataStore_CheckUserName.load({
                                                                 callback: function (record, operation, success) {
                                                                     if (success) {
                                                                         var store = _DataStore_CheckUserName.getAt(0);
                                                                         var count = _DataStore_CheckUserName.getCount();
                                                                         var countParse = parseInt(count);
                                                                         var DBUserName = '';
                                                                         if (store != null) {
                                                                             if (countParse >= 1) {

                                                                                 DBUserName = store.get('UserName');
                                                                                 if (UserName == DBUserName) {
                                                                                     CustomeMsgBoxShow("UserName already Exist!");
                                                                                 } else {
                                                                                     InsertGPSuserloginreg(UserName, Password, Version, Status, AccountNos, RegisterBy, UpdateBy,
                                                                                                                                   LoginIPs, LoginType, Browsers, OSs, EmailReg);
                                                                                 }

                                                                             }

                                                                         } else {
                                                                             InsertGPSuserloginreg(UserName, Password, Version, Status, AccountNos, RegisterBy, UpdateBy,
                                                                                                                                  LoginIPs, LoginType, Browsers, OSs, EmailReg);
                                                                         }


                                                                     } else {

                                                                         CustomeMsgBoxShow("Failed.!");
                                                                     }


                                                                 }

                                                             });




                                                             Ext.Viewport.setMasked(false);
                                                         });
                                                         task.delay(1000);

                                                     }

                                                 }
                                                 else {

                                                     //Ext.Msg.alert("Failed.!");
                                                     CustomeMsgBoxShow("Failed.!");
                                                 }



                                             }
                                         })

                                         Ext.Viewport.setMasked(false);





                                     });
                                     task.delay(1000);


                                 }
                             },




                        ]

                    },



          ],

      });




    return _registrationForm;
}



function RegistrationFormShow() {
    Ext.Viewport.remove(_registrationForm);
    this.overlay = Ext.Viewport.add(RegistrationForm());
    this.overlay.show();
}


function RegistrationFormHide() {
    _registrationForm.hide();
}


function contains(r, s) {
    return r.indexOf(s) > -1;
}










function InsertGPSuserloginreg(UserName, Password, Version, Status, AccountNo, RegisterBy, UpdateBy, LoginIP, LoginType, Browser, OS,
    EmailReg) {

    Ext.Ajax.request({

        url: document.location.protocol + '//' + document.location.host + '/API/GPSUser/GPSuserInsert',

        params: {

            UserName: UserName,
            Password: Password,
            Version: Version,
            Status: Status,
            AccountNo: AccountNo,
            RegisterBy: RegisterBy,
            UpdateBy: UpdateBy,
            LoginIP: LoginIP,
            LoginType: LoginType,
            Browser: Browser,
            OS: OS,
            EmailReg: EmailReg


        },
        success: function (result, request) {
            RegistrationFormHide();
            Ext.getCmp('loginuserNameTextField').setValue(UserName);
            Ext.getCmp('loginpasswordTextField').setValue(Password);
            //   Ext.Msg.alert("Please Login.This Is a Temporary Account for demo purpose,your account will be Activated by Administrator after confirmed and signed service contract.<br>Agensi Angkasa Negara-Malaysia.");

            Ext.Msg.show({
                title: 'Registration Success.!',
                message: 'Please Login.<br>This Is a Temporary Account for demo purpose,your account will be Activated by Administrator Onced confirmed by.<br>Agensi Angkasa Negara-Malaysia.',
                width: 250,
                buttons: Ext.MessageBox.OK,

                fn: Ext.emptyFn
            });
            //  console.log(document.location.protocol + '//' + document.location.host + '/TrackingAppAPI/GeoFence/GeofenceInsert')
        },
        failure: function (result, request) {
            //Ext.Msg.alert('Error', request);
            CustomeMsgBoxShow("Error");
        }
    });
}
