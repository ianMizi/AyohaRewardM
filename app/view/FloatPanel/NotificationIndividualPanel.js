Ext.define('ianMizi.view.FloatPanel.NotificationIndividualPanel', {
});



var _NotificationIndividualPanel;

function NotificationIndividualPanel() {
    _NotificationIndividualPanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: '100%',
          width: '100%',
          id: 'NotificationIndividualPanelID',
          draggable: false,



          centered: true,
          // bottom: 14,
          zIndex: 40,
          modal: false,
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
          //    style: 'border-bottom:1px solid;background-color:#D25959;',
          items: {






              xtype: 'container',
              style: 'border-bottom:0px solid;background-color:white;',
              height: '100%',
              width: '100%',
              layout: {
                  type: 'vbox',
                //  pack: 'center',
                  //  align: 'end'
              },

              items: [
                  {
                      xtype: 'toolbar',
                      title: '<font size="4" color="white">News & Promotion</font>',
                      docked: 'top',
                      id: 'NotificationIndividualPaneltoolbarTop',
                      style: {

                          background: '#f44336',

                      },

                      items:
                             [
                                
                                   {
                                       xtype: 'spacer'
                                   },

                                            {
                                                xtype: 'button',
                                                //   align: 'stretch',
                                                height: 45,
                                                width: 45,
                                                id: 'btnNotificationIndividualPanelClose',
                                                ui: 'plain',
                                                margin: '0 0 0 15',
                                                html: '<img src="resources/icons/BtnCloseNew.png" style="width: 35px; height: 35px;" />',
                                                handler: function () {

                                                    NotificationIndividualPanelHide()
                                                }
                                            },

                             ]
                  },

                  {

                      xtype: 'container',
                      style: 'border-bottom:1px solid;background-color:black;',
                      layout: {
                          type: 'vbox',
                        


                      },
                      scrollable: {
                          direction: 'vertical',
                          directionLock: true
                      },
                      height: '100%',
                      width: '100%',
                      items: [

                          
                       
                        
                       {
                         //  html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px solid black;overflow:hidden;word-break:normal;text-align:right;background-color:#37474f;color:white" colspan="2">Published On:' + GetNotificationDate() + '<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px solid white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#37474f;color:white" colspan="2"><br><img src="' + GetNotificationLogo64() + '" style="width: 122px; height: 122px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>' + GetSentFrom() + '</b><br>' + GetEnterpriseAddress() + '<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:' + GetNotificationTitle() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>' + GetNotification() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="' + GetAdvertisementImage() + '"style="width: 100%; height: 400px;  max-height:400px; " /><br><br><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button  style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><a href=' + GetEnterpriseWebsite() + '}><img src="resources/icons/websiteblackedit.png" style="width: 36px; height: 36px;" /></a></button>&nbsp;&nbsp;<button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/emailblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:' + GetEnterpriseEmail() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/callblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:' + GetEnterprisePhoneNo() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/fbblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/twiterblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/instablackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you turned on for product and promotion update.To unscribed this nofication go to enterprise info and turn off the notification feature</i> </font><br><br><font  color="#616161" size="1px">Powered By:Cloud-Receipts.Com</font></td></tr></table>',
                           
                           html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px solid black;overflow:hidden;word-break:normal;text-align:right;background-color:#F7FDFA;color:#616161" colspan="2">Published On:' + GetNotificationDate() + '<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px none white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#F7FDFA;color:#616161" colspan="2"><br><img src="' + GetNotificationLogo64() + '" style="width: 122px; height: 122px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>' + GetSentFrom() + '</b><br>' + GetEnterpriseAddress() + '<br><font color="#616161" size="2px">________________________________________________</font></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:' + GetNotificationTitle() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>' + GetNotification() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="' + GetAdvertisementImage() + '"style="width: 100%; height: 172px;  max-height:200px; " /><br><br><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button  style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><a href=' + GetEnterpriseWebsite() + '><img src="resources/icons/websiteblackedit.png" style="width: 36px; height: 36px;" /></a></button>&nbsp;&nbsp;<button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/emailblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:' + GetEnterpriseEmail() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/callblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:' + GetEnterprisePhoneNo() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/fbblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/twiterblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/instablackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you turned on for product and promotion update.To unscribed this nofication go to enterprise info and turn off the notification feature</i> </font><br><br><font  color="#616161" size="1px">Powered By:Cloud-Receipts.Com</font></td></tr></table>',


                       }

                      ]

                  },





              ]




          }







      });
    return _NotificationIndividualPanel;
}



function NotificationIndividualPanelHide() {
    _NotificationIndividualPanel.hide();
    routeNotificationIndividualPanelIsOpen = 'N';
}



function NotificationIndividualPanelShow() {
    Ext.Viewport.remove(_NotificationIndividualPanel);
    this.overlay = Ext.Viewport.add(NotificationIndividualPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeNotificationIndividualPanelIsOpen = 'Y';

}