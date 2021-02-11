Ext.define('ianMizi.view.Master.FloatPanel_AdvertisementLinkModule', {

});

var _FloatPanel_AdvertisementLinkModule;


var isFloatPanel_AdvertisementLinkModuleOpen = 'N';











function FloatPanel_AdvertisementLinkModule() {

    _FloatPanel_AdvertisementLinkModule =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 350,
         width: '95%',
         id: 'LoadingFloatPanel_AdvertisementLinkModuleID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'vbox'
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
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AdvertisementLinkModule.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AdvertisementLinkModule.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AdvertisementLinkModuleOpen = 'N';
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             //  style: 'border-bottom:0px solid;background-color:white;',

             style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_AdvertisementLinkModuleHeader',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'transparent',
                     //    // border: '2px'
                     //},
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
                                              id: 'btnFloatPanel_AdvertisementLinkModuleBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_AdvertisementLinkModule.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_AdvertisementLinkModuleOpen = 'N';

                                              }
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              html: '<font size=2 color=white><b>Advertisement Linked Module</b></font>'
                                          },
                                           {
                                               xtype: 'spacer',

                                           },















                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_AdvertisementLinkModuleBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 290,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'left',
                    align: 'left'
                },
                items: [







                    {
                        xtype: 'list',
                        //  flex: 1,
                        store: 'ModuleloadMasterStore',
                        id: 'FloatPanel_AdvertisementLinkModuleList',
                        mode: 'SINGLE',
                        disableSelection: false,

                        //itemTpl: '<div class="myContent">' +
                        //   '<div><b>{ID}</b></div>' +
                        //   '<div>{ReceiptName}</div>' +
                        //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                        //   '<div><b>{Amount}</b></div>' +
                        //    '<div style="display: none;">{ID}</div>' +
                        //   '</div>',

                        itemTpl: '<div class="myContent">' +


                                  // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:20px">{No}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:120px">{SubscriberAccountName}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberPhoneNumber}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:70px">{SubscriberEmail}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:100px">{SubscribedDate}</th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;width:50px">{PhonePlatform}</th></tr></table>' +


                              //jadi// '<div style="overflow:auto;width:100%;height:100%;font-size: 65%"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:13%"><b>{ID}</b></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%"><b>{ReceiptName}</b><br>{CreatedDate}</div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div>' +

                            '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:99.5%;"><b>{ModuleName}</b><br><font size=1>{Descriptions}</font></div>' +

                             //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                     // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                   '</div>',

                        width: '100%',
                        height: 290,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {

                                //var AdvertisementType = record.get('AdvertisementType');
                                //document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value = AdvertisementType;
                                //localStorage.setItem('AdvertisementType', AdvertisementType);


                                if (isFloatPanel_AdvertisementLinkModuleOpen == 'Y') {



                                    _FloatPanel_AdvertisementLinkModule.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,

                                    }));

                                }
                                isFloatPanel_AdvertisementLinkModuleOpen = 'N';
                                var ModuleCode = record.get('ID');
                                var ModuleName = record.get('ModuleName');
                                var ModuleDesc = record.get('Descriptions');
                                FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleInsertUpdate(0, "Active", ModuleCode, ModuleName, ModuleDesc);
                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                //var AdvertisementType = record.get('AdvertisementType');
                                //document.getElementById('input-FloatPanel_AdvertisementSetting_Type').value = AdvertisementType;
                                //localStorage.setItem('AdvertisementType', AdvertisementType);

                                if (isFloatPanel_AdvertisementLinkModuleOpen == 'Y') {
                                    _FloatPanel_AdvertisementLinkModule.hide(Ext.fx.Animation({
                                        //type: 'popOut',
                                        //easing: 'easeInOut',
                                        //duration: 250,
                                        type: 'fadeOut',
                                        duration: 400,

                                    }));

                                }
                                isFloatPanel_AdvertisementLinkModuleOpen = 'N';
                                var ModuleCode = record.get('ID');
                                var ModuleName = record.get('ModuleName');
                                var ModuleDesc = record.get('Descriptions');
                                FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleInsertUpdate(0, "Active", ModuleCode, ModuleName, ModuleDesc);



                                //var ReceiptImg = (record.get('ID'));
                                //MovementClaimReceiptImageShow(ReceiptImg);
                            }
                        }





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_AdvertisementLinkModule;





}

function FloatPanel_AdvertisementLinkModuleShow() {

    Ext.Viewport.remove(_FloatPanel_AdvertisementLinkModule);
    this.overlay = Ext.Viewport.add(FloatPanel_AdvertisementLinkModule());
    this.overlay.show();
    isFloatPanel_AdvertisementLinkModuleOpen = 'Y';
}


function FloatPanel_AdvertisementLinkModuleHide() {
    _FloatPanel_AdvertisementLinkModule.hide(); isFloatPanel_AdvertisementLinkModuleOpen = 'N';
}




function FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleInsertUpdate(ID, RowStatus, ModuleCode, ModuleName, ModuleDesc) {

   




    var obj = {
        "ID": ID,
        "AdvertisementCode": document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        "ModuleCode": ModuleCode,
        "ModuleName": ModuleName,
        "ModuleDesc":ModuleDesc,
        "RowStatus": RowStatus,
        "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
        "EnterpriseAccNo": GetEnterpriseAccNo(),
        "CreatedBy": GetCurrentAccountNo(),


    };

    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

               // swalFireSuccess("Save Succesfully!");

                FloatPanel_AdvertisementLinkModuleHide();
                FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore();

            }
            else {

                //   swalFireFail("Save Failed!!!" + data.results + "<br>" + data.message);
                swalFireFail("Insert Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Insert Failed!!");
        }

    });




    //}

}






function FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore() {

    Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),
        AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
    });
    Ext.StoreMgr.get('AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo(),
            AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        });
        DataStore_AdvertisementLinkModule= Ext.StoreMgr.get('AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore').load();
        var myStore = Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(2000);
}

var DataStore_AdvertisementLinkModule;

function buttonsHtmlDeleteAdvertisementLinkModule(ID) {

    var ModuleCode = DataStore_AdvertisementLinkModule.findRecord('ID', ID, 0, false, false, true);
    var ModuleName = DataStore_AdvertisementLinkModule.findRecord('ID', ID, 0, false, false, true);
    var Descriptions = DataStore_AdvertisementLinkModule.findRecord('ID', ID, 0, false, false, true);


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

            var obj = {
                "ID": ID,
                "AdvertisementCode": document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
                "ModuleCode": ModuleCode.get('ModuleCode'),
                "ModuleName": ModuleName.get('ModuleName'),
                "ModuleDesc": Descriptions.get('Descriptions'),
                "RowStatus": "InActive",
                "EnterpriseHQAccNo": GetEnterpriseHQAccNo(),
                "EnterpriseAccNo": GetEnterpriseAccNo(),
                "CreatedBy": GetCurrentAccountNo(),


            };

            console.log(obj);
            var _value = Ext.Ajax.request({

                type: "POST",

                url: GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleInsertUpdate',

                dataType: "json",
                data: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {


                        FloatPanel_AdvertisementLinkModule_AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore();

                    }
                    else {

                        //   swalFireFail("Save Failed!!!" + data.results + "<br>" + data.message);
                        swalFireFail("Insert Failed!!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
                    }
                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {
                    Ext.Viewport.unmask();
                    swalFireFail("Insert Failed!!");
                }

            });
        }
    })




}
