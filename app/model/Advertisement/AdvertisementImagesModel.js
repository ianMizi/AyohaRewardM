Ext.define('ianMizi.model.Advertisement.AdvertisementImagesModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'AdvertisementCode',  
      'AdvertisementImg',
      'AdvertisementImgName',
      'AdvertisementImgNote',
      'RowStatus',
      'EnterpriseHQAccNo',    
      'EnterpriseAccNo',
        {
            name: 'ModifyAdvertisementImg',
            convert: function (value, record) {
                var _value;
                var ImgPath = record.get('AdvertisementImg');

               
                    _value = '<div style="margin:-58px 0px 0px 0px;" ><img src="' + ImgPath + '" width="70" height="70" alt="Company Name"></div>'
            


                return _value;
            }
        },
      
        ]
    }
});