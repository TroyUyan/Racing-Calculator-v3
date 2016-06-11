$(document).ready(function() {

	//// handle selection of the race distance units (laps or timed)
	// adjust the form to represent the selection of race distance
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

	});//end click()

	//// handle selection of the fuel type units (laps or timed)
	// adjust the form to represent the selection of fuel units
	function assignFuelUnitType() {

		// get selected pill
		var fuelUnitType = $('ul#fuel-unit-type li.active a').html();

		// adjust form displays based on selected pill
		if (fuelUnitType == "Liters") {

			// set the visual addons
			$("#fuel-per-lap-addon").html("Liters");
			$("#fuel-tank-size-addon").html("Liters");


		} else if (fuelUnitType == "Gallons") {

			// set the visual addons
			$("#fuel-per-lap-addon").html("Gallons");
			$("#fuel-tank-size-addon").html("Gallons");

		}

	};//end assignFuelUnitType()

	// init form
	assignFuelUnitType();

	// if user clicks on a pill
	$('ul#fuel-unit-type li a').click(function() {

		// remove active from everything
		$('ul#fuel-unit-type li').each(function() {
			$(this).removeClass("active");
		});

		// add active to the parent li of the a that was clicked
		$(this).parent().addClass("active");

		// adjust the form
		assignFuelUnitType();

	});//end click()

	//// handle the calculator results
	// define function to create the results display
	function createFormResults() {

		// reset vars
		var resultsBuildable = 0;
		var errorText = "";

		// check to make sure all require values are filled out, if not, form is not buildable and add that field as an error list item
		if ( $("#race-distance").val() === "") {resultsBuildable = 0;errorText = "<li>You input a race distance.</li>";};
		// get distance type and optionally require / validate the average race lap field
		var raceDistanceType = $('ul#race-distance-type li.active a').html();
		if (raceDistanceType == "Minutes") {
			if ( $("#average-race-lap").val() === "") {resultsBuildable = 0;errorText = errorText + "<li>You input an average race lap time.</li>";};
		};
		if ( $("#fuel-per-lap").val() === "") {resultsBuildable = 0;errorText = errorText + "<li>You input the average fuel usage per lap.</li>";};
		if ( $("#fuel-tank-size").val() === "") {resultsBuildable = 0;errorText = errorText + "<li>You input the max fuel tank size.</li>";};

		// if no errors
		if (errorText == "") {
			// form ready
			resultsBuildable = 1;
			$("#results").html("<h2 style='color:green'>EVERYTHING READY</h2><p><span class='glyphicon glyphicon-refresh glyphicon-spin' aria-hidden='true'></span> Processing...   *NOT IMPLEMENTED*</p>");
		} else {
			// else, display list of errors
			$("#results").html("<p>The results will be ready when:</p><ul>" + errorText + "</ul>");
		}


		// build the results
		if (resultsBuildable === 1) {
			// build code / loops here
		};

		// calc functions checks to make sure all required forms of the present state have valid values


	};// end createFormResults()

	// init results display
	createFormResults();

	// watch form fields for changes
	$('#race-distance, #average-race-lap, #fuel-per-lap, #fuel-tank-size').on('keyup',function(){
		// re-build results on change
		createFormResults();
	});//end keyup

	// watch pills for changes
	$('ul#race-distance-type li a, ul#fuel-unit-type li a').click(function() {
		// re-build results on change
		createFormResults();
	});// end click

});//end ready()