Ext.define('ianMizi.view.FloatPanel.SearchReceiptsFilterEnterprisePanel', {
});


var _SearchReceiptsFilterEnterprisePanel;
var strEnterpriseidModified;
var strEnterpriseNameModified;
var Enterpriseid = [];
var EnterpriseName = [];
function SearchReceiptsFilterEnterprisePanel() {
    _SearchReceiptsFilterEnterprisePanel =
      Ext.create('Ext.Panel', {

          xtype: 'panel',
          height: 480,
          width: '90%',
          id: 'SearchReceiptsFilterEnterprisePanelID',
          draggable: false,



          centered: true,
          //bottom: 64,
          zIndex: 40,
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
          style: 'border-bottom:1px solid;background-color:#353839;',
          items: {




              //  margin:'-50 0 0 0',
              //height: 150,
              //width: 200,
              xtype: 'container',
              style: 'border-bottom:0px solid;background-color:#353839;',

              layout: {
                  type: 'vbox',
                //  pack: 'center',

              },

              items: [


                  {
                      xtype: 'container',
                      //    bodyStyle: "background-image:url(resources/icons/border7.png) !important",

                      style: 'background-image: url("resources/icons/bordersearchenterprise.png"); background-size: 100% 100%;border-top:1px none;',
                      //   style: 'border-bottom:1px solid;background-color:#F7FDFA;border-color:black',
                      //style: {
                      //    backgroundImage: 'url(resources/icons/border7.png)',
                      //    backgroundRepeat: 'no-repeat',
                      //    //backgroundPosition: 'center'
                      //    backgroundSize: 'cover'
                      //},
                      height: 38,
                      layout: {
                          type: 'hbox'
                      },
                      items: [
                   {
                       xtype: 'label',
                       //  hidden: true,
                       margin: '2 0 0 5',
                       id: 'imgSearchReceiptsFilterEnterprisePanel',
                       html: '<img src="resources/icons/SearchBlack.png" style="width: 32px; height: 32px;" />'
                   },


                     {
                         id: 'SearchReceiptsFilterEnterprisePanel_SearchTxt',
                         margin: '9 0 0 7',
                         html: '<input type="text" id="input-SearchReceiptsFilterEnterprisePanel" placeholder="Search Enterprise" style="border-color:red;color:black;width:210px;text-align: left">'
                     },

                      ]
                  },
            {
                xtype: 'container',
                style: 'background-image: url("resources/icons/bordertujuh.png"); background-size: 100% 100%;border-bottom:1px solid;',

                height: 30,
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [
             {
                 xtype: 'label',
                 //  hidden: true,
                 margin: '-3 0 0 0',
                 id: 'imgSearchReceiptsFilterEnterprisePanels',
                 html: '<img src="resources/icons/enterprise2.png" style="width: 32px; height: 30px;" />'
             },

               {
                   xtype: 'label',
                   id: 'lblSearchReceiptsFilterEnterprisePanel',
                   // hidden:true,
                   margin: '0 0 0 0',
                   html: '<font size="2" color="black"><b>Enterprise List</b></font>'
               },

                //{
                //    xtype: 'spacer',

                //},

                ]
            },

                     //{
                     //    xtype: 'label',
                     //    // align: 'stretch',
                     //    //align: 'left',
                     //    labelWrap: true,
                     //    id: 'txtSearchReceiptsFilterEnterprisePanel',
                     //    // ui: 'plain',
                     //    margin: '5 0 0 0',
                     //    //  padding: '5px',
                     //    html: '<div ><font size=4px color=white><center><b>Enterprise List<br></b></center></font></div>',


                     //},
                  //{
                  //    xtype: 'button',
                  //    align: 'stretch',
                  //    //align: 'left',

                  //    id: 'txtreg',
                  //    ui: 'plain',

                  //    //  padding: '5px',
                  //    text: '<font size=3px color=white><u><center><b>Verification Code</b></center></u></font>',
                  //    handler: function () {


                  //    },


                  //},
              //{
              //    xtype: 'container',
              //    layout: 'fit',

              //    items: [

                      
              //    ]
              //},

              {
                  xtype: 'list',
                  // flex: 1,
                  zIndex: 40,
                  store: 'EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore',
                  //store:_DataStore_EnterprisegetAllStore,
                  id: 'EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStoreID',
                  grouped: true,
                  mode: 'MULTI',
                  //  indexBar: true,
                  //  disableSelection: true,
                  //itemTpl: '<div class="myContent">' +
                  //     '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:bottom" colspan="3"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 3px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom"><br>Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2"><br>Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 16px;margin: -10px 2px 0px 5px;cursor: pointer;" >Receipt Detail</div></td></tr></table>' +
                  //      '</div>',
                  itemTpl: '<div class="myContent">' +
                       // '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">{EnterpriseName}<br>{EnterpriseAddress}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:center;vertical-align:top" colspan="3">({EnterpriseRegistrationNo})</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;vertical-align:bottom">Tel:{EnterprisePhoneNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#FBF236;text-align:right;vertical-align:bottom" colspan="2">Faxs:{EnterpriseFaxNo}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: 0px 0px 0px 0px;cursor: pointer;" >Tap for Detail</div></td></tr></table>' +
                    //    '<table style="border-collapse:collapse;border-spacing:0"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="4">Tel:{EnterprisePhoneNo}<br>Fax:{EnterpriseFaxNo}<br>Website:http://{EnterpriseWebsite}<br>Email:{EnterpriseEmail}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Subscribed</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2">YES</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2">YES</td></tr></table>' +
                       // '<table style="border-collapse:collapse;border-spacing:0;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:18px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;border-bottom-width:1px;text-align:center" colspan="4">Tel:{EnterprisePhoneNo}<br>Fax:{EnterpriseFaxNo}<br>Website:http://{EnterpriseWebsite}<br>Email:{EnterpriseEmail}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Subscribtion</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center;vertical-align:top" colspan="2">YES</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-top-width:1px;border-bottom-width:1px;font-weight:bold;background-color:#fb6e6c;color:#ffffff;text-align:center;vertical-align:top" colspan="2">YES</td></tr></table>' +


                       '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><br><font size="4"><u>{EnterpriseName}</u></font><br>{EnterpriseAddress}<br><br></th></tr></table>' +

                     //  '<table style="border-collapse:collapse;border-spacing:0;border-color:white;background-color:white;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:white;text-align:center"><br><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:white;text-align:center">Tel:{EnterprisePhoneNo}<br>Fax:{EnterpriseFaxNo}<br>Website:http://{EnterpriseWebsite}<br>Email:{EnterpriseEmail}</td></tr></table>' +

                     //  '<table style="border-collapse:collapse;border-spacing:0;border-color:white;background-color:white;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}</th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal">Tel:{EnterprisePhoneNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">logo</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Fax:{EnterpriseFaxNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Website:http://{EnterpriseWebsite}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">logo</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Email:{EnterpriseEmail}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">logo</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2">Tap to Subscribe Cloud Receipt</td></tr></table>' +
                     //  '<table style="border-collapse:collapse;border-spacing:0;border-color:white;background-color:white;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center" colspan="2"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}<br><br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal">Tel:{EnterprisePhoneNo}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:left;vertical-align:middle" rowspan="2"><img src="resources/icons/telephoneRed.png"style="width: 16px; height: 16px;" /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Fax:{EnterpriseFaxNo}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Website:http://{EnterpriseWebsite}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"><img src="resources/icons/webRed.png"style="width: 16px; height: 16px;" /></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top">Email:{EnterpriseEmail}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;vertical-align:top"><img src="resources/icons/EmailRed.png"style="width: 16px;height: 16px;" /><br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;background-color: white; color: red;padding:0px 0px;border-style:none;border-bottom-width:1px;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2" class="blink_me">Tap to Subscribe Cloud Receipt ! </td></tr></table>' +

                  //   '<table style="border-collapse:collapse;border-spacing:0;border-color:#999;width:100%;border-style:solid;border-width:2px;"><tr><th style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3"><div style="background-color: #78E1F8; color: white; padding: 5px 8px;text-align: center; text-decoration: none;font-size: 16px;margin: 0px 235px -35px 0px;cursor: pointer;" >Confirm</div><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 102px; height: 122px; margin-top: 5px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;padding:-17px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillWorkshop}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:-13px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:center;vertical-align:top" colspan="3">{FlatBillCompanyNumber}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;vertical-align:bottom">Date:{FlatBillDate}</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:solid;border-top:1px;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#ffffff;background-color:#26ade4;text-align:right;vertical-align:bottom" colspan="2">Issued By:{FlatBillIssuedBy}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;text-align:right;vertical-align:top"><u>Total Paid:</u></td><td style="font-family:Arial, sans-serif;font-size:28px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#000000;background-color:#F7FDFA;font-weight:bold;vertical-align:top" colspan="2"><u>RM {FlatBillFinalAmount}</u></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:7px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;font-weight:bold;font-style:italic;text-decoration:underline;text-align:right;vertical-align:top" colspan="3"><div style="background-color: #f44336; border: none; color: white; padding: 5px 32px;text-align: center; text-decoration: none;display: inline-block;font-size: 13px;margin: -10px 2px 0px 5px;cursor: pointer;" >Tap for Receipt Detail</div></td></tr></table>' +
                        //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#26ade4;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:white" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:white"><div class="blink_me" style="background-color: #f44336; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >New</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:14px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:white">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                       // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#26ade4;" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid white; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #26ade4; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >Confirm</div>{FlatBillWorkshop}<br>Desc:{FlatBillShotDesc}<br>Account No:{FlatBillAccountNo}<br>Date:{FlatBillDate}<br>Amount:RM{FlatBillTotalAmount} | Tax:RM{FlatBillTax}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:solid;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +
                           //tiada border '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;"><tr><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;text-align:center;border-color:#A2CDF5;background-color:#26ade4;" rowspan="2"><img src="data:image/png;base64,{FlatBillImgLogo}"style="width: 72px; height: 62px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /></th><th style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5"><div style="background-color: #26ade4; color: white; padding: 5px 5px;text-align: center; text-decoration: none;font-size: 12px;margin: 0px 0px -20px 170px;cursor: pointer;width:55px" >Confirm</div>{FlatBillWorkshop}<br>Desc:Unifi<br>Account No:1017345941<br>Date:{FlatBillDate}</th></tr><tr><td style="font-family:Arial, sans-serif;font-weight:bold;text-align:center;font-size:16px;padding:0px 5px;border-style:none;border-width:2px;overflow:hidden;word-break:normal;border-color:#A2CDF5;background-color:#1B1C1E;color:white;">Total Paid:RM{FlatBillFinalAmount}</td></tr></table>' +

                         '</div>',
                  width: '100%',
                  height: 350,
                  listeners: {
                      //itemsingletap: function (list, idx, target, records, evt) {

                      //    Enterpriseid.push(records.get('ID'));

                      //},
                      select: function (list, records) {
                          Enterpriseid.push(records.get('EnterpriseAccNo'));
                          EnterpriseName.push(records.get('EnterpriseName'));

                      },
                      deselect: function (list, records) {
                          var value_to_remove = records.get('EnterpriseAccNo');
                          var value_to_remove_Enterprise = records.get('EnterpriseName');
                          Enterpriseid.splice(Enterpriseid.indexOf(value_to_remove), 1);
                          EnterpriseName.splice(EnterpriseName.indexOf(value_to_remove_Enterprise), 1);
                     
                      }
                  },

              },
                

                 {
                     xtype: 'button',
                     align: 'stretch',
                     //align: 'left',

                     id: 'btnReconfirmEnterprise',
                     ui: 'decline',
                     margin: '7 0 0 0',
                     padding: '7px',
                     text: '<font size=3px color=white><center><b>Select</b></center></font>',
                     handler: function () {

                         var count = 0;
                         var ii;
                         var strEnterpriseid = '';
                         var strEnterpriseName = '';
                         for (ii = 0; ii < Enterpriseid.length; ii++) {
                             strEnterpriseid += "'" + Enterpriseid[ii] + "'" + ',';
                             strEnterpriseName += EnterpriseName[ii] + ',';
                             count = ii;
                         }


                          strEnterpriseidModified = strEnterpriseid.replace(/.$/, '');
                         strEnterpriseNameModified = strEnterpriseName.replace(/.$/, '');

                         console.log('strEnterpriseidModified:' + strEnterpriseidModified);
                         console.log('trackingid lenght:' + Enterpriseid.length);

                         document.getElementById('input-Enterprise').value=strEnterpriseNameModified;
                         SearchReceiptsFilterEnterprisePanelHide();
                         
                     },


                 },





              ]




          }







      });
    return _SearchReceiptsFilterEnterprisePanel;
}



function SearchReceiptsFilterEnterprisePanelHide() {
    _SearchReceiptsFilterEnterprisePanel.hide();
    routeSearchReceiptsFilterEnterprisePanelIsOpen = 'N';
}


var _DataStore_EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore;
function SearchReceiptsFilterEnterprisePanelShow() {
    Ext.Viewport.remove(_SearchReceiptsFilterEnterprisePanel);
    this.overlay = Ext.Viewport.add(SearchReceiptsFilterEnterprisePanel()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
    routeSearchReceiptsFilterEnterprisePanelIsOpen = 'Y';
    Enterpriseid.length = 0;
    EnterpriseName.length = 0;
    LoadingPanelShow();
    loadEnterpriseSubscribedListSearchReceiptFilter();
    _DataStore_EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore = Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore');
    document.getElementById("input-SearchReceiptsFilterEnterprisePanel").addEventListener("keyup", SearchEnterpriseSubscribedListSearchReceiptFilterOnKeyUp);
}




var countloadEnterpriseSubscribedListSearchReceiptFilter = 0
function loadEnterpriseSubscribedListSearchReceiptFilter() {

    console.log(GetCurrentAccountNo());

    Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore').getProxy().setExtraParams({
        SubcriberAccNo: GetCurrentAccountNo()
    });
    Ext.StoreMgr.get('EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoStore').getProxy().setExtraParams({
            SubcriberAccNo: GetCurrentAccountNo()
        });
        Ext.StoreMgr.get('EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore').load();
        var myStore = Ext.getStore('EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore');
        countloadEnterpriseSubscribedListSearchReceiptFilter = myStore.getCount();
         Ext.getCmp('lblSearchReceiptsFilterEnterprisePanel').setHtml('<font size="2" color="black"><b>Enterprise List (' + countloadEnterpriseSubscribedListSearchReceiptFilter + ')</b></font>')
        Ext.Viewport.setMasked(false);
        LoadingPanelHide();

    });
    task.delay(2000);


}





function SearchEnterpriseSubscribedListSearchReceiptFilterOnKeyUp() {
    console.log('SearchEnterpriseSubscribedOnKeyUp');
    var countEnterpriseSubscribed = 0;


    _DataStore_EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore.clearFilter();

    var queryString = document.getElementById('input-SearchReceiptsFilterEnterprisePanel').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('EnterpriseName'))) {
                console.log('ada0');

                countEnterpriseSubscribed = _DataStore_EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore.getCount();
                Ext.getCmp('lblSearchReceiptsFilterEnterprisePanel').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseSubscribed + ')</b></font>')
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countEnterpriseSubscribed = _DataStore_EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore.getCount();
        Ext.getCmp('lblSearchReceiptsFilterEnterprisePanel').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseSubscribed + ')</b></font>')
    }


    else {
        console.log('tiada2');
        _DataStore_EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore.clearFilter();
        Ext.getCmp('lblSearchReceiptsFilterEnterprisePanel').setHtml('<font size="2" color="black"><b>Enterprise List (' + countloadEnterpriseSubscribedListSearchReceiptFilter + ')</b></font>');
        return false;
    }


    //}

}