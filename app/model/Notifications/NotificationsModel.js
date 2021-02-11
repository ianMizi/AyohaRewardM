Ext.define('ianMizi.model.Notifications.NotificationsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'Notification',
                 'NotificationDate',
                 'NotificationReadDate',
                 'SentFrom',
                 'Logo64',
                 'PaymentType',
                 'AccountNo',
                 'FlatBillAccountNo',
                 'TotalPaid',
                 'NotificationType',
                 'NotificationTitle',
                 'FlatbilliD',
                 'NotificationCode',
                 'ReceiptTemplateCode',
                 'AdvertisementImage',
                 'EnterpriseAddress',
                 'EnterpriseEmail',
                  'EnterprisePhoneNo',
                 'EnterpriseWebsite',
                 'SearchCol'
        ]
    }
});