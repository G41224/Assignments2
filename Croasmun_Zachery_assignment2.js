alert("The story of the 4 Brave Paladens!");

//functions

var paladenNames = ["Sam", "tim", "jake", "Bob"];
var minuetsPerSpell = [10, 25, 33, 65];

var killOneEnimy = function(paladenNumber){
	var paladenName = paladenNames [paladenNumber];
		minOfSpell = minuetsPerSpell [paladenNumber];
	console.log("It will take the mighty " + paladenName + " a total of " + minOfSpell + " Minuets to cast the death curse!");
	
	for (var minuets = 0; minuets < minOfSpell; minuets += 2){
	var minLeft = minOfSpell - minuets;
	console.log(minuets + " have passed " + minLeft + " till he is finished");
	};
	
};
killOneEnimy(0);
killOneEnimy(1);
killOneEnimy(2);
killOneEnimy(3);