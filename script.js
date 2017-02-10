

$(document).ready(function(){

	var canvasSize = 16;
	drawCanvas(canvasSize);

	$('#resize-canvas').on('click', function(){
		var size = prompt("What size canvas would you like?");
		if(size < 4 || size > 64)
			size = prompt("Must be between 4 and 64");

		$('.cell').remove();
		drawCanvas(size);
		return;
	});

	$('#clear-canvas').on('click', function(){
		$('.cell').remove();
		drawCanvas(canvasSize);
	});

	$('.cell').hover(function(){
		$(this).css("background-color", "black");
		console.log(String("painted" + this.id));
	});

});


function drawCanvas(canvasSize){

	var x = canvasSize;
	var cellSize = Math.floor(320/canvasSize)-2;

	for(xx = 0; xx<x; xx+=1){
		for(yy = 0; yy<x; yy+=1){
			$("#canvas").append("<div id=\" " + xx + "-" + yy + "\" class=\"cell\" style=\" width: " + cellSize +"px; height: " + cellSize + "px \"> </div>")
		}
	}

}

