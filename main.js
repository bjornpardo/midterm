/*********************************
 * CLASS DEFINITIONS
 *********************************/


var Courier = function(name, capableAreas, defaultAreas) {
	this.name = name;
 	this.capableAreas = capableAreas;
 	this.defaultAreas = defaultAreas;
 	this.daily = [];
};

var Area = function(name) {
	this.name = name;
	
};

var area1 = new Area ('a');
var area2 = new Area ('b');
var area3 = new Area ('c');
var area4 = new Area ('d');
var area5 = new Area ('e');
var area6 = new Area ('f');
var area7 = new Area ('g');
var area8 = new Area ('h');
var area9 = new Area ('i');
var area10 = new Area ('j');

var courier1 = new Courier ('1', [area1, area2 , area3, area4], [area1, area2, area3]);
var courier2 = new Courier ('2', [area4, area5, area6, area7], [area4, area5]);
var courier3 = new Courier ('3', [area1, area2 , area3, area4, area4, area5, area6, area7, area8, area9, area10], [area6, area7, area8, area9, area10]);

var allAreas = [area1, area2 , area3, area4, area4, area5, area6, area7, area8, area9, area10];

var allCouriers = [courier1, courier2, courier3];


// var courier1 = new Courier ('1', [area1, area2 , area3, area4]);
// var courier2 = new Courier ('2', [area4, area5, area6, area7]);
// var courier3 = new Courier ('3', [area1, area2 , area3, area4, area4, area5, area6, area7, area8, area9, area10]);

// area1.defaultcourier = courier1


/*********************************
 * FUNCTION DEFINITIONS
 *********************************/

// Creating array of all couriers present base  d on who is checked
function getValues() {
	var couriersPresent = [];

		$('input[type=checkbox]:checked').each(function() {
        couriersPresent.push($(this).parent().text());
        });

		return couriersPresent;
};


// Search for courier obj by name
function searchCourier(name) {
	for(var i = 0; i < allCouriers.length; i++) {
		if (this.name === name) {
			return allCouriers[i];
		}
	}
};


// function searchCouriers(arr) {
// 	var presentCouriers = [];
// 	for(var i = 0; i < allCouriers.length; i++) {
// 		if (this.name = arr) {
// 			presentCouriers.push('allCouriers[i]');
// 			return presentCouriers;
// 		}
// 	}
// };




/*********************************
 * MAIN
 *********************************/

$(document).on('ready', function() {

	for ( var i = 0; i < allCouriers.length; i++) {
		
		var label = $('<label>');
		label.text(allCouriers[i].name);

		var checkbox = $('<input type="checkbox" class="checkbox" checked>');

		$('#courier-container').append(label);
		label.prepend(checkbox);

		// $('#courier-container').append(checkbox);
	}

	// Add Load button after checkboxes
	$('#courier-container').append('<div><input type="button" value="Load" id="load-btn"></div>');

	$('#load-btn').click(function() {
        // getValues();
        console.log(getValues());
    });
  
});






