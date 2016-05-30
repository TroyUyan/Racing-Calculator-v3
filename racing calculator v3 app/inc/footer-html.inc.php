    <div class="container">
      <footer>
        <hr>
        <p>&copy; 2016 Troy Uyan</p>
      </footer>  
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <?php
    	switch ($htmlTitle) {
    		case "Basic":
    			echo '<script src="js/calc-basic.js"></script>';
    			break;

    		case "Advanced":
    			echo '<script src="js/calc-advanced.js"></script>';
    			break;

    		case "Endurance":
    			echo '<script src="js/calc-endurance.js"></script>';
    			break;
    		
    		default:
    			break;
    	}
    ?>
  </body>
</html>