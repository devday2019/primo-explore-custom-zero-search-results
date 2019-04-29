app.controller('prmNoSearchResultsAfterController', [function () {
	var vm = this;
	vm.getSearchTerm = getSearchTerm;
	function getSearchTerm() {
		return vm.parentCtrl.term;
	}
}]);

app.component('prmNoSearchResultAfter', {
	bindings: {parentCtrl: '<'},
	controller: 'prmNoSearchResultsAfterController',
	template: '<strong>This is my custom no results areas. The term you searched for was <i>{{$ctrl.getSearchTerm()}}</i>. Brought to you by The New School Libraries.</strong>'
});