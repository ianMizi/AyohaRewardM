Ext.define('ianMizi.store.Customer.CustomerStore', {

});


var _DataStore_CustomergetByCustomerNumber = Ext.create('Ext.data.Store', {
    model: 'ianMizi.model.Customer.CustomerModel',
    id: 'CustomergetByCustomerNumber',
    proxy: {
        type: 'ajax',
        //url: 'http://192.168.0.103:9019/Customer/CustomergetByCustomerNumber',
        url: GetAPIurl() + '/Customer/CustomergetByCustomerNumber',
       // url: document.location.protocol + '//' + document.location.host + '/Customer/CustomergetByCustomerNumber',
        actionMethods: {
            read: 'GET'
        },

        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    //autoLoad: true
});




var _DataStore_CustomergetByCustomerNumberJoinVehicle = Ext.create('Ext.data.Store', {
    model: 'ianMizi.model.Customer.CustomerModel',
    id: 'CustomergetByCustomerNumberJoinVehicle',
    proxy: {
        type: 'ajax',
        //  url: 'http://192.168.0.103:9019/Customer/CustomergetByCustomerNumberJoinVehicle',
        url: GetAPIurl() + '/Customer/CustomergetByCustomerNumberJoinVehicle',
       // url: document.location.protocol + '//' + document.location.host + '/Customer/CustomergetByCustomerNumberJoinVehicle',
        actionMethods: {
            read: 'GET'
        },

        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    //autoLoad: true
});