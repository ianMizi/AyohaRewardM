

Ext.define('ianMizi.view.Receipt.DetailReceipt', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'DetailReceiptList',
    id: 'DetailReceiptID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    zIndex: 20,
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [


            {
                xtype: 'toolbar',
                title: '<font size="4" color="white">Receipt Details</font>',
                docked: 'top',
                id: 'DetailReceipttoolbarTop',
                style: {

                    background: '#f44336',

                },

                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnDetailReceiptHome',
                               iconCls: 'list',
                               ui: 'plain',
                               handler: function () {
                                   DrawerMenuShow();

                               }
                           },
                             
                             {
                                 xtype: 'spacer'
                             },
                                       //{
                                       //    xtype: 'button',
                                       //    margin: '0 -15 0 0',
                                       //    id: 'btnDownloadDetailReceipt',
                                       //    html: '<div ><img src="resources/icons/DownloadReceiptWhite.png" width="33" height="30" alt="Company Name"></div>',
                                       //    ui: 'plain',
                                       //    handler: function () {

                                       //    }
                                       //},
                                        {
                                            xtype: 'button',
                                            id: 'btnNotificationDetailReceipt',
                                           // badgeText: '1',
                                            html: '<div ><img src="resources/icons/Notification.png" width="30" height="30" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                                loadNotificationSummary();
                                            }
                                        },


                       ]
            },


            {
                xtype: 'container',
                 hidden:true,
                height:20,
                style: 'border-bottom:1px solid;background-color:#f44336;',
                layout: {
                    type: 'hbox',
                    pack:'center'
                },
                items: [
             {
                 xtype: 'label',
                hidden:true,
                 id: 'imgDetailReceiptStatus',
                 html: '<img src="resources/icons/ConfirmReceipt.png" style="width: 32px; height: 32px;" />'
             },

               {
                   xtype: 'label',
                   id: 'lblStatusDetailReceipt',
                  
                   margin: '-5 0 0 0',
                   html: '<u>Confirm</u>'
               },
              
                {
                    xtype: 'label',
                    id: 'lblUpdateDateDetailReceipt',

                    margin: '-5 0 0 0',
                    html: ''
                },
               
                ]
            },



              {
                  xtype: 'container',
                  //    style: 'border-bottom:1px solid;background-color:white;',
                  style: 'background-image: url("resources/icons/generatereceiptback.png"); background-size: 100% 100%;border-bottom:1px none;',
                  height: '100%',
                  layout: {
                      type: 'vbox'
                  },
                  scrollable: {
                      direction: 'vertical',
                      directionLock: true
                  },
                  items: [
               {
                   xtype: 'panel',
                   width: '100%',
                
                id: 'panelDetailReceipt',
            //    html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;height:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:inherit;background-color:#37474f"></th></tr></table>',
              //  html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="4">  <img src="resources/icons/CloudReceipt5.png" style="display: inline-block; width: 92px; height: 92px; margin-top: 0px; " /><br>FIRTS MOTOR<br>No.62, Jalan Jujur,Bandar Tun Razak,56000 Cheras,Kuala Lumpur.<br>(112356-W)<br>Tel No:017564884</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="4">Receipt:#BN0001080<br>Date:9/30/2017 10:14:54 PM<br>Customer Name:TARMIZI BIN RAHIM<br>Plate Number:WA4465W-(1564879 KM)<br>GST No:12454544<br>Tax Invoice:22454488<br>Type:Cash<br>Issued By:Admin_00000014</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Description                                   </td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center">Qty </td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center">Price</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center">Amount</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">ENGINE OIL</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">1</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">80</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">80</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="3">Subtotal:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">80</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="3">GST 6%:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">6</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="3">Total:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">86</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="3">Deposit:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">0</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="3">Balance:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">0</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="4">This receipts generated by system no sign required.<br>GENERATE BY CLOUD-RECEIPT.COM</td></tr></table>',
                  // html: '<table style="border-collapse:collapse;border-spacing:0; width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right">LOGO</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal" colspan="4">ASLAM WORKSHOP <br>SDN BHD<br>(1145795)<br>NO 41 PARIT HUSSIN,<br>34300 BAGAN SERAI.<br>PERAK <br>Phone: 0133376958</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="5">    **********************************************************</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right">Date:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal" colspan="4">9/22/2017 6:09:38 AM</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:100%;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right">Receipt:</td><td style="font-family:Arial, sans-serif;font-size:100%;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal" colspan="4">#BN0000070</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right">Customer Name :</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal" colspan="4">AZULIANA BT MUHAMMAD</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">Plate Number:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">WNP4465-(154897 KM)</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">GST No:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">13557688-PHJS</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">TAX Invoice:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">23423423</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">IssuedBy:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">Aina</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="5">     *********************************************************</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="2">Description                                   </td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right">    Qty</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">Price</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">Amount</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="2">Engine Oil</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">1</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">80</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">80</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="4">Subtotal:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="4">GST 6%:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:22px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-align:right;vertical-align:top" colspan="4">Total:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="4">Deposit:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="4">Balance:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="5">    **********************************************************</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="5">This receipts generated by system no sign required.<br>Generated by CLOUD-RECEIPTS.COM</td></tr></table>'
               },

                 

                 
                  ]
              },

         


          

        ]
    },
    //initialize: function () {
      
    //}
});


var TemplateHeader;
var TemplateDescription;
var TemplateDetails;
var TemplateAdvertisement ;
var TemplateFooter

function generateReceipts(EnterpriseAccNo, BillID) {

    console.log(EnterpriseAccNo);
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('ReceiptTemplateGetByEnterpriseAccNo').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccNo

        });
        Ext.StoreMgr.get('ReceiptTemplateGetByEnterpriseAccNo').load();
        //var myStore = Ext.getStore('FlatBillDetailByBillIDStore');
        //var count = myStore.getCount();
        var myStore = Ext.getStore('ReceiptTemplateGetByEnterpriseAccNo');

        var modelRecord = myStore.getAt(0);

        var ID = modelRecord.get('ID');
         TemplateHeader = modelRecord.get('TemplateHeader');
         TemplateDescription = modelRecord.get('TemplateDescription');
         TemplateDetails = modelRecord.get('TemplateDetails');
         TemplateAdvertisement = modelRecord.get('TemplateAdvertisement');
         TemplateFooter = modelRecord.get('TemplateFooter');
        var TemplateType = modelRecord.get('TemplateType');
        var Status = modelRecord.get('Status');
        var CreatedDate = modelRecord.get('CreatedDate');
        var TagNote = modelRecord.get('TagNote');
        var TemplateCode = modelRecord.get('TemplateCode');

        Ext.Viewport.setMasked(false);
       
    });
    task.delay(2000);













  
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
            BillID: BillID

        });
        Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
        var myStore = Ext.getStore('FlatBillDetailByBillIDStore');

        var modelRecord = myStore.getAt(0);

        var ID = modelRecord.get('ID');
        var FlatBillDesc = modelRecord.get('FlatBillDesc');;
        var FlatBillDate = modelRecord.get('FlatBillDate');
        var FlatBillPlatNo = modelRecord.get('FlatBillPlatNo');
        var FlatBillWorkshop = modelRecord.get('FlatBillWorkshop');
        var FlatBillWorkshopID = modelRecord.get('FlatBillWorkshopID');
        var FlatBillIssuedBy = modelRecord.get('FlatBillIssuedBy');
        var FlatBillID = modelRecord.get('FlatBillID');
        var FlatBillTotalAmount = modelRecord.get('FlatBillTotalAmount');
        var FlatBillNumberIC = modelRecord.get('FlatBillNumberIC');
        var FlatBillVehicleModel = modelRecord.get('FlatBillVehicleModel');
        var FlatBillImgLogo = modelRecord.get('FlatBillImgLogo');
        var FlatBillStatus = modelRecord.get('FlatBillStatus');
        var FlatBillUpdateDate = modelRecord.get('FlatBillUpdateDate');
        var FlatBillUpdateBy = modelRecord.get('FlatBillUpdateBy');
        var CloudreceiptAccNo = modelRecord.get('CloudreceiptAccNo');
        var FlatBillFinalAmount = modelRecord.get('FlatBillFinalAmount');
        var FlatBillTax = modelRecord.get('FlatBillTax');
        var FlatBillBalance = modelRecord.get('FlatBillBalance');
        var FlatBillDeposit = modelRecord.get('FlatBillDeposit');
        var FlatBillMilage = modelRecord.get('FlatBillMilage');
        var FlatBillGSTNo = modelRecord.get('FlatBillGSTNo');
        var FlatBillTaxInvoice = modelRecord.get('FlatBillTaxInvoice');
        var FlatBillBillNo = modelRecord.get('FlatBillBillNo');
        var FlatBillCustomerName = modelRecord.get('FlatBillCustomerName');

        var FlatBillWorkShopAddress = modelRecord.get('FlatBillWorkShopAddress');
        var FlatBillWorkshopPhoneNo = modelRecord.get('FlatBillWorkshopPhoneNo');
        var FlatBillCompanyNumber = modelRecord.get('FlatBillCompanyNumber');
        var FlatBillPaymentType = modelRecord.get('FlatBillPaymentType');
        var tbltdDesc;

       

        var spliter1 = FlatBillDesc.split('|');
        var i;
        var no = 1;
        for (i = 0; i < spliter1.length - 1; i++) {

            var s = spliter1[i];
            while (s.charAt(0) === ',') {
                s = s.substr(1);

            }



            var spliter2 = s.split(',');
            var Description = spliter2[0];
            var Quantity = spliter2[1];
            var Price = spliter2[2];
            var Amount = spliter2[3];


            // ori  tbltdDesc += '<tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">' + Description + '</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">' + Quantity + '</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">' + Price + '</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">' + Amount + '</td></tr>';
            //tbltdDesc += ' <tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">' + no + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">' + Description + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">' + Quantity + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">' + Price + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center">' + Amount + '</td></tr>';
            //TEMPLATE DESCRIPTION
            tbltdDesc += '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;font-weight:bold;' + TemplateDescription + '">' + no + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Description + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Quantity + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;' + TemplateDescription + '">' + Price + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;font-weight:bold;' + TemplateDescription + '">' + Amount + '</td></tr>';

            no++;

        }

      



        //TEMPLATE HEADER
        Ext.getCmp('panelDetailReceipt').setHtml('<table style="border-collapse:collapse;border-spacing:0">' +
         '<tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;' + TemplateHeader + '" colspan="2" rowspan="2" ><img src="' + FlatBillImgLogo + '" style="display: inline-block; width: 172px; height: 92px; margin-top: 0px; " /><br>' + FlatBillWorkshop + '<br>' + FlatBillWorkShopAddress + '<br>(' + FlatBillCompanyNumber + ')' + '<br>Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:center;text-align:center;background-color:#37474f;color:white" colspan="3"><u>Official Receipt</u></th></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:center;text-align:center;' + TemplateHeader + '" colspan="3"><img src="resources/icons/qrcodeReceipts.jpg" style="width: 100px; height: 100px; border:1px none white;" /><br>Scanning QR Code to<br> verify genuine receipt</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 2px 0px 0px 0px;overflow:hidden;word-break:normal;' + TemplateDescription + '" colspan="5"><br>Received Payment From:<br><b>' + FlatBillCustomerName.toUpperCase() + '</b><br><br>Date On:<b>' + FlatBillDate + '</b><br><br></td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;' + TemplateDescription + '" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br>being payment for :<br><br></td></tr>' +
            '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;' + TemplateDescription + '">No</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;' + TemplateDescription + '">Description</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;' + TemplateDescription + '">Qty</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;' + TemplateDescription + '">Price(RM)</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;' + TemplateDescription + '">Amount(RM)</td></tr>' +
           tbltdDesc.replace("undefined", "") +
       //TEMPLATE DETAILS
       '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;' + TemplateDetails + '">SubTotal(RM):</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;text-align:center;font-weight:bold;' + TemplateDetails + '">' + FlatBillTotalAmount + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;;background-color:#f5f5f5;color:#616161">GST(6%):</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + FlatBillTax + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:24px;padding:0px 0px;border-style:none;border: 1px solid black; border-width: 1px 0px 1px 0px;;overflow:hidden;word-break:normal;font-weight:bold;text-align:right;vertical-align:top;background-color:#f5f5f5;color:#616161">Total:</td><td style="font-family:Arial, sans-serif;font-size:20px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 1px 0px;overflow:hidden;word-break:normal;font-weight:bold;text-align:left;vertical-align:middle;background-color:#f5f5f5;color:#616161">' + FlatBillFinalAmount + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;;background-color:#f5f5f5;color:#616161">Deposite:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + FlatBillDeposit + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;background-color:#f5f5f5;color:#616161">Balance:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;background-color:#f5f5f5;color:#616161">' + FlatBillBalance + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161" colspan="2"><br>Payment Type:<b>' + FlatBillPaymentType + '</b><br>Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br>Receipt No:<b>' + FlatBillBillNo + '</b><br>Invoice No:<b>' + FlatBillTaxInvoice + '</b><br>GST No:<b>' + FlatBillGSTNo + '</b><br>Date:<b>' + FlatBillDate + '</b><br>Account No:<b>NA</b><br>Plat Number:<b>' + FlatBillPlatNo + '</b><br>Milage:<b>' + FlatBillMilage + ' KM</b><br></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;background-color:#f5f5f5;color:#616161"></td></tr>' +
        //TEMPLATE ADVERTISMENT
       '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 2px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#f5f5f5;color:#616161" colspan="5"><img src=" ' + TemplateAdvertisement + '" style="width: 100%; height: 185px; border:1px none white;" /><img src="' + TemplateFooter + '" style="width:  100%; height: 135px; border:1px none white;" /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="5"></td></tr>' +
        //TEMPLATE FOOTER
      '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#f5f5f5;color:#616161" colspan="5">This receipt generated by system no sign required.<br>GENERATED BY CLOUD-RECEIPT.COM<br><br></td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#37474f;color:white" colspan="5">ianMizi Technology Solution-Cyberjaya,MALAYSIA</td></tr></table>');





        Ext.Viewport.setMasked(false);
        LoadingPanelHide();
    });
    task.delay(2000);

}









function CreateQRCode(billIDs, templatecodes) {
    //var billIDs = (getUrlParameter('BillID')); // "1234"
    //var templatecodes = (getUrlParameter('TemplateCode')); // "edit"
    //   var srcUrl = 'https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';
    jQuery('#qrcodeCanvas').qrcode({
        //text: "http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
        text: 'http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes
    });

    var can = document.getElementsByTagName("canvas");
    var src = can[0].toDataURL("image/png");
    console.log("QRCodeImg" + src);
    localStorage.setItem('QRCodeImg', src);
}









//function detailReceiptProcess2(BillDesc)
//{
//    var tbltdDesc;
//    var tbltdQty;
//    var tbltdPrice;
//    var tbltdAmount;

//    var spliter2 = BillDesc.split(',');
//    var Description = spliter2[0];
//    var Quantity = spliter2[1];
//    var Price = spliter2[2];
//    var Amount = spliter2[3];
//    tbltdDesc += '<tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="2">' + Description + '</td>';
//    tbltdQty += '<td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">' + Quantity + '</td>';
//    tbltdPrice += '<td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">' + Price + '</td>';
//    tbltdAmount += '<td style="font-family:Arial, sans-serif;font-size:14px;padding:3px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top">' + Amount + '</td></tr>';
//  //  alert(Description + '-' + Quantity + '-' + Price + '-' + Amount);
//    alert(tbltdDesc);
//}