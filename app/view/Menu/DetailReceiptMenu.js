Ext.define('ianMizi.view.Menu.DetailReceiptMenu', {

});


//burger Menu
var IsDetailReceiptMenuShow = 'No';
var _DetailReceiptMenu;

function DetailReceiptMenu() {
    _DetailReceiptMenu =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 1,
          width: 1,
          id: 'DetailReceiptMenuID',
          draggable: false,
          // dock:'bottom',
          //   left: 150,
          right: -1,
          //  margin:'0 0 -130 0',
          // top: 80,
          bottom: 70,
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
                          id: 'btnDetailReceiptMenu',
                          height: 75,
                          width: 75,
                          html: '<img src="resources/icons/BurgerMenu.png" width="65" height="65" alt="Company Name">',
                          //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                          ui: 'plain',
                          handler: function () {

                              if (btnDetailReceiptMenuPanelInfoisClick == 'Yes') {
                                  Ext.getCmp('mainView').setActiveItem(2);
                                  Ext.getCmp('btnDetailReceiptMenu').setHtml('<img src="resources/icons/BurgerMenu.png" width="65" height="65" alt="Company Name">');
                                  btnDetailReceiptMenuPanelInfoisClick = 'No';
                                  return;

                              }
                              DetailReceiptMenuPanelShow();
                            
                              //StatusDetailReceiptMenuHide();
                              //StatusMenuShow();
                            //  DetailReceiptMenuHide();


                          }
                      },


              ]

          },


      });
    return _DetailReceiptMenu;
}



function DetailReceiptMenuHide() {
  
   

    if (IsDetailReceiptMenuShow == 'Yes') {
        _DetailReceiptMenu.hide();
        routeDetailReceiptMenuIsOpen = 'N';
    }


    IsDetailReceiptMenuShow = 'No';



}



function DetailReceiptMenuShow() {
    IsDetailReceiptMenuShow = 'Yes';
    Ext.Viewport.remove(_DetailReceiptMenu);
    this.overlay = Ext.Viewport.add(DetailReceiptMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeDetailReceiptMenuIsOpen = 'Y';
   


}






