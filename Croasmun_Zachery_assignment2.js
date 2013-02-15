alert("The story of 4 Brave Wizards!");

console.log("Our story begins as our 4 hero’s are finishing off a fight against dragons.");

var wizardNames = ["Sam", "tim", "jake", "Bob"],
	minuetsPerSpell = [4, 14, 8, 12],
	dragonNames = ["Thor", "Thunder", "Claw", "Chaos"];

var killOneEnimy = function(wizardNumber){
	var wizardName = wizardNames [wizardNumber];
		minOfSpell = minuetsPerSpell [wizardNumber];
		dragon = dragonNames [wizardNumber];
	console.log("It will take the mighty " + wizardName + " a total of " + minOfSpell + " Minuets to cast the death curse!"
	+ " against the terrifyingly fearsome dragon " + dragon);
	
	for(var minuets = 0; minuets < minOfSpell; minuets += 2){
		var minLeft = minOfSpell - minuets;
		console.log(minuets + " Minuets have passed " + minLeft + " Minuets till spell is finished");
	};
	return console.log("I have slain the beast!");
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
		console.log(daysOfTravel + " Days Traveled! " + daysLeft + " Days left on his journey! ");	
	};
	return console.log("We made it alive!");
};

whichPath(0);
whichPath(1);
whichPath(2);
whichPath(3);


// more story line here
console.log();

var spellToUse = ["Death", "Paralyses", "Fear", "Shielding"],
	spellTime = [8, 4, 6, 2];
	
var spellUsed = function(spellNumber){
	var spell = spellToUse [spellNumber];
		timeOfSpell = spellTime [spellNumber];
		nameOfWizard = wizardNames [spellNumber];
	console.log(nameOfWizard + " cast the spell of " + spell + " and it took him " + timeOfSpell + "minuets!");

	for(var minToSpell = 0; minToSpell < timeOfSpell; minToSpell += 1){
		var spellUsed = timeOfSpell - minToSpell;
		console.log(minToSpell + " Minuets passed " + spellUsed + " Minuets are left.");
	
	};		
	return console.log("Spell Cast!");

};

spellUsed(0);
spellUsed(1);
spellUsed(2);
spellUsed(3);

//end of story
Console.log();