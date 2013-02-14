alert("The story of 4 Brave Wizards!");

//functions

var wizardNames = ["Sam", "tim", "jake", "Bob"],
	minuetsPerSpell = [4, 14, 8, 12],
	dragonNames = ["Thor", "Thunder", "Claw", "Chaos"];

var killOneEnimy = function(wizardNumber){
	var wizardName = wizardNames [wizardNumber];
		minOfSpell = minuetsPerSpell [wizardNumber];
		dragon = dragonNames [wizardNumber];
	console.log("It will take the mighty " + wizardName + " a total of " + minOfSpell + " Minuets to cast the death curse!"
	+ " against the terrifyingly fearsome " + dragon);
	
	for(var minuets = 0; minuets < minOfSpell; minuets += 2){
		var minLeft = minOfSpell - minuets;
		console.log(minuets + " Minuets have passed " + minLeft + " Minuets till he is finished");
	};
	
};
killOneEnimy(0);
killOneEnimy(1);
killOneEnimy(2);
killOneEnimy(3);

//story line in here
console.log();


var pathToTake = ["North", "South", "East", "West"],
	daysOnPath = [8, 7, 9, 3];
	
var whichPath = function(pathNumber){
	var path = pathToTake [pathNumber];
		days = daysOnPath [pathNumber];
		wizard = wizardNames [pathNumber];
	console.log(wizard + " decided upon taking the path to the " + path + " and walked for " + days);
	
	for(var daysOfTravel = 0; daysOfTravel < days; daysOfTravel += 1){
		var daysLeft = daysOfTravel - days;
		console.log(daysOfTravel + " Days Traveled! " + daysLeft + " Days left on this journey! ");	
	};

};

whichPath(0);
whichPath(1);
whichPath(2);
whichPath(3);