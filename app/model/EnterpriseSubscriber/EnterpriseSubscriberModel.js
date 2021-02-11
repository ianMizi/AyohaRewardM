Ext.define('ianMizi.model.EnterpriseSubscriber.EnterpriseSubscriberModel', {
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
                 'SubscribedNewsAndPromotion',
                 'SubscribedDate',
                 'LoyaltyCardType',
                  {
                      name: 'LoyaltyCardTypeReference',
                       convert: function (value, record) {
                           var _value = ""

                           var str = record.get('LoyaltyCardType');
                           if (str == "Point") {
                               _value = '<img src="resources/icons/pointPurpleOne.png"style="width: 35px; height: 35px; margin-top: -6px;" /><div style="margin:-25px 0px 0px 40px;"><font size="4"><b>1000 Point !!</b></font>';
                           }
                           if (str == "Stamp") {
                               _value = '<img src="resources/icons/StampTiltLeftOne.png"style="width: 35px; height: 35px; margin-top: -6px;" /><div style="margin:-25px 0px 0px 40px;"><font size="4"><b>10/11 Stamp</b></font>';
                           }



                          

                           return _value;
                       }
                   },
        ]
    }
});