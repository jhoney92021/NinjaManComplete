

	function drawEnemies(){

		document.getElementById("pinky").style.left = 
			pinky.x*40+"px";
    	document.getElementById("pinky").style.top = 
    		pinky.y*40+"px";
		document.getElementById("pumpky").style.left = 
			pumpky.x*40+"px";
    	document.getElementById("pumpky").style.top = 
    		pumpky.y*40+"px";
	}
	drawEnemies();

	function enemyStart() {//enem

    	return Math.floor(Math.random() * Math.floor(11)) + 1;
		}
		enemyStart();

