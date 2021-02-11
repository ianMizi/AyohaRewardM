



Ext.define('ianMizi.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mainPage',
    
    config: {
        fullscreen: true,
        id: 'mainView',
        // layout: 'card',
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                direction: 'left',
                //type: 'pop',
                //direction: 'left',
                duration: 250
            }

        },    
        items: [

            {
                //0
                xtype: 'Login',
              //  xtype: 'LoginAyohaUser',
            },

        {
            //1
            xtype: 'SummaryReceiptList',
            //style: "background-color: #FF9900; color:white;",
            //html: '<center>Item 2</center>'
        },


          {
              //2
              xtype: 'DetailReceiptList',
              //style: "background-color: #FF9900; color:white;",
              //html: '<center>Item 2</center>'
          },

           {
               //3
               xtype: 'Registrations',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
           {
               //4
               xtype: 'UserAccount',
               //style: "background-color: #FF9900; color:white;",
               //html: '<center>Item 2</center>'
           },
       
       {//5
           xtype: 'NotificationsPanelList',
       },
       {
           //6
           xtype: 'DashboardsList'
       },
       {
           //7
           xtype: 'FilterReceipts'
       },
       {
           //8
           xtype: 'SearchResultReceipt'
       },
        {
            //9
            xtype: 'EnterpriseList'
        },

       {   //10
           xtype: 'EnterpriseDetails'
       },
        {
            //11
            xtype: 'NotificationSummaryList'
        },

         {
             //12
             xtype: 'NotificationsPanelIndividual'
         },
        
         {
             //13
              xtype: 'xtypeLoyaltyCardStamp'
             //xtype: 'Dashboards'
         },
         {
             //14
             xtype: 'xtypeLoyaltyCardPoint'
           //  xtype: 'Dashboards'
         },
         {
             //15
             xtype: 'Dashboard'
         },
         //{//16
         //    xtype: 'SubscriberList'
         //},
        
        ]
    }
});


function notificationReceivednOpensetMykad() {

   
    Ext.getStore('CR_MobileUserLoadMyKadNoStore').getProxy().setExtraParams({
        CR_PlayerID: Ext.getCmp('CR_OneSignalID').getValue()
      //  CR_PlayerID: "33da98d8-5087-4514-b362-d90ab32bcb81"
    });
    Ext.StoreMgr.get('CR_MobileUserLoadMyKadNoStore').load();
    // Ext.Viewport.mask({ xtype: 'loadmask', message: 'Checking User Name' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('CR_MobileUserLoadMyKadNoStore').getProxy().setExtraParams({
            CR_PlayerID: Ext.getCmp('CR_OneSignalID').getValue()
          //  CR_PlayerID: "33da98d8-5087-4514-b362-d90ab32bcb81"
        });
        Ext.StoreMgr.get('CR_MobileUserLoadMyKadNoStore').load();
        var myStore = Ext.getStore('CR_MobileUserLoadMyKadNoStore');
        var modelRecord = myStore.getAt(0);
        
        var CurrMykadNo = modelRecord.get('CR_MykadNo');
        var CurrAccountNo = modelRecord.get('CR_AccountNo');
        localStorage.setItem('CurrMykadNo', CurrMykadNo);
        localStorage.setItem('CurrAccountNo',CurrAccountNo);
     

        //alert(GetCurrentMyKadNo() + "{{{{{{{{{{{{{{{---|||||||||||" + GetCurrentAccountNo());
       

    });
    task.delay(1000);

}