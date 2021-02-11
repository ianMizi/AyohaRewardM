Ext.define('ianMizi.model.LoyaltyStamp.LoyaltyStampModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'SubscriberAccNo',
                 'EnterpriseAccNo',
                 'StampCode',
                 'StampQrCode',
                 'StampedBy',
                 'StampedByDate',
                 'StampedByPhoneModel',
                 'StampedByUserAccNo',
                 'StampedByPhoneSerialNo',
                 'StampedByPhoneManufacturer',
                 'StampedByPhonePlatform',
                 'StampedByOneSignalID',
                 'StampedByPhoneRawInfo',
                 'RowStatus',
                 'CountsStamp',
                 'StampedCampaignCode',
                 'StampCampaignName',
                 'StartDate',
                 'EndDate',
                 'EnterpriseName',
                 'CountStampCardRowShow',
                 'CountLoyaltyStamped',
                 'StampRuleRemarks',
                 'isStampRulePopUp',
                 'Batch',
                 'CurrentBatch',
                 {
                     name: 'EnterpriseNameUpperCase',
                     convert: function (value, record) {
                         var _value;

                         _value = record.get('EnterpriseName');
                         return _value.toUpperCase();
                     }
                 },
                 {
                     name: 'StampCampaignNameLowerCase',
                     convert: function (value, record) {
                         var _value;

                         _value = record.get('StampCampaignName').toLowerCase();


                         return  _value.charAt(0).toUpperCase() + _value.slice(1);
                        
                        
                     }
                 },
                  {
                      name: 'CampaignBatch',
                      convert: function (value, record) {
                          var _value;

                        var  StampedCampaignCode = record.get('StampedCampaignCode');
                        var Batch = record.get('Batch');

                        _value = StampedCampaignCode + '-' + Batch;

                        return _value;


                      }
                  },
        ]
    }
});