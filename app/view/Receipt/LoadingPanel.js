Ext.define('ianMizi.view.Receipt.LoadingPanel', {
});









var _LoadingPanel;

function LoadingPanel() {
    _LoadingPanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 42,
          width: 200,
          id: 'LoadingPanelID',
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
      //    style: 'border-bottom:1px solid;background-color:#D25959;',
          items: {






              xtype: 'container',
              style: 'border-bottom:0px solid;background-color:white;',

              layout: {
                  type: 'vbox',
                  pack: 'center',
                  //align: 'end'
              },

              items: [


                  {

                      xtype: 'container',
                      style: 'border-bottom:1px solid;background-color:black;',
                      layout: {
                          type: 'hbox',
                          pack: 'center',

                      },
                      items: [
                       {
                           xtype: 'button',
                           //   align: 'stretch',
                           height: 32,
                           width: 92,
                           id: 'btnLoadingPane',
                           ui: 'plain',
                           html: '<font size="4" color="white">Loading....</font>',
                       }

                      ]

                  },

                  //{

                  //    xtype: 'container',
                  //    style: 'border-bottom:0px solid;background-color:white;',
                  //    layout: {
                  //        type: 'hbox',
                  //        pack: 'center',
                  //        //align: 'end'
                  //    },
                  //    // margin: '0 0 0 5',
                  //    //height: 130,
                  //    //width: 200,
                  //    items: [

                  //           {
                  //               xtype: 'button',
                  //               //   align: 'stretch',
                  //               height: 92,
                  //               width: 92,
                  //               id: 'btnConfirmReceiptStatusMenus',
                  //               ui: 'plain',
                  //               html: '<img src="resources/icons/Confirm.png" style="width: 82px; height: 82px;" />',
                  //               handler: function () {
                  //                   FlatBill_UpdateFlatBillStatus(GetCurrentFlatBillID(), 'Mizi', '1');

                  //               }
                  //           },
                  //           //{
                  //           //    xtype: 'button',
                  //           //    //    align: 'stretch',
                  //           //    height: 92,
                  //           //    width: 92,

                  //           //    id: 'btnPendingReceiptStatusMenus',
                  //           //    ui: 'plain',
                  //           //    html: '<img src="resources/icons/Pendings1.png" style="width: 82px; height: 82px;" />',
                  //           //    handler: function () {


                  //           //    }
                  //           //},
                  //           {
                  //               xtype: 'button',
                  //               //  align: 'stretch',
                  //               height: 92,
                  //               width: 92,
                  //               id: 'btnVoidReceiptStatusMenus',
                  //               ui: 'plain',
                  //               html: '<img src="resources/icons/Void.png" style="width: 82px; height: 82px;" />',
                  //               handler: function () {
                  //                   FlatBill_UpdateFlatBillStatus(GetCurrentFlatBillID(), 'Mizi', '3');

                  //               }
                  //           },
                  //    ]
                  //},







              ]




          }







      });
    return _LoadingPanel;
}



function LoadingPanelHide() {

    if (isFromNotification != 'Y') {
        _LoadingPanel.hide();
       
    }
    isFromNotification = 'N';
}



function LoadingPanelShow() {
    Ext.Viewport.remove(_LoadingPanel);
    this.overlay = Ext.Viewport.add(LoadingPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();


}
