var bluey = {//blueys location
		x: enemyStart(),
		y: enemyStart()
	}
var idkList ={//reference for movement
	1: 'up',
	2: 'down',
	3: 'left',
	4: "right"
}
function idkMov(){
var idk = bluMov();
if (idk == 1){
	    if(lvl[bluey.y - 1][bluey.x] != 1) {
	        bluey.y--;
	    }
}
if (idk == 2){
	    if(lvl[bluey.y + 1][bluey.x] != 1) {
	        bluey.y++;
	    }
}
if (idk == 3){
	    if(lvl[bluey.y][bluey.x - 1] != 1) {
	        bluey.x--;
	    }
}
if (idk == 4){
	    if(lvl[bluey.y][bluey.x + 1] != 1) {
	        bluey.x++;
	    }
}
if(ninjaman.y == bluey.y && ninjaman.x == bluey.x) {
lives--;
}

return idk
}
idkMov();

function drawBluey(){
		document.getElementById('bluey').style.top =
			bluey.y * 40 + 'px'
		document.getElementById('bluey').style.left =
			bluey.x * 40 + 'px'
		}
drawBluey();

function bluMov(){
	return Math.floor(Math.random()*Math.floor(4));
}


function bluLog(){//blueys logic
	console.log('blueylogic')

		idkMov();
		drawBluey();

		modLives();
	

		setTimeout(bluLog, 1000);

	}

		bluLog();


		