
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

		//Grabbing Sprite sheet
		var img = new Image();
		img.src = 'images/frogger_sprites.png';

		renderBackground();

		function renderBackground(){
			//fill in top half of board
			ctx.fillStyle = "rgb(19, 19, 70)";
		    ctx.fillRect (0, 0, 399, 282);
	    
	    	//fill in bottom half of board
		    ctx.fillStyle = "rgb(00, 00, 00)";
		    ctx.fillRect(0, 282, 399, 282);
		}


	}

}