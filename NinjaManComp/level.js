var lvlDict = {
		0: 'blank',
		1: 'wall',
		2: 'sushi',
		3: 'onigiri',
		4: 'ninjaman',
		5: 'bluey',
		}


function lvlGen(){//level Generation
		var lvl = [];
		for(var i=0;i<13;i++){
			lvl.push([]);
			}
		for(var i=0;i<13;i++){//hard borders
			lvl[0].push(1);
			lvl[12].push(1);
			}
		lvl[1].push(1);
		lvl[11].push(1);

		for(var i=1;i<12;i++){//hard borders
			lvl[1].push(2);
			lvl[11].push(2);
			}
		lvl[1].push(1);
		lvl[11].push(1);
		 
		for(var row = 2; row < 11; row++){//soft border
   		 	lvl[row].push(1);   
   		 	lvl[row].push(2);
   		 	for(var i = 2; i < 11; i++){//innermap
			lvl[row].push(randLvl(3));
			}
			lvl[row].push(2);//soft border   
   		 	lvl[row].push(1);
	 	}
		
		return lvl;
	} 

	function randLvl(max) {//random integers for level
    return Math.floor(Math.random() * Math.floor(max)) + 1;
		}
	
	function drawLvl(){
		output = "";

			for(var row = 0; row < lvl.length; row++){
				output += "<div class = 'row'>"
				for(var x = 0; x < lvl[row].length; x++){
					output += "<div class = '" + lvlDict[lvl[row][x]] + "'></div>"
					}
				output += "</div>"
				}

			document.getElementById('lvl').innerHTML = output;
		}
	var lvl = lvlGen();
	drawLvl()	


		var score = 0;

	function modScore(){//modify score
		if(lives != 0){
				document.getElementById("score").innerHTML = score;
			}
			else if(lives = 0){
				score = 0;
				document.getElementById("score").innerHTML = score;
			}
	}
	modScore()

	var lives = 3;

	function modLives(){//modify lives
		if(lives > 0){
			document.getElementById("lives").innerHTML = lives;
		}
		else if(lives <= 0){
			document.getElementById("lives").innerHTML = "<h1>Game Over</h1>";
		}
	}
	modLives()

