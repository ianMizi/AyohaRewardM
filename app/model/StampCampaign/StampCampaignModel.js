Ext.define('ianMizi.model.StampCampaign.StampCampaignModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'StampCampaignCode',
                  'StampCampaignName',
                  'StampCardType',
                  'StartDate',
                  'EndDate',
                  'StartDateOnly',
                  'EndDateOnly',
                   'StrEndDate',
                  'RowStatus',
                  'EnterpriseAccNo',
                   'CreatedByAccNo',
                  'CreatedBy',
                   'CreatedDate',
                  'ModifiedBy',
                  'ModifiedDate',
                  'StampCardBackground',
                   'isAnimated',
                  'AnimatedInterval',
                  'StampRuleRemarks',
                   'isStampRulePopUp',
                   'LoyaltyCustomerType',
                   'StampCampaignPremiumQRCode',
                   {
                       name: 'StampCampaignModelButton',
                        convert: function (value, record) {
                            var _value;

                            var str = record.get('StampCardType');


                            if (str == "Auto-Default") {
                                _value = '<div style="width:100%;text-align:right;margin:-80px 0px 0px 0px;"><img src="resources/icons/settingPurple.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton">Setting Card</button></div>'
                            } else
                            {
                                _value = '<div style="width:100%;text-align:right;margin:-80px 0px 0px 0px;"><img src="resources/icons/settingPurple.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton">Setting Card</button></div>'
                            }
                          

                            return _value;
                        }
                    },
                 
        ]
    }
});



