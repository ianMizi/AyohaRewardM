Ext.define('ianMizi.model.ReceiptTemplate.ReceiptTemplateModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'TemplateHeader',
                 'TemplateDescription',
                 'TemplateDetails',
                 'TemplateAdvertisement',
                 'TemplateFooter',
                 'TemplateType',
                 'Status',
                 'CreatedDate',
                 'TagNote',
                 'TemplateCode'
        ]
    }
});