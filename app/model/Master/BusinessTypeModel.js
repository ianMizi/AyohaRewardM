Ext.define('ianMizi.model.Master.BusinessTypeModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'BusinessType',
                 'BusinessTypeCode',
                 'RowStatus',
                 'BusinessTypeGroup'
        ]
    }
});