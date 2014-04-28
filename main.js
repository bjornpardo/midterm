/*********************************
 * CLASS DEFINITIONS
 *********************************/


var Courier = function(name, capableAreas) {
	this.name = name;
 	this.capableAreas = capableAreas;
 	this.daily = [];
};

var Area = function(name, defaultCourier) {
	this.name = name;
	this.defaultCourier = defaultCourier;
};

var courier1 = new Courier ('1', [area1, area2 , area3, area4]);
var courier2 = new Courier ('2', [area4, area5, area6, area7]);
var courier3 = new Courier ('3', [area1, area2 , area3, area4, area4, area5, area6, area7, area8, area9, area10]);

var area1 = new Area ('a', courier1);
var area2 = new Area ('b', courier1);
var area3 = new Area ('c', courier1);
var area4 = new Area ('d', courier1);
var area5 = new Area ('e', courier2);
var area6 = new Area ('f', courier2);
var area7 = new Area ('g', courier2);
var area8 = new Area ('h', courier3);
var area9 = new Area ('i', courier3);
var area10 = new Area ('j', courier3);

var allAreas = [area1, area2 , area3, area4, area4, area5, area6, area7, area8, area9, area10];

var allCouriers = [courier1, courier2, courier3];


// var courier1 = new Courier ('1', [area1, area2 , area3, area4]);
// var courier2 = new Courier ('2', [area4, area5, area6, area7]);
// var courier3 = new Courier ('3', [area1, area2 , area3, area4, area4, area5, area6, area7, area8, area9, area10]);

// area1.defaultcourier = courier1


/*********************************
 * FUNCTION DEFINITIONS
 *********************************/

// var couriersPresent = ;

// $('.btn').on('click',function() {
// 		// console.log("ok");
// 		var quote = $("textarea.quote").val();
// 		var author = $("input.author").val();
// 		var star = $("input.star").val();
// 		$('ul').append('<li class="result"> <span class="hidestar">' 
// 			+ star + '</span>' + '" ' + quote +' "' + ' ~ ' + author 
// 			+ '. (Star Rating: ' + star + ')</li>') ;
 
var assignAreas = function (couriersPresent, allAreas) {

}


/*********************************
 * MAIN
 *********************************/

$(document).on('ready', function() {

	for ( var i = 0; i < allCouriers.length, i++) {
		var checkbox = $('<input type = "checkbox">');
		var label = $('<label>');
	}
  
});






