// Nuevo modulo
var app = angular.module('expensesApp', [])
// Controlador principal y le pasamos el ambito $scope
app.controller('HomeViewController', ['$scope', function($scope){
	$scope.appTitle = 'Expenses Tracker';
}]);
// Controlador donde esta el listado de elementos y se define un arreglo expenses
app.controller('ExpensesViewController', ['$scope', function($scope){
	$scope.expenses = [
		{description: 'food', amount: 10, date: '2014-10-01'},
		{description: 'tickets', amount: 11, date: '2014-10-02'},
		{description: 'food', amount: 12, date: '2014-10-03'},
		{description: 'phone credit', amount: 13, date: '2014-10-04'},
		{description: 'bills', amount: 14, date: '2014-10-05'},
		{description: 'food', amount: 15, date: '2014-10-06'},
	]
}])