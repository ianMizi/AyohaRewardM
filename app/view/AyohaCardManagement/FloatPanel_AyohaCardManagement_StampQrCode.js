Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_StampQrCode', {

});







var _FloatPanel_AyohaCardManagement_StampQrCode;

function FloatPanel_AyohaCardManagement_StampQrCode() {

    _FloatPanel_AyohaCardManagement_StampQrCode = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_StampQrCodeID',
            xtype: 'panel',
            zIndex: 350,
            xtype: 'container',
            //height: 475,
            height: 375,
            //  height: '60%',
            width: '95%',
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
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                items: [


                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        hidden:true,
                        margin: '20 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {

                                id: 'SubscriberAddNewQrCodeImg',
                                width: 80,
                                height: 80,
                                margin: '-80 0 0 0',
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/latestStampcardPurple.png" width="80" height="80" alt="Company Name"></div>',

                            },
                            {
                                html: '<font size=2 color=white><b>QR Code Stamp</b></font>'
                            }
                        ]
                    },

                      {
                          xtype: 'container',
                          id: 'containerFloatPanel_AyohaCardManagement_StampQrCodeLoading',
                          width: '100%',
                          height: 360,
                          //hidden:true,
                          // style: "background-color: transparent",
                          //style: "background-color: #F35B57;",
                          style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center'

                          },

                      },

                     {
                         id: 'htmlFloatPanel_AyohaCardManagement_StampQrCode',
                         hidden:true,
                         margin: '0 0 0 0',
                         //  margin: '-100 0 0 20',
                         width: '100%',
                         height: 360,
                         // height: '100%',
                         html: '<img src="null" style="width: 100%; height: 100%; border:1px solid white;" />',
                     },

                          {
                              margin: '10 0 0 0',
                              hidden: true,
                              id: 'FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt',
                             // html: '<div ><font size=2 color=white><b>*Show This Qr Code to Merchendiser and get card stamped!.</b></font></div>'
                              html: '<div style="width:100%;color:white;vertical-align: middle; text-align:center;font-size: 12px;">*Show This Qr Code to Merchendiser and get card stamped!.</div>',
                          },
                           {
                               margin: '-5 0 0 0',
                               hidden: true,
                               id: 'FloatPanel_AyohaCardManagement_StampQrCode_CountClose',
                                html: '<font size=6 color=white><b>0</b></font>'
                           },
                           {
                               xtype: 'button',
                               //  align: 'stretch',
                               id: 'TestScan',
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
                               text: '<button class="button3">Test Scan</button>',

                               handler: function () {
                                    Scan_QRCode_StampCard();
                                   //FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();
                                   //FloatPanel_AyohaCardManagement_StampQrCodeHide();
                               //    Swal.fire({
 
                               //        width: 0,
                               //        padding: 0,
                               //        title: 'Congrulation!',
                               //        backdrop:'rgba(0,0,123,0.4) url("https://sweetalert2.github.io/images/nyan-cat.gif") center top no-repeat'

                               //})


                               },


                           },
                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_StampQrCode;
}



function FloatPanel_AyohaCardManagement_StampQrCodeShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_StampQrCode);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_StampQrCode());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_StampQrCodeHide = 'Y';
    Load_FloatPanel_AyohaCardManagement_StampQrCode_TemporaryStampQrCodeGenerateTempQrCodeStore();
    
}
var is_FloatPanel_AyohaCardManagement_StampQrCodeHide = 'N';

function FloatPanel_AyohaCardManagement_StampQrCodeHide() {
    clearInterval(CloseTimerQrCodeInterval);
    if (is_FloatPanel_AyohaCardManagement_StampQrCodeHide == 'Y') {
        _FloatPanel_AyohaCardManagement_StampQrCode.hide();
        is_FloatPanel_AyohaCardManagement_StampQrCodeHide = 'N';
    }

}


function Load_FloatPanel_AyohaCardManagement_StampQrCode_TemporaryStampQrCodeGenerateTempQrCodeStore() {
    Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore').getProxy().setExtraParams({
        StampCampaignCode: GetCurrStampCampaignCode(),
        EnterpriseAccNo:GetEnterpriseHQAccNo(),
        SubscriberAccNo:GetCurrAyohaUserAccountNo()
    });

    Ext.StoreMgr.get('TemporaryStampQrCodeGenerateTempQrCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore').getProxy().setExtraParams({
            StampCampaignCode: GetCurrStampCampaignCode(),
            EnterpriseAccNo: GetEnterpriseHQAccNo(),
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });

        Ext.StoreMgr.get('TemporaryStampQrCodeGenerateTempQrCodeStore').load();
        var myStore = Ext.getStore('TemporaryStampQrCodeGenerateTempQrCodeStore');
        count = myStore.getCount();

        if (count >= 1) {
            var modelRecord = myStore.getAt(0);
            FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCode(modelRecord.get('TempStampQrCode'));
           

          
        } else {

        }
    });
    task.delay(1000);
}






function FloatPanel_AyohaCardManagement_StampQrCode_CreateQrCode(TmpQrCodeTxt) {
    //var billIDs = (getUrlParameter('BillID')); // "1234"
    //var templatecodes = (getUrlParameter('TemplateCode')); // "edit"
    //   var srcUrl = 'https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';
    console.log(TmpQrCodeTxt);
    localStorage.setItem('CurrStampCardQrCode', TmpQrCodeTxt);
   



    jQuery('#qrcodeCanvas').qrcode({
        //text: "http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
        //text: 'http://42.1.63.57/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
        text: TmpQrCodeTxt
    });

    var can = document.getElementsByTagName("canvas");
    var src = can[0].toDataURL("image/png");
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_StampQrCode').setHtml('<img src="' + src + '" style="width: 100%; height: 365px; border:1px solid white;" />');
    src = "";
    Ext.getCmp('containerFloatPanel_AyohaCardManagement_StampQrCodeLoading').setHidden(true);
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_StampQrCode').setHidden(false);
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_MsgTxt').setHidden(false);
    Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_CountClose').setHidden(true);
    
    
   //// FloatPanel_AyohaCardManagement_StampQrCode_CloseTimerQrCode();
   
}

var CloseTimerQrCodeInterval;
function FloatPanel_AyohaCardManagement_StampQrCode_CloseTimerQrCode() {
    var interval = parseInt(1000);
    var i = 0;
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    CloseTimerQrCodeInterval = setInterval(function () {
        i++;
        console.log(i);
        Ext.getCmp('FloatPanel_AyohaCardManagement_StampQrCode_CountClose').setHtml('<font size=6 color=white><b>'+i+'</b></font>')

        if (i == 20) {
            
            FloatPanel_AyohaCardManagement_StampQrCodeHide();
        }
       
    }, interval);

}