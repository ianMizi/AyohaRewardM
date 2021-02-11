Ext.define('ianMizi.view.Subscriber.FloatPanel_SubscriberAddNewQrCode', {

});







var _FloatPanel_SubscriberAddNewQrCode;

function FloatPanel_SubscriberAddNewQrCode() {

    _FloatPanel_SubscriberAddNewQrCode = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_SubscriberAddNewQrCodeID',
            xtype: 'panel',
            zIndex: 150,
            xtype: 'container',
            height: 475,
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
                        margin: '-20 0 0 0',
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {

                                id: 'SubscriberAddNewQrCodeImg',
                                width: 50,
                                height: 50,
                                // iconCls: 'list',
                                html: '<div ><img src="resources/icons/AddCustomerWhite.png" width="50" height="50" alt="Company Name"></div>',

                            },
                            {
                                html: '<font size=2 color=white><b>Add New Customer</b></font>'
                            }
                        ]
                    },

                     

                     {
                         id: 'htmlFloatPanel_SubscriberAddNewQrCode',
                         margin: '5 0 0 0',
                       //  margin: '-100 0 0 20',
                         width: '100%',
                        // height: '100%',
                         html: '<img src="null" style="width: 100%; height: 100%; border:1px solid white;" />',
                     },
              
                          {
                              margin: '5 0 0 0',
                              html: '<div class="blink_me"><font size=2 color=white><b>*Please Request Customer to Scan this QR Code.</b></font></div>'
                          }

                ]

            },






        });

    return _FloatPanel_SubscriberAddNewQrCode;
}



function FloatPanel_SubscriberAddNewQrCodeShow() {
    Ext.Viewport.remove(_FloatPanel_SubscriberAddNewQrCode);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberAddNewQrCode());
    this.overlay.show();
    is_FloatPanel_SubscriberAddNewQrCodeHide = 'Y';
    FloatPanel_SubscriberAddNew_CreateQrCode();
}
var is_FloatPanel_SubscriberAddNewQrCodeHide = 'N';

function FloatPanel_SubscriberAddNewQrCodeHide() {
    if (is_FloatPanel_SubscriberAddNewQrCodeHide == 'Y') {
        _FloatPanel_SubscriberAddNewQrCode.hide();
        is_FloatPanel_SubscriberAddNewQrCodeHide = 'N';
    }

}

function FloatPanel_SubscriberAddNew_CreateQrCode() {
    //var billIDs = (getUrlParameter('BillID')); // "1234"
    //var templatecodes = (getUrlParameter('TemplateCode')); // "edit"
    //   var srcUrl = 'https://www.isms.com.my/isms_send.php?un=ianMizi&pwd=P@55w0rd&dstno=' + PhoneNo + '&msg=' + message + '.&type=1&sendid=12345';


    





    jQuery('#qrcodeCanvas').qrcode({
        //text: "http://42.1.63.57/PrintLink/?BillID=' + billIDs + '&TemplateCode=' + templatecodes + '"
        //text: 'http://42.1.63.57/PrintLink/?BillID=' + 1 + '&TemplateCode=' + 1
        text: GetCurrentAccountNo()
    });

    var can = document.getElementsByTagName("canvas");
    var src = can[0].toDataURL("image/png");
    Ext.getCmp('htmlFloatPanel_SubscriberAddNewQrCode').setHtml('<img src="' + src + '" style="width: 100%; height: 100%; border:1px solid white;" />');
    src = "";
    // Ext.getCmp('htmlLoyaltyCardClientID').setHtml('<font size=2 color=black>ID:' + GetCurrentAccountNo() + '</font>');
    // Ext.getCmp('htmlPointLoyaltyCardLbl').setHtml('<font size=2 color=black>QR Code Point (' + GetCurrentAccountNo() + ')</font>');
    //console.log("QRCodeImg" + src);
    //localStorage.setItem('QRCodeImg', src);
}