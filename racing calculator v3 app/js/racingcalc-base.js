$(document).ready(function() {

	// prevent pills from doing scroll-top effect
	$('ul#race-distance-type a, ul#fuel-unit-type a').click(function(event) {
		event.preventDefault();
	});

});//end ready()