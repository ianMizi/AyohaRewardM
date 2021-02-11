Ext.define('ianMizi.model.Enterprises.EnterprisesModel', {
    extend: 'Ext.data.Model',
    config: {
         fields: [
      'ID',
      'EnterpriseHQAccNo',
      'EnterpriseAccNo',
      'EnterpriseName',
      'EnterpriseAddress',
      'EnterprisePhoneNo',
      'EnterpriseRegistrationNo',
      'EnterpriseEmail',
      'EnterpriseWebsite',
      'EnterpriseDescriptions',
      'EnterpriseFacebook',
      'EnterpriseTwiter',
      'EnterpriseInstagram',
      'EnterpriseCoordinate',
      'EnterpriseLogoPath',
      'EnterpriseLogoName',
      'RowStatus',
      'CreatedDate',
      'CreatedBy',
      'ModifiedDate',
      'ModifiedBy',
      'PICContactNo',
      'PersonInCharge',
      'LoyaltyCardType',
      'EnterpriseType',
      'EnterpriseBusinessType',
      'AyohaVersion'
      ]
    }
});






//Ext.define('ianMizi.model.Enterprises.EnterprisesModel', {
//    extend: 'Ext.data.Model',
//    config: {
//        fields: [
//            'ID',
//                 'EnterpriseAccNo',
//                 'EnterpriseName',
//                 'EnterpriseAddress',
//                 'EnterpriseRegistrationNo',

//                 'EnterpriseGSTNo',
//                 'EnterpriseEmail',
//                 'EnterpriseWebsite',
//                 'EnterprisePhoneNo',
//                 'EnterpriseFaxNo',
//                 'EnterpriseLogo',
//                 'EnterpriseLogo64',
//                 'EnterpriseLogoPath',
//                 'RowStatus',
//                 'CreatedDate',
//                 'CreatedBy',
//                 'ModifiedDate',

//                  'ModifiedBy',
//                 'Status',
//                 'EnterpriseTaxNo',
//                 'isTaxApplied',
//                 'TaxRate',
//                 'EnterpriseDescriptions',
//                  'SubscribedCloudReceipt',
//                 'SubscribedNewsAndPromotion'
//        ]
//    }
//});