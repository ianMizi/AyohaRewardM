Ext.define('ianMizi.view.Dashboard.Dashboards', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'DashboardsList',
    id: 'DashboardsPaneltID',
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
                title: '<font size="4" color="white">Dashboard</font>',
                docked: 'top',
                id: 'DashboardstoolbarTop',
                style: {

                    background: '#f44336',

                },

                items:
                       [
                           {
                               xtype: 'button',
                               id: 'DashboardsPanelHome',
                               iconCls: 'list',
                               //  html: '<div ><img src="resources/icons/ListIcon.png" width="30" height="30" alt="Company Name"></div>',
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
                                            id: 'btnNotification_DashboardsPanel',
                                            //  badgeText: '1',
                                            html: '<div ><img src="resources/icons/Notification.png" width="30" height="30" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {
                                                // NotificationsPanelShow();
                                            }
                                        },


                       ]
            },


            {
                xtype: 'container',
                style: 'border-bottom:1px solid;background-color:white;border-color:black',
                //  height: 34,
                width: '100%',
                height: '100%',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [


               {

                   //id: 'lblCountNotificationsPanel',
                   //// hidden:true,
                   //margin: '5 0 0 0',
                   //width: 104,
                   //height: 104,
                   xtype: 'button',
                   align: 'strecth',
                   height: 170,
                   width: 190,
                   ui: 'plain',
                   html: '<img src="resources/icons/ProVersionRed.png" style="width="180" height="160"" />',
               },

              {
                  xtype: 'button',
                  //  align: 'strecth',
                  align: 'strecth',
                  id: 'btnlblDashboardandCloudBill',
                  height: 130,
                  ui: 'plain',
                  html: '<font size="3" color="grey" ><b>Real time Dashboard, captured every<br> transaction made by enterprise <br>and insight your expenses<br> in fancy graphical graph</b></font>',
                  //xtype: 'button',

                  //id: 'dashborad',
                  //ui: 'plain',
                  //width: 300,
                  //height: 50,
                  ////  width: '80%',
                  ////padding: '10px',
                  ////style: {
                  ////    background: '#FA8072',
                  ////},
                  ////  text: '<font size=3px color=white><center><b>Log-In</b></center></font>',
                  //text: '<button class="button4">Coming Soon</button>',

              },
                ]
            },






                //{

                //    xtype: 'container',
                //    layout: {
                //        type: 'vbox',
                //        // pack: 'center',
                //        align: 'center'
                //    },
                //    items: [
                //        {
                //            margin: '40 0 0 0',
                //            html: '<img src="resources/icons/ProVersionRed.png" style="width="180" height="160"" />',
                //        },
                //        {
                //            xtype: 'button',
                //            align: 'strecth',
                //            height: 100,
                //            ui: 'plain',
                //            html: '<font size="3" color="grey" ><b>Enabled/assigned new bills and receipts<br> notification to others cloud receipts <br>user account</b></font>',
                //        },



                //    ]
                //}




        ]
    },
    initialize: function () {

        //var currentTime = new Date()
        //var month = currentTime.getMonth() + 1


        //var monthconvert = ConvertMonth(month);
        //// returns the year (four digits)
        //var year = currentTime.getFullYear();


        //Ext.getCmp('lblYearNotificationsPanel').setHtml('<font size="3" color="black">' + year + '-' + '</font>');
        //Ext.getCmp('lblMonthNotificationsPanel').setHtml('<font size="3" color="black">' + monthconvert + '&nbsp;&nbsp;' + '</font>');

    }
});
