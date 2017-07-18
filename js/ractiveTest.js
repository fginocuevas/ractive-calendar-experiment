// Sample model
var model = {
    "name" : "Gino",
    "employeeNum" : 160153
};

var view = new Ractive({
    el: '#ractiveTestContainer',
    template: '#ractiveTestTemplate',
    data: model
});

$('#activate').on('click', function () {
    view.set({"name":"Francis", "employeeNum": 177777});
});

/*

updateView = function (model) {
    view.set(model);
};*/