Ext.define('ianMizi.view.FloatPanel.LoadingCustomMsg', {
});









var _LoadingCustomMsg;

function LoadingCustomMsg() {
    _LoadingCustomMsg =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 200,
          width: 200,
          id: 'LoadingCustomMsgID',
          draggable: false,



          centered: true,
          //bottom: 64,
          zIndex: 500,
          modal: true,
          hideOnMaskTap: false,
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
          //style: 'border-bottom:1px solid;background-color:#353839;',
          style: 'border-bottom:1px solid;background-color:white;',
          items: {




              //  margin:'-50 0 0 0',
              //height: 150,
              //width: 200,
              xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
              style: 'border-bottom:0px solid;background-color:white;',
              layout: {
                  type: 'vbox',
                  pack: 'center',
                  align: 'center'

              },

              items: [
                    {
                        //xtype: 'button',
                        //align: 'stretch',
                        ////align: 'left',
                        //width: 85,
                        //height: 85,
                        id: 'LoadingCustomMsgImg',
                        //ui: 'plain',

                        //  padding: '5px',
                        html: '<font size=3px color=white><u><center><b>Verification Code</b></center></u></font>',
                        //handler: function () {


                        //},


                    },
                     {
                         xtype: 'label',
                         // align: 'stretch',
                         //align: 'left',
                         labelWrap: true,
                         id: 'txtLoadingCustomMsg',
                         // ui: 'plain',

                         //  padding: '5px',
                         html: '<font size=3px color=white><center>?</center></font>',


                     },
                
            {
                xtype: 'container',
                style: 'border-bottom:0px solid;background-color:#353839;',
                id: 'LoadingCustomMsgConfirmCancelPanel',
                hidden:true,
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [

                    

                       {
                           xtype: 'button',
                           align: 'stretch',
                           //align: 'left',
                           hidden: true,
                           id: 'btnLoadingCustomMsgCancel',
                           ui: 'decline',
                           margin: '5 0 0 0',
                           padding: '7px',
                           text: '<font size=3px color=white><center><b>Cancel</b></center></font>',
                           handler: function () {
                               Ext.getCmp('CR_PhoneNumber').focus(true, 200);
                               _LoadingCustomMsg.hide();
                           },


                       },
                       {
                           xtype: 'button',
                           align: 'stretch',
                           //align: 'left',
                           hidden: true,
                           id: 'btnLoadingCustomMsgConfirm',
                           ui: 'confirm',
                           margin: '5 0 0 0',
                           padding: '7px',
                           text: '<font size=3px color=white><center><b>Confirm</b></center></font>',
                           handler: function () {
                               var CR_MykadNo;
                               CR_MykadNo = Ext.getCmp('CR_MykadNo').getValue();
                               checkMyKadNo(CR_MykadNo);
                           },


                       },

                ]
            },





              
                 {
                     xtype: 'button',
                     align: 'stretch',
                     //align: 'left',
                     
                     id: 'btnLoadingCustomMsgOK',
                     ui: 'decline',
                     margin: '5 0 0 0',
                     padding: '7px',
                     text: '<font size=3px color=white><center><b>OK</b></center></font>',
                     handler: function () {

                         _LoadingCustomMsg.hide();
                     },


                 },
                  //{

                  //    xtype: 'container',
                  //    style: 'border-bottom:1px solid;background-color:black;',
                  //    layout: {
                  //        type: 'hbox',
                  //        pack: 'center',

                  //    },
                  //    items: [










                  //        {
                  //         xtype: 'button',
                  //         //   align: 'stretch',
                  //         height: 32,
                  //         width: 92,
                  //         id: 'btnLoadingRegistration',
                  //         ui: 'plain',
                  //         html: '<font size="4" color="white">Loading....</font>',
                  //     }

                  //    ]

                  //},








              ]




          }







      });
    return _LoadingCustomMsg;
}



function LoadingCustomMsgHide() {
    _LoadingCustomMsg.hide();
    routeLoadingCustomMsgIsOpen = 'N';
}



function LoadingCustomMsgShow(Msg,type) {
    Ext.Viewport.remove(_LoadingCustomMsg);
    this.overlay = Ext.Viewport.add(LoadingCustomMsg()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeLoadingCustomMsgIsOpen = 'Y';
   // console.log(type);
    if (type == '1')
    {
        Ext.getCmp('LoadingCustomMsgImg').setHtml('<img src="resources/icons/error.gif" style="width: 75px; height: 75px;" />');
        Ext.getCmp('txtLoadingCustomMsg').setHtml('<font size=3px color=black><center><b>' + Msg + '</b></center></font>');
        return
    }
   
    if (type == '2') {
        Ext.getCmp('LoadingCustomMsgImg').setHtml('<img src="resources/icons/error.gif" style="width: 75px; height: 75px;" />');
        Ext.getCmp('txtLoadingCustomMsg').setHtml('<font size=3px color=black><center><b>' + Msg + '</b></center></font>');
        Ext.getCmp('btnLoadingCustomMsgOK').setHidden(false);
        return
    }
    //succes
    if (type == '3') {
        Ext.getCmp('LoadingCustomMsgImg').setHtml('<img src="resources/icons/check-circle.gif" style="width: 75px; height: 75px;" />');
        Ext.getCmp('txtLoadingCustomMsg').setHtml('<font size=3px color=black><center><b>' + Msg + '</b></center></font>');
        return
    }
    if (type == '4') {
        Ext.getCmp('LoadingCustomMsgImg').setHtml('<img src="resources/icons/25.gif" style="width: 75px; height: 75px;" />');
        Ext.getCmp('txtLoadingCustomMsg').setHtml('<font size=4px color=black><center><b>' + Msg + '</b></center></font>');
        Ext.getCmp('btnLoadingCustomMsgOK').setHidden(true);
        return
     
    } if (type == '5') {
        Ext.getCmp('LoadingCustomMsgImg').setHtml('<img src="resources/icons/error.gif" style="width: 75px; height: 75px;" />');
        Ext.getCmp('txtLoadingCustomMsg').setHtml('<font size=4px color=black><center><b>' + Msg + '</b></center></font>');
        Ext.getCmp('btnLoadingCustomMsgOK').setHidden(true);
        Ext.getCmp('btnLoadingCustomMsgConfirm').setHidden(false);
        Ext.getCmp('btnLoadingCustomMsgCancel').setHidden(false);
        Ext.getCmp('LoadingCustomMsgConfirmCancelPanel').setHidden(false);
        Ext.getCmp('LoadingCustomMsgID').setHeight(300);
        Ext.getCmp('LoadingCustomMsgID').setWidth(220);
        return

    }
}