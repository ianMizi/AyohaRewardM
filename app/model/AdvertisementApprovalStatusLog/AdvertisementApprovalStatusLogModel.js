Ext.define('ianMizi.model.AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'AdvertisementID',
                 'AdvertisementCode',
                 'AdvertisementStatus',
                 'AdvertisementStatusRemarks',
                 'EnterpriseAccNo',
                 'EnterpriseHQAccNo',
                 'CreatedBy',
                 'CreatedDate'
        ]
    }
});