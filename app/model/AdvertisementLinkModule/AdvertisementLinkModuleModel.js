Ext.define('ianMizi.model.AdvertisementLinkModule.AdvertisementLinkModuleModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'AdvertisementCode',
                 'ModuleCode',
                 'ModuleName',
                 'ModuleDesc',
                 'RowStatus',
                 'EnterpriseHQAccNo',
                 'EnterpriseAccNo',
                 'CreatedBy',
                 'CreatedDate'
        ]
    }
});