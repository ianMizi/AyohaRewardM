//Ext.define('ReceiptsWorld.view.Receipt.SummaryReceipt', {
//    extend: 'Ext.List',
//    xtype: 'SummaryReceipt-list',


//    config: {
//        store: 'ReceiptGetByIcStore',
//        disableSelection: true,
//        grouped: true,
//        cls: ['SummaryReceipt-list'],


//        itemTpl: [
//            '<h4>{Description}</h4>'
//        ]
//    }
//});






//var billID;

Ext.define('ianMizi.view.Receipt.SummaryReceipt', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'SummaryReceiptList',
    id: 'SummaryReceiptID',
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
                title: '<font size="4" color="white">Cloud Receipts</font>',
                docked: 'top',
                id: 'SummaryReceipttoolbarTop',
                style: {

                    background: '#f44336',

                },
                
                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnSummaryReceiptHome',
                                 iconCls: 'list',
                             //  html: '<div ><img src="resources/icons/ListIcon.png" width="30" height="30" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   DrawerMenuShow();
                                 
                               }
                           },
                             {
                                 xtype: 'spacer'
                             },
                                       {
                                           xtype: 'button',
                                           hidden:true,
                                           margin:'0 -10 0 0',
                                           id: 'btnSearchSummaryReceipt',
                                           html: '<div ><img src="resources/icons/searchicon.png" width="30" height="30" alt="Company Name"></div>',
                                           ui: 'plain',
                                           handler: function () {
                                                alert( GetCurrentMonth())
                                           
                                           }
                                       },
                                        {
                                            xtype: 'button',
                                            id: 'btnNotificationSummaryReceipt',
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
            //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
                style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
                //   style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                //style: {
                //    backgroundImage: 'url(resources/icons/border7.png)',
                //    backgroundRepeat: 'no-repeat',
                //    //backgroundPosition: 'center'
                //    backgroundSize: 'cover'
                //},
                height:34,
                layout: {
                    type: 'hbox'
                },
                items: [
             {
                 xtype: 'label',
               //  hidden: true,
                 id:'imgReceiptStatus',
                 html: '<img src="resources/icons/newreceiptred.png" style="width: 32px; height: 32px;" />'
             },
             
               {
                   xtype: 'label',
                   id: 'lblCountReceipt',
                  // hidden:true,
                  margin:'5 0 0 0',
                  html: '<font size="2" color="black">Receipts-(?)</font>'
               },

                {
                    xtype: 'spacer',
                  
                }, {
                    xtype: 'label',
                    id: 'lblYear',
                    margin: '5 0 0 0',
                    html: '2017-'
                },
               {
                   xtype: 'label',
                   id: 'lblMonth',
                   margin: '5 0 0 0',
                   html: 'September '
               },
                ]
            },


 {
     xtype: 'list',
     flex: 1,
     store: 'FlatBillGetByIcStore',
     id: 'FlatBillGetByIcStoreConfirmID',
     hidden:true,
     mode: 'SINGLE',
     disableSelection: true,
     //itemTpl: '<div class="myContent">' +
     //     '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:bottom" colspan="3"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 3px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom"><br>Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2"><br>Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 16px;margin: -10px 2px 0px 5px;cursor: pointer;" >Receipt Detail</div></td></tr></table>' +
     //      '</div>',
     itemTpl: '<div class="myContent">' +
            //  '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3"><div style="background-color: #78E1F8; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >Confirm</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
           //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#26ade4;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:white" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:white"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:white">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
           '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#26ade4;" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #26ade4; color: white; padding: 5px 2px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px" >Confirm</div>{FlatBillWorkshop}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Date:{FlatBillDate}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
          //   '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-image: url(resources/icons/Picture62.jpg);background-repeat:no-repeat;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: 26ade4; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >Confirm</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +



            //tiada border '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#26ade4;" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #26ade4; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >Confirm</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

            '</div>',
     height: '100%',
     listeners: {
         itemsingletap: function (list, idx, target, records, evt) {
             LoadingPanelShow();
             Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
             Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
             Ext.getCmp('mainView').setActiveItem(2);
             FlatBillID_ID = records.get('ID');
             FlatBillID = records.get('FlatBillID');
             FlatBillStatus = records.get('FlatBillStatus');
             FlatBillUpdateDate = records.get('FlatBillUpdateDate');
             CloudreceiptAccNo = records.get('CloudreceiptAccNo');
             ReceiptTemplateCode = records.get('ReceiptTemplateCode');
             localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
             Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(false);
             Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/ConfirmReceipt.png" style="width: 32px; height: 32px;" />');
             Ext.getCmp('lblStatusDetailReceipt').setHtml('<div><font size="3" color="blue"><b>Confirm  On:</b></font></div>');
             Ext.getCmp('lblUpdateDateDetailReceipt').setHtml('<div><font size="3" color="blue"><b>' + FlatBillUpdateDate + '</b></font></div>');
             var CurrFlatBillStatusAndCategory = '<b>Confirm  On:</b>' + Formateddated(FlatBillUpdateDate);
             localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
             directedMenu('Confirm');
             Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                 BillID: FlatBillID
             });
             Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


             Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                 TemplateCode: ReceiptTemplateCode

             });
             Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
             GenerateReceipt(FlatBillID, ReceiptTemplateCode);
            
             // detailsReceiptsprocess(FlatBillID);
            // generateReceipts(CloudreceiptAccNo, FlatBillID);
           
         },
         deselect: function (list, records) {

         }
     },

 },



         {
             xtype: 'list',
             flex: 1,
             store: 'FlatBillGetByIcStore',
             id: 'FlatBillGetByIcStoreNewID',
             mode: 'SINGLE',    
             disableSelection: true,                 
             itemTpl: '<div class="myContent">' +
                 // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                 //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                  // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                 //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
               // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
              //backgroundimage '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-image: url(resources/icons/backgroundlistdowngrades.jpg);background-repeat:no-repeat;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >New</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
               

               
             
               // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
            //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


               '</div>',
             height: '100%',        
             listeners: {
                 itemsingletap: function (list, idx, target, records, evt) {
                     LoadingPanelShow();
                     Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                     Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                     Ext.getCmp('mainView').setActiveItem(2);
                     Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                     Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                     FlatBillID_ID = records.get('ID');
                     FlatBillID = records.get('FlatBillID');
                     FlatBillStatus = records.get('FlatBillStatus');
                     FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                     CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                     ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                     localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                     Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                     var CurrFlatBillStatusAndCategory = '<b>New</b>';
                     localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                     //StatusDetailReceiptMenuShow();
                     directedMenu('New');
                     Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                         BillID: FlatBillID
                     });
                     Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                     Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                         TemplateCode: ReceiptTemplateCode

                     });
                     Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                     GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                     // detailsReceiptsprocess(FlatBillID);
                    // generateReceipts(CloudreceiptAccNo, FlatBillID);



                   //  detailsReceiptsprocess(FlatBillID);
                   
                 },
                 deselect: function (list, records) {                  

                 }
             },

         },
          {
              xtype: 'list',
              flex: 1,
              store: 'FlatBillGetByIcStore',
              id: 'FlatBillGetByIcStoreVoidID',
              hidden: true,
              mode: 'SINGLE',
              disableSelection: true,
              itemTpl: '<div class="myContent">' +
               //  '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FA4646;text-align:center;vertical-align:top" colspan="3"><div style="background-color: red; color: white; padding: 5px 8px;text-align: center;border:1px none white; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >Void</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FA4646;text-align:center;vertical-align:top" colspan="3"><strike>{FlatBillWorkshop}</strike></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FA4646;text-align:center;vertical-align:top" colspan="3"><strike>{FlatBillCompanyNumber}</strike></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FA4646;vertical-align:bottom"><strike>Date:{FlatBillDate}</strike></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FA4646;text-align:right;vertical-align:bottom" colspan="2"><strike>Issued By:{FlatBillIssuedBy}</strike></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><strike><u>Total Paid:</u></strike></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><strike><u>RM {FlatBillFinalAmount}</u></strike></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
               '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#D25959;" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #D25959; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px" >Void</div><strike>{FlatBillWorkshop}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Date:{FlatBillDate}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</strike></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#353839;color:white;"><strike>Total Paid:RM{FlatBillFinalAmount}</strike></td></tr></table>' +
             //tiada border  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#D25959;" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #D25959; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >Void</div><strike>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</strike></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#353839;color:white;"><strike>Total Paid:RM{FlatBillFinalAmount}</strike></td></tr></table>' +


                '</div>',
              height: '100%',
              listeners: {
                  itemsingletap: function (list, idx, target, records, evt) {
                      LoadingPanelShow();
                      Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                      Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                      Ext.getCmp('mainView').setActiveItem(2);
                      FlatBillID_ID = records.get('ID');
                      FlatBillID = records.get('FlatBillID');
                      FlatBillStatus = records.get('FlatBillStatus');
                      FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                      CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                      ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                      Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(false);
                      localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                    //  Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/cancelReceipt1.png" style="width: 32px; height: 32px;" />');
                      Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="2" color="white"><b>Rejected  On:</b></font></div>');
                      Ext.getCmp('lblUpdateDateDetailReceipt').setHtml('<div class="blink_me"><font size="2" color="white"><b>' + FlatBillUpdateDate + '</b></font></div>');
                      directedMenu('Rejected');
                      
                      var CurrFlatBillStatusAndCategory = '<b>Rejected  On:</b>' + Formateddated(FlatBillUpdateDate);
                      localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                      
                      Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                          BillID: FlatBillID
                      });
                      Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();



                      Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                          TemplateCode: ReceiptTemplateCode

                      });
                      Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                      GenerateReceipt(FlatBillID, ReceiptTemplateCode);
                      
                   // ReceiptStatusCategoryPanelShow();


                     // detailsReceiptsprocess(FlatBillID);
                    
                  },
                  deselect: function (list, records) {

                  }
              },

          },


          {
              xtype: 'list',
              flex: 1,
              store: 'FlatBillGetByIcStore',
              id: 'FlatBillGetByIcStoreClaimableID',
              mode: 'SINGLE',
              hidden: true,
              disableSelection: true,
              itemTpl: '<div class="myContent">' +
                  // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                  //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                   // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                  //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
               // ada status '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >Claimable</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

                '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 92px; height: 72px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><b><u>{FlatBillWorkshop}</u></b><br><b>Date:</b>{FlatBillDate}<br><b>Desc:</b>{FlatBillShotDesc}<br><b>Account No:</b>{FlatBillAccountNo}<br><b>Amount:</b>RM{FlatBillTotalAmount} | <b>Tax:</b>RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

                // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
             //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                '</div>',
              height: '100%',
              listeners: {
                  itemsingletap: function (list, idx, target, records, evt) {
                      LoadingPanelShow();
                      Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                      Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                      Ext.getCmp('mainView').setActiveItem(2);
                      Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                      Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                      FlatBillID_ID = records.get('ID');
                      FlatBillID = records.get('FlatBillID');
                      FlatBillStatus = records.get('FlatBillStatus');
                      FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                      CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                      ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                      localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                      var CurrFlatBillStatusAndCategory = '<b>Claimable</b>';
                      localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                      Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                    //  StatusDetailReceiptMenuShow();
                      directedMenu('Claimable');
                      Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                          BillID: FlatBillID
                      });
                      Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                      Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                          TemplateCode: ReceiptTemplateCode

                      });
                      Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                      GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                      // detailsReceiptsprocess(FlatBillID);
                      // generateReceipts(CloudreceiptAccNo, FlatBillID);



                      //  detailsReceiptsprocess(FlatBillID);

                  },
                  deselect: function (list, records) {

                  }
              },

          },
           {
               xtype: 'list',
               flex: 1,
               store: 'FlatBillGetByIcStore',
               id: 'FlatBillGetByIcStoreDepositeID',
               mode: 'SINGLE',
               hidden:true,
               disableSelection: true,
               itemTpl: '<div class="myContent">' +
                   // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                   //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                    // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                   //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                 // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
               // ada status  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >Deposit</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                 '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 92px; height: 72px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><b><u>{FlatBillWorkshop}</u></b><br><b>Date:</b>{FlatBillDate}<br><b>Desc:</b>{FlatBillShotDesc}<br><b>Account No:</b>{FlatBillAccountNo}<br><b>Amount:</b>RM{FlatBillTotalAmount} | <b>Tax:</b>RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
              //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 '</div>',
               height: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {
                       LoadingPanelShow();
                       Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                       Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                       Ext.getCmp('mainView').setActiveItem(2);
                       Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                       Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                       FlatBillID_ID = records.get('ID');
                       FlatBillID = records.get('FlatBillID');
                       FlatBillStatus = records.get('FlatBillStatus');
                       FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                       CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                       ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                       localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                       Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                       var CurrFlatBillStatusAndCategory = '<b>Deposit</b>';
                       localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                     //  StatusDetailReceiptMenuShow();
                       directedMenu('Deposit');
                       Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                           BillID: FlatBillID
                       });
                       Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                       Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                           TemplateCode: ReceiptTemplateCode

                       });
                       Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                       GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                       // detailsReceiptsprocess(FlatBillID);
                       // generateReceipts(CloudreceiptAccNo, FlatBillID);



                       //  detailsReceiptsprocess(FlatBillID);

                   },
                   deselect: function (list, records) {

                   }
               },

           },
           {
               xtype: 'list',
               flex: 1,
               store: 'FlatBillGetByIcStore',
               id: 'FlatBillGetByIcStorePartialPaidID',
               mode: 'SINGLE',
               hidden: true,
               disableSelection: true,
               itemTpl: '<div class="myContent">' +
                   // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                   //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                    // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                   //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                 // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
              //ada status   '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >Partial Paid</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 92px; height: 72px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><b><u>{FlatBillWorkshop}</u></b><br><b>Date:</b>{FlatBillDate}<br><b>Desc:</b>{FlatBillShotDesc}<br><b>Account No:</b>{FlatBillAccountNo}<br><b>Amount:</b>RM{FlatBillTotalAmount} | <b>Tax:</b>RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
              //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 '</div>',
               height: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {
                       LoadingPanelShow();
                       Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                       Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                       Ext.getCmp('mainView').setActiveItem(2);
                       Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                       Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                       FlatBillID_ID = records.get('ID');
                       FlatBillID = records.get('FlatBillID');
                       FlatBillStatus = records.get('FlatBillStatus');
                       FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                       CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                       ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                       localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                       Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                       var CurrFlatBillStatusAndCategory = '<b>Partially Paid</b>';
                       localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                      // StatusDetailReceiptMenuShow();
                       directedMenu('Partially Paid');
                       Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                           BillID: FlatBillID
                       });
                       Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                       Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                           TemplateCode: ReceiptTemplateCode

                       });
                       Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                       GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                       // detailsReceiptsprocess(FlatBillID);
                       // generateReceipts(CloudreceiptAccNo, FlatBillID);



                       //  detailsReceiptsprocess(FlatBillID);

                   },
                   deselect: function (list, records) {

                   }
               },

           },

           {
               xtype: 'list',
               flex: 1,
               store: 'FlatBillGetByIcStore',
               id: 'FlatBillGetByIcStoreWarrantyID',
               mode: 'SINGLE',
               hidden: true,
               disableSelection: true,
               itemTpl: '<div class="myContent">' +
                   // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                   //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                    // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                   //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                 // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
              //ada status   '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >Warranty</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 92px; height: 72px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><b><u>{FlatBillWorkshop}</u></b><br><b>Date:</b>{FlatBillDate}<br><b>Desc:</b>{FlatBillShotDesc}<br><b>Account No:</b>{FlatBillAccountNo}<br><b>Amount:</b>RM{FlatBillTotalAmount} | <b>Tax:</b>RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
              //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 '</div>',
               height: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {
                       LoadingPanelShow();
                       Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                       Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                       Ext.getCmp('mainView').setActiveItem(2);
                       Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                       Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                       FlatBillID_ID = records.get('ID');
                       FlatBillID = records.get('FlatBillID');
                       FlatBillStatus = records.get('FlatBillStatus');
                       FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                       CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                       ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                       localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                       var CurrFlatBillStatusAndCategory = '<b>Warranty</b>';
                       localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                       Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                      // StatusDetailReceiptMenuShow();
                       directedMenu('Warranty');
                       Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                           BillID: FlatBillID
                       });
                       Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                       Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                           TemplateCode: ReceiptTemplateCode

                       });
                       Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                       GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                       // detailsReceiptsprocess(FlatBillID);
                       // generateReceipts(CloudreceiptAccNo, FlatBillID);



                       //  detailsReceiptsprocess(FlatBillID);

                   },
                   deselect: function (list, records) {

                   }
               },

           },
           {
               xtype: 'list',
               flex: 1,
               store: 'FlatBillGetByIcStore',
               id: 'FlatBillGetByIcStoreGeneralID',
               mode: 'SINGLE',
               hidden: true,
               disableSelection: true,
               itemTpl: '<div class="myContent">' +
                   // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                   //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                    // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                   //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                 // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f8c3c2;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 190px;cursor: pointer;width:55px;height:22px" >New</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                // ada status '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: white;"><div class="blink_me" style="background-color: red; color: white; padding: 3px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 155px;cursor: pointer;width:85px;height:22px" >General</div><b><u>{FlatBillWorkshop}</u></b><br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:3px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="{FlatBillImgLogo}"style="width: 92px; height: 72px; border:1px none white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><b><u>{FlatBillWorkshop}</u></b><br><b>Date:</b>{FlatBillDate}<br><b>Desc:</b>{FlatBillShotDesc}<br><b>Account No:</b>{FlatBillAccountNo}<br><b>Amount:</b>RM{FlatBillTotalAmount} | <b>Tax:</b>RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 // background="resources/icons/Picture11.jpg" style="background-repeat:no-repeat;"
              //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#f44336;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


                 '</div>',
               height: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {
                       LoadingPanelShow();
                       Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                       Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                       Ext.getCmp('mainView').setActiveItem(2);
                       Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                       Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                       FlatBillID_ID = records.get('ID');
                       FlatBillID = records.get('FlatBillID');
                       FlatBillStatus = records.get('FlatBillStatus');
                       FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                       CloudreceiptAccNo = records.get('CloudreceiptAccNo');
                       ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                       localStorage.setItem('CurrCloudReceiptAccount', records.get('CloudreceiptAccNo'));
                       var CurrFlatBillStatusAndCategory = '<b>General</b>';
                       localStorage.setItem('CurrFlatBillStatusAndCategory', CurrFlatBillStatusAndCategory);
                       Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(true);
                      // StatusDetailReceiptMenuShow();
                       Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                           BillID: FlatBillID
                       });
                       Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();


                       Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                           TemplateCode: ReceiptTemplateCode

                       });
                       Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();

                       directedMenu('General');
                       GenerateReceipt(FlatBillID, ReceiptTemplateCode);

                       // detailsReceiptsprocess(FlatBillID);
                       // generateReceipts(CloudreceiptAccNo, FlatBillID);



                       //  detailsReceiptsprocess(FlatBillID);

                   },
                   deselect: function (list, records) {

                   }
               },

           },
          {
              xtype: 'container',
              id:'containerSummaryreceiptButton',
             // style: 'border-top:1px solid;background-color:#D25959;',
              //style: 'border-top:1px solid;background-color:#f44336;',
              //style: 'border-top:0.5px none;background-color:white; box-shadow: 5px 10px 5px 5px black;',
              //bodyStyle: 'background: #ccc',
             style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;',

             // style: 'background-image: url("resources/icons/BGsummary6.jpg"); background-size: 100% 100%;border-top:1px solid;',

              scrollable: {
                  direction: 'horizontal',
                  directionLock: true
              },
              //style: {
              //    backgroundImage: 'url(resources/icons/border5.png)',
              //    backgroundRepeat: 'no-repeat',
                
              //    //backgroundPosition: 'center'
              //},
              height:50,
              layout: {
                  type: 'hbox',
                  pack: 'center',
                
              },
              items: [
                  {
                      xtype: 'container',
                      margin: '5 0 0 0',
                      layout: {
                          type: 'vbox',
                          //    pack: 'center',

                      },
                      items: [

                             {
                                 xtype: 'button',
                                 align: 'stretch',
                                 id: 'btnNewReceipts',
                                 //height: 42,
                                 //width: 42,
                                 margin:'-4 0 0 0',
                                 ui: 'plain',
                                 html: '<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />',
                                 handler: function () {
                                     //LoadingPanelShow();

                                     //reChangetxtandButton('NewReceipt');
                                    
                                     //loadSummaryReceipt(GetCurrentMyKadNo(), "2", GetCurrentAccountNo(), "Status")
                                     //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
                                     //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                                     routesArray.push("NewReceipt");
                                     loadlistsummaryreceipt('NewReceipt');

                                 }
                             },
                           
                             {
                                 xtype: 'button',
                                 align: 'stretch',
                                 id: 'btnNewReceiptstxt',
                                 ui: 'plain',
                                 margin: '-12 0 0 0',
                                 html: '<font size="2" color="white">New Receipt(s)</font>',
                                 // html: '<font size="5" color="white"><b>|</b></font>',
                                 handler: function () {
                                   

                                     //LoadingPanelShow();
                                     //reChangetxtandButton('NewReceipt');                                  
                                     //loadSummaryReceipt(GetCurrentMyKadNo(), "2", GetCurrentAccountNo(), "Status")
                                     //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
                                     //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                     //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                                     routesArray.push("NewReceipt");
                                     loadlistsummaryreceipt('NewReceipt');


                                 }
                             },

                      ]
                  },

                  {
                      xtype: 'container',
                      margin:'5 0 0 0',
                      layout: {
                          type: 'vbox',
                        //  pack: 'center',

                      },
                      items: [

                          {
                              xtype: 'button',
                              align: 'stretch',
                              id: 'btnClaimableReceipt',
                              //height: 42,
                              //width: 42,
                              margin: '-4 0 0 0',
                             ui: 'plain',
                              html: '<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />',
                              handler: function () {
                                  //LoadingPanelShow();
                                  //reChangetxtandButton('Claimable');
                                  //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(false);
                                  //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                  //loadSummaryReceipt(GetCurrentMyKadNo(), "Claimable", GetCurrentAccountNo(), "Category");
                                  routesArray.push("Claimable");
                                  loadlistsummaryreceipt('Claimable');
                              }
                          },

                  {
                      xtype: 'button',
                      align: 'stretch',
                      id: 'btnClaimableReceipttxt',
                      ui: 'plain',
                      margin: '-12 0 0 0',
                      html: '<font size="2" color="black">Claimable</font>',
                      // html: '<font size="5" color="white"><b>|</b></font>',
                      handler: function () {
                          //LoadingPanelShow();
                          //reChangetxtandButton('Claimable');
                          //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(false);
                          //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                          //loadSummaryReceipt(GetCurrentMyKadNo(), "Claimable", GetCurrentAccountNo(), "Category");
                          routesArray.push("Claimable");
                          loadlistsummaryreceipt('Claimable');
                      }
                  },

                      ]
                  },
                  
                  {
                      xtype: 'container',
                      margin: '5 0 0 0',
                      layout: {
                          type: 'vbox',
                          //  pack: 'center',

                      },
                      items: [

                          {
                              xtype: 'button',
                              align: 'stretch',
                              id: 'btnPartialyPaidReceipt',
                              //height: 42,
                              //width: 42,
                              margin: '-4 0 0 0',
                              ui: 'plain',
                              html: '<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />',
                              handler: function () {
                                  //LoadingPanelShow();
                                  //reChangetxtandButton('Partially Paid');
                                  //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(false);
                                  //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                                  //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                  //loadSummaryReceipt(GetCurrentMyKadNo(), "Partially-Paid", GetCurrentAccountNo(), "Category");
                                  routesArray.push("Partially Paid");
                                  loadlistsummaryreceipt('Partially Paid');
                              }
                          },

                  {
                      xtype: 'button',
                      align: 'stretch',
                      id: 'btnPartialyPaidReceipttxt',
                      ui: 'plain',
                      margin: '-12 0 0 0',
                      html: '<font size="2" color="black">Partially Paid</font>',
                      // html: '<font size="5" color="white"><b>|</b></font>',
                      handler: function () {
                          //LoadingPanelShow();
                          //reChangetxtandButton('Partially Paid');
                          //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(false);
                          //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                          //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                          //loadSummaryReceipt(GetCurrentMyKadNo(), "Partially-Paid", GetCurrentAccountNo(), "Category");
                          routesArray.push("Partially Paid");
                          loadlistsummaryreceipt('Partially Paid');
                      }
                  },

                      ]
                  },


                         {
                             xtype: 'container',
                             margin: '5 0 0 0',
                             layout: {
                                 type: 'vbox',
                             //    pack: 'center',

                             },
                             items: [

                                    {
                                        xtype: 'button',
                                        align: 'stretch',
                                        id: 'btnDepositReceipt',
                                        margin: '-4 0 0 0',
                                        //height: 42,
                                        //width: 42,
                                   //     margin:'0 0 0 22',
                                        ui: 'plain',
                                        html: '<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />',
                                        // html: '<font size="5" color="white"><b>|</b></font>',
                                        handler: function () {
                                            //LoadingPanelShow();
                                            //reChangetxtandButton('Deposit');
                                            //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(false);
                                            //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                            //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                            //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                            //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                                            //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                            //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                                            //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                            //loadSummaryReceipt(GetCurrentMyKadNo(), "Deposit", GetCurrentAccountNo(), "Category");
                                            routesArray.push("Deposit");
                                            loadlistsummaryreceipt('Deposit');
                                        }
                                    },


           {
               xtype: 'button',
               align: 'stretch',
               id: 'btnDeposittxt',
               ui: 'plain',
               margin: '-12 0 0 0',
               html: '<font size="2" color="black">Deposit</font>',
               // html: '<font size="5" color="white"><b>|</b></font>',
               handler: function () {
                   //LoadingPanelShow();
                   //reChangetxtandButton('Deposit');

                   //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(false);
                   //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                   //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                   //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                   //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                   //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                   //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                   //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                   //loadSummaryReceipt(GetCurrentMyKadNo(), "Deposit", GetCurrentAccountNo(), "Category");
                   routesArray.push("Deposit");
                   loadlistsummaryreceipt('Deposit');

               }
           },

                             ]
                         },


                                {
                                    xtype: 'container',
                                    margin: '5 0 0 0',
                                    layout: {
                                        type: 'vbox',
                                      //  pack: 'center',

                                    },
                                    items: [

                                           {
                                               xtype: 'button',
                                               align: 'stretch',
                                               id: 'btnWarrantyReceipt',
                                               margin: '-4 0 0 0',
                                               //height: 42,
                                               //width: 42,
                                              ui: 'plain',
                                              html: '<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />',
                                              handler: function () {
                                                  //LoadingPanelShow();
                                                  // reChangetxtandButton('Warranty');
                                                  // Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                                  // Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                                  // Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                                  // Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(false);
                                                  // Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                                                  // Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                                  // Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                                                  // Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                                  // loadSummaryReceipt(GetCurrentMyKadNo(), "Warranty", GetCurrentAccountNo(), "Category");
                                                  routesArray.push("Warranty");
                                                  loadlistsummaryreceipt('Warranty');
                                               }
                                           },

                {
                    xtype: 'button',
                    align: 'stretch',
                    id: 'btnWarrantytxt',
                    ui: 'plain',
                    margin: '-12 0 0 0',
                    html: '<font size="2" color="black">Warranty</font>',
                    // html: '<font size="5" color="white"><b>|</b></font>',
                    handler: function () {
                        //LoadingPanelShow();
                        //reChangetxtandButton('Warranty');
                        //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(false);
                        //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                        //loadSummaryReceipt(GetCurrentMyKadNo(), "Warranty", GetCurrentAccountNo(), "Category");
                        routesArray.push("Warranty");
                        loadlistsummaryreceipt('Warranty');

                    }
                },

                                    ]
                                },

                                //{
                                //    xtype: 'spacer',
                                //    width:18,
                                //},


                                {
                                    xtype: 'container',
                                    margin: '5 0 0 0',
                                    layout: {
                                        type: 'vbox',
                                    //    pack: 'center',

                                    },
                                    items: [

                                           {
                                               xtype: 'button',
                                               align: 'stretch',
                                               id: 'btnGeneralReceipt',
                                               //height: 42,
                                               //width: 42,
                                               margin: '-4 0 0 0',
                                              ui: 'plain',
                                               html: '<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />',
                                               handler: function () {
                                                   //LoadingPanelShow();
                                                   //reChangetxtandButton('General');
                                                   //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                                                   //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                                                   //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                                                   //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                                                   //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(false);
                                                   //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                                                   //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                                                   //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                                                   //loadSummaryReceipt(GetCurrentMyKadNo(), "General", GetCurrentAccountNo(), "Category");
                                                   routesArray.push("General");
                                                   loadlistsummaryreceipt('General');
                                               }
                                           },

                {
                    xtype: 'button',
                    align: 'stretch',
                    id: 'btnGeneralReceipttxt',
                    ui: 'plain',
                    margin: '-12 0 0 0',
                    html: '<font size="2" color="black">General</font>',
                    // html: '<font size="5" color="white"><b>|</b></font>',
                    handler: function () {
                        //LoadingPanelShow();
                        //reChangetxtandButton('General');
                        //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(false);
                        //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                        //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                        //loadSummaryReceipt(GetCurrentMyKadNo(), "General", GetCurrentAccountNo(), "Category");
                        routesArray.push("General");
                        loadlistsummaryreceipt('General');
                    }
                },

                                    ]
                                },


               

                  

                  {
                      xtype: 'container',
                      margin: '5 0 0 0',
                      layout: {
                          type: 'vbox',
                          //    pack: 'center',

                      },
                      items: [

                             {
                                 xtype: 'button',
                                 align: 'stretch',
                                 id: 'btnSearchReceipt',
                                 //height: 42,
                                 //width: 42,
                                 margin: '-4 0 0 0',
                                 ui: 'plain',
                                 html: '<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />',
                                 handler: function () {
                                     //   FilterPanelShow();
                                     createSliderTotalPaidRange();
                                     routesArray.push("mainView,view,7");
                                     Ext.getCmp('mainView').setActiveItem(7);
                                     GanerateCalender();
                                 }
                             },

  {
      xtype: 'button',
      align: 'stretch',
      id: 'btnSearchReceipttxt',
      ui: 'plain',
      margin: '-12 0 0 0',
      html: '<font size="2" color="black">Search</font>',
      // html: '<font size="5" color="white"><b>|</b></font>',
      handler: function () {
          // FilterPanelShow();
          createSliderTotalPaidRange();
          routesArray.push("mainView,view,7");
          Ext.getCmp('mainView').setActiveItem(7);
          GanerateCalender();

      }
  },

                      ]
                  },

        
        {
            xtype: 'container',
            margin: '5 0 0 0',
            hidden: true,
            layout: {
                type: 'vbox',
                //    pack: 'center',

            },
            items: [

                   {
                       xtype: 'button',
                       align: 'stretch',
                       id: 'btnRecentConfirm',
                     
                       //height: 42,
                       //width: 42,
                       margin: '-4 0 0 0',
                       ui: 'plain',
                       html: '<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />',
                       handler: function () {
                           //LoadingPanelShow();

                           //reChangetxtandButton('RecentlyConfirm');
                           //loadSummaryReceipt(GetCurrentMyKadNo(), "1", GetCurrentAccountNo(), "Status")
                           //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
                           //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                           //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(false);
                           //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                           //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                           //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                           //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                           //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                           routesArray.push("RecentlyConfirm");
                           loadlistsummaryreceipt('RecentlyConfirm');
                       }
                   },

{
    xtype: 'button',
    align: 'stretch',
    id: 'btnRecentConfirmtxt',
    ui: 'plain',
    margin: '-12 0 0 0',
    html: '<font size="2" color="black">Recently Confirm</font>',
    // html: '<font size="5" color="white"><b>|</b></font>',
    handler: function () {
        //LoadingPanelShow();

        //reChangetxtandButton('RecentlyConfirm');
        //loadSummaryReceipt(GetCurrentMyKadNo(), "1", GetCurrentAccountNo(), "Status")
        //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(false);
        //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        routesArray.push("RecentlyConfirm");
        loadlistsummaryreceipt('RecentlyConfirm');

    }
},

            ]
        },

           {
               xtype: 'container',
               margin: '5 0 0 0',
               layout: {
                   type: 'vbox',
                   //    pack: 'center',

               },
               items: [

                      {
                          xtype: 'button',
                          align: 'stretch',
                          id: 'btnRecentVoid',
                          //height: 42,
                          //width: 42,
                          ui: 'plain',
                          margin: '-4 0 0 0',
                          html: '<img src="resources/icons/Voidblacknew.png" style="width: 32px; height: 32px;" />',
                          handler: function () {
                              //LoadingPanelShow();
                              //reChangetxtandButton('RecentlyVoid');
                              //loadSummaryReceipt(GetCurrentMyKadNo(), "3", GetCurrentAccountNo(), "Status")
                              //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(false);
                              //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
                              //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
                              //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
                              //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
                              //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
                              //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
                              //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
                              routesArray.push("RecentlyVoid");
                              loadlistsummaryreceipt('RecentlyVoid');

                          }
                      },

   {
       xtype: 'button',
       align: 'stretch',
       id: 'btnRecentVoidtxt',
       ui: 'plain',
       margin: '-12 0 0 0',
       html: '<font size="2" color="black">Recently Reject</font>',
       // html: '<font size="5" color="white"><b>|</b></font>',
       handler: function () {
           //LoadingPanelShow();
           //reChangetxtandButton('RecentlyVoid');
           //loadSummaryReceipt(GetCurrentMyKadNo(), "3", GetCurrentAccountNo(), "Status")
           //Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(false);
           //Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
           //Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
           //Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
           //Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
           //Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
           //Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
           //Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
           routesArray.push("RecentlyVoid");
           loadlistsummaryreceipt('RecentlyVoid');

          
       }
   },

               ]
           },


              ]
          },

        ]
    },
    initialize : function() {
  
        var currentTime = new Date()
        var month = currentTime.getMonth() + 1

       
        var monthconvert = ConvertMonth(month);
        // returns the year (four digits)
        var year = currentTime.getFullYear();


        //Ext.getCmp('lblYear').setHtml(year+'-');
        //Ext.getCmp('lblMonth').setHtml(monthconvert + '.');


        Ext.getCmp('lblYear').setHtml('<font size="3" color="black">' + year + '-' + '</font>');
        Ext.getCmp('lblMonth').setHtml('<font size="3" color="black">' + monthconvert + '&nbsp;&nbsp;' + '</font>');
}
});

function reChangetxtandButton(val) {

    //if (GetCurrentVersion() == 'Standard 1.1') {
    //    summaryreceiptbottomtoolbarVstandard1point1(val);
    //    return;
    //}else








    if (val == 'NewReceipt') {
        //ori
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/newreceiptredlatestedit.png" style="width: 38px; height: 38px;" />');
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black"><u><b>New Receipt(s)</b></u></font>');

       


        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="black">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="black">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="black">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="black">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="black">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="black">Recently Void</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="black">Partially Paid</font>')

    } if (val == 'Claimable') {
        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="black">Partially Paid</font>')
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />')
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black">New Receipt(s)</font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimablered.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="red"><b><u>Claimable</u></b></font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="black">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="black">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="black">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="black">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="black">Recently Void</font>')
    } if (val == 'Partially Paid') {
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />')
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black">New Receipt(s)</font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="black">Claimable</font>')


        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialPaidRed.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="red"><b><u>Partially Paid</u></b></font>')

        

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="black">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="black">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="black">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="black">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="black">Recently Void</font>')
    }
    
    if (val == 'Deposit') {
        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="black">Partially Paid</font>')
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />')
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black">New Receipt(s)</font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="black">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Depositred.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="red"><b><u>Deposit</u></b></font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="black">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="black">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="black">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="black">Recently Void</font>')
    }

    if (val == 'Warranty') {
        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="black">Partially Paid</font>')
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />')
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black">New Receipt(s)</font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="black">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="black">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyred.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="red"><b><u>Warranty</u></b></font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="black">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="black">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="black">Recently Void</font>')

    } if (val == 'General') {
        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="black">Partially Paid</font>')
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />')
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black">New Receipt(s)</font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="black">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="black">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="black">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/generalred.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="red"><b><u>General</u></b></font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="black">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="black">Recently Void</font>')

    } if (val == 'RecentlyConfirm') {
        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="black">Partially Paid</font>')
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />')
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black">New Receipt(s)</font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="black">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="black">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="black">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="black">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmred.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="red"><b><u>Recently Confirm</u></b></font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="black">Recently Void</font>')
    } if (val == 'RecentlyVoid') {
        Ext.getCmp('btnPartialyPaidReceipt').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnPartialyPaidReceipttxt').setHtml('<font size="2" color="black">Partially Paid</font>')
        Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/cloudreceiptblack.png" style="width:32px; height: 32px;" />')
        Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="black">New Receipt(s)</font>');

        Ext.getCmp('btnClaimableReceipt').setHtml('<img src="resources/icons/claimable.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnClaimableReceipttxt').setHtml('<font size="2" color="black">Claimable</font>')

        Ext.getCmp('btnDepositReceipt').setHtml('<img src="resources/icons/Deposit.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnDeposittxt').setHtml('<font size="2" color="black">Deposit</font>')

        Ext.getCmp('btnWarrantyReceipt').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnWarrantytxt').setHtml('<font size="2" color="black">Warranty</font>')

        Ext.getCmp('btnGeneralReceipt').setHtml('<img src="resources/icons/general.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnGeneralReceipttxt').setHtml('<font size="2" color="black">General</font>')

        Ext.getCmp('btnSearchReceipt').setHtml('<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnSearchReceipttxt').setHtml('<font size="2" color="black">Search</font>')

        Ext.getCmp('btnRecentConfirm').setHtml('<img src="resources/icons/confirmblack.png" style="width: 32px; height: 32px;" />')
        Ext.getCmp('btnRecentConfirmtxt').setHtml('<font size="2" color="black">Recently Confirm</font>')

        Ext.getCmp('btnRecentVoid').setHtml('<img src="resources/icons/voidred.png" style="width: 38px; height: 38px;" />')
        Ext.getCmp('btnRecentVoidtxt').setHtml('<font size="2" color="red"><b><u>Recently Reject</u></b></font>')
    }


    receiptCategoryCount();
}


function loadSummaryReceipt(CustomerIC, Status,CloudreceiptAccNo, PremiseNo)
{
    console.log(CustomerIC);
    console.log(CloudreceiptAccNo);
    console.log(PremiseNo);
    console.log(Status);
    var Month = GetCurrentMonth();
    var Year = GetCurrentYear();
    var count = 0;





    Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
    Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
    Ext.getStore('FlatBillGetByIcStore').getProxy().setExtraParams({
        CustomerIC: CustomerIC,
        Status: Status,
        Month: Month,
        Year: Year,
        CloudreceiptAccNo: CloudreceiptAccNo,
        PremiseNo: PremiseNo
    });
    Ext.StoreMgr.get('FlatBillGetByIcStore').load();
  
 

    //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('FlatBillGetByIcStore').getProxy().setExtraParams({
            CustomerIC: CustomerIC,
            Status: Status,
            Month: Month,
            Year: Year,
            CloudreceiptAccNo: CloudreceiptAccNo,
            PremiseNo: PremiseNo
        });
        Ext.StoreMgr.get('FlatBillGetByIcStore').load();
        var myStore = Ext.getStore('FlatBillGetByIcStore');
         count = myStore.getCount();
      
       

        if (Status == '1')
        {
            Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>Confirm-(' + count + ')</u></b></font>');
         //   Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/kompem.png" style="width: 32px; height: 32px;" />');
        } if (Status == '2') {
            Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>New Receipts-(' + count + ')</u></b></font>');
            Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/newreceiptredlatestedit.png" style="width: 32px; height: 32px;" />');
            //Ext.getCmp('btnNewReceipts').setHtml('<img src="resources/icons/newreceiptredlatestedit.png" style="width: 38px; height: 38px;" />');
            //Ext.getCmp('btnNewReceiptstxt').setHtml('<font size="2" color="red"><u><b>New Receipt(s)</b></u></font>');

        } if (Status == '3') {
            Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>Rejected-(' + count + ')</u></b></font>');
            //  Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/NewVoid3.png" style="width: 32px; height: 32px;" />');
        }
            if (Status == 'Claimable') {
                Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>Claimable-(' + count + ')</u></b></font>');
                Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/claimablered.png" style="width: 32px; height: 32px;" />');
            } if (Status == 'Deposit') {
                Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>Deposit-(' + count + ')</u></b></font>');
                Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/Depositred.png" style="width: 32px; height: 32px;" />');
            }if (Status == 'Warranty') {
                Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>Warranty-(' + count + ')</u></b></font>');
                Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/Warrantyred.png" style="width: 32px; height: 32px;" />');
            }if (Status == 'General') {
                Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>General-(' + count + ')</u></b></font>');
                Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/generalred.png" style="width: 32px; height: 32px;" />');
            } if (Status == 'Partially-Paid') {
                Ext.getCmp('lblCountReceipt').setHtml('<font size="2" color="red"><b><u>Partially Paid-(' + count + ')</u></b></font>');
                Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/PartialPaidRed.png" style="width: 32px; height: 32px;" />');
            }
        Ext.getCmp('lblCountReceipt').setHidden(false);
        Ext.getCmp('imgReceiptStatus').setHidden(false);
        Ext.Viewport.setMasked(false);
        
        LoadingPanelHide();
       
    });
    task.delay(2000);
}




function myFunction() {
    alert("tesnnnt" + billID);
}


function Formateddated(val)
{
  //  var date = new Date(val);
    var today = new Date(val);
   

    var str = today.toISOString().substring(0, 10);

    return str;
}






function loadSummaryReceiptFromOpenPushNotification(CustomerIC, Status, Month, Year, CloudreceiptAccNo, PremiseNo,isFirstLoad) {
    var count = 0
    Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
    Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
    Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
    Ext.getStore('FlatBillGetByIcStore').getProxy().setExtraParams({
        CustomerIC: CustomerIC,
        Status: Status,
        Month: Month,
        Year: Year,
        CloudreceiptAccNo: CloudreceiptAccNo,
        PremiseNo: PremiseNo
    });
    Ext.StoreMgr.get('FlatBillGetByIcStore').load();


    if (isFirstLoad=='Y')
    {
        Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getStore('FlatBillGetByIcStore').getProxy().setExtraParams({
                CustomerIC: CustomerIC,
                Status: Status,
                Month: Month,
                Year: Year,
                CloudreceiptAccNo: CloudreceiptAccNo,
                PremiseNo: PremiseNo
            });
            Ext.StoreMgr.get('FlatBillGetByIcStore').load();
            var myStore = Ext.getStore('FlatBillGetByIcStore');
            count = myStore.getCount();

            Ext.getCmp('btnNotificationSummaryReceipt').setBadgeText(count);
            Ext.getCmp('btnNotification_DashboardsPanel').setBadgeText(count);
            Ext.getCmp('btnNotificationMyAccount').setBadgeText(count);
            Ext.getCmp('btnNotification_NotificationsPanel').setBadgeText(count);
            Ext.getCmp('btnNotificationDetailReceipt').setBadgeText(count);

            
            Ext.getCmp('lblCountReceipt').setHtml('<font color="#839192">New Receipts-(' + count + ')</font>');
            Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/newreceiptred.png" style="width: 32px; height: 32px;" />');

            Ext.getCmp('lblCountReceipt').setHidden(false);
            Ext.getCmp('imgReceiptStatus').setHidden(false);
            isFirstLoad = 'N';
            Ext.Viewport.setMasked(false);


        });
        task.delay(2000);
    }
    
}




function loadSummaryReceiptFromReceivedPushNotification(CustomerIC, Status, Month, Year, CloudreceiptAccNo, PremiseNo, isFirstLoad) {
    var count = 0
    Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
    Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
    Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
    Ext.getStore('FlatBillGetByIcStore').getProxy().setExtraParams({
        CustomerIC: CustomerIC,
        Status: Status,
        Month: Month,
        Year: Year,
        CloudreceiptAccNo: CloudreceiptAccNo,
        PremiseNo: PremiseNo
    });
    Ext.StoreMgr.get('FlatBillGetByIcStore').load();


    if (isFirstLoad == 'Y') {
       
        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getStore('FlatBillGetByIcStore').getProxy().setExtraParams({
                CustomerIC: CustomerIC,
                Status: Status,
                Month: Month,
                Year: Year,
                CloudreceiptAccNo: CloudreceiptAccNo,
                PremiseNo: PremiseNo
            });
            Ext.StoreMgr.get('FlatBillGetByIcStore').load();
            var myStore = Ext.getStore('FlatBillGetByIcStore');
            count = myStore.getCount();

            Ext.getCmp('btnNotificationSummaryReceipt').setBadgeText(count);
            Ext.getCmp('btnNotification_DashboardsPanel').setBadgeText(count);
            Ext.getCmp('btnNotificationMyAccount').setBadgeText(count);
            Ext.getCmp('btnNotification_NotificationsPanel').setBadgeText(count);
            Ext.getCmp('btnNotificationDetailReceipt').setBadgeText(count);
            Ext.getCmp('lblCountReceipt').setHtml('<font color="#839192">New Receipts..-(' + count + ')</font>');
            Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/newreceiptred.png" style="width: 32px; height: 32px;" />');

            Ext.getCmp('lblCountReceipt').setHidden(false);
            Ext.getCmp('imgReceiptStatus').setHidden(false);
            isFirstLoad = 'N';
            Ext.Viewport.setMasked(false);


        });
        task.delay(2000);
    }

}






function directedMenu(val) {
    if (val != 'New') {
       /// DetailReceiptMenuShow();
        return;
    } if (val == 'New') {
        StatusDetailReceiptMenuShow();
        return;
    }


}




function receiptCategoryCount() {

    Ext.getStore('ReceiptCountByCategoryGetByIcStore').getProxy().setExtraParams({
        MykadID: GetCurrentMyKadNo(),
       
    });
    Ext.StoreMgr.get('ReceiptCountByCategoryGetByIcStore').load();
  
 

    //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('ReceiptCountByCategoryGetByIcStore').getProxy().setExtraParams({
            MykadID: GetCurrentMyKadNo(),
           
        });
        Ext.StoreMgr.get('ReceiptCountByCategoryGetByIcStore').load();
        var myStore = Ext.getStore('ReceiptCountByCategoryGetByIcStore');
        var modelRecord = myStore.getAt(0);
        count = myStore.getCount();
        //var PartiallyPaid = modelRecord.get('PartiallyPaid');
        //if(par)
        //var General = modelRecord.get('General');
        //var Claimable = modelRecord.get('Claimable');

        //var Warranty = modelRecord.get('Warranty');
        //var Deposit = modelRecord.get('Deposit');
        //var Confirm = modelRecord.get('Confirm');
        //var New = modelRecord.get('New');
        //var Reject = modelRecord.get('Reject');

        if (modelRecord.get('New') != '0') {
            Ext.getCmp('btnNewReceipts').setBadgeText(modelRecord.get('New'));
        }
        if (modelRecord.get('Claimable') != '0') {
            Ext.getCmp('btnClaimableReceipt').setBadgeText(modelRecord.get('Claimable'));
        }
        if (modelRecord.get('Deposit') != '0') {
            Ext.getCmp('btnDepositReceipt').setBadgeText(modelRecord.get('Deposit'));
        }
        if (modelRecord.get('Warranty') != '0') {
            Ext.getCmp('btnWarrantyReceipt').setBadgeText(modelRecord.get('Warranty'));
        }
        if (modelRecord.get('General') != '0') {
            Ext.getCmp('btnGeneralReceipt').setBadgeText(modelRecord.get('General'));
        }
        if (modelRecord.get('Confirm') != '0') {
            Ext.getCmp('btnRecentConfirm').setBadgeText(modelRecord.get('Confirm'));
        }
        if (modelRecord.get('Reject') != '0') {
            Ext.getCmp('btnRecentVoid').setBadgeText(modelRecord.get('Reject'));
        }
        if (modelRecord.get('PartiallyPaid') != '0') {
            Ext.getCmp('btnPartialyPaidReceipt').setBadgeText(modelRecord.get('PartiallyPaid'));
        }
       
        LoadingPanelHide();
        Ext.Viewport.setMasked(false);
      

    });
    task.delay(1000);
}


var counting = 0;
var timer;
function startsingleTrackingMaps(val) {
  
    if (val == 'start') {
        timer = setInterval(function () {
            counting = counting + 1;
            if (counting == 1) {
              

            }
            if (counting == 2) {

                counting = 0;
            }
        }, 1000);
    } else {

        clearInterval(timer);
    }
}



function loadlistsummaryreceipt(val) {
    LoadingPanelShow();
    if (val == 'NewReceipt') {
        reChangetxtandButton('NewReceipt');
        //routesArray.push("NewReceipt");
        loadSummaryReceipt(GetCurrentMyKadNo(), "2", GetCurrentAccountNo(), "Status")
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        return;
    } if (val == 'Claimable') {
        reChangetxtandButton('Claimable');
        //routesArray.push("Claimable");
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
        loadSummaryReceipt(GetCurrentMyKadNo(), "Claimable", GetCurrentAccountNo(), "Category");
        return;
    } if (val == 'Partially Paid') {
        //routesArray.push("Partially Paid");
        reChangetxtandButton('Partially Paid');
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
        loadSummaryReceipt(GetCurrentMyKadNo(), "Partially-Paid", GetCurrentAccountNo(), "Category");
        return;


    } if (val == 'Deposit') {
        reChangetxtandButton('Deposit');
       // routesArray.push("Deposit");
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
        loadSummaryReceipt(GetCurrentMyKadNo(), "Deposit", GetCurrentAccountNo(), "Category");
        return;

    } if (val == 'Warranty') {
        reChangetxtandButton('Warranty');
        //routesArray.push("Warranty");
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
        loadSummaryReceipt(GetCurrentMyKadNo(), "Warranty", GetCurrentAccountNo(), "Category");
        return;

    } if (val == 'General') {
        reChangetxtandButton('General');
        //routesArray.push("General");
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
        loadSummaryReceipt(GetCurrentMyKadNo(), "General", GetCurrentAccountNo(), "Category");
        return;

    } if (val == 'RecentlyConfirm') {
        reChangetxtandButton('RecentlyConfirm');
     //   routesArray.push("RecentlyConfirm");
        loadSummaryReceipt(GetCurrentMyKadNo(), "1", GetCurrentAccountNo(), "Status")
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        return;
    } if (val == 'RecentlyVoid') {
        reChangetxtandButton('RecentlyVoid');
      //  routesArray.push("RecentlyVoid");
        loadSummaryReceipt(GetCurrentMyKadNo(), "3", GetCurrentAccountNo(), "Status")
        Ext.getCmp('FlatBillGetByIcStoreVoidID').setHidden(false);
        Ext.getCmp('FlatBillGetByIcStoreNewID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreConfirmID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreDepositeID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreClaimableID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStorePartialPaidID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreWarrantyID').setHidden(true);
        Ext.getCmp('FlatBillGetByIcStoreGeneralID').setHidden(true);
        return;
    }
}