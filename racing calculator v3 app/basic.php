<?php 
  $htmlTitle = "Basic";
	include_once 'inc/header.inc.php';
?>

<div class="container">
  <h1><?php echo $htmlTitle; ?> Racing Calculator</h1>

  <form method="" action=""><!--Form-->

    <div class="form-group">
    <label for="race-distance">Race Distance</label>
    <input type="email" class="form-control" id="race-distance" placeholder="Email">
    </div>

    <label>How long is the race?</label>
    <input type="number" step="any" name="race_length" placeholder="Example: 120" value="" required>
    <select name="race_unit">
      <option value="minutes">Minutes</option>
      <option value="laps">Laps</option>
    </select>


    <label>What is the average race lap time?</label>
    <input type="number" step="any" name="race_lap" placeholder="Example: 92.349" value="<?php echo @"{$_POST['race_lap']}";?>" required>
    <span class="postfix">Seconds</span>
  

    <label>What is the average fuel usage per lap?</label>
    <input type="number" step="any" name="avg_fuel" placeholder="Example: 1.82" value="<?php echo @"{$_POST['avg_fuel']}";?>" required>
    <span class="postfix">Liters</span>
    
    <label>What is the fuel tank size?</label>
    <input type="number" step="any" name="max_fuel" placeholder="Example: 90" value="<?php echo @"{$_POST['max_fuel']}";?>" required>
    <span class="postfix">Liters</span>

    <input class="button small success" type="submit" value="Calculate the Data">
  </form>

</div><!--end container-->

<?php 
	include_once 'inc/footer.inc.php';
?>