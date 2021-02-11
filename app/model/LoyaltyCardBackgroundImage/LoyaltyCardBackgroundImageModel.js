Ext.define('ianMizi.model.LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'EnterpriseAccNo',
                 'StampCampaignCode',
                 'ImgName',
                 'ImgPath',
                 'RowStatus',
                 'CreatedBy',
                 'CreatedDate',
                 'ShowHide',
                 'isAnimated',
                 'AnimatedInterval',
                   {
                       name: 'ModifyImgPath',
                       convert: function (value, record) {
                           var _value;

                           var str = record.get('ImgName');
                           var ImgPath = record.get('ImgPath');

                           if (str == "Auto-Default") {
                               _value = '<div style="margin:-58px 0px 0px 0px;' + ImgPath + 'width:70px;height:70px"></div>'
                           } else {
                               _value = '<div style="margin:-58px 0px 0px 0px;" ><img src="' + ImgPath + '" width="70" height="70" alt="Company Name"></div>'
                           }


                           return _value;
                       }
                   },
        ]
    }
});

