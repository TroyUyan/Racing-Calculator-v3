<?php
  $htmlTitle = "Home";
	include_once 'inc/header.inc.php';
?>

<div class="jumbotron">
  <div class="container">
    <h1>Simplify your sim racing strategy!</h1>
    <p>The <strong>Racing Calculator</strong> takes simple inputs of testing data and turns it into usable and easy to edit race strategies for your sim racing leagues. There are 3 versions of the calculator (basic, advanced, and endurance), allowing you to plan for quick sprint races or multi-hour endurance races!</p>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-4">
      <img src="http://placehold.it/360x200" class="img-responsive" alt="">
      <h2>Basic</h2>
      <p>Used for <strong>0 or 1 stop races</strong>.</p>
      <p>Get the final fuel amount for your quick sprint race or compare strategies to determine the optimal time to take your fuel stop.</p>
      <p><a class="btn btn-primary" href="basic.php" role="button">Launch Basic &raquo;</a></p>
    </div>
    <div class="col-xs-12 col-md-4">
      <img src="http://placehold.it/360x200" class="img-responsive" alt="">
      <h2>Advanced</h2>
      <p>Used for <strong>2 or more stop races</strong>.</p>
      <p>Match your fuel strategy with your tire choices in a Grand Prix or get the perfect calculations for your multi-stop sports car race.</p>
      <p><a class="btn btn-primary" href="#" role="button" disabled="true">Launch Advanced &raquo;</a></p>
   </div>
    <div class="col-xs-12 col-md-4">
      <img src="http://placehold.it/360x200" class="img-responsive" alt="">
      <h2>Endurance</h2>
      <p>Used for <strong>long multi-hour races</strong>.</p>
      <p>Find out how long your driver stints will be and base your fuel stops on the optimal back-timed strategy for long endurance races.</p>
      <p><a class="btn btn-primary" href="#" role="button" disabled="true">Launch Endurance &raquo;</a></p>
    </div>
  </div>
</div>

<?php 
	include_once 'inc/footer.inc.php';
?>