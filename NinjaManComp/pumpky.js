var pumpky = {//pumpky location
		x: enemyStart(),
		y: enemyStart()
	}
var idkList ={//reference for movement
	1: 'up',
	2: 'down',
	3: 'left',
	4: "right"
}
function idkMovPumpky(){
var idk = bluMov();
if (idk == 1){
	    if(lvl[pumpky.y - 1][pumpky.x] != 1) {
	        pumpky.y--;
	    }
}
if (idk == 2){
	    if(lvl[pumpky.y + 1][pumpky.x] != 1) {
	        pumpky.y++;
	    }
}
if (idk == 3){
	    if(lvl[pumpky.y][pumpky.x - 1] != 1) {
	        pumpky.x--;
	    }
}
if (idk == 4){
	    if(lvl[pumpky.y][pumpky.x + 1] != 1) {
	        pumpky.x++;
	    }
}
if(ninjaman.y == pumpky.y && ninjaman.x == pumpky.x) {
    lives--;
}

return idk
}
idkMovPumpky();

function drawPumpky(){

	document.getElementById('pumpky').style.top =
		pumpky.y * 40 + 'px'
	document.getElementById('pumpky').style.left =
		pumpky.x * 40 + 'px'
	}
drawPumpky();

function bluMov(){
	return Math.floor(Math.random()*Math.floor(4));
}


function pumpkyLog(){//pumpky logic
	console.log('pumpky logic')

		idkMovPumpky();
		drawPumpky();

		modLives();
	

		setTimeout(pumpkyLog, 1000);

	}

		pumpkyLog();		
