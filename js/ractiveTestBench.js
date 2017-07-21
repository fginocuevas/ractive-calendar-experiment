// Sample model
var model = {
    "name" : "Gino",
    "employeeNum" : 16015,
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
    },
    loginUserName: "",
    loginConditional: function(username){

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


$('#activate').on('click', function () {
    view.set({"name":"Francis", "employeeNum": 177777});
});

var ractive, xmen;

// define our superheroes
xmen = [
  { name: 'Nightcrawler', realname: 'Wagner, Kurt',     power: 'Teleportation',    info: 'http://www.superherodb.com/Nightcrawler/10-107/' },
  { name: 'Cyclops',      realname: 'Summers, Scott',   power: 'Optic blast',      info: 'http://www.superherodb.com/Cyclops/10-50/' },
  { name: 'Rogue',        realname: 'Marie, Anna',      power: 'Absorbing powers', info: 'http://www.superherodb.com/Rogue/10-831/' },
  { name: 'Wolverine',    realname: 'Howlett, James',   power: 'Regeneration',     info: 'http://www.superherodb.com/Wolverine/10-161/' }
];

ractive = new Ractive({
  target: '#target',
  template: '#template',
  data: {
  	superheroes: xmen,
  	sortColumn: 'name',
  	sort: function( array ) {
  		// console.log("function(" + JSON.stringify(array) + ") initiated");
  		// grab the current sort column
  		var column = this.get( 'sortColumn' );

  		// console.log("column: " + column);

	  	// clone the array so as not to modify the underlying data
	  	var arr = array.slice();

	  	return arr.sort( function( a, b ) {
	  		console.log("a[" + JSON.stringify(a) +"] VS b[" + JSON.stringify(b) + "]");
	  		return a[ column ] < b[ column ] ? -1 : 1;
	  	});
  	}
  },
  sort: function( columnName ) {
  	// update the sort column
  	console.log("function(" + columnName + ") initiated");
  	this.set('sortColumn', columnName);
  }
});