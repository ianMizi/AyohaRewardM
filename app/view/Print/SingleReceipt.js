Ext.define('ianMizi.view.Print.SingleReceipt', {
});



function GeneratePrintReceipt(FlatBillID, ReceiptTemplateCode) {


    console.log('GeneratePrintReceipt ReceiptTemplateCode:' + ReceiptTemplateCode);
    console.log('GeneratePrintReceipt FlatBillID:' + FlatBillID);
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
            PrintTR4(FlatBillID, TemplateHeader, TemplateDescription, TemplateDetails, TemplateAdvertisement, TemplateFooter);
        }
        if (ReceiptTemplateCode == 'TR6') {
            PrintTR6(FlatBillID, TemplateHeader, TemplateDescription, TemplateDetails, TemplateAdvertisement, TemplateFooter);
        }


        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);

}

//TEMPLATE CLINIC2-qrcode ditepi
function PrintTR6(BillID, TemplateHeader, TemplateDescription, TemplateDetails, TemplateAdvertisement, TemplateFooter) {


   


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
//        Ext.getCmp('panelDetailReceipt').setHtml('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 73px;"><th style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 162px; width: 249px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 92px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 73px; width: 354px;" colspan="3"><div class="blink_me"><div style="background-color: #D25959; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: -20px 0px 0px 12px;cursor: pointer;width:155px" id="receiptstatus">' + GetCurrFlatBillStatusAndCategory() + '</div></div><u>Official Receipt</u></th></tr>' +
//'<tr style="height: 89px;"><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 89px; width: 354px;" colspan="3"><img style="width: 100px; height: 100px; border: 1px none white;" src="resources/icons/qrcodeReceipts.jpg" alt="" /><br />Scan QR Code to <br>verify genuine receipt</td></tr>' +
//'<tr style="height: 52px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 52px; width: 603px;" colspan="5"><br />Received Payment From:<br /><b>' + FlatBillCustomerName.toUpperCase() + '</b><br><br>Date On:<b>' + FlatBillDate + '</b><br><br></td></tr>' +
//'<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 51px; width: 603px;" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br />being payment for :<br /><br /></td></tr><tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 36px;">No.&nbsp;&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 452px;" colspan="3">Description</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateDescription + '; height: 18px; width: 125px;">Amount(RM)</td></tr>' +

//    tbltdDesc.replace("undefined", "") +
 
// '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-image: initial; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%; border: 0px solid black;">&nbsp;</td></tr>' +
//'<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">Total Price(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillTotalAmount + '</td></tr>' +
//  '<tr style="height: 20px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 4%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 36%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 21%;">&nbsp;</td></tr>' +
//  '<tr style="height: 11px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 11px; width: 4%; text-align:right" colspan="4"></td><td style="font-family: Arial, sans-serif; font-size: 10px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 11px; width: 21%;">  </td></tr>' +
//  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Oustanding Balances(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
//  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Current Paid(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
//  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">GST(+):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
//  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Balance(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 1px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
//'<tr style="height: 141px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 40%;" colspan="2"><br>Payment Type:<b>' + FlatBillPaymentType + '</b><br />Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br />Receipt No:<b>' + FlatBillBillNo + '</b><br />Invoice No:<b>' + FlatBillTaxInvoice + '</b><br />GST No:<b>' + FlatBillGSTNo + '</b><br />Date:<b>' + FlatBillDate + '</b></td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 21%;">&nbsp;</td></tr>' +



      //  //TEMPLATE ADVERTISMENT
   //'<tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateDetails + '; height: 18px; width: 603px;" colspan="5"><img style="width: 100%; height: 185px; border: 1px none white;" src=' + TemplateAdvertisement + ' /><img style="width: 100%; height: 135px; border: 1px none white;" src=' + TemplateFooter + ' alt="" /></td></tr>' +





   //  //TEMPLATE FOOTER
//   '<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: bottom; ' + TemplateDetails + '; height: 51px; width: 603px;" colspan="5">This receipt generated by system no sign required.<br />GENERATED BY CLOUD-RECEIPT.COM</td></tr>' +
//'<tr style="height: 17px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateHeader + '; height: 17px; width: 603px;" colspan="5">ianMizi Technology Solution-Cyberjaya,MALAYSIA</td></tr></tbody></table>');
















        var mywindow = window.open('', 'Print', 'height=400,width="100%",resizable=0');
        mywindow.document.write('<html><head><title>Receipt</title></head>');

        mywindow.document.write('<body>');

        mywindow.document.write('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 43px;"><th style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 182px; width: 349px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 132px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 10px; 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 33px; width: 354px;" colspan="3"><font size="20"><u>Official Receipt</u></font><br><br><img style="width: 100px; height: 100px; border: 1px none white;" src="resources/icons/qrcodeReceipts.jpg" alt="" /><br />Scan QR Code to<br> verify genuine receipt</th></tr>' +
//'<tr style="height: 49px;"><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 15px 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 49px; width: 354px;" colspan="3"><img style="width: 100px; height: 100px; border: 1px none white;" src="resources/icons/qrcodeReceipts.jpg" alt="" /><br />Scan QR Code to<br> verify genuine receipt</td></tr>' +
'<tr style="height: 49px;"><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 0px;  border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 49px; width: 354px;" colspan="3"></td></tr>' +
'<tr style="height: 52px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 52px; width: 603px;" colspan="5"><br />Received Payment From:<br /><b>' + FlatBillCustomerName.toUpperCase() + '</b><br><br>Date On:<b>' + FlatBillDate + '</b><br><br></td></tr>' +
'<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 51px; width: 603px;" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br />being payment for :<br /><br /></td></tr><tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 36px;">No.&nbsp;&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 452px;" colspan="3">Description</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateDescription + '; height: 18px; width: 125px;">Amount(RM)</td></tr>');

        mywindow.document.write(tbltdDesc.replace("undefined", ""));
        mywindow.document.write('<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-image: initial; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%; border: 0px solid black;">&nbsp;</td></tr>' +
'<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">Total Price(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillTotalAmount + '</td></tr>' +
  '<tr style="height: 20px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 4%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 36%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 21%;">&nbsp;</td></tr>' +
  '<tr style="height: 11px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 11px; width: 4%; text-align:right" colspan="4"></td><td style="font-family: Arial, sans-serif; font-size: 10px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 11px; width: 21%;">  </td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Oustanding Balances(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Current Paid(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">GST(+):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Balance(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 1px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
'<tr style="height: 121px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 40%;" colspan="2"><br>Payment Type:<b>' + FlatBillPaymentType + '</b><br />Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br />Receipt No:<b>' + FlatBillBillNo + '</b><br />Invoice No:<b>' + FlatBillTaxInvoice + '</b><br />GST No:<b>' + FlatBillGSTNo + '</b><br />Date:<b>' + FlatBillDate + '</b></td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 21%;">&nbsp;</td></tr>' 

);
       // mywindow.document.write('<tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateDetails + '; height: 18px; width: 603px;" colspan="5"><img style="width: 100%; height: 185px; border: 1px none white;" src=' + TemplateAdvertisement + ' /></td></tr>');

        mywindow.document.write('<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: bottom; ' + TemplateDetails + '; height: 51px; width: 603px;" colspan="5">This receipt generated by system no sign required.<br />GENERATED BY CLOUD-RECEIPT.COM</td></tr>' +
'<tr style="height: 17px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateHeader + '; height: 17px; width: 603px;" colspan="5">ianMizi Technology Solution-Cyberjaya,MALAYSIA</td></tr></tbody></table>');



      
        mywindow.document.write('</body></html>');
      //  var htmlprint = mywindow.document;
        mywindow.print();
        mywindow.close();


        setTimeout(mywindow.print(), 500);
        setTimeout(mywindow.close(), 1000);
      //  console.log(htmlprint);
        //var doc = new jsPDF();
        //var specialElementHandlers = {
        //    '#editor': function (element, renderer) {
        //        return true;
        //    },
        //    '.controls': function (element, renderer) {
        //        return true;
        //    }
        //};

        //// All units are in the set measurement for the document
        //// This can be changed to "pt" (points), "mm" (Default), "cm", "in"
        //var source = window.document.getElementsByTagName("body")[0];
        //doc.fromHTML((source).get(0), 15, 15, {
        //    'width': 170,
        //    'elementHandlers': specialElementHandlers
        //});
        //doc.output("dataurlnewwindow");

        //var doc = new jsPDF();
        //var elementHandler = {
        //    '.controls': function (element, renderer) {
        //        return true;
        //    }
        //};
        //var source = window.document.getElementsByTagName("body")[0];
        //doc.fromHTML(
        //    source,
        //    15,
        //    15,
        //    {
        //        'width': 780, 'elementHandlers': elementHandler
        //    });

        //doc.output("dataurlnewwindow");


        ////var specialElementHandlers = {
        ////    '#editor': function (element, renderer) {
        ////        return true;
        ////    }
        ////};

        ////var doc = new jsPDF();

      
        ////    doc.fromHTML($('#content').html(), 15, 15, {
        ////        'width': 570,
        ////        'elementHandlers': specialElementHandlers
        ////    });
        ////    doc.save('sample-receipt.pdf');
      
        return true;


        Ext.Viewport.setMasked(false);
        LoadingPanelHide();
    });
    task.delay(2000);








}


function testprintPDF()
{
    console.log('testprintPDF');
    //var doc = new jsPDF()

    //doc.text('Hello world!', 10, 10)
    //doc.save('a4.pdf')

    
    

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
      


       


        var mywindow = window.open('', 'Print', 'height=400,width="100%",resizable=0');
        mywindow.document.write('<html><head><title>Receipt</title></head>');

        mywindow.document.write('<body>');

        mywindow.document.write('<table style="border-collapse: collapse; border-spacing: 0px; width: 100%;"><tbody><tr style="height: 43px;"><th style="font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateHeader + '; height: 182px; width: 349px;" colspan="2" rowspan="2"><img style="display: inline-block; width: 172px; height: 132px; margin-top: 0px;" src="' + FlatBillImgLogo + '" alt="" /><br />' + FlatBillWorkshop + '<br />' + FlatBillWorkShopAddress + '<br />(' + FlatBillCompanyNumber + ')' + '<br />Phone:' + FlatBillWorkshopPhoneNo + '</th><th style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 10px; 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 33px; width: 354px;" colspan="3"><font size="20"><u>Official Receipt</u></font><br><br><img style="width: 100px; height: 100px; border: 1px none white;" src="resources/icons/qrcodeReceipts.jpg" alt="" /><br />Scan QR Code to<br> verify genuine receipt</th></tr>' +
//'<tr style="height: 49px;"><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 15px 20px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 49px; width: 354px;" colspan="3"><img style="width: 100px; height: 100px; border: 1px none white;" src="resources/icons/qrcodeReceipts.jpg" alt="" /><br />Scan QR Code to<br> verify genuine receipt</td></tr>' +
'<tr style="height: 49px;"><td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold; padding: 0px;  border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; ' + TemplateHeader + '; height: 49px; width: 354px;" colspan="3"></td></tr>' +
'<tr style="height: 52px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 52px; width: 603px;" colspan="5"><br />Received Payment From:<br /><b>' + FlatBillCustomerName.toUpperCase() + '</b><br><br>Date On:<b>' + FlatBillDate + '</b><br><br></td></tr>' +
'<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border: 0px solid black; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 51px; width: 603px;" colspan="5">The sum of Ringgit Malaysia(RM) <b>' + FlatBillFinalAmount + '</b><br />being payment for :<br /><br /></td></tr><tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px 0px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 36px;">No.&nbsp;&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; ' + TemplateDescription + '; height: 18px; width: 452px;" colspan="3">Description</td><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 1px; overflow: hidden; word-break: normal; text-align: center; ' + TemplateDescription + '; height: 18px; width: 125px;">Amount(RM)</td></tr>');

        mywindow.document.write(tbltdDesc.replace("undefined", ""));
        mywindow.document.write('<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-image: initial; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%; border: 0px solid black;">&nbsp;</td></tr>' +
'<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 21px; width: 4%; border: 0px solid black;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; overflow: hidden; word-break: normal; text-align: right; font-weight: bold; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 73%; border: 0px solid black;" colspan="3">Total Price(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: middle; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillTotalAmount + '</td></tr>' +
  '<tr style="height: 20px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 4%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 36%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 20px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: right; vertical-align: top; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 20px; width: 21%;">&nbsp;</td></tr>' +
  '<tr style="height: 11px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 11px; width: 4%; text-align:right" colspan="4"></td><td style="font-family: Arial, sans-serif; font-size: 10px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 11px; width: 21%;">  </td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Oustanding Balances(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Current Paid(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">GST(+):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
  '<tr style="height: 21px;"><td style="font-family: Arial, sans-serif; font-size: 14px; font-weight: bold;padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 0px 0px 0px; overflow: hidden; word-break: normal; vertical-align: middle; ' + TemplateDetails + '; height: 21px; width: 4%; text-align:right" colspan="4">Balance(RM):</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 1px 0px 1px; overflow: hidden; word-break: normal; vertical-align: middle; text-align: center; font-weight: bold; ' + TemplateDetails + '; height: 21px; width: 21%;">' + FlatBillBalance + '</td></tr>' +
'<tr style="height: 121px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 40%;" colspan="2"><br>Payment Type:<b>' + FlatBillPaymentType + '</b><br />Payment Collected By:<b>' + FlatBillIssuedBy + '</b><br />Receipt No:<b>' + FlatBillBillNo + '</b><br />Invoice No:<b>' + FlatBillTaxInvoice + '</b><br />GST No:<b>' + FlatBillGSTNo + '</b><br />Date:<b>' + FlatBillDate + '</b></td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 2%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 14px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 35%;">&nbsp;</td><td style="font-family: Arial, sans-serif; font-size: 8px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; vertical-align: top; ' + TemplateDetails + '; height: 100px; width: 21%;">&nbsp;</td></tr>'

);
        // mywindow.document.write('<tr style="height: 18px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: solid; border-color: black; border-image: initial; border-width: 2px 0px 0px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateDetails + '; height: 18px; width: 603px;" colspan="5"><img style="width: 100%; height: 185px; border: 1px none white;" src=' + TemplateAdvertisement + ' /></td></tr>');

        mywindow.document.write('<tr style="height: 51px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: bottom; ' + TemplateDetails + '; height: 51px; width: 603px;" colspan="5">This receipt generated by system no sign required.<br />GENERATED BY CLOUD-RECEIPT.COM</td></tr>' +
'<tr style="height: 17px;"><td style="font-family: Arial, sans-serif; font-size: 12px; padding: 0px; border-style: none; border-width: 1px; overflow: hidden; word-break: normal; text-align: center; vertical-align: top; ' + TemplateHeader + '; height: 17px; width: 603px;" colspan="5">ianMizi Technology Solution-Cyberjaya,MALAYSIA</td></tr></tbody></table>');




        mywindow.document.write('</body></html>');
        mywindow.print();
        mywindow.close();
       
       

        Ext.Viewport.setMasked(false);
        LoadingPanelHide();
        return true;
    });
    task.delay(2000);





    doc.autoPrint()
    doc.save('autoprint.pdf')
}