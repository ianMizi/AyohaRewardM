Ext.define('ianMizi.view.Route', {
});

var routeAboutPanelIsOpen = 'N';
var routeForgotPasswordIsOpen = 'N';
var routeLoadingCustomMsgIsOpen = 'N';
var routeLoadingReconfirmPwdPanelIsOpen = 'N';
//tak perlu var routeLoadingVerifyCodeIsOpen = 'N';
var routeReceiptStatusCategoryPanelIssOpen = 'N';
var routeSearchReceiptsFilterEnterprisePanelIsOpen = 'N';
var routeDetailReceiptMenuIsOpen = 'N';
var routeDetailReceiptMenuPanelIsOpen = 'N';
var routeDrawerMenuPanelIsOpen = 'N';
var routeReceiptCategoryMenuIsOpen = 'N';
var routeStatusDetailReceiptMenuIsOpen = 'N';
var routeStatusMenuIsOpen = 'N';
var routeNotificationIndividualPanelIsOpen = 'N';


var routeDrawerIsOpen = 'N';
var routeNotificationIsOpen = 'N';
var routeLoadingMsgIsOpen = 'N';
var routeCurrPage;





var routesArray = [];
var routesArrayBasicForm = [];




function BackrouteArr() {
   
   
   
    var i;
    var currentView;
    var arr;
    //routesArray.pop();
    for (i = 0; i < routesArray.length; i++) {
       // alert(routesArray[i]);

        currentView = routesArray[i];
        arr += routesArray[i]+"\n";
        // console.log("original:"+routesArray[i]);
      
    }

 //   console.log(arr.replace("undefined", ""));
//




 
   // console.log('BackrouteArrxxxxxxxxxxxxzzzxxx');
 

    //var valmainview = routesArray.pop();

    console.log("back To:" + currentView);
    //console.log("valmainview:" + valmainview);


    if (currentView.includes("mainView")) {
       // alert('xxxxxzz' + currentView);

        if (currentView == "mainView,view,4") {

            if (currentView.includes("basicform")) {
                var basicform = currentView.split(',');
                var basicformIndex = parseInt(basicform[2])
                Ext.getCmp("basicform").setActiveItem(basicformIndex);
                return;
                //  return;
            } else {
                var mainView = currentView.split(',');
                var mainViewIndex = parseInt(mainView[2])
                Ext.getCmp('mainView').setActiveItem(mainViewIndex);
                return;
            }
           
        } else
        {
            var mainView = currentView.split(',');
            var mainViewIndex = parseInt(mainView[2])
            Ext.getCmp('mainView').setActiveItem(mainViewIndex);
            if (routeDetailReceiptMenuIsOpen == 'Y') {
                DetailReceiptMenuHide();
            }

           
            return;
        }

       
      
      
       
    }else
    if (currentView.includes("basicform")) {
    
        Ext.getCmp('mainView').setActiveItem(4);
        var basicform = currentView.split(',');
        var basicformIndex = parseInt(basicform[2])
        Ext.getCmp("basicform").setActiveItem(basicformIndex);
        return;
        //  return;
    }
    //else
    
    //if (currentView.includes("DrawerMenu")) {
    //    return;
    //} if (routeDetailReceiptMenuIsOpen == 'Y') {
    //    DetailReceiptMenuHide();
    //}

    else
    {
         Ext.getCmp('mainView').setActiveItem(1);
        console.log("loadlistsummaryreceipt:" + currentView);
        loadlistsummaryreceipt(currentView);
        if (routeDetailReceiptMenuIsOpen == 'Y') {
            DetailReceiptMenuHide();
        }
    }
   
}



function Routes() {

    var i;
    var currentView;
    var arr;
    //routesArray.pop();
    for (i = 0; i < routesArray.length; i++) {
        // alert(routesArray[i]);

        currentView = routesArray[i];
        arr += routesArray[i] + "\n";
        // console.log("original:"+routesArray[i]);

    }

   

    if (currentView.includes("mainView")) {
        if (currentView == "mainView,view,4") {

            if (currentView.includes("basicform")) {
                var basicform = currentView.split(',');
                var basicformIndex = parseInt(basicform[2])
                Ext.getCmp("basicform").setActiveItem(basicformIndex);
                return;
                //  return;
            } else {
                var mainView = currentView.split(',');
                var mainViewIndex = parseInt(mainView[2])
                Ext.getCmp('mainView').setActiveItem(mainViewIndex);
                return;
            }

        } if (currentView == "mainView,view,0") {

            navigator.app.exitApp();

        }
        else {
            var mainView = currentView.split(',');
            var mainViewIndex = parseInt(mainView[2])
            Ext.getCmp('mainView').setActiveItem(mainViewIndex);
            if (routeDetailReceiptMenuIsOpen == 'Y') {
                DetailReceiptMenuHide();
            }


            return;
        }





    } else
        if (currentView.includes("basicform")) {

            Ext.getCmp('mainView').setActiveItem(4);
            var basicform = currentView.split(',');
            var basicformIndex = parseInt(basicform[2])
            Ext.getCmp("basicform").setActiveItem(basicformIndex);
            return;
            //  return;
        }
           

        else {
            Ext.getCmp('mainView').setActiveItem(1);
            console.log("loadlistsummaryreceipt:" + currentView);
            loadlistsummaryreceipt(currentView);
            if (routeDetailReceiptMenuIsOpen == 'Y') {
                DetailReceiptMenuHide();
            }
        }
  
   
}