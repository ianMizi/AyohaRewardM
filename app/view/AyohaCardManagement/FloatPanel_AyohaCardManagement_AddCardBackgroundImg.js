Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCardBackgroundImg', {

});




var _FloatPanel_AyohaCardManagement_AddCardBackgroundImg;

function FloatPanel_AyohaCardManagement_AddCardBackgroundImg() {

    _FloatPanel_AyohaCardManagement_AddCardBackgroundImg = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_AddCardBackgroundImgID',
            xtype: 'panel',
            zIndex: 250,
            xtype: 'container',
            height: 600,
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
                                 id: 'btnFloatPanel_AyohaCardManagement_AddCardBackgroundImgCardBack',
                                 height: 30,
                                 width: 35,
                                 // iconCls: 'list',
                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                 ui: 'plain',
                                 handler: function () {

                                     _FloatPanel_AyohaCardManagement_AddCardBackgroundImg.hide(Ext.fx.Animation({
                                         type: 'slideOut',
                                         direction: 'left',
                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                         duration: 250

                                     }));
                                     is_FloatPanel_AyohaCardManagement_AddCardBackgroundImgHide = 'N';
                                 }
                             },
                                          {
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_AyohaCardManagement_AddCardBackgroundImgHeaderTxt',
                                              html: '<font size=2 color=white><b>Add Background Card Image</b></font>'
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

                                 id: 'FloatPanel_AyohaCardManagement_AddCardBackgroundImgCard',
                                 // iconCls: 'list',
                                 html: '<div ><img src="resources/icons/AddCustomerWhite.png" width="300" height="460" alt="Company Name"></div>',

                             },

                         ]

                     },

                              ///////

       //{
       //    xtype: 'container',
       //    style: ' background-color:transparent',
       //    margin: '-30 0 0 0',
       //    width: '100%',
       //    layout: {
       //        type: 'hbox',
       //        pack: 'center',
       //        align: 'center'
       //    },
       //    items: [
       //         {
       //             xtype: 'button',
       //             id: 'btnFloatPanel_AyohaCardManagement_AddCardBackgroundImgReset',
       //             //  badgeText: '1',
       //             margin: '0 0 0 120',
       //             height: 35,
       //             width: 35,
       //             html: '<img src="resources/icons/resetWhiteTwo.png" width="25" height="25" alt="Company Name">',
       //             ui: 'plain',
       //             handler: function () {
       //                 resetCardContent();
       //             }
       //         },
       //          {
       //              margin: '0 0 0 0',

       //              html: '<font size=1 color=white>Reset</font>',

       //          },
       //    ]

       //},






                     {
                         xtype: 'container',
                         style: ' background-color:transparent',
                         id: 'ContainerFloatPanel_AyohaCardManagement_AddCardBackgroundImgUploadImage',
                         //hidden: true,
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

                                                                html: '<font size=2 color=white>*Uploaded Image limit to < 4MB</font>',

                                                            },


                                                      ]
                                                  },


                               {
                                   id: 'HtmlinputImgFloatPanelAyohaCardManagementAddCardContentUploadedImage',
                                   hidden: true,
                                   margin: '0 0 0 0',
                                   width: '100%',
                                   html: '<input type="file" id="inputImg-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage" accept="image/*"  onchange="inputImgFloatPanelAyohaCardManagementEditCardContentAddUploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                   //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                               },






                                            {

                                                margin: '-2 0 0 0',
                                                width: '105%',
                                                height: 20,
                                                html: '<input type="text" id="inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                                            },

                                              ]

                                          },


                                           //{
                                           //    xtype:'container'

                                           //},
                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadBackgroundImage',
                                                 name: 'clickablebtnFloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadBackgroundImage',
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

                     







                     /////////



























           {
               xtype: 'button',
               //  align: 'stretch',

               ui: 'plain',
               width: '80%',
               height: 50,
               margin: '0 0 0 0',
               id: 'btnFloatPanel_AyohaCardManagement_AddCardBackgroundImg_SaveImage',
               // width: '80%',
               //style: {
               //    background: '#FA8072',
               //},
               // padding: '10px',
               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
               text: '<button class="buttonStampCampaignCreate">Save</button>',

               handler: function () {



                   var name = document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value;
                   //var ent = GetEnterpriseAccNo();





                   if (name) {

                       SaveCardAddBackgroundImage();

                   } else {

                       swalFireFail("No Image uploaded!!");

                   }




               },


           },
         
                    


                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_AddCardBackgroundImg;
}

var globalImgName;
var globalImgPath;
var globalImgShowHide;
//function FloatPanel_AyohaCardManagement_AddCardBackgroundImgShow(StampContentModified, TextOne, TextTwo, DivContent, DivContentTextTwo, RowID, StampContentNote, StampContentDefaultTemplateID, ShowHide) {
function FloatPanel_AyohaCardManagement_AddCardBackgroundImgShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_AddCardBackgroundImg);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_AddCardBackgroundImg());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_AddCardBackgroundImgHide = 'Y';
   


    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          uploadAddCardImg();
      }
    );

}
var is_FloatPanel_AyohaCardManagement_AddCardBackgroundImgHide = 'N';

function FloatPanel_AyohaCardManagement_AddCardBackgroundImgHide() {
    if (is_FloatPanel_AyohaCardManagement_AddCardBackgroundImgHide == 'Y') {
        _FloatPanel_AyohaCardManagement_AddCardBackgroundImg.hide();
        is_FloatPanel_AyohaCardManagement_AddCardBackgroundImgHide = 'N';
    }

}









var globalCardBackgroundImg;
function inputImgFloatPanelAyohaCardManagementEditCardContentAddUploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    if (FileSize > 4096) {


        swalFireFail("Image size cannot exceeds 4 MB!");
        // CustomeMsgBoxShow('Image size exceeds 200 KB!');
        return;
        // $(file).val(''); //for clearing with Jquery
    } else {

        if (file) {

            if (file.type.match("image.*")) {
                var reader = new FileReader();
                reader.readAsDataURL(file/*, "UTF-8"*/);
                reader.onload = function (event) {
                    globalCardBackgroundImg = event.target.result;
                    document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value = fileName;


                    Ext.getCmp('FloatPanel_AyohaCardManagement_AddCardBackgroundImgCard').setHtml('<div ><img src="' + globalCardBackgroundImg + '" width="300" height="460" alt="Company Name"></div>');


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





function uploadAddCardImg() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage").click();
    });
}



function SaveCardAddBackgroundImage() {
   
  

    var ImgPaths = "http://42.1.63.57/AyohaImgCard/BackgroundImgCard/" + GetEnterpriseAccNo() + "/" + document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value;
   // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": '0',
        "EnterpriseAccNo":GetEnterpriseAccNo(),
        "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        "ImgName":document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,
        "ImgPath": ImgPaths,
        "RowStatus": "Active",
        "CreatedBy": document.getElementById('UN').value,
        "ImageBase64": globalCardBackgroundImg,
        "ShowHide": "Show",
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/LoyaltyCardBackgroundImage/StampCardUploadContentCardImg',

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
                FloatPanel_AyohaCardManagement_AddCardBackgroundImgHide();
                Load_FloatPanel_AyohaCardManagement_EditCard_LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore();

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





