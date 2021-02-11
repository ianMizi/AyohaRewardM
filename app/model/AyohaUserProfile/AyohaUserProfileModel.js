Ext.define('ianMizi.model.AyohaUserProfile.AyohaUserProfileModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
     'ID',
      'AccountNo',
      'AccountName',
      'Email',
      'PhoneNo',
      'Photo',
      'Gender',
      'DOB',
      'RowStatus',
      'CreatedDate',
      'ModifiedDate',
      'UserName',
      'Katalaluan',
      'LastLoginDate',
      'PhotoName',
      'GUID',
      'isUserVerified',
      'VerifyString',
      'AyohaVersion',
        ]
    }
});