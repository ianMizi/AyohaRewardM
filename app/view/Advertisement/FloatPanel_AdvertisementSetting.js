Ext.define('ianMizi.view.Advertisement.FloatPanel_AdvertisementSetting', {

});







var _FloatPanel_AdvertisementSetting;

function FloatPanel_AdvertisementSetting() {

    _FloatPanel_AdvertisementSetting = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AdvertisementSettingID',
            xtype: 'panel',
            zIndex: 150,
            xtype: 'container',
            height: '100%',
            //  height: '60%',
            width: '100%',
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
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'container',
                       // margin: '10 0 0 0',
                        width: '100%',
                        docked: 'bottom',
                        style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        //style: {

                        //    background: 'transparent',

                        //},
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [


                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_AdvertisementSetting_PreviewAdvertisement',
                            //  badgeText: '1',
                            // hidden:true,
                            margin: '0 -18 -8 0',
                            //height: 35,
                            //width: 35,
                            html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {

                                FloatPanel_PreviewAdvertisementShow("FloatPanel_PreviewAdvertisement");
                                //var CardType = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCardType').value;
                                //var strStampCampaignCode = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCampaignCode').value;
                                //var EnterpriseAccNo = GetEnterpriseAccNo();
                                //var StartDate = GetStartDateStampCardCampaign();
                                //var EndDate = GetEndDateStampCardCampaign();
                                //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);
                            }
                        },
            {
                xtype: 'button',
                //hidden:true,
                id: 'txtFloatPanel_AdvertisementSetting_PreviewAdvertisement',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>PreView Advertisement</font>',
                ui: 'plain',
                handler: function () {
                    FloatPanel_PreviewAdvertisementShow("FloatPanel_PreviewAdvertisement");
                    //var CardType = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCardType').value;
                    //var strStampCampaignCode = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCampaignCode').value;
                    //var EnterpriseAccNo = GetEnterpriseAccNo();
                    //var StartDate = GetStartDateStampCardCampaign();
                    //var EndDate = GetEndDateStampCardCampaign();
                    //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);
                }
            },


            {
                xtype: 'spacer'
            },
                    {
                        xtype: 'button',
                        id: 'btnFloatPanel_AdvertisementSetting_DeleteAdvertisement',
                        //  badgeText: '1',
                        margin: '0 -18 -8 0',
                        //height: 35,
                        //width: 35,
                        html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                        ui: 'plain',
                        handler: function () {
                            //var CardType = document.getElementById('input-FloatPanel_AdvertisementSetting_StampCardCardType').value;
                            //if (CardType == "Auto-Default") {
                            //    Swal.fire({
                            //        icon: 'error',
                            //        title: 'Defautl Card',
                            //        text: 'Default Card cannot be deleted!',
                            //    })
                            //    return
                            //}


                            Swal.fire({
                                title: 'Are you sure To delete?',
                                text: "Delete process cannot be undo!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes'
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    FloatPanel_AdvertisementSetting_Delete();
                                }
                            });




                        }
                    },
            {
                xtype: 'button',
                id: 'txtFloatPanel_AdvertisementSetting_DeleteAdvertisement',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Delete</font>',
                ui: 'plain',
                handler: function () {



                    Swal.fire({
                        title: 'Are you sure To delete?',
                        text: "Delete process cannot be undo!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes'
                    }).then(function (result) {
                        if (result.isConfirmed) {
                            FloatPanel_AdvertisementSetting_Delete();
                        }
                    });







                    //Swal.fire({
                    //    title: 'Are you sure To delete?',
                    //    text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                    //    icon: 'warning',
                    //    showCancelButton: true,
                    //    confirmButtonColor: '#3085d6',
                    //    cancelButtonColor: '#d33',
                    //    confirmButtonText: 'Yes'
                    //}).then(function (result) {
                    //    if (result.isConfirmed) {
                    //        DeleteEditCardMaster();
                    //    }
                    //});
                }
            },

                 {
                     xtype: 'button',
                     id: 'btnFloatPanel_AdvertisementSetting_SubmitAdvertisement',
                     //  badgeText: '1',
                     margin: '0 -18 -8 0',
                     //height: 35,
                     //width: 35,
                     html: '<img src="resources/icons/BlastingMsgPurple.png" width="25" height="25" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                         FloatPanel_AdvertisementSetting_Save("Active");
                     }
                 },
            {
                xtype: 'button',
                id: 'txtFloatPanel_AdvertisementSetting_SubmitAdvertisement',
                //  badgeText: '1',
                margin: '7 0 0 7',
                //height: 40,
                //width: 130,
                html: '<font size=2 color=grey>Submit</font>',
                ui: 'plain',
                handler: function () {
                  FloatPanel_AdvertisementSetting_Save("Active");
                }
            },
                        ]
                    },

                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'top',
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_AdvertisementSettingHeader',
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
                                              id: 'btnFloatPanel_AdvertisementSettingBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_AdvertisementSetting.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_AdvertisementSettingOpen = 'N';
                                              }
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_AdvertisementSetting_TitleHeaderTxt',
                                              html: '<font size=2 color=white><b>Advertisement Setting</b></font>'
                                          },
                                           {
                                               xtype: 'spacer',

                                           },



                                                   {
                                                       xtype: 'container',
                                                       //   margin: '0 0 0 5',
                                                       //hidden: true,
                                                       //style: 'background-color: white;',
                                                       //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                       style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                       height: 25,
                                                       width: 70,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerFloatPanel_AdvertisementSettingHaiUser',
                                                       layout: {

                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [


                                                           {
                                                               margin: '0 0 0 0',
                                                               id: 'htmlFloatPanel_AdvertisementSettingHaiUser',
                                                               html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               //   margin: '0 0 0 5',
                                                               hidden: true,
                                                               style: 'background-color: transparent;',

                                                               height: 25,
                                                               width: 70,
                                                               // margin: '70 0 0 0',
                                                               id: 'containerFloatPanel_AdvertisementSettingeWallet',
                                                               layout: {

                                                                   type: 'hbox',
                                                                   pack: 'left',
                                                                   align: 'left'
                                                               },
                                                               items: [
                                                                    {
                                                                        xtype: 'button',
                                                                        id: 'btnFloatPanel_AdvertisementSettingeWallet',
                                                                        margin: '4 0 0 -15',
                                                                        height: 30,
                                                                        width: 35,
                                                                        // iconCls: 'list',
                                                                        html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                        ui: 'plain',
                                                                        handler: function () {
                                                                            DrawerMenuShow();

                                                                        }
                                                                    },
                                                                    {
                                                                        margin: '7 0 0 2',
                                                                        html: '<font size=2 color=white><b>RM00.00</b></font>'
                                                                    }
                                                               ]
                                                           },

                                                       ]
                                                   },
                                                {
                                                    xtype: 'container',
                                                    margin: '0 0 0 -5',

                                                    //style: 'background-color: white;',
                                                    style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                    height: 40,
                                                    width: 40,
                                                    // margin: '70 0 0 0',
                                                    id: 'containerFloatPanel_AdvertisementSettingPictureUser',
                                                    layout: {

                                                        type: 'hbox',
                                                        pack: 'center',
                                                        align: 'center'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'button',
                                                            height: 40,
                                                            width: 40,
                                                            margin: '0 0 0 -11',
                                                            id: 'btnFloatPanel_AdvertisementSettingInfo',
                                                            //badgeText: "2",
                                                            html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                //  setupMovementMap(2);





                                                                //Ext.getCmp('mainView').setActiveItem(16);
                                                                //loadNotificationSummary();
                                                            }
                                                        },



                                                    ]
                                                },










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
                              margin: '0 0 0 0',

                              html: '<font size=2 color=white>Advertisement Title</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Title"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },



                          {
                              margin: '3 0 0 0',
                              hidden: true,
                              html: '<font size=2 color=white>Advertisement Desc</font>',

                          },
                          {

                              margin: '-2 0 0 0',
                              hidden: true,
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Desc"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },
                           {
                               margin: '3 0 0 0',
                              hidden:true,
                               html: '<font size=2 color=white>Advertisement Code</font>',

                           },
                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              hidden: true,
                              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Code"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },



         






           {
               xtype: 'container',
               width: '100%',
               style: ' background-color:transparent',
               layout: {
                   type: 'hbox',
                   pack: 'start',
                   align: 'center'

               },
               items: [

                        {
                            xtype: 'container',

                            width: '90%',
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
                                    xtype: 'container',

                                    width: '100%',
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
                                        margin: '3 0 0 0',

                                        html: '<font size=2 color=white>*Advertisement Type</font>',

                                    },



                                    ]
                                },




          {
              id: 'htmlFloatPanel_AdvertisementSettingType',
              margin: '-2 0 0 0',
              width: '100%',
              height: 20,
              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Type"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
          },


                            ]

                        },


                         //{
                         //    xtype:'container'

                         //},
                           {
                               xtype: 'button',
                               id: 'btnFloatPanel_AdvertisementSettingType',
                               //  badgeText: '1',
                               margin: '0 0 -10 0',
                               height: 35,
                               width: 35,
                               html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                   FloatPanel_AdvertisementTypeShow();
                               }
                           },

               ]

           },













        

         {
             xtype: 'container',
             margin: '5 0 0 0',
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
                        margin: '5 0 0 0',

                        html: '<font size=2 color=white>Advertisement Date</font>',

                    },
                    {
                        xtype: 'spacer',
                       // width:5
                    },
                     {
                         xtype: 'button',
                       //  hidden: true,
                         id: 'btnFloatPanel_AdvertisementSetting_Calender',
                         //  badgeText: '1',
                         margin: '0 0 0 0',
                         //height: 30,
                         //width: 35,
                         text: '<button class="buttonAdvertisementCalendar">Advertisement Calendar</button>',
                         //html: '<img src="resources/icons/saveWhiteTwo.png" width="20" height="20" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {
                             FloatPanel_AdvertisementCalendarShow();
                         }
                     },
             ]
         },









           {
               xtype: 'container',

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
                          margin: '-2 0 0 0',
                          width: '40%',
                          height: 20,
                         // html: '<font size=2 color=white>Start:</font><input type="text" id="input-FloatPanel_AdvertisementSetting_StartDate"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          html: '<font size=2 color=white>Start:</font><input type="date" id="input-FloatPanel_AdvertisementSetting_StartDate" style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;" onchange="handlerAdvertisementStartDate(event);">',
                         

                      },
                      {
                          xtype: 'spacer'
                      },
                       {
                           margin: '-2 0 0 0',
                           width: '40%',
                           height: 20,
                          // html: '<font size=2 color=white>End:</font><input type="text" id="input-FloatPanel_AdvertisementSetting_EndDate"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                           html: '<font size=2 color=white>End:</font><input type="date" id="input-FloatPanel_AdvertisementSetting_EndDate" style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;"  onchange="handlerAdvertisementEndDate(event);">',
                         
                           // html: ' <input type="date" id="AdvertisementSettingStartDate">',

                       },
               ]
           },












           {
               margin: '25 0 0 0',

               html: '<font size=2 color=white>Advertisement Period (Days)</font>',

           },
          {
              margin: '-2 0 0 0',
              width: '40%',
              height: 20,
              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Period"  readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

              // html: ' <input type="date" id="AdvertisementSettingStartDate">',

          },
            {
                margin: '5 0 0 0',

                html: '<font size=2 color=white>Advertisement Notes</font>',

            },
          {
              margin: '-2 0 0 0',
              width: '90%',
              height: 20,
              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Note"   style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

              // html: ' <input type="date" id="AdvertisementSettingStartDate">',

          },
        
           {
               xtype: 'container',
               width: '100%',
               margin: '10 0 0 0',
               style: ' background-color:transparent',
               layout: {
                   type: 'hbox',
                   pack: 'start',
                   align: 'center'

               },
               items: [

                        {
                            xtype: 'container',

                            width: '90%',
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
                                    xtype: 'container',

                                    width: '100%',
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
                                        margin: '5 0 0 0',

                                        html: '<font size=2 color=white>Advertisement Fees(RM)</font>',

                                    },



                                    ]
                                },


{
    margin: '-2 0 0 0',
    width: '80%',
    // height: 20,
    html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Fees" placeHolder="RM00:00"  readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:38px;">'

    // html: ' <input type="date" id="AdvertisementSettingStartDate">',

},


                            ]

                        },


                         //{
                         //    xtype:'container'

                         //},
                           {
                               xtype: 'button',
                               id: 'btnFloatPanel_AdvertisementSetting_fees',
                               //  badgeText: '1',
                               margin: '0 0 -10 0',
                               height: 35,
                               width: 35,
                               html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                   swalFireGeneralMsg('All Advertisement is FOC until further Notice.');
                               }
                           },

               ]

           },





           {
               xtype: 'container',
               width: '100%',
               margin: '10 0 0 0',
               style: ' background-color:transparent',
               id:'Container_FloatPanel_AdvertisementSetting_Status',
               layout: {
                   type: 'hbox',
                   pack: 'start',
                   align: 'center'

               },
               items: [

                        {
                            xtype: 'container',

                            width: '90%',
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
                                    xtype: 'container',

                                    width: '100%',
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
                                        margin: '5 0 0 0',

                                        html: '<font size=2 color=white>Status</font>',

                                    },



                                    ]
                                },


{
    margin: '-2 0 0 0',
    width: '90%',
    // height: 20,
    html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_Status"   readOnly style="border-color:transparent;color:white;width:100%;text-align: left;font-size:38px;">'

    // html: ' <input type="date" id="AdvertisementSettingStartDate">',

},


                            ]

                        },


                         //{
                         //    xtype:'container'

                         //},
                         {
                             xtype: 'button',
                             id: 'btnFloatPanel_AdvertisementSetting_StatusLog',
                             //  badgeText: '1',
                             // hidden:true,
                             margin: '0 0 -10 0',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                                 FloatPanel_AdvertisementApprovalStatusLogShow();

                             }
                         },
                           {
                               xtype: 'button',
                               id: 'btnFloatPanel_AdvertisementSetting_Status',
                               hidden:true,
                               //  badgeText: '1',
                               margin: '0 0 -10 0',
                               height: 35,
                               width: 35,
                               html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                   FloatPanel_AdvertisementApprovalStatusShow();
                               }
                           },
                            

               ]

           },


           {
               margin: '5 0 0 0',
              id:'HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus',
               html: '<font size=2 color=white>Remarks Status</font>',

           },
          {
              margin: '-2 0 0 0',
              width: '90%',
              height: 20,
              id: 'HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus',
              html: '<input type="text" id="input-FloatPanel_AdvertisementSetting_ModifiedRemarks"   style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'

              // html: ' <input type="date" id="AdvertisementSettingStartDate">',

          },





       

         ////////////////////////////////////////////////////////////////

             //{
             //    xtype: 'tabpanel',
             //    // hidden: true,
             //    //  hidden:true,
             //    id: 'tabpanelFloatPanel_AyohaCardManagement',
             //    style: "background-color: transparent;",
             //    // style: 'border-top:2px solid #ECF0F1;background: white;',
             //    // style: 'background-color: black;',
             //    // margin: '-20 0 0 -26',
             //    // margin: '25 0 0 0',

             //    //width: 200,
             //    width: '96%',
             //    height: '100%',
             //    //height: 120,
             //    //height: 50,
             //    //  zIndex: 200,
             //    //  docked: 'bottom',
             //    tabBarPosition: 'top',
             //    ui: 'plain',
             //    // docked: 'bottom',

             //    initialize: function (c) {
             //        //this.getTabBar().hide();


             //    },



             //    items: [
             //         //////////////////////////////////-Branch Participate



             /////////////////////////////     ///////////////////////////     ///////////////////////////

             //        ]



             //        },

 {
     margin: '20 0 0 0',

     html: '<font size=3 color=white>Advertisement Media</font>',

 },
      {
          xtype: 'container',
          id: 'containerFloatPanel_AdvertisementSetting_Images',
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
                 
                  margin: '5 0 0 0',
                  html: '<font size=2 color=white>Images</font>',

              },
              {
                  xtype: 'spacer'
              },
          {
              xtype: 'button',
              id: 'btnFloatPanel_AdvertisementSetting_AdvertisementImages',
              //  badgeText: '1',
              // hidden:true,
              margin: '0 -5 -12 0',
              height: 45,
              width: 35,
              html: '<img src="resources/icons/imageWhiteTwo.png" width="25" height="25" alt="Company Name">',
              ui: 'plain',
              handler: function () {
                  globalAdvertisementImageRowID = 0;
                  FloatPanel_AddEdit_AdvertisementImagesShow_Add();
              }
          },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AdvertisementSetting_AdvertisementImages',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 45,
    width: 100,
    html: '<font size=2 color=white>Upload Image</font>',
    ui: 'plain',
    handler: function () {
        globalAdvertisementImageRowID = 0;
        FloatPanel_AddEdit_AdvertisementImagesShow_Add();
    }
},
          ]
      },








        {
            xtype: 'list',
            //flex:1,
            height: 250,
            store: 'AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore',
            id: 'FloatPanel_AdvertisementSetting_AdvertisementImagesList',
            mode: 'SINGLE',
            //  grouped: true,
            emptyText: 'Upload your advertisement image/picture.<br>limit 3 images',
            deferEmptyText: false,
            disableSelection: true,
            itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Image Caption:<u><b>{AdvertisementImgNote}</b></u></font></div>' +

                                    '{ModifyAdvertisementImg}' +

                                    // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                             '</div>',
            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {

                    var AdvertisementImgName = records.get('AdvertisementImgName');
                    var AdvertisementImg = records.get('AdvertisementImg');
                    var ID = records.get('ID');
                    var AdvertisementImgNote = records.get('AdvertisementImgNote');
                    FloatPanel_AddEdit_AdvertisementImagesShow_Edit(AdvertisementImgName, AdvertisementImg,ID, AdvertisementImgNote);


                },
                deselect: function (list, records) {

                }
            },

        },

            //////////////////////////////////-Branch Participate
        {
            xtype: 'container',

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
                    margin: '15 0 0 0',

                    html: '<font size=2 color=white>Video</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AdvertisementSetting_AdvertisementVideo',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -5 -12 0',
                height: 40,
                width: 35,
                html: '<img src="resources/icons/videoWhiteTwo.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                   

                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AdvertisementSetting_AdvertisementVideo',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=white>Upload Video</font>',
    ui: 'plain',
    handler: function () {
      

    }
},
            ]
        },








        {
            xtype: 'list',
            margin: '2 0 0 0',
            //flex:1,
            height: 100,
            store: 'StampCampaignStamperLoadByStampCampaignCodeStorex',
            id: 'FloatPanel_AdvertisementSetting_AdvertisementVideoList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            emptyText: 'Not Available in This Version',
            deferEmptyText: false,
            itemTpl: '<div class="myContent">' +
                                '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{AccountName}<br>{UserType}</div><br><div style="width:100%;text-align:right;margin:-45px 0px 0px -8px;"><button OnClick="buttonsHtmlDeleteStampCampaignStamper({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div>' +

                                   '</div>',
            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },





        ///////////////////

        {
            xtype: 'container',

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
                    margin: '15 0 0 0',

                    html: '<font size=2 color=white> Audio</font>',

                },
                {
                    xtype: 'spacer'
                },
            {
                xtype: 'button',
                id: 'btnFloatPanel_AdvertisementSetting_AdvertisementAudio',
                //  badgeText: '1',
                // hidden:true,
                margin: '0 -5 -12 0',
                height: 40,
                width: 35,
                html: '<img src="resources/icons/audioWhiteOne.png" width="25" height="25" alt="Company Name">',
                ui: 'plain',
                handler: function () {
                  

                }
            },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_AdvertisementSetting_AdvertisementAudio',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=white>Upload Audio</font>',
    ui: 'plain',
    handler: function () {
       

    }
},
            ]
        },




           {
               xtype: 'list',
               margin: '2 0 0 0',
               height: 100,
               store: 'StampCardLoadByStampCampaignCodeEnterpriseAccNoStorex',
               id: 'FloatPanel_AdvertisementSetting_AdvertisementAudioList',
               mode: 'SINGLE',
               //  grouped: true,
               disableSelection: true,
               emptyText: 'Not Available in This Version',
               deferEmptyText: false,
               itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Content Status:<u><b>{ShowHide}</b></u></font></div>' +

                        '<div style="margin:-58px 0px 0px 0px">{StampContentModified}</div>' +

                        // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                 '</div>',
               width: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {

                     


                   },
                   deselect: function (list, records) {

                   }
               },

           },

           
           ////////////

            {
                xtype: 'container',

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
                        margin: '25 0 0 0',

                        html: '<font size=3 color=white>Advertisement Linked</font>',

                    },
                    {
                        xtype: 'spacer'
                    },
                {
                    xtype: 'button',
                    id: 'btnFloatPanel_AdvertisementSetting_AdvertisementLinked',
                    //  badgeText: '1',
                    // hidden:true,
                    margin: '0 -5 -22 0',
                    height: 30,
                    width: 35,
                    html: '<img src="resources/icons/listIconWhite.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        FloatPanel_AdvertisementLinkModuleShow();

                    }
                },
    {
        xtype: 'button',
        // hidden: true,
        id: 'txtFloatPanel_AdvertisementSetting_AdvertisementLinked',
        //  badgeText: '1',
        margin: '0 -7 -25 0',
        height: 30,
        width: 70,
        html: '<font size=2 color=white>Module</font>',
        ui: 'plain',
        handler: function () {
            FloatPanel_AdvertisementLinkModuleShow();

        }
    },
                ]
            },




           {
               xtype: 'list',
               //flex:1,
               height: 100,
               store: 'AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore',
               id: 'FloatPanel_AdvertisementSetting_AdvertisementLinkedList',
               mode: 'SINGLE',
               emptyText: 'Linked your advertisement in this<br>application module',
               deferEmptyText: false,
               //  grouped: true,
               disableSelection: true,
               itemTpl: '<div class="myContent">' +
                               '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{ModuleName}<br><font size=1>{ModuleDesc}</font></div><br><div style="width:100%;text-align:right;margin:-45px 0px 0px 20px;"><button OnClick="buttonsHtmlDeleteAdvertisementLinkModule({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div>' +

                                  '</div>',
               width: '100%',
               listeners: {
                   itemsingletap: function (list, idx, target, records, evt) {




                   },
                   deselect: function (list, records) {

                   }
               },

           },


            





          

           









        









         {
             xtype: 'container',
             height: 3,
             width: '100%',
             style: ' background-color:white',
             margin: '0 0 0 0',
             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center'
             },

         },


          

        


























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_AdvertisementSetting;
}

function FloatPanel_AdvertisementSettingAddNewShow() {
    Ext.Viewport.remove(_FloatPanel_AdvertisementSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AdvertisementSetting());
    this.overlay.show();
    is_FloatPanel_AdvertisementSettingHide = 'Y';
    Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);
    Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);

    Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    document.getElementById('input-FloatPanel_AdvertisementSetting_Status').value = 'Submitted';
    Ext.getStore('AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore').removeAll();
    Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore').removeAll();



   
}





function FloatPanel_AdvertisementSettingEditShowing(ID) {
    Ext.Viewport.remove(_FloatPanel_AdvertisementSetting);
    this.overlay = Ext.Viewport.add(FloatPanel_AdvertisementSetting());
    this.overlay.show();
    is_FloatPanel_AdvertisementSettingHide = 'Y';
   // alert(ID);

    globalFloatPanel_AdvertisementSetting_ID = ID;
    var AdvertisementTitle = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingType = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    

    var AdvertisementSettingStartDateOnly = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingEndDateOnly = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);

    var AdvertisementSettingPeriod = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingNote = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingFees = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingStatus = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingModifiedRemarks = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementSettingCode = DataStore_AdvertisementSetting.findRecord('ID', ID, 0, false, false, true);

   

    document.getElementById('input-FloatPanel_AdvertisementSetting_Title').value = AdvertisementTitle.get('AdvertisementTitle');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value= AdvertisementSettingType.get('AdvertisementType');
    document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value = AdvertisementSettingStartDateOnly.get('AdvertisementStartDateOnly');
    document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value = AdvertisementSettingEndDateOnly.get('AdvertisementEndDateOnly');
  
    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = AdvertisementSettingPeriod.get('AdvertisementPeriod');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Note').value = AdvertisementSettingNote.get('AdvertisementNote');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Fees').value = AdvertisementSettingFees.get('AdvertisementFees');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Status').value = AdvertisementSettingStatus.get('AdvertisementStatus');
    document.getElementById('input-FloatPanel_AdvertisementSetting_ModifiedRemarks').value = AdvertisementSettingModifiedRemarks.get('ModifiedRemarks');
    document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value = AdvertisementSettingCode.get('AdvertisementCode');


    localStorage.setItem("OriginalAdevertisementStartDate", AdvertisementSettingStartDateOnly.get('AdvertisementStartDateOnly'));
    localStorage.setItem("OriginalAdevertisementEndDate", AdvertisementSettingEndDateOnly.get('AdvertisementEndDateOnly'));
    localStorage.setItem("OriginalAdvertisementPeriod", AdvertisementSettingPeriod.get('AdvertisementPeriod'));
    
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Submitted") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(true);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(true);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(false);

        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHtml('<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">');
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHtml('<font size=2 color=grey>Save</font>');
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
    }
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Approved") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    }
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Rejected") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);

        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(false);
    }
    if (AdvertisementSettingStatus.get('AdvertisementStatus') == "Published") {
        Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_SubmitAdvertisement').setHidden(true);
        Ext.getCmp('btnFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
        Ext.getCmp('txtFloatPanel_AdvertisementSetting_DeleteAdvertisement').setHidden(true);
    }
   
    //else
    //{
    //    Ext.getCmp('HtmlLbl_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
    //    Ext.getCmp('HtmlInput_FloatPanel_AdvertisementSetting_RemarksStatus').setHidden(false);
    //}

    //Ext.getCmp('btnFloatPanel_AdvertisementSetting_Status').setHidden(false);
    FloatPanel_AddEdit_AdvertisementImages_AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore();
    FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore();

    
    
   
}








var is_FloatPanel_AdvertisementSettingHide = 'N';

function FloatPanel_AdvertisementSettingHide() {
    if (is_FloatPanel_AdvertisementSettingHide == 'Y') {
        _FloatPanel_AdvertisementSetting.hide();
        is_FloatPanel_AdvertisementSettingHide = 'N';
    }

}







var globalFloatPanel_AdvertisementSetting_ID;
function FloatPanel_AdvertisementSetting_Save(RowStatus) {

    var AdvertisementSetting_Title = document.getElementById('input-FloatPanel_AdvertisementSetting_Title').value;
    var AdvertisementSetting_Type = document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value;
    var AdvertisementSettingStartDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value);
    var AdvertisementSettingEndDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value);



    if (AdvertisementSetting_Title.length < 2) {
        swalFireFail("Advertisement Title Not Valid!!")
        return
    }

    if (AdvertisementSetting_Type.length == 0) {
        swalFireFail("Invalid Advertisement Type!!");
        return;
    }

    if (AdvertisementSettingStartDate == "Invalid Date") {
        swalFireFail("Invalid Start Date!!");
        return;
    }


    if (AdvertisementSettingEndDate == "Invalid Date") {
        swalFireFail("Invalid End Date!!");
        return;
    }


    


    

   
   
    var diffTime = Math.abs(AdvertisementSettingEndDate - AdvertisementSettingStartDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    console.log(diffDays + " days");

    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;
    

   
    var CurrentDate = new Date();
  

    if (AdvertisementSettingStartDate < CurrentDate) {
        swalFireFail("Save Failed!<br>*Start date must be greater than today!!");
        resetAdvertisementDate();
        return;
    } 

    if (AdvertisementSettingEndDate < CurrentDate) {
        swalFireFail("Save Failed!<br>*End date Has passed!!");
        resetAdvertisementDate();
        return;
    }

    if (diffDays =="0") {
        swalFireFail("Save Failed!<br>*0 Day Not valid!!");
        resetAdvertisementDate();
        return;
    }
    if (document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value == 0 ) {
        swalFireFail("Save Failed!<br>*0 Day Not valid!!");
        resetAdvertisementDate();
        return;
    }
   

    //if (dayCampaignStart == dayCampaignEnd) {
    //    swalFireFail("Save Failed!<br>*Campaign date start and date end is same!!");
    //    return;

    //}

    //  var year = AdvertisementSettingStartDate.getFullYear();














  


    //if (dayCampaignStart < dayCampaignEnd) {


       

   
        var obj = {
            "ID": globalFloatPanel_AdvertisementSetting_ID,
            "AdvertisementCode": document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
            "AdvertisementTitle": document.getElementById('input-FloatPanel_AdvertisementSetting_Title').value,
            "AdvertisementDesc": document.getElementById('input-FloatPanel_AdvertisementSetting_Desc').value,
            "AdvertisementStartDate": document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value,
            "AdvertisementEndDate": document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value,
            "AdvertisementType": document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value,
            "AdvertisementStatus":document.getElementById('input-FloatPanel_AdvertisementSetting_Status').value,
            "AdvertisementNote": document.getElementById('input-FloatPanel_AdvertisementSetting_Note').value,
            "EnterpriseAccNo": GetEnterpriseAccNo(),
            "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
            "CreatedBy": GetCurrentAccountNo(),
            "ModifiedRemarks": document.getElementById('input-FloatPanel_AdvertisementSetting_ModifiedRemarks').value,
            "RowStatus": RowStatus,
            "AdvertisementPeriod": document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value,
            "AdvertisementFees": document.getElementById('input-FloatPanel_AdvertisementSetting_Fees').value,
            "AdvertisementMedia": 'Images',
        };

        console.log(obj);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Advertisement/AdvertisementInsertUpdate',

            dataType: "json",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Save Succesfully!");

                    FloatPanel_AdvertisementSettingHide();
                    Load_FloatPanel_Advertisement_AdvertisementloadByEnterpriseHQAccNoStore();

                }
                else {

                 //   swalFireFail("Save Failed!!!" + data.results + "<br>" + data.message);
                    swalFireFail("Save Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                swalFireFail("Save Failed!!");
            }

        });
      


     
    //}

}










function FloatPanel_AdvertisementSetting_Delete() {
   


    var obj = {
        "ID": globalFloatPanel_AdvertisementSetting_ID,
        "AdvertisementCode": document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        "CreatedBy": GetCurrentAccountNo(),
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "ModifiedRemarks": document.getElementById('input-FloatPanel_AdvertisementSetting_ModifiedRemarks').value,       
    };

    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Advertisement/AdvertisementDelete',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Delete Succesfully!");

                FloatPanel_AdvertisementSettingHide();
                Load_FloatPanel_Advertisement_AdvertisementloadByEnterpriseHQAccNoStore();

            }
            else {

                //   swalFireFail("Save Failed!!!" + data.results + "<br>" + data.message);
                swalFireFail("Delete Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });




    //}

}


















function handlerAdvertisementStartDate(e) {
   
    var AdvertisementSettingStartDate = new Date(e.target.value);
    var AdvertisementSettingEndDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value);
    var diffTime = Math.abs(AdvertisementSettingEndDate - AdvertisementSettingStartDate);
  

    var CurrentDate = new Date();


    if (AdvertisementSettingStartDate < CurrentDate) {
        swalFireFail("Start date must be greater than today!!");
        document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value = GetDateToday();
        resetAdvertisementDate();
        return;
    } else {
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays == 0) {
            swalFireFail("0 Day Not valid!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;
            resetAdvertisementDate();
            return;
        }
        if (diffDays > 30) {
            swalFireFail("Cannot exceed 30 Days!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = 0;
            resetAdvertisementDate();
            return;
        }
    }

    

    

}

function handlerAdvertisementEndDate(e) {
   

    var AdvertisementSettingStartDate = new Date(document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value);
    var AdvertisementSettingEndDate = new Date(e.target.value);
    var diffTime = Math.abs(AdvertisementSettingEndDate - AdvertisementSettingStartDate);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;


    var CurrentDate = new Date();


    console.log(GetDateToday());

    if (AdvertisementSettingEndDate < CurrentDate) {
        swalFireFail("End date Has passed!!");
        document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value = GetDateToday();
        resetAdvertisementDate();
        return;
    } else {
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays == 0) {
            swalFireFail("0 Day Not valid!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = diffDays;
            resetAdvertisementDate();
            return;
        }
        

        if (diffDays > 30) {
            swalFireFail("Cannot exceed 30 Days!!");
            document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = 0;
            resetAdvertisementDate();
            return;
        }
    }

   

}

function resetAdvertisementDate() {
    document.getElementById('input-FloatPanel_AdvertisementSetting_StartDate').value = GetOriginalAdevertisementStartDate();
    document.getElementById('input-FloatPanel_AdvertisementSetting_EndDate').value = GetOriginalAdevertisementEndDate();
    document.getElementById('input-FloatPanel_AdvertisementSetting_Period').value = GetOriginalAdvertisementPeriod();
    console.log(GetOriginalAdvertisementPeriod());
}