Ext.define('ianMizi.view.FloatPanel.ReceiptSearchResultCriteria', {
});




var _ReceiptSearchResultCriteria;

function ReceiptSearchResultCriteria() {
    _ReceiptSearchResultCriteria =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 256,
          width: '100%',
          id: 'ReceiptSearchResultCriteriaID',
          draggable: false,
          top:75,
         

          //centered: true,
          // bottom: 14,
          zIndex: 30,
         //modal: true,
          hideOnMaskTap: true,
          layout: {
              type: 'fit'
          },
          showAnimation: {
              type: 'popIn',
           //   direction: 'down',
              duration: 250,
//easing: 'ease-in'
          },
          hideAnimation: {
              type: 'popOut',
            //  direction: 'up',
              duration: 250,
            //  easing: 'ease-in'
          },
          style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
          //    style: 'border-bottom:1px solid;background-color:#D25959;',
          items: {



              
                  xtype: 'container',
                 
                  //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",
                 // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:1px solid;',
                  //   style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                  //style: {
                  //    backgroundImage: 'url(resources/icons/border7.png)',
                  //    backgroundRepeat: 'no-repeat',
                  //    //backgroundPosition: 'center'
                  //    backgroundSize: 'cover'
                  //},
                  height: 228,
              width:'100%',
                  layout: {
                      type: 'vbox'
                  },
                  items: [
               {
                //   xtype: 'label',
                   //  hidden: true,
                   id: 'lblSearchResultReceiptDateRange',
                   html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><th style="font-family:Arial, sans-serif;font-size:18px;font-weight:bold;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="3">Search Result Informations</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="3">Date Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="3">2017-12-20 Between 2017-12-30</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="3">Total Paid Range</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="3">RM 150.00 Between RM 250.00</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="3">Enterprise</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="3">TM,TNB,Sahajidah HAI-O,AEON</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="3">Descriptions:</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="3">Default</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top" colspan="3">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="3">Confirm,New,Void</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="3"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top">Total Amount</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top">Total Tax</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;vertical-align:top">Total Paid</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">RM 2000.00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">RM180.00</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">RM 2180.00</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="3"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:right;vertical-align:top" colspan="2">Cancel</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 8px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top">Print</td></tr></table>'
               },

                 //{
                 //    xtype: 'label',
                 //    id: 'lblSearchResultReceiptpaidRange',
                 //    // hidden:true,
                 //    margin: '0 0 0 0',
                 //    html: '<font size="2" color="black">Paid Range:</font>'
                 //},

    
                 // {
                 //     xtype: 'label',
                 //     id: 'lblSearchResultReceiptEnterprise',
                 //     margin: '0 0 0 0',
                 //     html: '<font size="2" color="black">Enterprise</font>'
                 // },
                 //  {
                 //      xtype: 'label',
                 //      id: 'lblSearchResultReceiptDescr',
                 //      margin: '0 0 0 0',
                 //      html: '<font size="2" color="black">Description</font>'
                 //  }, {
                 //      xtype: 'label',
                 //      id: 'lblSearchResultReceiptStatus',
                 //      margin: '0 0 0 0',
                 //      html: '<font size="2" color="black">Status</font>'
                 //  },
                  ]
              },






          







      });
    return _ReceiptSearchResultCriteria;
}



function ReceiptSearchResultCriteriaHide() {
    Ext.getCmp('ReceiptSearchResultCriteriaID').setTop(70);
    _ReceiptSearchResultCriteria.hide();

}



function ReceiptSearchResultCriteriaShow() {
    Ext.Viewport.remove(_ReceiptSearchResultCriteria);
    this.overlay = Ext.Viewport.add(ReceiptSearchResultCriteria()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();


}