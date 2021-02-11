Ext.define('ianMizi.view.Advertisement.FloatPanel_AddEdit_AdvertisementImages', {

});




var _FloatPanel_AddEdit_AdvertisementImages;








function FloatPanel_AddEdit_AdvertisementImages() {

    _FloatPanel_AddEdit_AdvertisementImages =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: '83%',
         // height: 580,
         height: '100%',
         width: '100%',
         id: 'LoadingMovementClaimReceiptImageAccomodationID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 250,
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
             type: 'slideOut',
             direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
             //type: 'slide',
             //direction:'right',
             //duration: 250,
             //easing: 'ease-out'
         },
         //hideAnimation: {
         //    type: 'popOut',
         //    duration: 250,
         //    easing: 'ease-out'
         //},
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {
         //                if (e.direction == "up") {
         //                    MovementClaimReceiptImageAccomodationHide();
         //                }
         //                else {
         //                    MovementClaimReceiptImageAccomodationHide()
         //                }
         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             //  style: 'border-bottom:0px solid;background-color:white;',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },
             scrollable: true,
             items: [

                 {
                     xtype: 'container',
                     style: ' background-color:transparent',
                     margin: '0 0 0 0',
                     docked:'top',
                     width: '100%',
                     layout: {
                         type: 'hbox',
                         pack: 'left',
                         align: 'left'
                     },
                     items: [
                          {
                              xtype: 'button',
                              id: 'btnFloatPanel_AddEdit_AdvertisementImagesBack',
                              height: 30,
                              width: 35,
                              // iconCls: 'list',
                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                              ui: 'plain',
                              handler: function () {

                                  _FloatPanel_AddEdit_AdvertisementImages.hide(Ext.fx.Animation({
                                      type: 'slideOut',
                                      direction: 'left',
                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                      duration: 250

                                  }));
                                  is_FloatPanel_AddEdit_AdvertisementImagesHide = 'N';
                              }
                          },
                                       {
                                           margin: '0 0 0 0',
                                           id: 'htmlFloatPanel_AddEdit_AdvertisementImagesHeaderTxt',
                                           html: '<font size=2 color=white><b>Add Advertisement Image</b></font>'
                                       },
                     ]
                 },



                 {
                     xtype: 'container',
                     style: ' background-color:transparent',
                     id: 'ContainerFloatPanel_AddEdit_AdvertisementImagesUploadImage',
                     docked: 'bottom',
                     //hidden: true,
                     margin: '0 0 0 0',
                     width: '100%',
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
                               width: '50%',
                               height: 35,
                               margin: '7 0 0 0',
                               id: 'btnFloatPanel_AddEdit_AdvertisementImages_SaveImage',
                               // width: '80%',
                               //style: {
                               //    background: '#FA8072',
                               //},
                               // padding: '10px',
                               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                               text: '<button class="buttonStampCampaignCreate">Save</button>',

                               handler: function () {
                                   var name = document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value;





                                   if (name) {
                                       //  FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_Save();
                                       FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_Save();

                                   } else {

                                       swalFireFail("No Image uploaded!!");

                                   }




                               },


                           },
                                                                 {
                                                                     xtype: 'button',
                                                                     //  align: 'stretch',

                                                                     ui: 'plain',
                                                                     // width: '80%',
                                                                     height: 35,
                                                                     margin: '7 0 0 0',
                                                                     id: 'btnFloatPanel_AddEdit_AdvertisementImages_DeleteImage',
                                                                     width: '50%',
                                                                     //style: {
                                                                     //    background: '#FA8072',
                                                                     //},
                                                                     // padding: '10px',
                                                                     //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                                                                     text: '<button class="buttonStampCampaignCreate">Delete</button>',

                                                                     handler: function () {
                                                                         var name = document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value;

                                                                         Swal.fire({
                                                                             title: 'Are you sure To delete?',
                                                                             // text: "You won't be able to revert this!",
                                                                             icon: 'warning',
                                                                             showCancelButton: true,
                                                                             confirmButtonColor: '#3085d6',
                                                                             cancelButtonColor: '#d33',
                                                                             confirmButtonText: 'Yes'
                                                                         }).then(function (result) {
                                                                             if (result.isConfirmed) {
                                                                                 if (name) {

                                                                                     FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_Delete();
                                                                                     // FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_Delete();
                                                                                 } else {

                                                                                     swalFireFail("No Image uploaded!!");

                                                                                 }
                                                                             }
                                                                         })








                                                                     },


                                                                 },





                     ]
                 },





                 




            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'Container_FloatPanel_AdvertisementImage_pinchzoom',
                name: 'clickableContainerAccomodation',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                //  renderTo: document.body,
                height: 350,
                
                width: '100%',
                //  style: 'border:2px none #540575;',
                //style: 'border-top:2px dotted #540575;border-left:2px dotted #540575;border-right:2px dotted #540575;border-bottom:2px dotted #540575',
                style: 'border-top:2px dotted white;border-left:2px dotted white;border-right:2px dotted white;border-bottom:2px dotted white',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },

                items: [



                    {

                        // xtype: 'image',
                        xtype: 'pinchzoomimage',
                        src: 'resources/icons/uploadWhite.png',
                        //  width: 220,
                        id: 'FloatPanel_AdvertisementImage_pinchzoom',
                        height: 346,
                       // height: '77%',
                        width: '100%',
                    },

                  


                ]


            },



             {
                 xtype: 'container',
                 margin: '-26 0 0 0',
                 // zIndex:200,
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center'
                 },
                 width: '100%',
                 items: [

             {
                 //zIndex: 200,
                 //  margin: '-20 0 0 0',
                 html: '<font size=1 color=#540575>*Pinch Image to Zoom In/Out.Single tap to restore image size</font>',
             },


                 ]

             },
            

                {
                    margin: '0 0 0 0',
                    html: '<font color="white" size="2"><b>Image Name</b></font>',
                },
                                {
                                    id: 'HtmlinputImg-FloatPanel_AddEdit_AdvertisementImages_UploadedImage',
                                    hidden: true,
                                    margin: '0 0 0 0',
                                    width: '100%',
                                    html: '<input type="file" id="inputImg-FloatPanel_AddEdit_AdvertisementImages_UploadedImage" accept="image/*"  onchange="OnChange_FloatPanel_AddEdit_AdvertisementImages_UploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                    //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                                },






                      {

                          margin: '-2 0 0 0',
                          width: '100%',
                          height: 20,
                          html: '<input type="text" id="inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                      },

                       {
                           margin: '0 0 0 0',
                           id: 'htmlLblFloatPanel_AddEdit_AdvertisementImages_ImageCaption',
                           html: '<font color="white" size="2"><b>Image Caption</b></font>',
                       },


                       {
                           id: 'htmlTextareaAddEdit_AdvertisementImages_ImageCaption',
                           margin: '-2 0 0 0',
                           width: '100%',
                           // height: '100%',
                           html: '<textarea id="TextareaAddEdit_AdvertisementImages_ImageCaption" style="width:100%;height:60px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #540575;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;" placeHolder="Descriptions/Remarks"></textarea>'
                           //  html: '<input type="text" id="input-AddClaimDescriptiontxtReceiptImage"  style="border-color:#FD850D;color:black;width:100%;text-align: right;text-valign:bottom;font-size:14px;font-weight:bold">'
                       },







             ]




         },

         initialize: function () {
           
         }





     });
    return _FloatPanel_AddEdit_AdvertisementImages;





}





function FloatPanel_AddEdit_AdvertisementImagesShow_Add() {
    Ext.Viewport.remove(_FloatPanel_AddEdit_AdvertisementImages);
    this.overlay = Ext.Viewport.add(FloatPanel_AddEdit_AdvertisementImages());
    this.overlay.show();
    is_FloatPanel_AddEdit_AdvertisementImagesHide = 'Y';
    //Ext.getCmp('htmlFloatPanel_AddEdit_AdvertisementImagesShowHideTxt').setHidden(true);
    //Ext.getCmp('togglefieldFloatPanel_AddEdit_AdvertisementImagesShowHide').setHidden(true);
    Ext.getCmp('btnFloatPanel_AddEdit_AdvertisementImages_DeleteImage').setHidden(true);
    //var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AddEdit_AdvertisementImages_UploadAdvertisementImage]')[0];
    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerAccomodation]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_singleTap();
      }
    );

    var containerOne = 'Container_FloatPanel_AdvertisementImage_pinchzoom';
    var containerTwo = 'FloatPanel_AdvertisementImage_pinchzoom';

    CustomePanelSetHeight(containerOne, containerTwo);

}



//function FloatPanel_AddEdit_AdvertisementImagesShow(StampContentModified, TextOne, TextTwo, DivContent, DivContentTextTwo, RowID, StampContentNote, StampContentDefaultTemplateID, ShowHide) {
function FloatPanel_AddEdit_AdvertisementImagesShow_Edit(ImgName, ImgPath, RowID,ImgNote) {
    Ext.Viewport.remove(_FloatPanel_AddEdit_AdvertisementImages);
    this.overlay = Ext.Viewport.add(FloatPanel_AddEdit_AdvertisementImages());
    this.overlay.show();
    is_FloatPanel_AddEdit_AdvertisementImagesHide = 'Y';
    var containerOne = 'Container_FloatPanel_AdvertisementImage_pinchzoom';
    var containerTwo = 'FloatPanel_AdvertisementImage_pinchzoom';

    CustomePanelSetHeight(containerOne, containerTwo);
    globalAdvertisementImageRowID = RowID;
   

    document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value = ImgName;
    // Ext.getCmp('FloatPanel_AddEdit_AdvertisementImages').setHtml('<div ><img src="' + ImgPath + '" width="98%" height="600px" alt="Company Name"></div>');
    Ext.getCmp('FloatPanel_AdvertisementImage_pinchzoom').setSrc(ImgPath);
    document.getElementById('TextareaAddEdit_AdvertisementImages_ImageCaption').value = ImgNote;


    Ext.getCmp('btnFloatPanel_AddEdit_AdvertisementImages_DeleteImage').setHidden(false);
    //var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AddEdit_AdvertisementImages_UploadAdvertisementImage]')[0];
    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerAccomodation]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_singleTap();
      }
    );
   
    

  
}
var is_FloatPanel_AddEdit_AdvertisementImagesHide = 'N';

function FloatPanel_AddEdit_AdvertisementImagesHide() {
    if (is_FloatPanel_AddEdit_AdvertisementImagesHide == 'Y') {
        _FloatPanel_AddEdit_AdvertisementImages.hide();
        is_FloatPanel_AddEdit_AdvertisementImagesHide = 'N';
    }

}







function Load_FloatPanel_AddEdit_AdvertisementImagesLoadByStampCampaignCodeEnterpriseAccNoStore() {

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





var globalImgName;
var globalImgPath;
var globalImgShowHide;
var globalAdvertisementImageRowID;
var globalAdvertisementImage;
function OnChange_FloatPanel_AddEdit_AdvertisementImages_UploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').files[0].name;

    var FileSize = file.size / 1024; // in MB
    console.log(FileSize);
    //  if (FileSize > 2048) {
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
                    globalAdvertisementImage = event.target.result;
                    document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value = fileName;
                    

                 // Ext.getCmp('FloatPanel_AddEdit_AdvertisementImages').setHtml('<div ><img src="' + globalAdvertisementImage + '" width="98%" height="600px" alt="Company Name"></div>');

                    Ext.getCmp('FloatPanel_AdvertisementImage_pinchzoom').setSrc(globalAdvertisementImage);

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





function FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_singleTap() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AddEdit_AdvertisementImages_UploadedImage").click();
    });
}


function FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_Save() {

    var imgbase64;

    if (globalAdvertisementImage) {
        imgbase64 = globalAdvertisementImage;
    } else {
        imgbase64 = "ExistingImage";
    }
   
   // var ImgPaths = "http://42.1.63.57/AyohaImgCard/AdvertisementImage/" + GetEnterpriseAccNo() + "/" + document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalAdvertisementImageRowID,
        "AdvertisementCode": document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        "AdvertisementImg": imgbase64,
        "AdvertisementImgName": document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value,
        "AdvertisementImgNote": document.getElementById('TextareaAddEdit_AdvertisementImages_ImageCaption').value,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "RowStatus": "Active",
        "CreatedBy":GetCurrentAccountNo(),
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AdvertisementImages/AdvertisementImagesInsertUpdate',

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

               
            }
            else {

                swalFireFail("Save Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }

            FloatPanel_AddEdit_AdvertisementImagesHide();
            FloatPanel_AddEdit_AdvertisementImages_AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Save Failed!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
        }

    });
}


function FloatPanel_AddEdit_AdvertisementImages_AdvertisementImages_Delete() {

    var imgbase64;

    if (globalAdvertisementImage) {
        imgbase64 = globalAdvertisementImage;
    } else {
        imgbase64 = "ExistingImage";
    }
    console.log(imgbase64);
    // var ImgPaths = "http://42.1.63.57/AyohaImgCard/AdvertisementImage/" + GetEnterpriseAccNo() + "/" + document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalAdvertisementImageRowID,
        "AdvertisementCode": document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        "AdvertisementImg": imgbase64,
        "AdvertisementImgName": document.getElementById('inputName-FloatPanel_AddEdit_AdvertisementImages_UploadedImage').value,
        "AdvertisementImgNote": document.getElementById('TextareaAddEdit_AdvertisementImages_ImageCaption').value,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "RowStatus": "InActive",
        "CreatedBy": GetCurrentAccountNo(),
        //"ContentCardImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_AddCardBackgroundImg_UploadedImage').value,

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AdvertisementImages/AdvertisementImagesInsertUpdate',

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


            }
            else {

                swalFireFail("Delete Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }

            FloatPanel_AddEdit_AdvertisementImagesHide();
            FloatPanel_AddEdit_AdvertisementImages_AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore();
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
        }

    });
}

function FloatPanel_AddEdit_AdvertisementImages_AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore() {

    Ext.getStore('AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore').getProxy().setExtraParams({
        EnterpriseHQAccNo:GetEnterpriseHQAccNo(),
            AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
    });
    Ext.StoreMgr.get('AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo(),
            AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        });
        Ext.StoreMgr.get('AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore').load();
        var myStore = Ext.getStore('AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}
