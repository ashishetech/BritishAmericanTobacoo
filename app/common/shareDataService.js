'use strict'
angular.module('batApp').service('shareDataService',function(){

var id=[];
   var addId=function (shareId) {
	   id.pop();
	   id.push(shareId);
};
var getId= function() {
	return id[0];
};
return {
    addId: addId,
    getId: getId
  };
})
