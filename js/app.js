// Nuevo modulo
var app = angular.module('expensesApp', ['ngRoute']);

// Controlador principal y le pasamos el ambito $scope
app.controller('HomeViewController', ['$scope', function($scope){
	$scope.appTitle = 'Expenses Tracker';
}]);

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
			controller  : 'ExpensesViewController'
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
		{description: 'food', amount: 10, date: '2014-12-01'},
		{description: 'tickets', amount: 11, date: '2014-12-02'},
		{description: 'food', amount: 12, date: '2014-12-03'},
		{description: 'phone credit', amount: 13, date: '2014-12-04'},
		{description: 'bills', amount: 14, date: '2014-12-05'},
		{description: 'food', amount: 15, date: '2014-12-06'},
	];

	return service;
})

// Controlador donde esta el listado de elementos y se define un arreglo expenses
app.controller('ExpensesViewController', ['$scope', 'Expenses', function($scope, Expenses){
	$scope.expenses = Expenses.entries;
}]);

app.controller('ExpenseViewController', ['$scope', '$routeParams', '$location','Expenses', function($scope, $routeParams, $location, Expenses){
	//Si no viene un parametro 'id'
	if (!$routeParams.id) {
		$scope.expense = {id: 7, description: 'something', amount: 20, date: new Date()};
	}
}]);
