
Ext.define('ianMizi.view.FloatPanel.AboutPanel', {
});









var _AboutPanel;

function AboutPanel() {
    _AboutPanel =
      Ext.create('Ext.Panel', {

          xtype: 'container',
          //height: 433,
          //width: 250,
          width: '100%',
          height: '100%',
          id: 'AboutPanelID',
          draggable: false,

          styleHtmlContent: true,

        //  centered: true,
          // bottom: 14,
          zIndex: 400,
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
          // style: 'border-bottom:0px none;background-color:white;',
          style: ' background-color:transparent;',
         
          //style:{
          //    background:'transparent'
          //},
          items: {






              xtype: 'container',
             // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
              style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

              layout: {
                  type: 'vbox',
                  pack: 'center',
                  align: 'center'
              },
              width: '100%',
              height: '100%',
              items: [



                    {
                        height: 240,
                        width: 240,
                        //margin: '0 0 0 0',
                        //id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                        //badgeText: "2",
                        html: '<img src="resources/icons/StampSuccessBoxPresent.gif" style="width:240px;height:240px" alt="Company Name">',

                    },

    //              {

    //                 // html: '<a href="mailto:Support@Cloud-Receipts.com?subject=Request for Upgrade Cloud Receipt&body=Hi,I would like to upgrade my cloud receipt app.TQ"><img src="resources/icons/aboutemail.png" style="width: 32px; height: 32px;" /></a>'
    //                  html: '<div class="blink_me" style="background-color: transparent; color: white; padding: 3px 3px;text-align: center; text-decoration: none;font-size: 14px;margin: -7px 0px 0px 139px;cursor: pointer;width:85px;height:22px" ><a href="mailto:Support@Cloud-Receipts.com?subject=Request for Upgrade Cloud Receipt&body=Hi,I would like to upgrade my cloud receipt app.TQ"><img src="resources/icons/upgradedPro.png" style="float:left;width: 100px; height: 40px;"></div>'
    //              },
    //            // FFCA33 <img src="resources/icons/upgradedPro.png" style="float:left;width: 26px; height: 26px;">
    //              {

    //                  xtype: 'container',
    //                  margin: '-20 0 0 0',
    //                //  style: 'border-bottom:1px none;background-color:white;',
    //                  layout: {
    //                      type: 'vbox',
    //                      pack: 'center',
    //                      align:'center'

    //                  },

    //                  items: [

    //                       {
    //                           margin: '-10 0 0 0',
    //                           html: '<img src="resources/icons/CloudReceipt1.png" style="width: 152px; height: 172px;" />'
    //                         //  html: '<img src="resources/icons/ProVersionRed.png" style="width="180" height="160"" />',
    //                       },
    //                       {
    //                           margin: '-20 0 0 0',
    //                           id:'AboutVersionTxt',
    //                           html: '<font size="2" color="black">Cloud-Receipts v Standard 1.0 </font>',
    //                       },
    //                       {
    //                           xtype: 'panel',
    //                           height:20
    //                       },
    //                  {
    //                  margin: '5 0 0 0',
    //                     html: '<u><font size="2" color="black">Specification:</font></u>',
    //                  }, {
    //                      margin: '-5 0 0 0',
    //                      html: '<font size="2" color="black">- limit 1000 receipts and bills records</font>',
    //                  }, {
    //                      margin: '-5 0 0 -28',
    //                      html: '<font size="2" color="black">- limit 4 years of record keeping.</font>',
    //                  },
    //                  {
    //                      margin: '-5 0 0 -28',
    //                      id: 'Upgradeversiontxt',
    //                      hidden:true,
    //                      html: '<font size="2" color="black">- Full Advanced search.</font>',
    //                  },
    //                  {
    //                  margin: '5 0 0 0',
    //html: '<u><font size="2" color="black">Contact Us:</font></u>',
    //                  },
    //                  {
    //                      xtype: 'container',
    //                      width:'100%',
    //                      layout: {
    //                          type: 'hbox',
    //                          pack: 'center',
    //                          align: 'center'
    //                      },
    //                      items: [
    //                           {
    //                       //xtype: 'button',
    //                       //align: 'stretch',
    //                       //height: 32,
    //                       //width: 92,
    //                       id: 'btnFacebooklogo',
    //                      // ui: 'plain',
    //                    //   html: '<img src="resources/icons/Facebooklogo.png" style="width: 32px; height: 32px;" />'
    //                       html: '<a href="fb://page/1999591407027990" class="facebook"><img src="resources/icons/Facebooklogo.png" style="width: 32px; height: 32px;" /></a>'
    //                           },
    //                           {
    //                               xtype: 'spacer',
    //                               width:5
    //                           },

    //                                  {
    //                                       //xtype: 'button',
    //                                       //align: 'stretch',
    //                                       //height: 32,
    //                                       //width: 92,
    //                                       id: 'btninstagramlogo',
    //                                       // ui: 'plain',
    //                                       html: '<img src="resources/icons/instagramlogo.png" style="width: 32px; height: 32px;" />'
    //                                  }, {
    //                                      xtype: 'spacer',
    //                                      width: 5
    //                                  },

    //                                  {
    //                                      //xtype: 'button',
    //                                      //align: 'stretch',
    //                                      //height: 32,
    //                                      //width: 92,
    //                                      id: 'btnweblogo',
    //                                      // ui: 'plain',
    //                                      html: '<a href="http://Cloud-Receipts.com"><img src="resources/icons/webRed.png" style="width: 32px; height: 32px;" /></a>'
    //                                  },
    //                                  {
    //                                      xtype: 'spacer',
    //                                      width: 5
    //                                  },

    //                                  {
    //                                      //xtype: 'button',
    //                                      //align: 'stretch',
    //                                      //height: 32,
    //                                      //width: 92,
    //                                      id: 'btnemaillogo',
    //                                      // ui: 'plain',
    //                                      html: '<a href="mailto:Support@Cloud-Receipts.com"><img src="resources/icons/aboutemail.png" style="width: 32px; height: 32px;" /></a>'
    //                                  },
    //                                  {
    //                                      xtype: 'spacer',
    //                                      width: 5
    //                                  },

    //                                  {
    //                                      //xtype: 'button',
    //                                      //align: 'stretch',
    //                                      //height: 32,
    //                                      //width: 92,
    //                                      id: 'btnWassaplogo',
    //                                      // ui: 'plain',
    //                                    //  window.open("http://" + url, "_blank");
    //                                      //  html: '<img src="resources/icons/whatApplogosnew.png" style="width: 32px; height: 32px;" />'

                                         
    //                                      html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/whatApplogosnew.png" style="width: 32px; height: 32px;" /></a>'
    //                                  }
    //                      ]
    //                  },
    //                        {
    //                            margin: '5 0 0 0',
    //                            html: '<u><font size="2" color="black">Developed By:</font></u>',
    //                        },
    //                          {
    //                              //xtype: 'button',
    //                              //align: 'stretch',
    //                              //height: 32,
    //                              //width: 92,
    //                              id: 'btnianMizillogo',
    //                              // ui: 'plain',
    //                              html: '<img src="resources/icons/ianMizilogos.jpg" style="width: 72px; height: 32px;" />'
    //                          },
    //                          {
    //                              margin: '-5 0 0 0',
    //                              html: '<font size="2" color="black">ianMizi Technology-Cyberjaya,Malaysia.</font>',
    //                          },
    //                   //{
    //                   //    xtype: 'button',
    //                   //    align: 'stretch',
    //                   //    //height: 32,
    //                   //    //width: 92,
    //                   //    id: 'btnLoadingToastMsgTxt',
    //                   //    ui: 'plain',
    //                   //    html: '<font size="4">Tap again to Exit</font>',
    //                   //}

    //                  ]

    //              },





              ]




          }







      });
    return _AboutPanel;
}



function AboutPanelHide() {
    _AboutPanel.hide();
    routeAboutPanelIsOpen = 'N';
}



function AboutPanelShow() {
    Ext.Viewport.remove(_AboutPanel);
    this.overlay = Ext.Viewport.add(AboutPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();   
   // Ext.getCmp('AboutVersionTxt').setHtml('<font size="2" color="black">Cloud-Receipts v ' + GetCurrentVersion() + ' </font>');
    routeAboutPanelIsOpen = 'Y';
    //isUpgraded();
}

function isUpgraded() {


    if (GetCurrentVersion() == 'Standard 1.1') {


        Ext.getCmp('Upgradeversiontxt').setHidden(false);
     
        return
    }
}