$(document).ready(function() {

	/**** Documentation / Functional Overview ****

	Section 1: Race distance type (laps vs timed)
	- Define a function to get the value of the selected pill	and adjust
		the form to respond (assignRaceDistanceType())
	- Call the function on load
	- Call the function every time the user clicks on one of the ul#race-distance-type pills

	Section 2: Fuel unit type (liters vs gallons)
	- Define a function to get the value of the selected pill	and adjust
		the form to respond (assignFuelUnitType())
	- Call the function on load
	- Call the function every time the user clicks on one of the ul#fuel-unit-type pills

	Section 3: Main function to build, and trigger building, the results display
	- Reset used vars
	- Check all needed fields based on form state, if empty add an item to the error list
	- If the error list has errors, display the errors, and don't build the results
	- If the error list is empty, trigger the results build code

	Section 4: Calling the main results build function
	- Call the function on load (so it displays all error / "waiting for" text)
	- Call the function everytime the user clicks on a pill
	- Call the function everytime the user types a number in any of the input fields

	**** End Documentation ****/

	//// handle selection of the race distance units (laps or timed)
	// adjust the form to represent the selection of race distance
	function assignRaceDistanceType() {

		// get selected pill
		var raceDistanceType = $('ul#race-distance-type li.active a').html();

		// adjust form displays based on selected pill
		if (raceDistanceType == "Laps") {

			// set the visual addons
			$("#race-distance-addon").html("Laps");

			// disable the average race lap time field, not needed when using laps, swap placeholder text
			$("#average-race-lap").attr("disabled",true).attr("placeholder","Not needed when using laps");

		} else if (raceDistanceType == "Minutes") {

			// set the visual addons
			$("#race-distance-addon").html("Minutes");

			// enable the average race lap time field, add example placeholder text
			$("#average-race-lap").attr("disabled",false).attr("placeholder","Example: 92.349");
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
			$("#results").html("<h2 style='color:green'>Results</h2><p><span class='glyphicon glyphicon-refresh glyphicon-spin' aria-hidden='true'></span> Processing...   *NOT IMPLEMENTED*</p>");
		
		} else {

			// else, display list of errors
			$("#results").html("<p>The results will be ready when:</p><ul>" + errorText + "</ul>");
		}

		// if there were no errors:
		// build the results!
		if (resultsBuildable === 1) {

			// get final pill data
			var raceDistanceType = $('ul#race-distance-type li.active a').html();
			var fuelUnitType = $('ul#fuel-unit-type li.active a').html();

			// get all (needed) final form data
			var raceDistance = $("#race-distance").val();
			if (raceDistanceType == "Minutes") {
				var averageRaceLap = $("#average-race-lap").val();
			};
			var fuelPerLap = $("#fuel-per-lap").val();
			var fuelTankSize = $("#fuel-tank-size").val();

			// find final lap count, based on the raceDistanceType
			if (raceDistanceType == "Minutes") {
				// number of minutes times 60 to get race length in seconds
				// divide that by the average race lap time, then add 1.1 laps as a safety buffer
				// and then round the number up to get total full final laps
				var finalLaps = Math.ceil(((raceDistance * 60) / averageRaceLap) + 1.1);
			} else if (raceDistanceType == "Laps") {
				// since distance is in laps, finals laps in the distance
				var finalLaps = raceDistance;
			} else {
				console.log("Results build failed at raceDistanceType check.");
			}

			// define the safety buffer to add to fuel calculations to allow for the margin of error
			// adding 1 liter, or 0.262 gallons, as a buffer. The amounts are the same.
			if (fuelUnitType == "Liters") {
				var fuelSafetyBufferAmount = 1;
			} else if (fuelUnitType == "Gallons") {
				var fuelSafetyBufferAmount = 0.264;
			} else {
				console.log("Results build failed at fuelUnitType check.");
			}

			// lap count times the average fuel per lap, plus the fuel safety buffer
			// then rounded to 2 decimal places to get a usable final fuel needed amount
			var finalFuelNeeded = (finalLaps * fuelPerLap + fuelSafetyBufferAmount);
			finalFuelNeeded = finalFuelNeeded.toFixed(2);

		};// end results builder

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

}); //end ready()