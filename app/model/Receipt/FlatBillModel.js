Ext.define('ianMizi.model.Receipt.FlatBillModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
                 'ID',
                 'FlatBillDesc',
                 'FlatBillDate',
                 'FlatBillPlatNo',
                 'FlatBillWorkshop',
                 'FlatBillWorkshopID',
                 'FlatBillIssuedBy',
                 'FlatBillID',
                 'FlatBillTotalAmount',
                 'FlatBillNumberIC',
                 'FlatBillVehicleModel',
                 'FlatBillImgLogo',
                 'FlatBillStatus',
                 'FlatBillUpdateDate',
                 'FlatBillUpdateBy',
                 'CloudreceiptAccNo',
                 'FlatBillFinalAmount',
                 'FlatBillTax',
                 'FlatBillBalance',
                 'FlatBillDeposit',
                 'FlatBillMilage',
                 'FlatBillGSTNo',
                 'FlatBillTaxInvoice',
                 'FlatBillBillNo',
                 'FlatBillCustomerName',
                 'FlatBillWorkShopAddress',
                 'FlatBillWorkshopPhoneNo',
                 'FlatBillCompanyNumber',
                 'FlatBillPaymentType',
                 'FlatBillPushNotificationSendStatus',
                 'FlatBillUniqueID',
                 'FlatBillAccountNo',
                 'FlatBillShotDesc',
                 'FlatBillInvoiceNo',
                 'FlatBillReceiptNo',
                 'FlatBillFaxNo',
                 'FlatBillPremiseEmail',
                 'FlatBillPremiseWebsite',
                 'TotalAmount',
                 'TotalTax',
                 'FlatBillOutStandingBalance',
                 'FlatBillCurrentPaid',
                 'ReceiptTemplateCode',
                 'FlatBillCategory'
                  , {
                      name: 'FlatBillShotDescModified',
                      convert: function (value, record) {


                          var str = record.get('FlatBillShotDesc');
                          var _value = str.toUpperCase();

                          return _value;
                      }
                  },



        ]
    }
});