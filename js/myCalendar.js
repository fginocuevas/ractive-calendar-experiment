$(function(){
    $('#generateCalendarContainer').clndr({
        render: function(data){

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
            console.log(JSON.stringify(data)); //output the json object in console for inspection.

            var calendarRactiveOptions= {
                el: '#generateCalendarContainer',
                template: '#calendarTemplate',
                data: data
            }

            var calendarRactive= new Ractive(calendarRactiveOptions);

        },



        //Customize daysOfTheWeek to use whole words instead of letters only
        //daysOfTheWeek	: ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],

    })
})