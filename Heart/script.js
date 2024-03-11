$(document).ready(function() {
	for (var i = 0; i < 50; i++) {
		var heart = $('<div class="heart"></div>').appendTo('#heart-rain');
		var heartSize = Math.floor(Math.random() * 30) + 10;
		heart.css('width', heartSize + 'px');
		heart.css('height', heartSize + 'px');
	}
});