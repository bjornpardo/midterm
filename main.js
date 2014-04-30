/*********************************
 * CLASS DEFINITIONS
 *********************************/

var Courier = function(name, capableAreas, defaultAreas) {
	this.name = name;
 	this.capableAreas = capableAreas;
 	this.defaultAreas = defaultAreas;
 	this.daily = [];
};

// Courier.prototype.sayHi = function() {
// 	console.log("hi " + this.name)
// }

Courier.prototype.isCapable = function(area) {
	return this.capableAreas.indexOf(area) !== -1
}



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

// area1.defaultcourier = courier1



/*********************************
 * FUNCTION DEFINITIONS
 *********************************/

// Creating array of all couriers present based on who is checked
function getPresent() {
	var couriersPresent = [];

	$('input[type=checkbox]:checked').each(function() {
		var courierName = ($(this).parent().text());
        couriersPresent.push(searchCourier(courierName));
     });
	// console.log(couriersPresent);
	return couriersPresent;
};


// Creating array of all couriers present based on who is NOT checked
function getAbsent() {
	var couriersAbsent = [];

	$('input[type=checkbox]:not(:checked)').each(function() {
		var courierName = ($(this).parent().text());
        couriersAbsent.push(searchCourier(courierName));
     });
	// console.log(couriersPresent);
	return couriersAbsent;
};


// Search for courier obj by name
function searchCourier(name) {
	for(var i = 0; i < allCouriers.length; i++) {
		if (allCouriers[i].name === name) {
			return allCouriers[i];
		}
	}
};


//Returns list of unassigned areas
function unassignedList() {
	var absent = getAbsent();
	var unassignedArrays = []

	for(var i = 0; i < absent.length; i++) {
		unassignedArrays.push(absent[i].defaultAreas);
	}
	
	var unassignedStrings = [];

	for(var i = 0; i < unassignedArrays.length; i++) {
		// unassignedStrings.push(unassignedArrays[i].join());
		
		// unassignedArrays[i].concat(unassignedStrings);
		
		// var UA = unassignedArrays[i];
		// for (var i = 0; i < UA.length; i++) {
		// 	unassignedStrings.push(UA[i]);
		// }

		unassignedStrings = unassignedStrings.concat.apply(unassignedStrings,unassignedArrays[i]);
	}

	return unassignedStrings;
}; 

var test = [];

// Loops through present couriers and assigns area to first available courier
// The pushes area onto courier's daily areas
function findCapableCourier(area) {
	var present = getPresent();
	for(var i = 0; i < present.length; i++) {
		if (present[i].isCapable(area)){
			test.push(area);
		}
	}
};




// function assignAreas() {
// 	var areas = unassignedList();
// 	var couriers = getPresent();

// 	for (var i = 0; i < areas.length; i++) {
//     	for (var j = 0; j < couriers.length; j++) {
//     		var courierArea = couriers[i];
//     		for (var k = 0; k < courierArea.length; k++) {

//         	if (areas[i].name === courierArea[k].name) {
//           		couriers[i].daily.push(areas[i].name);
// 	        }
//         	}
//     	}
// 	}
// }


/*********************************
 * MAIN
 *********************************/

$(document).on('ready', function() {

	for ( var i = 0; i < allCouriers.length; i++) {
		
		var label = $('<label>');
		label.text(allCouriers[i].name);

		var checkbox = $('<input type="checkbox" class="checkbox" checked="checked">');

		$('#courier-container').append(label);
		label.prepend(checkbox);

		// $('#courier-container').append(checkbox);
	}

	// Add Load button after checkboxes
	$('#courier-container').append('<div><input type="button" value="Load" id="load-btn"></div>');

	$('#load-btn').click(function() {
        // getValues();
        console.log(getPresent());
    });
  
});






