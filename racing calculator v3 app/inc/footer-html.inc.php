    <div class="container">
      <footer>
        <hr>
        <p><a href="http://troyuyan.com">&copy; 2016 Troy Uyan</a></p>
        <ul>
          <li><a href="https://www.youtube.com/c/troyuyan"><img src="img/icons/youtube.svg" alt=""></a></li>
          <li><a href="https://www.twitter.com/troyuyan"><img src="img/icons/twitter.svg" alt=""></a></li>
          <li><a href="https://www.github.com/TroyUyan"><img src="img/icons/github.svg" alt=""></a></li>
          <li><a href="https://www.trello.com/b/qz2PcZ8E"><img src="img/icons/trello.svg" alt=""></a></li>
        </ul>
      </footer>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/racingcalc-base.min.js"></script>
    <?php
    	switch ($htmlTitle) {
    		case "Basic":
    			echo '<script src="js/calc-basic.min.js"></script>';
    			break;

    		case "Advanced":
    			echo '<script src="js/calc-advanced.min.js"></script>';
    			break;

    		case "Endurance":
    			echo '<script src="js/calc-endurance.min.js"></script>';
    			break;

    		default:
    			break;
    	}
    ?>
  </body>
</html>