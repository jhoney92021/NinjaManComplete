var red = {//reds location
		x: enemyStart(),
		y: enemyStart()
	}
var idkList ={//reference for movement
	1: 'up',
	2: 'down',
	3: 'left',
	4: "right"
}
function idkMovRed(){
var idk = bluMov();
if (idk == 1){
	    if(lvl[red.y - 1][red.x] != 1) {
	        red.y--;
	    }
}
if (idk == 2){
	    if(lvl[red.y + 1][red.x] != 1) {
	        red.y++;
	    }
}
if (idk == 3){
	    if(lvl[red.y][red.x - 1] != 1) {
	        red.x--;
	    }
}
if (idk == 4){
	    if(lvl[red.y][red.x + 1] != 1) {
	        red.x++;
	    }
}
if(ninjaman.y == red.y && ninjaman.x == red.x) {
    lives--;
}

return idk
}
idkMovRed();

function drawRed(){

	document.getElementById('red').style.top =
		red.y * 40 + 'px'
	document.getElementById('red').style.left =
		red.x * 40 + 'px'
	}
drawRed();

function bluMov(){
	return Math.floor(Math.random()*Math.floor(4));
}


function redLog(){//reds logic
	console.log('red logic')

		idkMovRed();
		drawRed();

		modLives();
	

		setTimeout(redLog, 1000);

	}

		redLog();


		