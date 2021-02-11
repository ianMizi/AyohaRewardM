Ext.define('ianMizi.view.FloatPanel.ForgotPasswordPanel', {
});









var _ForgotPasswordPanel;

function ForgotPasswordPanel() {
    _ForgotPasswordPanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 250,
          width: 200,
          id: 'ForgotPasswordPanelID',
          draggable: false,



          centered: true,
          //bottom: 64,
          zIndex: 40,
          modal: true,
          hideOnMaskTap: true,
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
              duration: 250,
              easing: 'ease-out'
          },
          style: 'border-bottom:0px solid;background-color:white;',
          items: {




              //  margin:'-50 0 0 0',
              //height: 150,
              //width: 200,
              xtype: 'container',
           //   style: 'border-bottom:0px solid;background-color:#353839;',

              layout: {
                  type: 'vbox',
                  pack: 'center',
                  align:'center'

              },

              items: [
                  {
                      //   xtype: 'panel',
                      //  bodyPadding: 10,
                      //height: 180,
                      //width: 350,

                        margin: '-8 0 0 0',

                      //   html: '<img src="resources/icons/MostiTrackICon2.png"/>',

                        html: '<a href="mailto:Support@Cloud-Receipts.com?subject=Forgot My Password&body=Hi,I would like to request new password.<br><br>Cloud-Receipts.com Reference ID:' + localStorage.getItem('device_serial') + 'TQ"><img src="resources/icons/crSupport.png" width="75" height="75"/></a>',
                      //  html: '<img src="resources/icons/CloudReceipt.png" width="180" height="160"/>',



                      //  html: '<img src="resources/icons/MostiTrackICon2.png" style="max-height:100%; max-width:100%;"/>',


                  },
                  {
                      xtype: 'panel',
                      height: 10
                  },
                     {
                         xtype: 'label',
                         // align: 'stretch',
                         //align: 'left',
                         labelWrap: true,
                         id: 'txtForgotPasswordPanel',
                         // ui: 'plain',
                         margin: '-5 0 0 0',
                         //  padding: '5px',
                         html: '<font size="2" color="black"><center><b>Forgot Password?<br></b></center></font>',


                     },
                     {
                         xtype: 'label',
                         // align: 'stretch',
                         //align: 'left',
                         labelWrap: true,
                         id: 'txtForgotPasswordPanelsub',
                         // ui: 'plain',
                         margin: '0 0 0 0',
                         //  padding: '5px',
                         html: '<font size="1" color="black"><center>Upon email verified,a generated password will be send to your email</center></font>',


                     },
                  //{
                  //    xtype: 'button',
                  //    align: 'stretch',
                  //    //align: 'left',

                  //    id: 'txtreg',
                  //    ui: 'plain',

                  //    //  padding: '5px',
                  //    text: '<font size=3px color=white><u><center><b>Verification Code</b></center></u></font>',
                  //    handler: function () {


                  //    },


                  //},
                  {
                      xtype: 'panel',
                      height:35
                  },
               {

                   //xtype: 'textfield',
               
                   //id: 'CR_EmailForgotPasswordPanel',
                   //required: true,
                   //labelWrap: true,
                   //disabled: false,

                   //   placeHolder: 'Enter Email'
                   html: '<input type="text" id="input-ForgetPassword" placeholder="Enter email" style="border-color:red;color:black;width:170px;text-align: center">'

               },


                 {
                     xtype: 'button',
                     align: 'stretch',
                     //align: 'left',

                     id: 'btnForgotPasswordPanelSendEmail',
                     ui: 'decline',
                     margin: '5 0 0 0',
                     padding: '7px',
                     text: '<font size=3px color=white><center><b>Send Password</b></center></font>',
                     handler: function () {

                         checkEmailisExist();
                     },


                 },







              ]




          }







      });
    return _ForgotPasswordPanel;
}



function ForgotPasswordPanelHide() {
    _ForgotPasswordPanel.hide();
    routeForgotPasswordIsOpen = 'N';
}



function ForgotPasswordPanelShow() {
    Ext.Viewport.remove(_ForgotPasswordPanel);
    this.overlay = Ext.Viewport.add(ForgotPasswordPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeForgotPasswordIsOpen = 'Y';

}





function checkEmailisExist() {
    Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore').getProxy().setExtraParams({
        EmailID: document.getElementById('input-ForgetPassword').value,
    });
    Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationEmailIDStore').load();
    LoadingCustomMsgShow('Processing...', '4')
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'checkEmailID..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore').getProxy().setExtraParams({
            EmailID: document.getElementById('input-ForgetPassword').value,
        });
        Ext.StoreMgr.get('CR_MobileUserVerifyRegistrationEmailIDStore').load();
        var myStore = Ext.getStore('CR_MobileUserVerifyRegistrationEmailIDStore');
        var count = myStore.getCount();
     
        if (count >= 1) {
            getRegeneratedPwd();
        } else {
            LoadingCustomMsgShow('Email Not Registered!', '2')
           // LoadingCustomMsgHide();
        }
        ForgotPasswordPanelHide();
        Ext.Viewport.setMasked(false);
    });
    task.delay(2000);
}




function getRegeneratedPwd() {
    var regenPWD = makeid();
    Ext.getStore('CR_MobileUserGetRegeneratedPwd').getProxy().setExtraParams({
        Email: document.getElementById('input-ForgetPassword').value,
        GenID: regenPWD
    });
    Ext.StoreMgr.get('CR_MobileUserGetRegeneratedPwd').load();
   
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Retrieve..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('CR_MobileUserGetRegeneratedPwd').getProxy().setExtraParams({
            Email: document.getElementById('input-ForgetPassword').value,
            GenID: regenPWD
        });
        Ext.StoreMgr.get('CR_MobileUserGetRegeneratedPwd').load();
        var myStore = Ext.getStore('CR_MobileUserGetRegeneratedPwd');
        var modelRecord = myStore.getAt(0);
        var Email = document.getElementById('input-ForgetPassword').value;
        var CR_Password = modelRecord.get('CR_Password');

        console.log("CR_Password:" + CR_Password);
       sendEmail(Email, CR_Password);
        Ext.Viewport.setMasked(false);
    });
    task.delay(2000);
}


function sendEmail(Email, Pwd) {
    console.log("sendEmail:" + Pwd);
    Ext.Ajax.request({

        url: GetAPIurl() + '/Email/SendEmailForgotPassword',

        params: {
            NewPWD:Pwd,
            Email: Email,
            


        },
        success: function (result, request) {
            LoadingCustomMsgShow('Email Sent!', '3');


        },
        failure: function (result, request) {
            LoadingCustomMsgHide();
            Ext.Msg.alert('Error', request);
            //  CustomeMsgBoxShow("Error");

        }
    });
}


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}