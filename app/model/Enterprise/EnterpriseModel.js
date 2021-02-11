Ext.define('ianMizi.model.Enterprise.EnterpriseModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'EnterpriseAccNo',
                 'EnterpriseName',
                 'EnterpriseAddress',
                 'EnterpriseRegistrationNo',

                 'EnterpriseGSTNo',
                 'EnterpriseEmail',
                 'EnterpriseWebsite',
                 'EnterprisePhoneNo',
                 'EnterpriseFaxNo',
                 'EnterpriseLogo',
                 'EnterpriseLogo64',
                 'EnterpriseLogoPath',
                 'RowStatus',
                 'CreatedDate',
                 'CreatedBy',
                 'ModifiedDate',

                  'ModifiedBy',
                 'Status',
                 'EnterpriseTaxNo',
                 'isTaxApplied',
                 'TaxRate',
                 'EnterpriseDescriptions',
                  'SubscribedCloudReceipt',
                 'SubscribedNewsAndPromotion'
        ]
    }
});