// Nuevo modulo
var app = angular.module('expensesApp', ['ngRoute'])

var myHelpers = {
  //from http://stackoverflow.com/questions/2280104/convert-javascript-to-date-object-to-mysql-date-format-yyyy-mm-dd
  dateObjToString: function(dateObj) {
    var year, month, day;
    year = String(dateObj.getFullYear());
    month = String(dateObj.getMonth() + 1);
    if (month.length == 1) {
        month = "0" + month;
    }
    day = String(dateObj.getDate());
    if (day.length == 1) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
  },
  stringToDateObj: function(string) {
    return new Date(string.substring(0,4), string.substring(5,7) - 1, string.substring(8,10));
  }
};

//Define las rutas para la app, y cada ruta define un template y un controlador.
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'views/expenses.html',
			controller  : 'ExpensesViewController'
			})
		.when('/expenses', {
			templateUrl : 'views/expenses.html',
			controller  : 'ExpensesViewController'
			})
		.when('/expenses/new', {
			templateUrl : 'views/expenseForm.html',
			controller  : 'ExpenseViewController'
			})
		.when('/expenses/edit/:id', {
			templateUrl : 'views/expenseForm.html',
			controller  : 'ExpenseViewController'
			})
		.otherwise({
			redirectTo: '/'
			});
}]);

//Servicio
app.factory('Expenses', function(){

	var service = {};

	service.entries = [
		{id:1, description: 'food', amount: 10, date: '2014-12-01'},
		{id:2, description: 'tickets', amount: 11, date: '2014-12-02'},
		{id:3, description: 'food', amount: 12, date: '2014-12-03'},
		{id:4, description: 'phone credit', amount: 13, date: '2014-12-04'},
		{id:5, description: 'bills', amount: 14, date: '2014-12-05'},
		{id:6, description: 'food', amount: 15, date: '2014-12-06'},
	];

	service.save = function(entry) {
		service.entries.push(entry);
	}

	return service;
});

// Controlador donde esta el listado de elementos y se define un arreglo expenses
app.controller('ExpensesViewController', ['$scope', 'Expenses', function($scope, Expenses) {
  $scope.expenses = Expenses.entries;
}]);

app.controller('ExpenseViewController', ['$scope', '$routeParams', '$location', 'Expenses', function($scope, $routeParams, $location, Expenses) {
  if(!$routeParams.id) {
    $scope.expense = {id: 7, description: 'something', amount: 10, date: new Date()};
  }
	
	$scope.save = function() {
    Expenses.save($scope.expense);
    $location.path('/');
  }
}]);
