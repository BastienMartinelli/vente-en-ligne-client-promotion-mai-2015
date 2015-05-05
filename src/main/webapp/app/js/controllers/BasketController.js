angular.module("venteEnLigne").controller("BasketController", function (ItemService) {

	var webStorage = window['localStorage'];

	this.getBasket = function () {
		return JSON.parse(webStorage.getItem('basket'));
	};

	this.addItem = function (value) {
		var basket = JSON.parse(webStorage.getItem('basket'));
		if (basket == null) {
			basket=[];
		}
		basket = basket.filter(function(v) {
			return v.id!=value.id
		});
		basket.push(value);
		
		webStorage.setItem("basket", JSON.stringify(basket));
		console.log(webStorage.getItem("basket"));

	};
	
	this.addItem({"id":"1", "name":"truc","unitPrice":"15","quantity":"2"});
	this.addItem({"id":"2", "name":"bidule","unitPrice":"45","quantity":"3"});
	
	this.basket = this.getBasket();
	
	this.showItem = function(item){
		ItemService.showItem(item)
	};

});
