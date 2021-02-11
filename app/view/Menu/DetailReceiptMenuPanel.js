Ext.define('ianMizi.view.Menu.DetailReceiptMenuPanel', {

});

var IsDetailReceiptMenuPanelShow = 'No';
var btnDetailReceiptMenuPanelInfoisClick = 'No';

var _DetailReceiptMenuPanel;

function DetailReceiptMenuPanel() {
    _DetailReceiptMenuPanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 1,
          width: 1,
          id: 'DetailReceiptMenuPanelID',
          draggable: false,
          // dock:'bottom',
          //   left: -10,


        //  right: 325,
          right:-3,

          //  margin:'0 0 -130 0',
          // top: 80,
          bottom: 110,
          //  right: -155,

          modal: false,
          hideOnMaskTap: true,
          //  center:true,
          //bottom: 64,
          zIndex: 60,
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
       //   style: 'border-bottom:1px none;background-color:#353839;',
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
                      xtype: 'container',
                      style: 'background-color: transparent;',
                      layout: {
                          type: 'hbox',
                          pack: 'right',
                          align: 'end'
                      },
                      items: [

                           {
                               xtype: 'button',
                               id: 'btnDetailReceiptMenuPanelReceiptCategory',
                               height: 75,
                               width: 72,
                               html: '<img src="resources/icons/ReceiptCategoryRed.png" width="65" height="65" alt="Company Name">',
                               //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   ReceiptCategoryMenuShow();
                                   //StatusDetailReceiptMenuHide();
                                   //StatusMenuShow();



                               }
                           },
                         {
                            //xtype: 'button',
                             id: 'btnDetailReceiptMenuPanelPrint',
                             margin:'0 0 0 5',

                             //height: 75,
                             //width: 72,
                        //     html: '<img src="resources/icons/RedPrint.png" width="65" height="65" alt="Company Name">',
                             html: '<a href="http://42.1.63.57/PrintLink/?BillID='+FlatBillID+'&TemplateCode='+ReceiptTemplateCode+'" target="_blank"><img src="resources/icons/RedPrint.png" width="65" height="65" alt="Company Name"></a>',
                             //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                           // ui: 'plain',
                           // handler: function () {

                           //      //  GeneratePrintReceipt(FlatBillID, ReceiptTemplateCode);

                           ////      window.open("http://42.1.63.57/PrintLink/?BillID=' + FlatBillID + '&TemplateCode=' + ReceiptTemplateCode");
                           //     // testprintPDF();


                           //  }
                         },
                         {
                             xtype: 'button',
                             id: 'btnDetailReceiptMenuPanelInfo',
                             height: 75,
                             width: 72,
                             html: '<img src="resources/icons/RedInfo.png" width="65" height="65" alt="Company Name">',
                             //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {
                                 btnDetailReceiptMenuPanelInfoisClick = 'Yes';
                                 Ext.getCmp('btnDetailReceiptMenu').setHtml('<img src="resources/icons/BackRed.png" width="65" height="65" alt="Company Name">');
                                 DetailReceiptMenuPanelHide();
                                 loadEnterpriseDetailsFromDetailsReceiptMenu();

                                


                             }
                         },
                          {
                              xtype: 'button',
                              id: 'btnDetailReceiptMenuPanelShare',
                              height: 85,
                              width: 72,
                              html: '<img src="resources/icons/shareredPro.png" width="65" height="77" alt="Company Name">',
                              //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                              ui: 'plain',
                              handler: function () {
                                  LoadingCustomMsgShow('SHARE<br>Not Available.<br>Upgrade Pro!', '1');
                                  //StatusDetailReceiptMenuHide();
                                  //StatusMenuShow();



                              }
                          },
                          {
                              xtype: 'button',
                              id: 'btnDetailReceiptMenuPanelSearch',
                            //  hidden:true,
                              height: 75,
                              width: 72,
                              html: '<img src="resources/icons/RedSearch.png" width="65" height="65" alt="Company Name">',
                              //   html: '<div ><img src="resources/icons/DetailsPoint.png" width="45" height="45" alt="Company Name"></div>',
                              ui: 'plain',
                              handler: function () {

                                  //StatusDetailReceiptMenuHide();
                                  //StatusMenuShow();
                                  DetailReceiptMenuPanelHide();
                                  if (_StatusDetailReceiptMenusIsShow == 'Yes')
                                  { StatusDetailReceiptMenuHide(); }

                                  if (IsDetailReceiptMenuShow == 'Yes')
                                  { DetailReceiptMenuHide(); }

                                  if (IsDetailReceiptMenuPanelShow == 'Yes') {
                                      DetailReceiptMenuPanelHide();
                                  }
                                  routeCurrPage = '7';
                                  createSliderTotalPaidRange();
                                  Ext.getCmp('mainView').setActiveItem(7);
                                  GanerateCalender();

                              }
                          },
                            {
                                xtype: 'button',
                                //   align: 'stretch',
                                height: 45,
                                width: 45,
                                id: 'btnCloseDetailReceiptMenuPanel',
                                ui: 'plain',
                                margin: '0 0 70 -40',
                                html: '<img src="resources/icons/BtnCloseNew.png" style="width: 35px; height: 35px;" />',
                                handler: function () {

                                    DetailReceiptMenuPanelHide();
                                    DetailReceiptMenuShow();
                                }
                            },

                      ]
                  },


                     
              ]

          },


      });
    return _DetailReceiptMenuPanel;
}



function DetailReceiptMenuPanelHide() {

  

    if (IsDetailReceiptMenuPanelShow == 'Yes') {
        _DetailReceiptMenuPanel.hide();
        routeDetailReceiptMenuPanelIsOpen = 'N';
    }


    IsDetailReceiptMenuPanelShow = 'No';


}



function DetailReceiptMenuPanelShow() {
    IsDetailReceiptMenuPanelShow = 'Yes';
    Ext.Viewport.remove(_DetailReceiptMenuPanel);
    this.overlay = Ext.Viewport.add(DetailReceiptMenuPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeDetailReceiptMenuPanelIsOpen = 'Y';
    DetailReceiptMenuHide();
}


function loadEnterpriseDetailsFromDetailsReceiptMenu() {

    console.log(GetCurrCloudReceiptAccount());
    Ext.getCmp('mainView').setActiveItem(10);
    Ext.getCmp('fieldsetEnterpriseSubscriptions').setHidden(true);
    
    Ext.getStore('EnterprisegetDetailsStore').getProxy().setExtraParams({
        ID: 1,
        EnterpriseAccNo: GetCurrCloudReceiptAccount(),
        SubcriberAccNo: GetCurrentAccountNo()
    });
    Ext.StoreMgr.get('EnterprisegetDetailsStore').load();
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisegetDetailsStore').getProxy().setExtraParams({
            ID: 1,
            EnterpriseAccNo: GetCurrCloudReceiptAccount(),
            SubcriberAccNo: GetCurrentAccountNo()
        });
        Ext.StoreMgr.get('EnterprisegetDetailsStore').load();
        var myStore = Ext.getStore('EnterprisegetDetailsStore');
        var modelRecord = myStore.getAt(0);

        var EnterpriseName = modelRecord.get('EnterpriseName');
        console.log(EnterpriseName);
        Ext.getCmp('EnterpriseDetailsIDtxt').setValue(modelRecord.get('ID'));
        Ext.getCmp('EnterpriseDetailsAccountNo').setValue(modelRecord.get('EnterpriseAccNo'));
        Ext.getCmp('EnterpriseDetailsName').setValue(EnterpriseName);
        Ext.getCmp('EnterpriseDetailsAddress').setValue(modelRecord.get('EnterpriseAddress'));
        Ext.getCmp('EnterpriseDetailsRegistrationNo').setValue(modelRecord.get('EnterpriseRegistrationNo'));
        Ext.getCmp('EnterpriseDetailsGSTNo').setValue(modelRecord.get('EnterpriseGSTNo'));
        Ext.getCmp('EnterpriseDetailsPhoneNo').setValue(modelRecord.get('EnterprisePhoneNo'));
        Ext.getCmp('EnterpriseDetailsFaxNo').setValue(modelRecord.get('EnterpriseFaxNo'));
        Ext.getCmp('EnterpriseDetailsEmail').setValue(modelRecord.get('EnterpriseEmail'));
        Ext.getCmp('EnterpriseDetailsWebsite').setValue(modelRecord.get('EnterpriseWebsite'));
        Ext.getCmp('EnterpriseDetailsCreatedDate').setValue(modelRecord.get('CreatedDate'));
        Ext.getCmp('EnterpriseDetailsStatus').setValue(modelRecord.get('Status'));
        Ext.getCmp('EnterpriseDetailsDescriptions').setValue(modelRecord.get('EnterpriseDescriptions'));
        Ext.getCmp('PictureLogoEnterpriseDetails').setSrc(modelRecord.get('EnterpriseLogo64'));



        //var CR_ID = modelRecord.get('ID');
        //Ext.getCmp('CR_VerificationCodeString').setValue(VerifyString);
        //Ext.getCmp('CR_ID').setValue(CR_ID);
        //var PhoneNo = Ext.getCmp('CR_PhoneNumber').getValue();
        //sendSMSverifycode(PhoneNo, VerifyString)
        routeCurrPage = '10';
        Ext.Viewport.setMasked(false);

        LoadingPanelHide();


    });
    task.delay(2000);

}
