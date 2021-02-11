
var UserName;
var LastLoginDate;
var myip = '123';
Ext.define('ianMizi.view.Login', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'Login',
    id: 'xtypeLogin',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
        scrollable: false,
       
        //style: "background-color: #157fcc; color:white;",
        
        //    style: "background-color: #D25959; color:black;",

        //style: 'background-color: transparent',
       // style: 'background-color: red',
        style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       // style: GetCurrentToolbarStyle(),
     //   style: "background-color: #F35B57;",
        items: [

             
        







            {
                xtype: 'container',
              
               
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [



                     //{
                     //    xtype: 'container',

                     //  //  margin: '100 0 0 0',
                     //    layout: {
                     //        type: 'vbox',

                     //        align: 'center'

                     //    },
                     //    items: [

                     //             {
                     //                 //   xtype: 'panel',
                     //                 //  bodyPadding: 10,
                     //                 //height: 180,
                     //                 //width: 350,

                     //                 //  margin: '-50 0 0 0',

                     //                 //   html: '<img src="resources/icons/MostiTrackICon2.png"/>',

                     //                 html: '<img src="resources/icons/CloudReceipt3.png" width="180" height="160"/>',
                     //                 //  html: '<img src="resources/icons/CloudReceipt.png" width="180" height="160"/>',



                     //                 //  html: '<img src="resources/icons/MostiTrackICon2.png" style="max-height:100%; max-width:100%;"/>',


                     //             },
                     //    ]
                     //},





                   





                    
            {
                xtype: 'container',
              
               margin:'-10 0 0 0',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                items: [


                     {
                         //   xtype: 'panel',
                         //  bodyPadding: 10,
                         //height: 180,
                         //width: 350,

                         //  margin: '-50 0 0 0',

                         //   html: '<img src="resources/icons/MostiTrackICon2.png"/>',

                         html: '<img src="resources/icons/CloudRewardLogoWhite.png" width="180" height="180"/>',
                         //  html: '<img src="resources/icons/CloudReceipt.png" width="180" height="160"/>',



                         //  html: '<img src="resources/icons/MostiTrackICon2.png" style="max-height:100%; max-width:100%;"/>',


                     },
                    
                     {
                         id:'loginlblversion',
                         margin: '-30 0 0 0',
                         html: '<font size="2" color="white">v Pro 1.0</font>',
                     },
                      {
                          xtype: 'panel',
                          height: 10
                      },
                    {
                        margin: '0 0 0 -155',
                        html: '<font size=1px color=white><b>USERNAME</b></font>',
                    },

                     {


                         id: 'inputUserNameID',
                     
                         html: '<input name="firstname" id="UN"></input>',

                          
                           
                         

                     },
                     {
                         xtype: 'spacer',
                         height: '6px',
                     },
                      {
                          margin: '0 0 0 -155',
                          html: '<font size=1px color=white><b>PASSWORD</b></font>',
                      },
                        {


                            id: 'inputPwdID',
                          
                            html: '<input type="password" name="lastname" id="PW"></input>',


                        },
                         {
                             xtype: 'container',
                             layout: {
                                 type: 'hbox',
                                pack: 'end',
                                 align: 'right'
                             },
                             
        
         
                             margin:'2 0 0 0',
                             items: [

                                 {
                                     margin:'8 -8 0 0',
                                     id: 'rememberMeCheckboxID',
                                 
                                     html: '<input type="checkbox" value="remember-me" id="remember_me">',
                                 },
                                 {
                                     margin: '0 0 2 -90',
                                     id: 'rememberMeFontID',
                                     html: '<button style="background-color: Transparent;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;color:white;" id="btnrememberme" ">Remember Me?</button>'
                                  //   html: '<font size="2px" color="white">Remember Me?</font>',
                                 }
                             ]
                           
                             //id: 'rememberMeCheckboxID',
                             //html: '<input type="checkbox" value="remember-me" id="remember_me" onclick="handleClick(this);" >RememberMe',
                          
                         },


                                     //////{
                                     //////    xtype: 'button',
                                     //////    align: 'stretch',
                                     //////    //align: 'left',
                              
                             
                                     //////    ui: 'plain',

                                     //////    margin: '0 0 0 125',
                                     //////    html: '<font size=1px color=white><b>Forgot Password?</b></font>',
                                     //////    handler: function () {
                                     //////        ForgotPasswordPanelShow();
                                     //////        //  ForgotPasswordShow();
                                     //////    },
                                     //////},

                         //{
                         //    margin: '0 0 0 125',
                         //    html: '<font size=1px color=white><b>Forgot Password?</b></font>',
                         //},

                ]

            },

             //{
             //    xtype: 'container',
             //    width: '100%',
             //    height:1,
             //},



              {
                  xtype: 'container',
                  //width: '100%',
                  margin:'-5 0 0 0',
                  layout: {
                      type: 'vbox',
                      //pack: 'center',
                      align: 'center'

                  },
                  items: [

                      {

                          xtype: 'button',
                        
                          id: 'loginlogInButton',
                          ui: 'plain',
                          width: 300,
                          height:50,
                          //  width: '80%',
                          //padding: '10px',
                          //style: {
                          //    background: '#FA8072',
                          //},
                          //  text: '<font size=3px color=white><center><b>Log-In</b></center></font>',
                          text: '<button class="button4">Login</button>',
                          handler: function () {


                              //notificationReceivednOpensetMykad();


                            

                              if (networkState == "none") {
                                  LoadingCustomMsgShow('No Internet Connection!', '2');
                                  return;
                              } else {



                                  LoadingCustomMsgShow('Login...', '4');
                               //  loadUserAccount();
                                loadUserAccountLatest();
                               
                                 


                              }




                              //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
                              //var task = Ext.create('Ext.util.DelayedTask', function () {
                              //    _DataStore_User_Login.getProxy().setExtraParams({
                              //        US: Ext.getCmp('loginuserNameTextField').getValue(),
                              //        PW: Ext.getCmp('loginpasswordTextField').getValue(),
                              //        PLYR: Ext.browser.name,
                              //        SISOP: detectOs(),
                              //        //IP: myip,
                              //        IPADD: 'MostiTrack',
                              //    });

                              //    //  _DataStore_GPSUserLogin.getProxy().setUrl(document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserLoginR');

                              //    _DataStore_User_Login.load({

                              //        callback: function (record, operation, success) {


                              //            if (success) {
                              //                var store = _DataStore_User_Login.getAt(0);


                              //                if (store != null) {



                              //                    Ext.getCmp('mainView').setActiveItem(1);
                              //                    AAccountNo = GetCurrentUserAccountNo();

                              //                    _IsSuccessLogin = true;
                              //                    //  Ext.Msg.alert("Login Success..!");

                              //                    appPage = 'MainMenu';
                              //                    UserName = Ext.getCmp('loginuserNameTextField').getValue();
                              //                    LastLoginDate = store.get('LastLoginDate');
                              //                    var imgTrackingID = store.get('LoginIP'); LoadKidImage(imgTrackingID);
                              //                    CheckHeigtWidthMainMenu();
                              //                    //alert(imgTrackingID);
                              //                    CustomeMsgBoxShow("Success Login !!");
                              //                    //startChangeBackground('start');
                              //                    //CheckHeigtWidthMainMenu();
                              //                    //  Ext.getCmp('MainMenuUserLabelUpgrade1').setHtml('<font size="3" color="white">Welcome!<br>' + UserName + '</font>');


                              //                } else {
                              //                    // Ext.Msg.alert("Failed.!");
                              //                    CustomeMsgBoxShow("Failed !!");
                              //                    _IsSuccessLogin = false;
                              //                }
                              //            }
                              //            else {

                              //                CustomeMsgBoxShow("Failed !!");
                              //                _IsSuccessLogin = false;
                              //            }



                              //        }
                              //    })

                              //    Ext.Viewport.setMasked(false);
                              //});
                              //task.delay(1000);

                          }





                      },

                         //{
                         //    xtype: 'container',
                         //    width: '100%',
                         //    height: 100,
                         //},

                         
                            {
                                         xtype: 'button',
                                         align: 'stretch',
                                         //align: 'left',


                                         ui: 'plain',

                                         margin: '-3 0 0 0',
                                         html: '<font size=2px color=white><b>Forgot Password?</b></font>',
                                         handler: function () {
                                             ForgotPasswordPanelShow();
                                             //  ForgotPasswordShow();
                                         },
                                     },
                         

                         

                  ]

              },


 




    {
        xtype: 'container',
        id:'containerbottomsignup',
        //hidden:true,
        style: "background-color: transparent",
        //style: "background-color: #F35B57;",
        docked: 'bottom',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'

        },


        items: [

            {

                html: '<font size=2px color=white><center>Dont have an account ?</center></font>',
                //xtype: 'button',
                //align: 'stretch',
                ////align: 'left',


                //ui: 'plain',

                //margin: '0 0 0 125',
                //html: '<font size=1px color=white><b>Forgot Password?</b></font>',
                //handler: function () {
                //   // ForgotPasswordPanelShow();
                //    //  ForgotPasswordShow();
                //},
            },
                         {
                             xtype: 'button',
                             //  align: 'stretch',
                             itemId: 'loginRegButton',
                             ui: 'plain',
                             width: 300,
                             height: 50,
                             margin: '-5 0 0 0',
                             // width: '80%',
                             //style: {
                             //    background: '#FA8072',
                             //},
                             // padding: '10px',
                             //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                             text: '<button class="button3">Sign Up</button>',

                             handler: function () {
                                 focusblurevent();
                                 if (networkState == "none") {
                                     LoadingCustomMsgShow('No Internet Connection!', '2');
                                     return;
                                 }

                               //  var str = localStorage.getItem('player_id');
                                 var str = '123';

                                 if (str == null) {
                                    
                                     routeCurrPage = '0';
                                     LoadingCustomMsgShow('Please wait Registration Not ready!', '2')

                                 } else {
                                     FloatPanel_AyohaUserRegistrationAddNewShow();
                                     //ResetRegistrationForm();
                                     //routeCurrPage = '3';
                                     //routesArray.push("mainView,view,3");
                                     //Ext.getCmp('mainView').setActiveItem(3);
                                 }



                                 //RegistrationFormShow();
                             },


                         },

                         {

                             html: '<font size=2px color=white><center>By signing up you agree to the<br>term and condition of service</center></font>',

                         },
           
        ]

    },

















                ]
            },






        ]
    },
    initialize: function () {
     
        routesArray.push("mainView,view,0");
       
    }
});




function enablefocuslogin() {
 
    document.getElementById("UN").addEventListener("focus", hideSignUppanel);
    document.getElementById("PW").addEventListener("focus", hideSignUppanel);
    document.getElementById("UN").addEventListener("blur", showSignUppanel);
    document.getElementById("PW").addEventListener("blur", showSignUppanel);
    document.getElementById("btnrememberme").addEventListener("click", remembermebtnevent);
    document.getElementById("NotificationmonthID").addEventListener("change", notificationdateonchange);

    
}

function remembermebtnevent() {
    //alert('xxxxsdfdsf');


    if (document.getElementById('remember_me').checked)
    {
        document.getElementById('remember_me').checked = false;
        localStorage.setItem("rememberUN"," ");
        localStorage.setItem("rememberPWD", " ");
        localStorage.setItem("IsrememberMe", 'N');
    }
    else {
        document.getElementById('remember_me').checked = true;      
        localStorage.setItem("rememberUN", document.getElementById('UN').value);
        localStorage.setItem("rememberPWD", document.getElementById('PW').value);
        localStorage.setItem("IsrememberMe",'Y');
    }


}


function hideSignUppanel() {
    
    Ext.getCmp('containerbottomsignup').setHidden(true);
}

function showSignUppanel() {
    Ext.getCmp('containerbottomsignup').setHidden(false);
}

function detectOs() {
    var OS;
    if (Ext.os.is('Android')) {

        OS = 'Andriod';


    } else
        if (Ext.os.is('Windows')) {
            OS = 'Windows';
        }
        else
            if (Ext.os.is('iOS')) {
                OS = 'iOS';
            }
            else
                if (Ext.os.is('iPad')) {
                    OS = 'iPad';
                }
                else
                    if (Ext.os.is('iPhone')) {
                        OS = 'iPhone';
                    }
                    else
                        if (Ext.os.is('iPod')) {
                            OS = 'iPod';
                        }
                        else
                            if (Ext.os.is('WebOS')) {
                                OS = 'WebOS';
                            }
                            else
                                if (Ext.os.is('Bada')) {
                                    OS = 'BlackBerry';
                                }
                                else
                                    if (Ext.os.is('MacOS')) {
                                        OS = 'MacOS';
                                    }
                                    else
                                        if (Ext.os.is('RIMTablet')) {
                                            OS = 'RIMTablet';
                                        }
                                        else
                                            if (Ext.os.is('Linux')) {
                                                OS = 'Linux';
                                            } else (OS = 'other')

    return OS;

}


function setUserName(UserName) {

    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
    var task = Ext.create('Ext.util.DelayedTask', function () {





        Ext.Viewport.setMasked(false);
    });


    task.delay(1000);
}



function displayRememberMe() {

    var Us = Ext.getCmp('loginuserNameTextField').getValue();
    var Pw = Ext.getCmp('loginpasswordTextField').getValue();
    var Isremember = 'false';
    if (msg == true) {
        Isremember = 'true';
        localStorage.setItem("User", Us);
        localStorage.setItem("Pwd", Pw);
        localStorage.setItem("Remember", Isremember);
    } else {

        Isremember = 'false';
        localStorage.removeItem("User");
        localStorage.removeItem("Pwd");
        localStorage.setItem("Remember", Isremember);
    }

}
function loadRememberMe() {
    var U = localStorage.getItem("rememberUN");
    var P = localStorage.getItem("rememberPWD");
    var R = localStorage.getItem("IsrememberMe");
    //console.log("loadRememberMe:" + R);
  // alert("rememberUN:" + U);

  //  Ext.Viewport.mask({ xtype: 'loadmask', message: 'preparing....' });
    var task = Ext.create('Ext.util.DelayedTask', function () {

        if (R == 'Y') {
            document.getElementById('UN').value = U;
            document.getElementById('PW').value = P;
            document.getElementById('remember_me').checked = true;
          //  console.log('Remember');
         
        } else {
           
            document.getElementById('UN').value = ' ';
            document.getElementById('PW').value = "";
            document.getElementById('remember_me').checked = false;
          //  console.log('Not Remember');
        }



        Ext.Viewport.setMasked(false);
    });


    task.delay(1000);




}



function loadAyohaEnterpriseUser() {
    var count = 0;
    var UN = document.getElementById('UN').value; 
    var PWD = document.getElementById('PW').value; 
    Ext.getStore('AyohaEnterpriseUserLoginStore').getProxy().setExtraParams({
    UseName: UN,
    Password: PWD,
    LoginOS:localStorage.getItem('device_platform'),
    LoginIP: localStorage.getItem('device_ip') + myip,
    PhoneModel:localStorage.getItem('device_model'),
    PhoneImeiNo: localStorage.getItem('device_uuid'),
    PhoneVersion: localStorage.getItem('device_version'),
    PhonePlatform: localStorage.getItem('device_platform'),
    PhonePlatformVersion: localStorage.getItem('device_version'),
    PhoneManufacturer: localStorage.getItem('device_manufacturer'),
    PhoneSerial: localStorage.getItem('device_serial'),
    RawPhoneInfo: localStorage.getItem('SimInfo'),
    PlayerID: localStorage.getItem('player_id'),
 });
    Ext.StoreMgr.get('AyohaEnterpriseUserLoginStore').load();
    // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Name' });
 var task = Ext.create('Ext.util.DelayedTask', function () {
     Ext.getStore('AyohaEnterpriseUserLoginStore').getProxy().setExtraParams({
         UseName: UN,
         Password: PWD,
         LoginOS: localStorage.getItem('device_platform'),
         LoginIP: localStorage.getItem('device_ip') + myip,
         PhoneModel: localStorage.getItem('device_model'),
         PhoneImeiNo: localStorage.getItem('device_uuid'),
         PhoneVersion: localStorage.getItem('device_version'),
         PhonePlatform: localStorage.getItem('device_platform'),
         PhonePlatformVersion: localStorage.getItem('device_version'),
         PhoneManufacturer: localStorage.getItem('device_manufacturer'),
         PhoneSerial: localStorage.getItem('device_serial'),
         RawPhoneInfo: localStorage.getItem('SimInfo'),
         PlayerID: localStorage.getItem('player_id'),
     });
     Ext.StoreMgr.get('AyohaEnterpriseUserLoginStore').load();
     var myStore = Ext.getStore('AyohaEnterpriseUserLoginStore');
     var modelRecord = myStore.getAt(0);
     count = myStore.getCount();

     
 
     
     Ext.getCmp('basicform').getTabBar().hide();
     
     if (count >= 1)
     {
         LoadingCustomMsgHide();
       
       



         var UseName = modelRecord.get('UseName');
         var Password = modelRecord.get('Password');
         var LastLoginDate = modelRecord.get('LastLoginDate');

         var AccountName = modelRecord.get('AccountName');
         var PhoneNumber = modelRecord.get('PhoneNumber');
         var Photo = modelRecord.get('Photo');

         var Email = modelRecord.get('Email');
         var MyKadNo = modelRecord.get('MyKadNo');
         var AyohaEnterpriseUserID = modelRecord.get('AyohaEnterpriseUserID');
         var AccountNo = modelRecord.get('AccountNo'); localStorage.setItem('CurrentUserAccountNo', modelRecord.get('AccountNo'));
         var RegisterDate = modelRecord.get('RegisterDate');
        /////-------Enterprise Section/////
         var ID = modelRecord.get('ID');
         var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo'); localStorage.setItem('EnterpriseAccNo', modelRecord.get('EnterpriseAccNo'));
         var EnterpriseName = modelRecord.get('EnterpriseName');
         var EnterpriseAddress = modelRecord.get('EnterpriseAddress');
         var EnterpriseRegistrationNo = modelRecord.get('EnterpriseRegistrationNo');
         var EnterpriseGSTNo = modelRecord.get('EnterpriseGSTNo');
         var EnterpriseEmail = modelRecord.get('EnterpriseEmail');
         var EnterprisePhoneNo = modelRecord.get('EnterprisePhoneNo');
         var EnterpriseFaxNo = modelRecord.get('EnterpriseFaxNo');
         var EnterpriseLogo = modelRecord.get('EnterpriseLogo');
         var EnterpriseLogo64 = modelRecord.get('EnterpriseLogo64');
         var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
         var RowStatus = modelRecord.get('RowStatus');
         var CreatedDate = modelRecord.get('CreatedDate');
         var CreatedBy = modelRecord.get('CreatedBy');
         var ModifiedDate = modelRecord.get('ModifiedDate');
         var ModifiedBy = modelRecord.get('ModifiedBy');
         var Status = modelRecord.get('Status');
         var EnterpriseTaxNo = modelRecord.get('EnterpriseTaxNo');
         var isTaxApplied = modelRecord.get('isTaxApplied');
         var TaxRate = modelRecord.get('TaxRate');
         var EnterpriseDescriptions = modelRecord.get('EnterpriseDescriptions');
         var EnterpriseFacebook = modelRecord.get('EnterpriseFacebook');
         var EnterpriseTwiter = modelRecord.get('EnterpriseTwiter');
         var EnterpriseInstagram = modelRecord.get('EnterpriseInstagram');
         var EnterpriseCoordinate = modelRecord.get('EnterpriseCoordinate');
         var LoyaltyCardType = modelRecord.get('LoyaltyCardType');













         //Ext.getCmp('Pictureprofile').setSrc('resources/icons/CloudReceipt4.png');

         //if (CR_Photo) {
         // //   Ext.getCmp('Pictureprofile').setSrc(CR_Photo);
         //    localStorage.setItem('CurrPictureProfile', CR_Photo);
         //}
      
         //localStorage.setItem('CurrAccountID', CR_ID);
         //localStorage.setItem('CurrMykadNo', CR_MykadNo);
         //localStorage.setItem('CurrAccountNo', CR_AccountNo);
         //localStorage.setItem('CurrAccountName', CR_AccountName);

         //localStorage.setItem('CurrUserName', CR_UseName);
         //localStorage.setItem('CurrPassword', CR_Password);
         //localStorage.setItem('CurrEmail', CR_Email);
         //localStorage.setItem('CurrPhoneNumber', CR_PhoneNumber);


         //localStorage.setItem('CurrRegisterDate', CR_RegisterDate);
         //localStorage.setItem('CurrAccountStatus', CR_Status);
         //localStorage.setItem('CurrLastLoginDate', CR_LastLoginDate);
         //localStorage.setItem('CurrLoginIP', CR_LoginIP);
         //localStorage.setItem('CurrVersion', CR_Version);
         //localStorage.setItem('CurrDayLeft', DayLeft);

         routeCurrPage = '4';
         setMyAccountInfo();
         routesArray.push("mainView,view,4");
         routesArray.push("basicform,tab,0");
         Ext.getCmp('mainView').setActiveItem(4);


         routeCurrPage = '15';
         setMyAccountInfo();
         routesArray.push("mainView,view,15");
         // routesArray.push("basicform,tab,0");
         Ext.getCmp('mainView').setActiveItem(15);
       







         //var month = GetCurrentMonth();
         //var day = GetCurrentDay();
         //var year = GetCurrentYear();
       
       //  //setDayLeftlabel();
       //  setTheme();
       ////  obj.f();

       // // objs.fs();
       ////  summaryreceiptlistbackgroundcolor();
       //  //dekat NotificationSummary class
       //  countNotificationNNtypeAndRType();
        
       
     }else
     {
         LoadingCustomMsgShow('Login Failed!', '2');
     }
    
     //var CR_ID = modelRecord.get('ID');
     //Ext.getCmp('CR_VerificationCodeString').setValue(VerifyString);
     //Ext.getCmp('CR_ID').setValue(CR_ID);
     //var PhoneNo = Ext.getCmp('CR_PhoneNumber').getValue();
     //sendSMSverifycode(PhoneNo, VerifyString)
     setIsRememberMeValue();
 });
 task.delay(2000);
}








function setIsRememberMeValue() {
    if (document.getElementById('remember_me').checked) {
        localStorage.setItem("rememberUN", document.getElementById('UN').value);
        localStorage.setItem("rememberPWD", document.getElementById('PW').value);
        localStorage.setItem("IsrememberMe", 'Y');
    }
    else {
        localStorage.setItem("rememberUN", " ");
        localStorage.setItem("rememberPWD", " ");
        localStorage.setItem("IsrememberMe", 'N');
    }
}






function loadUserAccount() {
    var count = 0;
    var UN = document.getElementById('UN').value;
    var PWD = document.getElementById('PW').value;

    localStorage.setItem('CurrentUserLogin',UN);


    Ext.getStore('CR_MobileUserLoadUser').getProxy().setExtraParams({
        UN: UN,
        PWD: PWD,
        LoginIP: localStorage.getItem('device_ip') + myip,
        PhoneModel: localStorage.getItem('device_model'),
        PhoneUniqueID: localStorage.getItem('device_uuid'),
        PhonePlatform: localStorage.getItem('device_platform'),
        PhonePlatformVersion: localStorage.getItem('device_version'),
        PhoneManufacturer: localStorage.getItem('device_manufacturer'),
        PhoneSerialNo: localStorage.getItem('device_serial'),
        PhoneRawInfo: localStorage.getItem('SimInfo'),
        CRPlayerID: localStorage.getItem('player_id')
    });
    Ext.StoreMgr.get('CR_MobileUserLoadUser').load();
    // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Name' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('CR_MobileUserLoadUser').getProxy().setExtraParams({
            UN: UN,
            PWD: PWD,
            LoginIP: localStorage.getItem('device_ip') + myip,
            PhoneModel: localStorage.getItem('device_model'),
            PhoneUniqueID: localStorage.getItem('device_uuid'),
            PhonePlatform: localStorage.getItem('device_platform'),
            PhonePlatformVersion: localStorage.getItem('device_version'),
            PhoneManufacturer: localStorage.getItem('device_manufacturer'),
            PhoneSerialNo: localStorage.getItem('device_serial'),
            PhoneRawInfo: localStorage.getItem('SimInfo'),
            CRPlayerID: localStorage.getItem('player_id')
        });
        Ext.StoreMgr.get('CR_MobileUserLoadUser').load();
        var myStore = Ext.getStore('CR_MobileUserLoadUser');
        var modelRecord = myStore.getAt(0);
        count = myStore.getCount();




        Ext.getCmp('basicform').getTabBar().hide();

        if (count >= 1) {
            LoadingCustomMsgHide();

            var CR_ID = modelRecord.get('ID');
            var CR_MykadNo = modelRecord.get('CR_MykadNo');
            var CR_AccountNo = modelRecord.get('CR_AccountNo');
            var CR_AccountName = modelRecord.get('CR_AccountName');



            var CR_UseName = modelRecord.get('CR_UseName');
            var CR_Password = modelRecord.get('CR_Password');
            var CR_Email = modelRecord.get('CR_Email');

            var CR_PhoneNumber = modelRecord.get('CR_PhoneNumber');
            var CR_RegisterDate = modelRecord.get('CR_RegisterDate');
            var CR_Status = modelRecord.get('CR_Status');

            var CR_LastLoginDate = modelRecord.get('CR_LastLoginDate');
            var CR_LoginIP = modelRecord.get('CR_LoginIP');
            var CR_Version = modelRecord.get('CR_Version');
            var CR_Photo = modelRecord.get('CR_Photo');
            var DayLeft = modelRecord.get('DayLeft');


            Ext.getCmp('Pictureprofile').setSrc('resources/icons/CloudReceipt4.png');

            if (CR_Photo) {
                Ext.getCmp('Pictureprofile').setSrc(CR_Photo);
                localStorage.setItem('CurrPictureProfile', CR_Photo);
            }

            localStorage.setItem('CurrAccountID', CR_ID);
            localStorage.setItem('CurrMykadNo', CR_MykadNo);
            localStorage.setItem('CurrAccountNo', CR_AccountNo);
            localStorage.setItem('CurrAccountName', CR_AccountName);

            localStorage.setItem('CurrUserName', CR_UseName);
            localStorage.setItem('CurrPassword', CR_Password);
            localStorage.setItem('CurrEmail', CR_Email);
            localStorage.setItem('CurrPhoneNumber', CR_PhoneNumber);


            localStorage.setItem('CurrRegisterDate', CR_RegisterDate);
            localStorage.setItem('CurrAccountStatus', CR_Status);
            localStorage.setItem('CurrLastLoginDate', CR_LastLoginDate);
            localStorage.setItem('CurrLoginIP', CR_LoginIP);
            localStorage.setItem('CurrVersion', CR_Version);
            localStorage.setItem('CurrDayLeft', DayLeft);










            var month = GetCurrentMonth();
            var day = GetCurrentDay();
            var year = GetCurrentYear();


            console.log(CR_Status)

            if (CR_Status == "Verified") {
                routeCurrPage = '1';
                routesArray.push("mainView,view,1");
                Ext.getCmp('mainView').setActiveItem(1);
                LoadingPanelShow();
                Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
                Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                loadSummaryReceipt(CR_MykadNo, "2", CR_AccountNo, "Status");
            } else if (CR_Status == "NotVerified") {
               // routeCurrPage = '4';
               // setMyAccountInfo();
               // routesArray.push("mainView,view,4");
               // routesArray.push("basicform,tab,0");
               //Ext.getCmp('mainView').setActiveItem(4);


                routeCurrPage = '15';
               // setMyAccountInfo();
                routesArray.push("mainView,view,15");
                // routesArray.push("basicform,tab,0");
                Ext.getCmp('mainView').setActiveItem(15);



            }
            // dekat FilterReceipt Class
            //setDayLeftlabel();
            setTheme();
            //  obj.f();

            // objs.fs();
            //  summaryreceiptlistbackgroundcolor();
            //dekat NotificationSummary class
            //  countNotificationNNtypeAndRType();
            Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesContactUsLinkStore();


        } else {
            LoadingCustomMsgShow('Login Failed!', '2');
        }

        //var CR_ID = modelRecord.get('ID');
        //Ext.getCmp('CR_VerificationCodeString').setValue(VerifyString);
        //Ext.getCmp('CR_ID').setValue(CR_ID);
        //var PhoneNo = Ext.getCmp('CR_PhoneNumber').getValue();
        //sendSMSverifycode(PhoneNo, VerifyString)
        setIsRememberMeValue();
    });
    task.delay(2000);
}


function loadUserAccountLatest() {
    var UN = document.getElementById('UN').value;
    var PWD = document.getElementById('PW').value;
    console.log(UN);
    console.log(PWD);
    Ext.getStore('AyohaEnterprisesUserLoginStore').getProxy().setExtraParams({
        UseName: UN,
        Password: PWD,
        LoginOS: localStorage.getItem('device_platform'),
        LoginIP: localStorage.getItem('device_ip') + myip,
        PhoneModel: localStorage.getItem('device_model'),
        PhoneImeiNo: localStorage.getItem('device_uuid'),
        PhoneVersion: localStorage.getItem('device_version'),
        PhonePlatform: localStorage.getItem('device_platform'),
        PhonePlatformVersion: localStorage.getItem('device_version'),
        PhoneManufacturer: localStorage.getItem('device_manufacturer'),
        PhoneSerial: GetCurrentdeviceserial(),
        RawPhoneInfo: localStorage.getItem('SimInfo'),
        PlayerID: localStorage.getItem('player_id'),

    });
    Ext.StoreMgr.get('AyohaEnterprisesUserLoginStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaEnterprisesUserLoginStore').getProxy().setExtraParams({
            UseName: UN,
            Password: PWD,
            LoginOS: localStorage.getItem('device_platform'),
            LoginIP: localStorage.getItem('device_ip') + myip,
            PhoneModel: localStorage.getItem('device_model'),
            PhoneImeiNo: localStorage.getItem('device_uuid'),
            PhoneVersion: localStorage.getItem('device_version'),
            PhonePlatform: localStorage.getItem('device_platform'),
            PhonePlatformVersion: localStorage.getItem('device_version'),
            PhoneManufacturer: localStorage.getItem('device_manufacturer'),
            PhoneSerial: GetCurrentdeviceserial(),
            RawPhoneInfo: localStorage.getItem('SimInfo'),
            PlayerID: localStorage.getItem('player_id'),
        });
        Ext.StoreMgr.get('AyohaEnterprisesUserLoginStore').load();
        var myStore = Ext.getStore('AyohaEnterprisesUserLoginStore');
        var modelRecord = myStore.getAt(0);
        count = myStore.getCount();
        Ext.getCmp('basicform').getTabBar().hide();

        if (count >= 1) {
            localStorage.setItem('EnterpriseHQAccNo', modelRecord.get('EnterpriseHQAccNo'));
            localStorage.setItem('EnterpriseAccNo', modelRecord.get('EnterpriseAccNo'));
            routeCurrPage = '15';
            routesArray.push("mainView,view,15");
            Ext.getCmp('mainView').setActiveItem(15);

            Ext.getCmp('htmlDashboard_EnterpriseLogo').setHtml('<img src="' + modelRecord.get('EnterpriseLogoPath') + '" style="width: 160px; height: 160px; border:2px solid grey; border-radius: 50%; max-width:250px; " />');
            Ext.getCmp('htmlDashboard_EnterpriseName').setHtml('<div style="color:white;text-align: center;font-size:14px;width:100%;"><b>'+modelRecord.get('EnterpriseName')+'</b></div>');
            Ext.getCmp('htmlDashboard_EnterpriseAddress').setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;">' + modelRecord.get('EnterpriseAddress') + '</div>');
            Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + modelRecord.get('AyohaVersion') + '</b></font>');
            var AccountName= modelRecord.get('AccountName').substring(0, 7);
            Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi '+AccountName.toLowerCase()+'!</b></font>');
            Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
            localStorage.setItem('AyohaVersion', modelRecord.get('AyohaVersion'));
            localStorage.setItem('AyohaEnterpriseUserAccountNo', modelRecord.get('AccountNo'))
           
            //
            Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesContactUsLinkStore();
        } else {
            swalFireFail("Login Failed !");
        }
        LoadingCustomMsgHide();
        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);
}

