Ext.define('ianMizi.view.Subscriber.FloatPanel_SubscriberMenu', {

});







var _FloatPanel_SubscriberMenu;

function FloatPanel_SubscriberMenu() {

    _FloatPanel_SubscriberMenu = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_SubscriberMenuID',
            xtype: 'panel',
            height: 1,
            width: 1,
            zIndex: 100,
            // draggable: true,
            bottom: 90,
            // center: true,
            modal: false,
            right: 44,
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
                margin: '-11 0 0 -20',
              //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',

                style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px 50px 50px 50px;',

                height: 35,
                width: 150,





                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                height: 60,
                width: 60,
                items: [
                          {

                              xtype: 'button',
                              id: 'btnFloatPanel_SubscriberMenu_Show',
                              margin: '-3 0 0 -5',
                              height: 70,
                              width: 70,
                              html: '<img src="resources/icons/MenuPetakWhite.png" width="30" height="30" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {
                                  FloatPanel_AddSubscriberMenuShow();
                              }
                          },
                          

                ]






            }




        });

    return _FloatPanel_SubscriberMenu;
}



function FloatPanel_SubscriberMenuShow() {
    Ext.Viewport.remove(_FloatPanel_SubscriberMenu);
    this.overlay = Ext.Viewport.add(FloatPanel_SubscriberMenu());
    this.overlay.show();
    is_FloatPanel_SubscriberMenuHide = 'Y';
}
var is_FloatPanel_SubscriberMenuHide = 'N';

function FloatPanel_SubscriberMenuHide() {
    if (is_FloatPanel_SubscriberMenuHide == 'Y') {
        _FloatPanel_SubscriberMenu.hide();
        is_FloatPanel_SubscriberMenuHide = 'N';
    }

}

