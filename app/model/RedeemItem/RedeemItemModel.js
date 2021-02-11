Ext.define('ianMizi.model.RedeemItem.RedeemItemModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'CloudReceiptAccNo',
                 'EnterpriseAccNo',
                 'ItemName',
                 'ItemCode',
                 'ItemPoint',
                 'ItemImg',
                 'RowStatus',
                 'CreatedBy',
                 'CreatedDate',
                 'ModifiedBy',
                 'ModifiedDate',
                 'Remarks',
        ]
    }
});