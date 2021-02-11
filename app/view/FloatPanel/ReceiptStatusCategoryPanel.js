Ext.define('ianMizi.view.FloatPanel.ReceiptStatusCategoryPanel', {

});







var _ReceiptStatusCategoryPanel;

function ReceiptStatusCategoryPanel() {
    _ReceiptStatusCategoryPanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 1,
          width: 1,
          id: 'ReceiptStatusCategoryPanelID',
          draggable: false,
          //   left: -10,
          left: -17,
          top: 37,
          //bottom: 164,
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
                  //pack: 'right',
                  //align: 'end'
              },

              items: [

                      {
                        //  xtype: 'button',
                          id: 'btnReceiptStatusCategoryPanel',
                          height: 250,
                          width: 115,
                          html: '<img src="resources/icons/RejectedStatusLatest.png" width="105" height="240" alt="Company Name">',
                          //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                         // ui: 'plain',
                          //handler: function () {

                           


                          //}
                      },


              ]

          },


      });
    return _ReceiptStatusCategoryPanel;
}



function ReceiptStatusCategoryPanelHide() {
  
        _ReceiptStatusCategoryPanel.hide();
        routeReceiptStatusCategoryPanelIssOpen = 'N';




}



function ReceiptStatusCategoryPanelShow() {
  
    Ext.Viewport.remove(_ReceiptStatusCategoryPanel);
    this.overlay = Ext.Viewport.add(ReceiptStatusCategoryPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeReceiptStatusCategoryPanelIssOpen = 'Y';

}
