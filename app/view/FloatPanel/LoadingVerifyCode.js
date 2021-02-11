Ext.define('ianMizi.view.FloatPanel.LoadingVerifyCode', {
});









var _LoadingVerifyCode;

function LoadingVerifyCode() {
    _LoadingVerifyCode =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 300,
          width: 200,
          id: 'LoadingVerifyCodeID',
          draggable: false,



          centered: true,
          //bottom: 64,
          zIndex: 40,
          modal: true,
          hideOnMaskTap: false,
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
          style: 'border-bottom:1px solid;background-color:#353839;',
          items: {




              //  margin:'-50 0 0 0',
              //height: 150,
              //width: 200,
              xtype: 'container',
              style: 'border-bottom:0px solid;background-color:#353839;',

              layout: {
                  type: 'vbox',
                  pack: 'center',

              },

              items: [
                   {

                       xtype: 'toolbar',
                       hidden:true,
                       title: '<div class="blink_me">Attentions</div>',
                       docked: 'top',
                       style: {
                           background: '#D25959',
                       },

                   },
                     {
                         xtype: 'label',
                         // align: 'stretch',
                         //align: 'left',
                         labelWrap: true,
                         id: 'txtregVerifyCode',
                         // ui: 'plain',

                         //  padding: '5px',
                         html: '<font size=3px color=white><center>We have send verification code to you via SMS, kindly Please Check your SMS inbox, Then key in the code here.</center></font>',


                     },
                  {
                      xtype: 'button',
                      align: 'stretch',
                      //align: 'left',

                      id: 'txtreg',
                      ui: 'plain',

                      //  padding: '5px',
                      text: '<font size=3px color=white><u><center><b>Verification Code</b></center></u></font>',
                      handler: function () {


                      },


                  },
               {

                   xtype: 'textfield',
                   //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                   //height: '10%',
                   //width: '60%',
                   id: 'CR_VerificationCode',
                   required: true,
                   labelWrap: true,
                   disabled: false,

                   //   placeHolder: ''


               },
                {

                    xtype: 'textfield',
                    //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                    //height: '10%',
                    //width: '60%',
                    id: 'CR_VerificationCodeString',
                    required: true,
                    labelWrap: true,
                    disabled: false,
                    hidden:true,
                    //   placeHolder: ''


                },
                 {

                     xtype: 'textfield',
                     //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                     //height: '10%',
                     //width: '60%',
                     id: 'CR_ID',
                     required: true,
                     labelWrap: true,
                     disabled: false,
                     hidden: true,
                     //   placeHolder: ''


                 },
                 {
                     xtype: 'button',
                     align: 'stretch',
                     //align: 'left',

                     id: 'btnSendVerificationCode',
                     ui: 'decline',
                     margin: '5 0 0 0',
                     padding: '7px',
                     text: '<font size=3px color=white><center><b>Verify Code</b></center></font>',
                     handler: function () {

                         var verificationCodestring = Ext.getCmp('CR_VerificationCodeString').getValue();
                         var verificationCodeTxtBox = Ext.getCmp('CR_VerificationCode').getValue();
                         LoadingCustomMsgShow('Verifing....', '4');
                         if (verificationCodestring == verificationCodeTxtBox) {
                          
                             var ID = Ext.getCmp('CR_ID').getValue();
                             var CR_MyKadNo = Ext.getCmp('CR_MykadNo').getValue();
                             CR_VerifyUser(ID, CR_MyKadNo);
                         }else
                         {
                            
                             var task = Ext.create('Ext.util.DelayedTask', function () {

                                 LoadingCustomMsgShow('Verification Code Not Match!', '2');
                                 Ext.Viewport.unmask();
                             });
                             task.delay(2000);
                         }

                         

                     },


                 },
                  //{

                  //    xtype: 'container',
                  //    style: 'border-bottom:1px solid;background-color:black;',
                  //    layout: {
                  //        type: 'hbox',
                  //        pack: 'center',

                  //    },
                  //    items: [










                  //        {
                  //         xtype: 'button',
                  //         //   align: 'stretch',
                  //         height: 32,
                  //         width: 92,
                  //         id: 'btnLoadingRegistration',
                  //         ui: 'plain',
                  //         html: '<font size="4" color="white">Loading....</font>',
                  //     }

                  //    ]

                  //},








              ]




          }







      });
    return _LoadingVerifyCode;
}



function LoadingVerifyCodeHide() {
    _LoadingVerifyCode.hide();
 
}



function LoadingVerifyCodeShow() {
    Ext.Viewport.remove(_LoadingVerifyCode);
    this.overlay = Ext.Viewport.add(LoadingVerifyCode()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    var CR_MykadNo= Ext.getCmp('CR_MykadNo').getValue();
    loadVerificationCode(CR_MykadNo);

}

function loadVerificationCode(CR_MykadNo)
{
    Ext.getStore('CR_MobileUserGetVerifyStringStore').getProxy().setExtraParams({
        CR_MykadNo: CR_MykadNo
    });
    Ext.StoreMgr.get('CR_MobileUserGetVerifyStringStore').load();
   // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Name' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('CR_MobileUserGetVerifyStringStore').getProxy().setExtraParams({
            CR_MykadNo: CR_MykadNo
        });
        Ext.StoreMgr.get('CR_MobileUserGetVerifyStringStore').load();
        var myStore = Ext.getStore('CR_MobileUserGetVerifyStringStore');
        var modelRecord = myStore.getAt(0);

        var VerifyString = modelRecord.get('CR_VerifyString');
        var CR_ID = modelRecord.get('ID');
        Ext.getCmp('CR_VerificationCodeString').setValue(VerifyString);
        Ext.getCmp('CR_ID').setValue(CR_ID);
        var PhoneNo = Ext.getCmp('CR_PhoneNumber').getValue();
        sendSMSverifycode(PhoneNo, VerifyString)
       
    });
    task.delay(2000);
}






function sendSMSverifycode(PhoneNo,Verifycode) {



    console.log(PhoneNo);
    console.log(Verifycode);
    var message = "%0aCloud-Receipts.com verification code:" + Verifycode + "%0aThank you.%0aianMizi Technology Solution";
    //SendSMSToURL("http://www.isms.com.my/isms_send.php?un=username&pwd=password&dstno=60123456789&msg=" + message + "&type=1&sendid=12345");

  //  SendSMSToURL("https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=" + PhoneNo + "&msg=" + message + "&type=1&sendid=" + PhoneNo + '-' + Verifycode + "");


   // var str = '<iframe src="http://drms.dsmaf.mil.my/ChartingPPATM/ChartingPPATM.html?MPI=' + MPI + '&ProviderIndex=' + ProvIndex + '&QueueNumIndex=' + QIndex + '&Age=' + age + '&ProcNumIndex=' + ProcNumIndex + '" style="position: absolute; width: 0; height: 0"></iframe>';

  //  var str = '<iframe src="https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '&type=1&sendid=' + PhoneNo - Verifycode + '" style="position: absolute; width: 0; height: 0"></iframe>';

 //   var str = '<iframe src="https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=" + PhoneNo + "&msg=" + message + "&type=1&sendid=" + PhoneNo + ' - ' + Verifycode + "" style="position: absolute; width: 0; height: 0"></iframe>';

  





    var srcUrl = 'https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var str = '<iframe src="' + srcUrl + '" style="position: absolute; width: 5%; height: 5%"></iframe>';
        console.log(str);
        Ext.getCmp('SMSmockupComponent').setHtml(str);
        Ext.Viewport.unmask();
    });
    task.delay(500);



  //  Ext.getCmp('SMSmockupComponent').setHtml(str);
}












function verifyRegistrationCode(CR_MykadNo,verifyCodestr,CR_PhoneNo) {
    Ext.getStore('CR_MobileUserGetVerifyStringStore').getProxy().setExtraParams({
        CR_MykadNo: CR_MykadNo
    });
    Ext.StoreMgr.get('CR_MobileUserGetVerifyStringStore').load();
    // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Name' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('CR_MobileUserGetVerifyStringStore').getProxy().setExtraParams({
            CR_MykadNo: CR_MykadNo
        });
        Ext.StoreMgr.get('CR_MobileUserGetVerifyStringStore').load();
        var myStore = Ext.getStore('CR_MobileUserGetVerifyStringStore');
        var modelRecord = myStore.getAt(0);

        var VerifyString = modelRecord.get('CR_VerifyString');
        Ext.getCmp('CR_VerificationCodeString').setValue(VerifyString);
        var PhoneNo = Ext.getCmp('CR_PhoneNumber').getValue();
        sendSMSverifycode(PhoneNo, VerifyString)

    });
    task.delay(2000);
}









function CR_VerifyUser(ID, CR_MykadNo) {

    Ext.Ajax.request({

        url: GetAPIurl() + '/CloudReceiptsMobileUser/CRMobileUserVerifiedUser',

        params: {
            ID:ID,
            CR_MykadNo: CR_MykadNo

        },
        success: function (result, request) {

            //Ext.getCmp('loginuserNameTextField').setValue(UserName);
            //Ext.getCmp('loginpasswordTextField').setValue(Password);
            LoadingCustomMsgHide();
            LoadingVerifyCodeHide();
            setTimeout(function () {
                LoadingCustomMsgShow('Registration success!', '3');
                Ext.getCmp('mainView').setActiveItem(0);
               var CR_UseName = Ext.getCmp('CR_UseName').getValue();
               var CR_Password = Ext.getCmp('CR_Password').getValue();
               Ext.getCmp('loginuserNameTextField').setValue(CR_UseName);
               Ext.getCmp('loginpasswordTextField').setValue(CR_Password);
                
                
            }, 500);


            //   Ext.Msg.alert("Please Login.This Is a Temporary Account for demo purpose,your account will be Activated by Administrator after confirmed and signed service contract.<br>Agensi Angkasa Negara-Malaysia.");

        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error Verify, Contact Admin!', '2');
          //  LoadingCustomMsgHide();
          //  Ext.Msg.alert('Error', request);
            //  CustomeMsgBoxShow("Error");

        }
    });
}

