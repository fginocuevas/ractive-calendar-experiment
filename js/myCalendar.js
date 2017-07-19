var selectedDate = "";
var prevSelectedElement;

$(function(){
    $("#addEventModalContainer1").hide();


    var events = JSON.parse(sessionStorage.getItem('events'));

    if (events =="" || events == null){
        events = mockEvents();
        sessionStorage.setItem('events', JSON.stringify(events));
    }
    generateCal(events);

    $("#sampleId").on('click',function(){

        var userEvent = $("#eventTitle").val();
        events.push({ date: selectedDate, title: userEvent})
        sessionStorage.setItem('events', JSON.stringify(events));
        //var sessionEvents = sessionStorage.getItem("events");
        window.location="../ractive-calendar-experiment/myCalendar.html";
    });



});

function generateCal(myEvents){
    $('#generateCalendarContainer').clndr({

        render: function(data){

            showAdjacentMonths: false,

            _days= data.days;
            daysLength= _days.length;
            weeks= new Array();

            if(daysLength){

                var numberOfWeeks= daysLength/7;
                var endWeekIndex= 0;

                for(var i=0; i < numberOfWeeks; i++){
                    var _week= {};
                    _week.days= _days.slice(endWeekIndex, endWeekIndex + 7);
                    endWeekIndex += 7;
                    weeks.push(_week);
                }

            }

            data.weeks= weeks;

            // Print out contents of data into the console
            //console.log(JSON.stringify(data)); //output the json object in console for inspection.

            var calendarRactiveOptions= {
                el: '#generateCalendarContainer',
                template: '#calendarTemplate',
                data: data
            }

            var calendarRactive= new Ractive(calendarRactiveOptions);

        },

        events : myEvents,

        clickEvents: {
                    click: function (target) {
                        $("#addEventModalContainer1").show();
                        $(".calendar-day-"+prevSelectedElement).removeClass("light-blue-background");
                        selectedDate = target.date._i;
                        prevSelectedElement = selectedDate;
                        $(".calendar-day-"+selectedDate).addClass("light-blue-background");
                        console.log('Cal-1 clicked: ', target);
                    },
                    today: function () {
                        console.log('Cal-1 today');
                    },
                    nextMonth: function () {
                        console.log('Cal-1 next month');
                    },
                    previousMonth: function () {
                        console.log('Cal-1 previous month');
                    },
                    onMonthChange: function () {
                        console.log('Cal-1 month changed');
                    },
                    nextYear: function () {
                        console.log('Cal-1 next year');
                    },
                    previousYear: function () {
                        console.log('Cal-1 previous year');
                    },
                    onYearChange: function () {
                        console.log('Cal-1 year changed');
                    },
                    nextInterval: function () {
                        console.log('Cal-1 next interval');
                    },
                    previousInterval: function () {
                        console.log('Cal-1 previous interval');
                    },
                    onIntervalChange: function () {
                        console.log('Cal-1 interval changed');
                    }
                },

        //Customize daysOfTheWeek to use whole words instead of letters only
        //daysOfTheWeek	: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],

    })
};

function showAddEventModal(){
    var calendarRactiveOptions= {
        el: '#addEventModalContainer',
        template: '#addEventModalTmpl'
    }

    var calendarRactive= new Ractive(calendarRactiveOptions);
}

function addEvent(events){

}


function mockEvents(){
	var events = new Array();
	var event2 = { date: '2017-08-03', title: 'BIRTHDAY!'};
	var event3 = { date: '2017-07-12', title: 'Independence Day!'};
	events.push(event2);
	events.push(event3);

	return events;
};

