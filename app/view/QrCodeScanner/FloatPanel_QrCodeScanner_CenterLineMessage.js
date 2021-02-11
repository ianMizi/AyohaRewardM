Ext.define('ianMizi.view.QrCodeScanner.FloatPanel_QrCodeScanner_CenterLineMessage', {

});






var _FloatPanel_QrCodeScanner_CenterLineMessage;

function FloatPanel_QrCodeScanner_CenterLineMessage() {

    _FloatPanel_QrCodeScanner_CenterLineMessage = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_QrCodeScanner_CenterLineMessageID',
            // xtype: 'panel',
            zIndex: 400,
            xtype: 'container',
            //height: 475,
            height: 1,
            //  height: '60%',
            width: 1,
            draggable: false,

           // styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
          //  modal: true,
            // hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'vbox',
                        pack: 'center',
                        align: 'center'
            },
            showAnimation: {
                type: 'popIn',
                duration: 50,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 50,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },
            style: 'background-color:red;',
            //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            //   style: ' background-color:transparent;',

            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

                items: [

                      {

                          xtype: 'image',
                          hidden: true,
                          id: 'FloatPanel_QrCodeScanner_ProcessImage',
                          src: 'resources/icons/whiteQRScanAnim.gif',
                          margin: '-95 0 0 -50',
                          width: 100,
                          height: 100,
                       
                      },
                     {
                         width: 300,
                         margin: '-3 0 0 -150',
                         hidden: true,
                         id: 'FloatPanel_QrCodeScanner_ProcessLbl',
                         html: '<div style="color:white;text-align: center;border:3px none red;font-size:12px;width:100%;font-weight:bold;width:100%;">Processing..</div>',

                     },

                   {
                       width: 300,
                       margin: '-3 0 0 -150',
                       id: 'FloatPanel_QrCodeScanner_RedCenterLine',
                     
                       html: '<div class="blink_me" style="color:white;text-align: center;border:3px solid red;font-size:12px;width:100%;font-weight:bold;width:100%;"></div>',
                      
                   },

                  



                ]

         




        });

    return _FloatPanel_QrCodeScanner_CenterLineMessage;
}



function FloatPanel_QrCodeScanner_CenterLineMessageShow() {
    Ext.Viewport.remove(_FloatPanel_QrCodeScanner_CenterLineMessage);
    this.overlay = Ext.Viewport.add(FloatPanel_QrCodeScanner_CenterLineMessage());
    this.overlay.show();
    is_FloatPanel_QrCodeScanner_CenterLineMessageHide = 'Y';


}
var is_FloatPanel_QrCodeScanner_CenterLineMessageHide = 'N';

function FloatPanel_QrCodeScanner_CenterLineMessageHide() {

    if (is_FloatPanel_QrCodeScanner_CenterLineMessageHide == 'Y') {
        _FloatPanel_QrCodeScanner_CenterLineMessage.hide();
        is_FloatPanel_QrCodeScanner_CenterLineMessageHide = 'N';
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}







