// Sample model
var model = {
    "name" : "Gino",
    "employeeNum" : 160153,
    salary: 2000000,
    formatSalary: function(salary){
        console.log("Formatting salary from " + salary);
        if (salary > 1000000000) return (salary/1000000000).toFixed(1) + " billion";
        else if (salary > 1000000) return (salary/1000000).toFixed(1) + " million";
        else if (salary > 1000) return (salary/1000).toFixed(1) + " thousand";
        return salary;
    },
    "colorMixer": {
        "red": {
            name: "red",
            amount: 0.5
            },
        "green": {
            name: "green",
            amount: 0.2
            },
        "blue": {
            name: "blue",
            amount: 0.3
            }
    }
};

/*$('#Update').on('click', function () {

    var employeeName= $('#employeeName').val();
    var employeeNumber= $('#employeeNumber').val();

    console.info("Name: " + employeeName + " Employee #: " + employeeNumber);

    if(employeeName.trim() && employeeName.length > 0){
        console.info("Name input field is not empty, updating to " + employeeName + "(" + employeeName.length +")");
        view.set('name', employeeName);
    }

    if(employeeNumber.trim() && employeeNumber.length > 0){
        console.info("Number input field is not empty, updating to " + employeeNumber);
        view.set('employeeNum', employeeNumber);
    }


});*/

var view = new Ractive({
    el: '#ractiveTestContainer',
    template: '#ractiveTestTemplate',
    data: model
});

$('#addPlanets').on('click',function(){
    var myPlanets = new Ractive({
        el: '#solarSystemHolder',
        template: '#solarSystemTemplate',
        data: planets
    });
});

$('#activate').on('click', function () {
    view.set({"name":"Francis", "employeeNum": 177777});
});

/*

updateView = function (model) {
    view.set(model);
};*/

//Hello

//HI!