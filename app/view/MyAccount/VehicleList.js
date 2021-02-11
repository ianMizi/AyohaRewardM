

Ext.define('ianMizi.view.MyAccount.VehicleList', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'MyAccountVehicleList',
    id: 'MyAccountVehicleListID',
    requires: [
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    zIndex: 20,
    config: {
        style: ' background-color:white;',
        layout: 'vbox', //  add a layout
        items:
        [


            {
                xtype: 'toolbar',
                title: '<font size="4" color="white">V.Boundary Trace Alert</font>',
                docked: 'top',
                id: 'toolbarListOfTraceAlertFenceTop',
                style: {
                    background: '#D25959',
                },
                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnListOfTraceAlertFenceHome',
                               iconCls: 'home',
                               ui: 'plain',
                               handler: function () {
                                   Ext.Viewport.mask({ xtype: 'loadmask', message: 'Login....' });
                                   var task = Ext.create('Ext.util.DelayedTask', function () {
                                       _DataStore_CustomergetByCustomerNumberJoinVehicle.getProxy().setExtraParams({                                         
                                           CustomerNumber: 'CN0000002',
                                       });

                                       //  _DataStore_GPSUserLogin.getProxy().setUrl(document.location.protocol + '//' + document.location.host + '/GPSUser/GPSuserLoginR');

                                       _DataStore_CustomergetByCustomerNumberJoinVehicle.load({

                                           callback: function (record, operation, success) {


                                               if (success) {
                                                   var store = _DataStore_CustomergetByCustomerNumberJoinVehicle.getAt(0);


                                                   if (store != null) {




                                                   } else {
                                                       Ext.Msg.alert("Failed.!");
                                                       //CustomeMsgBoxShow("Failed !!");
                                                       //_IsSuccessLogin = false;
                                                   }
                                               }
                                               else {
                                                   Ext.Msg.alert("Failed.!");
                                                   //CustomeMsgBoxShow("Failed !!");
                                                   //_IsSuccessLogin = false;
                                               }



                                           }
                                       })

                                       Ext.Viewport.setMasked(false);
                                   });
                                   task.delay(1000);
                               }
                           },
                             {
                                 xtype: 'spacer'
                             },
                                       //{
                                       //    xtype: 'button',
                                       //    id: 'btnListOfTraceAlertFenceAccInfo',
                                       //    html: '<div ><img src="resources/icons/MainMenuPictureProfile.png" width="45" height="45" alt="Company Name"></div>',
                                       //    ui: 'plain',
                                       //    handler: function () {

                                       //    }
                                       //},
                       ]
            },
                {


                    xtype: 'toolbar',
                    // xtype: 'titlebar',
                    docked: 'bottom',
                    style: {
                        background: '#D25959',
                    },
                    items: [
                            {


                                xtype: 'button',
                                id: 'btnListOfTraceAlertFenceCountRecord',

                                html: '<font size="2" color="white">0 Record</font>',
                                ui: 'plain',
                                handler: function () {

                                    Ext.getCmp('mainView').setActiveItem(1);

                                }
                            },

                          {
                              xtype: 'spacer'
                          },
                         {


                             xtype: 'button',
                             id: 'btnListOfTraceAlertFenceBack',
                             height: 40,
                             width: 40,
                             //    html: '<div ><img src="resources/icons/WhiteBackIcon.png" width="30" height="30" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {

                                 Ext.getCmp('mainView').setActiveItem(1);

                             }
                         },



                    ]


                },

            {
                xtype: 'container',
                layout: {
                    type: 'vbox'
                },
                items: [
             {
                 xtype: 'label',
                 // id: 'Queue_GetDetailQueueLabel',
                 html: '<u><b>Trace Alert Out Of Virtual Boundary</b></u>'
             },
             {
                 xtype: 'container',
                 // width:'100%',
                 //style: 'background-color: transparent;',
                 layout: {
                     type: 'hbox',
                 },
                 items: [

                                           {
                                               xtype: 'datepickerfield',
                                               id: 'ListOfTraceAlertFenceYearDate',
                                               destroyPickerOnHide: true,
                                               label: 'Year',
                                               width: 180,


                                               //   name: 'Queue_GetDetailQueue',
                                               // dateFormat: "d/m/Y",
                                               dateFormat: "Y",
                                               clearIcon: true,
                                               //  dateFormat: "Y-m-d",



                                               value: new Date(),
                                               //picker: {
                                               //    yearFrom: 1900
                                               //},
                                               picker: { xtype: 'datepicker', slotOrder: ["year"], },
                                               listeners: {
                                                   change: function () {
                                                       //console.log(isFirstLoadListOfTraceAlertFence);

                                                       //if (isFirstLoadListOfTraceAlertFence == 'no') {
                                                       //    var month = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceMonthDate').getValue()), 'm');
                                                       //    var year = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceYearDate').getValue()), 'Y');
                                                       //    console.log(year);
                                                       //    console.log(month);
                                                       //    LoadListOfTraceAlertFence(year, month);
                                                       //}

                                                   }
                                               }




                                           },
                                             {
                                                 xtype: 'datepickerfield',
                                                 id: 'ListOfTraceAlertFenceMonthDate',
                                                 destroyPickerOnHide: true,
                                                 label: 'Month',
                                                 labelWidth: 70,
                                                 width: 180,


                                                 //   name: 'Queue_GetDetailQueue',
                                                 // dateFormat: "d/m/Y",
                                                 dateFormat: "m",
                                                 clearIcon: true,
                                                 //  dateFormat: "Y-m-d",



                                                 value: new Date(),
                                                 //picker: {
                                                 //    yearFrom: 1900
                                                 //},
                                                 picker: { xtype: 'datepicker', slotOrder: ["month"], },
                                                 listeners: {
                                                     change: function () {

                                                         // dateFromFormated = Ext.Date.format(new Date(Ext.getCmp('TrackingHistoryCreateriaFromDate').getValue()), 'Y-m-d');
                                                         //console.log(isFirstLoadListOfTraceAlertFence);
                                                         //if (isFirstLoadListOfTraceAlertFence == 'no') {
                                                         //    var month = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceMonthDate').getValue()), 'm');
                                                         //    var year = Ext.Date.format(new Date(Ext.getCmp('ListOfTraceAlertFenceYearDate').getValue()), 'Y');
                                                         //    console.log(year);
                                                         //    console.log(month);
                                                         //    LoadListOfTraceAlertFence(year, month);
                                                         //}

                                                         //  _trackingHistoryMapConfig_dateFromFormated = Ext.Date.format(new Date(Ext.getCmp('TrackingHistoryCreateriaFromDate').getValue()), 'Y-m-d');


                                                     }
                                                 }




                                             },


                 ]
             },
              {
                  xtype: 'label',
                  // id: 'Queue_GetDetailQueueLabel',
                  //  width:'100%',
                  margin: '-15 0 0 0',
                  html: '<u>_________________________________________________________________________________________________</u>'
              },
             //{
             //     xtype: 'panel',
             //     width: '100%',
             //     id: 'TraceAlertHeaderMobile',
             //     hidden: true,
             //     // docked: 'top',
             //     style: 'background-color:black; color: floralwhite;',
             //     height: 0,
             //     items: [
             //         {
             //             html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><span style="font-family: Arial; text-transform:uppercase;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><div style="float:left;width:30%"><b>NAME</div><div style="float:left;width:28%"><b>DATE</b></div ><div style="float:left;width:3%"><b>ID</b></div></div></div></div>'
             //         }
             //     ]
             // },
             //{
             //    xtype: 'panel',
             //    width: '100%',
             //    id: 'TraceAlertHeaderPC',
             //    hidden: true,
             //    // docked: 'top',
             //    style: 'background-color:black; color: floralwhite;',
             //    height: 0,
             //    items: [
             //        {
             //            html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected"><div class="x-innerhtml" style="padding: 12px;"><span style="font-family: Arial; text-transform:uppercase;"><div style="overflow:auto;width:100%;height:100%;font-size: 65%;"><div style="float:left;width:7%"><b>NAME</div><div style="float:left;width:6%"><b>DATE</b></div ><div style="float:left;width:3%"><b>ID</b></div></div></div></div>'
             //        }
             //    ]
             //},


                ]
            },





         {
             xtype: 'list',
             flex: 1,
             store: _DataStore_CustomergetByCustomerNumberJoinVehicle,
             id: '_DataStore_CustomergetByCustomerNumberJoinVehicleID',
             mode: 'SINGLE',





             itemTpl: new Ext.XTemplate(
	
		'<h1>{PlateNumber}</h1>',
		'<p>{Model}, {Type}</p>'
             ),

             //itemTpl: '<div class="myContent">' +
             //itemTpl: '<div style="display: none;><b>CustomerId:</b><i>{CustomerId}</i></div>' +
             //    '<div><b>PlateNumber:</b><i>{PlateNumber}</i></div>' +
             //       '<div><b>Model:</b><i>{Model}</i></div>' +
             //          '<div><b>Type:</b><i>{Type}</i></div>',
                //       +
              

                //'</div>',
             height: '100%',
             listeners: {
                 itemsingletap: function (list, idx, target, records, evt) {

                     //Ext.getCmp('mainView').setActiveItem(14);
                     TrackIDAlert = records.get('PlateNumber');
                     alert(TrackIDAlert);
                     //DateAlert = records.get('TrackingItem_Alert');
                     //TrackItemAlert = records.get('TrackItem');
                     //GeofenceID = records.get('CreatedGeofenceID');
                     //FenceAreaName = records.get('FenceAreaName');
                     //TimeAlert = records.get('TimeAlert');
                     //ActiveVBoundaryTime = records.get('TimeFrom') + '-' + records.get('TimeTo');
                     ////Fencelength = records.get('Fencelength');
                     //Ext.getStore('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').getProxy().setExtraParams({
                     //    TrackID: TrackIDAlert,
                     //    DateFrom: DateAlert,
                     //    DateTo: DateAlert,
                     //    geofenceID: GeofenceID,
                     //});
                     //Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').load();
                     //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Ploting Point.. Please Wait..' });
                     //var task = Ext.create('Ext.util.DelayedTask', function () {
                     //    Ext.getStore('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').getProxy().setExtraParams({
                     //        TrackID: TrackIDAlert,
                     //        DateFrom: DateAlert,
                     //        DateTo: DateAlert,
                     //        geofenceID: GeofenceID,
                     //    });
                     //    Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoTrackIDGeofenceID').load();
                     //    TraceAlertFencePlotingHistoryXypath(TrackIDAlert, DateAlert, DateAlert, TrackItemAlert, GeofenceID);




                     //    Ext.Viewport.setMasked(false);
                     //});
                     //task.delay(2000);

                     //setTimeout(function () {
                     //    list.deselectAll();
                     //    TraceAlertFenceHistoryInfoShow();



                     //}, 500);
                 },
                 deselect: function (list, records) {
                     // console.log(records.get('DeviceID'));
                     //var value_to_remove = records.get('DeviceID');
                     //trackingid.splice(trackingid.indexOf(value_to_remove), 1);


                 }
             },

         },
        ]
    }

});



function LoadListOfTraceAlertFence(year, month) {
    console.log('LoadListOfTraceAlertFence');
    console.log(year);
    console.log(month);
    Ext.getStore('TraceAlertHistoryGetByAccNoYearMonth').getProxy().setExtraParams({
        AccNo: GetCurrentUserAccountNo(),
        Year: year,
        Month: month,
    });
    Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoYearMonth').load();


    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Loading Data..' });

    var task = Ext.create('Ext.util.DelayedTask', function () {

        setTimeout(function () {


            Ext.getStore('TraceAlertHistoryGetByAccNoYearMonth').getProxy().setExtraParams({
                AccNo: GetCurrentUserAccountNo(),
                Year: year,
                Month: month,
            });
            Ext.StoreMgr.get('TraceAlertHistoryGetByAccNoYearMonth').load();
            var myStoreTraceAlert = Ext.getStore('TraceAlertHistoryGetByAccNoYearMonth');
            var count = myStoreTraceAlert.getCount();
            Ext.getCmp('btnListOfTraceAlertFenceCountRecord').setHtml('<font size="3" color="white">' + count + ' Records</font>');

        }, 500);

        Ext.Viewport.unmask();
    });
    task.delay(1000);

}