Ext.define('ianMizi.view.QrCodeScanner.FloatPanel_QrCodeScanner_ScanLoyaltyStampCard', {

});






let scanner;
var _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard;

function FloatPanel_QrCodeScanner_ScanLoyaltyStampCard() {

    _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_QrCodeScanner_ScanLoyaltyStampCardID',
            // xtype: 'panel',
            //zIndex: 400,
            xtype: 'container',
            //height: 475,
            height:'50%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
           // hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },
            style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
         //   style: ' background-color:transparent;',

            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

            items: {
                //zIndex: 40,
                xtype: 'container',
                height: '100%',
                //  height: '60%',
                width: '100%',
               // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_QrCodeScanner_ScanLoyaltyStampCard',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                //width: '100%',
                //height: '100%',
                //  margin:'-10 0 0 -7',
                items: [


                    {

                        xtype: 'container',
                        width: '100%',
                        docked:'top',
                        // width: 40,

                        //  title: '<font size="3" color="white">Live Tracking Map</font>',
                        //hidden: true,

                        id: 'containerFloatPanel_QrCodeScanner_ScanLoyaltyStampCardHeader',
                        style: {
                            // background: '#D25959',
                            background: 'transparent',
                            // border: '2px'
                        },
                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'center',
                        },




                        // hidden:true,
                        items:
                               [


                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_QrCodeScanner_ScanLoyaltyStampCardBack',
                                                 height: 30,
                                                 width: 35,
                                                 margin: '-45 0 0 0',
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     scanner.stop();
                                                     FloatPanel_QrCodeScanner_CenterLineMessageHide();
                                                     _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'left',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                   
                                                 }
                                             },
                                            
                                              {
                                                  xtype: 'spacer',
                                                  width:80

                                              },
                                              {
                                                  xtype: 'container',
                                                //  width: '100%',
                                                
                                                  style: {
                                                      // background: '#D25959',
                                                      background: 'transparent',
                                                      // border: '2px'
                                                  },
                                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center',
                                                  },
                                                  items:[
                                                      {

                                                          xtype: 'image',
                                                          src: 'resources/icons/scanQRcodeGrey.png',
                                                          width: 55,
                                                          height: 55,
                                                          margin: '0 0 0 0'
                                                      },
                    {
                        html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px" ><u>Scan Ayoha Reward Card</u></div>',
                    },

                                                  ]

                                              },

                                               
                            









                               ]

                    },

                   //{
                   //    width: '100%',
                   //    html: '<div style="color:white;text-align: center;border:3px solid white;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;width:100%;" ></div>',
                   //    zIndex:300,
                   //},

                     {
                         //height: '100%',
                         ////  height: '60%',
                         //width: '100%',
                         ////xtype: 'button',
                         //ui: 'plain',
                       
                         margin: '-40 0 0 0',
                         //id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                         //badgeText: "2",
                         html: ' <video id="preview" style="width:100%;height:100%;"></video>',
                         //handler: function () {

                         ////    FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide();

                         //},

                     },
                    
                     {

                         xtype: 'container',
                         width: '100%',
                         // width: 40,
                         docked: 'bottom',
                         height: 40,
                         //  title: '<font size="3" color="white">Live Tracking Map</font>',
                         //hidden: true,

                       //  id: 'containerMyAccount_Dashboard_MenuBottom',
                         style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                         //style: {
                         //    // background: '#D25959',
                         //    background: 'transparent',
                         //    // border: '2px'
                         //},
                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                         // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center',
                         },
                         items: [

                              {
                                  html: '<div style="color:white;text-align: center;font-size:11px;width:100%;font-weight:normal;margin:0px 0px 0px 0px" >Place a QR Code inside the scan area</div>',
                                  margin: '-30 0 0 0',
                              },
                              {
                                  xtype: 'button',
                                  id: 'btnloatPanel_QrCodeScanner_ScanLoyaltyStampCard_ReadQrCodeFromGallery',
                                  //  badgeText: '1',
                                  margin: '20 0 0 0',

                                  //height: 36,
                                  width: '100%',
                                  html: '<div style="color:grey;text-align: center;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px" >Read QR Code From Gallery</div>',
                                  ui: 'plain',
                                  handler: function () {
                                     
                                  }
                              },
                         ]

                     },




                ]

            },






        });

    return _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard;
}

var QRCodeResult;

function FloatPanel_QrCodeScanner_ScanLoyaltyStampCardShow() {
    QRCodeResult = "";
    Ext.Viewport.remove(_FloatPanel_QrCodeScanner_ScanLoyaltyStampCard);
    this.overlay = Ext.Viewport.add(FloatPanel_QrCodeScanner_ScanLoyaltyStampCard());
    this.overlay.show();
    FloatPanel_QrCodeScanner_CenterLineMessageShow();
    is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide = 'Y';

    //var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_QrCodeScanner_ScanLoyaltyStampCard]')[0];
    //var containerViewEl = containerView.element;
    //containerViewEl.on('singletap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide();
    //  }
    //);
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide();
    //});
    //task.delay(2000);

    scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
    scanner.addListener('scan', function (content) {
        //alert(content);
         QRCodeResult = content;
          Ext.getCmp('FloatPanel_QrCodeScanner_CenterLineMessageID').setStyle('background-color:black;');
          Ext.getCmp('FloatPanel_QrCodeScanner_RedCenterLine').setHidden(true);
          Ext.getCmp('FloatPanel_QrCodeScanner_ProcessImage').setHidden(false);
          Ext.getCmp('FloatPanel_QrCodeScanner_ProcessLbl').setHidden(false);
          Scan_QRCode_VerifyQRCode(QRCodeResult);
       // Scan_QRCode_StampCard(content);

    });
    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });


}
var is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide = 'N';

function FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide() {
    scanner.stop();  
    FloatPanel_QrCodeScanner_CenterLineMessageHide();
    if (is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide == 'Y') {
        _FloatPanel_QrCodeScanner_ScanLoyaltyStampCard.hide();
        is_FloatPanel_QrCodeScanner_ScanLoyaltyStampCardHide = 'N';
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}







