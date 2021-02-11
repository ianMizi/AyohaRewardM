Ext.define('ianMizi.view.FloatPanel.LoadingReconfirmPwdPanel', {
});









var _LoadingReconfirmPwdPanel;

function LoadingReconfirmPwdPanel() {
    _LoadingReconfirmPwdPanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 150,
          width: 200,
          id: 'LoadingReconfirmPwdPanelID',
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
                         xtype: 'label',
                         // align: 'stretch',
                         //align: 'left',
                         labelWrap: true,
                         id: 'txtReconformPasswd',
                         // ui: 'plain',
                         margin:'5 0 0 0',
                         //  padding: '5px',
                         html: '<div class="blink_me"><font size=4px color=white><center><b>Confirm Password<br></b></center></font></div>',


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

                   xtype: 'textfield',
                   //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                   //height: '10%',
                   //width: '60%',
                   id: 'CR_ReconfirmPassword',
                   required: true,
                   labelWrap: true,
                   disabled: false,

                   //   placeHolder: ''


               },
               
               
                 {
                     xtype: 'button',
                     align: 'stretch',
                     //align: 'left',

                     id: 'btnReconfirmPassword',
                     ui: 'decline',
                     margin: '5 0 0 0',
                     padding: '7px',
                     text: '<font size=3px color=white><center><b>Check</b></center></font>',
                     handler: function () {
                        
                         var OriPwd = GetCurrentPassword();
                     var ConfirmPwd = Ext.getCmp('CR_ReconfirmPassword').getValue();
                     if (OriPwd == ConfirmPwd) {                        
                         Ext.getCmp('Login_CR_Password').setHidden(true);
                         Ext.getCmp('Login_CR_Password_txt').setHidden(false);
                         Ext.getCmp('Login_CR_Password_txt').setValue(ConfirmPwd);
                         LoadingReconfirmPwdPanelHide();
                         Ext.getCmp('btnSavePassword').setDisabled(false);
                     }else
                     {
                         LoadingReconfirmPwdPanelHide();
                         LoadingCustomMsgShow('Password Not Match!', '2');
                         Ext.getCmp('btnSavePassword').setDisabled(true);
                     }
                     },


                 },
                



                  


              ]




          }







      });
    return _LoadingReconfirmPwdPanel;
}



function LoadingReconfirmPwdPanelHide() {
    _LoadingReconfirmPwdPanel.hide();
    routeLoadingReconfirmPwdPanelIsOpen = 'N';
}



function LoadingReconfirmPwdPanelShow() {
    Ext.Viewport.remove(_LoadingReconfirmPwdPanel);
    this.overlay = Ext.Viewport.add(LoadingReconfirmPwdPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeLoadingReconfirmPwdPanelIsOpen = 'Y';

}






