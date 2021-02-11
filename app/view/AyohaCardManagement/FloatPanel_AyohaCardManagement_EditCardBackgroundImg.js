Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_EditCardBackgroundImg', {

});




var _FloatPanel_AyohaCardManagement_EditCardBackgroundImg;

function FloatPanel_AyohaCardManagement_EditCardBackgroundImg() {

    _FloatPanel_AyohaCardManagement_EditCardBackgroundImg = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_EditCardBackgroundImgID',
            xtype: 'panel',
            zIndex: 250,
            xtype: 'container',
           // height: 580,
             height: '90%',
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
                                 id: 'btnFloatPanel_AyohaCardManagement_EditCardBackgroundImgCardBack',
                                 height: 30,
                                 width: 35,
                                 // iconCls: 'list',
                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                 ui: 'plain',
                                 handler: function () {

                                     _FloatPanel_AyohaCardManagement_EditCardBackgroundImg.hide(Ext.fx.Animation({
                                         type: 'slideOut',
                                         direction: 'left',
                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                         duration: 250

                                     }));
                                     is_FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide = 'N';
                                 }
                             },
                                          {
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_AyohaCardManagement_EditCardBackgroundImgHeaderTxt',
                                              html: '<font size=2 color=white><b>Card Background Image</b></font>'
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

                                 id: 'FloatPanel_AyohaCardManagement_EditCardBackgroundImgCard',
                                 // iconCls: 'list',
                                 html: '<div ><img src="resources/icons/AddCustomerWhite.png" width="350" height="350" alt="Company Name"></div>',

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
       //             id: 'btnFloatPanel_AyohaCardManagement_EditCardBackgroundImgReset',
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
                         id: 'ContainerFloatPanel_AyohaCardManagement_EditCardBackgroundImgUploadImage',
                         docked:'bottom',
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
                                   id: 'HtmlinputImgFloatPanelAyohaCardManagementEditCardContentUploadedImage',
                                   hidden: true,
                                   margin: '0 0 0 0',
                                   width: '100%',
                                   html: '<input type="file" id="inputImg-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage" accept="image/*"  onchange="inputImgFloatPanelAyohaCardManagementEditCardBackgroundImgUploadedImage()"   style="border-color:#540575;color:black;width:268px;text-align: left;font-size:15px;">'

                                   //     html: '<button class="button3" style="width:165px;height:32px"><label for="imageUploadPicProfile" class="btn btn-primary btn-block btn-outlined" style="width:25px;height:32px">Upload Picture</label><input type="file" id="imageUploadPicProfile" accept="image/*" style="display: none;width:25px;height:32px" onchange="EnableuploadAccPicProfile()" /></button>',





                               },






                                            {

                                                margin: '-2 0 0 0',
                                                width: '105%',
                                                height: 20,
                                                html: '<input type="text" id="inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage" readOnly style="border-color:white;color:white;width:100%;text-align: left;font-size:12px;">'
                                            },

                                              ]

                                          },


                                           //{
                                           //    xtype:'container'

                                           //},
                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadBackgroundImage',
                                                 name: 'clickablebtnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadBackgroundImage',
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



                                 {
                                     margin: '0 0 0 0',
                                     id: 'htmlFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHideTxt',
                                     html: '<font size=3 color=white>Show</font>',

                                 },
                                                             {
                                                                 xtype: 'togglefield',
                                                                 // text:'NO/YES',
                                                                 //    name: 'toggleName',
                                                                 margin: '-12 0 0 -10',
                                                                 height: 5,
                                                                 // width:20,
                                                                 id: 'togglefieldFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHide',
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


                                                                             globalImgShowHide = "Show";
                                                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHideTxt').setHtml('<font size=3 color=white>Show</font>');

                                                                             return;


                                                                         }


                                                                             // if(newValue == false)
                                                                         else { // else make it false


                                                                             globalImgShowHide = "Hide";
                                                                             Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHideTxt').setHtml('<font size=3 color=white>Hide</font>');;



                                                                         }


                                                                     },


                                                                 }


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
                                                                         xtype: 'button',
                                                                         //  align: 'stretch',

                                                                         ui: 'plain',
                                                                         width: '50%',
                                                                         height: 35,
                                                                         margin: '7 0 0 0',
                                                                         id: 'btnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_SaveImage',
                                                                         // width: '80%',
                                                                         //style: {
                                                                         //    background: '#FA8072',
                                                                         //},
                                                                         // padding: '10px',
                                                                         //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                                                                         text: '<button class="buttonStampCampaignCreate">Save</button>',

                                                                         handler: function () {
                                                                             var name = document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value;





                                                                             if (name) {

                                                                                 SaveCardEditBackgroundImage();

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
                                                                         id: 'btnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_DeleteImage',
                                                                          width: '50%',
                                                                         //style: {
                                                                         //    background: '#FA8072',
                                                                         //},
                                                                         // padding: '10px',
                                                                         //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
                                                                          text: '<button class="buttonStampCampaignCreate">Delete</button>',

                                                                         handler: function () {
                                                                             var name = document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value;

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

                                                                                         SaveCardDeleteBackgroundImage();

                                                                                     } else {

                                                                                         swalFireFail("No Image uploaded!!");

                                                                                     }
                                                                                 }
                                                                             })



                                                                           




                                                                         },


                                                                     },

                                                                 ]
                                                             },

                                                             
                         ]
                     },


                    

                     //////////////

                     






                     /////////




















                     
                               




      
           
           
                    


                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_EditCardBackgroundImg;
}

var globalImgName;
var globalImgPath;
var globalImgShowHide;
var globalImgRowID;
var globalEditBackgroundImg;
//function FloatPanel_AyohaCardManagement_EditCardBackgroundImgShow(StampContentModified, TextOne, TextTwo, DivContent, DivContentTextTwo, RowID, StampContentNote, StampContentDefaultTemplateID, ShowHide) {
function FloatPanel_AyohaCardManagement_EditCardBackgroundImgShow(ImgName, ImgPath, ShowHide,RowID) {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_EditCardBackgroundImg);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_EditCardBackgroundImg());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide = 'Y';
    globalImgName = ImgName;
    globalImgPath = ImgPath;
    globalImgShowHide = ShowHide;
    globalImgRowID = RowID;
    document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value = globalImgName;
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHideTxt').setHtml('<font size=3 color=white>' + globalImgShowHide + '</font>');

    if (globalImgName == "Auto-Default") {
        Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardBackgroundImgCard').setHtml('<div style="margin:0px 0px 0px 0px;border-style: solid;border-color: white;' + globalImgPath + ' width:300px;height:550px"></div>');
        Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_DeleteImage').setHidden(true);
        Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadBackgroundImage').setHidden(true);
        //Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardBackgroundImgUploadImage').setHidden(true);
        //Ext.getCmp('ContainerFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHide').setHidden(false);
   
        
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_EditCardBackgroundImgHeaderTxt').setHtml('<font size=2 color=white><b>Default Background- Hide/Show </b></font>');
        
        
    } else {
        Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardBackgroundImgCard').setHtml('<div ><img src="' + globalImgPath + '" width="300" height="550" alt="Company Name"></div>');       
        Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_DeleteImage').setHidden(false);
        Ext.getCmp('btnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadBackgroundImage').setHidden(false);

        
    }



    if (ShowHide == "Show") {
        
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHide').setValue(true);
    } else
    {
        Ext.getCmp('togglefieldFloatPanel_AyohaCardManagement_EditCardBackgroundImgShowHide').setValue(false);
    }
    

    var containerView = Ext.ComponentQuery.query('button[name=clickablebtnFloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadBackgroundImage]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          uploadCardEditCardBackgroundImg();
      }
    );

}
var is_FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide = 'N';

function FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide() {
    if (is_FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide == 'Y') {
        _FloatPanel_AyohaCardManagement_EditCardBackgroundImg.hide();
        is_FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide = 'N';
    }

}







function Load_FloatPanel_AyohaCardManagement_EditCardBackgroundImgLoadByStampCampaignCodeEnterpriseAccNoStore() {

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


function inputImgFloatPanelAyohaCardManagementEditCardBackgroundImgUploadedImage() {
    var file = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').files[0];


    var fileName = document.getElementById('inputImg-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').files[0].name;

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
                    globalEditBackgroundImg = event.target.result;
                    document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value = fileName;
                   
                
                    Ext.getCmp('FloatPanel_AyohaCardManagement_EditCardBackgroundImgCard').setHtml('<div ><img src="' + globalEditBackgroundImg + '" width="300" height="550px" alt="Company Name"></div>');

                   
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





function uploadCardEditCardBackgroundImg() {
    $(document).ready(function () {
        $("input#inputImg-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage").click();
    });
}


function SaveCardEditBackgroundImage() {

    var imgbase64;

    if (globalEditBackgroundImg) {
        imgbase64 = globalEditBackgroundImg;
    } else {
        imgbase64 = "ExistingImage";
    }


    var ImgPaths = "http://42.1.63.57/AyohaImgCard/BackgroundImgCard/" + GetEnterpriseAccNo() + "/" + document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalImgRowID,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        "ImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value,
        "ImgPath": ImgPaths,
        "RowStatus": "Active",
        "CreatedBy": document.getElementById('UN').value,
        "ImageBase64": imgbase64,
        "ShowHide": globalImgShowHide,
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

                FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide();
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




function SaveCardDeleteBackgroundImage() {

    var imgbase64;

    if (globalEditBackgroundImg) {
        imgbase64 = globalEditBackgroundImg;
    } else {
        imgbase64 = "ExistingImage";
    }


    var ImgPaths = "http://42.1.63.57/AyohaImgCard/BackgroundImgCard/" + GetEnterpriseAccNo() + "/" + document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value;
    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var obj = {
        "ID": globalImgRowID,
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        "ImgName": document.getElementById('inputName-FloatPanel_AyohaCardManagement_EditCardBackgroundImg_UploadedImage').value,
        "ImgPath": ImgPaths,
        "RowStatus": "InActive",
        "CreatedBy": document.getElementById('UN').value,
        "ImageBase64": imgbase64,
        "ShowHide": globalImgShowHide,
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

                swalFireSuccess("Delete Succesfully!");

                FloatPanel_AyohaCardManagement_EditCardBackgroundImgHide();
                Load_FloatPanel_AyohaCardManagement_EditCard_LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore();

            }
            else {

                swalFireFail("Delete Failed!!!");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}
