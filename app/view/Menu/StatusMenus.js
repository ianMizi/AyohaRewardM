Ext.define('ianMizi.view.Menu.StatusMenus', {

});




var _StatusMenu;

function StatusMenu() {
    _StatusMenu =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 180,
          width: 210,
          frame: false,
          border: false,
       
          id: 'StatusMenuID',
          draggable: false,
          //height: 0,
          //width: 0,
          // style: 'background-color: black;',
          style: 'border-bottom:1px none;background-color:#353839;',
          cls: 'my-panel',
          shadow: false,
          centered: true,
          //bottom: 64,
          zIndex: 40,
          modal: true,
         // hideOnMaskTap: true,
          layout: {
              type: 'fit'
          },
          showAnimation: {
              type: 'popIn',
              duration: 150,
              easing: 'ease-out'
          },
          hideAnimation: {
              type: 'popOut',
              duration: 250,
              easing: 'ease-out'
          },
        //  style: 'border-bottom:0px solid;background-color:transparent;',
          items: {




              
              
                  xtype: 'container',
                  style: 'border-bottom:0px solid;background-color:transparent;',
            
                  layout: {
                      type: 'vbox',
                      pack: 'center',
                      //align: 'end'
                  },

                  items: [


                      {

                          xtype: 'container',
                          style: 'border-bottom:1px none;background-color:transparent;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                            
                          },
                          items:[
                           {
                              
                               xtype: 'container',
                               layout: {
                                   type: 'hbox',
                                 //  pack: 'center',
                                   align: 'start'
                               },
                               items: [
                                   {
                                       margin: '0 0 0 33',
                                       html: '<font size="4" color="white"><b>Receipt Status?</b></font>',
                                   },
                                     {
                                         xtype: 'button',
                                         //   align: 'stretch',
                                         height: 45,
                                         width: 45,
                                         id: 'btnCloseReceiptStatusMenus',
                                         ui: 'plain',
                                         margin: '-35 0 0 15',
                                         html: '<img src="resources/icons/BtnCloseNew.png" style="width: 35px; height: 35px;" />',
                                         handler: function () {

                                             StatusMenuHide();
                                             StatusDetailReceiptMenuShow();
                                         }
                                     },
                                  
                               ]
                           },
                           {

                               xtype: 'container',
                               style: 'border-bottom:0px solid;background-color:transparent;',
                               //height: 0,
                               //width: 0,
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                                   //align: 'end'
                               },
                               // margin: '0 0 0 5',
                               //height: 130,
                               //width: 200,
                               items: [


                                   {
                                       xtype: 'container',
                                       layout: {
                                           type: 'vbox',
                                           pack: 'center',
                                           //align: 'end'
                                       },
                                       items: [

                                            {
                                                xtype: 'button',
                                                //   align: 'stretch',
                                                height: 92,
                                                width: 92,
                                                id: 'btnConfirmReceiptStatusMenus',
                                                ui: 'plain',
                                                margin: '20 0 0 0',
                                                html: '<img src="resources/icons/ConfirmGreenNew.png" style="width: 82px; height: 82px;" />',
                                                handler: function () {
                                                    FlatBill_UpdateFlatBillStatus(GetCurrentFlatBillID(), GetCurrentEmail(), '1');

                                                }
                                            },
                                             {
                                                 xtype: 'button',
                                                 align: 'stretch',
                                                 id: 'btnConfirmReceiptStatusMenustxt',
                                                 ui: 'plain',
                                                 margin: '-15 0 0 7',
                                                 html: '<font size="3" color="White">Confirm</font>',
                                                 // html: '<font size="5" color="white"><b>|</b></font>',
                                                 handler: function () {
                                                     FlatBill_UpdateFlatBillStatus(GetCurrentFlatBillID(), GetCurrentEmail(), '1');
                                                 }
                                             },
                                       ]
                                   },

                                   {
                                       xtype: 'container',
                                       layout: {
                                           type: 'vbox',
                                           pack: 'center',
                                           //align: 'end'
                                       },
                                       items: [
                                         
                                          {
                                              xtype: 'button',
                                              //  align: 'stretch',
                                              height: 92,
                                              width: 92,
                                              id: 'btnVoidReceiptStatusMenus',
                                              ui: 'plain',
                                              margin: '20 0 0 0',
                                              html: '<img src="resources/icons/voidredNew.png" style="width: 82px; height: 82px;" />',
                                              handler: function () {
                                                  FlatBill_UpdateFlatBillStatus(GetCurrentFlatBillID(), GetCurrentEmail(), '3');

                                              }
                                          },
                                          {
                                              xtype: 'button',
                                              align: 'stretch',
                                              id: 'btnVoidReceiptStatusMenustxt',
                                              ui: 'plain',
                                              margin: '-15 0 0 5',
                                              html: '<font size="3" color="White">Reject</font>',
                                              // html: '<font size="5" color="white"><b>|</b></font>',
                                              handler: function () {
                                                  FlatBill_UpdateFlatBillStatus(GetCurrentFlatBillID(), GetCurrentEmail(), '3');
                                              }
                                          },
                                       ]
                                   },
                                     
                               ]
                           },
                             
                          ]
                         
                      },

                      




                   


                  ]



            
              }


           

      


      });
    return _StatusMenu;
}



function StatusMenuHide() {
    _StatusMenu.hide();
    routeStatusMenuIsOpen = 'N';
}



function StatusMenuShow() {
    Ext.Viewport.remove(_StatusMenu);
    this.overlay = Ext.Viewport.add(StatusMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeStatusMenuIsOpen = 'Y';

}







function FlatBill_UpdateFlatBillStatus(FlatBillID, FlatBillUpdateBy, FlatBillStatus) {

    Ext.Ajax.request({

        // url: document.location.protocol + '//' + document.location.host + '/API/GeoFence/GeofenceDelete',
        //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillUpdateFlatBillStatus',
        url: GetAPIurl() + '/FlatBill/FlatBillUpdateFlatBillStatus',
        params: {

            FlatBillID: FlatBillID,
            FlatBillUpdateBy: FlatBillUpdateBy,
            FlatBillStatus: FlatBillStatus,

        },
        success: function (result, request) {

            var strStatus = setStatus(FlatBillStatus)
          

            if (FlatBillStatus == '1') {
                setTimeout(function () { ReceiptCategoryMenuShow(); }, 1000);
               
            } else
            {
                LoadingCustomMsgShow('Receipt has been ' + strStatus, '3');
            }

          


        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });
}




function setStatus(FlatBillStatus) {
    var status;
    var d = new Date();
    if (FlatBillStatus == '1') {
        status = 'Confirm';
        Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/ConfirmReceipt.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('lblStatusDetailReceipt').setHtml('<font size="3" color="blue">Confirm</font>');
        Ext.getCmp('lblUpdateDateDetailReceipt').setHtml('<font size="3" color="blue">(On:' + d.toDateString() + ':' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ')</font>');
        StatusDetailReceiptMenuHide();
        StatusMenuHide();

    } if (FlatBillStatus == '3') {
        status = 'Voided';
        Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/cancelReceipt1.png" style="width: 32px; height: 32px;" />');
        Ext.getCmp('lblStatusDetailReceipt').setHtml('<font size="3" color="red">Void</font>');
        Ext.getCmp('lblUpdateDateDetailReceipt').setHtml('<font size="3" color="red">(On:' + d.toDateString() + ':' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ')</font>');
    }

    return status;
}