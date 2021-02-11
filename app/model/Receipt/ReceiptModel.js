Ext.define('ianMizi.model.Receipt.ReceiptModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'PlateNumber',
                 'VehicleModel',
                 'CustomerName',
                 'CustomerIdentity',
                 'Mileage',
                 'TotalAmount',
                 'UTCBillDate',
                 'BillId',
                 'Quantity',
                 'Description',
                 'Price',
                 'Amount',
                 'ReferralPerson',
                 'CompanyName',
                  'PartiallyPaid',
                 'General',
                 'Claimable',
                 'Warranty',
                   'Deposit',
                 'Confirm',
                 'New',
                 'Reject'
        ]
    }
});