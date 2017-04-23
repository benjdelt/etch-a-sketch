var size = 16;
var color = '#fff';

$(document).ready(function(){
	boardSetUp(size);
	draw(color);

	$('#reset').click(function() {
		reset();
	});

	$('#random').click(function() {
		var red = Math.floor(Math.random()*256);
		var green = Math.floor(Math.random()*256);
		var blue = Math.floor(Math.random()*256);
		var color = "rgb(" + red + ", " + green + ", " + blue + ")";
		console.log(color);
		draw(color);
	});

	$('#white').click(function() {
		draw('#fff');
	});
	$('#eraser').click(function() {
		draw('#000');
	});

	$('#context').click(function(){
		$('p').slideToggle();
	});
});

function boardSetUp(number) {
	var squareSize = 600/size;
	for (var i = 1; i <= number; i += 1) {
		$('#board > table').append('<tr>');
	}
	for (var j = 1; j <= number; j+=1) {
		$('tr').append("<td><div class='square'></div></td>");
	}
	$('.square').css({'width': squareSize, 'height': squareSize });

}

function draw(color, opacity) {	
	$('.square').hover(function() {
	$(this).css('background-color', color);
	});
}

function clear() {
	$('tr').remove();	
}

function reset() {
	var input = prompt('How many squares per side? (1-100)');
	input = parseInt(input);
	while (isNaN(input) || input < 1 || input > 100) {
		input = prompt('Please type a valid number between 1 and 100.');
		input = parseInt(input);
	}
	size = input;
	clear();
	boardSetUp(size);
	draw(color);
}