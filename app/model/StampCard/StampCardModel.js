Ext.define('ianMizi.model.StampCard.StampCardModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'StampCardCode',
                  'StampCampaignCode',
                  'StampContent',
                  'StampContentSequence',
                  'StampContentNote',
                   'StampCardType',
                  'EnterpriseAccNo',
                   'CreatedByAccNo',
                  'CreatedBy',
                   'CreatedDate',
                  'ModifiedBy',
                  'ModifiedDate',
                  'RowStatus',
                  'TextOne',
                  'TextTwo',
                  'DivContent',
                  'DivContentTextTwo',
                  'StampContentDefaultTemplateID',
                  'ShowHide',
                  'ImgContentName',
                  'isRedeemItem',
                  'StampedStatus',
                  {
                      name: 'StampContentModified',
                      convert: function (value, record) {
                          var _value;
                          var StampCardType=record.get('StampCardType');
                          var str = record.get('StampContent');
                      

                          if (StampCardType == "Auto-Default") {
                              _value =str.replace("margin:23px","margin:7px");
                          } else {
                              _value = str.replace("margin:23px", "margin:7px");
                          }


                          return _value;
                      }
                  },

        ]
    }
});



