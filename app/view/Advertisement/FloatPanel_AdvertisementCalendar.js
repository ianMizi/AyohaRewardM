Ext.define('ianMizi.view.Advertisement.FloatPanel_AdvertisementCalendar', {

});

var _FloatPanel_AdvertisementCalendar;


var isFloatPanel_AdvertisementCalendarOpen = 'N';











function FloatPanel_AdvertisementCalendar() {

    _FloatPanel_AdvertisementCalendar =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         height: 650,
         width: '95%',
         id: 'LoadingFloatPanel_AdvertisementCalendarID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 500,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'slideOut',
             direction: 'up',
             easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {

         //                if (e.direction == "left") {
         //                    _FloatPanel_AdvertisementCalendar.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                } if (e.direction == "right") {
         //                    _FloatPanel_AdvertisementCalendar.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                }
         //                isFloatPanel_AdvertisementCalendarOpen = 'N';
         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             //  style: 'border-bottom:0px solid;background-color:white;',

             style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: ' background-color:transparent;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_AdvertisementCalendarHeader',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'transparent',
                     //    // border: '2px'
                     //},
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
                                              id: 'btnFloatPanel_AdvertisementCalendarBack',
                                              height: 30,
                                              width: 35,
                                              // iconCls: 'list',
                                              html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {

                                                  _FloatPanel_AdvertisementCalendar.hide(Ext.fx.Animation({
                                                      type: 'slideOut',
                                                      direction: 'left',
                                                      easing: 'cubic-bezier(.7,0,.7,1)',
                                                      duration: 250

                                                  }));
                                                  isFloatPanel_AdvertisementCalendarOpen = 'N';

                                              }
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              html: '<font size=2 color=white><b>Advertisement Type</b></font>'
                                          },
                                           {
                                               xtype: 'spacer',

                                           },















                            ]

                 },



            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
                id: 'FloatPanel_AdvertisementCalendarBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:white;',
                height: 600,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox'
                },
                items: [

                    {
                        html: ' <div id=calendar style="width:100%; height:550px"></div>'

                        //  html: '<iframe id="myIframe2" src="' + document.location.protocol + '//' + document.location.host + '/smc/calendar/"  width="100%" height="650" ></iframe>',
                    }





                    


                ]


            },









             ]




         }







     });
    return _FloatPanel_AdvertisementCalendar;





}

function FloatPanel_AdvertisementCalendarShow() {

    Ext.Viewport.remove(_FloatPanel_AdvertisementCalendar);
    this.overlay = Ext.Viewport.add(FloatPanel_AdvertisementCalendar());
    this.overlay.show();
    isFloatPanel_AdvertisementCalendarOpen = 'Y';
    loadCalendar();
}


function FloatPanel_AdvertisementCalendarHide() {
    _FloatPanel_AdvertisementCalendar.hide(); isFloatPanel_AdvertisementCalendarOpen = 'N';
}

var eventArrays = [];

function loadCalendar() {
    $('#calendar').swipeCalendar({
        swipeEffect: 'coverflow', // Can be 'slide', 'coverflow' or 'cube'
        swipeSpeed: 250,
        swipeTitlePosition: 'center',
        header: {
            //left: 'month,agendaWeek,agendaDay,listWeek',
            left: 'month',
            center: '',
            //right: 'today prev,next',
            right: 'today'
        },
        plugins: ['interaction'],
        themeSystem: 'bootstrap4',
        height: 'parent',
        defaultView: 'month',
        //   defaultDate: '2019-03-12',
        fixedWeekCount: false,
        navLinks: true, // can click day/week names to navigate views
        editable: true,

        //eventDurationEditable: true,

        eventLimit: true, // allow "more" link when too many events

        events: function (start, end, timezone, callback) {

            callback(eventArrays);


        },



        droppable: true,
        eventDrop: function (event, delta, revertFunc) {

            //  alert(event.id + " was dropped on " + event.start.format());
            var dt = event.start.format();
            var dte = event.end.format();
            // alert(event.id + " <--ID<br> " + event.title + " was dropped on " + event.start.format());

            if (!confirm("Are you sure about this change?")) {


                // alert('asdasdsa')
                revertFunc();

            } else {
                saveMovementPlanDragEdit(dt, event.id, dte);
            }

        },
        eventResize: function (event, delta, revertFunc) {

            //alert(event.id + " <--ID<br> " + event.title + " end is now " + event.end.format());
            var dt = event.start.format();
            var dte = event.end.format();
            if (!confirm("is this okay?")) {


                revertFunc();

            } else {
                saveMovementPlanDragEdit(dt, event.id, dte);
            }

        },

        dayClick: function (date, jsEvent, view) {

            //  alert(moment(date).format());

            localStorage.setItem("CurrDayClickCalendar", moment(date).format());

            localStorage.setItem("CurroriginPlaceId", "");
            localStorage.setItem("CurrdestinationPlaceId", "");
            isAddNewMovementPlan = 'Addnew';
            //   Wed Mar 06 2019 08:00:00 GMT+0000

          //  AutocomplePlace_SearchShow();


            document.getElementById("MovementdateTime").value = moment(date).format();
            Ext.getCmp('htmlheaderMovementPlan').setHtml('<font size="3" color="white">Create Movement Plan</font>');
            //var obj = {};
            //obj.title = prompt("title");
            //obj.start = moment(date);
            //obj.end = moment(date);
            //obj.id = makeEventid(7);
            //allDay = false;
            //eventArrays.push(obj);
            // $('#calendar').swipeCalendar('renderEvent', obj);


        },



        //        modifyEvent: function modifyEvent(docRef) {
        //var obj = $.grep(eventsArray,function (obj)
        //{
        //    return obj.id=== docRef.id; 
        //})[0];
        //    obj.title=docRef.data().title;
        //    $("#calendar").swipeCalendar('removeEvents',docRef,ID);
        //    $("#calendar").swipeCalendar('renderEvent',obj);
        //        },

        //        eventDragStop: (function (snapshot) {
        //    snapshot.docChanges().forEach(function(change){
        //        if(change.type==='modified')
        //        {
        //            modifyEvent(change.doc)
        //        }
        //    })
        //}),

        eventClick: function (event, jsEvent, view) {
          




            localStorage.setItem('CurrEventID', event.id);
            localStorage.setItem('CurrEventTitle', event.title);
            localStorage.setItem("CurroriginPlaceId", event.startLoc);
            localStorage.setItem("CurrdestinationPlaceId", event.destination);
            localStorage.setItem("CurrDayClickCalendar", moment(event.start).format()) + 'T' + moment((event.start).format('HH:mm:ss'));
            localStorage.setItem("CurrVehicleType", event.vehicleType);
            localStorage.setItem("CurrisReminder", event.isReminder);
            localStorage.setItem("CurrMovementCode", event.MovementCode);
            localStorage.setItem("CurrDistances", event.distance);
            localStorage.setItem("CurrDurations", event.duration);
            Ext.getCmp('LoadingMovementPlanEventOverViewID').setHeight(548);
            Ext.getCmp('containerbottomMovementPlanOverView').setHidden(false);
            Ext.getCmp('htmlEventTitle').setHtml('<font color=grey size=4.5>' + event.title + '</font>');
            Ext.getCmp('htmEventDate').setHtml('<font color=grey size=4.5>' + moment(event.start).format('dddd, LL') + ' ' + moment(event.start).format('LT') + '</font><br>');
            Ext.getCmp('htmEventStartLocation').setHtml('<font color=grey size=4.5>' + event.startLoc + '</font><br>');
            Ext.getCmp('htmEventEndLocation').setHtml('<font color=grey size=4.5>' + event.destination + '</font><br>');
            Ext.getCmp('htmEventDistance').setHtml('<font color=grey size=3>' + event.distance + 'KM</font><br>');
            Ext.getCmp('htmEventDuraion').setHtml('<font color=grey size=3>' + event.duration + '</font><br>');





        },

       
    });




}




