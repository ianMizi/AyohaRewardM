Ext.define('ianMizi.view.Master.FloatPanel_BusinessTypeList', {

});

var _FloatPanel_BusinessTypeList;


var isFloatPanel_BusinessTypeListOpen = 'N';











function FloatPanel_BusinessTypeList() {

    _FloatPanel_BusinessTypeList =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 485,
         width: '95%',
         id: 'LoadingFloatPanel_BusinessTypeListID',
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
                             _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         } if (e.direction == "right") {
                             _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                         }
                         isFloatPanel_BusinessTypeListOpen = 'N';
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
                    
                     id: 'containerFloatPanel_BusinessTypeListHeader',
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
                                              id: 'btnFloatPanel_BusinessTypeListBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_BusinessTypeListOpen = 'N';

                                              }
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              html: '<font size=2 color=white><b>Business List Type</b></font>'
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
                id: 'FloatPanel_BusinessTypeListBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 405,
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
                        store: 'BusinessTypeLoadStore',
                        id: 'FloatPanel_BusinessTypeListLoadAllStoreID',
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

                            '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:77.5%;"><b>{BusinessType}</b></div>' +

                             //edit only/ '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +


                     // '<div style="overflow:auto;width:100%;height:100%;font-size: 65%;margin:0px 0px 0px -10px"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:67.5%;"><b>{ReceiptName}</b><br><font size=1>Upload Date:{CreatedDate}</font></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:17%"><b>{Amount}</b></div></div><div style="float:right;width:5%;margin:-45px 35px 0px 0px"><button class="buttonssDelete button14" OnClick="DeleteReceiptImageFromList({ID})"><img src="resources/icons/UogradeAutismeIcon/deletedustbin.png" height="30" width="30"></button></div><div style="float:right;width:5%;margin:-45px 0px 0px 0px"><button class="buttonssDelete button14" OnClick="MovementClaimReceiptImageParkingShowEdit({ID});"><img src="resources/icons/editresititem.png" height="30" width="30"></button></div>' +

                                   '</div>',

                        width: '100%',
                        height: 400,
                        disableSelection: true,

                        listeners: {


                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {
                                var BusinessType = record.get('BusinessType');
                                document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value = BusinessType;
                                if (isFloatPanel_BusinessTypeListOpen == 'Y') {
                                    _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                        type: 'popOut',
                                        easing: 'easeInOut',
                                        duration: 250,

                                    }));

                                }
                                isFloatPanel_BusinessTypeListOpen = 'N';

                            },

                            itemsingletap: function (dataview, index, target, record, e, eOpts) {
                                var BusinessType = record.get('BusinessType');
                                document.getElementById('input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_BusinessType').value = BusinessType;
                                if (isFloatPanel_BusinessTypeListOpen == 'Y') {
                                    _FloatPanel_BusinessTypeList.hide(Ext.fx.Animation({
                                        type: 'popOut',
                                        easing: 'easeInOut',
                                        duration: 250,

                                    }));

                                }
                                isFloatPanel_BusinessTypeListOpen = 'N';
                                //var ReceiptImg = (record.get('ID'));
                                //MovementClaimReceiptImageShow(ReceiptImg);
                            }
                        }





                    },


                ]


            },





                    {
                        xtype: 'container',
                        style: ' background-color:transparent;',
                        //  height: 30,
                      //  hidden: true,
                        width: '100%',
                        margin: '0 0 0 0',
                        layout: {
                            type: 'hbox',
                            pack: 'left',
                            align: 'left'
                        },
                        items: [
                           {
                               // xtype: 'label',
                               //  hidden: true,
                               margin: '7 0 0 5',
                               id: 'imgSearchFloatPanel_BusinessTypeListListPanel',
                               html: '<img src="resources/icons/searchWhiteTwo.png" style="width: 20px; height: 20px;" />'
                           },
                {
                    id: 'SearchFloatPanel_BusinessTypeListListPanel_SearchTxt',
                    margin: '4 0 0 0',
                    width: '100%',
                    html: '<input type="text" id="input-FloatPanel_BusinessTypeList_SearchTxt" placeholder="Search" style="border-color:white;color:white;width:90%;text-align: left;font-size:12px;">'
                },


                        ]

                    },



             ]




         }







     });
    return _FloatPanel_BusinessTypeList;





}
var _DataStore_BusinessTypeList;
function FloatPanel_BusinessTypeListShow() {

    Ext.Viewport.remove(_FloatPanel_BusinessTypeList);
    this.overlay = Ext.Viewport.add(FloatPanel_BusinessTypeList());
    this.overlay.show();
    isFloatPanel_BusinessTypeListOpen = 'Y';
    document.getElementById("input-FloatPanel_BusinessTypeList_SearchTxt").addEventListener("keyup", SearchBusinessTypeListOnKeyUp);
    _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();
}


function FloatPanel_BusinessTypeListHide() {
    _FloatPanel_BusinessTypeList.hide(); isFloatPanel_BusinessTypeListOpen = 'N';
}








function SearchBusinessTypeListOnKeyUp() {






    console.log('SearchBusinessTypeListOnKeyUp');
    var countEnterprise = 0;


    _DataStore_BusinessTypeList.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_BusinessTypeList_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_BusinessTypeList.filterBy(function (record) {
            if (thisRegEx.test(record.get('BusinessType'))) {
                console.log('ada0');

                //countEnterprise = _DataStore_BusinessTypeList.getCount();
                //Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        //countEnterprise = _DataStore_BusinessTypeList.getCount();

        //Ext.getCmp('htmlEnterpriseListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_BusinessTypeList.clearFilter();
        return false;
    }




}
