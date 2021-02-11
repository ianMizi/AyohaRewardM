
var today = new Date();
var SqlStatementAppend;
var SqlStatementPriceRange;
var ValueRangeDateFrom = today.toLocaleDateString("en-US");
var ValueRangeDateTo = today.toLocaleDateString("en-US")+' 23:59:59 000';
var DateRangeIsCheck = 'N';
var TotalPaidRangeIsCheck = 'N';
var EnterpriseIsCheck = 'N';
var MonthIsCheck = 'N';
var AccountNoIsCheck = 'N';
var DescriptionsIsCheck = 'N';
var StatusIsCheck = 'N';
var CategoryIsCheck = 'N';
var StatusValueConfirm=+"'"+"'";
var StatusValueNew = +"'" + "'";
var StatusValueVoid = +"'" + "'";
var StatusValueAll;
var StatusValue = '';
var CategorysValue = '';

var CategoryValueClaimable = +"'" + "'";
var CategoryValuePartiallyPaid = +"'" + "'";
var CategoryValueDeposit = +"'" + "'";

var CategoryValueWarranty = +"'" + "'";
var CategoryValueGeneral = +"'" + "'";

Ext.define('ianMizi.view.Receipt.FilterReceipt', {
   extend: 'Ext.Container',
  //   extend: 'Ext.Panel',
    xtype: 'FilterReceipts',
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
      //width:'100%',
        //style: "background-color: #157fcc; color:white;",

        //    style: "background-color: #D25959; color:black;",


        //  style: 'background-image: url("resources/icons/loginBg2.png"); background-size: 100% 100%;border-bottom:1px solid;',

      //  style: "background-color: #F35B57;",
       style: "background-color: white;",
        items: [
            {
                xtype: 'toolbar',
                title: '<font size="4" color="white">Search Receipts</font>',
                docked: 'top',
                id: 'FilterReceiptsReceipttoolbarTop',
                style: {

                    background: '#f44336',

                },

                items:
                       [
                           {
                               xtype: 'button',
                               id: 'btnFilterReceiptsHome',
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
                                            id: 'btnNotificationFilterReceipts',
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
               id:'ContainerDayleftMessage',
               //style: 'border-bottom:1px dotted;background-color:#F9A288;',
               style: 'border-bottom:1px solid;background-color:#fba19a;',

               
               height: 35,
               zIndex:70,
               layout: {
                   type: 'hbox',
                   pack: 'center',
                   align: 'center'
               },
               items: [
                   
                   {
                       id:'FilterReceiptDayLeft',
                       html: '<div class="marquee"><span><a href="mailto:Support@Cloud-Receipts.com?subject=Request for Upgrade Cloud Receipt&body=Hi,I would like to unlock Pro Features.TQ"><u><font size="2" color="blue"><b>Your Pro feature will be end in (60) days - Tab this link to unlocked !</b></font></u></a></span> </div>',
                   },
                   //{
                   //    xtype:'spacer',
                     
                   //},
                   //{
                   //    html: '<div class="blink_me" ><a href="mailto:Support@Cloud-Receipts.com?subject=Request for Upgrade Cloud Receipt&body=Hi,I would like to unlock Pro Features.TQ"><img src="resources/icons/unlockedRed.png" style="float:left;width: 30px; height: 30px;"/></a></div>'
                   //},
                   // {
                   //     xtype: 'spacer',
                   //     width: 20
                   // },
               ]
           },
           


           {
               xtype: 'container',
               //   docked: 'bottom',
            //  width: '100%',
               layout: {
                   type: 'vbox',
                   //pack: 'center',
                   //align: 'center'

               },
               scrollable: {
                   direction: 'vertical',
                   directionLock: true
               },
               items: [

                   {
                       xtype: 'container',
                       margin: '0 0 0 0',
                       layout: {
                           type: 'vbox'
                       },

                       items: [



                            {
                                margin: '30 0 0 30',
                                xtype: 'checkboxfield',
                                id: 'chckBoxMonth',
                                listeners: {
                                    check: function () {
                                        MonthIsCheck = 'Y';
                                        Ext.getCmp('inputMonth').setDisabled(false);
                                        Ext.getCmp('btnlistMonth').setDisabled(false);

                                        //var inputDescription = document.getElementById('input-Description');
                                        //inputDescription.style.border.color = '20px';
                                        //slider.style.width = '320px';
                                        //slider.style.margin = '10px 5px 10px 5px';


                                    },
                                    uncheck: function () {

                                        MonthIsCheck = 'N';
                                        Ext.getCmp('inputMonth').setDisabled(true);
                                      //  document.getElementById('input-Month').value = "";
                                        Ext.getCmp('btnlistMonth').setDisabled(true);


                                    }
                                }
                            },


                           {

                               margin: '-50 10 0 10',
                               xtype: 'fieldset',
                               layout: {
                                   type: 'hbox'
                               },
                               // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                               title: 'Month',



                               items: [

                                   {
                                       xtype: 'container',
                                       layout: {
                                           type: 'hbox'
                                       },
                                       width: '100%',
                                       items: [

                                           {
                                               margin: '15 0 0 15',
                                               id: 'inputMonth',
                                               disabled: true,
                                              // html: '<input type="text" id="input-Month" style="border-color:red;color:black;width:305px;text-align: left">'
                                               html: '<input type="month" id="MonthRangeID" name="bdaymonth" style="border-color:red;color:black;width:305px;text-align: left">'
                                              

                                               //html: '<div style="width:100%; text-align:left;"><input type="text" id="input-Enterprise" style="border-color:red;color:black;width:100%;text-align: left"></div>'
                                           },

                                          {
                                              xtype: 'button',
                                              align: 'stretch',
                                              hidden:true,
                                              disabled: true,
                                              margin: '5 0 0 -16',
                                              id: 'btnlistMonth',
                                              height: 32,
                                              width: 32,
                                              ui: 'plain',
                                              html: '<img src="resources/icons/red-list-128.png" style="width: 22px; height: 22px;" />',
                                              handler: function () {

                                              }

                                          }

                                       ]
                                   },



                               ]

                           }


                       ]


                   },
              
   


                   {
                       xtype: 'container',
                       //   docked: 'bottom',
                     //  width:300,
                       layout: {
                           type: 'vbox',
                           //pack: 'center',
                           //align: 'center'

                       },
                      
                       items: [

{
    xtype: 'container',
    id: 'ContainerDateRange',
   
    margin: '-20 0 0 0',
    layout: {
        type: 'vbox'
    },

    items: [



         {
             margin: '30 0 0 30',
             xtype: 'checkboxfield',
             disabled: true,
             id: 'chckBoxDateRangeNew',
             listeners: {
                 check: function () {
                     DateRangeIsCheck = 'Y';
                     document.getElementById("btncalenderDisableFromNew").style.display = 'none';
                     document.getElementById("btncalenderDisableToNew").style.display = 'none';                    
                     //document.getElementById("cuppaDatePickerContainer").style.display = 'block';
                     //document.getElementById("cuppaDatePicker").style.display = 'block';


                 },
                 uncheck: function () {
                     DateRangeIsCheck = 'N';
                     document.getElementById("btncalenderDisableFromNew").style.display = 'block';
                     document.getElementById("btncalenderDisableToNew").style.display = 'block';
                     //document.getElementById("cuppaDatePickerContainer").style.display = 'none';
                     //document.getElementById("cuppaDatePicker").style.display = 'none';

                   

                 }
             }
         },


        {

            margin: '-50 10 0 10',
            //width:'100%',
            xtype: 'fieldset',
            id:'fieldsetDateRange',
            layout: {
                type: 'hbox'
            },
            instructions: 'Range Date Selected ,will impact loading time. ',
            title: 'Date Range<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">',
         //   title: '<button  style="display:inline-block;color:black;background-color: Transparent;border: none;outline:none;size:26px" ><img src="resources/icons/TabToUnlocked.png" style="float:left;width: 26px; height: 26px;">Date Range</button>',


            items: [

                {
                    xtype: 'container',
                    width: 100,
                    layout: {
                        type: 'vbox'
                    },
                    items: [

                        {
                            
                                html: '<font size="3" color="black"><b>From</b></font>',
                                margin: '0 0 0 60',

                            
                        },
                         {
                             margin: '0 0 0 15',
                             id: 'cuppaDatePickerContainerNew',
                             //  html: '<div style ="display:none;" id="cuppaDatePickerContainer"></div>'
                             html: '<input type="date" id="FromDate" name="fromdates" style="border-color:red;color:black;width:120px;text-align: left">'
                         },
                         {
                             html: '<div style ="display:block;" id="btncalenderDisableFromNew"><img src="resources/icons/calenderDisable.png" style="width: 32px; height: 32px;" /></div>',
                             hidden:true,
                             margin: '0 0 0 65',
                         }
                        
                    ]
                },
                    {
                        xtype: 'spacer',
                        width: 185,
                    },
                   {
                       xtype: 'container',
                       width:100,
                           margin:'0 0 0 -100',
                       layout: {
                           type: 'vbox'
                       },
                       items: [

                           {

                               html: '<font size="3" color="black"><b>To</b></font>',
                               margin: '0 0 0 70',


                           },
                            {
                                margin: '0 0 0 15',                              
                               // html: '<div style ="display:none;" id="cuppaDatePicker"></div>'
                                html: '<input type="date"  id="ToDate" name="Todates" style="border-color:red;color:black;width:120px;text-align: left">'
                            },
                             {
                                 html: '<div style ="display:block;" id="btncalenderDisableToNew"><img src="resources/icons/calenderDisable.png" style="width: 32px; height: 32px;" /></div>',
                                 hidden:true,
                                 margin: '0 0 0 80',
                             }


                       ]
                   },

            ]

        }


    ]


},


                                    {

                                        xtype: 'container',
                                        margin: '-10 0 0 0',
                                        layout: {
                                            type: 'vbox'
                                        },
                                        items: [


                                            



                                              {
                                                  xtype: 'container',
                                                  margin: '-20 0 0 0',
                                                  layout: {
                                                      type: 'vbox'
                                                  },

                                                  items: [



                                                       {
                                                           margin: '30 0 0 30',
                                                           xtype: 'checkboxfield',
                                                           id: 'chckBoxTotalPaidRange',
                                                           listeners: {
                                                               check: function () {
                                                                   document.getElementById("slider").style.display = 'block';
                                                                   document.getElementById("DisabledSlider").style.display = 'none';
                                                                   TotalPaidRangeIsCheck = 'Y';

                                                                  

                                                                   //Ext.getCmp('sliders').setDisabled(false);
                                                                   //Ext.getCmp('slidertxtbox').setDisabled(false);
                                                                   //document.getElementById("slider").disabled = false;
                                                                   //var slider = document.getElementById('slider');
                                                                   //slider.disabled = false;
                                                                   //var inputDescription = document.getElementById('input-Description');
                                                                   //inputDescription.style.border.color = '20px';
                                                                   //slider.style.width = '320px';
                                                                   //slider.style.margin = '10px 5px 10px 5px';


                                                               },
                                                               uncheck: function () {
                                                                   document.getElementById("slider").style.display = 'none';
                                                                   document.getElementById("DisabledSlider").style.display = 'block';
                                                                   TotalPaidRangeIsCheck = 'N';
                                                                   //var slider = document.getElementById('slider');
                                                                   //slider.disabled = true;
                                                                   //slider.style.height = '20px';
                                                                   //document.getElementById("slider").disabled = true;
                                                                   //Ext.getCmp('sliders').setDisabled(true);
                                                                   ////document.getElementById('input-with-keypress-0').value = "";
                                                                   //Ext.getCmp('slidertxtbox').setDisabled(true);


                                                               }
                                                           }
                                                       },


                                                      {

                                                          margin: '-50 10 0 10',
                                                          xtype: 'fieldset',
                                                          id:'fieldsetPaidRange',
                                                          layout: {
                                                              type: 'hbox'
                                                          },
                                                          // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                                                          title: '<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">Total Paid Range (RM)',



                                                          items: [

                                                              {
                                                                  xtype: 'container',

                                                                  layout: {
                                                                      type: 'vbox'
                                                                  },
                                                                  items: [

                                                                      {
                                                                          id: 'sliders',

                                                                          html: '<div style="width:100%; height:42px;display:none" id="slider"></div>',


                                                                      },
                                                                      {
                                                                          id: 'sliderDisabled',
                                                                          margin: '5 0 0 5',
                                                                          html: '<div style="background-image: url(resources/icons/sliderRangeDisabled.png); height: 42px; width: 100%; border: 0px none black;background-repeat: no-repeat;" id="DisabledSlider"> </div>'
                                                                      },

                                                                      {
                                                                          xtype: 'container',
                                                                          layout: {
                                                                              type: 'hbox'
                                                                          },
                                                                          items: [
                                                                              {
                                                                                  id: 'slidertxtbox',
                                                                                  // disabled: true,
                                                                                  html: '<div style="width:100%; text-align:center;"><input type="text" id="input-with-keypress-0" style="border-color:red;color:black;width:40%;text-align: center"><font size="2" color="black">-Range-</font><input type="text" id="input-with-keypress-1" style="border-color:red;color:black;width:40%;text-align: center"> </div>'
                                                                              },

                                                                          ]
                                                                      }


                                                                  ]
                                                              },



                                                          ]

                                                      }


                                                  ]


                                              },

                                              {
                                                  xtype: 'container',
                                                  margin: '-20 0 0 0',
                                                  layout: {
                                                      type: 'vbox'
                                                  },

                                                  items: [



                                                       {
                                                           margin: '30 0 0 30',
                                                           xtype: 'checkboxfield',
                                                           id: 'chckBoxEnterprise',
                                                           listeners: {
                                                               check: function () {
                                                                   EnterpriseIsCheck = 'Y';
                                                                   Ext.getCmp('inputEnterprise').setDisabled(false);
                                                                   Ext.getCmp('btnlistenterprise').setDisabled(false);

                                                                   //var inputDescription = document.getElementById('input-Description');
                                                                   //inputDescription.style.border.color = '20px';
                                                                   //slider.style.width = '320px';
                                                                   //slider.style.margin = '10px 5px 10px 5px';


                                                               },
                                                               uncheck: function () {

                                                                   EnterpriseIsCheck = 'N';
                                                                   Ext.getCmp('inputEnterprise').setDisabled(true);
                                                                   document.getElementById('input-Enterprise').value = "";
                                                                   Ext.getCmp('btnlistenterprise').setDisabled(true);


                                                               }
                                                           }
                                                       },


                                                      {

                                                          margin: '-50 10 0 10',
                                                          xtype: 'fieldset',
                                                          layout: {
                                                              type: 'hbox'
                                                          },
                                                          // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                                                          title: 'Enterprise',



                                                          items: [

                                                              {
                                                                  xtype: 'container',
                                                                  layout: {
                                                                      type: 'hbox'
                                                                  },
                                                                  width: '100%',
                                                                  items: [

                                                                      {
                                                                          margin: '15 0 0 15',
                                                                          id: 'inputEnterprise',
                                                                          disabled: true,
                                                                          html: '<input type="text" id="input-Enterprise" style="border-color:red;color:black;width:305px;text-align: left">'
                                                                          //html: '<div style="width:100%; text-align:left;"><input type="text" id="input-Enterprise" style="border-color:red;color:black;width:100%;text-align: left"></div>'
                                                                      },

                                                                     {
                                                                         xtype: 'button',
                                                                         align: 'stretch',
                                                                         disabled: true,
                                                                         margin: '5 0 0 -16',
                                                                         id: 'btnlistenterprise',
                                                                         height: 32,
                                                                         width: 32,
                                                                         ui: 'plain',
                                                                         html: '<img src="resources/icons/red-list-128.png" style="width: 22px; height: 22px;" />',
                                                                         handler: function () {
                                                                             SearchReceiptsFilterEnterprisePanelShow();
                                                                         }

                                                                     }

                                                                  ]
                                                              },



                                                          ]

                                                      }


                                                  ]


                                              },
                                              {
                                                  xtype: 'container',
                                                  margin: '-20 0 0 0',
                                                  layout: {
                                                      type: 'vbox'
                                                  },

                                                  items: [



                                                       {
                                                           margin: '30 0 0 30',
                                                           xtype: 'checkboxfield',
                                                           id: 'chckBoxAccountNo',
                                                           listeners: {
                                                               check: function () {

                                                                   Ext.getCmp('AccountNoxtbox').setDisabled(false);
                                                                   AccountNoIsCheck = 'Y';

                                                                   //var inputDescription = document.getElementById('input-Description');
                                                                   //inputDescription.style.border.color = '20px';
                                                                   //slider.style.width = '320px';
                                                                   //slider.style.margin = '10px 5px 10px 5px';


                                                               },
                                                               uncheck: function () {

                                                                   AccountNoIsCheck = 'N';
                                                                   Ext.getCmp('AccountNoxtbox').setDisabled(true);
                                                                   document.getElementById('input-AccountNo').value = "";

                                                               }
                                                           }
                                                       },


                                                      {

                                                          margin: '-50 10 0 10',
                                                          xtype: 'fieldset',
                                                          id: 'fieldsetAccountNo',
                                                          layout: {
                                                              type: 'hbox'
                                                          },
                                                          // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                                                          title: 'Account No<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">',



                                                          items: [
                                                              
                                                              {
                                                                  xtype: 'container',
                                                                  layout: {
                                                                      type: 'hbox'
                                                                  },
                                                                  items: [

                                                                      {
                                                                          disabled: true,
                                                                          id: 'AccountNoxtbox',
                                                                          margin: '15 0 0 13',
                                                                          html: '<input type="text" id="input-AccountNo" placeholder="Format to put Account No `0000`,`0000`"  style="border-color:red;color:black;width:305px;text-align: left">'
                                                                      },

                                                                 

                                                                  ]
                                                              },



                                                          ]

                                                      }


                                                  ]


                                              },

                                              {
                                                  xtype: 'container',
                                                  margin: '-20 0 0 0',
                                                  layout: {
                                                      type: 'vbox'
                                                  },

                                                  items: [



                                                       {
                                                           margin: '30 0 0 30',
                                                           xtype: 'checkboxfield',
                                                           id: 'chckBoxDescription',
                                                           listeners: {
                                                               check: function () {

                                                                   Ext.getCmp('Descriptiontxtbox').setDisabled(false);
                                                                   DescriptionsIsCheck = 'Y';

                                                                   //var inputDescription = document.getElementById('input-Description');
                                                                   //inputDescription.style.border.color = '20px';
                                                                   //slider.style.width = '320px';
                                                                   //slider.style.margin = '10px 5px 10px 5px';


                                                               },
                                                               uncheck: function () {

                                                                   DescriptionsIsCheck = 'N';
                                                                   Ext.getCmp('Descriptiontxtbox').setDisabled(true);
                                                                   document.getElementById('input-Description').value = "";

                                                               }
                                                           }
                                                       },


                                                      {

                                                          margin: '-50 10 0 10',
                                                          xtype: 'fieldset',
                                                          layout: {
                                                              type: 'hbox'
                                                          },
                                                          // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                                                          title: 'Descriptions',



                                                          items: [

                                                              {
                                                                  xtype: 'container',
                                                                  layout: {
                                                                      type: 'hbox'
                                                                  },
                                                                  items: [

                                                                      {
                                                                          disabled: true,
                                                                          id: 'Descriptiontxtbox',
                                                                          margin: '15 0 0 13',
                                                                          html: '<input type="text" id="input-Description" placeholder="Any keyword item in receipt description " style="border-color:red;color:black;width:305px;text-align: left">'
                                                                      },

                                                                     //{
                                                                     //    xtype: 'button',
                                                                     //    align: 'stretch',
                                                                     //    margin: '5 0 0 -20',
                                                                     //    id: 'btnDescriptionss',
                                                                     //    height: 32,
                                                                     //    width: 32,
                                                                     //    ui: 'plain',
                                                                     //    html: '<img src="resources/icons/PendingWhite.png" style="width: 22px; height: 22px;" />',
                                                                     //    handler: function () {

                                                                     //    }

                                                                     //}

                                                                  ]
                                                              },



                                                          ]

                                                      }


                                                  ]


                                              },









                                              {
                                                  xtype: 'container',
                                                  margin: '-20 0 0 0',
                                                  layout: {
                                                      type: 'vbox'
                                                  },

                                                  items: [



                                                       {
                                                           margin: '30 0 0 30',
                                                           xtype: 'checkboxfield',
                                                           id: 'chckBoxReceiptStatus',

                                                           listeners: {
                                                               check: function () {
                                                                   StatusIsCheck = 'Y';
                                                                   Ext.getCmp('btnFilterConfirmReceipt').setDisabled(false);
                                                                   Ext.getCmp('btnFilterNewReceipt').setDisabled(false);
                                                                   Ext.getCmp('btnFilterCancelvoid').setDisabled(false);

                                                               },
                                                               uncheck: function () {
                                                                   StatusValue = "";
                                                                   StatusIsCheck = 'N';
                                                                   Ext.getCmp('btnFilterConfirmReceipt').setDisabled(true);
                                                                   Ext.getCmp('btnFilterNewReceipt').setDisabled(true);
                                                                   Ext.getCmp('btnFilterCancelvoid').setDisabled(true);
                                                                   Ext.getCmp('btnFilterConfirmReceipt').setHtml('<img src="resources/icons/ConfirmBlack.png" style="width: 42px; height: 45px;" />');
                                                                   Ext.getCmp('btnFilterConfirmReceipt').setUi('plain');
                                                                   Ext.getCmp('btnFilterNewReceipt').setHtml('<img src="resources/icons/NewBlackLatest.png" style="width: 32px; height: 42px;" />');
                                                                   Ext.getCmp('btnFilterNewReceipt').setUi('plain');
                                                                   Ext.getCmp('btnFilterCancelvoid').setHtml('<img src="resources/icons/VoidBlack.png" style="width: 32px; height: 45px;" />');
                                                                   Ext.getCmp('btnFilterCancelvoid').setUi('plain');
                                                               }
                                                           }
                                                           //listeners: {
                                                           //     tap: {

                                                           //         fn: function () {
                                                           //             if (this.isChecked) {
                                                           //                 alert('check');
                                                           //                 Ext.getCmp('fieldsetStatus').setDisabled(false);
                                                           //             } else {
                                                           //                 alert('Uncheck');
                                                           //                 Ext.getCmp('fieldsetStatus').setDisabled(true);
                                                           //             }
                                                           //         }
                                                           //     }
                                                           // }
                                                       },


                                                      {

                                                          margin: '-50 10 0 10',
                                                          xtype: 'fieldset',
                                                          id: 'fieldsetStatus',

                                                          layout: {
                                                              type: 'hbox'
                                                              , pack: 'center',
                                                          },
                                                          // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                                                          title: 'Status',



                                                          items: [

                                                              {
                                                                  xtype: 'container',

                                                                  height: 50,

                                                                  //hidden: true,
                                                                  layout: {
                                                                      type: 'hbox'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          xtype: 'container',
                                                                          layout: {
                                                                              type: 'vbox',
                                                                              pack: 'center',

                                                                          },
                                                                          id: 'containerStatus',
                                                                          items: [

                                                                              {
                                                                                  xtype: 'button',
                                                                                  align: 'stretch',
                                                                                  id: 'btnFilterConfirmReceipt',
                                                                                  height: 52,
                                                                                  width: 72,
                                                                                  disabled: true,
                                                                                  //ui: 'decline',
                                                                                  //   ui: 'confirm',
                                                                                  ui: 'plain',
                                                                                  //html: '<img src="resources/icons/kompemputih.png" style="width: 42px; height: 42px;" />',
                                                                                  html: '<img src="resources/icons/ConfirmBlack.png" style="width: 42px; height: 45px;" />',
                                                                                  handler: function () {
                                                                                      if (Ext.getCmp('btnFilterConfirmReceipt').getUi() == 'plain') {
                                                                                          Ext.getCmp('btnFilterConfirmReceipt').setHtml('<img src="resources/icons/kompemputih.png" style="width: 42px; height: 42px;" />');
                                                                                          Ext.getCmp('btnFilterConfirmReceipt').setUi('decline');
                                                                                          StatusValueConfirm = '1';
                                                                                          return;
                                                                                      } else {
                                                                                          Ext.getCmp('btnFilterConfirmReceipt').setHtml('<img src="resources/icons/ConfirmBlack.png" style="width: 42px; height: 45px;" />');
                                                                                          Ext.getCmp('btnFilterConfirmReceipt').setUi('plain');
                                                                                          StatusValueConfirm = +"'" + "'";
                                                                                      }

                                                                                  }
                                                                              },

                                                                      //{
                                                                      //    xtype: 'button',
                                                                      //    align: 'stretch',
                                                                      //    id: 'btnFilterConfirmtxt',
                                                                      //    ui: 'plain',
                                                                      //    margin: '-18 0 0 0',
                                                                      //    html: '<font size="2" color="black">Confirm</font>',
                                                                      //    // html: '<font size="5" color="white"><b>|</b></font>',
                                                                      //    handler: function () {


                                                                      //    }
                                                                      //},

                                                                          ]
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
                                                                             align: 'stretch',
                                                                             id: 'btnFilterNewReceipt',
                                                                             height: 52,
                                                                             width: 72,
                                                                             disabled: true,
                                                                             // margin: '0 0 0 22',
                                                                             //ui: 'decline',
                                                                             //html: '<img src="resources/icons/newStatused.png" style="width: 32px; height: 42px;" />',
                                                                             html: '<img src="resources/icons/NewBlackLatest.png" style="width: 32px; height: 42px;" />',
                                                                             ui: 'plain',
                                                                             // html: '<font size="5" color="white"><b>|</b></font>',
                                                                             handler: function () {

                                                                                 if (Ext.getCmp('btnFilterNewReceipt').getUi() == 'plain') {
                                                                                     Ext.getCmp('btnFilterNewReceipt').setHtml('<img src="resources/icons/newStatused.png" style="width: 32px; height: 42px;" />');
                                                                                     Ext.getCmp('btnFilterNewReceipt').setUi('decline');
                                                                                     StatusValueNew='2';
                                                                                     return;
                                                                                 } else {
                                                                                     Ext.getCmp('btnFilterNewReceipt').setHtml('<img src="resources/icons/NewBlackLatest.png" style="width: 32px; height: 42px;" />');
                                                                                     Ext.getCmp('btnFilterNewReceipt').setUi('plain');
                                                                                     StatusValueNew = +"'" + "'";
                                                                                 }

                                                                             }
                                                                         },


                                                //{
                                                //    xtype: 'button',
                                                //    align: 'stretch',
                                                //    id: 'btnFilterNewtxt',
                                                //    ui: 'plain',
                                                //    margin: '-18 0 0 0',
                                                //    html: '<font size="2" color="black">New Receipts</font>',
                                                //    // html: '<font size="5" color="white"><b>|</b></font>',
                                                //    handler: function () {


                                                //    }
                                                //},

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
                                                                             align: 'stretch',
                                                                             id: 'btnFilterCancelvoid',
                                                                             height: 52,
                                                                             width: 72,
                                                                             disabled: true,
                                                                             //ui: 'decline',
                                                                             //html: '<img src="resources/icons/VoidThree.png" style="width: 32px; height: 42px;" />',
                                                                             html: '<img src="resources/icons/VoidBlack.png" style="width: 32px; height: 45px;" />',
                                                                             ui: 'plain',
                                                                             handler: function () {


                                                                                 if (Ext.getCmp('btnFilterCancelvoid').getUi() == 'plain') {
                                                                                     Ext.getCmp('btnFilterCancelvoid').setHtml('<img src="resources/icons/VoidThree.png" style="width: 32px; height: 42px;" />');
                                                                                     Ext.getCmp('btnFilterCancelvoid').setUi('decline');
                                                                                     StatusValueVoid = '3';
                                                                                     return;
                                                                                 } else {
                                                                                     Ext.getCmp('btnFilterCancelvoid').setHtml('<img src="resources/icons/VoidBlack.png" style="width: 32px; height: 45px;" />');
                                                                                     Ext.getCmp('btnFilterCancelvoid').setUi('plain');
                                                                                     StatusValueVoid = +"'" + "'";
                                                                                 }

                                                                             }
                                                                         },

                                              //{
                                              //    xtype: 'button',
                                              //    align: 'stretch',
                                              //    id: 'btnFilterCanceltxt',
                                              //    ui: 'plain',
                                              //    margin: '-18 0 0 0',
                                              //    html: '<font size="2" color="black">Void</font>',
                                              //    // html: '<font size="5" color="white"><b>|</b></font>',
                                              //    handler: function () {


                                              //    }
                                              //},

                                                                  ]
                                                              },









                                                                    //{
                                                                    //    xtype: 'spacer',
                                                                    //    width: 15,
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
                                                                                   id: 'btnFilterAll',
                                                                                   height: 52,
                                                                                   width: 72,
                                                                                   zIndex: 10,
                                                                                   hidden: true,
                                                                                   //ui: 'decline',
                                                                                   //html: '<div><img src="resources/icons/allreceipt.png" style="width: 32px; height: 42px;" /><br>All</div>',
                                                                                   html: '<img src="resources/icons/AllBlack.png" style="width: 32px; height: 45px;" />',
                                                                                   ui: 'plain',
                                                                                   handler: function () {

                                                                                       if (Ext.getCmp('btnFilterAll').getUi() == 'plain') {
                                                                                           Ext.getCmp('btnFilterAll').setHtml('<div><img src="resources/icons/allreceipt.png" style="width: 32px; height: 42px;" /></div>');
                                                                                           Ext.getCmp('btnFilterAll').setUi('decline');
                                                                                           StatusValueAll = '1,2,3';
                                                                                           return;
                                                                                       } else {
                                                                                           Ext.getCmp('btnFilterAll').setHtml('<img src="resources/icons/AllBlack.png" style="width: 32px; height: 45px;" />');
                                                                                           Ext.getCmp('btnFilterAll').setUi('plain');
                                                                                           StatusValueAll = '';
                                                                                       }

                                                                                   }
                                                                               },

                                                   

                                                                        ]
                                                                    },






                                                          ]

                                                      }


                                                  ]


                                              },

                                              {
                                                  xtype: 'container',
                                                  margin: '-20 0 0 0',
                                                  layout: {
                                                      type: 'vbox'
                                                  },

                                                  items: [



                                                       {
                                                           margin: '30 0 0 30',
                                                           xtype: 'checkboxfield',
                                                           id: 'chckBoxCategory',
                                                           listeners: {
                                                               check: function () {

                                                                 //  Ext.getCmp('AccountNoxtbox').setDisabled(false);
                                                                   CategoryIsCheck = 'Y';

                                                                   //var inputDescription = document.getElementById('input-Description');
                                                                   //inputDescription.style.border.color = '20px';
                                                                   //slider.style.width = '320px';
                                                                   //slider.style.margin = '10px 5px 10px 5px';


                                                               },
                                                               uncheck: function () {

                                                                   CategoryIsCheck = 'N';
                                                                 //  Ext.getCmp('AccountNoxtbox').setDisabled(true);
                                                                //   document.getElementById('input-AccountNo').value = "";

                                                               }
                                                           }
                                                       },


                                                      {

                                                          margin: '-50 10 0 10',
                                                          xtype: 'fieldset',
                                                          id:'fieldsetCategory',
                                                          layout: {
                                                              type: 'hbox'
                                                          },
                                                          // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                                                          title: 'Category<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">',



                                                          items: [
                                                              {
                                                                  xtype: 'container',

                                                                  scrollable: {
                                                                      direction: 'horizontal',
                                                                      directionLock: true
                                                                  },

                                                                  height: 80,
                                                                  width: '95%',
                                                                  layout: {
                                                                      type: 'hbox',
                                                                      pack: 'center',

                                                                  },
                                                                  items: [


                                                                      {
                                                                          xtype: 'container',
                                                                          margin: '5 0 0 0',
                                                                          layout: {
                                                                              type: 'vbox',
                                                                              //  pack: 'center',

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'button',
                                                                                  align: 'stretch',
                                                                                  id: 'btnClaimableReceiptSearch',
                                                                                  height: 55,
                                                                                  width: 72,
                                                                                  margin: '-4 0 0 0',
                                                                                  ui: 'plain',
                                                                                  html: '<img src="resources/icons/claimable.png" style="width: 62px; height: 51px;" />',
                                                                                  handler: function () {

                                                                                      if (Ext.getCmp('btnClaimableReceiptSearch').getUi() == 'plain') {
                                                                                          Ext.getCmp('btnClaimableReceiptSearch').setHtml('<img src="resources/icons/claimableWhite.png" style="width: 50px; height: 45px;" />');
                                                                                          Ext.getCmp('btnClaimableReceiptSearch').setUi('decline');
                                                                                          Ext.getCmp('btnClaimableReceipttxtSearch').setMargin('-5 0 0 0');
                                                                                          Ext.getCmp('btnClaimableReceipttxtSearch').setHtml('<font size="2" color="Red">Claimable</font>');
                                                                                          CategoryValueClaimable = "'Claimable'";


                                                                                          return;
                                                                                      } else {
                                                                                          Ext.getCmp('btnClaimableReceiptSearch').setHtml('<img src="resources/icons/claimable.png" style="width: 62px; height: 51px;" />');
                                                                                          Ext.getCmp('btnClaimableReceiptSearch').setUi('plain');
                                                                                          Ext.getCmp('btnClaimableReceipttxtSearch').setMargin('-12 0 0 0');
                                                                                          Ext.getCmp('btnClaimableReceipttxtSearch').setHtml('<font size="2" color="Black">Claimable</font>');
                                                                                          CategoryValueClaimable = +"'" + "'";
                                                                                      }

                                                                                  }
                                                                              },

                                                                      {
                                                                          xtype: 'button',
                                                                          align: 'stretch',
                                                                          id: 'btnClaimableReceipttxtSearch',
                                                                          ui: 'plain',
                                                                          margin: '-12 0 0 0',
                                                                          html: '<font size="2" color="black">Claimable</font>',
                                                                          // html: '<font size="5" color="white"><b>|</b></font>',
                                                                          handler: function () {

                                                                              //if (Ext.getCmp('btnClaimableReceiptSearch').getUi() == 'plain') {
                                                                              //    Ext.getCmp('btnClaimableReceiptSearch').setHtml('<img src="resources/icons/claimablered.png" style="width: 62px; height: 51px;" />');
                                                                              //    Ext.getCmp('btnClaimableReceiptSearch').setUi('decline');

                                                                              //    return;
                                                                              //} else {
                                                                              //    Ext.getCmp('btnClaimableReceiptSearch').setHtml('<img src="resources/icons/claimable.png" style="width: 62px; height: 51px;" />');
                                                                              //    Ext.getCmp('btnClaimableReceiptSearch').setUi('plain');

                                                                              //}

                                                                          }
                                                                      },

                                                                          ]
                                                                      },

                                                                      {
                                                                          xtype: 'container',
                                                                          margin: '5 0 0 0',
                                                                          layout: {
                                                                              type: 'vbox',
                                                                              //  pack: 'center',

                                                                          },
                                                                          items: [

                                                                              {
                                                                                  xtype: 'button',
                                                                                  align: 'stretch',
                                                                                  id: 'btnPartialyPaidReceiptSearch',
                                                                                  height: 50,
                                                                                  width: 72,
                                                                                  margin: '-1 0 0 0',
                                                                                  ui: 'plain',
                                                                                  html: '<img src="resources/icons/PartialyPaidBlack.png" style="width: 62px; height: 45px;" />',
                                                                                  handler: function () {

                                                                                      if (Ext.getCmp('btnPartialyPaidReceiptSearch').getUi() == 'plain') {
                                                                                          Ext.getCmp('btnPartialyPaidReceiptSearch').setHtml('<img src="resources/icons/PartialyPaidWhite.png" style="width: 50px; height: 45px;" />');
                                                                                          Ext.getCmp('btnPartialyPaidReceiptSearch').setHeight(53);
                                                                                          Ext.getCmp('btnPartialyPaidReceiptSearch').setWidth(70);
                                                                                          Ext.getCmp('btnPartialyPaidReceiptSearch').setMargin('-4 0 0 11');
                                                                                          Ext.getCmp('btnPartialyPaidReceiptSearch').setUi('decline');
                                                                                          Ext.getCmp('btnPartialyPaidReceipttxtSearch').setMargin('-3 0 0 0');
                                                                                          Ext.getCmp('btnPartialyPaidReceipttxtSearch').setHtml('<font size="2" color="Red">Partially Paid</font>');
                                                                                          CategoryValuePartiallyPaid = "'Partially-Paid'";


                                                                                          return;
                                                                                      } else {
                                                                                          Ext.getCmp('btnPartialyPaidReceiptSearch').setHtml('<img src="resources/icons/PartialyPaidBlack.png" style="width: 62px; height: 45px;" />');
                                                                                          Ext.getCmp('btnPartialyPaidReceiptSearch').setUi('plain');
                                                                                          Ext.getCmp('btnPartialyPaidReceipttxtSearch').setMargin('-10 0 0 0');
                                                                                          Ext.getCmp('btnPartialyPaidReceipttxtSearch').setHtml('<font size="2" color="Black">Partially Paid</font>');
                                                                                          CategoryValuePartiallyPaid = +"'" + "'";
                                                                                      }






                                                                                  }
                                                                              },

                                                                      {
                                                                          xtype: 'button',
                                                                          align: 'stretch',
                                                                          id: 'btnPartialyPaidReceipttxtSearch',
                                                                          ui: 'plain',
                                                                          margin: '-10 0 0 0',
                                                                          html: '<font size="2" color="black">Partially Paid</font>',
                                                                          // html: '<font size="5" color="white"><b>|</b></font>',
                                                                          handler: function () {



                                                                          }
                                                                      },

                                                                          ]
                                                                      },


                                                                             {
                                                                                 xtype: 'container',
                                                                                 margin: '5 0 0 0',
                                                                                 layout: {
                                                                                     type: 'vbox',
                                                                                     //    pack: 'center',

                                                                                 },
                                                                                 items: [

                                                                                        {
                                                                                            xtype: 'button',
                                                                                            align: 'stretch',
                                                                                            id: 'btnDepositReceiptSearch',
                                                                                            margin: '-4 0 0 0',
                                                                                            height: 55,
                                                                                            width: 72,
                                                                                            //     margin:'0 0 0 22',
                                                                                            ui: 'plain',
                                                                                            html: '<img src="resources/icons/Deposit.png" style="width: 62px; height: 51px;" />',
                                                                                            // html: '<font size="5" color="white"><b>|</b></font>',
                                                                                            handler: function () {

                                                                                                if (Ext.getCmp('btnDepositReceiptSearch').getUi() == 'plain') {
                                                                                                    Ext.getCmp('btnDepositReceiptSearch').setHtml('<img src="resources/icons/DepositWhite.png" style="width: 50px; height: 45px;" />');
                                                                                                    Ext.getCmp('btnDepositReceiptSearch').setUi('decline');
                                                                                                    Ext.getCmp('btnDeposittxtSearch').setMargin('-5 0 0 0');
                                                                                                    Ext.getCmp('btnDeposittxtSearch').setHtml('<font size="2" color="Red">Deposit</font>');
                                                                                                    CategoryValueDeposit = "'Deposit'";


                                                                                                    return;
                                                                                                } else {
                                                                                                    Ext.getCmp('btnDepositReceiptSearch').setHtml('<img src="resources/icons/Deposit.png" style="width: 62px; height: 51px;" />');
                                                                                                    Ext.getCmp('btnDepositReceiptSearch').setUi('plain');
                                                                                                    Ext.getCmp('btnDeposittxtSearch').setMargin('-12 0 0 0');
                                                                                                    Ext.getCmp('btnDeposittxtSearch').setHtml('<font size="2" color="Black">Deposit</font>');
                                                                                                    CategoryValueDeposit = +"'" + "'";
                                                                                                }

                                                                                            }
                                                                                        },


                                                               {
                                                                   xtype: 'button',
                                                                   align: 'stretch',
                                                                   id: 'btnDeposittxtSearch',
                                                                   ui: 'plain',
                                                                   margin: '-12 0 0 0',
                                                                   html: '<font size="2" color="black">Deposit</font>',
                                                                   // html: '<font size="5" color="white"><b>|</b></font>',
                                                                   handler: function () {




                                                                   }
                                                               },

                                                                                 ]
                                                                             },


                                                                                    {
                                                                                        xtype: 'container',
                                                                                        margin: '5 0 0 0',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            //  pack: 'center',

                                                                                        },
                                                                                        items: [

                                                                                               {
                                                                                                   xtype: 'button',
                                                                                                   align: 'stretch',
                                                                                                   id: 'btnWarrantyReceiptSearch',
                                                                                                   margin: '-4 0 0 0',
                                                                                                   height: 55,
                                                                                                   width: 72,
                                                                                                   ui: 'plain',
                                                                                                   html: '<img src="resources/icons/Warrantyblack.png" style="width: 62px; height: 51px;" />',
                                                                                                   handler: function () {

                                                                                                       if (Ext.getCmp('btnWarrantyReceiptSearch').getUi() == 'plain') {
                                                                                                           Ext.getCmp('btnWarrantyReceiptSearch').setHtml('<img src="resources/icons/WarrantyWhite.png" style="width: 50px; height: 45px;" />');
                                                                                                           Ext.getCmp('btnWarrantyReceiptSearch').setUi('decline');
                                                                                                           Ext.getCmp('btnWarrantyReceiptSearch').setMargin('-4 0 0 15');
                                                                                                           Ext.getCmp('btnWarrantytxtSearch').setMargin('-5 0 0 11');
                                                                                                           Ext.getCmp('btnWarrantytxtSearch').setHtml('<font size="2" color="Red">Warranty</font>');

                                                                                                           CategoryValueWarranty = "'Warranty'";

                                                                                                           return;
                                                                                                       } else {
                                                                                                           Ext.getCmp('btnWarrantyReceiptSearch').setHtml('<img src="resources/icons/Warrantyblack.png" style="width: 62px; height: 51px;" />');
                                                                                                           Ext.getCmp('btnWarrantyReceiptSearch').setUi('plain');
                                                                                                           Ext.getCmp('btnWarrantyReceiptSearch').setMargin('-4 0 0 5');
                                                                                                           Ext.getCmp('btnWarrantytxtSearch').setMargin('-12 0 0 5');
                                                                                                           Ext.getCmp('btnWarrantytxtSearch').setHtml('<font size="2" color="Black">Warranty</font>');
                                                                                                           CategoryValueWarranty = +"'" + "'";
                                                                                                       }

                                                                                                   }
                                                                                               },

                                                                    {
                                                                        xtype: 'button',
                                                                        align: 'stretch',
                                                                        id: 'btnWarrantytxtSearch',
                                                                        ui: 'plain',
                                                                        margin: '-12 0 0 0',
                                                                        html: '<font size="2" color="black">Warranty</font>',
                                                                        // html: '<font size="5" color="white"><b>|</b></font>',
                                                                        handler: function () {



                                                                        }
                                                                    },

                                                                                        ]
                                                                                    },

                                                                                    //{
                                                                                    //    xtype: 'spacer',
                                                                                    //    width:18,
                                                                                    //},


                                                                                    {
                                                                                        xtype: 'container',
                                                                                        margin: '5 0 0 0',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            //    pack: 'center',

                                                                                        },
                                                                                        items: [

                                                                                               {
                                                                                                   xtype: 'button',
                                                                                                   align: 'stretch',
                                                                                                   id: 'btnGeneralReceiptSearch',
                                                                                                   height: 55,
                                                                                                   width: 72,
                                                                                                   margin: '-4 0 0 0',
                                                                                                   ui: 'plain',
                                                                                                   html: '<img src="resources/icons/general.png" style="width: 62px; height: 51px;" />',
                                                                                                   handler: function () {

                                                                                                       if (Ext.getCmp('btnGeneralReceiptSearch').getUi() == 'plain') {
                                                                                                           Ext.getCmp('btnGeneralReceiptSearch').setHtml('<img src="resources/icons/generalWhite.png" style="width: 50px; height: 45px;" />');
                                                                                                           Ext.getCmp('btnGeneralReceiptSearch').setUi('decline');
                                                                                                           Ext.getCmp('btnGeneralReceiptSearch').setMargin('-5 0 0 15');
                                                                                                           Ext.getCmp('btnGeneralReceipttxtSearch').setMargin('-5 0 0 11');
                                                                                                           Ext.getCmp('btnGeneralReceipttxtSearch').setHtml('<font size="2" color="Red">General</font>');

                                                                                                           CategoryValueGeneral = "'General'";

                                                                                                           return;
                                                                                                       } else {
                                                                                                           Ext.getCmp('btnGeneralReceiptSearch').setHtml('<img src="resources/icons/general.png" style="width: 62px; height: 51px;" />');
                                                                                                           Ext.getCmp('btnGeneralReceiptSearch').setUi('plain');
                                                                                                           Ext.getCmp('btnGeneralReceiptSearch').setMargin('-4 0 0 5');
                                                                                                           Ext.getCmp('btnGeneralReceipttxtSearch').setMargin('-12 0 0 5');
                                                                                                           Ext.getCmp('btnGeneralReceipttxtSearch').setHtml('<font size="2" color="Black">General</font>');
                                                                                                           CategoryValueGeneral = +"'" + "'";
                                                                                                       }

                                                                                                   }
                                                                                               },

                                                                    {
                                                                        xtype: 'button',
                                                                        align: 'stretch',
                                                                        id: 'btnGeneralReceipttxtSearch',
                                                                        ui: 'plain',
                                                                        margin: '-12 0 0 0',
                                                                        html: '<font size="2" color="black">General</font>',
                                                                        // html: '<font size="5" color="white"><b>|</b></font>',
                                                                        handler: function () {



                                                                        }
                                                                    },

                                                                                        ]
                                                                                    },













                                                                  ]
                                                              },
                                                              //{
                                                              //    xtype: 'container',
                                                              //    layout: {
                                                              //        type: 'hbox'
                                                              //    },
                                                              //    items: [

                                                              //        {
                                                              //            disabled: true,
                                                              //            id: 'AccountNoxtbox',
                                                              //            margin: '15 0 0 13',
                                                              //            html: '<input type="text" id="input-AccountNo" placeholder="Format to put Account No `0000`,`0000`"  style="border-color:red;color:black;width:305px;text-align: left">'
                                                              //        },



                                                              //    ]
                                                              //},



                                                          ]

                                                      }


                                                  ]


                                              },
                                    


                                                


                                               

                                              {
                                                  xtype: 'container',
                                                  id: 'ContainerbtnSearchCloudReceipt',
                                                  // hidden:true,
                                                  margin: '20 0 0 0',
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
                                                          xtype: 'button',
                                                          ui: 'plain',
                                                          //  scope: this,
                                                          text: '<button class="buttonSave buttonSaves">Back</button>',
                                                         
                                                          handler: function () {
                                                              routesArray.push("mainView,view,1");
                                                              Ext.getCmp('mainView').setActiveItem(1);
                                                          }
                                                      },
                                                       {
                                                           xtype: 'button',
                                                           ui: 'plain',
                                                           //  scope: this,
                                                           text: '<button class="buttonSave buttonSaves">Search</button>',
                                                           // hasDisabled: false,
                                                           handler: function () {
                                                             //  var input0 = document.getElementById('MonthRangeID').value;
                                                             //  var partsOfStr = input0.split('-');

                                                            //   var input1 = document.getElementById('input-with-keypress-1');
                                                             //  console.log(partsOfStr[0]);
                                                              // console.log(partsOfStr[1]);
                                                               startSearch();
                                                              // console.log(sqlStatementDate.replace('undefined', ''));
                                                           }
                                                       },


                                                  ]

                                              },









































                                        ]



                                    },




         {
             xtype: 'container',
             hidden:true,
             style: "background-color: #F35B57;",
             height: 42,
             docked: 'top',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },


             items: [


                 {
                     html: '<font size=3px color=white><center>Search Cloud Receipt</center></font>',
                 },

             ]

         },

           //{
           //    xtype: 'container',
           //    style: "background-color: #F35B57;",
           //    docked: 'bottom',
           //    layout: {
           //        type: 'vbox',
           //        pack: 'center',
           //        align: 'center'

           //    },


           //    items: [


           //        {
           //            html: '<font size=2px color=white><center>Demo Version</center></font>',
           //        },

           //    ]

           //},




                       ]
                   },


               ]
           },









            





        ]
    }
});











var sliderCreated = 'N';
function createSliderTotalPaidRange() {
    if (sliderCreated == 'Y') {
        return;
        }
    sliderCreated = 'Y';
    var slider = document.getElementById('slider');
    slider.style.height = '20px';
    slider.style.width = '320px';
    slider.style.margin = '10px 5px 10px 5px';
    var input0 = document.getElementById('input-with-keypress-0');
    var input1 = document.getElementById('input-with-keypress-1');
    var inputs = [input0, input1];
    noUiSlider.create(slider, {
        start: [0, 5000],
        connect: true,
        direction: 'ltr',
        //   tooltips: [true, wNumb({ decimals: 1 })],
        range: {
            'min': [0],
            //'10%': [10, 10],
            //'30%': [30, 30],
            //'50%': [80, 50],
            //'70%': 3000,
            //'80%': 5000,
            //'90%': 9000,
            'max': 10000
        }
    });

    slider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });


    function setSliderHandle(i, value) {
        var r = [null, null];
        r[i] = value;
        slider.noUiSlider.set(r);
    }

    // Listen to keydown events on the input field.
    inputs.forEach(function (input, handle) {

        input.addEventListener('change', function () {
            setSliderHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {

            var values = slider.noUiSlider.get();
            var value = Number(values[handle]);

            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            var steps = slider.noUiSlider.steps();

            // [down, up]
            var step = steps[handle];

            var position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {

                case 13:
                    setSliderHandle(handle, this.value);
                    break;

                case 38:

                    // Get step to go increase slider value (up)
                    position = step[1];

                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }

                    // null = edge of slider
                    if (position !== null) {
                        setSliderHandle(handle, value + position);
                    }

                    break;

                case 40:

                    position = step[0];

                    if (position === false) {
                        position = 1;
                    }

                    if (position !== null) {
                        setSliderHandle(handle, value - position);
                    }

                    break;
            }
        });
    });


    //noUiSlider.create(slider, {
    //    start: [20, 80],
    //    connect: true,
    //    range: {
    //        'min': 0,
    //        'max': 100
    //    }
    //});
}

var MonthYearRange;
var DateRange;
var TotalPaidRange;
var Enterprise;
var AccountNos;
var Description;
var Status;
var Category;
function startSearch() {
     MonthYearRange='All';
     DateRange = 'All';
     TotalPaidRange = 'All';
     Enterprise = 'All';
     AccountNos = 'All';
     Description = 'All';
     Status = 'All';
     Category = 'All';

     if (StatusIsCheck == 'Y' && CategoryIsCheck == 'Y') {
         LoadingCustomMsgShow('Status and category cannot combined!', '2');
         return;
     }

    
     var searchStatement;
     if (MonthIsCheck == 'Y') {
         var input0 = document.getElementById('MonthRangeID').value;
         var partsOfStr = input0.split('-');
        
         searchStatement += '  AND MONTH(FlatBillDate)=' + "'" + partsOfStr[1] + "'" + ' AND   YEAR(FlatBillDate)=' + "'" + partsOfStr[0] + "'";
         MonthYearRange = 'Month:' + partsOfStr[1] + ' ,Year:' + partsOfStr[0];

     }
     if (DateRangeIsCheck == 'Y') {
         var ValueRangeDateFrom = document.getElementById('FromDate').value;
         var ValueRangeDateTo = document.getElementById('ToDate').value;

         searchStatement += '  AND FlatBillDate BETWEEN ' + "'" + ValueRangeDateFrom + "'" + ' AND ' + "'" + ValueRangeDateTo + ' 23:59:59.000' + "'";


        DateRange = 'From Date : ' + ValueRangeDateFrom + ' To Date:' + ValueRangeDateTo.replace('000', '');

        
    } if (TotalPaidRangeIsCheck == 'Y') {
        var input0 = document.getElementById('input-with-keypress-0').value;
        var input1 = document.getElementById('input-with-keypress-1').value;
        searchStatement += ' AND FlatBillTotalAmount BETWEEN ' + input0 + ' AND ' + input1;
        TotalPaidRange = 'RM ' + input0 + ' BETWEEN RM ' + input1;
    } if (EnterpriseIsCheck == 'Y') {
        var inputEnterprise = document.getElementById('input-Enterprise').value;
       // searchStatement += ' AND FlatBillWorkshop IN ' + '(' + "'" + inputEnterprise.replace(/,\s*$/, "") + "'" + ')';
        searchStatement += ' AND CloudreceiptAccNo IN ' + '(' + strEnterpriseidModified.replace(/,\s*$/, "") + ')';
        Enterprise = inputEnterprise;





    }
    if (AccountNoIsCheck == 'Y') {
        var inputAccountNo = document.getElementById('input-AccountNo').value;

       
        // searchStatement += ' AND FlatBillWorkshop IN ' + '(' + "'" + inputEnterprise.replace(/,\s*$/, "") + "'" + ')';
        searchStatement += ' AND FlatBillAccountNo IN ' + '(' + inputAccountNo + ')';
        AccountNos = inputAccountNo;





    }



    if (DescriptionsIsCheck == 'Y') {
        var inputDescription = document.getElementById('input-Description').value;
        searchStatement += ' AND FlatBillDesc LIKE ' + "'" + '%' + inputDescription + '%' + "'";
        Description = inputDescription;
    } if (StatusIsCheck == 'Y') {
        StatusValue = StatusValueConfirm.replace("NaN'", "''") + ',' + StatusValueNew.replace("NaN'", "''") + ',' + StatusValueVoid.replace("NaN'", "''");
        //searchStatement += '%20AND%20FlatBillStatus%20IN%20' + '(' + StatusValue.replace("''  ''", '%27%27%20%27%27') + ')';
        //searchStatement += ' AND FlatBillStatus IN ' + '(' + StatusValue.replace("''  ''", '%27%27%20%27%27') + ')';
        searchStatement += ' AND FlatBillStatus IN ' + '(' + StatusValue + ')';
        Status = StatusValue;
    }
    if (CategoryIsCheck == 'Y') {
        CategoryValue = CategoryValueClaimable.replace("NaN'", "''") + ',' + CategoryValuePartiallyPaid.replace("NaN'", "''") + ',' + CategoryValueDeposit.replace("NaN'", "''") + ',' + CategoryValueWarranty.replace("NaN'", "''") + ',' + CategoryValueGeneral.replace("NaN'", "''");
        //searchStatement += '%20AND%20FlatBillStatus%20IN%20' + '(' + StatusValue.replace("''  ''", '%27%27%20%27%27') + ')';
        //searchStatement += ' AND FlatBillStatus IN ' + '(' + StatusValue.replace("''  ''", '%27%27%20%27%27') + ')';
        searchStatement += ' AND FlatBillCategory IN ' + '(' + CategoryValue + ')';
        Category = CategoryValue;
    }
    var query = searchStatement.replace('undefined', '');

    if (query.length > 1)
    {
        LoadingCustomMsgShow('Fetching...', '4');
        Ext.getStore('FlatBillSearchCReceiptStore').getProxy().setExtraParams({
            query: query + ' AND  FlatBillNumberIC='+"'"+GetCurrentMyKadNo()+"'"
        });
        Ext.StoreMgr.get('FlatBillSearchCReceiptStore').load();
        loadCRSearcResult(query);
    }else
    {
      
        LoadingCustomMsgShow('Not Valid!', '2')
    }

   



}






function loadCRSearcResult(query) {
    var countSearchResultReceipt = 0
    var searchResultTotalAmount=0;
    var searchResultTotalTax=0;
    var searchResultTotalPaid=0;
    console.log(query + ' AND  FlatBillNumberIC=' + GetCurrentMyKadNo());
    //Ext.getCmp('ReceiptSearchResultCriteriaID').hide();
  
    routesArray.push("mainView,view,8");

        var task = Ext.create('Ext.util.DelayedTask', function () {
            Ext.getStore('FlatBillSearchCReceiptStore').getProxy().setExtraParams({
                query: query + ' AND  FlatBillNumberIC=' + "'" + GetCurrentMyKadNo() + "'"
            });
            Ext.StoreMgr.get('FlatBillSearchCReceiptStore').load();
            var myStore = Ext.getStore('FlatBillSearchCReceiptStore');
            
            var modelRecord = myStore.getAt(0);
            countSearchResultReceipt = myStore.getCount();
            if (countSearchResultReceipt >= 1)
            {
                Ext.getCmp('mainView').setActiveItem(8);
              
                searchResultTotalAmount = modelRecord.get('TotalAmount');
                searchResultTotalTax = modelRecord.get('TotalTax');
                searchResultTotalPaid = parseFloat(searchResultTotalAmount) + parseFloat(searchResultTotalTax);              
                
                Ext.getCmp('lblCountSearchResultReceipt').setHtml('<font size="2" color="black"><b>Founds(' + countSearchResultReceipt + ')</b></font>');
                Ext.getCmp('lblCountSearchResultReceiptSecondPanel').setHtml('<font size="2" color="black"><b>Founds(' + countSearchResultReceipt + ')</b></font>');
                //Ext.getCmp('btnSearchResultReceiptTotalAmount').setHtml('<font size="4" color="black">RM ' + searchResultTotalAmount + '</font>');
                //Ext.getCmp('btnSearchResultReceiptTotalAmountTax').setHtml('<font size="4" color="black">RM ' + searchResultTotalTax + '</font>');
                //Ext.getCmp('btnSearchResultReceiptTotalPaid').setHtml('<font size="4" color="black">RM ' + searchResultTotalPaid.toFixed(2) + '</font>');

                
            } else
            {
                Ext.getCmp('mainView').setActiveItem(8);
                Ext.getCmp('lblCountSearchResultReceipt').setHtml('<font size="2" color="black">0/font>');
                //Ext.getCmp('btnSearchResultReceiptTotalAmount').setHtml('<font size="4" color="black">RM 00.00</font>');
                //Ext.getCmp('btnSearchResultReceiptTotalAmountTax').setHtml('<font size="4" color="black">RM 00.00</font>');
                //Ext.getCmp('btnSearchResultReceiptTotalPaid').setHtml('<font size="4" color="black">RM 00.00</font>');
            }
           
            var convertedStatus = ConvertStatus(Status);
            //Ext.getCmp('TblSearchInfo').setHtml('<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;"><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Date Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">' + DateRange + '</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Total Paid Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">' + TotalPaidRange + '</td></tr>'+
            //    '<tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Enterprise</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">' + Enterprise + '</td></tr>'+
            //    '<tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Descriptions:</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">' + Description + '</td></tr>'+
            //    '<tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="4">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4">' + convertedStatus + '</td></tr>' +
            //    '<tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top" colspan="4"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Total Amount</td>' +
            //    '<td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Total Tax</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Total Paid</td>' +
            //    '<td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;vertical-align:top">Receipt(s)</td></tr>' +
            //    '<tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top">RM ' + searchResultTotalAmount + '</td>' +
            //    '<td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top">RM ' + searchResultTotalTax + '</td>' +
            //    '<td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;vertical-align:top">RM ' + searchResultTotalPaid + '</td>' +
            //    '<td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;text-align:center;vertical-align:top">' + countSearchResultReceipt + '</td></tr></table>');
           
         // original   Ext.getCmp('TblSearchInfo').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 1px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:60%;"><div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite">Parameter</div>Month:<br>' + Enterprise + '<br>Date Range:<br>' + Enterprise + '<br>Total Paid Range:<br>' + Enterprise + '<br>Enterprise:<br>' + Enterprise + '<br>' +
              //  'Account No:<br><b>' + Enterprise + '</b><br>Describtion:<br>' + Enterprise + '<br>Receipt Status:<br>' + convertedStatus + '<br>Receipt Category:<br>' + Enterprise + '<br></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 1px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;width:40%;"><div align="center" style="border:1px solid grey; background-color: #37474f;color:floralwhite;">Summary</div><div align="center" style="background-color: #3390FF;color:white;border:2px solid white;"><font size="3"><b>RM ' + searchResultTotalAmount + '</b><br></font>Total Amount<br></div><div align="center" style="background-color: #FFA233;color:white;border:2px solid white;"><font size="3"><b>RM ' + searchResultTotalTax + '</b><br></font>Total Tax<br></div><div align="center" style="background-color: #9033FF;color:white;border:2px solid white;"><font size="3"><b>RM ' + searchResultTotalPaid.toFixed(2) + '</b><br></font>Total Paid<br></div><div align="center" style="background-color: #FF336E;color:white;border:2px solid white;"><font size="3"><b>' + countSearchResultReceipt + '</b><br></font>Receipt(s) Found<br></div></th></tr></table>');
           
            Ext.getCmp('TblSearchInfo').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 1px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:60%;">Month:<br><b>' + MonthYearRange + '</b><br>Date Range:<br><b>' + DateRange + '</b><br>Total Paid Range:<br><b>' + TotalPaidRange + '</b><br>Enterprise:<br><b>' + Enterprise + '</b><br>' +
              'Account No:<br><b>' + AccountNos + '</b><br>Describtion:<br><b>' + Description + '</b><br>Receipt Status:<br><b>' + convertedStatus + '</b><br>Receipt Category:<br><b>' + Category.replace(/'\s*$/, "") + '</b><br></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:1px 1px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top;width:40%;"><div align="center" style="background-color: #3390FF;color:white;border:2px solid white;"><font size="3"><b>RM ' + searchResultTotalAmount + '</b><br></font>Total Amount<br></div><div align="center" style="background-color: #FFA233;color:white;border:2px solid white;"><font size="3"><b>RM ' + searchResultTotalTax + '</b><br></font>Total Tax<br></div><div align="center" style="background-color: #9033FF;color:white;border:2px solid white;"><font size="3"><b>RM ' + searchResultTotalPaid.toFixed(2) + '</b><br></font>Total Paid<br></div><div align="center" style="background-color: #FF336E;color:white;border:2px solid white;"><font size="3"><b>' + countSearchResultReceipt + '</b><br></font>Receipt(s) Found<br></div></th></tr></table>');


            Ext.Viewport.setMasked(false);
          
            LoadingCustomMsgHide();
           // SearchResultReceiptMenuShow();

        });
        task.delay(2000);
   

}





function ConvertStatus(Status) {

    var status='Not Set';
    console.log(Status);

    var str = Status;
    var myarray = str.split(',');


    if (str != 'ALL STATUS')
    {
        for (var i = 0; i < myarray.length; i++) {
            if (myarray[i] == '1') {
                status = '( CONFIRM )';
            } else
                if (myarray[i] == '2') {
                    status += ' ( NEW )';
                } else
                    if (myarray[i] == '3') {
                        status += ' ( VOID )';
                    }
            console.log(status);
        }
    } else
    {
        status = 'undefinedCONFIRM , NEW , VOID';
    }

    


    console.log(status);
    //return status.replace('undefined','');
    return status;



}


function setDayLeftlabel() {


    if (GetCurrentVersion() == 'Standard 1.1') {
       

        Ext.getCmp('ContainerDayleftMessage').setHidden(true);
        Ext.getCmp('chckBoxDateRangeNew').setDisabled(false);
        Ext.getCmp('fieldsetDateRange').setTitle('Date Range');
        Ext.getCmp('chckBoxTotalPaidRange').setDisabled(false);
        Ext.getCmp('fieldsetPaidRange').setTitle('Total Paid Range (RM)');

        Ext.getCmp('chckBoxAccountNo').setDisabled(false);
        Ext.getCmp('fieldsetAccountNo').setTitle('Account No');


        Ext.getCmp('chckBoxCategory').setDisabled(false);
        Ext.getCmp('fieldsetCategory').setTitle('Category');
        return
    } else
    {
        Ext.getCmp('ContainerDayleftMessage').setHidden(false);
        if (GetCurrDayLeft() > 0) {
            ProFeatureLocked = 'No';
            Ext.getCmp('ContainerDayleftMessage').setStyle('border-bottom:1px solid;background-color:#fba19a');
            Ext.getCmp('FilterReceiptDayLeft').setHtml('<div class="marquee"><span><a href="mailto:Support@Cloud-Receipts.com?subject=Request for Upgrade Cloud Receipt&body=Hi,I would like to unlock Pro Features.TQ"><u><font size="2" color="black">Pro feature will be end in (' + GetCurrDayLeft() + ') days - Tab this link to unlocked !</font></u></a></span> </div>');

            Ext.getCmp('chckBoxDateRangeNew').setDisabled(false);
            Ext.getCmp('fieldsetDateRange').setTitle('Date Range(Trial)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');
            Ext.getCmp('chckBoxTotalPaidRange').setDisabled(false);
            Ext.getCmp('fieldsetPaidRange').setTitle('Total Paid Range (RM)(Trial)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');

            Ext.getCmp('chckBoxAccountNo').setDisabled(false);
            Ext.getCmp('fieldsetAccountNo').setTitle('Account No(Trial)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');


            Ext.getCmp('chckBoxCategory').setDisabled(false);
            Ext.getCmp('fieldsetCategory').setTitle('Category(Trial)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');





        } else {

            ProFeatureLocked = 'Yes';
            Ext.getCmp('ContainerDayleftMessage').setStyle('border-bottom:2px dotted;background-color:red');
            Ext.getCmp('FilterReceiptDayLeft').setHtml('<div class="marquee"><span><a href="mailto:Support@Cloud-Receipts.com?subject=Request for Upgrade Cloud Receipt&body=Hi,I would like to unlock Pro Features.TQ"><u><font size="3" color="white">Pro feature has been locked - Tab this link to unlocked !,(' + GetCurrDayLeft() + ') days passed.</font></u></a></span> </div>');
            Ext.getCmp('chckBoxDateRangeNew').setDisabled(true);
            Ext.getCmp('fieldsetDateRange').setTitle('Date Range(Locked!)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');
            Ext.getCmp('chckBoxTotalPaidRange').setDisabled(true);
            Ext.getCmp('fieldsetPaidRange').setTitle('Total Paid Range (RM)(Locked!)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');
            Ext.getCmp('chckBoxAccountNo').setDisabled(true);
            Ext.getCmp('fieldsetAccountNo').setTitle('Account No(Locked!)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');
            Ext.getCmp('chckBoxCategory').setDisabled(true);
            Ext.getCmp('fieldsetCategory').setTitle('Category(Locked!)<img src="resources/icons/proOren.png" style="float:left;width: 26px; height: 26px;">');
        }


    }




    
   
}

