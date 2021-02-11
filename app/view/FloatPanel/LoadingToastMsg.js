
Ext.define('ianMizi.view.FloatPanel.LoadingToastMsg', {
});









var _LoadingToastMsg;

function LoadingToastMsg() {
    _LoadingToastMsg =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 42,
          width: 200,
          id: 'LoadingToastMsgID',
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
           
              layout: {
                  type: 'vbox',
                  pack: 'center',
                //  align: 'end'
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
                            align: 'stretch',
                           //height: 32,
                           //width: 92,
                           id: 'btnLoadingToastMsgTxt',
                           ui: 'plain',
                           html: '<font size="4" color="white">Tap again to Exit</font>',
                       }

                      ]

                  },

                 



              ]




          }







      });
    return _LoadingToastMsg;
}



function LoadingToastMsgHide() {
    _LoadingToastMsg.hide();
}



function LoadingToastMsgShow() {
    Ext.Viewport.remove(_LoadingToastMsg);
    this.overlay = Ext.Viewport.add(LoadingToastMsg()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();


}
