<!doctype html>
<html>
<head>
  <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
  <link type="text/css" href="skin/jplayer.blue.monday.css" rel="stylesheet" />
  <link type="text/css" href="styles.css" rel="stylesheet" />
  <link href='//api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.css' rel='stylesheet' />
  <!--[if lte IE 8]>
    <link href='//api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.ie.css' rel='stylesheet' />
  <![endif]-->
  <script type="text/javascript" src='//api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.js'></script>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
  <script type="text/javascript" src="js/4site-map.js"></script>
  <script type="text/javascript" src="js/jquery.jplayer.min.js"></script>
  <script type="text/javascript" src="js/popcorn-ie8.js"></script>
  <script type="text/javascript" src="js/code/popcorn.code.js"></script>
  <script type="text/javascript" src="js/popcorn.jplayer.js"></script>
  <script type="text/javascript" src="js/formfields.js"></script>
  <script type="text/javascript" src="js/4site-video.js"></script>
  <!--
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
    ga('create', 'UA-11345509-5', 'apps.4sitestudios.com');
    ga('send', 'pageview');  
  </script>
  -->
</head>

<body>
  <div id="jp_video_container" class="jp-video" style="width: 100%; height: 100%;">
  <div id="jqjp_video" class="jp-jplayer"></div> 
    <div class="jp-type-single">
      <div class="jp-no-solution">
        <span>Update Required</span>
        To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
      </div>
    </div>    
  </div>

  <div id="jqjp_audio" class="jp-jplayer"></div> 
  <div id="jp_audio_container" class="jp-audio">
    <div class="jp-type-single"></div>
  </div>

  <div id="overlay-region-form">
    <?php include "overlays/name_form/overlay.php"; ?>
  </div>
    <!--  <div id="overlay-region-map-cover" style="display: none;">

    <div class="card">
      <h3>Map of route from metro to 4Site</h3>
      <div class="side"></div>
      <div class="side back"><img src="img/mapbox-map-capture.PNG" /></div>
    </div>
  </div>
  -->
  <div id="overlay-region-map" style="display: none;"><div id='map' class='dark'></div></div>
  <div id="overlay-superpowers-brad" class="overlay-container"></div>
  <div id="overlay-superpowers-riche" class="overlay-container"></div>
  <div id="overlay-superpowers-john" class="overlay-container"></div>
  <div id="overlay-superpowers-alexis" class="overlay-container"></div>
  <div id="overlay-superpowers-heming" class="overlay-container"></div>
  <div id="overlay-superpowers-mike" class="overlay-container"></div>
  <div id="overlay-contact-form"></div>
  <div id="overlay-continue"><input type="submit" value="continue" onclick='autoPaused = false; $("#overlay-continue").css("display", "none"); $("#jqjp_video").jPlayer("play");' /></div>

<style type="text/css">
#overlay-region-map-cover {
  perspective: 600;
}
.card {
  height: 100%;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: all 1s ease-in-out;
  left: 0px;
  top: 0px;  
}
.card:hover {
  transform: rotateY(180deg);
}
.card .side {
  backface-visibility: hidden;
  height: 100%;
  position: relative;
  width: 100%;
  left: 0px;
  top: 0px;
}
.card .back {
  transform: rotateY(180deg);
}
.card img {
  left: 0px;
  margin-top: -600px;
}
</style>

<!--
#overlay-region-map-cover {
  height: 150px;
  perspective: 600;
  position: relative;
  width: 150px;
}
.card {
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: all 1s ease-in-out;
  width: 100%;
}
.card:hover {
  transform: rotateY(180deg);
}
.card .side {
  backface-visibility: hidden;
  height: 100%;
  position: absolute;
  width: 100%;
}
.card .back {
  transform: rotateY(180deg);
}
-->  
</body>
</html>