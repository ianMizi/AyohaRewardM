Ext.define('ianMizi.view.FloatPanel.TestRoutePanel', {
});



//var _StatusDetailReceiptMenusIsShow = 'No';
var _TestRoutePanel;

function TestRoutePanel() {
    _TestRoutePanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 1,
          width: 1,
          id: 'TestRoutePanelID',
          draggable: false,
          // dock:'bottom',
          //   left: -10,
          right: -5,
          //  margin:'0 0 -130 0',
          // top: 80,
          bottom: 180,
          //  right: -155,


          //  center:true,
          //bottom: 64,
          zIndex: 30,
          showAnimation: {
              type: 'popIn',
              duration: 250,
              easing: 'ease-out'
          },
          hideAnimation: {
              type: null,
              duration: null,
              easing: null
          },
          style: 'background-color: transparent;',
          items: {

              xtype: 'container',
              style: 'background-color: transparent;',
              layout: {
                  type: 'vbox',
                  pack: 'right',
                  align: 'end'
              },

              items: [

                      {
                          xtype: 'button',
                          id: 'btnTestRoutePanel',
                          height: 75,
                          width: 75,
                          html: '<div class="blink_me"><img src="resources/icons/StatusMenu.png" width="65" height="65" alt="Company Name"></div>',
                          //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {
                              // console.log('xxxx');
                              isPushroutesArrayFirstLoad = 'Yes';

                              var arr;
                              var i;
                              for (i = 0; i < routesArray.length; i++) {
                                  // alert(routesArray[i]);

                                
                                  arr += routesArray[i] + "\n";
                                  // console.log("original:"+routesArray[i]);

                              }

                              console.log(arr.replace("undefined", ""));


                            

                              if (routeAboutPanelIsOpen == 'Y') {
                                  AboutPanelHide();
                                  return;
                              } if (routeForgotPasswordIsOpen == 'Y') {
                                  ForgotPasswordPanelHide();
                                  return;
                              } if (routeLoadingCustomMsgIsOpen == 'Y') {
                                  LoadingCustomMsgHide();
                                  return;
                              } if (routeReceiptStatusCategoryPanelIssOpen == 'Y') {
                                  ReceiptStatusCategoryPanelHide();
                                  return;
                              } if (routeSearchReceiptsFilterEnterprisePanelIsOpen == 'Y') {
                                  SearchReceiptsFilterEnterprisePanelHide();
                                  return;
                              }
                              //if (routeDetailReceiptMenuIsOpen == 'Y') {
                              //    DetailReceiptMenuHide();
                              //    return;
                              //}

                              if (routeDetailReceiptMenuPanelIsOpen == 'Y') {
                                  //DetailReceiptMenuPanelHide();
                                  DetailReceiptMenuPanelHide();
                                  DetailReceiptMenuShow();
                                  return;
                              }
                              if (routeDrawerMenuPanelIsOpen == 'Y') {
                                  DrawerMenuHide();
                                  return;
                              }
                              if (routeReceiptCategoryMenuIsOpen == 'Y') {
                                  ReceiptCategoryMenuHide();
                                  return;
                              } if (routeStatusDetailReceiptMenuIsOpen == 'Y') {
                                  StatusDetailReceiptMenuHide();
                                  return;
                              } if (routeStatusMenuIsOpen == 'Y') {
                                  StatusMenuHide();
                                  return;
                              } if (routeNotificationIndividualPanelIsOpen == 'Y') {
                                  NotificationIndividualPanelHide();
                                  return;
                              }
                            
                              


                              routesArray.pop();
                              BackrouteArr();

                              // DetailReceiptMenuShow();
                          }
                      },


              ]

          },


      });
    return _TestRoutePanel;
}



function TestRoutePanelHide() {
 
        _TestRoutePanel.hide();
    



}



function TestRoutePanelShow() {
   
    Ext.Viewport.remove(_TestRoutePanel);
    this.overlay = Ext.Viewport.add(TestRoutePanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    loadRememberMe();

}
