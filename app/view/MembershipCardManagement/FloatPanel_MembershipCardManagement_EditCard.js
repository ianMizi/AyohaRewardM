Ext.define('ianMizi.view.MembershipCardManagement.FloatPanel_MembershipCardManagement_EditCard', {

});


var isFloatPanel_MembershipCardManagementOpen = 'N';




var _FloatPanel_MembershipCardManagement_EditCard;

function FloatPanel_MembershipCardManagement_EditCard() {

    _FloatPanel_MembershipCardManagement_EditCard = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_MembershipCardManagement_EditCardID',
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
                     width: '100%',
                     docked: 'top',
                     // width: 40,

                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_MembershipCardManagement_EditCardHeader',
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
                                              id: 'btnFloatPanel_MembershipCardManagement_EditCardBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_MembershipCardManagement_EditCard.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_MembershipCardManagement_EditCardOpen = 'N';
                                              }
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_MembershipCardManagement_EditCard_TitleHeaderTxt',
                                              html: '<font size=2 color=white><b>Membership Card Setting</b></font>'
                                          },
                                           {
                                               xtype: 'spacer',

                                           },



                                                   
                                                










                            ]

                 },

                   {
                       xtype: 'container',
                       margin: '10 0 0 0',
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
                           id: 'btnFloatPanel_MembershipCardManagement_EditCard_PreviewCard',
                           //  badgeText: '1',
                           // hidden:true,
                           margin: '0 -18 -8 0',
                           //height: 35,
                           //width: 35,
                           html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {

                               //var StampCampaignName = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignName').value;
                               //var StampRuleRemarks = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampRuleRemarks').value;
                               //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                               //var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
                               //var EnterpriseAccNo = GetEnterpriseAccNo();
                               //var StartDate = GetStartDateStampCardCampaign();
                               //var EndDate = GetEndDateStampCardCampaign();
                               //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks);
                           }
                       },
           {
               xtype: 'button',
               //hidden:true,
               id: 'txtFloatPanel_MembershipCardManagement_EditCard_PreviewCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>PreView Card</font>',
               ui: 'plain',
               handler: function () {
                   //var StampCampaignName = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignName').value;
                   //var StampRuleRemarks = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampRuleRemarks').value;
                   //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                   //var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
                   //var EnterpriseAccNo = GetEnterpriseAccNo();
                   //var StartDate = GetStartDateStampCardCampaign();
                   //var EndDate = GetEndDateStampCardCampaign();
                   //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks);
               }
           },


           {
               xtype: 'spacer'
           },
                   {
                       xtype: 'button',
                       id: 'btnFloatPanel_MembershipCardManagement_EditCard_DeleteCard',
                       //  badgeText: '1',
                       margin: '0 -18 -8 0',
                       //height: 35,
                       //width: 35,
                       html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                           if (CardType == "Auto-Default") {
                               Swal.fire({
                                   icon: 'error',
                                   title: 'Defautl Card',
                                   text: 'Default Card cannot be deleted!',
                               })
                               return
                           }


                           Swal.fire({
                               title: 'Are you sure To delete?',
                               text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                               icon: 'warning',
                               showCancelButton: true,
                               confirmButtonColor: '#3085d6',
                               cancelButtonColor: '#d33',
                               confirmButtonText: 'Yes'
                           }).then(function (result) {
                               if (result.isConfirmed) {
                                //   DeleteEditCardMaster();
                               }
                           });




                       }
                   },
           {
               xtype: 'button',
               id: 'txtFloatPanel_MembershipCardManagement_EditCard_DeleteCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>*Delete</font>',
               ui: 'plain',
               handler: function () {



                   var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                   if (CardType == "Auto-Default") {
                       Swal.fire({
                           icon: 'error',
                           title: 'Defautl Card',
                           text: 'Default Card cannot be deleted!',
                       })
                       return
                   }








                   Swal.fire({
                       title: 'Are you sure To delete?',
                       text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
                       icon: 'warning',
                       showCancelButton: true,
                       confirmButtonColor: '#3085d6',
                       cancelButtonColor: '#d33',
                       confirmButtonText: 'Yes'
                   }).then(function (result) {
                       if (result.isConfirmed) {
                         //  DeleteEditCardMaster();
                       }
                   });
               }
           },

                {
                    xtype: 'button',
                    id: 'btnFloatPanel_MembershipCardManagement_EditCard_SaveCard',
                    //  badgeText: '1',
                    margin: '0 -18 -8 0',
                    //height: 35,
                    //width: 35,
                    html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        //saveEditCardMaster();
                    }
                },
           {
               xtype: 'button',
               id: 'txtFloatPanel_MembershipCardManagement_EditCard_SaveCard',
               //  badgeText: '1',
               margin: '7 0 0 7',
               //height: 40,
               //width: 130,
               html: '<font size=2 color=grey>Save</font>',
               ui: 'plain',
               handler: function () {
                  // saveEditCardMaster();
               }
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
                                margin: '3 0 0 0',

                                html: '<font size=3 color=white>Membership Card Setting Info</font>',

                            },

                              {
                                  margin: '3 0 0 0',

                                  html: '<font size=2 color=white>Card  ID</font>',

                              },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardID" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },


                          {
                              margin: '3 0 0 0',

                              html: '<font size=2 color=white>Membership Card  Name</font>',

                          },


                          {

                              margin: '-2 0 0 0',
                              width: '80%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardName"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },







                          {
                              xtype: 'container',
                              width: '100%',
                              margin: '10 0 0 0',
                              //hidden: true,
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

                                                       html: '<font size=2 color=white>Card Level</font>',

                                                   },



                                                   ]
                                               },




                          {
                              margin: '-2 0 0 0',
                              id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType',
                              width: '100%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelType"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                          },


                                           ]

                                       },


                                        //{
                                        //    xtype:'container'

                                        //},
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardLevelTypeInfo',
                                              //  badgeText: '1',
                                              margin: '0 0 -10 0',
                                              height: 35,
                                              width: 35,
                                              html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  Swal.fire(
  'Membership Card Level',
  'Allow merchant to create his/her own card level, such GOLD,SILVER,BRONZE level.its up to merchant to define type of level.',
  'info'
)
                                              }
                                          },

                              ]

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
                                                       margin: '3 0 0 0',

                                                       html: '<font size=2 color=white>Card Fee Payment Cycle</font>',

                                                   },



                                                   ]
                                               },




                          {
                              margin: '-2 0 0 0',
                              id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle',
                              width: '100%',
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

                          },


                                           ]

                                       },


                                        //{
                                        //    xtype:'container'

                                        //},
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipFeeCycleList',
                                              //  badgeText: '1',
                                              margin: '0 0 -10 0',
                                              height: 35,
                                              width: 35,
                                              html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_MembershipCardPaymentCycleShow();
                                              }
                                          },

                              ]

                          },

          {
              margin: '10 0 0 0',
              hidden: true,
              id:'htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges',
              html: '<font size=2 color=white>Card Fee Charges</font>',

          },
           {
               id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield',
               margin: '-2 0 0 0',
               hidden: true,
               width: '40%',
               height: 20,
               html: '<input type="number" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardFeeCharges"   style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
           },

             {
                 xtype: 'container',
                 width: '100%',
                 margin: '10 0 0 0',
                 id:'containerFloatPanel_MembershipCardManagement_EditCard_OnlinePaymentLinkFee',
                 hidden: true,
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
                                       
                                          html: '<font size=2 color=white>Online Payment Fee Link(Optional)</font>',

                                      },



                                      ]
                                  },




             {
                 margin: '-2 0 0 0',
                 id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipCardPaymentFeeMethod',
              
                 width: '100%',
                 height: 20,
                 html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardOnlinePaymentFeeLink"  style="border-color:white;color:#F2F2F2;width:100%;text-align: left;font-size:12px;">'

             },


                              ]

                          },


                           //{
                           //    xtype:'container'

                           //},
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_MembershipCardManagement_MembershipCardOnlinePaymentFeeLink',
                              
                                 //  badgeText: '1',
                                 margin: '0 0 -10 0',
                                 height: 35,
                                 width: 35,
                                 html: '<img src="resources/icons/infoIconWhite.png" width="25" height="25" alt="Company Name">',
                                 ui: 'plain',
                                 handler: function () {
                                     Swal.fire(
'Membership Card Online Payment Fee',
'Provide  Merchant Payment gateway link for user to pay the fee thru the online method.',
'info'
)
                                 
                                 }
                             },

                 ]

             },

             

         {
             margin: '10 0 0 0',

             html: '<font size=2 color=white>MembershipCard Start Date</font>',

         },

         {
             xtype: 'container',

             width: '70%',
             style: {

                 background: 'transparent',

             },
             layout: {
                 type: 'hbox',
                 pack: 'left',
                 align: 'left'

             },
             items: [
                    {
                        margin: '-2 0 0 0',

                        html: ' <input type="date" id="MembershipCardStartDate">',

                    },
                     {
                         xtype: 'button',
                         hidden: true,
                         id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardStartDateSave',
                         //  badgeText: '1',
                         margin: '-5 0 0 0',
                         //height: 30,
                         //width: 35,
                         html: '<img src="resources/icons/saveWhiteTwo.png" width="25" height="25" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {

                         }
                     },
             ]
         },





         {
             margin: '10 0 0 0',
         
             html: '<font size=2 color=white>Membership Card End Date</font>',

         },

         {
             xtype: 'container',

             width: '70%',
             style: {

                 background: 'transparent',

             },
             layout: {
                 type: 'hbox',
                 pack: 'left',
                 align: 'left'

             },
             items: [
                  {
                      margin: '-2 0 0 0',
                      id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate',
                      html: ' <input type="date" id="MembershipCardEndDate">',
                    

                  },


                          {
                              hidden: true,
                              margin: '-2 0 0 0',
                              width: '85%',
                              height: 20,
                              id: 'htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField',
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },

                            {
                                xtype: 'container',
                               
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'
                                },



                                margin: '-10 0 0 0',
                                items: [

                                    {
                                        margin: '8 -11 0 -85',
                                        id: 'FloatPanel_MembershipCardManagement_EditCard_CheckboxNoEndDate',

                                        html: '<input type="checkbox" value="no-end-date" id="noenddate" name="noenddate" >',
                                    },
                                    {
                                        margin: '7 0 0 -90',
                                        id: 'FloatPanel_MembershipCardManagement_EditCard_CheckboxNoEndDateFont',
                                        html: '<button style="background-color: Transparent;background-repeat:no-repeat;border: none;cursor:pointer;overflow: hidden;outline:none;color:white;" id="btnnoenddate" ">Valid lifetime</button>'
                                        //   html: '<font size="2px" color="white">Remember Me?</font>',
                                    }
                                ]

                                //id: 'rememberMeCheckboxID',
                                //html: '<input type="checkbox" value="remember-me" id="remember_me" onclick="handleClick(this);" >RememberMe',

                            },

                     {
                         xtype: 'button',
                         hidden: true,
                         id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateSave',
                         //  badgeText: '1',
                         margin: '-5 0 0 0',
                         //height: 30,
                         //width: 35,
                         html: '<img src="resources/icons/saveWhiteTwo.png" width="25" height="25" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {

                         }
                     },
             ]
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
          xtype: 'container',
          id: 'containerFloatPanel_MembershipCardManagement_EditCard_MembershipCardEntitleCampaing',
          margin: '40 0 0 0',
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
                
                  margin: '20 0 0 0',
                  html: '<font size=3 color=white>Entitle Campaing</font>',

              },
              {
                  xtype: 'spacer'
              },
          {
              xtype: 'button',
              id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardEntitleCampaign',
              //  badgeText: '1',
              // hidden:true,
              margin: '0 -5 -12 0',
              height: 35,
              width: 35,
              html: '<img src="resources/icons/EnterpriseWhite.png" width="25" height="25" alt="Company Name">',
              ui: 'plain',
              handler: function () {
                  

              }
          },
{
    xtype: 'button',
    // hidden: true,
    id: 'txtFloatPanel_MembershipCardManagement_EditCard_MembershipCardEntitleCampaing',
    //  badgeText: '1',
    margin: '0 -7 -12 0',
    height: 40,
    width: 100,
    html: '<font size=2 color=white>Campaign(s)</font>',
    ui: 'plain',
    handler: function () {
     

    }
},
          ]
      },








        {
            xtype: 'list',
            //flex:1,
            height: 250,
            store: 'StampCampaignEnterprisesLoadByStampCampaignCodeStore',
            id: 'FloatPanel_MembershipCardManagement_EditCard_MembershipCardEntitleCampaingList',
            mode: 'SINGLE',
            //  grouped: true,
            disableSelection: true,
            itemTpl: '<div class="myContent">' +
                        //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                         '<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div><div style="width:100%;text-align:right;margin:-20px 0px 0px 0px;"><button OnClick="buttonsHtmlDeleteStampCampaignEnterprises({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:-3px 0px 0px -5px;" /></button></div></th></tr><tr></tr></thead></table>' +


                           '</div>',
            width: '100%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },

            //////////////////////////////////-Branch Participate
        







        





        ///////////////////

        


           

           {
               xtype: 'container',

               width: '100%',
               style: {

                   background: 'transparent',

               },
               layout: {
                   type: 'vbox',
                   pack: 'start',
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
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            {
                                margin: '10 0 0 0',

                                html: '<font size=3 color=white>Card Background Image</font>',

                            },
                            {
                                xtype: 'spacer'
                            },
                        {
                            xtype: 'button',
                            id: 'btnFloatPanel_MembershipCardManagement_EditCard_MembershipCardBackgroundImage',
                            //  badgeText: '1',
                            // hidden:true,
                            margin: '0 -5 -12 0',
                            height: 35,
                            width: 35,
                            html: '<img src="resources/icons/viewWhiteThreeExt.png" width="25" height="25" alt="Company Name">',
                            ui: 'plain',
                            handler: function () {
                                //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                                //var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
                                //var EnterpriseAccNo = GetEnterpriseAccNo();
                                //var StartDate = GetStartDateStampCardCampaign();
                                //var EndDate = GetEndDateStampCardCampaign();
                                //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

                            }
                        },
            {
                xtype: 'button',
                // hidden: true,
                id: 'txtFloatPanel_MembershipCardManagement_EditCard_PreViewAtBackgroundImg',
                //  badgeText: '1',
                margin: '0 -7 -12 0',
                height: 40,
                width: 100,
                html: '<font size=2 color=white>PreView Card</font>',
                ui: 'plain',
                handler: function () {
                    //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                    //var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
                    //var EnterpriseAccNo = GetEnterpriseAccNo();
                    //var StartDate = GetStartDateStampCardCampaign();
                    //var EndDate = GetEndDateStampCardCampaign();
                    //FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);

                }
            },
                        ]
                    },

                    {
                        xtype: 'list',
                        //flex:1,
                        height: 200,
                        store: 'LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore',
                        id: 'FloatPanel_MembershipCardManagement_EditCard_BackgroundImgListD',
                        mode: 'SINGLE',
                        //  grouped: true,
                        disableSelection: true,
                        itemTpl: '<div style="margin:20px 0px 0px 180px"><font size=3>Tap To Edit</font></div>' + '<div style="margin:-6px 0px 0px 180px"><font size=1>Background Status:<u><b>{ShowHide}</b></u></font></div>' +

                                 '{ModifyImgPath}' +

                                 // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 333px" class="tg"><colgroup><col style="width: 118px"><col style="width: 215px"></colgroup><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal">{StampContentModified}</th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal">Tab To Edit</th></tr></thead></table>' +
                          '</div>',
                        width: '100%',
                        listeners: {
                            itemsingletap: function (list, idx, target, records, evt) {

                                var ImgName = records.get('ImgName');
                                var ImgPath = records.get('ImgPath');
                                var ShowHide = records.get('ShowHide');
                                var ID = records.get('ID');


                                var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                                if (CardType == "Auto-Default") {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Default Card',
                                        text: 'Not Allowed to Edit Background!',
                                        footer: 'Create Custome Card!',
                                    });
                                    return;
                                }
                                FloatPanel_MembershipCardManagement_EditCardBackgroundImgShow(ImgName, ImgPath, ShowHide, ID)

                            },
                            deselect: function (list, records) {

                            }
                        },

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
                   pack: 'right',
                   align: 'right'

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
                                pack: 'right',
                                align: 'right'

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
                                        pack: 'right',
                                        align: 'right'

                                    },
                                    items: [
                                          {
                                              margin: '3 0 0 0',
                                              xtype: 'button',

                                              id: 'btnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImageTxt',
                                              //  badgeText: '1',
                                              //  margin: '7 0 0 7',
                                              //height: 40,
                                              //width: 130,
                                              html: '<font size=2 color=white>Add Card Background Image</font>',
                                              ui: 'plain',
                                              handler: function () {


                                                  //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                                                  //if (CardType == "Auto-Default") {
                                                  //    Swal.fire({
                                                  //        icon: 'error',
                                                  //        title: 'Default Card',
                                                  //        text: 'Not Allowed to Edit Background!',
                                                  //        footer: 'Create Custome Card!',
                                                  //    });
                                                  //    return;
                                                  //}
                                                  FloatPanel_AyohaCardManagement_AddCardBackgroundImgShow();
                                              }



                                          },
                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_MembershipCardManagement_EditCard_UploadBackgroundImage',
                                                 //  badgeText: '1',
                                                 margin: '0 0 0 0',
                                                 height: 35,
                                                 width: 35,
                                                 html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                                 ui: 'plain',
                                                 handler: function () {

                                                     //var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
                                                     //if (CardType == "Auto-Default") {
                                                     //    Swal.fire({
                                                     //        icon: 'error',
                                                     //        title: 'Default Card',
                                                     //        text: 'Not Allowed to Edit Background!',
                                                     //        footer: 'Create Custome Card!',
                                                     //    });
                                                     //    return;
                                                     //}
                                                     FloatPanel_AyohaCardManagement_AddCardBackgroundImgShow();
                                                 }
                                             },

                                    ]
                                },




                          {

                              margin: '-2 0 0 0',
                              width: '100%',
                              hidden: true,
                              height: 20,
                              html: '<input type="text" id="input-FloatPanel_MembershipCardManagement_EditCard_StampCardBackgroundImage" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                          },

                            ]

                        },
                         {
                             xtype: 'button',
                             hidden: true,
                             id: 'btnFloatPanel_MembershipCardManagement_EditCard_ResetBackgroundImage',
                             //  badgeText: '1',
                             margin: '0 0 -30 0',
                             height: 35,
                             width: 35,
                             html: '<img src="resources/icons/resetWhiteTwo.png" width="25" height="25" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {

                             }
                         },

               ]

           },

     





//        {
//            xtype: 'container',
//            margin: '10 0 0 0',
//            width: '100%',

//            style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
//            //style: {

//            //    background: 'transparent',

//            //},
//            layout: {
//                type: 'hbox',
//                pack: 'center',
//                align: 'center'

//            },
//            items: [


//            {
//                xtype: 'button',
//                id: 'btnFloatPanel_MembershipCardManagement_EditCard_PreviewCard',
//                //  badgeText: '1',
//               // hidden:true,
//                margin: '0 -18 -8 0',
//                //height: 35,
//                //width: 35,
//                html: '<img src="resources/icons/viewCardPurpleExt.png" width="25" height="25" alt="Company Name">',
//                ui: 'plain',
//                handler: function () {


//                    var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
//                    var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
//                    var EnterpriseAccNo = GetEnterpriseAccNo();
//                    var StartDate = GetStartDateStampCardCampaign();
//                    var EndDate = GetEndDateStampCardCampaign();
//                    FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType,StartDate,EndDate);
//                }
//            },
//{
//    xtype: 'button',
//    //hidden:true,
//    id: 'txtFloatPanel_MembershipCardManagement_EditCard_PreviewCard',
//    //  badgeText: '1',
//    margin: '7 0 0 7',
//    //height: 40,
//    //width: 130,
//    html: '<font size=2 color=grey>PreView Card</font>',
//    ui: 'plain',
//    handler: function () {

//        var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
//        var strStampCampaignCode = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value;
//        var EnterpriseAccNo = GetEnterpriseAccNo();
//        var StartDate = GetStartDateStampCardCampaign();
//        var EndDate = GetEndDateStampCardCampaign();
//        FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate);
//    }
//},


//{
//    xtype:'spacer'
//},
//        {
//            xtype: 'button',
//            id: 'btnFloatPanel_MembershipCardManagement_EditCard_DeleteCard',
//            //  badgeText: '1',
//            margin: '0 -18 -8 0',
//            //height: 35,
//            //width: 35,
//            html: '<img src="resources/icons/DeletePurple.png" width="25" height="25" alt="Company Name">',
//            ui: 'plain',
//            handler: function () {
//                var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
//                if (CardType == "Auto-Default") {
//                    Swal.fire({
//                        icon: 'error',
//                        title: 'Defautl Card',
//                        text: 'Default Card cannot be deleted!',
//                    })
//                    return
//                }


//                Swal.fire({
//                    title: 'Are you sure To delete?',
//                    text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
//                    icon: 'warning',
//                    showCancelButton: true,
//                    confirmButtonColor: '#3085d6',
//                    cancelButtonColor: '#d33',
//                    confirmButtonText: 'Yes'
//                }).then(function (result) {
//                    if (result.isConfirmed) {
//                        DeleteEditCardMaster();
//                    }
//                });




//            }
//        },
//{
//    xtype: 'button',
//    id: 'txtFloatPanel_MembershipCardManagement_EditCard_DeleteCard',
//    //  badgeText: '1',
//    margin: '7 0 0 7',
//    //height: 40,
//    //width: 130,
//    html: '<font size=2 color=grey>*Delete</font>',
//    ui: 'plain',
//    handler: function () {



//        var CardType = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCardType').value;
//        if (CardType == "Auto-Default") {
//            Swal.fire({
//                icon: 'error',
//                title: 'Defautl Card',
//                text: 'Default Card cannot be deleted!',               
//            })
//            return
//        }








//        Swal.fire({
//            title: 'Are you sure To delete?',
//            text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
//            icon: 'warning',
//            showCancelButton: true,
//            confirmButtonColor: '#3085d6',
//            cancelButtonColor: '#d33',
//            confirmButtonText: 'Yes'
//        }).then(function (result) {
//            if (result.isConfirmed) {
//                DeleteEditCardMaster();
//            }
//        });
//    }
//},

//     {
//            xtype: 'button',
//            id: 'btnFloatPanel_MembershipCardManagement_EditCard_SaveCard',
//            //  badgeText: '1',
//            margin: '0 -18 -8 0',
//            //height: 35,
//            //width: 35,
//            html: '<img src="resources/icons/savePurple.png" width="25" height="25" alt="Company Name">',
//            ui: 'plain',
//            handler: function () {
//                saveEditCardMaster();
//            }
//        },
//{
//    xtype: 'button',
//    id: 'txtFloatPanel_MembershipCardManagement_EditCard_SaveCard',
//    //  badgeText: '1',
//    margin: '7 0 0 7',
//    //height: 40,
//    //width: 130,
//    html: '<font size=2 color=grey>Save</font>',
//    ui: 'plain',
//    handler: function () {
//        saveEditCardMaster();
//    }
//},
//            ]
//        },
















       

        


























                        ]
                    },


                ]

            },






        });

    return _FloatPanel_MembershipCardManagement_EditCard;
}


function FloatPanel_MembershipCardManagement_EditCardShow() {

    Ext.Viewport.remove(_FloatPanel_MembershipCardManagement_EditCard);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardManagement_EditCard());
    this.overlay.show();
    isFloatPanel_MembershipCardManagementOpen = 'Y';

    var checkbox = document.querySelector("input[name=noenddate]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
         
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(true);
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(false);
            document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = "No End Date-Membership Valid LifeTime";


        } else {
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate').setHidden(false);
            Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDate_txtField').setHidden(true);
            document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipCardEndDateNoEndDate').value = "";
        }
    });

}

function FloatPanel_MembershipCardManagement_EditCardHide() {
   

  
    _FloatPanel_MembershipCardManagement_EditCard.hide(); isFloatPanel_MembershipCardManagementOpen = 'N';

}








function FloatPanel_MembershipCardManagement_EditCard_SaveDelete(RowStatus) {

    var _EditCardStampCardCampaignName = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignName').value;

    var EditCardCampaignStartDate = new Date(document.getElementById('EditCardCampaignStartDate').value);
    var EditCardCampaignEndDate = new Date(document.getElementById('EditCardCampaignEndDate').value);


    if (_EditCardStampCardCampaignName.length < 2) {
        swalFireFail("Stamp Campaign Name Not Valid!!")
        return
    }



    if (EditCardCampaignStartDate == "Invalid Date") {
        swalFireFail("Invalid Start Date!!");
        return;
    }


    if (EditCardCampaignEndDate == "Invalid Date") {
        swalFireFail("Invalid End Date!!");
        return;
    }


    // Extract pieces of the date:
    // var month = EditCardCampaignStartDate.getMonth(); // months start counting from zero!
    var dayCampaignStart = parseInt(EditCardCampaignStartDate.getDate() + EditCardCampaignStartDate.getMonth() + EditCardCampaignStartDate.getFullYear());
    var dayCampaignEnd = parseInt(EditCardCampaignEndDate.getDate() + EditCardCampaignEndDate.getMonth() + EditCardCampaignEndDate.getFullYear());





    console.log(dayCampaignStart);
    console.log(dayCampaignEnd);







    if (dayCampaignStart > dayCampaignEnd) {
        // alert("Fail-Campaing date Has passed");
        swalFireFail("Save Failed!<br>*Campaign date Has passed!!");
        return;

    }

    if (dayCampaignStart == dayCampaignEnd) {
        swalFireFail("Save Failed!<br>*Campaign date start and date end is same!!");
        return;

    }

    //  var year = EditCardCampaignStartDate.getFullYear();














    var animatedval = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_AnimatedInterval').value;

    if (globalisAnimated == "YES") {
        if (animatedval <= 0) {
            swalFireFail("Animated Interval Not Valid!!")
            return
        } if (animatedval.length == 0) {
            swalFireFail("Animated Interval Not Valid!!")
            return
        }
    }
    if (globalisAnimated == "NO") {
        if (animatedval.length == 0) {
            //swalFireFail("Animated Interval Not Valid!!")
            //return
            document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_AnimatedInterval').value = 0;
        }
    }

    if (dayCampaignStart < dayCampaignEnd) {
        Ext.Ajax.request({

            url: GetAPIurl() + '/StampCampaign/StampCampaignUpdate',

            params: {
                StampCampaignCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value,
                StampCampaignName: _EditCardStampCardCampaignName,
                StartDate: document.getElementById('EditCardCampaignStartDate').value,
                EndDate: document.getElementById('EditCardCampaignEndDate').value,
                //EnterpriseAccNo: GetEnterpriseAccNo(),
                //CreatedByAccNo: GetCurrentAccountNo(),
                //CreatedBy: document.getElementById('UN').value,
                EnterpriseAccNo: 'CRCom-71100',
                CreatedByAccNo: '0133376958-346273',
                CreatedBy: 'ianMizi',
                isAnimated: globalisAnimated,
                AnimatedInterval: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_AnimatedInterval').value,
                RowStatus: 'Active',
                StampRuleRemarks: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampRuleRemarks').value,
                isStampRulePopUp: globalisStampRulePopUp,
                LoyaltyCustomerType: 'NA'
            },
            success: function (result, request) {
                swalFireSuccess("Save Successfully!");
                Load_FloatPanel_AyohaCardManagement_StampCampaignLoadByEnterpriseAccNoStore();
                FloatPanel_MembershipCardManagement_EditCardHide();
                //LoadingCustomMsgShow('Success!', '3');

            },
            failure: function (result, request) {
                swalFireFail("Save Error!")
                //   LoadingCustomMsgShow('Error, Contact Admin!', '2');

            }
        });
    }

}




















function FloatPanel_MembershipCardManagement_EditCard_MembershipLoadByEnterpriseHQAccNo() {

    Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore').getProxy().setExtraParams({

        StampCampaignCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value,
    });
    Ext.StoreMgr.get('StampCampaignStamperLoadByStampCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore').getProxy().setExtraParams({

            StampCampaignCode: document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value,
        });
        Ext.StoreMgr.get('StampCampaignStamperLoadByStampCampaignCodeStore').load();
        var myStore = Ext.getStore('StampCampaignStamperLoadByStampCampaignCodeStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}


function FloatPanel_MembershipCardManagement_EditCard_DeleteCard(ID) {



    Swal.fire({
        title: 'Are you sure want To delete?',
        // text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "ID": ID,
                "StampCampaignCode": document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_StampCardCampaignCode').value,
                "CreatedBy": GetCurrentUserLogin(),

            };
            console.log(objn);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/StampCampaignStamper/StampCampaignStamperDelete',

                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {

                        swalFireSuccess("Delete Succesfully!");
                        //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
                        Load_FloatPanel_MembershipCardManagement_EditCard_StampCampaignStamperLoadByStampCampaignCodeStore();

                    }
                    else {

                        swalFireFail("Delete Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                    }
                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!!");
                }

            });
        }
    });








}



function MembershipFeePaymentCycleSettingControlComponet() {

 
    var PaymentCycle = document.getElementById('input-FloatPanel_MembershipCardManagement_EditCard_MembershipFeePaymentCycle').value;

    if (PaymentCycle != "FOC") {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges').setHidden(false);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield').setHidden(false);
        Ext.getCmp('containerFloatPanel_MembershipCardManagement_EditCard_OnlinePaymentLinkFee').setHidden(false);
    } else {
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_CardFeeCharges').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardManagement_EditCard_MembershipCardFee_txtfield').setHidden(true);
        Ext.getCmp('containerFloatPanel_MembershipCardManagement_EditCard_OnlinePaymentLinkFee').setHidden(true);
    }
}