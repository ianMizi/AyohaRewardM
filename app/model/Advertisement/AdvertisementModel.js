Ext.define('ianMizi.model.Advertisement.AdvertisementModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'AdvertisementCode',
      'AdvertisementTitle',
      'AdvertisementDesc',
      'AdvertisementImg',
      'AdvertisementImgName',
      'AdvertisementStartDate',
      'AdvertisementEndDate',
      'AdvertisementStartDateOnly',
      'AdvertisementEndDateOnly',
      'AdvertisementType',
      'AdvertisementStatus',
      'AdvertisementNote',
      'EnterpriseAccNo',
      'EnterpriseHQAccNo',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'ModifiedRemarks',
      'RowStatus',
      'AdvertisementPeriod',
      'AdvertisementFees',
      'AdvertisementMedia',
      'AdvertismentMediaUrl',
      'AdvertismentMediaNote',
      'MediaType',
      'MediaFileName',
      'AdvertisementTitle',
      'AdvertisementCode',
      'AdvertisementEndDate',
      'EnterpriseName',
      'EnterpriseLogoPath',
      'EnterpriseEmail',
      'EnterpriseFacebook',
      'EnterpriseInstagram',
      'EnterpriseCoordinate',
      'EnterpriseTwiter',
      'EnterpriseWebsite',
      'PICContactNo',
          {
              name: 'AdvertisementStatusButton',
              convert: function (value, record) {
                  var _value;

                  var str = record.get('AdvertisementStatus');
                  var ID = record.get('ID');

                  if (str == "Submitted") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;visibility:hidden"><img src="resources/icons/analisisThree.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>Analysis</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/settingPurple.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>Setting</u></button></div><br>'
                      return _value;
                     // return;
                  }

                  else
                  if (str == "Approved") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;visibility:hidden"><img src="resources/icons/analisisThree.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>Analysis</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/viewCardPurpleExt.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>View Detail</u></button></div><br>'
                      return _value;
                  }
                  else
                  if (str == "Rejected") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;visibility:hidden"><img src="resources/icons/analisisThree.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>Analysis</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/viewCardPurpleExt.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>View Detail</u></button></div><br>'
                      return _value;
                  } else
                      if (str == "Published" || str == "Publishing") {
                      _value = '<div style="width:100%;height:65px;text-align:right;margin:-200px 0px 0px 0px;"><img src="resources/icons/analisisThree.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton"><u>Analysis</u></button></div><br><br><br><div style="width:100%;height:65px;text-align:right;margin:0px 0px 0px 0px;"  onclick="FloatPanel_AdvertisementSettingEditShowing(' + ID + ')"><img src="resources/icons/viewCardPurpleExt.png"  width="50" height="50" margin="0px -20px 0px 0px" alt="Company Name"><br><button class="buttonStampCampaignModelButton" ><u>View Detail</u></button></div><br>'
                      return _value;
                  }
                  


               
              }
          },
        ]
    }
});

