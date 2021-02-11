//Ext.define('ReceiptsWorld.view.Receipt.SummaryReceipt', {
//    extend: 'Ext.List',
//    xtype: 'SummaryReceipt-list',


//    config: {
//        store: 'ReceiptGetByIcStore',
//        disableSelection: true,
//        grouped: true,
//        cls: ['SummaryReceipt-list'],


//        itemTpl: [
//            '<h4>{Description}</h4>'
//        ]
//    }
//});






//var billID;
var containerSearchResultInfoisShow = 'Y';
Ext.define('ianMizi.view.Receipt.SearchResultReceipt', {
    extend: 'Ext.Panel', //Ext.navigation.View
    xtype: 'SearchResultReceipt',
    id: 'SearchResultReceiptID',
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

         //{
         //    xtype: 'container',
         //    style: "background-color: #F35B57;",
         //    height: 42,
         //    docked: 'top',
         //    layout: {
         //        type: 'vbox',
         //        pack: 'center',
         //        align: 'center'

         //    },


         //    items: [


         //        {
         //            html: '<font size=3px color=white><center>Search Result</center></font>',
         //        },

         //    ]

         //},

            {
                xtype: 'toolbar',
                title: '<font size="4" color="white">Search Result</font>',
                docked: 'top',
                id: 'SearchResultReceipttoolbarTop',
                style: {

                    background: '#f44336',

                },

                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnSearchResultReceiptHome',
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
                                            id: 'btnNotificationSearchResultReceipt',
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
                xtype: 'container',
                hidden: true,
                id: 'containerSearchResultfound',
                //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
                style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
              //  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;',
                zIndex: 30,
               // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;',

                //   style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                //style: {
                //    backgroundImage: 'url(resources/icons/border7.png)',
                //    backgroundRepeat: 'no-repeat',
                //    //backgroundPosition: 'center'
                //    backgroundSize: 'cover'
                //},
                height: 34,
                layout: {
                    type: 'hbox'
                },
                items: [
             //{
             //    xtype: 'button',
             //    hidden:true,
             //    id: 'btnSearchResultReceiptSearchCreteria',
             //    //  margin: '-2 -37 0 0',
             //    height: 42,
             //    width: 42,
             //    ui: 'plain',
             //    html: '<img src="resources/icons/StatusMenu.png" style="width: 32px; height: 32px;" />',
             //    handler: function () {
             //        //  Ext.getCmp('ReceiptSearchResultCriteriaID').setHidden(false);
             //        // Ext.getCmp('ReceiptSearchResultCriteriaID').setShowAnimation({ type: 'slide', direction: 'down', duration: 1500, easing: 'ease-in' });
             //        //Ext.getCmp('ReceiptSearchResultCriteriaID').setMargin('0 0 0 0');
             //        // Ext.Viewport.animateActiveItem(Ext.getCmp('ReceiptSearchResultCriteriaID').setMargin('0 0 0 0'), {});
             //        Ext.getCmp('ReceiptSearchResultCriteriaID').show();
             //        setTimeout(function () { Ext.getCmp('ReceiptSearchResultCriteriaID').setHeight(115); }, 1000);

             //    }
             //},
                     



                         {
                             xtype: 'label',
                             //  hidden: true,
                             id: 'imgSearchResultReceipt',
                             html: '<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />'
                         },

               {
                   xtype: 'label',
                   id: 'lblCountSearchResultReceipt',
                   // hidden:true,
                   margin: '5 0 0 0',
                   html: '<font size="2" color="black">Founds-(0)</font>'
               },
                //{
                //    xtype: 'spacer',

                //},
            
               
                ]
            },

            {
                xtype: 'container',
              //  hidden: true,
                id: 'containerSearchResultParameterandSummaryheader',
                ////    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
                //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
                ////  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;',
                zIndex: 30,
              width:'100%',
                height: 27,
                layout: {
                    type: 'hbox'
                },
                items: [
                   
                    //{
                    //  //  html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:5px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:middle;background-color: #37474f;color:floralwhite;align:center;width:60%;"><div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite">Parameter</div></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:5px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:middle;background-color: #37474f;color:floralwhite;align:center;width:40%;"><div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite;">Summary</div></th></tr></table>'
                    //    html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite;width:60%;">Parameter</div><div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite;width:40%;">Parameter</div></tr></table>'
                    //}
                      {
                          
                                       xtype: 'panel',

                                       id: 'btnx',
                                     //  margin: '0 0 0 100',
                                       height: 28,
                                       width: '60%',
                                     //  ui: 'plain',
                                       html: '<div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite"><font size="3">Parameter</font></div>',
                                       handler: function () {
                                           //  ReceiptSearchResultCriteriaShow();
                                           //Ext.getCmp('ReceiptSearchResultCriteriaID').setHidden(true);
                                       }
                         
                      },
                       {
                           xtype: 'panel',

                           id: 'btnxy',
                           //  margin: '0 0 0 100',
                           height: 28,
                           width: '40%',
                          // ui: 'plain',
                           html: '<div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite"><font size="3">Summary</font></div>',
                           handler: function () {
                               //  ReceiptSearchResultCriteriaShow();
                               //Ext.getCmp('ReceiptSearchResultCriteriaID').setHidden(true);
                           }
                       },
                ]
            },
            {

                xtype: 'container',
                width: '100%',
                height: 150,
                 style: 'background: #f5f5f5;border-bottom:2px solid;border-color:#A2CDF5',
                //style: {
                //    //background: '#D25959',
                //    background: '#f5f5f5',
                //    //  background: '#26ade4',
                //},
                id: 'containerSearchResultInfo',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                layout: {
                    type: 'vbox',
                    //pack: 'center',
                    //align: 'center'

                },
                items: [
                     




                    {
                       // html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:18px;font-weight:bold;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="4">Search Result Informations</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="4">Date Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">2017-12-20 Between 2017-12-30</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="4">Total Paid Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">RM 150.00 Between RM 250.00</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="4">Enterprise</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">TM,TNB,Sahajidah HAI-O,AEON</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="4">Descriptions:</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">Default</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="4">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4">Confirm,New,Void</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top">Total Amount</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top">Total Tax</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top">Total Paid</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top">Receipt(s)</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">RM 2000.00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">RM180.00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">RM 2180.00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">18</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="4"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="3">Cancel</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">Print</td></tr></table>',
                        id:'TblSearchInfo',
                        html: '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;"><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Date Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">2017-12-20 Between 2017-12-30</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Total Paid Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">RM 150.00 Between RM 250.00</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Enterprise</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">TM,TNB,Sahajidah HAI-O,AEON</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Descriptions:</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">Default</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">Confirm,New,Void</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Total Amount</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Total Tax</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Total Paid</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Receipt(s)</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top">RM 2000.00</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top">RM180.00</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top">RM 2180.00</td><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center;vertical-align:top">18</td></tr></table>'
                       

                    }
                ]
               
            },
            {
                xtype: 'container',
               // hidden: true,
                id: 'containerSearchResultfoundtSecondPanel',
                //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
             //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;border-top:1px solid',
                //  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;',
                zIndex: 30,
                height: 28,
                width: '100%',
                //  ui: 'plain',
                html: '<div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite"><font size="3">Receipt(s) List</font></div>',
             //   height: 34,
                layout: {
                    type: 'hbox'
                },
                items: [
             
     


                         {
                             xtype: 'label',
                               hidden: true,
                             id: 'imgSearchResultReceipttSecondPanel',
                             html: '<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />'
                         },

               {
                   xtype: 'label',
                   id: 'lblCountSearchResultReceiptSecondPanel',
                    hidden:true,
                   margin: '5 0 0 0',
                   html: '<font size="2" color="black">Founds-(0)</font>'
               },
                //{
                //    xtype: 'spacer',

                //},


                ]
            },
            //{

            //    xtype: 'panel',
            //    height: 0,
              
            //    width: '100%',
            //    id: 'ReceiptSearchResultCriteriaID',
            //   // draggable: true,
            // //  margin:'-100 0 0 0',
            // //bottom:100,
         

            //    //centered: true,
            //    // bottom: 14,
            //   zIndex: 1,
            //    //  modal: true,
            //   // hideOnMaskTap: true,
            //    layout: {
            //        type: 'fit'
            //    },
            //    showAnimation: {
            //        type: 'slide',
            //        direction: 'down',
            //        duration: 1500,
            //        easing: 'ease-in'
            //    },
            //    hideAnimation: {
            //        type: 'slide',
            //        direction: 'up',
            //        duration: 3000,
            //        easing: 'ease-out'
            //    },
            //    //hideAnimation: {
            //    //    type: 'slide',
            //    //    direction: 'up',
            //    //    duration: 1000,
            //    //    easing: 'ease-out'
            //    //},
            //    //    style: 'border-bottom:1px solid;background-color:#D25959;',
            //    items: {



              
            //        xtype: 'container',
            //        id: 'ReceiptSearchResultCriteriaInnerID',
            //        //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
            //        style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
            //        //   style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
            //        //style: {
            //        //    backgroundImage: 'url(resources/icons/border7.png)',
            //        //    backgroundRepeat: 'no-repeat',
            //        //    //backgroundPosition: 'center'
            //        //    backgroundSize: 'cover'
            //        //},
            //        height: 114,
            //        layout: {
            //            type: 'vbox'
            //        },


            //        showAnimation: {
            //            type: 'slide',
            //            direction: 'down',
            //            duration: 1500,
            //            easing: 'ease-in'
            //        },
            //        hideAnimation: {
            //            type: 'slide',
            //            direction: 'up',
            //            duration: 3000,
            //            easing: 'ease-out'
            //        },
            //        items: [
            //            {
            //                xtype: 'label',
            //                id: 'lblSearchCreteria',
            //               // margin: '5 0 0 0',
            //                html: '<font size="2" color="black"><b><u>Search Criteria</u></b></font>'
            //            },
            //     {
            //         xtype: 'label',
            //         //  hidden: true,
            //         id: 'lblSearchResultReceiptDateRange',
            //         html: '<font size="2" color="black">Date:</font>'
            //     },

            //       {
            //           xtype: 'label',
            //           id: 'lblSearchResultReceiptpaidRange',
            //           // hidden:true,
            //           margin: '0 0 0 0',
            //           html: '<font size="2" color="black">Paid Range:</font>'
            //       },

    
            //        {
            //            xtype: 'label',
            //            id: 'lblSearchResultReceiptEnterprise',
            //            margin: '0 0 0 0',
            //            html: '<font size="2" color="black">Enterprise</font>'
            //        },
            //         {
            //             xtype: 'label',
            //             id: 'lblSearchResultReceiptDescr',
            //             margin: '0 0 0 0',
            //             html: '<font size="2" color="black">Description</font>'
            //         }, {
            //             xtype: 'label',
            //             id: 'lblSearchResultReceiptStatus',
            //             margin: '0 0 0 0',
            //             html: '<font size="2" color="black">Status</font>'
            //         },
            //         //{
            //         //    xtype: 'button',

            //         //    id: 'btnSearchResultReceiptSearchCreteriaMarkDown',
            //         //    margin: '0 0 0 100',
            //         //    height: 30,
            //         //    width: 35,
            //         //    ui: 'plain',
            //         //    html: '<img src="resources/icons/MarkDownRed.png" style="width: 25px; height: 25px;" />',
            //         //    handler: function () {
            //         //        //  ReceiptSearchResultCriteriaShow();
            //         //        Ext.getCmp('ReceiptSearchResultCriteriaID').setHidden(true);
            //         //    }
            //         //},
            //        ]
            //    },






          







            //},

           
           



 



         {
             xtype: 'list',
             flex: 1,
             store: 'FlatBillSearchCReceiptStore',
             id: 'ListSearchResultReceiptID',
             mode: 'SINGLE',
             disableSelection: true,
             itemTpl: '<div class="myContent">' +
                 // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                 //'<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >New</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 70px; height: 82px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:17px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                  // '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">New Receipts:{FlatBillWorkshop}<br>Total Paid:RM{FlatBillFinalAmount}<br>Account No:123456789<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 4px;border-style:none;border-width:1px;overflow:hidden;word-break:normal"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr></table>' +


                 //'<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5">{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;text-align:center;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 52px; height: 52px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;font-weight:bold;text-align:center;vertical-align:top;border-color:#A2CDF5">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

               // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >{FlatBillStatus}</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

               //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: black;"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >{FlatBillStatus}</div>{FlatBillWorkshop}<br>Date:{FlatBillDate}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br><b>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</b></th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color: #616161;"><b><u>{FlatBillWorkshop}</u></b><br><b>Date:</b>{FlatBillDate}<br><b>Desc:</b>{FlatBillShotDesc}<br><b>Account No:</b>{FlatBillAccountNo}<br><b>Amount:</b>RM{FlatBillTotalAmount} | <b>Tax:</b>RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#37474f;background-color:#37474f;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +


             //tiada border  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

             

               '</div>',
             height: '100%',
             listeners: {
                 itemsingletap: function (list, idx, target, records, evt) {
                     LoadingPanelShow();
                     Ext.getCmp('lblCountReceipt').setHtml('<font color="black">Fecthing..-(0)</font>');
                     Ext.getCmp('imgReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 32px; height: 32px;" />');
                     Ext.getCmp('mainView').setActiveItem(2);
               
                     Ext.getCmp('imgDetailReceiptStatus').setHtml('<img src="resources/icons/CloudReceipt.png" style="width: 42px; height: 32px;" />');
                     //  Ext.getCmp('lblStatusDetailReceipt').setHtml('<div class="blink_me"><font size="4" color="red"><b>New Receipt</b></font></div>');
                     FlatBillID_ID = records.get('ID');
                     FlatBillID = records.get('FlatBillID');
                     FlatBillStatus = findword(records.get('FlatBillStatus'));
                     FlatBillUpdateDate = records.get('FlatBillUpdateDate');
                     ReceiptTemplateCode = records.get('ReceiptTemplateCode');
                     Ext.getCmp('lblUpdateDateDetailReceipt').setHidden(false);
                     console.log('ListSearchResultReceiptID:' + ReceiptTemplateCode);
                     console.log('ListSearchResultReceiptID FlatBillID:' + FlatBillID);
                     console.log('ListSearchResultReceiptID FlatBillStatussssss:' + FlatBillStatus);
                     localStorage.setItem('CurrFlatBillStatusAndCategory', FlatBillStatus);
                     Ext.getStore('FlatBillDetailByBillIDStore').getProxy().setExtraParams({
                         BillID: FlatBillID
                     });
                     Ext.StoreMgr.get('FlatBillDetailByBillIDStore').load();
                     Ext.getStore('ReceiptTemplateGetByTemplateCode').getProxy().setExtraParams({
                         TemplateCode: ReceiptTemplateCode

                     });
                     Ext.StoreMgr.get('ReceiptTemplateGetByTemplateCode').load();
                     GenerateReceipt(FlatBillID, ReceiptTemplateCode);
                    // detailsReceiptsprocess(FlatBillID);

                 },
                 deselect: function (list, records) {

                 },
              
             },

         },
          


          {
              xtype: 'container',
              // style: 'border-top:1px solid;background-color:#D25959;',
              //style: 'border-top:1px solid;background-color:#f44336;',
              //style: 'border-top:0.5px none;background-color:white; box-shadow: 5px 10px 5px 5px black;',
              //bodyStyle: 'background: #ccc',
              style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid;',

              //style: {
              //    backgroundImage: 'url(resources/icons/border5.png)',
              //    backgroundRepeat: 'no-repeat',

              //    //backgroundPosition: 'center'
              //},
              height: 50,
              layout: {
                  type: 'hbox',
                  pack: 'center',

              },
              items: [

                


                         {
                             xtype: 'container',
                         
                             layout: {
                                 type: 'vbox',
                                 pack: 'center',

                             },
                             items: [

                                    {
                                        xtype: 'button',
                                        align: 'stretch',
                                        id: 'btnPrintSR',
                                        height: 42,
                                        width: 53,
                                        margin: '-3 0 0 1',
                                        ui: 'plain',
                                      //  ui: 'decline',
                                        html: '<img src="resources/icons/printBlack.png" style="width: 43px; height: 32px;" />',
                                        // html: '<font size="5" color="white"><b>|</b></font>',
                                        handler: function () {
                                            LoadingCustomMsgShow('Not Avaiable in this version!', '1');
                                        }
                                    },


           {
               xtype: 'button',
               align: 'stretch',
               id: 'btnPrinttxtSR',
               ui: 'plain',
              // ui: 'decline',
               margin: '-18 0 0 0',
               html: '<font size="2" color="black">&nbsp;Print All&nbsp;&nbsp;</font>',
               // html: '<font size="5" color="white"><b>|</b></font>',
               handler: function () {
                   LoadingCustomMsgShow('Not Avaiable in this version!', '1');

               }
           },

                             ]
                         },


                                {
                                    xtype: 'container',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',

                                    },
                                    items: [

                                           {
                                               xtype: 'button',
                                               align: 'center',
                                               id: 'btnInfo',
                                               height: 42,
                                               width: 53,
                                               margin: '-3 0 0 35',
                                               ui: 'plain',
                                               //ui: 'decline',
                                               html: '<img src="resources/icons/infoBlack.png" style="width: 43px; height: 32px;" />',
                                               handler: function () {
                                                   if (containerSearchResultInfoisShow == 'Y') {
                                                       Ext.getCmp('containerSearchResultInfo').setHidden(true);
                                                       Ext.getCmp('containerSearchResultfound').setHidden(false);
                                                       Ext.getCmp('containerSearchResultParameterandSummaryheader').setHidden(true);
                                                       Ext.getCmp('containerSearchResultfoundtSecondPanel').setHidden(true);





                                                       
                                                       

                                                       containerSearchResultInfoisShow = 'N';
                                                       return;
                                                   } else {
                                                       Ext.getCmp('containerSearchResultInfo').setHidden(false);
                                                       Ext.getCmp('containerSearchResultfound').setHidden(true);
                                                       Ext.getCmp('containerSearchResultParameterandSummaryheader').setHidden(false);
                                                       Ext.getCmp('containerSearchResultfoundtSecondPanel').setHidden(false);
                                                       containerSearchResultInfoisShow = 'Y';
                                                   }

                                               }
                                           },

                {
                    xtype: 'button',
                    align: 'stretch',
                    id: 'btnSRinfotxt',
                    ui: 'plain',
                    //ui: 'decline',
                    margin: '-18 0 0 0',
                    html: '<font size="2" color="black">Search Result Info</font>',
                    // html: '<font size="5" color="white"><b>|</b></font>',
                    handler: function () {
                        if (containerSearchResultInfoisShow == 'Y') {
                            Ext.getCmp('containerSearchResultInfo').setHidden(true);
                            Ext.getCmp('containerSearchResultfound').setHidden(false);
                            Ext.getCmp('containerSearchResultParameterandSummaryheader').setHidden(true);
                            Ext.getCmp('containerSearchResultfoundtSecondPanel').setHidden(true);



                            containerSearchResultInfoisShow = 'N';
                            return;
                        } else {
                            Ext.getCmp('containerSearchResultInfo').setHidden(false);
                            Ext.getCmp('containerSearchResultfound').setHidden(true);
                            Ext.getCmp('containerSearchResultParameterandSummaryheader').setHidden(false);
                            Ext.getCmp('containerSearchResultfoundtSecondPanel').setHidden(false);
                            containerSearchResultInfoisShow = 'Y';
                        }


                    }
                },

                                    ]
                                },

                                //{
                                //    xtype: 'spacer',
                                //    width: 18,
                                //},


                                {
                                    xtype: 'container', 
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',

                                    },
                                    items: [

                                           {
                                               xtype: 'button',
                                               align: 'stretch',
                                               id: 'btnFilterSR',
                                               height: 40,
                                               width: 45,
                                               ui: 'plain',
                                              // ui: 'decline',
                                               margin: '0 0 0 10',
                                               html: '<img src="resources/icons/SearchBlack.png" style="width: 35px; height: 30px;" />',
                                               handler: function () {
                                                
                                                   routesArray.push("mainView,view,7");
                                                   Ext.getCmp('mainView').setActiveItem(7);
                                                  
                                               }
                                           },

                {
                    xtype: 'button',
                    align: 'stretch',
                    id: 'btnFiltertxtSR',
                    ui: 'plain',
                    //ui: 'decline',
                    margin: '-18 0 0 0',
                    html: '<font size="2" color="black">&nbsp;&nbsp;Search</font>',
                    // html: '<font size="5" color="white"><b>|</b></font>',
                    handler: function () {
                 
                        routesArray.push("mainView,view,7");
                        Ext.getCmp('mainView').setActiveItem(7);
                      
                    }
                },

                                    ]
                                },












              ]
          },









        ]
    },
    initialize: function () {
    }
});









function findword(val) {

    var str = val;
    var result;
    var arr = [ "New", "Confirm","Void","Warranty","Claimable","Deposit","Partially-Paid","General"];
    for (var i = 0, len = arr.length; i < len; ++i) {
        if (str.indexOf(arr[i]) != -1) {
            // str contains arr[i]
            result = arr[i];
        }
    }

    return result;
}


















//var counting = 0;
//var timer;
//function startsingleTrackingMaps(val) {

//    if (val == 'start') {
//        timer = setInterval(function () {
//            counting = counting + 1;
//            if (counting == 1) {


//            }
//            if (counting == 2) {

//                counting = 0;
//            }
//        }, 1000);
//    } else {

//        clearInterval(timer);
//    }
//}