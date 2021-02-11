
var UserName;
var LastLoginDate;
Ext.define('ianMizi.view.LoginAyohaUser', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'LoginAyohaUser',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
        scrollable: false,
        //style: "background-color: #157fcc; color:white;",
        //  style: "background-color: white; color:black;",
     //   style: 'background-image: url("resources/icons/latestCmoveloginNochart.png"); background-size: 100% 100%;border-bottom:1px none;background-repeat: no-repeat;',
        style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //style: 'background-image: url("resources/icons/UogradeAutismeIcon/slider-angkasa-default_10.png"); background-size: 100% 100%;border-bottom:1px none;',
        items: [










            {
                xtype: 'container',
                width:'100%',
                //  top:100,
                id: 'containerbglogin',
                //style: 'background-image: url("resources/icons/UogradeAutismeIcon/latestbgs3.png"); background-size: 100% 50%;border-bottom:1px none;background-repeat: no-repeat;',
                //  style: 'background-image: url("resources/icons/countMovementFrontMobileNew.png"); background-size: 100% 80%;border-bottom:1px none;background-repeat: no-repeat;',


                margin: '0 0 0 0',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [

















                    {
                        xtype: 'container',
                        //margin: '-10 0 0 0',
                        //   margin: '210 0 0 0',
                        width: '100%',
                        //docked: 'bottom',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'

                        },


                        items: [



                     //{
                     //    //   xtype: 'panel',
                     //    //  bodyPadding: 10,
                     //    //height: 180,
                     //    //width: 350,

                     //    // margin: '10 0 0 0',

                     //    //   html: '<img src="resources/icons/MostiTrackICon2.png"/>',
                     //    hidden: true,
                     //    html: '<img src="resources/icons/UogradeAutismeIcon/attracklogo1.jpg" width="280" height="160"/>',

                     //    //  html: '<img src="resources/icons/MostiTrackICon2.png" style="max-height:100%; max-width:100%;"/>',


                     //},
                     //{
                     //    xtype: 'spacer',
                     //    width: 10
                     //},




                     {
                         xtype: 'fieldset',
                         //  width: '90%',
                         width: '80%',
                         /// width: 350,
                         //  margin: '-40 0 0 0',
                         title: '<font size=2px color=white>User Login</font>',
                         items: [
                             {
                                 xtype: 'textfield',
                                 //  margin: '-10 0 0 0',
                                 placeHolder: 'Username',
                                 id: 'loginuserNameTextField',
                                 clearIcon: false,
                                 //'inputAttrTpl': ['autocomplete="on"'],
                                 required: true,
                                 //listeners: {
                                 //    focus: function changeType(selectedField) {
                                 //        // HideSignUpPanel();

                                 //    },
                                 //    blur: function deleteFocusListener() {
                                 //        // ShowSignUpPanel();
                                 //    },
                                 //}
                                 //listeners: {
                                 //    keyup: function (txt, newValue, oldValue) {
                                 //        alert("Hi..");
                                 //    },
                                 //    buffer: 2000,
                                 //}
                             },
                             {

                                 xtype: 'passwordfield',
                                 placeHolder: 'Password',
                                 id: 'loginpasswordTextField',
                                 clearIcon: false,
                                 //'inputAttrTpl': ['autocomplete="on"'],
                                 required: true,
                                 //listeners: {
                                 //    focus: function changeType(selectedField) {
                                 //        //HideSignUpPanel();

                                 //    },
                                 //    blur: function deleteFocusListener() {
                                 //       // ShowSignUpPanel();
                                 //    },
                                 //}
                               
                             },






                         ],


                     },




                   {
                       xtype: 'container',
                       //  width: '90%',
                       width: '100%',
                       //  width: 350,
                       //  margin: '10 0 0 0',
                       layout: {
                           // flex: 1,
                           type: 'vbox',
                           // pack: 'center',
                       },

                       items: [



                           {
                               xtype: 'container',
                               hidden:true,
                               layout: {
                                   type: 'hbox',
                                   pack: 'end',
                                   align: 'right'
                               },



                               margin: '-10 0 0 0',
                               items: [

                                   {
                                       margin: '8 -11 0 0',
                                       id: 'rememberMeCheckboxID',

                                       html: '<input type="checkbox" value="remember-me" id="remember_me" disabled="disabled">',
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






                            {
                                xtype: 'container',
                                margin:'-20 0 0 0',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'
                                },
                                items: [
                                    {

                                        xtype: 'button',
                                        //align: 'stretch',
                                        //id: 'loginlogInButton',
                                        ////ui: 'plain',                         
                                        //padding: '10px',
                                        //style: {
                                        //    background: '#D25959',
                                        //},
                                        //text: '<font size=3px color=white><center><b>Log-In</b></center></font>',


                                        id: 'loginlogInButton',
                                        ui: 'plain',
                                        width: 300,
                                        height: 50,
                                        //  width: '80%',
                                        //padding: '10px',
                                        //style: {
                                        //    background: '#FA8072',
                                        //},
                                        //  text: '<font size=3px color=white><center><b>Log-In</b></center></font>',
                                        text: '<button class="button3">Login</button>',
                                        // text: '<button class="button3">Login</button>',
                                        handler: function () {
                                            if (networkState == "none") {
                                                CustomeMsgBoxShow("No Internet Connection!");
                                                return;
                                            } else {
                                                loadAyohaUserProfile();
                                            }
                                           
                                                    
                                             
                                        }





                                    },
                                ]

                            },


                            //{
                            //  //  hidden:true,
                            //    id:'rememberMeCheckboxID',
                            //    html: '<label class="checkbox"><input type="checkbox" value="remember-me" id="remember_me" onclick="handleClick(this);" > Remember me </label>',
                            //    //xtype: 'checkboxfield',
                            //    //height:1,
                            //    ////label: 'Remember Me',
                            //    //id: 'RememberID',
                            //    //checked: false,
                            //    //listeners: {
                            //    //    check: function () {
                            //    //        //do something
                            //    //    },
                            //    //    uncheck: function () {
                            //    //        //do something
                            //    //    }
                            //    //}
                            //},
                           //{
                           //    xtype: 'button',
                           //    //align: 'stretch',
                           //    //align: 'left',
                           //   hidden:true,
                           //    itemId: 'loginForgotPassword',
                           //    ui: 'plain',

                           //    padding: '10px',
                           //    text: '<font size=3px color=black><u><center><b>Forgot Password?</b></center></u></font>',
                           //    handler: function () {

                           //       ForgotPasswordShow();
                           //    },


                           //},

                             {
                                 xtype: 'button',
                                 align: 'stretch',
                                 //align: 'left',


                                 ui: 'plain',

                                 margin: '-3 0 0 0',
                                 html: '<font size=2px color=white><b>Forgot Password?</b></font>',
                                 handler: function () {
                                     socketCon();
                                     //if (networkState == "none") {
                                     //    CustomeMsgBoxShow("No Internet Connection!");
                                     //    return;
                                     //}
                                     //ForgotPasswordShow();

                                 },
                             },
                       ]


                   },








                        ]

                    },


    {
        xtype: 'container',
        docked: 'bottom',
        hidden: true,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center'

        },


        items: [
            {
                xtype: 'button',
                align: 'stretch',
                itemId: 'loginRegButtonxxx',
                //ui: 'action',
                style: {
                    background: '#D25959',
                },
                padding: '10px',
                text: '<font size=3px color=white><center><b>Register</b></center></font>',
                handler: function () {
                    if (networkState == "none") {
                        CustomeMsgBoxShow("No Internet Connection!");
                        return;
                    }
                    RegistrationFormShow();
                },


            },

//            {
//                // html: '<font size=2px color=black><center>MOSTI Social Innovation Program(2016)<br>Initiated By:</center></font>',
//                hidden:true,
//                               html:'<div class="slideshow-container">'+

//'<div class="mySlides fade">'+
//  '<div class="numbertext"><font size=1px color=black><center>MOSTI Social Innovation Program(2016)</center></font></div>' +
//  '<center><img src="resources/icons/UogradeAutismeIcon/Iniatitatednew.png" style="width:150px;height:80px"></center>' +
//  //'<div class="text">Caption Text</div>'+
//'</div>'+

////'<div class="mySlides fade">'+
////  '<div class="numbertext"><font size=2px color=black><center>International Winning Award</center></font></div>' +
////  '<img src="resources/icons/UogradeAutismeIcon/bellAward.png" style="width:150px;height:100px">' +
////  //'<div class="text"><font size=1px color=black><center>Special Prize</center></font></div>' +
////'</div>' +


////'<div class="mySlides fade">' +
////  '<div class="numbertext"><font size=2px color=black><center>International Winning Award</center></font></div>' +
////  '<img src="resources/icons/UogradeAutismeIcon/tempattiga.png" style="width:150px;height:100px">' +
////  //'<div class="text"><font size=1px color=black><center>Special Prize</center></font></div>' +
////'</div>' +

////'<div class="mySlides fade">'+
////'<div class="numbertext"><font size=2px color=black><center>Developed By:</center></font></div>' +
////  '<img src="resources/icons/UogradeAutismeIcon/Intexlatest.png" style="width:100px;height:70px">' +
////  //'<div class="text">Caption Three</div>'+
////'</div>' +

//'<div style="text-align:center">' +
//  '<span class="dot"></span> ' +
//  '<span class="dot"></span> ' +
// ' <span class="dot"></span> ' +
//'</div>'
//            },
            //{
            //    xtype: 'panel',
            //    height:12
            //},
            //{


            //    html: '<img src="resources/icons/UogradeAutismeIcon/MostiAngkasaLogo.png" height="58" width="170"/>',
            //   // html: '<img src="resources/icons/MostiTrackLogo1.png" style="max-height:100%; max-width:100%;"/>',
            //},
              //{
              //    html: '<font size=2px color=white><b>KEMENTERIAN SAINS,TEKNOLOGI DAN INOVASI</b></font>',
              //},
              //{
              //    html: '<font size=1px color=white><i>MINISTRY SCIENCE,TECHNOLOGY AND INNOVATION</i></font>',
              //},
          //  {
          //      xtype: 'spacer',
          //      width: 75
          //  },
          //{

          //},
        ]

    },




     {
         xtype: 'container',
         id: 'containerbottomsignup',
         hidden: true,
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
                 id: 'locationXy',
                 //html: '<font size=2px color=black><center>Dont have an account ?</center></font>',
                 html: '<font size=2px color=black>SMC Status:</font>',
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
                              id: 'loginRegButton',
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

                                  // RegistrationFormShow();
                                  var str = localStorage.getItem('player_id');

                                  //  var str = GetPlayerid();
                                  /// var str = '123';
                                  // console.log(str);
                                  if (networkState == "none") {
                                      CustomeMsgBoxShow("No Internet Connection!");
                                      return;
                                  }


                                  if (str) {
                                      RegistrationFormShow();


                                  } else {
                                      routeCurrPage = '0';
                                      CustomeMsgBoxShow("Please wait Registration Not ready!");
                                  }
                                  //if (str == null) {

                                  //    routeCurrPage = '0';
                                  //    CustomeMsgBoxShow("Please wait Registration Not ready!");

                                  //} else {
                                  //    RegistrationFormShow();
                                  //}



                                  //RegistrationFormShow();
                              },


                          },

                          {
                              id: 'signinguptxt',
                              html: '<font size=2px color=black><center>By signing up you agree to the<br>term and condition of service.</center></font>',

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






function remembermebtnevent() {


    var US = Ext.getCmp('loginuserNameTextField').getValue();
    var PW = Ext.getCmp('loginpasswordTextField').getValue();
    if (document.getElementById('remember_me').checked) {
        document.getElementById('remember_me').checked = false;
        localStorage.setItem("rememberUN", " ");
        localStorage.setItem("rememberPWD", " ");
        localStorage.setItem("IsrememberMe", 'N');
    }
    else {
        document.getElementById('remember_me').checked = true;
        localStorage.setItem("rememberUN", US);
        localStorage.setItem("rememberPWD", PW);
        localStorage.setItem("IsrememberMe", 'Y');
    }


}


function autoRememberme() {
    var US = Ext.getCmp('loginuserNameTextField').getValue();
    var PW = Ext.getCmp('loginpasswordTextField').getValue();
    //var US = 'Mizi';
    //var PW = '123456789';
    localStorage.setItem("rememberUN", US);
    localStorage.setItem("rememberPWD", PW);
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
            //document.getElementById('UN').value = U;
            //document.getElementById('PW').value = P;

            Ext.getCmp('loginuserNameTextField').setValue(U);
            Ext.getCmp('loginpasswordTextField').setValue(P);


            document.getElementById('remember_me').checked = true;
            ShowSignUpPanel();
            //  console.log('Remember');

        } else {

            //document.getElementById('UN').value = ' ';
            //document.getElementById('PW').value = "";

            Ext.getCmp('loginuserNameTextField').setValue('');
            Ext.getCmp('loginpasswordTextField').setValue('');
            document.getElementById('remember_me').checked = false;
            //  console.log('Not Remember');
        }


        document.getElementById("btnrememberme").addEventListener("click", remembermebtnevent);
        Ext.Viewport.setMasked(false);
    });


    task.delay(1000);




}








function loadAyohaUserProfile() {
  


    var UN =Ext.getCmp('loginuserNameTextField').getValue();
    var PWD = Ext.getCmp('loginpasswordTextField').getValue();
    console.log(UN);
    console.log(PWD);
    Ext.getStore('AyohaUserProfileLoginStore').getProxy().setExtraParams({
        UserName: UN,
        KataLaluan: PWD,
        LoginOS: localStorage.getItem('device_platform'),
        LoginIP: localStorage.getItem('device_ip'),
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
    Ext.StoreMgr.get('AyohaUserProfileLoginStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserProfileLoginStore').getProxy().setExtraParams({
            UserName: UN,
            KataLaluan: PWD,
            LoginOS: localStorage.getItem('device_platform'),
            LoginIP: localStorage.getItem('device_ip'),
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
        Ext.StoreMgr.get('AyohaUserProfileLoginStore').load();
        var myStore = Ext.getStore('AyohaUserProfileLoginStore');
        var modelRecord = myStore.getAt(0);
        count = myStore.getCount();
        Ext.getCmp('basicform').getTabBar().hide();

        if (count >= 1) {
            localStorage.setItem('AyohaUserAccountNo', modelRecord.get('AccountNo'));
            localStorage.setItem('AyohaUserKatalaluan', modelRecord.get('Katalaluan'));
            routeCurrPage = '15';
            routesArray.push("mainView,view,15");
            Ext.getCmp('mainView').setActiveItem(15);

            //Ext.getCmp('htmlDashboard_EnterpriseLogo').setHtml('<img src="' + modelRecord.get('EnterpriseLogoPath') + '" style="width: 160px; height: 160px; border:2px solid grey; border-radius: 50%; max-width:250px; " />');
            //Ext.getCmp('htmlDashboard_EnterpriseName').setHtml('<div style="color:white;text-align: center;font-size:14px;width:100%;"><b>' + modelRecord.get('EnterpriseName') + '</b></div>');
            //Ext.getCmp('htmlDashboard_EnterpriseAddress').setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;">' + modelRecord.get('EnterpriseAddress') + '</div>');
            //Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxt').setHtml('<font size=2 color=white><b>' + modelRecord.get('AyohaVersion') + '</b></font>');
            //var AccountName = modelRecord.get('AccountName').substring(0, 7);
            //Ext.getCmp('htmlMyAccount_DashboardHaiUser').setHtml('<font size=2 color=black><b>Hi ' + AccountName.toLowerCase() + '!</b></font>');
            //Ext.getCmp('btnMyAccount_DashboardPicProfile').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 20px 20px 20px 20px;width:33px;height:33px" ><img src="' + modelRecord.get('Photo') + '"      style="width: 30px; height: 30px; border:2px none grey; border-radius: 50%; max-width:32px; margin:-1px 0px 0px 2px"></div>');
            //localStorage.setItem('AyohaVersion', modelRecord.get('AyohaVersion'));


            //
            Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesContactUsLinkStore();
        } else {
            swalFireFail("Login Failed !");
        }
       // LoadingCustomMsgHide();
        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);
}







var slideIndex = 0;
















//function showSlides() {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += " active";
//    setTimeout(showSlides, 2000); // Change image every 2 seconds
//}