Ext.define('ianMizi.view.Enterprise.ScanQrCode', {

});




var _ScanQrCode;

function ScanQrCode() {

    _ScanQrCode = Ext.create('Ext.Panel',


        {


            requires: [
            'Ext.dataview.List',
            'Ext.data.Store'
            ],


            ////xtype: 'panel',
            //style: 'background-color:#57A0DC',
            //height: 220,
            //width: 280,
            // height: 800,
            height: 250,
            width: '90%',
            id: 'ScanQrCodeID',
            style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',            
            modal: true,
            centered: true,
            hideOnMaskTap: true,

            //zIndex:200,

            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                //  easing: 'ease-out'
            },


            layout: {
                type: 'vbox',

            },
            items: [

                  {
                      height: 230,
                      //width: 280,
                      width: '100%',
                      id:'htmliframeQrCode',
                      //html: '<iframe style="margin:0px 0px 0px 0px" id="iframeQrCode" src="resources/icons/qrCode.html"  width="100%" height="500px" scrolling="no" frameBorder="0" >'
                      html: '<iframe style="margin:0px 0px 0px 0px;height:230px" id="iframeQrCode" allow="camera;" scrolling="yes" frameBorder="0" src="https://webrtc.github.io/samples/src/content/getusermedia/gum/"/>'
                  },







            ]










        });

    return _ScanQrCode;
}



function ScanQrCodeShow() {
    Ext.Viewport.remove(_ScanQrCode);
    this.overlay = Ext.Viewport.add(ScanQrCode());
    this.overlay.show();
   // QRScanner.prepare(onDone); // show the prompt
   // startScan();
}

function ScanQrCodeHide() {
    //  Ext.getCmp('TrackingHistoryMapInfoPanelDetails').setHtml('<table class="tblheadetrackedhistory"><tr > <td class="tdgpsdatahistory"><u>Tracking ID :  N/A </u></td></tr></table>                           <br>   <table class="tblmasterhistory"> <tr> <td class="tdgpslabel">Date From</td> <td class="tdgpslabel"> TODAY :' + now + '</td></tr><tr> <td class="tdgpslabel">Date To</td> <td class="tdgpslabel"> N/A </td></tr><tr> <td class="tdgpslabel">Travel range(KM)</td> <td class="tdgpslabel"> N/A | Point: N/A  </td></tr><tr> <td class="tdgpslabel">Tracking Item</td> <td class="tdgpslabel"> N/A </td></tr></table>');

    _ScanQrCode.hide();
}



function onScanSuccess(qrCodeMessage) {
    // handle on success condition with the decoded message

    alert(qrCodeMessage);
}




function startScan() {
    var html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess);
}



function onDone(err, status) {
    if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err);
    }
    if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        QRscanner.show();
        QRScanner.scan(displayContents);
    } else if (status.denied) {
        // The video preview will remain black, and scanning is disabled. We can
        // try to ask the user to change their mind, but we'll have to send them
        // to their device settings with `QRScanner.openSettings()`.
    } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
    }
}



function displayContents(err, text) {
    if (err) {
        // an error occurred, or the scan was canceled (error code `6`)
    } else {
        // The scan completed, display the contents of the QR code:
        alert(text);
    }
}

// Make the webview transparent so the video preview is visible behind it.
