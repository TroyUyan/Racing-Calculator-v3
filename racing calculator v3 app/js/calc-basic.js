$(document).ready(function() {

	//// handle selection of the race distance units (laps or timed)
	// adjust the form to represent the selection race distance
	function assignRaceDistanceType() {
		// get selected pill
		var raceDistanceType = $('ul#race-distance-type li.active a').html();
		// adjust form displays based on selected pill
		if (raceDistanceType == "Laps") {
			// set the visual addons
			$("#race-distance-addon").html("Laps");
			// disable the average race lap time field, not needed when using laps
			$("#average-race-lap").attr("disabled",true);
		} else if (raceDistanceType == "Minutes") {
			// set the visual addons
			$("#race-distance-addon").html("Minutes");
			// enable the average race lap time field
			$("#average-race-lap").attr("disabled",false);
		}
	};//end assignRaceDistanceType()

	// init form
	assignRaceDistanceType();
	
	// if user clicks on a pill
	$('ul#race-distance-type li a').click(function() {
		// remove active from everything
		$('ul#race-distance-type li').each(function() {
			$(this).removeClass("active");
		});
		// add active to the parent li of the a that was clicked
		$(this).parent().addClass("active");
		// adjust the form
		assignRaceDistanceType();
	});

});//end ready()