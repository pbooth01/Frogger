
function start_game(){
	var canvas = $("#game")[0];
	var points = 0;
	var lives = 5;
	var level = 1;
	var counter = 0;
	var wins = 0;
	var girl = 0;
	var frog = {xPos: 180 , yPos: 475 };


	if(canvas.getContext){
		var ctx = canvas.getContext("2d");

		
		var x1 = 130;
		var x2 = 130;
		var x3 = 130;
		var x4 = 130;
		var x5 = 130;
		var y1 = 395;
		var y2 = 395;
		var y3 = 395;
		var y4 = 395;
		var y5 = 395;




		renderBackground();

		function renderBackground(){
			//fill in top half of board
			ctx.fillStyle = "rgb(19, 19, 70)";
		    ctx.fillRect (0, 0, 399, 282);
	    
	    	//fill in bottom half of board
		    ctx.fillStyle = "rgb(00, 00, 00)";
		    ctx.fillRect(0, 282, 399, 282);

		    /*Grabbing Sprite sheet
		    var spritePromise = new Promise(function(resolve, reject){
		    	while(!image.)
		    });
			*/
			var img = new Image();
			img.src = 'images/frogger_sprites.png';

			/*
			 *Draw the landing pads 
			 *So I remeber what each parameter stands for. Gonna be using drawImage a lot!
			 *sx source x(Top Left) dx destination x(Top Left)
			 *ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, 
			 */
			img.onload = function(){
				ctx.drawImage(img, x1, y1, 35, 35, 5, 80, 30, 35);
				ctx.drawImage(img, x2, y2, 35, 35, 93, 80, 30, 35);
				ctx.drawImage(img, x3, y3, 35, 35, 181, 80, 30, 35);
				ctx.drawImage(img, x4, y4, 35, 35, 269, 80, 30, 35);
				ctx.drawImage(img, x5, y5, 35, 35, 355, 80, 30, 35);


				//lives
				if(lives== 1){
					ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
				}
				if(lives == 2){
					ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
				}
				if(lives == 3){
					ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 30, 515, 20, 20);
				}
				if(lives == 4){
					ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 30, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 45, 515, 20, 20);
				}
				if(lives == 5){
					ctx.drawImage(img, 10, 325, 30, 30, 0, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 15, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 30, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 45, 515, 20, 20);
					ctx.drawImage(img, 10, 325, 30, 30, 60, 515, 20, 20);
				}

			}

		}


	}

}