Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_AdvertisementButton', {

});







var _FloatPanel_AyohaCardManagement_AdvertisementButton;

function FloatPanel_AyohaCardManagement_AdvertisementButton() {

    _FloatPanel_AyohaCardManagement_AdvertisementButton = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_AdvertisementButtonID',
            xtype: 'panel',
            height: 1,
            width: 1,
            zIndex: 300,
           // draggable: true,
            bottom: 145,
            // center: true,
            modal: false,
            right: 140,
            showAnimation: {
                type: 'popIn',
                duration: 150,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: null,
                duration: null,
                easing: null

            },
            style: 'background-color: transparent;',

            items: {


                xtype: 'container',
                name: 'namecontainerFloatPanel_AyohaCardManagement_AdvertisementButton',
                style: 'background-color: transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                items:[

                    {
                      //  xtype: 'button',
                        id: 'btnFloatPanel_AyohaCardManagement_AdvertisementButton_Show',
                        // margin: '-180 0 0 -140',
                      
                    //   margin: '-3 0 0 -55',
                        //height: 140,
                        //width:140,
                        html: '<div><img src="resources/icons/SaleThree.gif" width="150" height="150" alt="Company Name"></div>',
                        //  html: '<img src="resources/icons/SaleThree.gif" width="250" height="250" alt="Company Name">',
                        //ui: 'plain',
                        //handler: function () {
                        //    FloatPanel_AyohaCardManagement_AdvertisementButtonFormShow();
                        //}
                    }
                ]

                
           






            }




        });

    return _FloatPanel_AyohaCardManagement_AdvertisementButton;
}



function FloatPanel_AyohaCardManagement_AdvertisementButtonShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_AdvertisementButton);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_AdvertisementButton());
    this.overlay.show();
    isFloatPanel_AyohaCardManagement_AdvertisementButtonHide = 'Y';

    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaCardManagement_AdvertisementButton]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaCardManagement_AdvertisementButton_Advertisement();
      }
    );
}
var isFloatPanel_AyohaCardManagement_AdvertisementButtonHide = 'N';

function FloatPanel_AyohaCardManagement_AdvertisementButtonHide() {
    if (isFloatPanel_AyohaCardManagement_AdvertisementButtonHide == 'Y') {
        _FloatPanel_AyohaCardManagement_AdvertisementButton.hide();
        isFloatPanel_AyohaCardManagement_AdvertisementButtonHide = 'N';
    }

}

function FloatPanel_AyohaCardManagement_AdvertisementButton_Advertisement() {
    
    FloatPanel_PreviewAdvertisementShow("FloatPanel_AyohaCardManagement_AdvertisementButton");
}
