/*********************************
 * CLASS DEFINITIONS
 *********************************/


var Courier = function(name, capableAreas, defaultAreas) {
	this.name = name;
 	this.capableAreas = capableAreas;
 	this.defaultAreas = defaultAreas;
 	this.daily = defaultAreas;
};

// Courier.prototype.sayHi = function() {
// 	console.log("hi " + this.name)
// }

Courier.prototype.isCapable = function(area) {
	return this.capableAreas.indexOf(area) !== -1
}

Courier.prototype.dailyList = function() {

	// for (key in this.daily[0]){
 //    console.log( key + ": " + this.daily[0][key]);
	// }

	// this.daily.forEach(function(obj, index){
 //    	for (var key in obj){
 //        console.log(obj[key]);
 //    	}
	// });

	// var dailyList = ""
	// for (var key in this.daily) {
 //    	dailyList += this.daily[key];
 //    	dailyList += ", ";
 //    }
 //    return dailyList;

 	var list = [];
 
 	for (var i = 0; i < this.daily.length; i++) {
 		// console.log(this.daily[i].name);
 		list.push(this.daily[i].name);
 	}

 	// console.log(list.join(', '));
 	return list.join(', ')

};


var Area = function(name) {
	this.name = name;	
};

var area1 = new Area ('area1');
var area2 = new Area ('area2');
var area3 = new Area ('area3');
var area4 = new Area ('area4');
var area5 = new Area ('area5');
var area6 = new Area ('area6');
var area7 = new Area ('area7');
var area8 = new Area ('area8');
var area9 = new Area ('area9');
var area10 = new Area ('area10');
var area11 = new Area ('area11');
var area12 = new Area ('area12');
var area13 = new Area ('area13');
var area14 = new Area ('area14');
var area15 = new Area ('area15');
var area16 = new Area ('area16');
var area17 = new Area ('area17');
var area18 = new Area ('area18');
var area19 = new Area ('area19');
var area20 = new Area ('area20');
var area21 = new Area ('area21');
var area22 = new Area ('area22');
var area23 = new Area ('area23');
var area24 = new Area ('area24');


var courier1 = new Courier ('courier1', [area23, area24, area1, area2 , area3, area4, area5], [area1, area2, area3]);
var courier2 = new Courier ('courier2', [area2, area3, area4, area5, area6, area7, area8, area9], [area4, area5, area6]);
var courier3 = new Courier ('courier3', [area5, area6, area7, area8, area9, area10, area11], [area7, area8, area9]);
var courier4 = new Courier ('courier4', [area8, area9, area10, area11, area12, area13, area4], [area10, area11, area12]);
var courier5 = new Courier ('courier5', [area10, area11, area12, area13, area14, area15, area16, area17], [area13, area14, area15]);
var courier6 = new Courier ('courier6', [area10, area11, area12, area13, area14, area15, area16, area17, area18, area19, area20], [area16, area17, area18]);
var courier7 = new Courier ('courier7', [area11, area12, area13, area14, area15, area16, area17, area18, area19, area20, area21, area22, area23], [area19, area20, area21]);
var courier8 = new Courier ('courier8', [area20, area21, area22, area23, area24, area1, area2], [area22, area23, area24]);


var allAreas = [area1, area2 , area3, area4, area4, area5, area6, area7, area8, area9, area10, area11, area12, area13, area14, area15, area16, area17, area18, area19, area20, area21, area22, area23, area24];

var allCouriers = [courier1, courier2, courier3, courier4, courier5, courier6, courier7, courier8];

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


// Loops through present couriers and assigns area to first available courier
// Then pushes/assigns area to courier's daily areas
function assignCapableCourier(area) {
	var present = getPresent();
	for(var i = 0; i < present.length; i++) {
		// console.log(present[i].isCapable(area))
		if (present[i].isCapable(area)){
			present[i].daily.push(area);
			break;
		}
	}
};


// Assigns all unassigned areas
function assignAll() {
	getPresent();

	unassignedList();

	var unassigned = unassignedList();

	for (var i = 0; i < unassigned.length; i++) {
		assignCapableCourier(unassigned[i]);
	}
};


// Diplays new area assignments on page
function displayNewAssignments() {

	var present = getPresent();

	for (var i = 0; i < present.length; i++) {
		$('#new').append('<div class="text">' + '<b>' + present[i].name + '</b>: ' + present[i].dailyList() + '</div>');
			// + ' - ' + present[i].dailyList() + '</div>');
		// console.log (present[i].dailyList())
	}
};



/*********************************
 * MAIN
 *********************************/

$(document).on('ready', function() {

	$("[name='my-checkbox']").bootstrapSwitch();
	
	for ( var i = 0; i < allCouriers.length; i++) {
		
		var label = $('<label>');
		label.text(allCouriers[i].name);

		var checkbox = $('<input type="checkbox" name="my-checkbox" class="checkbox" checked>');

		$('#courier-container').append(label);
		label.prepend(checkbox);

		// $('#courier-container').append(checkbox);
	}

	// Add Load button after checkboxes
	// $('#courier-container').append('<div><input type="button" value="Assign" id="load-btn"></div>');
	$('#courier-container').append('<div><button type="button" class="btn btn-info" id="load-btn">Assign</button></div>');


	$('#load-btn').click(function() {
        
        assignAll();

        displayNewAssignments();

    });
  
});






