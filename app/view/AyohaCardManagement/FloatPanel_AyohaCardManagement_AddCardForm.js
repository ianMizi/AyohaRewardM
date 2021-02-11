Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardForm', {

});




var _AddCardFormCardType;


var _FloatPanel_AyohaCardManagement_AddCardForm;

function FloatPanel_AyohaCardManagement_AddCardForm() {

    _FloatPanel_AyohaCardManagement_AddCardForm = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_AddCardFormID',
            xtype: 'panel',
            zIndex: 150,
            xtype: 'container',
            height: 400,
            //  height: '60%',
            width: '90%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: true,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
            },

            style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        // docked: 'top',
                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_AyohaCardManagement_AddCardFormHeader',
                        style: {
                            // background: '#D25959',
                            background: 'transparent',
                            // border: '2px'
                        },
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                        },
                        // hidden:true,
                        items:
                               [


                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_AyohaCardManagement_AddCardFormCardBack',
                                                 height: 30,
                                                 width: 35,
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     _FloatPanel_AyohaCardManagement_AddCardForm.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'left',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     is_FloatPanel_AyohaCardManagement_AddCardFormHide = 'N';
                                                    
                                                 }
                                             },
                                             {
                                                 margin: '0 0 0 0',
                                                 html: '<font size=2 color=white><b>New Stamp Card</b></font>'
                                             },
                                              {
                                                  xtype: 'spacer',

                                              },



                                                      
                                                   










                               ]

                    },

                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        margin: '0 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {

                                id: 'FloatPanel_AyohaCardManagement_AddCardFormImg',
                                width: 50,
                                height: 50,
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/AyohaStampCardWhite.png" width="50" height="50" alt="Company Name"></div>',

                            },
                            {
                                html: '<font size=2 color=white><b>Create New Stamp Card</b></font>'
                            }
                        ]
                    },



                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        width: '100%',
                        margin: '13 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left'
                        },
                        items: [
                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=white>Stamp Card Campaign Name</font>',

                          },


                          {
                             
                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_AddCardForm_StampCardCampaignName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },

        



          {
              margin: '10 0 0 0',

              html: '<font size=2 color=white>Card Type</font>',

          },


        {
            xtype: 'container',
            // width: '100%',
            margin: '5 0 0 0',
            style: {

                // background: '#f44336',
                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'
            },
            items: [{
                xtype: 'togglefield',
                // text:'NO/YES',
                //    name: 'toggleName',
                margin: '-12 0 0 -10',
                height: 5,
                // width:20,
                id: 'togglefieldFloatPanel_AyohaCardManagement_AddCardFormCardType',
                //label: 'Manual',
                disabled: true,
                value: false,
                style: {

                    // background: '#f44336',
                    background: 'transparent',

                },
                listeners: {
                    change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                        //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                        if (newValue == true) { // if toggle is true then enable the slider

                            _AddCardFormCardType = "Custome";
                            Ext.getCmp('htmlAddCardFormCardType').setHtml('<font size=2 color=white>Custome</font>');
                                              
                            return;
                                             
                        }


                            // if(newValue == false)
                        else { // else make it false

                         
                            _AddCardFormCardType = "Auto-Default";                       
                            Ext.getCmp('htmlAddCardFormCardType').setHtml('<font size=2 color=white>Default</font>');


                        }


                    },


                }


            },
             {
                 margin: '3 0 0 0',
                 id:'htmlAddCardFormCardType',
                 html: '<font size=2 color=white>Custome</font>',

             },

            ]





        },


         {
             margin: '13 0 0 0',

             html: '<font size=2 color=white>Campaign Start Date</font>',

         },

         {
             margin: '-2 0 0 0',

             html: ' <input type="date" id="CampaignStartDate">',

         },


         {
             margin: '13 0 0 0',

             html: '<font size=2 color=white>Campaign End Date</font>',

         },

         {
             margin: '-2 0 0 0',

             html: ' <input type="date" id="CampaignEndDate">',

         },
        
        {
            xtype: 'container',
            margin: '13 0 0 0',
            width: '100%',
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [
        {
            xtype: 'button',
            //  align: 'stretch',

            ui: 'plain',
            width: '100%',
            height: 50,
            margin: '-5 0 0 0',
            // width: '80%',
            //style: {
            //    background: '#FA8072',
            //},
            // padding: '10px',
            //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
            text: '<button class="buttonStampCampaignCreate">Create</button>',

            handler: function () {
                var  _StampCardCampaignName=  document.getElementById('input-FloatPanel_AyohaCardManagement_AddCardForm_StampCardCampaignName').value;
                //document.getElementById('CampaignStartDate').value = StampCampaignName;
                //document.getElementById('CampaignEndDate').value = StampCampaignName;



                var CampaignStartDate = new Date(document.getElementById('CampaignStartDate').value);
                var CampaignEndDate = new Date(document.getElementById('CampaignEndDate').value);
                if (CampaignStartDate == "Invalid Date") {
                    swalFireFail("Invalid Start Date!!");
                    return;
                }
              

                if (CampaignEndDate == "Invalid Date") {
                    swalFireFail("Invalid End Date!!");
                    return;
                }
              

                // Extract pieces of the date:
               // var month = CampaignStartDate.getMonth(); // months start counting from zero!
            


                // var month = EditCardCampaignStartDate.getMonth(); // months start counting from zero!
                var dayCampaignStart = parseInt(CampaignStartDate.getDate() +CampaignStartDate.getMonth()+ CampaignStartDate.getFullYear());
                var dayCampaignEnd = parseInt(CampaignEndDate.getDate() + CampaignEndDate.getMonth() + CampaignEndDate.getFullYear());




                if (dayCampaignStart > dayCampaignEnd) {
                    // alert("Fail-Campaing date Has passed");
                    swalFireFail("Fail-Campaign date Has passed!!");
                    return;

                }

                if (dayCampaignStart == dayCampaignEnd) {
                    swalFireFail("Fail-Campaign date start and date end is same!!");
                    return;

                }


              //  var year = CampaignStartDate.getFullYear();


               
                

                





                if (_StampCardCampaignName.length < 2) {
                    swalFireFail("Stamp Campaign Name Not Valid!!")
                    return
                }


                if (dayCampaignStart < dayCampaignEnd) {
                    Ext.Ajax.request({

                        url: GetAPIurl() + '/StampCampaign/StampCampaignInsert',

                        params: {
                            StampCampaignName: _StampCardCampaignName,
                            StampCardType: _AddCardFormCardType,
                            StartDate: document.getElementById('CampaignStartDate').value,
                            EndDate: document.getElementById('CampaignEndDate').value,
                            EnterpriseAccNo: GetEnterpriseAccNo(),
                            CreatedByAccNo: GetCurrentAccountNo(),
                            CreatedBy: document.getElementById('UN').value,
                            StampCardBackground: 'Auto-Default'
                        },
                        success: function (result, request) {
                            swalFireSuccess("Card Created Successfully!");
                            //LoadingCustomMsgShow('Success!', '3');

                        },
                        failure: function (result, request) {
                            swalFireFail("Card Created Error!")
                         //   LoadingCustomMsgShow('Error, Contact Admin!', '2');

                        }
                    });
                }


            
            },


        },

            ]
        },

         {
             xtype: 'container',
             hidden: true,
             height: 1,
             width: '100%',
             style: ' background-color:white',
             margin: '0 0 0 0',
             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'
             },
             
         },


          {
              xtype: 'container',
              hidden:true,
              style: ' background-color:transparent',
              margin: '10 0 0 0',
              layout: {
                  type: 'hbox',
                  pack: 'left',
                  align: 'left'
              },
              items: [
                  {

                      id: 'FloatPanel_AyohaCardManagement_AddCardFormImgAudit',
                      width: 50,
                      height: 50,
                      // iconCls: 'list',
                      html: '<div ><img src="resources/icons/AuditOneWhite.png" width="50" height="50" alt="Company Name"></div>',

                  },
                  {
                      margin: '10 0 0 0',
                      html: '<font size=2 color=white><b>Audit</b></font>'
                  }
              ]
          },


        {
            xtype: 'container',
            margin: '0 0 0 0',
            width: '100%',
            hidden: true,
            style: {

                background: 'transparent',

            },
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'center'

            },
            items: [
                  {
                      xtype: 'container',
                      margin: '0 0 0 0',
                      width: 150,
                      style: {

                          background: 'transparent',

                      },
                      layout: {
                          type: 'vbox',
                          pack: 'left',
                          align: 'left'

                      },
                      items: [

                          {
                              margin: '13 0 0 0',

                              html: '<font size=2 color=white>Created By</font>',

                          },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_AddCardForm_CreatedBy"  style="border-color:transparent;color:white;width:100%;text-align: left;font-size:12px;">'
             },


        {
            margin: '6 0 0 0',

            html: '<font size=2 color=white>Modified By</font>',

        },


             {




                 
                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_AddCardForm_ModifiedBy"  style="border-color:transparent;color:white;width:100%;text-align: left;font-size:12px;">'






             },




                      ]

                  },

                  {
                      xtype:'spacer'
                  },








                  /////
                  {
                      xtype: 'container',
                      margin: '0 0 0 0',
                      width: 150,
                      style: {

                          background: 'transparent',

                      },
                      layout: {
                          type: 'vbox',
                          pack: 'left',
                          align: 'left'

                      },
                      items: [

                     {
                         margin: '13 0 0 0',

                         html: '<font size=2 color=white>Created Date</font>',

                     },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_AddCardForm_CreatedDate"  style="border-color:transparent;color:;width:100%;text-align: left;font-size:12px;">'
             },


        {
            margin: '6 0 0 0',

            html: '<font size=2 color=white>Modified Date</font>',

        },


             {

                 margin: '-2 0 0 0',
                 width: '85%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_AddCardForm_ModifiedDate"  style="border-color:transparent;color:white;width:100%;text-align: left;font-size:12px;">'
             },






                      ]

                  },


                  ////

            ]

        },

        


        













        
        
      






                        ]
                    },
                  

                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_AddCardForm;
}



function FloatPanel_AyohaCardManagement_AddCardFormShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_AddCardForm);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_AddCardForm());
    this.overlay.show();  
    is_FloatPanel_AyohaCardManagement_AddCardFormHide = 'Y';
    _AddCardFormCardType = "Custome";
    Ext.getCmp('htmlAddCardFormCardType').setHtml('<font size=2 color=white>Custome</font>');
    Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_AddCardFormCardType').setValue(true);
    
  
}
var is_FloatPanel_AyohaCardManagement_AddCardFormHide = 'N';

function FloatPanel_AyohaCardManagement_AddCardFormHide() {
    if (is_FloatPanel_AyohaCardManagement_AddCardFormHide == 'Y') {
        _FloatPanel_AyohaCardManagement_AddCardForm.hide();
        is_FloatPanel_AyohaCardManagement_AddCardFormHide = 'N';
    }

}
