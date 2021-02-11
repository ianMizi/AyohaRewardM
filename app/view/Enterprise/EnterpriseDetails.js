
var SubscribedCRNotification = '0';
var SubscribedNewAndPromoNotification = '0';
Ext.define('ianMizi.view.Enterprise.EnterpriseDetails', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'EnterpriseDetails',
    id: 'EnterpriseDetailsID',
    requires: [
          'Ext.dataview.List',
          'Ext.data.Store'
    ],
    zIndex: 20,
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
   
       

        items: [

{

    xtype: 'toolbar',
    title: '<font size="4" color="white">Enterprise Detail</font>',
    docked: 'top',
    id: 'toolbarEnterpriseDetailsTop',
    style: {

        background: '#f44336',

    },
    items:
           [


               {
                   xtype: 'button',

                   id: 'btnEnterpriseDetailsHome',
                   //  text: 'Show',
                   iconCls: 'list',
                   // html: '<div ><img src="resources/icons/hideGeofence.png" width="33" height="23" alt="Company Name"></div>',
                   ui: 'plain',
                   handler: function () {
                       DrawerMenuShow();
                   }



               },
            {
                xtype: 'spacer'
            },
              {
                  xtype: 'button',
                  id: 'btnNotificationEnterpriseDetails',
                  // badgeText: '1',
                  html: '<div ><img src="resources/icons/Notification.png" width="30" height="30" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {
                      loadNotificationSummary();
                  }
              },

           ]

},



{
    xtype: 'fieldset',
    id: 'fieldsetEnterpriseSubscriptions',
    margin: '-5 8 0 8',
    title: 'Notification Subscriptions',
    defaults: {

        labelWidth: '60%'
    },
    items: [


         {
             xtype: 'togglefield',
             // text:'NO/YES',
             //    name: 'toggleName',
             id: 'togglefieldCloudReceipts',
             label: 'Cloud Receipts',
             value: false,
             listeners: {
                 change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                     //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                     if (newValue == true) { // if toggle is true then enable the slider
                         // percentageComponent.enable();
                         // alert('en');
                         Ext.getCmp('togglefieldCloudReceipts').setLabel('Cloud Receipts - (YES)');
                         SubscribedCRNotification = '1';
                     } else { // else make it false
                         //   percentageComponent.disable();
                         // alert('dis');
                         Ext.getCmp('togglefieldCloudReceipts').setLabel('Cloud Receipts - (NO)');
                         SubscribedCRNotification = '0';
                     }


                 },


             }


         },
            {
                xtype: 'togglefield',
                // text:'NO/YES',
                //    name: 'toggleName',
                id: 'togglefieldNewandPromotion',
                label: 'News&Promotions',
                value: false,
                listeners: {
                    change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                        //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                        if (newValue == true) { // if toggle is true then enable the slider
                            Ext.getCmp('togglefieldNewandPromotion').setLabel('News&Promotions - (YES)');
                            SubscribedNewAndPromoNotification = '1';
                        } else { // else make it false
                            Ext.getCmp('togglefieldNewandPromotion').setLabel('News&Promotions - (NO)');
                            SubscribedNewAndPromoNotification = '0';
                        }


                    },


                }


            },
            {
                xtype: 'container',
                id: 'ContainerbtnEnterpriseDetailSubscriptionSave',
                // hidden:true,
                margin: '0 0 0 0',
                defaults: {
                    xtype: 'button',
                    height: 42,
                    //style: 'margin: .5em',
                    flex: 1
                },
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        //text: 'Save',
                        ui: 'plain',
                        scope: this,
                        text: '<button class="buttonSave buttonSaves">Save</button>',
                        hasDisabled: false,
                        handler: function (btn) {
                           
                            LoadingCustomMsgShow('Processing..', '4');

                            Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                NotificationsSubscribtions();
                                Ext.Viewport.setMasked(false);


                            });
                            task.delay(1000);

                            

                        }
                    },

                ]

            },


    ]




},




           
               
                    {


                        xtype: 'fieldset',
                        autoScroll: true,
                        id: 'fieldsetEnterpriseDetails',
                        title: 'Enterprise Details',
                        defaults: {
                            labelWidth: '0%',

                        },


                        items: [


                            {

                                xtype: 'image',
                                src: 'resources/icons/CloudReceipt4.png',
                                width: 320,
                                id: 'PictureLogoEnterpriseDetails',
                                margin: '10 0 5 15',
                                //left:-2,
                                height: 150,
                            },

                                                 



                                                 

                       {
                           xtype: 'textfield',
                           id: 'EnterpriseDetailsIDtxt',
                           label: 'ID',
                           hidden: true,
                           disabled: true,
                           autoCapitalize: true,
                           //required: true,
                           clearIcon: true
                       },
                        {
                            xtype: 'label',
                            id: 'lblEnterpriseDetailsAccountNo',
                            // hidden:true,
                            margin: '0 0 0 0',
                            html: '<font size="3" color="black"><b><u>Account No:</u></b></font>'
                        },
                        {
                            xtype: 'textfield',
                            id: 'EnterpriseDetailsAccountNo',
                            label: '',
                            // hidden: true,
                            //disabled: true,
                            disabled: true,
                        },
                         {
                             xtype: 'label',
                             id: 'lblEnterpriseDetailsName',
                             // hidden:true,
                             margin: '0 0 0 0',
                             html: '<font size="3" color="black"><b><u>Enterprise:</u></b></font>'
                         },
                            {
                                xtype: 'textfield',
                                id: 'EnterpriseDetailsName',
                                label: '',
                                disabled: true,
                            },

                            {
                                xtype: 'label',
                                id: 'lblEnterpriseDetailsAddress',
                                // hidden:true,
                                margin: '0 0 0 0',
                                html: '<font size="3" color="black"><b><u>Address:</u></b></font>'
                            },
                                {
                                    xtype: 'textareafield',
                                    id: 'EnterpriseDetailsAddress',
                                    label: '',
                                    readOnly: true,
                                    //placeHolder: 'Tom Roy',
                                    disabled: true,
                                },
                                {
                                    xtype: 'label',
                                    id: 'lblEnterpriseDetailsRegistrationNo',
                                    // hidden:true,
                                    margin: '0 0 0 0',
                                    html: '<font size="3" color="black"><b><u>Registration No:</u></b></font>'
                                },
                               {
                                   xtype: 'textfield',
                                   id: 'EnterpriseDetailsRegistrationNo',
                                   label: '',
                                   readOnly: true,
                                   // name:'Accou',
                                   //placeHolder: 'Tom Roy',
                                   disabled: true,
                               },
                               {
                                   xtype: 'label',
                                   id: 'lblEnterpriseDetailsGSTNo',
                                   // hidden:true,
                                   margin: '0 0 0 0',
                                   html: '<font size="3" color="black"><b><u>GST No:</u></b></font>'
                               },
                                {
                                    xtype: 'textfield',
                                    id: 'EnterpriseDetailsGSTNo',
                                    label: '',
                                    readOnly: true,
                                    disabled: true,
                                   
                                },
                                {
                                    xtype: 'label',
                                    id: 'lblEnterpriseDetailsPhoneNo',
                                    // hidden:true,
                                    margin: '0 0 0 0',
                                    html: '<font size="3" color="black"><b><u>Telephone No:</u></b></font>'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'EnterpriseDetailsPhoneNo',
                                    label: '',
                                    readOnly: true,
                                    disabled: true,
                                },
                                {
                                    xtype: 'label',
                                    id: 'lblEnterpriseDetailsFaxNo',
                                    // hidden:true,
                                    margin: '0 0 0 0',
                                    html: '<font size="3" color="black"><b><u>Fax No:</u></b></font>'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'EnterpriseDetailsFaxNo',
                                    label: '',
                                    readOnly: true,
                                },
                                {
                                    xtype: 'label',
                                    id: 'lblEnterpriseDetailsEmail',
                                    // hidden:true,
                                    margin: '0 0 0 0',
                                    html: '<font size="3" color="black"><b><u>Email:</u></b></font>'
                                },
                                {
                                    xtype: 'textfield',
                                    id: 'EnterpriseDetailsEmail',
                                    label: '',
                                    readOnly: true,
                                    disabled: true,
                                },
                                 {
                                     xtype: 'label',
                                     id: 'lblEnterpriseDetailsWebsite',
                                     // hidden:true,
                                     margin: '0 0 0 0',
                                     html: '<font size="3" color="black"><b><u>Website:</u></b></font>'
                                 },
                                {
                                    xtype: 'textfield',
                                    id: 'EnterpriseDetailsWebsite',
                                    label: '',
                                    readOnly: true,
                                    disabled: true,
                                },
                                {
                                    xtype: 'label',
                                    id: 'lblEnterpriseDetailsCreatedDate',
                                    // hidden:true,
                                    margin: '0 0 0 0',
                                    html: '<font size="3" color="black"><b><u>Created Date:</u></b></font>'
                                },
                                 {
                                     xtype: 'textfield',
                                     id: 'EnterpriseDetailsCreatedDate',
                                     label: '',
                                     readOnly: true,
                                     disabled: true,
                                 },
                                 {
                                     xtype: 'label',
                                     id: 'lblEnterpriseDetailsStatus',
                                     // hidden:true,
                                     margin: '0 0 0 0',
                                     html: '<font size="3" color="black"><b><u>Status:</u></b></font>'
                                 },
                                 {
                                     xtype: 'textfield',
                                     id: 'EnterpriseDetailsStatus',
                                     label: '',
                                     readOnly: true,
                                     disabled: true,
                                 },
                                
                                {
                                    xtype: 'label',
                                    id: 'lblEnterpriseDetailsDescriptions',
                                    // hidden:true,
                                    margin: '0 0 0 0',
                                    html: '<font size="3" color="black"><b><u>Business Nature:</u></b></font>'
                                },
                                 {
                                     xtype: 'textareafield',
                                     id: 'EnterpriseDetailsDescriptions',
                                     label: '',
                                     readOnly: true,
                                     disabled: true,
                                 },


                        ]
                    },


 



 {
     xtype: 'fieldset',
    
     id: 'fieldsetEnterpriseReport',
     margin: '-10 8 0 8',
     title: 'Report',
     defaults: {

         labelWidth: '0%'
     },
     items: [


           //{
           //    xtype: 'label',
           //    id: 'lblEnterpriseDetailsReport',
           //    // hidden:true,
           //    margin: '0 0 0 0',
           //    html: '<font size="3" color="black"><b><u>Report</u></b></font>'
           //},
                                 {
                                     xtype: 'textareafield',
                                     id: 'EnterpriseDetailsReporttxtarea',
                                     placeHolder: 'Report if you feel annoying with fake receipts/spam or others inconveniances Notification from this enterprise',
                                     label: '',
                                     
                                 },

                                 {
                                     xtype: 'container',
                                     id: 'ContainerbtnEnterpriseDetailReportSave',
                                     // hidden:true,
                                     margin: '0 0 0 0',
                                     defaults: {
                                         xtype: 'button',
                                         height: 42,
                                         //style: 'margin: .5em',
                                         flex: 1
                                     },
                                     layout: {
                                         type: 'hbox'
                                     },
                                     items: [
                                         {
                                             //text: 'Save',
                                             ui: 'plain',
                                             scope: this,
                                             text: '<button class="buttonSave buttonSaves">Send Report</button>',
                                             hasDisabled: false,
                                             handler: function (btn) {
                                                 //LoadingCustomMsgShow('Processing..', '4');



                                             }
                                         },

                                     ]

                                 },

     ]




 },
           





           

        ]

    
},
});


function loadEnterpriseDetails(ID, EnterpriseAccNo) {
    console.log(EnterpriseAccNo); console.log(ID); console.log(GetCurrentAccountNo());
    routesArray.push("mainView,view,10");
    Ext.getCmp('mainView').setActiveItem(10);
    Ext.getStore('EnterprisegetDetailsStore').getProxy().setExtraParams({
        ID: ID,
        EnterpriseAccNo: EnterpriseAccNo,
        SubcriberAccNo: GetCurrentAccountNo()
    });
    Ext.StoreMgr.get('EnterprisegetDetailsStore').load();
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading..' });
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisegetDetailsStore').getProxy().setExtraParams({
            ID: ID,
            EnterpriseAccNo: EnterpriseAccNo,
            SubcriberAccNo: GetCurrentAccountNo()
        });
        Ext.StoreMgr.get('EnterprisegetDetailsStore').load();
        var myStore = Ext.getStore('EnterprisegetDetailsStore');
        var modelRecord = myStore.getAt(0);
       
        var EnterpriseName = modelRecord.get('EnterpriseName');
        console.log(EnterpriseName);
        Ext.getCmp('EnterpriseDetailsIDtxt').setValue(modelRecord.get('ID'));
        Ext.getCmp('EnterpriseDetailsAccountNo').setValue(modelRecord.get('EnterpriseAccNo'));
        Ext.getCmp('EnterpriseDetailsName').setValue(EnterpriseName);
        Ext.getCmp('EnterpriseDetailsAddress').setValue(modelRecord.get('EnterpriseAddress'));
        Ext.getCmp('EnterpriseDetailsRegistrationNo').setValue(modelRecord.get('EnterpriseRegistrationNo'));
        Ext.getCmp('EnterpriseDetailsGSTNo').setValue(modelRecord.get('EnterpriseGSTNo'));
        Ext.getCmp('EnterpriseDetailsPhoneNo').setValue(modelRecord.get('EnterprisePhoneNo'));
        Ext.getCmp('EnterpriseDetailsFaxNo').setValue(modelRecord.get('EnterpriseFaxNo'));
        Ext.getCmp('EnterpriseDetailsEmail').setValue(modelRecord.get('EnterpriseEmail'));
        Ext.getCmp('EnterpriseDetailsWebsite').setValue(modelRecord.get('EnterpriseWebsite'));
        Ext.getCmp('EnterpriseDetailsCreatedDate').setValue(modelRecord.get('CreatedDate'));
        Ext.getCmp('EnterpriseDetailsStatus').setValue(modelRecord.get('Status'));
        Ext.getCmp('EnterpriseDetailsDescriptions').setValue(modelRecord.get('EnterpriseDescriptions'));
       Ext.getCmp('PictureLogoEnterpriseDetails').setSrc(modelRecord.get('EnterpriseLogo64'));

       var SubscribedCloudReceipt = modelRecord.get('SubscribedCloudReceipt');
       var SubscribedNewsAndPromotion = modelRecord.get('SubscribedNewsAndPromotion');
       console.log(SubscribedCloudReceipt);
       console.log(SubscribedNewsAndPromotion);
       if (SubscribedCloudReceipt == '1') {
           Ext.getCmp('togglefieldCloudReceipts').setValue(true);
       } else {
           Ext.getCmp('togglefieldCloudReceipts').setValue(false);
       }
       if (SubscribedNewsAndPromotion == '1') {
           Ext.getCmp('togglefieldNewandPromotion').setValue(true);
       } else {
           Ext.getCmp('togglefieldNewandPromotion').setValue(false);
       }
        //var CR_ID = modelRecord.get('ID');
        //Ext.getCmp('CR_VerificationCodeString').setValue(VerifyString);
        //Ext.getCmp('CR_ID').setValue(CR_ID);
        //var PhoneNo = Ext.getCmp('CR_PhoneNumber').getValue();
        //sendSMSverifycode(PhoneNo, VerifyString)
        routeCurrPage = '10';
        Ext.Viewport.setMasked(false);

        LoadingPanelHide();

     
    });
    task.delay(2000);
    
}



function NotificationsSubscribtions() {

    Ext.Ajax.request({

        url: GetAPIurl() + '/EnterpriseSubscriber/EnterpriseSubscriberInsert',

        params: {
            SubcriberAccNo: GetCurrentAccountNo(),
            EnterpriseAccNo: Ext.getCmp('EnterpriseDetailsAccountNo').getValue(),
            SubscribedCloudReceipt: SubscribedCRNotification,
            SubscribedNewsAndPromotion: SubscribedNewAndPromoNotification,
            User: GetCurrentUserName()
        },
        success: function (result, request) {
            LoadingCustomMsgHide();
            LoadingCustomMsgShow('Success!', '3');

        },
        failure: function (result, request) {
            LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });


}