Ext.define('ianMizi.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard_ContentNote', {

});



var _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote;

function FloatPanel_AyohaCardManagement_PreviewCard_ContentNote() {

    _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote = Ext.create('Ext.Panel',


        {
            id: 'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteID',
            xtype: 'panel',
            zIndex: 300,
            xtype: 'container',
            height: 340,
            //  height: '60%',
            width: '90%',
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
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                items: [


{

    xtype: 'container',
    width: '100%',
    docked: 'top',
    // width: 40,

    //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //hidden: true,

    id: 'containerFloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHeader',
    style: {
        // background: '#D25959',
        background: 'transparent',
        // border: '2px'
    },
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
                             id: 'btnFloatPanel_AyohaCardManagement_PreviewCard_ContentNoteBack',
                             height: 30,
                             width: 35,
                             // iconCls: 'list',
                             html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {

                                 _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide(Ext.fx.Animation({
                                     type: 'slideOut',
                                     direction: 'left',
                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                     duration: 250

                                 }));
                                 is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';
                             }
                         },
                         {
                             margin: '0 0 0 0',
                             html: '<font size=2 color=white><b>Card Content Note</b></font>'
                         },
                          {
                              xtype: 'spacer',

                          },



                                  
                               









           ]

},




                    {
                        xtype: 'container',
                        style: ' background-color:transparent',
                        margin: '10 0 0 0',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {

                                id: 'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteImg',
                                //width: 250,
                                //height: 250,
                                //// iconCls: 'list',
                                html: '<div ><img src="resources/icons/addNewCard.png" width="50" height="50" alt="Company Name"></div>',

                            },
                           
                        ]
                    },

                     {
                         margin: '10 0 0 0',
                         id:'FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteTxt',
                         html: '<font size=2 color=white>Note</font>',

                     },

                    


                ]

            },






        });

    return _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote;
}



function FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(ContentNotes,TextNote) {
    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_PreviewCard_ContentNote);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_PreviewCard_ContentNote());
    this.overlay.show();
    is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'Y';
    console.log(ContentNotes);



    //replace(70px - div height width
    //replece(35px) - font sixe
    //replace (50px) - radius
    //replace (23px) - 1st tex
    //replace (-20px) - 2nd text
    var width = ContentNotes.replace("width:70px", "width:170px");
    var whreplace = width.replace("height:70px", "height:170px");
    var fontsize=whreplace.replace("35px","85px");
    var radius = fontsize.replace("50px", "350px");

    var str = radius;
    var n = str.includes("font size=2");

    var Firsttext;
    if (n) {
         Firsttext = radius.replace("23px", "0px");
    } else
    {
        Firsttext = radius.replace("23px", "22px");
    }



    
    var Secondtext = Firsttext.replace("-20px", "-210px");
    var Final = Secondtext.replace("size=2", "size=8");
   // var htmlcontent = '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">1</div></div>';
    Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteImg').setHtml(Final);
    Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteTxt').setHtml("<font size=4 color=white>" + TextNote + "</font>")
    

}
var is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';

function FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide() {
    if (is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide == 'Y') {
        _FloatPanel_AyohaCardManagement_PreviewCard_ContentNote.hide();
        is_FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteHide = 'N';
    }

}



