<?php
  $htmlTitle = "Basic";
	include_once 'inc/header.inc.php';
?>

<div class="container">

  <h1><?php echo $htmlTitle; ?> Racing Calculator</h1>

  <div class="row">

    <div class="col-xs-12 col-md-6">
      <h3>Race Distance Type</h3>
      <ul id="race-distance-type" class="nav nav-pills nav-justified">
        <li class="active"><a href="#">Laps</a></li>
        <li><a href="#">Minutes</a></li>
      </ul>
    </div><!--end col-->

    <div class="col-xs-12 col-md-6">
      <h3>Fuel Unit Type</h3>
      <ul id="fuel-unit-type" class="nav nav-pills nav-justified">
        <li class="active"><a href="#">Liters</a></li>
        <li><a href="#">Gallons</a></li>
      </ul>
    </div><!--end col-->

  </div><!--end row-->
  <div class="row">

    <form method="" action="">

      <div class="col-xs-12 col-md-6">
        <div class="form-group form-group-lg">
          <label for="race-distance" class="input-lg">How long is the race?</label>
          <div class="input-group">
            <input type="number" class="form-control" id="race-distance" name="race-distance" placeholder="Example: 25">
            <div class="input-group-addon input-addon-lg">Laps</div>
          </div>
        </div>
      </div><!--end col-->

      <div class="col-xs-12 col-md-6">
        <div class="form-group form-group-lg">
          <label for="average-race-lap" class="input-lg">What is the average race lap time?</label>
          <div class="input-group">
            <input type="number" class="form-control" id="average-race-lap" name="average-race-lap" placeholder="Example: 92.349">
            <div class="input-group-addon input-addon-lg">Seconds</div>
          </div>
        </div>
      </div><!--end col-->

      <div class="col-xs-12 col-md-6">
        <div class="form-group form-group-lg">
          <label for="fuel-per-lap" class="input-lg">What is the average fuel usage per lap?</label>
          <div class="input-group">
            <input type="number" class="form-control" id="fuel-per-lap" name="fuel-per-lap" placeholder="Example: 1.82">
            <div class="input-group-addon input-addon-lg">Liters</div>
          </div>
        </div>
      </div><!--end col-->

      <div class="col-xs-12 col-md-6">
        <div class="form-group form-group-lg">
          <label for="fuel-tank-size" class="input-lg">What is the fuel tank size?</label>
          <div class="input-group">
            <input type="number" class="form-control" id="fuel-tank-size" name="fuel-tank-size" placeholder="Example: 1.82">
            <div class="input-group-addon input-addon-lg">Liters</div>
          </div>
        </div>
      </div><!--end col-->

    </form>

  </div><!--end row-->
</div><!--end container-->

<?php 
	include_once 'inc/footer.inc.php';
?>