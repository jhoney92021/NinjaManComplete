var pinky = {//reds location
		x: enemyStart(),
		y: enemyStart()
	}
var idkList ={//reference for movement
	1: 'up',
	2: 'down',
	3: 'left',
	4: "right"
}
function idkMovPinky(){
var idk = bluMov();
if (idk == 1){
	    if(lvl[pinky.y - 1][pinky.x] != 1) {
	        pinky.y--;
	    }
}
if (idk == 2){
	    if(lvl[pinky.y + 1][pinky.x] != 1) {
	        pinky.y++;
	    }
}
if (idk == 3){
	    if(lvl[pinky.y][pinky.x - 1] != 1) {
	        pinky.x--;
	    }
}
if (idk == 4){
	    if(lvl[pinky.y][pinky.x + 1] != 1) {
	        pinky.x++;
	    }
}
if(ninjaman.y == pinky.y && ninjaman.x == pinky.x) {
    lives--;
}

return idk
}
idkMovPinky();

function drawPinky(){

	document.getElementById('pinky').style.top =
		pinky.y * 40 + 'px'
	document.getElementById('pinky').style.left =
		pinky.x * 40 + 'px'
	}
drawPinky();

function bluMov(){
	return Math.floor(Math.random()*Math.floor(4));
}


function pinkyLog(){//reds logic
	console.log('pinky logic')

		idkMovPinky();
		drawPinky();

		modLives();

		setTimeout(pinkyLog, 1000);

	}

		pinkyLog();		