Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_EnterprisesList', {

});

var _FloatPanel_AyohaCardManagement_EnterprisesList;


var isFloatPanel_AyohaCardManagement_EnterprisesListOpen = 'N';











function FloatPanel_AyohaCardManagement_EnterprisesList() {

    _FloatPanel_AyohaCardManagement_EnterprisesList =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 510,
         width: '95%',
         id: 'LoadingFloatPanel_AyohaCardManagement_EnterprisesListID',
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
                             _FloatPanel_AyohaCardManagement_EnterprisesList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaCardManagement_EnterprisesList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_AyohaCardManagement_EnterprisesListOpen = 'N';
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

                     id: 'containerFloatPanel_AyohaCardManagement_EnterprisesListHeader',
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
                                              id: 'btnFloatPanel_AyohaCardManagement_EnterprisesListBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_AyohaCardManagement_EnterprisesList.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_AyohaCardManagement_EnterprisesListOpen = 'N';

                                              }
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              html: '<font size=2 color=white><b>Branches List</b></font>'
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
                id: 'FloatPanel_AyohaCardManagement_EnterprisesListBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 450,
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
                        store: 'EnterprisesLoadByEnterpriseHQAccNoStore',
                        id: 'FloatPanel_AyohaCardManagement_EnterprisesListID',                      
                        mode: 'SINGLE',
                        height: 450,
                        disableSelection: true,
                        itemTpl: '<div class="myContent" style="width:99%;box-shadow: 5px 10px 18px #888888;margin:0px 0px 0px 5px;">' +
                       //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                        '<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-10px 0px 0px 0px">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div></th></tr><tr></tr></thead></table>' +


                          '</div>',
                        width: '100%',
                        listeners: {
                            itemsingletap: function (list, idx, target, records, evt) {
                                var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                StampCampaignEnterprisesInsertUpdate(0, "Active", EnterpriseAccNo);
                                //Ext.getCmp('tabpanelFloatPanel_AyohaEnterpriseAccount').setActiveItem(2);
                                //Load_FloatPanel_AyohaEnterpriseAccount_EnterprisesLoadByEnterpriseAccNoStore();
                            },
                            deselect: function (list, records) {

                            }
                        },





                    },


                ]


            },









             ]




         }







     });
    return _FloatPanel_AyohaCardManagement_EnterprisesList;





}

function FloatPanel_AyohaCardManagement_EnterprisesListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_EnterprisesList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_EnterprisesList());
    this.overlay.show();
    isFloatPanel_AyohaCardManagement_EnterprisesListOpen = 'Y';
    Load_FloatPanel_AyohaCardManagement_EnterprisesListLoadByEnterpriseHQAccNoStore();
}


function FloatPanel_AyohaCardManagement_EnterprisesListHide() {
    _FloatPanel_AyohaCardManagement_EnterprisesList.hide(); isFloatPanel_AyohaCardManagement_EnterprisesListOpen = 'N';
}








function StampCampaignEnterprisesInsertUpdate(ID, RowStatus, EnterpriseAccNo) {
   
  


    // (CC.ID, CC.EnterpriseAccNo, CC.StampCampaignCode, CC.ImgName, CC.ImgPath, CC.RowStatus, CC.CreatedBy, CC.ImageBase64, CC.ShowHide);
    // alert(ContentCardImgNames);
    var objn = {
        "ID": ID,
        "EnterpriseAccNo": EnterpriseAccNo,
        "StampCampaignCode": document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        "CreatedBy": GetCurrentUserLogin(),
        "RowStatus": RowStatus,

    };
    console.log(objn);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/StampCampaignEnterprises/StampCampaignEnterprisesInsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Add Succesfully!");
              //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();
                FloatPanel_AyohaCardManagement_EnterprisesListHide();
                Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail( "Add Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail( "Add Failed!!");
        }

    });
}







function Load_FloatPanel_AyohaCardManagement_EnterprisesListLoadByEnterpriseHQAccNoStore() {

    Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
        EnterpriseHQAccNo: GetEnterpriseHQAccNo(),

    });
    Ext.StoreMgr.get('EnterprisesLoadByEnterpriseHQAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore').getProxy().setExtraParams({
            EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        });
        Ext.StoreMgr.get('EnterprisesLoadByEnterpriseHQAccNoStore').load();
        var myStore = Ext.getStore('EnterprisesLoadByEnterpriseHQAccNoStore');
        var count = myStore.getCount();


        Ext.Viewport.setMasked(false);








    });
    task.delay(1000);

}