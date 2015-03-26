// Nuevo modulo
var app = angular.module('expensesApp', ['ngRoute']);

// Controlador principal y le pasamos el ambito $scope
app.controller('HomeViewController', ['$scope', function($scope){
	$scope.appTitle = 'Expenses Tracker';
}]);

// Controlador donde esta el listado de elementos y se define un arreglo expenses
app.controller('ExpensesViewController', ['$scope', 'Expenses',function($scope, Expenses){
	$scope.expenses = Expenses.entries;
}]);

app.controller('ExpenseViewController', ['$scope', function($scope){
	$scope.someText = 'The world is round';
}]);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', { templateUrl: 'views/expenses.html', controller: 'ExpensesViewController' })
		.when('/expenses', { templateUrl: 'views/expenses.html', controller: 'ExpensesViewController' })
		.when('/expenses/new', { templateUrl: 'views/form.html', controller: 'ExpensesViewController' })
		.otherwise({redirectTo: '/'});
}]);

//Servicio
app.factory('Expenses', function(){

	var service = {};

	service.entries = [
		{description: 'food', amount: 10, date: '2014-12-01'},
		{description: 'tickets', amount: 11, date: '2014-12-02'},
		{description: 'food', amount: 12, date: '2014-12-03'},
		{description: 'phone credit', amount: 13, date: '2014-12-04'},
		{description: 'bills', amount: 14, date: '2014-12-05'},
		{description: 'food', amount: 15, date: '2014-12-06'},
	];

	return service;
})
