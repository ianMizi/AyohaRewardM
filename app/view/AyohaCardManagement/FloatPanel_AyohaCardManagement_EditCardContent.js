Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCardContent', {

});




var _FloatPanel_AyohaCardManagement_EditCardContent;

function FloatPanel_AyohaCardManagement_EditCardContent() {

    _FloatPanel_AyohaCardManagement_EditCardContent = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_EditCardContentID',
            xtype: 'panel',
            zIndex: 250,
            xtype: 'container',
            height: 540,
            //  height: '60%',
            width: '90%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
           // hideOnMaskTap: true,
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
                        style: ' background-color:transparent',
                        margin: '0 0 0 0',
                        width: '100%',
                        layout: {
                            type: 'hbox',
                            pack: 'left',
                            align: 'left'
                        },
                        items: [
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_AyohaCardManagement_EditCardContentCardBack',
                                 height: 30,
                                 width: 35,
                                 // iconCls: 'list',
                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                 ui: 'plain',
                                 handler: function () {

                                     _FloatPanel_AyohaCardManagement_EditCardContent.hide(Ext.fx.Animation({
                                         type: 'slideOut',
                                         direction: 'left',
                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                         duration: 250

                                     }));
                                     is_FloatPanel_AyohaCardManagement_EditCardContentHide = 'N';
                                 }
                             },
                                          {
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_AyohaCardManagement_EditCardContentHeaderTxt',
                                              html: '<font size=2 color=white><b>Edit Card Content</b></font>'
                                          },
                        ]
                    },


                    

                    



















                     {

                         xtype: 'container',
                         style: ' background-color:transparent',
                         margin: '0 0 0 0',
                         width: '100%',
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center'
                         },
                         items: [
                             {

                                 id: 'FloatPanel_AyohaCardManagement_EditCardContentCard',
                                 // iconCls: 'list',
                                 html: '<div ><img src="resources/icons/AddCustomerWhite.png" width="50" height="50" alt="Company Name"></div>',

                             },

                         ]

                     },

                              ///////

       {
           xtype: 'container',
           style: ' background-color:transparent',
           margin: '-30 0 0 0',
           width: '100%',
           layout: {
               type: 'hbox',
               pack: 'center',
               align: 'center'
           },
           items: [
                {
                    xtype: 'button',
                    id: 'btnFloatPanel_AyohaCardManagement_EditCardContentReset',
                    //  badgeText: '1',
                    margin: '0 0 0 120',
                    height: 35,
                    width: 35,
                    html: '<img src="resources/icons/resetWhiteTwo.png" width="25" height="25" alt="Company Name">',
                    ui: 'plain',
                    handler: function () {
                        resetCardContent();
                    }
                },
                 {
                     margin: '0 0 0 0',

                     html: '<font size=1 color=white>Reset</font>',

                 },
           ]

       },

                    {

                        xtype: 'container',
                        style: ' background-color:transparent',
                        id: 'ContainerFloatPanel_AyohaCardManagement_EditCardContentContainerChangeText',
                        margin: '0 0 0 0',
                        width: '100%',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
                        },
                        items: [

                             

       {

           xtype: 'container',
           style: ' background-color:transparent',
           margin: '0 0 0 0',
           width: '100%',
           layout: {
               type: 'vbox',
               pack: 'start',
               align: 'center'
           },
           items: [
                 {
                     margin: '20 0 0 0',

                     html: '<font size=2 color=white>Row Text 1</font>',

                 },


                      {

                          margin: '-2 0 0 0',
                          width: '80%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1"  onkeyup="onchangeEditCardContentCardRowText1()"  style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                      },




                       {
                           margin: '20 0 0 0',

                           html: '<font size=2 color=white>Row Text 2</font>',

                       },


                      {

                          margin: '-2 0 0 0',
                          width: '80%',
                          height: 20,
                          html: '<input type="text" id="input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText2" onkeyup="onchangeEditCardContentCardRowText2()" style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                      },


                     

           ]

       },

                        ]
                    },
                  


             
                     {
                         xtype: 'container',
                         style: ' background-color:transparent',
                         id: 'ContainerFloatPanel_AyohaCardManagement_EditCardContentUploadImage',
                         hidden: true,
                         margin: '0 0 0 0',
                         width: '100%',
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center'
                         },
                         items: [
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

                                                                html: '<font size=2 color=white>*Uploaded Image limit to < 2MB</font>',

                                                            },
                                                             

                                                      ]
                                                  },

                                                     
                               {
                                   id: 'HtmlinputImgFloatPanelAyohaCardManagementEditCardContentUploadedImage',
                                   hidden: true,
                                   margin: '0 0 0 0',
                                   width: '100%',
                                   html: '<input type="file" id="inputImg-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage" accept="image/*"  onchange="inputImgFloatPanelAyohaCardManagementEditCardContentUploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                   //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                               },






                                            {

                                                margin: '-2 0 0 0',
                                                width: '105%',
                                                height: 20,
                                                html: '<input type="text" id="inputName-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                                            },

                                              ]

                                          },
                                           

                                           //{
                                           //    xtype:'container'

                                           //},
                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_AyohaCardManagement_EditCardContent_UploadBackgroundImage',
                                                 name: 'clickablebtnFloatPanel_AyohaCardManagement_EditCardContent_UploadBackgroundImage',
                                                 //  badgeText: '1',
                                                 margin: '0 0 -10 0',
                                                 height: 35,
                                                 width: 35,
                                                 html: '<img src="resources/icons/uploadWhite.png" width="25" height="25" alt="Company Name">',
                                                 ui: 'plain',
                                                 handler: function () {

                                                 }
                                             },

                                 ]

                             },

                         ]
                     },




                     //////////////

                     {
                         xtype: 'container',
                         style: ' background-color:transparent',
                         id: 'ContainerFloatPanel_AyohaCardManagement_EditCardContentShowHide',
                         hidden: true,
                         margin: '0 0 0 0',
                         width: '100%',
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center'
                         },
                         items: [
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
                                                  pack: 'start',
                                                  align: 'center'

                                              },
                                              items: [


                                                  {
                                                      xtype: 'container',

                                                      width: '100%',
                                                      style: {

                                                          background: 'transparent',

                                                      },
                                                      layout: {
                                                          type: 'vbox',
                                                          pack: 'start',
                                                          align: 'center'

                                                      },
                                                      items: [
                                                            {
                                                                margin: '3 0 0 0',

                                                                html: '<font size=2 color=white>Content Status:</font>',

                                                            },
                                                             {
                                                                 margin: '0 0 0 0',
                                                                 id: 'htmlFloatPanel_AyohaCardManagement_EditCardContentShowHideTxt',
                                                                 html: '<font size=3 color=white>Show</font>',

                                                             },
                                                             {
                                                                 xtype: 'togglefield',
                                                                 // text:'NO/YES',
                                                                 //    name: 'toggleName',
                                                                 margin: '-12 0 0 -10',
                                                                 height: 5,
                                                                 // width:20,
                                                                 id: 'togglefieldFloatPanel_AyohaCardManagement_EditCardContentShowHide',
                                                                 //label: 'Manual',
                                                                 disabled: false,
                                                                 value: false,
                                                                 style: {

                                                                     // background: '#f44336',
                                                                     background: 'transparent',

                                                                 },
                                                                 listeners: {
                                                                     change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                                                                         //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                                                                         if (newValue == true) { // if toggle is true then enable the slider


                                                                             globalShowHide = "Show";
                                                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentShowHideTxt').setHtml('<font size=2 color=white>Show</font>');

                                                                             return;


                                                                         }


                                                                             // if(newValue == false)
                                                                         else { // else make it false


                                                                             globalShowHide = "Hide";
                                                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentShowHideTxt').setHtml('<font size=2 color=white>Hide</font>');;



                                                                         }


                                                                     },


                                                                 }


                                                             },

                                                      ]
                                                  },



                                              ]

                                          },



                                 ]

                             },

                         ]
                     },







                     /////////




















                       {
                           margin: '10 0 0 0',

                           html: '<font size=2 color=white>Content Note</font>',

                       },

                                 {
                                     // xtype: 'label',
                                     //hidden: true,
                                     width: '80%',
                                     height: 50,
                                     // ui:'plain',
                                     //html:' <font size=2px color=black>654 Desa Mayang Sri, 3/10 jalan desa mayang sari,71800 Nilai.Negeri Sembilan.Malaysia</font>',
                                     html: '<textarea id="input-ContentNote" style="width:100%;height:50px;padding: 0px 0px;box-sizing: border-box;border: 1px solid white;border-radius: 4px;background-color: white;font-size: 11px;font-weight:bold" ></textarea>'

                                 },
                                 {
                                     margin: '0 0 0 0',

                                     html: '<font size=1 color=white>*This Content Note will pop up when user tap card content.</font>',

                                 },
           
           
            {
                margin: '6 0 0 0',
                id: 'htmlFloatPanel_AyohaCardManagement_EditCardContentisRedeemitemTxt',
                html: '<font size=2 color=white>is this Redeem item:NO</font>',

            },
                                                             {
                                                                 xtype: 'togglefield',
                                                                 // text:'NO/YES',
                                                                 //    name: 'toggleName',
                                                                 margin: '-12 0 0 -10',
                                                                 height: 5,
                                                                 // width:20,
                                                                 id: 'togglefieldFloatPanel_AyohaCardManagement_EditCardContentisRedeem',
                                                                 //label: 'Manual',
                                                                 disabled: false,
                                                                 value: false,
                                                                 style: {

                                                                     // background: '#f44336',
                                                                     background: 'transparent',

                                                                 },
                                                                 listeners: {
                                                                     change: function (field, newValue, oldValue) { // change function will be called whenever the toggle value changes
                                                                         //  var percentageComponent = Ext.ComponentQuery.query('#id_percentageSlider')[0]; // here we are using ComponentQuery to get the slider component
                                                                         if (newValue == true) { // if toggle is true then enable the slider


                                                                             globalisRedeemItem = "YES";
                                                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentisRedeemitemTxt').setHtml('<font size=2 color=white>is this Redeem item:YES</font>');

                                                                             return;


                                                                         }
                                                                        
                                                                             // if(newValue == false)
                                                                         else { // else make it false


                                                                             globalisRedeemItem = "NO";
                                                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentisRedeemitemTxt').setHtml('<font size=2 color=white>is this Redeem item:NO</font>');;



                                                                         }


                                                                     },


                                                                 }


                                                             },
                                                              {
                                                                  margin: '0 0 0 0',
                                                                  id:'htmlisRedeemItemTagText',
                                                                  html: '<font size=1 color=white>*isRedeem tag used to identify next reward in your customer loyalty card.</font>',

                                                              },
           {
               xtype: 'button',
               //  align: 'stretch',

               ui: 'plain',
               width: '80%',
               height: 50,
               margin: '7 0 0 0',
               id: 'btnFloatPanel_AyohaCardManagement_EditCardContent_SaveText',
               // width: '80%',
               //style: {
               //    background: '#FA8072',
               //},
               // padding: '10px',
               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
               text: '<button class="buttonStampCampaignCreate">Save</button>',

               handler: function () {

                   var valTextOne = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
                   if (valTextOne) {

                        SaveTextCardContent();
                     
                   } else {
                       Swal.fire({
                           position: 'center',
                           icon: 'error',
                           title: '<font size=5 color=red>Row Text 1 Cannot Empty!!</font>',
                           showConfirmButton: true,
                           // timer: 2500
                       });
                   }


                   
                 

                  
               },


           },
           {
               xtype: 'button',
               //  align: 'stretch',
               hidden:true,
               ui: 'plain',
               width: '80%',
               height: 50,
               margin: '7 0 0 0',
               id: 'btnFloatPanel_AyohaCardManagement_EditCardContent_SaveImage',
               // width: '80%',
               //style: {
               //    background: '#FA8072',
               //},
               // padding: '10px',
               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
               text: '<button class="buttonStampCampaignCreate">Save</button>',

               handler: function () {
                   var name = document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage').value;
                   var ent = GetEnterpriseAccNo();




                
                   if (name) {

                       SaveImageCardContent(globalCardContentImg, ent, name);

                   } else {

                       swalFireFail("No Image uploaded!!");
                     
                   }



                 
               },


           },
           {
               xtype: 'button',
               //  align: 'stretch',
               hidden: true,
               ui: 'plain',
               width: '80%',
               height: 50,
               margin: '7 0 0 0',
               id:'btnFloatPanel_AyohaCardManagement_EditCardContent_HideContent',
               // width: '80%',
               //style: {
               //    background: '#FA8072',
               //},
               // padding: '10px',
               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
               text: '<button class="buttonStampCampaignCreate">Save</button>',

               handler: function () {
                   //SaveCardContent();
                   StampCardUpdateShowHide();
               },


           },
                    {
                        xtype: 'container',
                        id: 'FloatPanel_AyohaCardManagement_EditCardContentTitleOutter',
                        width: '96%',
                        height: 45,
                        margin: '0 0 0 7',
                        // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                        style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                        docked: 'bottom',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [
                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaCardManagement_EditCardContentChangeToText',
                                flex: 1,
                                //width: '33.3%',
                                //height: 45,
                                style: "background-color: transparent",
                                //style: "background-color: #F35B57;",

                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [

                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaCardManagement_EditCardContent_ChangeToText',
                                         //  badgeText: '1',
                                         margin: '0 0 0 0',
                                         height: 40,
                                         width: 40,
                                         html: '<img src="resources/icons/ChangeTextPurple.png" width="30" height="30" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                             var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCardType').value;
                                             if (CardType == "Auto-Default") {
                                                 Swal.fire({
                                                     icon: 'error',
                                                     title: 'Default Card',
                                                     text: 'Not Allowed to Change Text!',
                                                     footer: 'Create Custome Card!',
                                                 });
                                                 return;
                                             }

                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentHeaderTxt').setHtml('<font size=2 color=white><b>Edit Card Content - Change Text</b></font>');
                                             Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_SaveText').setHidden(false);
                                             Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_HideContent').setHidden(true);
                                             Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_SaveImage').setHidden(true);
                                             Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentContainerChangeText').setHidden(false);
                                             Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentUploadImage').setHidden(true);
                                             Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentShowHide').setHidden(true);                                          

                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_ChangeToText_bottom').setHtml('<font size=1 color=purple><b><u>Change Text</u></b></font>');
                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_UploadImage_bottom').setHtml('<font size=1 color=grey><b>Change Image</b></font>');
                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_HideContent_bottom').setHtml('<font size=1 color=grey><b>Hide/Show Content</b></font>');


                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentisRedeemitemTxt').setHidden(false);
                                             Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCardContentisRedeem').setHidden(false);
                                             Ext.getCmp('htmlisRedeemItemTagText').setHidden(false);
                                             Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentID').setHeight(540);

                                         }
                                     },
                                      {
                                          margin: '-12 0 0 0',
                                          id: 'htmlFloatPanel_AyohaCardManagement_EditCardContent_ChangeToText_bottom',
                                          html: '<font size=1 color=grey><b>Change Text</b></font>'
                                      },

                                ]
                            },

                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaCardManagement_EditCardContent_ChangeToImage',
                                    //width: '33.3%',
                                    //height: 45,
                                    flex: 1,
                                    style: "background-color: transparent",
                                    //style: "background-color: #F35B57;",

                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_AyohaCardManagement_EditCardContent_ChangeToImage',
                                             //  badgeText: '1',
                                             margin: '0 0 0 0',
                                             height: 40,
                                             width: 40,
                                             html: '<img src="resources/icons/ChangeImagePurple.png" width="30" height="30" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {

                                                 var CardType = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCardType').value;
                                                 if (CardType == "Auto-Default") {
                                                     Swal.fire({
                                                         icon: 'error',
                                                         title: 'Default Card',
                                                         text: 'Not Allowed to Change Image!',
                                                         footer: 'Create Custome Card!',
                                                     });
                                                     return;
                                                 }










                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentHeaderTxt').setHtml('<font size=2 color=white><b>Edit Card Content - Change Image</b></font>');
                                                 Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_SaveText').setHidden(true);
                                                 Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_HideContent').setHidden(true);
                                                 Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_SaveImage').setHidden(false);
                                                 Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentContainerChangeText').setHidden(true);
                                                 Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentUploadImage').setHidden(false);
                                                 Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentShowHide').setHidden(true);
                                                

                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_ChangeToText_bottom').setHtml('<font size=1 color=grey><b>Change Text</b></font>');
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_UploadImage_bottom').setHtml('<font size=1 color=purple><b><u>Change Image</u></b></font>');
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_HideContent_bottom').setHtml('<font size=1 color=grey><b>Hide/Show Content</b></font>');
                                                 Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentisRedeemitemTxt').setHidden(false);
                                                 Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCardContentisRedeem').setHidden(false);
                                                 Ext.getCmp('htmlisRedeemItemTagText').setHidden(false);
                                                 Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentID').setHeight(515);
                                                 //  LoyaltyCardRedeemListShow();
                                             }
                                         },
                                          {
                                              margin: '-12 0 0 0',
                                              id: 'htmlFloatPanel_AyohaCardManagement_EditCardContent_UploadImage_bottom',
                                              html: '<font size=1 color=grey><b>Change Image</b></font>'
                                          },

                                    ]
                                },

                                  

                                  {
                                      xtype: 'container',
                                      id: 'containerFloatPanel_AyohaCardManagement_EditCardContent_Delete',
                                      //width: '33.3%',
                                      //height: 45,
                                      flex: 1,
                                      style: "background-color: transparent",
                                      //style: "background-color: #F35B57;",

                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center'

                                      },
                                      items: [

                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaCardManagement_EditCardContent_Delete',
                                               //  badgeText: '1',
                                               margin: '0 0 0 0',
                                               height: 40,
                                               width: 40,
                                               html: '<img src="resources/icons/viewCardPurpleExt.png" width="30" height="30" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {
                                                   Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentHeaderTxt').setHtml('<font size=2 color=white><b>Edit Card Content - Hide/Show Content</b></font>');                                                  
                                                   Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_SaveText').setHidden(true);
                                                   Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_HideContent').setHidden(false);
                                                   Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardContent_SaveImage').setHidden(true);

                                                   Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentContainerChangeText').setHidden(true);
                                                   Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentUploadImage').setHidden(true);
                                                   Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardContentShowHide').setHidden(false);


                                                   Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_ChangeToText_bottom').setHtml('<font size=1 color=grey><b>Change Text</b></font>');
                                                   Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_UploadImage_bottom').setHtml('<font size=1 color=grey><b><u>Change Image</b></font>');
                                                   Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContent_HideContent_bottom').setHtml('<font size=1 color=purple><b><u>Hide/Show Content</u></b></font>');


                                                   Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentisRedeemitemTxt').setHidden(true);
                                                   Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCardContentisRedeem').setHidden(true);
                                                   Ext.getCmp('htmlisRedeemItemTagText').setHidden(true);
                                                   Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentID').setHeight(415);
                                               }
                                           },
                                            {
                                                margin: '-12 0 0 0',
                                                id: 'htmlFloatPanel_AyohaCardManagement_EditCardContent_HideContent_bottom',
                                                html: '<font size=1 color=grey><b>Hide/Show Content</b></font>'
                                            },

                                      ]
                                  },

                        ]

                    },


                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_EditCardContent;
}



function FloatPanel_AyohaCardManagement_EditCardContentShow(StampContentModified, TextOne, TextTwo, DivContent, DivContentTextTwo, RowID, StampContentNote, StampContentDefaultTemplateID,ShowHide) {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_EditCardContent);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_EditCardContent());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_EditCardContentHide = 'Y';

    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value = TextOne;
    document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText2').value = TextTwo;
    document.getElementById('input-ContentNote').value = StampContentNote;
    globalCardContent = StampContentModified;
    OriginalContent = StampContentModified;
    globalDivContent = DivContent;
    globalDivContentTextTwo = DivContentTextTwo;
    globalCardContentRowID = RowID;
    globalTextOne = TextOne;
    globalTextTwo = TextTwo;
    globalStampContentDefaultTemplateID = StampContentDefaultTemplateID;
    globalShowHide = ShowHide;
    Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentCard').setHtml(OriginalContent);

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaCardManagement_EditCardContent_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          uploadCardContentImg();
      }
    );

   
}
var is_FloatPanel_AyohaCardManagement_EditCardContentHide = 'N';

function FloatPanel_AyohaCardManagement_EditCardContentHide() {
    if (is_FloatPanel_AyohaCardManagement_EditCardContentHide == 'Y') {
        _FloatPanel_AyohaCardManagement_EditCardContent.hide();
        is_FloatPanel_AyohaCardManagement_EditCardContentHide = 'N';
    }

}
var globalCardContent;
var globalContent;
var ModifiedContent;
var OriginalContent;
var globalDivContent;
var globalDivContentTextTwo;
var globalTextOne;
var globalTextTwo;
var globalCardContentRowID;
var globalStampContentDefaultTemplateID;
function onchangeEditCardContentCardRowText1() {

   // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp2">2</div></div>',

    var val=document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
   // console.log(val);

    var Content = globalCardContent.replace('<div style="margin:7px 0px 0px 0px" id="' + globalDivContent + '">' + globalTextOne + '</div>', '<div style="margin:7px 0px 0px 0px" id="' + globalDivContent + '">' + val + '</div>');
    console.log(Content);

    Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentCard').setHtml(Content);
    globalContent = Content;
    ModifiedContent = Content;
}


var strCardContentCardRowText1;
var strCardContentCardRowText2;
var strDivOne;
var strDivTwo;
var FullContent;
function onchangeEditCardContentCardRowText2() {
  //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatLoyaltyCardStamp3">50%</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>Off</font></div></div>',
    FullContent = "";
    strCardContentCardRowText1 = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value;
    strCardContentCardRowText2 = document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText2').value;
    strDivOne = '<div style="margin:7px 0px 0px 0px" id="' + globalDivContent + '">' + globalTextOne + '</div>';
    strDivTwo = '<br><div id="' + globalDivContentTextTwo + '" style="margin:-90px 0px 0px 0px"><font size="3">' + strCardContentCardRowText2 + '</font></div>';
   // var Content = globalCardContent.replace('<div style="margin:7px 0px 0px 0px" id="' + globalDivContent + '">' + globalTextOne + '</div>', '<div style="margin:7px 0px 0px 0px" id="' + globalDivContent + '">' + strCardContentCardRowText1 + '</div><br><div id="' + globalDivContentTextTwo + '" style="margin:-90px 0px 0px 0px"><font size="3">' + strCardContentCardRowText2 + '</font></div>');
    FullContent = globalCardContent.replace('<div style="margin:7px 0px 0px 0px" id="' + globalDivContent + '">' + globalTextOne + '</div>', '<div style="margin:7px 0px 0px 0px" id="' + globalDivContent + '">' + strCardContentCardRowText1 + '</div><br><div id="' + globalDivContentTextTwo + '" style="margin:-90px 0px 0px 0px"><font size="3">' + strCardContentCardRowText2 + '</font></div>');


    Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentCard').setHtml(FullContent);
    ModifiedContent = FullContent;
}



function SaveTextCardContent() {

   
    var ModifiedCardContent = Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentCard').getHtml();
   


    Ext.Ajax.request({

        url: GetAPIurl() + '/StampCard/StampCardUpdate',

        params: {
            ID: globalCardContentRowID,
            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
            StampContent: Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentCard').getHtml(),
            StampContentNote: document.getElementById('input-ContentNote').value,
            EnterpriseAccNo: GetEnterpriseAccNo(),
            ModifiedBy:document.getElementById('UN').value,
            TextOne: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value,
            TextTwo: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText2').value,
            isRedeemItem: globalisRedeemItem,
        },
        success: function (result, request) {

            // LoadingCustomMsgShow('Success!', '3');

            swalFireSuccess("Save Successfully!")
            FloatPanel_AyohaCardManagement_EditCardContentHide();
            Load_FloatPanel_AyohaCardManagement_EditCardContentLoadByStampCampaignCodeEnterpriseAccNoStore();


        },
        failure: function (result, request) {
            // LoadingCustomMsgShow('Error, Contact Admin!', '2');
            swalFireFail("Save Failed!");

        }
    });
}

function resetCardContent() {
    Ext.getStore('StampContentDefaultTemplateResetByIDStore').getProxy().setExtraParams({
        ID: globalStampContentDefaultTemplateID,
        StampCardRowID: globalCardContentRowID
    });
    Ext.StoreMgr.get('StampContentDefaultTemplateResetByIDStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampContentDefaultTemplateResetByIDStore').getProxy().setExtraParams({
            ID: globalStampContentDefaultTemplateID,
            StampCardRowID: globalCardContentRowID
        });
        Ext.StoreMgr.get('StampContentDefaultTemplateResetByIDStore').load();
        var myStore = Ext.getStore('StampContentDefaultTemplateResetByIDStore');
        var modelRecord = myStore.getAt(0);
        var StampContent = modelRecord.get('StampContent');
        var TextOne = modelRecord.get('TextOne');
        Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentCard').setHtml(StampContent.replace("margin:23px", "margin:7px"));

        document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText1').value = TextOne;
        globalTextOne = TextOne;
        document.getElementById('input-FloatPanel_AyohaCardManagement_EditCardContentCardRowText2').value = "";
        document.getElementById('input-ContentNote').value = "";
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCardContentisRedeem').setValue(false);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardContentisRedeemitemTxt').setHtml('<font size=2 color=white>is this Redeem item:NO</font>');
        globalisRedeemItem = "NO";
        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);
}



function Load_FloatPanel_AyohaCardManagement_EditCardContentLoadByStampCampaignCodeEnterpriseAccNoStore() {

    Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}

var globalCardContentImg;
var uploadedImage;
function inputImgFloatPanelAyohaCardManagementEditCardContentUploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    if (FileSize > 2048) {
       
      
        swalFireFail("Image size cannot exceeds 2 MB!");
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalCardContentImg = event.target.result;
                    document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage').value = fileName;
                    // globalOriginalReceiptName = fileName;
                    console.log(globalCardContentImg);

                    uploadedImage = '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(' + globalCardContentImg + '); background-size: 100% 100%;" id="' + globalDivContent + '" ></div>';


                    Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardContentCard').setHtml(uploadedImage);
                    //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',


                   // Ext.getCmp('AccomodationReceiptPicture').setSrc(FuelReceiptsImg64);
                    //   localStorage.setItem('CurrReceiptsAttachmentPic', FuelReceiptsImg64);
                    // FuelReceiptsImg64 = ContentString;
                    // Ext.getCmp('btnMainMenuMyAccountImg').setHtml('<img src=' + img64AccPicProfile + '  style="width: 120px; height: 120px; border:2px solid white; border-radius: 50%; max-width:200px;" alt="Company Name">');

                    //    localStorage.setItem('EnterpriseLogo64', ContentString);
                    // console.log(FuelReceiptsImg64);
                };


            }
            else {
                //  img64AccPicProfile = Picture;
            }
        }
    }
}





function uploadCardContentImg() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage").click();
    });
}



function SaveImageCardContent(ContentCardImg, EnterpriseAccNo, ContentCardImgNames) {
    var imgbase64;

    if (ContentCardImg) {
        imgbase64 = ContentCardImg;
    } else {
        imgbase64 = "ExistingImage";
    }



    var ImgPaths = "http://42.1.63.57/AyohaImgCard/ContentCard/" + EnterpriseAccNo + "/" + ContentCardImgNames;
        var con = '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(' + ImgPaths + '); background-size: 100% 100%;" id="' + globalDivContent + '" ></div>';
       // alert(ContentCardImgNames);
    var obj = {
        "ID": globalCardContentRowID,
        "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        "StampContent": con,
        "StampContentNote": document.getElementById('input-ContentNote').value,
        "ContentCardImg": imgbase64,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "ModifiedBy": document.getElementById('UN').value,
        "TextOne": globalTextOne,
        "TextTwo": "NA",
        "ContentCardImgName": ContentCardImgNames,
        "isRedeemItem": globalisRedeemItem
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardContent_UploadedImage').value,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/StampCard/StampCardUploadContentCardImg',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == true) {

                swalFireSuccess("Save Succesfully!");
               

            }
            else {

                swalFireFail("Save Failed!!!");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!");
        }

    });
}





var globalShowHide;

function StampCardUpdateShowHide() {

    Ext.Ajax.request({

        url: GetAPIurl() + '/StampCard/StampCardUpdateShowHide',

        params: {
            ID: globalCardContentRowID,
            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
            EnterpriseAccNo: GetEnterpriseAccNo(),
            ModifiedBy: document.getElementById('UN').value,            
            StampContentNote: document.getElementById('input-ContentNote').value,
            ShowHide:globalShowHide,
        },
        success: function (result, request) {
            swalFireSuccess("Save Succesfully!");
          //  LoadingCustomMsgShow('Success!', '3');
            FloatPanel_AyohaCardManagement_EditCardContentHide();
            Load_FloatPanel_AyohaCardManagement_EditCardContentLoadByStampCampaignCodeEnterpriseAccNoStore();


        },
        failure: function (result, request) {
            swalFireSuccess("Save Failed!!");
           // LoadingCustomMsgShow('Error, Contact Admin!', '2');

        }
    });
}