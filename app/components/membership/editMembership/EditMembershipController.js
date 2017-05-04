angular.module("batApp")
.controller("EditMembershipController", function($localStorage, $state, getDataFactory,$timeout){
	var vm=this;
	vm.id=101;
	vm.editMembership=function () {
		getDataFactory.editMembership(vm.id).get().$promise
		.then((response)=>{
				console.log(response)
				vm.data=response;
		})
	}

    vm.submit = function(data) {
		console.log(data);

		getDataFactory.updateMembership(vm.id).update(data).$promise
		.then((response)=>{
				console.log(response)
				if (!response.error) {
   					angular.element('#myModal').modal('hide')
				}
				else {
					vm.data.error=response.error.message
				}
		})

    };
	vm.editMembership();
});
