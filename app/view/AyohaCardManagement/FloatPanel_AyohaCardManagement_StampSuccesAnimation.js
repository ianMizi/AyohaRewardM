Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_StampSuccesAnimation', {

});







var _FloatPanel_AyohaCardManagement_StampSuccesAnimation;

function FloatPanel_AyohaCardManagement_StampSuccesAnimation() {

    _FloatPanel_AyohaCardManagement_StampSuccesAnimation = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_StampSuccesAnimationID',
           // xtype: 'panel',
            zIndex: 400,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width:'100%',
            draggable: false,

            styleHtmlContent: true,

         //  centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            hideOnMaskTap: true,
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

           //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
          style: ' background-color:transparent;',

          //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

            items: {
                //zIndex: 40,
                xtype: 'container',
                style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_AyohaCardManagement_StampSuccesAnimation',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
              //  margin:'-10 0 0 -7',
                items: [


                    {
                        height: 250,
                        width: 250,
                        xtype: 'button',
                        ui: 'plain',
                        //margin: '0 0 0 0',
                        //id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                        //badgeText: "2",
                        html: '<img src="resources/icons/StampSuccessBoxPresent.gif" style="width:240px;height:240px" alt="Company Name">',
                        handler: function () {

                            FloatPanel_AyohaCardManagement_StampSuccesAnimationHide();

                        },

                    },

                        {
                            xtype: 'button',
                            //  align: 'stretch',
                           // hidden:true,
                            id: 'btnFloatPanel_AyohaCardManagement_StampSuccesAnimation_Success',
                            ui: 'plain',
                            width: '100%',
                            height: 50,
                            margin: '-25 0 0 0',
                            // width: '80%',
                            //style: {
                            //    background: '#FA8072',
                            //},
                            // padding: '10px',
                            html: '<font size=5px color=white><center><b>Stamp Card Success!!</b></center></font>',
                           // text: '<button class="button3">OK</button>',

                            handler: function () {
                              
                                FloatPanel_AyohaCardManagement_StampSuccesAnimationHide();

                            },


                        },

                    

                        
                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_StampSuccesAnimation;
}



function FloatPanel_AyohaCardManagement_StampSuccesAnimationShow() {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_StampSuccesAnimation);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_StampSuccesAnimation());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_StampSuccesAnimationHide = 'Y';

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_AyohaCardManagement_StampSuccesAnimation]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('singletap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaCardManagement_StampSuccesAnimationHide();
      }
    );
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    FloatPanel_AyohaCardManagement_StampSuccesAnimationHide();
    //});
    //task.delay(2000);
   

}
var is_FloatPanel_AyohaCardManagement_StampSuccesAnimationHide = 'N';

function FloatPanel_AyohaCardManagement_StampSuccesAnimationHide() {
  
    if (is_FloatPanel_AyohaCardManagement_StampSuccesAnimationHide == 'Y') {
        _FloatPanel_AyohaCardManagement_StampSuccesAnimation.hide();
        is_FloatPanel_AyohaCardManagement_StampSuccesAnimationHide = 'N';
       // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}







