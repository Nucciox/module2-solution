(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.showToBuyItems();

  toBuy.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var justBought = this;

  justBought.items = ShoppingListCheckOffService.showBoughtItems();
}

function ShoppingListCheckOffService(){
  var service = this;

  var listToBuy = [
    {name: "cookies", quantity: 10},
    {name: "chips", quantity: 20},
    {name: "water", quantity: 15},
    {name: "meat", quantity: 8},
    {name: "banana", quantity: 10}
  ];

  var listBought = [];

  service.buyItem = function(itemIndex){
    var item = listToBuy[itemIndex];
    listBought.push(item);
    listToBuy.splice(itemIndex,1);
  };

  service.showBoughtItems = function(){
    return listBought;
  };

  service.showToBuyItems = function(){
    return listToBuy;
  };

};

})();
