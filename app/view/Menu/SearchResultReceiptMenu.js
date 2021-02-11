Ext.define('ianMizi.view.Menu.SearchResultReceiptMenu', {

});

var _SearchResultReceiptMenu;

function SearchResultReceiptMenu() {
    _SearchResultReceiptMenu =
    Ext.create('Ext.Panel', {

        xtype: 'panel',
        height: 1,
        width: 1,
        id: 'SearchResultReceiptMenuID',
        draggable: false,
        right: -5,
        // bottom: 260,
        bottom: 200,
        zIndex:50,
        showAnimation: {
            type: 'slide',
            direction: 'left',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: null,
            direction: null,
            duration: null,
            //  easing: 'ease-in'
        },
          style: 'background-color: transparent;',
      //  style: 'border-bottom:0px none;background-color:#353839;',
        items: {

            xtype: 'container',
            style: 'background-color: transparent;',
            layout: {
                type: 'vbox',
                pack: 'left',
                align: 'end'
            },

            items: [

                    {
                        xtype: 'button',
                        id: 'btnSearchResultReceiptMenuInfo',
                        height: 70,
                        width: 70,
                        html: '<div ><img src="resources/icons/RedInfo.png" width="60" height="60" alt="Company Name"></div>',
                        //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                            if (containerSearchResultInfoisShow == 'Y') {
                                Ext.getCmp('containerSearchResultInfo').setHidden(true);
                                Ext.getCmp('containerSearchResultfound').setHidden(false);
                                
                                containerSearchResultInfoisShow = 'N';
                                return;
                            } else {
                                Ext.getCmp('containerSearchResultInfo').setHidden(false);
                                Ext.getCmp('containerSearchResultfound').setHidden(true);
                                containerSearchResultInfoisShow = 'Y';
                            }

                          
                          //  ReceiptSearchResultCriteriaShow();
                        }
                    },
                  {
                      xtype: 'button',
                      id: 'btnSearchResultReceiptMenuPrint',
                      height: 70,
                      width: 70,
                      html: '<div ><img src="resources/icons/RedPrint.png" width="60" height="60" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {

                      }
                  },
                  {
                      xtype: 'button',
                      id: 'btnSearchResultReceiptMenuSearch',
                      height: 70,
                      width: 70,
                      html: '<div ><img src="resources/icons/RedSearch.png" width="60" height="60" alt="Company Name"></div>',
                      ui: 'plain',
                      handler: function () {
                          // SearchResultReceiptMenuHide();
                          SearchResultReceiptMenuHide();
                          Ext.getCmp('mainView').setActiveItem(7);
                      }
                  },


                   


            ]

        },

        initialize: function () {

            //   _singleTrackingMap_BurgeMenu.hide();
        }

    });

    return _SearchResultReceiptMenu;
}



function SearchResultReceiptMenuHide() {
    _SearchResultReceiptMenu.hide();
  
}



function SearchResultReceiptMenuShow() {
    Ext.Viewport.remove(_SearchResultReceiptMenu);
    this.overlay = Ext.Viewport.add(SearchResultReceiptMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeStatusDetailReceiptMenuIsOpen = 'Y';


}