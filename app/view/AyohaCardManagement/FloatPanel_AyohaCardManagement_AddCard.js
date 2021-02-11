Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_AddCard', {

});







var _FloatPanel_AyohaCardManagement_AddCard;

function FloatPanel_AyohaCardManagement_AddCard() {

    _FloatPanel_AyohaCardManagement_AddCard = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_AddCardID',
            xtype: 'panel',
            height: 1,
            width: 1,
            zIndex: 100,
            // draggable: true,
            bottom: 110,
            // center: true,
            modal: false,
            right: 50,
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
                              id: 'btnFloatPanel_AyohaCardManagement_AddCard_Show',
                              margin: '-3 0 0 -5',
                              height: 70,
                              width: 70,
                              html: '<img src="resources/icons/addNewCard.png" width="30" height="30" alt="Company Name">',
                            //  html: '<img src="resources/icons/SaleThree.gif" width="250" height="250" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {
                                  FloatPanel_AyohaCardManagement_AddCardFormShow();
                              }
                          },


                ]






            }




        });

    return _FloatPanel_AyohaCardManagement_AddCard;
}



function FloatPanel_AyohaCardManagement_AddCardShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_AddCard);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_AddCard());
    this.overlay.show();
    isFloatPanel_AyohaCardManagement_AddCardHide = 'Y';
}
var isFloatPanel_AyohaCardManagement_AddCardHide = 'N';

function FloatPanel_AyohaCardManagement_AddCardHide() {
    if (isFloatPanel_AyohaCardManagement_AddCardHide == 'Y') {
        _FloatPanel_AyohaCardManagement_AddCard.hide();
        isFloatPanel_AyohaCardManagement_AddCardHide = 'N';
    }

}

