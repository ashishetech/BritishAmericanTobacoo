angular.module('batApp').controller('TemplateController', ['$location', function ($location) {
  var vm = this
  vm.OpenSetting = false
  vm.OpenOutlet = false
  vm.OpenBrand = false
  vm.arrowOutlet = true
  vm.arrowSet = true
  vm.arrowBrand = true

  vm.Open = function (count) {
    switch (count) {
      case 'outlet':
        if (vm.OpenOutlet === false) {
          vm.OpenOutlet = true
          vm.arrowOutlet = false
        } else {
          vm.OpenOutlet = false
          vm.arrowOutlet = true
        }
        break
      case 'brand':
        if (vm.OpenBrand === false) {
          vm.OpenBrand = true
          vm.arrowBrand = false
        } else {
          vm.OpenBrand = false
          vm.arrowBrand = true
        }
        break
      case 'setting':
        if (vm.OpenSetting === false) {
          vm.OpenSetting = true
          vm.arrowSet = false
        } else {
          vm.OpenSetting = false
          vm.arrowSet = true
        }
    }
  }

  vm.isActive = function (viewLocation) {
    var Active = (viewLocation === $location.path())
    return Active
  }
}])
