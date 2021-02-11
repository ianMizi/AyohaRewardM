Ext.define('ianMizi.view.FloatPanel.LoadingRegistration', {
});









var _LoadingRegistration;

function LoadingRegistration() {
    _LoadingRegistration =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 300,
          width: 200,
          id: 'LoadingRegistrationID',
          draggable: false,



          centered: true,
          //bottom: 64,
          zIndex: 40,
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
              style: 'border-bottom:1px solid;background-color:#D25959;',
          items: {




            //  margin:'-50 0 0 0',
              //height: 150,
              //width: 200,
              xtype: 'container',
              style: 'border-bottom:0px solid;background-color:#D25959;',

              layout: {
                  type: 'vbox',
                  pack: 'center',
               
              },

              items: [
                   {

                       xtype: 'toolbar',
                       title: '<div class="blink_me">Attentions</div>',
                       docked: 'top',
                       style: {
                           background: '#D25959',
                       },

                   },
                     {
                         xtype: 'label',
                        // align: 'stretch',
                         //align: 'left',
                         labelWrap: true,
                         id: 'txtregMykad',
                        // ui: 'plain',

                         //  padding: '5px',
                         html: '<font size=3px color=white><center>Because of we integrated with many system,ID is most important key to achive it.do provided us with valid ID for integration purpose</center></font>',
                       

                     },
                  {
                      xtype: 'button',
                      align: 'stretch',
                      //align: 'left',

                      id: 'txtreg',
                      ui: 'plain',

                    //  padding: '5px',
                      text: '<font size=3px color=white><u><center><b>MyKad/ID</b></center></u></font>',
                      handler: function () {

                     
                      },


                  },
               {

                   xtype: 'textfield',
                   //   label: 'MyKad/ID<br><font size="1" color="red">Important,Global ID for integration</font>',
                   //height: '10%',
                   //width: '60%',
                   id: 'CR_MykadNo',
                   required: true,
                   labelWrap: true,
                   disabled: false,
                   //   placeHolder: ''


               },


                 {
                     xtype: 'button',
                     align: 'stretch',
                     //align: 'left',

                     id: 'btnSendMyKad',
                     ui: 'decline',
                     margin:'5 0 0 0',
                     padding: '7px',
                     text: '<font size=3px color=white><center><b>Save</b></center></font>',
                     handler: function () {


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
    return _LoadingRegistration;
}



function LoadingRegistrationHide() {
    _LoadingRegistration.hide();
}



function LoadingRegistrationShow() {
    Ext.Viewport.remove(_LoadingRegistration);
    this.overlay = Ext.Viewport.add(LoadingRegistration()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();


}
