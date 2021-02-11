Ext.define('ianMizi.view.AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword', {

});




var _AddCardFormCardType;


var _FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword;

function FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword() {

    _FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordID',
            xtype: 'panel',
            zIndex: 150,
            xtype: 'container',
            height: 170,
            //  height: '60%',
            width: '90%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
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

            style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        // docked: 'top',
                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHeader',
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
                                                 id: 'btnFloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordCardBack',
                                                 height: 30,
                                                 width: 35,
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     _FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'left',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     is_FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHide = 'N';

                                                 }
                                             },
                                             {
                                                 margin: '0 0 0 0',
                                                 html: '<font size=2 color=white><b>Re-Confirm Password</b></font>'
                                             },
                                              {
                                                  xtype: 'spacer',

                                              },















                               ]

                    },

                   



                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        width: '100%',
                        margin: '13 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left'
                        },
                        items: [
                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=white>Password</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '100%',
                              height: 20,
                              html: '<input type="password" id="input-FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },





        






        {
            xtype: 'container',
            margin: '13 0 0 0',
            width: '100%',
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [
        {
            xtype: 'button',
            //  align: 'stretch',

            ui: 'plain',
            width: '100%',
            height: 50,
            margin: '-5 0 0 0',
            // width: '80%',
            //style: {
            //    background: '#FA8072',
            //},
            // padding: '10px',
            //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
            text: '<button class="buttonStampCampaignCreate">Show</button>',

            handler: function () {
              

                var Pwd = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_UserEnterprisePasswordTxT').value;
                var RePwd = document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword').value;

                if (RePwd == Pwd) {
                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterprisePassword').setHidden(true);
                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterprisePasswordTxt').setHidden(false);
                    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseSaveLogin').setHidden(false);
                    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseShowPassword').setHidden(true);
                } else {

                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterprisePassword').setHidden(false);
                    Ext.getCmp('FloatPanel_AyohaEnterpriseAccount_UserEnterprisePasswordTxt').setHidden(true);
                    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseSaveLogin').setHidden(true);
                    Ext.getCmp('btn_FloatPanel_AyohaEnterpriseAccount_UserEnterpriseShowPassword').setHidden(false);
                    swalFireFail("Password Not Match!!");
                }
                FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHide();
            },


        },

            ]
        },

      



        



























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword;
}



function FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword());
    this.overlay.show();
    is_FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHide = 'Y';
   

}
var is_FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHide = 'N';

function FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHide() {
    if (is_FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHide == 'Y') {
        _FloatPanel_AyohaEnterpriseAccount_ReconfirmPassword.hide();
        is_FloatPanel_AyohaEnterpriseAccount_ReconfirmPasswordHide = 'N';
    }

}
