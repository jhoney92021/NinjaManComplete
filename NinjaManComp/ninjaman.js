var ninjaman = {
		x: 1,
		y: 1
	}

	function drawNinjaman(){
		document.getElementById('ninjaman').style.top =
			ninjaman.y * 40 + 'px'
		document.getElementById('ninjaman').style.left =
			ninjaman.x * 40 + 'px'
	}
	drawNinjaman()

	document.onkeydown = function(e){
		if(e.keyCode == 37){// move left
			if(lvl[ninjaman.y][ninjaman.x - 1] != 1){
				ninjaman.x--;
			}			
		}
		if(e.keyCode == 39){//move right
			if(lvl[ninjaman.y][ninjaman.x + 1] != 1){
				ninjaman.x++;
			}
		}
		if(e.keyCode == 38){//move up
			if(lvl[ninjaman.y - 1][ninjaman.x] != 1){
				ninjaman.y--;
			}
		}
		if(e.keyCode == 40){//move down
			if(lvl[ninjaman.y + 1][ninjaman.x] != 1){
				ninjaman.y++;
			}
		}
		if(lvl[ninjaman.y][ninjaman.x] == 2){
			score += 10;
		}
		if(lvl[ninjaman.y][ninjaman.x] == 3){
			score += 5;
		}
						//collision
		 if(ninjaman.y == bluey.y && ninjaman.x == bluey.x) {
        lives--;
	    }
	    if(ninjaman.y == pinky.y && ninjaman.x == pinky.x) {
	        lives--;
	    }
	    if(ninjaman.y == pumpky.y && ninjaman.x == pumpky.x) {
	        lives--;
	    }
	    if(ninjaman.y == red.y && ninjaman.x == red.x) {
	        lives--;
	    }
		

		lvl[ninjaman.y][ninjaman.x] = 0;

		drawNinjaman()
		drawLvl()
		modLives()
		modScore()
	}