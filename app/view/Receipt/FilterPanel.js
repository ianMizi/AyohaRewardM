Ext.define('ianMizi.view.Receipt.FilterPanel', {
});



var _FilterPanel;

function FilterPanel() {
    _FilterPanel =
        Ext.create('Ext.Panel', {
            requires: [
       'Ext.dataview.List',
       'Ext.data.Store',
        'Ext.field.Slider'
            ],
            xtype: 'panel',
            //height: 200,
            height: '100%',
            width: '100%',
            id: 'FilterPanellD',
            draggable: false,
            right: 0,
            zIndex: 30,
            // bottom: 260,
            top: 0,
            modal: true,
            hideOnMaskTap: true,
            showAnimation: {
                type: 'slideIn',
                direction: 'left',
                duration: 200,
                //easing: 'ease-in'
            },
            hideAnimation: {
                //type: 'reveal',
                //duration: 250,
                type: 'slideOut',

                direction: 'right',
                duration: 200
            },
            //scrollable: {
            //    direction: 'vertical',
            //    directionLock: true
            //},
            style: 'border-bottom:1px solid;background-color:#f44336;',
            items: {

                xtype: 'container',
                //style: 'background-color: transparent;',
                layout: {
                    type: 'vbox',
                    //pack: 'left',
                    //align: 'end'
                },
              
                items: [





                     {
                         xtype: 'container',
                         style: 'border-bottom:1px solid;background-color:#f44336;',
                         layout: {
                             type: 'hbox'
                         },
                         items: [

    {
        xtype: 'button',
        ui: 'plain',
        //id: 'lblNotifications',
        //text: 'Filter Receipts',
        align: 'stretch',
        height: 52,
        width: '100%',
        //margin: '-5 0 0 0',
        html: '<font size="3" color="white">Filter Cloud Receipts</font>'
    },


                         ]
                     },


                                          

                    {

                      


                    
                        xtype: 'container',
                        margin:'-10 0 0 0',
                        layout: {
                            type: 'vbox'
                        },
                        items: [

                           {
                               margin:'15 0 0 30',
                               xtype: 'checkboxfield',
                               id: 'chckBoxDateRange',
                             //  label: 'Label',
                               listeners: {
                                   tap: {
                                   
                                       fn: function () {
                                           this.setChecked(!this.isChecked());
                                       }
                                   }
                               }
                           },



                          

                            {
                                //xtype:'container',
                                //layout: {
                                //    type: 'hbox'
                                //},
                               margin: '-50 10 0 10',
                                xtype: 'fieldset',
                                    layout: {
                                        type: 'hbox'
                                    },
                                   // instructions: 'Range Date Selected ,will impact loading time,recommeded to select not too long range. ',
                                    title: 'Date Range',



                                items: [

                                    {
                                        xtype: 'container',
                                        layout: {
                                            type: 'vbox'
                                        },
                                        items: [

                                            {
                                                html: '<font size="3" color="black"><b>From</b></font>',
                                                margin:'0 0 0 60',
                                                //xtype: 'button',
                                                //ui: 'decline',
                                                ////id: 'lblNotifications',
                                                ////text: 'Filter Receipts',
                                                //align: 'stretch',
                                                //height: 32,
                                                //width: 52,
                                                //margin: '0 -20 0 0',
                                                //html: '<font size="2" color="black">From</font>'

                                            },

                                            {
                                                margin: '0 0 0 5',
                                                html: '<div class="container datepicker-container col-sm-6 col-md-6 col-lg-3"><div id="cuppaDatePickerContainer"></div></div>'
                                            },
                                            {
                                                margin: '0 0 0 17',
                                                html: '<font size="2" color="black">Range Date Selected </font>'
                                            }
                                       
                                        ]
                                    },
                                         {
                                             xtype: 'container',
                                             layout: {
                                                 type: 'vbox'
                                             },
                                             items: [

                                                 {
                                                     html: '<font size="3" color="black"><b>To</b></font>',
                                                     margin:'0 0 0 -60',
                                                     //xtype: 'button',
                                                     //ui: 'decline',
                                                     ////id: 'lblNotifications',
                                                     ////text: 'Filter Receipts',
                                                     //align: 'stretch',
                                                     //height: 42,
                                                     //width: 32,
                                                     //margin: '0 0 0 -50',
                                                     //html: '<font size="2" color="black">To</font>'

                                                 },

                                                 {
                                                     margin:'0 0 0 -120',
                                                     html: '<div class="container datepicker-container col-sm-6 col-md-6 col-lg-3"><div id="cuppaDatePicker"></div></div>'
                                                 },
                                                 {
                                                     margin: '0 0 0 -137',
                                                     html: '<font size="2" color="black">will be impacted loading time</font>'
                                                 }
                                                
                                             ]
                                         },
                                          //{
                                          //    //html: '<font size="3" color="black">From</font>'

                                          //    xtype: 'button',
                                          //    ui: 'plain',
                                          //    //id: 'lblNotifications',
                                          //    //text: 'Filter Receipts',
                                          //    align: 'stretch',
                                          //    height: 42,
                                          //    width: '100%',
                                          //  //  margin: '0 0 0 -50',
                                          //    html: '<font size="2" color="black">Range Date Selected ,will impact loading time,recommeded to select not too long range.</font>'

                                          //},
                                ]
                            },
                           



                              {
                                  xtype: 'container',
                                  margin: '-10 0 0 0',
                                  layout: {
                                      type: 'vbox'
                                  },

                                  items:[



                                       {
                                           margin: '30 0 0 30',
                                           xtype: 'checkboxfield',
                                           id: 'chckBoxTotalPaidRange',
                                           //  label: 'Label',
                                           listeners: {
                                               tap: {

                                                   fn: function () {
                                                       this.setChecked(!this.isChecked());
                                                   }
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
                                          title: 'Total Paid Range (RM)',



                                          items: [

                                              {
                                                  xtype: 'container',
                                                  layout: {
                                                      type: 'vbox'
                                                  },
                                                  items: [

                                                      {
                                                          html: '<div style="width:100%; height:42px;" id="slider"></div>',


                                                      },


                                                      {
                                                          xtype: 'container',
                                                          layout: {
                                                              type: 'hbox'
                                                          },
                                                          items: [
                                                              {
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
                                  margin: '-10 0 0 0',
                                  layout: {
                                      type: 'vbox'
                                  },

                                  items: [



                                       {
                                           margin: '30 0 0 30',
                                           xtype: 'checkboxfield',
                                           id: 'chckBoxEnterprise',
                                           //  label: 'Label',
                                           listeners: {
                                               tap: {

                                                   fn: function () {
                                                       this.setChecked(!this.isChecked());
                                                   }
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
                                                  items: [

                                                      {
                                                          margin:'15 0 0 25',
                                                          html: '<div style="width:100%; text-align:left;"><input type="text" id="input-Enterprise" style="border-color:red;color:black;width:100%;text-align: left"></div>'
                                                      },

                                                     {
                                                         xtype: 'button',
                                                         align: 'stretch',
                                                         margin:'5 0 0 -3',
                                                         id: 'btnlistenterprise',
                                                         height: 32,
                                                         width: 32,
                                                         ui: 'plain',
                                                         html: '<img src="resources/icons/red-list-128.png" style="width: 22px; height: 22px;" />',
                                                         handler: function () {
                                                           
                                                         }
                                                     
                                                      }
                                                      //{
                                                      //    xtype: 'container',
                                                      //    layout: {
                                                      //        type: 'hbox'
                                                      //    },
                                                      //    items: [
                                                      //        {
                                                      //            html: '<div style="width:100%; text-align:center;"><input type="text" id="input-with-keypress-0" style="border-color:red;color:black;width:40%;text-align: center"><font size="2" color="black">-Range-</font><input type="text" id="input-with-keypress-1" style="border-color:red;color:black;width:40%;text-align: center"> </div>'
                                                      //        },

                                                      //    ]
                                                      //}


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
                                           margin: '30 0 0 30',
                                           xtype: 'checkboxfield',
                                           id: 'chckBoxDescription',
                                           //  label: 'Label',
                                           listeners: {
                                               tap: {

                                                   fn: function () {
                                                       this.setChecked(!this.isChecked());
                                                   }
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
                                                          margin: '15 0 0 25',
                                                          html: '<div style="width:100%; text-align:left;"><input type="text" id="input-Description" style="border-color:red;color:black;width:100%;text-align: left"></div>'
                                                      },

                                                     {
                                                         xtype: 'button',
                                                         align: 'stretch',
                                                         margin: '5 0 0 -3',
                                                         id: 'btnDescriptionss',
                                                         height: 32,
                                                         width: 32,
                                                         ui: 'plain',
                                                         html: '<img src="resources/icons/PendingWhite.png" style="width: 22px; height: 22px;" />',
                                                         handler: function () {

                                                         }

                                                     }
                                                      //{
                                                      //    xtype: 'container',
                                                      //    layout: {
                                                      //        type: 'hbox'
                                                      //    },
                                                      //    items: [
                                                      //        {
                                                      //            html: '<div style="width:100%; text-align:center;"><input type="text" id="input-with-keypress-0" style="border-color:red;color:black;width:40%;text-align: center"><font size="2" color="black">-Range-</font><input type="text" id="input-with-keypress-1" style="border-color:red;color:black;width:40%;text-align: center"> </div>'
                                                      //        },

                                                      //    ]
                                                      //}


                                                  ]
                                              },



                                          ]

                                      }


                                  ]


                              },
























                    //{
                    //    xtype: 'fieldset',
                    //    layout: {
                    //        type: 'hbox'
                    //    },
                    //    instructions: 'Description Goes Heres',
                    //    title: 'Date Range',
                    //    items: [
                    //        {
                    //            //html: '<font size="3" color="black">From</font>'
                         
                    //                xtype: 'button',
                    //                ui: 'plain',
                    //                //id: 'lblNotifications',
                    //                //text: 'Filter Receipts',
                    //                align: 'stretch',
                    //                height: 42,
                    //                width: '50%',
                    //                //margin: '-5 0 0 0',
                    //                html: '<font size="2" color="black">From</font>'
                             
                    //        },
                    //        //{
                    //        //    xtype:'spacer'
                    //        //},
                    //          {
                    //              //  html: '<font size="3" color="black">To</font>'
                    //              xtype: 'button',
                    //              ui: 'plain',
                    //              //id: 'lblNotifications',
                    //              //text: 'Filter Receipts',
                    //              align: 'stretch',
                    //              height: 42,
                    //              width: '50%',
                    //              //margin: '-5 0 0 0',
                    //              html: '<font size="2" color="black">To</font>'
                    //          },

                    //    ]
                    //},
                        ]



                    },
                        
                       


                  




                ]

            }
                    
                      

                       

                   

            //       {
            //            xtype: 'sliderfield', // sliderfield display HTML5 slider and allows user to set the value by sliding the "thumb".
            //            id:'id_percentageSlider',
            //            label:'Last year Percentagssades',
            //            name: 'percentage',
            //            component: {
            //                allowThumbsOverlapping: true
            //            },
            //            increment:.1, // value will be incremented by .10 whenever the slider is moved.
            //          //  value: 1, // initial value
            //            value: [
            //                1,
            //                12
            //            ],
            //            //minValue: 30, // start value of slider
            //            //maxValue: 100, // end value of slider
            //            disabled:false, // boolean value to enable and disable the field, by default its false
            //            listeners:{ // we are adding this listener so that we can display the slider value in numberfield whenever the slider value changes
            //                drag:function( value, sl, thumb, e, eOpts ){ // this method will be called whenever the slider is dragged.
            //                    Ext.ComponentQuery.query('#id_displayPercentage')[0].setValue(e); // getting numberfield component
            //                }
            //            },

            //                              //listeners: {
            //                              //    change: function (select, thumb, newval, oldval) {
            //                              //        Ext.getCmp("slidervalue").setValue(newval);

            //                              //     Ext.ComponentQuery.query('#id_displayPercentage')[0].setValue(e); // getting numberfield component
            //                              //     //   console.log(newval);
            //                              //    }
            //                              //},




            //        },{
            //            xtype: 'numberfield', // number field is a specialized type of textfield used to display number. In our example this field will be used to display the slider value.
            //            id:'id_displayPercentage',
            //            value: 1,
            //            disabled:true
            //        },
                   


            //           {
            //               xtype: 'container',
            //               style: 'border-bottom:1px solid;background-color:#f44336;',
            //               layout: {
            //                   type: 'hbox'
            //               },
            //               items: [


            //              {
            //                  xtype: 'label',
            //                  id: 'lblNotifications',
            //                  margin: '-5 0 0 0',
            //                  html: '<font size="3" color="white">Notification</font>'
            //              },


            //               ]
            //           },








            //              {
            //                  xtype: 'titlebar',
            //                  docked: 'top',
            //                  id: 'SliderValueToolbar',
            //                  title: 'value=[25,75]'
            //              },
            //{
            //    xtype: 'fieldset',
            //    title: '',
            //    items: [
            //        {
            //            xtype: 'checkboxfield',
            //            id: 'OverlappingCkeckBox',
            //            itemId: 'mycheckbox',
            //            label: 'Allow Thumb OverLapping :',
            //            checked: true
            //        },
            //        {
            //            xtype: 'sliderfield',
            //            id: 'SliderField',
            //            itemId: 'mysliderfield',
            //            component: {
            //                allowThumbsOverlapping: true
            //            },
            //            label: 'Slider Field',
            //            value: [
            //                25,
            //                75
            //            ]
            //        }
            //    ],




            //    listeners: [
            //        {
            //            fn: 'onOverlappingCkeckBoxCheck',
            //            event: 'check',
            //            delegate: '#OverlappingCkeckBox'
            //        },
            //        {
            //            fn: 'onOverlappingCkeckBoxUncheck',
            //            event: 'uncheck',
            //            delegate: '#OverlappingCkeckBox'
            //        },
            //        {
            //            fn: 'onSliderFieldChange',
            //            event: 'change',
            //            delegate: '#SliderField'
            //        }
            //    ]

            //}
             
 
        


                    //   ]
 //{
 //    xtype: 'label',
 //    id: 'lblMonthFilter',
 //    margin: '0 0 0 0',
 //    html: '<font size="4" color="black">Month</font>'
 //},
 //               {
 //                   xtype: 'sliderfield',
 //                   id: 'MonthSelect',
                  
 //                   values: [1, 12],
 //                   listeners: {
 //                       change: function (select, thumb, newval, oldval) {
 //                           Ext.getCmp("slidervalue").setValue(newval);
 //                        //   console.log(newval);
 //                       }
 //                   }
 //               },
 //               {
 //                   xtype: 'numberfield',
 //                   id: 'slidervalue',
 //                   value: 0, // How do I get the value from the sliderfield here??
 //                   left: 50
 //               }





 






     //{
     //    xtype: 'container',
      
     //    layout: {
     //        type: 'vbox'
     //    },
     //    items: [

//{
//    xtype: 'fieldset',
//    layout: {
//        type: 'hbox'
//    },
//    instructions: 'Description Goes Heres',
//    title: 'Field Title',
//    items: [
//        {
//            xtype: 'sliderfield',
//            flex: 17,
//            id: 'UpdatingSliderField',
//            name: 'integer_value',
//            value: [
//                2
//            ],
//            maxValue: 10
//        },
//        {
//            xtype: 'label',
//            flex: 3,
//            cls: 'slider-label',
//            html: '8',
//            id: 'UpdatingSliderLabel'
//        }
//    ]
//}
//         ],
//         listeners: [
//             {
//                 fn: 'onUpdatingSliderFieldChange',
//                 event: 'change',
//                 delegate: '#UpdatingSliderField'
//             },
//             {
//                 fn: 'onUpdatingSliderFieldDrag',
//                 event: 'drag',
//                 delegate: '#UpdatingSliderField'
//             }
//         ],

         
//         onUpdatingSliderFieldChange: function(me, sl, thumb, newValue, oldValue, eOpts) {
//        me.up("#UpdatingSlider").down("#UpdatingSliderLabel").setHtml(newValue);
//    },

//    onUpdatingSliderFieldDrag: function(sliderfield, sl, thumb, e, eOpts) {
//        var slider = sliderfield.getComponent();
//        var index = slider.getThumbIndex(thumb);
//        var newValue = slider.getValue()[index];
//        sliderfield.up("#UpdatingSlider").down("#UpdatingSliderLabel").setHtml(newValue);
//    }

   //  },


        
   










              //  ]


     
           


        });
    return _FilterPanel;
}



function FilterPanelHide() {
    _FilterPanel.hide();
}




function FilterPanelShow() {
    Ext.Viewport.remove(_FilterPanel);
    this.overlay = Ext.Viewport.add(FilterPanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    createSliderTotalPaidRange();
    GanerateCalender();
}





