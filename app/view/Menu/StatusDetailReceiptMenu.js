Ext.define('ianMizi.view.Menu.StatusDetailReceiptMenu', {

});



var _StatusDetailReceiptMenusIsShow = 'No';
var _StatusDetailReceiptMenu;

function StatusDetailReceiptMenu() {
    _StatusDetailReceiptMenu =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 1,
          width: 1,
          id: 'StatusDetailReceiptMenuID',
          draggable: false,
         // dock:'bottom',
       //   left: -10,
          right: -5,
        //  margin:'0 0 -130 0',
         // top: 80,
          bottom: 80,
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
                          id: 'btnStatusDetailReceiptMenu',
                          height: 75,
                          width: 75,
                          html: '<div class="blink_me"><img src="resources/icons/StatusMenu.png" width="65" height="65" alt="Company Name"></div>',
                          //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {

                              StatusDetailReceiptMenuHide();
                             StatusMenuShow();
                             

                             // DetailReceiptMenuShow();
                          }
                      },


              ]

          },


      });
    return _StatusDetailReceiptMenu;
}



function StatusDetailReceiptMenuHide() {
    if (_StatusDetailReceiptMenusIsShow == 'Yes') {
        _StatusDetailReceiptMenu.hide();
    }
    
    routeStatusDetailReceiptMenuIsOpen = 'N';
    _StatusDetailReceiptMenusIsShow = 'No';


   
}



function StatusDetailReceiptMenuShow() {
    _StatusDetailReceiptMenusIsShow = 'Yes';
    Ext.Viewport.remove(_StatusDetailReceiptMenu);
    this.overlay = Ext.Viewport.add(StatusDetailReceiptMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeStatusDetailReceiptMenuIsOpen = 'Y';
    
}


