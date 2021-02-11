Ext.define('ianMizi.model.Subscriber.SubscriberModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'RowNumber',
                 'SubcriberAccNo',
                 'SubscribedDate',
                 'CR_AccountName',
                 'CR_Email',
                 'CR_PhoneNumber',
                 'LoyaltyCardType',
                 'countStamps',
                 'LastStampDate',
                 'LastStampBy',
                 'SearchCol',
                 'CR_Photo',
                  {
                      name: 'LoyaltyCardTypeReference',
                      convert: function (value, record) {
                          var _value = ""

                          var str = record.get('LoyaltyCardType');
                          var strLastStampDate = record.get('LastStampDate');
                          var strLastStampBy = record.get('LastStampBy');
                          var strcountStamps = record.get('countStamps');
                          if (str == "Point") {
                              _value = '<img src="resources/icons/pointPurpleOne.png"style="width: 35px; height: 35px; margin-top: -6px;" /><div style="margin:-25px 0px 0px 40px;"><font size="4"><b>1000 Point !!</b></font></div>';
                          }
                          if (str == "Stamp") {
                              _value = '<img src="resources/icons/StampTiltLeftOne.png"style="width: 35px; height: 35px; margin-top: -6px;" /><div style="margin:-40px 0px 0px 40px;"><font size="1">Stamp:</font></div><br><div style="margin:-16px 0px 0px 40px;"><font size="5"><b>'+strcountStamps+'</b></font> (<font size="1"><b>Last Stamp On:' + strLastStampDate + '</b></font>)</div>';
                          }





                          return _value;
                      }
                  },
        ]
    }
});