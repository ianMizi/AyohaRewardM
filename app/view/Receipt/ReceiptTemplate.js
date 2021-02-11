Ext.define('ianMizi.view.Receipt.ReceiptTemplate', {
});

function GenerateReceipt(FlatBillID, ReceiptTemplateCode) {

    routesArray.push("mainView,view,2");
    console.log('ReceiptTemplateCode:' + ReceiptTemplateCode);
    console.log('FlatBillID:' + FlatBillID);
    CreateQRCode(FlatBillID, ReceiptTemplateCode);
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
            TemplateCode: ReceiptTemplateCode

        });
        Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
        //var myStore = Ext.getStore('FlatBillDetailByBillIDStore');
        //var count = myStore.getCount();
        var myStore = Ext.getStore('ReceiptTemplateGetByTemplateCode');

        var modelRecord = myStore.getAt(0);

        var ID = modelRecord.get('ID');
        var TemplateHeader = modelRecord.get('TemplateHeader');
        var TemplateDescription = modelRecord.get('TemplateDescription');
        var TemplateDetails = modelRecord.get('TemplateDetails');
        var TemplateAdvertisement = modelRecord.get('TemplateAdvertisement');
        var TemplateFooter = modelRecord.get('TemplateFooter');
        var TemplateType = modelRecord.get('TemplateType');
        var Status = modelRecord.get('Status');
        var CreatedDate = modelRecord.get('CreatedDate');
        var TagNote = modelRecord.get('TagNote');
        var TemplateCode = modelRecord.get('TemplateCode');


        if (ReceiptTemplateCode == 'TR4') {
            TR4(FlatBillID, TemplateHeader, TemplateDescription, TemplateDetails, TemplateAdvertisement, TemplateFooter);
        }
        if (ReceiptTemplateCode == 'TR6') {
            TR6(FlatBillID, TemplateHeader, TemplateDescription, TemplateDetails, TemplateAdvertisement, TemplateFooter);
        }


        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);

}




//TEMPLATE WORKSHOP1
//TEMPLATE CODE:TR4
function TR4(BillID, TemplateHeader, TemplateDescription, TemplateDetails, TemplateAdvertisement, TemplateFooter) {

    routeCurrPage = '2';


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



            //TEMPLATE DESCRIPTION
           // tbltdDesc += '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;font-weight:bold;background-color:#f5f5f5;color:#616161">' + no + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Description + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Quantity + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Price + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Amount + '</td></tr>';
            tbltdDesc += '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;font-weight:bold;' + TemplateDescription + '">' + no + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Description + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Quantity + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;' + TemplateDescription + '">' + Price + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;font-weight:bold;' + TemplateDescription + '">' + Amount + '</td></tr>';

            no++;

        }

       

        //TEMPLATE HEADER
        Ext.getCmp('panelDetailReceipt').setHtml('<table style="border-collapse:collapse;border-spacing:0">' +
        // '<tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;background-color:#37474f;color:white" colspan="2" rowspan="2" ><img src="' + FlatBillImgLogo + '" style="display: inline-block; width: 172px; height: 92px; margin-top: 0px; " /><br>' + FlatBillWorkshop + '<br>' + FlatBillWorkShopAddress + '<br>(' + FlatBillCompanyNumber + ')' + '<br>Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:center;text-align:center;background-color:#37474f;color:white" colspan="3"><u>Official Receipt</u></th></tr>' +
        //'<tr><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:center;text-align:center;background-color:#37474f;color:white" colspan="3"><img src="resources/icons/qrcodeReceipts.jpg" style="width: 100px; height: 100px; border:1px none white;" /><br>Scan QR Code to<br> verify genuine receipt</td></tr>' +
        //'<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 2px 0px 0px 0px;overflow:hidden;word-break:normal;background-color:#f5f5f5;color:#616161" colspan="5"><br>Received Payment From:<br><b>' + FlatBillCustomerName.toUpperCase() + '</b><br><br>Date On:<b>' + FlatBillDate + '</b><br><br></td></tr>' +
        //'<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;background-color:#f5f5f5;color:#616161" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br>being payment for :<br><br></td></tr>' +
        //    '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#37474f;color:white">No</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#37474f;color:white">Description</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;background-color:#37474f;color:white">Qty</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;background-color:#37474f;color:white">Price(RM)</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;background-color:#37474f;color:white">Amount(RM)</td></tr>' +
        //   tbltdDesc.replace("undefined", "") +
         '<tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;' + TemplateHeader + '" colspan="2" rowspan="2" ><img src="' + FlatBillImgLogo + '" style="display: inline-block; width: 172px; height: 92px; margin-top: 0px; " /><br>' + FlatBillWorkshop + '<br>' + FlatBillWorkShopAddress + '<br>(' + FlatBillCompanyNumber + ')' + '<br>Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:center;text-align:center;background-color:#37474f;color:white" colspan="3"><br><div class="blink_me"><div style="background-color: #D25959; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: -20px 0px 0px 12px;cursor: pointer;width:155px" id="receiptstatus">' + GetCurrFlatBillStatusAndCategory() + '</div></div><u>Official Receipt</u></th></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:center;text-align:center;' + TemplateHeader + '" colspan="3"><br><br><img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;background-color:white;" /><br>Scan QR Code to<br> verify genuine receipt</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 2px 0px 0px 0px;overflow:hidden;word-break:normal;' + TemplateDescription + '" colspan="5"><br>Received Payment From:<br><b>' + FlatBillCustomerName.toUpperCase() + '</b><br><br>Date On:<b>' + FlatBillDate + '</b><br><br></td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;' + TemplateDescription + '" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br>being payment for :<br><br></td></tr>' +
            '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;' + TemplateHeader + '">No</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;' + TemplateHeader + '">Description</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;' + TemplateHeader + '">Qty</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;' + TemplateHeader + '">Price(RM)</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;' + TemplateHeader + '">Amount(RM)</td></tr>' +
           tbltdDesc.replace("undefined", "") +
       //TEMPLATE DETAILS
       '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;' + TemplateDetails + '">SubTotal(RM):</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;text-align:center;font-weight:bold;' + TemplateDetails + '">' + FlatBillTotalAmount + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;' + TemplateDetails + '">GST(6%):</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;' + TemplateDetails + '">' + FlatBillTax + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:24px;padding:0px 0px;border-style:none;border: 1px solid black; border-width: 1px 0px 1px 0px;;overflow:hidden;word-break:normal;font-weight:bold;text-align:right;vertical-align:top;' + TemplateDetails + '">Total:</td><td style="font-family:Arial, sans-serif;font-size:20px;padding:0px 0px;border: 1px solid black; border-width: 1px 0px 1px 0px;overflow:hidden;word-break:normal;font-weight:bold;text-align:left;vertical-align:middle;' + TemplateDetails + '">' + FlatBillFinalAmount + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;' + TemplateDetails + '">Deposite:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;' + TemplateDetails + '">' + FlatBillDeposit + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 1px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top;font-weight:bold;' + TemplateDetails + '">Balance:</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;' + TemplateDetails + '">' + FlatBillBalance + '</td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '" colspan="2"><br>Payment Type:<b>' + FlatBillPaymentType + '</b><br>Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br>Receipt No:<b>' + FlatBillBillNo + '</b><br>Invoice No:<b>' + FlatBillTaxInvoice + '</b><br>GST No:<b>' + FlatBillGSTNo + '</b><br>Date:<b>' + FlatBillDate + '</b><br>Account No:<b>NA</b><br>Plat Number:<b>' + FlatBillPlatNo + '</b><br>Milage:<b>' + FlatBillMilage + ' KM</b><br></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;' + TemplateDetails + '"></td></tr>' +
        //TEMPLATE ADVERTISMENT
       //'<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 2px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#f5f5f5;color:#616161" colspan="5"><img src="resources/icons/protonsale.png" style="width: 100%; height: 185px; border:1px none white;" /><img src="resources/icons/CloudreceiptFooters.png" style="width:  100%; height: 135px; border:1px none white;" /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="5"></td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 1px solid black; border-width: 2px 0px 0px 0px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;' + TemplateDetails + '" colspan="5"><img src=" ' + TemplateAdvertisement + '" style="width: 100%; height: 185px; border:1px none white;" /><img src="' + TemplateFooter + '" style="width:  100%; height: 135px; border:1px none white;" /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="5"></td></tr>' +
       //TEMPLATE FOOTER
      '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;' + TemplateDetails + '" colspan="5">This receipt generated by system no sign required.<br>GENERATED BY CLOUD-RECEIPT.COM<br><br></td></tr>' +
        '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;' + TemplateHeader + '" colspan="5">ianMizi Technology Solution-Cyberjaya,MALAYSIA</td></tr></table>');



        Ext.Viewport.setMasked(false);
        LoadingPanelHide();
    });
    task.delay(2000);
    ShowMenusExtend();
}







//TEMPLATE WORKSHOP2
function detailsReceiptsprocess2(BillID) {
    routeCurrPage = '2';


    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
            BillID: BillID

        });
        Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
        //var myStore = Ext.getStore('FlatBillDetailByBillIDStore');
        //var count = myStore.getCount();
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
            // tbltdDesc += ' <tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border: 0px solid black; border-width: 0px 0px 0px 0px;overflow:hidden;word-break:normal;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + no + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Description + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Quantity + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Price + '</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;font-weight:bold;;background-color:#f5f5f5;color:#616161">' + Amount + '</td></tr>';
            tbltdDesc += '<tr><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal;background-color:#f5f5f5;color:#616161;font-weight:bold">' + no + '</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal;background-color:#f5f5f5;color:#616161;font-weight:bold">' + Description + '</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top;text-align:center; background-color:#f5f5f5;color:#616161;font-weight:bold">' + Quantity + '</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; background-color:#f5f5f5;color:#616161;font-weight:bold">' + Price + '</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top;background-color:#f5f5f5;color:#616161;font-weight:bold">' + Amount + '</td></tr>';
            no++;

        }
        //  //TEMPLATE HEADER
        Ext.getCmp('panelDetailReceipt').setHtml('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;" border="0" cellspacing="0" cellpadding="0px">' +
   '<tbody> <tr><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 0px; border-style: solid; border-width: 0px; overflow: hidden; word-break: normal; text-align: center; width: 94.1239%; background-color: #37474f; color: white;" colspan="5"><img src="' + FlatBillImgLogo + '" style="display: inline-block; width: 172px; height: 92px; margin-top: 0px; " /><br>' + FlatBillWorkshop + '<br>' + FlatBillWorkShopAddress + '<br>(' + FlatBillCompanyNumber + ')' + '<br>Phone:' + FlatBillWorkshopPhoneNo + '</th></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 20px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; font-weight: bold; text-decoration: underline; text-align: center; vertical-align: top; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5"><br><u>OFFICIAL RECEIPT</u><br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5"><br>Received Payment From:<br /><b>' + FlatBillCustomerName.toUpperCase() + '</b></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br />being payment for :<br><br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal;background-color:#f5f5f5;color:#616161">No</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; background-color:#f5f5f5;color:#616161">Description</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; text-align: center; width: 4.45305%;background-color:#f5f5f5;color:#616161">Qty</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; text-align: center; background-color:#f5f5f5;color:#616161">Price(RM)</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; background-color:#f5f5f5;color:#616161">Amount(RM)</td></tr>' +
    tbltdDesc.replace("undefined", "") +
  //'<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 3.77541%;background-color:#f5f5f5;color:#616161">1</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 58.8577%;background-color:#f5f5f5;color:#616161">Court Attendance Fees (Excluding travel, board,<br /> lodging expenses and health report</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">1</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161">50</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161">50</td></tr>' +

     // //TEMPLATE DETAILS
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 0px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 58.8577%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 0px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161" >SubTotal(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161">' + FlatBillTotalAmount + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 58.8577%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161" >GST(6%):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; text-align:center;border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161">' + FlatBillTax + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 58.8577%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 22px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px; overflow: hidden; word-break: normal; font-weight: bold; text-align: right; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161" >Total:</td><td style="font-family: Arial, sans-serif; font-size: 22px; padding: 0px; border-style: solid; border-color: black; border-image: initial;  text-align:center;border-width: 1px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 10%; font-weight: bold;background-color:#f5f5f5;color:#616161">' + FlatBillFinalAmount + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 58.8577%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161">Deposite:</td><td style="font-family: Arial, sans-serif; font-size: 14px;  text-align:center; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161">' + FlatBillDeposit + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 58.8577%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#f44336" >Balance:</td><td style="font-family: Arial, sans-serif; font-size: 14px; text-align:center; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#f44336">' + FlatBillBalance + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 58.8577%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161">&nbsp;</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 62.6331%;background-color:#f5f5f5;color:#616161" colspan="2">Remarks:<br>Payment Type:<b>' + FlatBillPaymentType + '</b><br>Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br>Receipt No:<b>' + FlatBillBillNo + '</b><br>Invoice No:<b>' + FlatBillTaxInvoice + '</b><br>GST No:<b>' + FlatBillGSTNo + '</b><br>Date:<b>' + FlatBillDate + '</b><br>Account No:<b>NA</b><br>Plat Number:<b>' + FlatBillPlatNo + '</b><br>Milage:<b>' + FlatBillMilage + ' KM</b><br></td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; text-align: center;background-color:#f5f5f5;color:#616161" colspan="3"><img src="resources/icons/qrcodeReceipts.jpg" style="width: 70%; height: 120px; border:1px none white;" /><br><b>Scan QR Code to <br> verify genuine receipt</b></td></tr>' +
        //  //TEMPLATE ADVERTISMENT
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width:100%;" colspan="5"><img src="resources/icons/protonsale.png" style="width: 100%; height: 185px; border:1px none white;" /></td></tr>' +
    //  //TEMPLATE FOOTER
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 94.1239%;" colspan="5"><img src="resources/icons/CloudreceiptFooters.png" style="width:  100%; height: 135px; border:1px none white;" /><br><br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5"><br><br>This receipt generated by system no sign required.<br />GENERATED BY CLOUD-RECEIPT.COM<br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 94.1239%; background-color: #37474f; color: white;" colspan="5">ianMizi Technology Solution,Cyberjaya.MALAYSIA</td></tr>' +
   '</tbody>  </table>');



        Ext.Viewport.setMasked(false);
        LoadingPanelHide();
    });
    task.delay(2000);
    ShowMenusExtend();
}


//TEMPLATE CLINIC1-qrcode dibawah
function detailsReceiptsprocess1(BillID) {


    routeCurrPage = '2';


    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
            BillID: BillID

        });
        Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
        //var myStore = Ext.getStore('FlatBillDetailByBillIDStore');
        //var count = myStore.getCount();
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
            tbltdDesc += '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 3%; background-color: #f5f5f5; color: #616161;">' + no + '</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 100%; background-color: #f5f5f5; color: #616161;" colspan="3">' + Description + '</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 13.4767%; background-color: #f5f5f5; color: #616161;">' + Amount + '</td></tr>'

            no++;

        }
        //  //TEMPLATE HEADER
        Ext.getCmp('panelDetailReceipt').setHtml('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;" border="0" cellspacing="0" cellpadding="0px">' +
   '<tbody> <tr><th style="font-family: Arial, sans-serif; font-size: 14px; font-weight: normal; padding: 0px; border-style: solid; border-width: 0px; overflow: hidden; word-break: normal; text-align: center; width: 94.1239%; background-color: #37474f; color: white;" colspan="5"><img src="' + FlatBillImgLogo + '" style="display: inline-block; width: 172px; height: 92px; margin-top: 0px; " /><br>' + FlatBillWorkshop + '<br>' + FlatBillWorkShopAddress + '<br>(' + FlatBillCompanyNumber + ')' + '<br>Phone:' + FlatBillWorkshopPhoneNo + '</th></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 20px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; font-weight: bold; text-decoration: underline; text-align: center; vertical-align: top; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5"><br><u>OFFICIAL RECEIPT</u><br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5"><br>Received Payment From:<br /><b>' + FlatBillCustomerName.toUpperCase() + '</b></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br />being payment for :<br><br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; width: 7%; background-color: #f5f5f5; color: #616161;">No.</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; width: 74.5233%; background-color: #f5f5f5; color: #616161;" colspan="3">Description</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; text-align: center; width: 13.4767%; background-color: #f5f5f5; color: #616161;">Amount(RM)</td></tr>' +
    tbltdDesc.replace("undefined", "") +
  //'<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 3.77541%;background-color:#f5f5f5;color:#616161">1</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; width: 58.8577%;background-color:#f5f5f5;color:#616161">Court Attendance Fees (Excluding travel, board,<br /> lodging expenses and health report</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">1</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161">50</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161">50</td></tr>' +

     // //TEMPLATE DETAILS
          '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top;background-color:#f5f5f5;color:#616161" colspan="3"></td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161"></td></tr>' +
      '<tr style="height: 40px;"><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; text-align: right; vertical-align: middle;background-color:#f5f5f5;color:#616161;font-weight:bold" colspan="3">Total Price(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 0px; overflow: hidden; word-break: normal; text-align: center;font-weight:bold; vertical-align: middle; width: 10%;background-color:#f5f5f5;color:#616161">' + FlatBillTotalAmount + '</td></tr>' +
        '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top;background-color:#f5f5f5;color:#616161" colspan="3"></td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161"></td></tr>' +
        '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top;background-color:#f5f5f5;color:#616161" colspan="3"></td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161"></td></tr>' +
                '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top;background-color:#f5f5f5;color:#616161;font-weight:bold" colspan="3">OutStanding Balance(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161;font-weight:bold">' + FlatBillTotalAmount + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: top;background-color:#f5f5f5;color:#616161;text-align:right;font-weight:bold" colspan="4">Current Paid(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161;font-weight:bold">' + FlatBillTotalAmount + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161;text-align:right;font-weight:bold" colspan="4"">GST(+):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; text-align:center;border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161;font-weight:bold">' + FlatBillTax + '</td></tr>' +
   '<tr style="height: 40px;"><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: middle; width: 3.77541%;background-color:#f5f5f5;color:#616161;text-align:right;font-weight:bold" colspan="4"">Balance(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; text-align:center; padding: 0px;border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 1px; overflow: hidden; word-break: normal; vertical-align: middle; width: 10%;background-color:#f5f5f5;color:#f44336;font-weight:bold">' + FlatBillBalance + '</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 3.77541%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 58.8577%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 4.45305%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 17.0378%;background-color:#f5f5f5;color:#616161">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 10%;background-color:#f5f5f5;color:#616161">&nbsp;</td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; width: 62.6331%;background-color:#f5f5f5;color:#616161" colspan="2">Remarks:<br>Payment Type:<b>' + FlatBillPaymentType + '</b><br>Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br>Receipt No:<b>' + FlatBillBillNo + '</b><br>Invoice No:<b>' + FlatBillTaxInvoice + '</b><br>GST No:<b>' + FlatBillGSTNo + '</b><br>Date:<b>' + FlatBillDate + '</b><br>Account No:<b>NA</b><br>Plat Number:<b>' + FlatBillPlatNo + '</b><br>Milage:<b>' + FlatBillMilage + ' KM</b><br></td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; vertical-align: top; text-align: center;background-color:#f5f5f5;color:#616161" colspan="3"><img src="resources/icons/qrcodeReceipts.jpg" style="width: 70%; height: 120px; border:1px none white;" /><br><b>Scan QR Code to <br> verify genuine receipt</b></td></tr>' +
        //  //TEMPLATE ADVERTISMENT
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width:100%;" colspan="5"><img src="resources/icons/protonsale.png" style="width: 100%; height: 185px; border:1px none white;" /></td></tr>' +
    //  //TEMPLATE FOOTER
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 94.1239%;" colspan="5"><img src="resources/icons/CloudreceiptFooters.png" style="width:  100%; height: 135px; border:1px none white;" /><br><br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 94.1239%;background-color:#f5f5f5;color:#616161" colspan="5"><br><br>This receipt generated by system no sign required.<br />GENERATED BY CLOUD-RECEIPT.COM<br></td></tr>' +
   '<tr><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; width: 94.1239%; background-color: #37474f; color: white;" colspan="5">ianMizi Technology Solution,Cyberjaya.MALAYSIA</td></tr>' +
   '</tbody>  </table>');





        Ext.Viewport.setMasked(false);
        LoadingPanelHide();
    });
    task.delay(2000);




    ShowMenusExtend();
       




}





//TEMPLATE CLINIC2-qrcode ditepi
function TR6(BillID, TemplateHeader, TemplateDescription, TemplateDetails, TemplateAdvertisement, TemplateFooter) {


    routeCurrPage = '2';


    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
            BillID: BillID

        });
        Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
        //var myStore = Ext.getStore('FlatBillDetailByBillIDStore');
        //var count = myStore.getCount();
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
            tbltdDesc += '<tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; font-weight: bold; ' + TemplateDescription + '; height: 23px; width: 26px;">' + no + ' </td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; font-weight: bold; ' + TemplateDescription + '; height: 23px; width: 452px;" colspan="3"><p>' + Description + '</p></td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; font-weight: bold; ' + TemplateDescription + '; height: 24px; width: 125px;">' + Amount + '</td></tr>';

            no++;

        }
        //  //TEMPLATE HEADER
        Ext.getCmp('panelDetailReceipt').setHtml('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 73px;"><th style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 162px; width: 249px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 92px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 73px; width: 354px;" colspan="3"><div class="blink_me"><div style="background-color: #D25959; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: -20px 0px 0px 12px;cursor: pointer;width:155px" id="receiptstatus">' + GetCurrFlatBillStatusAndCategory() + '</div></div><u>Official Receipt</u></th></tr>' +
'<tr style="height: 89px;"><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 89px; width: 354px;" colspan="3"><img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;background-color:white;" /><br />Scan QR Code to <br>verify genuine receipt</td></tr>' +
'<tr style="height: 52px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 52px; width: 603px;" colspan="5"><br />Received Payment From:<br /><b>' + FlatBillCustomerName.toUpperCase() + '</b><br><br>Date On:<b>' + FlatBillDate + '</b><br><br></td></tr>' +
'<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 51px; width: 603px;" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br />being payment for :<br /><br /></td></tr><tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 36px;">No.&nbsp;&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 452px;" colspan="3">Description</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateDescription + '; height: 18px; width: 125px;">Amount(RM)</td></tr>' +

    tbltdDesc.replace("undefined", "") +
  
 '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-image: initial; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%; border: 0px solid black;">&nbsp;</td></tr>' +
'<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">Total Price(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillTotalAmount + '</td></tr>' +
  '<tr style="height: 20px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 4%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 36%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 21%;">&nbsp;</td></tr>' +
  '<tr style="height: 11px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 11px; width: 4%; text-align:right" colspan="4"></td><td style="font-family: Arial, sans-serif; font-size: 10px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 11px; width: 21%;">  </td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Oustanding Balances(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Current Paid(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">GST(+):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Balance(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 1px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
'<tr style="height: 141px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 40%;" colspan="2"><br>Payment Type:<b>' + FlatBillPaymentType + '</b><br />Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br />Receipt No:<b>' + FlatBillBillNo + '</b><br />Invoice No:<b>' + FlatBillTaxInvoice + '</b><br />GST No:<b>' + FlatBillGSTNo + '</b><br />Date:<b>' + FlatBillDate + '</b></td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 21%;">&nbsp;</td></tr>' +



      //  //TEMPLATE ADVERTISMENT
   '<tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateDetails + '; height: 18px; width: 603px;" colspan="5"><img style="width: 100%; height: 185px; border: 1px none white;" src=' + TemplateAdvertisement + ' /><img style="width: 100%; height: 135px; border: 1px none white;" src=' + TemplateFooter + ' alt="" /></td></tr>' +
//'<tr style="height: 20px;"><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; height: 20px; width: 603px;" colspan="5">&nbsp;</td></tr>'+






   //  //TEMPLATE FOOTER
   '<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: bottom; ' + TemplateDetails + '; height: 51px; width: 603px;" colspan="5">This receipt generated by system no sign required.<br />GENERATED BY CLOUD-RECEIPT.COM</td></tr>' +
'<tr style="height: 17px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateHeader + '; height: 17px; width: 603px;" colspan="5">ianMizi Technology Solution-Cyberjaya,MALAYSIA</td></tr></tbody></table>');





        Ext.Viewport.setMasked(false);
        LoadingPanelHide();
    });
    task.delay(2000);


    ShowMenusExtend();

   

}








function ShowMenusExtend() {
    if (GetCurrFlatBillStatusAndCategory() == "New" || GetCurrFlatBillStatusAndCategory() == "Confirm" ) {
        StatusDetailReceiptMenuShow();
        return;
    }else
    if (GetCurrFlatBillStatusAndCategory() != "Void") {
        DetailReceiptMenuShow();
        return;
    }else
    if (GetCurrFlatBillStatusAndCategory() == "Void") {
        StatusDetailReceiptMenuShow();
        return;
    }

}


