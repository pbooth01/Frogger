
function start_game(){
	var canvas = $("#game")[0];
	var score = 0;
	var lives = 5;
	var level = 1;
	var counter = 0;
	var wins = 0;
	var frog = {xPos: 180 , yPos: 475 };


	if(canvas.getContext){
		var ctx = canvas.getContext("2d");

		renderBackground();

		function renderBackground(){
			//fill in top half of board
			ctx.fillStyle = "rgb(19, 19, 70)";
		    ctx.fillRect (0, 0, 399, 282);
	    
	    	//fill in bottom half of board
		    ctx.fillStyle = "rgb(00, 00, 00)";
		    ctx.fillRect(0, 282, 399, 282);

			var img = new Image();
			img.src = 'images/frogger_sprites.png';

			/*
			 *So I remeber what each parameter stands for. Gonna be using drawImage a lot!
			 *sx source x(Top Left) dx destination x(Top Left)
			 *ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight 
			 */
			img.onload = function(){


				//Draw the turtles
				var turtleImageCoords = {xPos: 130, yPos: 395};

				ctx.drawImage(img, turtleImageCoords.xPos, turtleImageCoords.yPos, 35, 35, 5, 80, 30, 35);
				ctx.drawImage(img, turtleImageCoords.xPos, turtleImageCoords.yPos, 35, 35, 93, 80, 30, 35);
				ctx.drawImage(img, turtleImageCoords.xPos, turtleImageCoords.yPos, 35, 35, 181, 80, 30, 35);
				ctx.drawImage(img, turtleImageCoords.xPos, turtleImageCoords.yPos, 35, 35, 269, 80, 30, 35);
				ctx.drawImage(img, turtleImageCoords.xPos, turtleImageCoords.yPos, 35, 35, 355, 80, 30, 35);


				//using number of lives to draw the frogs at the bottom
				var frogXPos = 0;
				for(var i = 0; i < lives; i++){
					ctx.drawImage(img, 10, 325, 30, 30, frogXPos, 515, 20, 20);
					frogXPos += 15;
				}


				// Grabbing both Frogger and the green map ending 
				ctx.drawImage(img, 0, 0, 399, 100, -5, 5, 410, 115);

				//Text at the bottom of te canvas
				ctx.fillStyle="rgb(0, 255, 0)";
				ctx.font="30px Verdana";
				ctx.fillText("Level " + level, 150, 535);
			
				ctx.font="11px Verdana";
				ctx.fillText("Score: "+ points +"	Highscore: 0", 0, 555);

				// Put in purple strips	
				ctx.drawImage(img, 0, 120, 399, 30, 0, 283, 399, 30);
				ctx.drawImage(img, 0, 120, 399, 30, 0, 475, 399, 30);

			}

		}


	}

}