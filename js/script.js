var size = 16;


$(document).ready(function(){
	boardSetUp(size);
	
	$('.square').hover(function() {
	$(this).css('background-color', 'white');
	});

	$('#reset').click(function(){
		var input = prompt('How many squares per side? (1-100)');
		input = parseInt(input);
		while (isNaN(input) || input < 1 || input > 100) {
			input = prompt('Please type a valid number between 1 and 100.');
			input = parseInt(input);
		}
		size = input;
		clear();
		boardSetUp(size);
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
	$('.square').hover(function() {
	$(this).css('background-color', 'white');
	});
}

function clear() {
	$('tr').remove();	
}

