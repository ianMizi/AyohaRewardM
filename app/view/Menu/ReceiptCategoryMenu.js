Ext.define('ianMizi.view.Menu.ReceiptCategoryMenu', {

});




var _ReceiptCategoryMenu;

function ReceiptCategoryMenu() {
    _ReceiptCategoryMenu =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 150,
          width: '91%',
          frame: false,
          border: false,

          id: 'ReceiptCategoryMenuID',
          draggable: false,
          //height: 0,
          //width: 0,
          //   style: 'background-color: black;',
          style: 'border-bottom:1px none;background-color:#353839;',
          cls: 'my-panel',
          shadow: false,
          centered: true,
          //bottom: 64,
          zIndex: 40,
          modal: true,
          hideOnMaskTap: true,
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
              style: 'border-bottom:0px none;background-color:transparent;',
              height: 110,
              width: '100%',
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
                      height: 110,
                      width: '100%',
                      items: [
                       {

                           xtype: 'container',
                           layout: {
                               type: 'hbox',
                                 pack: 'center',
                              // align: 'start'
                           },
                           items: [
                               {
                                   margin: '0 0 0 0',
                                   html: '<font size="4" color="white"><b>Receipt Category?</b></font>',
                               },
                                 //{
                                 //    xtype: 'button',
                                 //    hidden:true,
                                 //    //   align: 'stretch',
                                 //    height: 45,
                                 //    width: 45,
                                 //    id: 'btnCloseReceiptStatusMenus',
                                 //    ui: 'plain',
                                 //    margin: '-35 0 0 15',
                                 //    html: '<img src="resources/icons/BtnCloseNew.png" style="width: 35px; height: 35px;" />',
                                 //    handler: function () {

                                 //        StatusMenuHide();
                                 //        StatusDetailReceiptMenuShow();
                                 //    }
                                 //},
                                //{
                                //    xtype: 'button',
                                //    // align: 'stretch',
                                //    height: 45,
                                //    width: 120,
                                //    id: 'btnReceiptStatusQuestiontxt',
                                //    //   ui: 'plain',
                                //    margin: '0 0 0 10',
                                //    html: '<font size="4" color="White"><b>Receipt Status?</b></font>',
                                //    // html: '<font size="5" color="white"><b>|</b></font>',
                                //    handler: function () {

                                //    }
                                //},

                           ]
                       },
                       {

                           xtype: 'container',
                           style: 'border-bottom:0px none;background-color:transparent;',
                           height: 130,
                           margin:'-10 0 0 0',
                           width: '100%',
                           layout: {
                               type: 'hbox',
                               pack: 'center',
                               //align: 'end'
                           },
                           scrollable: {
                               direction: 'horizontal',
                               directionLock: true
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
                                               align: 'stretch',
                                            height: 92,
                                            width: 92,
                                            id: 'btnReceiptCategoryMenuClaimAble',
                                            ui: 'plain',
                                            margin: '20 0 0 0',
                                            html: '<img src="resources/icons/claimableWhiteNew.png" style="width: 82px; height: 82px;" />',
                                            handler: function () {
                                                console.log(GetCurrentFlatBillID_ID());
                                                console.log(GetCurrentFlatBillID());
                                                FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'Claimable');

                                            }
                                        },
                                         {
                                             xtype: 'button',
                                             align: 'stretch',
                                             id: 'btnReceiptCategoryMenuClaimAbletxt',
                                             ui: 'plain',
                                            margin: '-15 0 0 7',
                                             html: '<font size="3" color="White">Claimable</font>',
                                             // html: '<font size="5" color="white"><b>|</b></font>',
                                             handler: function () {

                                                 console.log(GetCurrentFlatBillID_ID());
                                                 console.log(GetCurrentFlatBillID());
                                                 FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'Claimable');
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
                                           align: 'stretch',
                                          height: 92,
                                          width: 92,
                                          id: 'btnReceiptCategoryMenuPartiallyPaid',
                                          ui: 'plain',
                                        margin: '20 0 0 10',
                                        html: '<img src="resources/icons/PartialyPaidWhiteNew.png" style="width: 82px; height: 70px;" />',
                                          handler: function () {
                                              FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'Partially-Paid');

                                          }
                                      },
                                      {
                                          xtype: 'button',
                                          align: 'stretch',
                                          id: 'btnReceiptCategoryMenuPartiallyPaidtxt',
                                          ui: 'plain',
                                         margin: '-15 0 0 5',
                                          html: '<font size="3" color="White">Partially Paid</font>',
                                          // html: '<font size="5" color="white"><b>|</b></font>',
                                          handler: function () {
                                              FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'Partially-Paid');
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
                                              align: 'stretch',
                                             height: 92,
                                             width: 92,
                                             id: 'btnReceiptCategoryMenuWarranty',
                                             ui: 'plain',
                                           margin: '20 0 0 0',
                                           html: '<img src="resources/icons/WarrantyWhite.png" style="width: 82px; height: 82px;" />',
                                             handler: function () {
                                                 FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'Warranty');

                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             align: 'stretch',
                                             id: 'btnReceiptCategoryMenuWarrantytxt',
                                             ui: 'plain',
                                            margin: '-15 0 0 5',
                                             html: '<font size="3" color="White">Warranty</font>',
                                             // html: '<font size="5" color="white"><b>|</b></font>',
                                             handler: function () {
                                                 FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'Warranty');
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
                                              align: 'stretch',
                                             height: 92,
                                             width: 92,
                                             id: 'btnReceiptCategoryMenuGeneral',
                                             ui: 'plain',
                                            margin: '20 0 0 0',
                                             html: '<img src="resources/icons/generalWhite.png" style="width: 82px; height: 82px;" />',
                                             handler: function () {
                                                 FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'General');

                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             align: 'stretch',
                                             id: 'btnReceiptCategoryMenuGeneraltxt',
                                             ui: 'plain',
                                             margin: '-15 0 0 5',
                                             html: '<font size="3" color="White">General</font>',
                                             // html: '<font size="5" color="white"><b>|</b></font>',
                                             handler: function () {
                                                 FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'General');
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
                                               align: 'stretch',
                                             height: 92,
                                             width: 92,
                                             id: 'btnReceiptCategoryMenuDeposit',
                                             ui: 'plain',
                                             margin: '20 0 0 10',
                                             html: '<img src="resources/icons/DepositWhite.png" style="width: 82px; height: 82px;" />',
                                             handler: function () {
                                                 FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(),GetCurrentFlatBillID(), GetCurrentEmail(), 'Deposit');

                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             align: 'stretch',
                                             id: 'btnReceiptCategoryMenuDeposittxt',
                                             ui: 'plain',
                                             margin: '-15 0 0 10',
                                             html: '<font size="3" color="White">Deposit</font>',
                                             // html: '<font size="5" color="white"><b>|</b></font>',
                                             handler: function () {
                                                 FlatBill_UpdateFlatBillReceiptCategory(GetCurrentFlatBillID_ID(), GetCurrentFlatBillID(), GetCurrentEmail(), 'Deposit');
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
    return _ReceiptCategoryMenu;
}



function ReceiptCategoryMenuHide() {
    _ReceiptCategoryMenu.hide();
    routeReceiptCategoryMenuIsOpen = 'N';
}



function ReceiptCategoryMenuShow() {
    Ext.Viewport.remove(_ReceiptCategoryMenu);
    this.overlay = Ext.Viewport.add(ReceiptCategoryMenu()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeReceiptCategoryMenuIsOpen = 'Y';

}







function FlatBill_UpdateFlatBillReceiptCategory(ID,FlatBillID, FlatBillUpdateBy, FlatBillCategory) {
    
    document.getElementById("receiptstatus").innerHTML = FlatBillCategory;
    Ext.Ajax.request({

        // url: document.location.protocol + '//' + document.location.host + '/API/GeoFence/GeofenceDelete',
        //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillUpdateFlatBillStatus',
        url: GetAPIurl() + '/FlatBill/FlatBillUpdateFlatBillCategory',
        params: {
          
            FlatBillID: FlatBillID,
            FlatBillUpdateBy: FlatBillUpdateBy,
            FlatBillCategory: FlatBillCategory,
            ID: ID,
        },
        success: function (result, request) {

          //  var strStatus = setStatus(FlatBillStatus)
            ReceiptCategoryMenuHide();
            
            setTimeout(function () { LoadingCustomMsgShow('Receipt has been Updated', '3'); }, 1000);
            setTimeout(function () { DetailReceiptMenuShow(); }, 2000);
            
        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });
}

