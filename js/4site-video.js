var autoPaused = false;

$(document).ready(function(){  
  var w = $(window).width();
  var h = $(window).height();

  var introVideo = "http://player.vimeo.com/external/82779283.hd.mp4?s=e9ec379c25cfd5c7c329d6a62c07196c",
      brandedContentVideo = "http://player.vimeo.com/external/82779447.hd.mp4?s=dd71b057e7cc563311b23eb4ce3f1936",
      campaignSitesVideo = "http://player.vimeo.com/external/86955681.hd.mp4?s=040a556a434628dff6737717eb3c3803",
      organizationSitesVideo = "http://player.vimeo.com/external/86956140.hd.mp4?s=6b8eac225599049d0fb729a140cc4b84";
  
  var audioLoop = "/4site-video/Meet_4Site_Soundtrack_v2.mp3";

  var currentVideo = "intro";
  var category = "4SiteTestVideo";
  var video_player = $("#jqjp_video");
  var audio_player = $("#jqjp_audio");
  var overlay_region_form = $("#overlay-region-form");
  var overlay_region_map = $("#overlay-region-map");
  var overlay_contact_form = $("#overlay-contact-form");
  var overlay_continue = $("#overlay-continue");
  var overlay_superpower_brad = $("#overlay-superpowers-brad");
  var overlay_superpower_riche = $("#overlay-superpowers-riche");
  var overlay_superpower_john = $("#overlay-superpowers-john");
  var overlay_superpower_alexis = $("#overlay-superpowers-alexis");
  var overlay_superpower_heming = $("#overlay-superpowers-heming");
  var overlay_superpower_mike = $("#overlay-superpowers-mike");

  // initialize the video player
  video_player.jPlayer({
    ready: function() {
      $(this).jPlayer("setMedia", {
        m4v: introVideo,
        poster: "/4site-video/img/poster.png"
      });
    },
    swfPath: "/4site-video/js",
    supplied: "m4v",
    solution: "html,flash",
    size: { width: "100%", height: "100%" },
    cssSelectorAncestor: "#jp_video_container",
    wmode: "window",
    backgroundColor: "#FFFFFF",
    volume: 0, // temporarily set volume to zero for development purposes; REMOVE THIS LINE
  });

  // initialize the aduio player
  audio_player.jPlayer({
    ready: function() {
      $(this).jPlayer("setMedia", {
        m4a: audioLoop
      });
    },
    swfPath: "/4site-video/js",
    supplied: "m4a",
    solution: "html,flash",
    size: { width: 0, height: 0 },
    cssSelectorAncestor: "#jp_audio_container",
    wmode: "window",
  });

  // preload the video
  video_player.jPlayer("load");

  // play event
  video_player.bind($.jPlayer.event.play, function(event) { 
    $(".overlay-container").css("display", "none");
    var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
    var mediaName = '4SiteTestVideo';
    //_gaq.push(['_trackEvent',category, 'Play', currentVideo, 0, false]);      
    //ga('send', 'event', '4SiteTestVideo', 'Play', currentVideo, playerTime);
  });

  // pause event
  video_player.bind($.jPlayer.event.pause, function(event) {
    var playerTime = event.jPlayer.status.currentPercentAbsolute;
    var mediaName = '4SiteTestVideo';
    var v = video_player.data("jPlayer").status.src;
    if(playerTime<100 && playerTime != 0) {   
      overlay_continue.css("display", "block");
      //_gaq.push(['_trackEvent',category, 'Pause', currentVideo, playerTime, false]);
      //ga('send', 'event', '4SiteTestVideo', 'Pause', currentVideo, playerTime);
    }
  });

  // seeking event
  video_player.bind($.jPlayer.event.seeking, function(event) {
    var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
    var mediaName = '4SiteTestVideo';
    //_gaq.push(['_trackEvent',category, 'Seeking', currentVideo, playerTime, false]);
    //ga('send', 'event', '4SiteTestVideo', 'Seeking', currentVideo, playerTime);
  });

  // seeked event
  video_player.bind($.jPlayer.event.seeked, function(event) {
    var playerTime = Math.round(event.jPlayer.status.currentPercentAbsolute);
    var mediaName = '4SiteTestVideo';
    if(playerTime>0){
      //_gaq.push(['_trackEvent',category, 'Seeked', currentVideo, playerTime, false]);
      //ga('send', 'event', '4SiteTestVideo', 'Seeked', currentVideo, playerTime);
    } else {
      var video_length = video_player.data("jPlayer").status.duration;
      video_player.jPlayer("pause", Math.floor(video_length));
      //_gaq.push(['_trackEvent',category, 'Stopped', currentVideo, playerTime, false]);
      //ga('send', 'event', '4SiteTestVideo', 'Stopped', currentVideo, playerTime);
    }
  });

  // ended event
  video_player.bind($.jPlayer.event.ended, function(event) { 
    var v = video_player.data("jPlayer").status.src;
    if(v == introVideo) {
      $.get("overlays/how_we_can_help_form/overlay.php", function(data){
        //overlay_region_map.css('display', 'none');
        overlay_region_form.html(data);
        overlay_region_form.css('display', 'block');
      }); 
    } else {
      audio_player.jPlayer("pause");
      $.get("overlays/contact_form/overlay.php?n=" + entered_name, function(data){
        overlay_contact_form.html(data);
        overlay_contact_form.css('display', 'block');
      });  
    }
  });
  
  var superpowers_brad_loaded   = false;
  var superpowers_riche_loaded  = false;
  var superpowers_john_loaded   = false;
  var superpowers_alexis_loaded = false;
  var superpowers_heming_loaded = false;
  var superpowers_mike_loaded   = false;

  var superpowers_brad_paused   = false;
  var superpowers_mike_paused   = false;
  var superpowers_heming_paused = false;
  var superpowers_alexis_paused = false;
  var superpowers_john_paused   = false;
  var superpowers_riche_paused  = false;

  var last_time = 0;  
  
  // timeupdate event--display overlays at various moments in the video as it plays
  video_player.bind($.jPlayer.event.timeupdate, function(event) {
    var current_time = Math.floor(event.jPlayer.status.currentTime);
    var current_time_decimal = Math.floor(event.jPlayer.status.currentTime * 10) / 10;

    if(current_time <= 10) {
      //if(current_time != last_time) {
        $.event.trigger({
          type: 'map-add-point',
          message: event.jPlayer.status.currentTime,
          time: new Date()
        });
      //}
    } else if(current_time == 11 && last_time != current_time) {
      last_time = current_time;
      audio_player.jPlayer("play");
      overlay_region_map.css('display', 'none');
    } else if(event.jPlayer.status.src == introVideo && current_time_decimal > 16.8 && current_time_decimal < 17.2 && !superpowers_brad_loaded) {
      superpowers_brad_loaded = true;
      $.get("overlays/brad_buttons/overlay.php", function(data){
        overlay_superpower_brad.html(data);
        overlay_superpower_brad.css('display', 'block');     
      });
    } else if(event.jPlayer.status.src == introVideo && current_time == 21 && superpowers_brad_loaded && !superpowers_brad_paused) {
      video_player.jPlayer("pause");
      superpowers_brad_paused = true;
      autoPaused = true;
      continueAfterDelay(5000);
    } else if(event.jPlayer.status.src != introVideo && current_time == 10 && !superpowers_riche_loaded) {
      superpowers_riche_loaded = true;
      $.get("overlays/riche_buttons/overlay.php", function(data){
        overlay_superpower_riche.html(data);
        overlay_superpower_riche.css('display', 'block');      
      });
    } else if(event.jPlayer.status.src != introVideo && current_time == 14 && superpowers_riche_loaded && !superpowers_riche_paused) {
      video_player.jPlayer("pause");
      superpowers_riche_paused = true;
      autoPaused = true;
      continueAfterDelay(5000);
    } else if(event.jPlayer.status.src != introVideo && current_time == 24 && !superpowers_john_loaded) {
      superpowers_john_loaded = true;
      $.get("overlays/john_buttons/overlay.php", function(data){
        overlay_superpower_john.html(data);
        overlay_superpower_john.css('display', 'block');     
      });
    } else if(event.jPlayer.status.src != introVideo && current_time == 26 /*current_time_decimal > 24.2 && current_time_decimal < 24.8*/ && superpowers_john_loaded && !superpowers_john_paused) {
      video_player.jPlayer("pause");
      superpowers_john_paused = true;
      autoPaused = true;
      continueAfterDelay(5000);
    } else if(event.jPlayer.status.src != introVideo && current_time == 37 && !superpowers_alexis_loaded) {
      superpowers_alexis_loaded = true;
      $.get("overlays/alexis_buttons/overlay.php", function(data){
        overlay_superpower_alexis.html(data);
        overlay_superpower_alexis.css('display', 'block');     
      });
    } else if(event.jPlayer.status.src != introVideo && current_time == 39 && superpowers_alexis_loaded && !superpowers_alexis_paused) {    
      video_player.jPlayer("pause");
      superpowers_alexis_paused = true;
      autoPaused = true;
      continueAfterDelay(5000);
    } else if(event.jPlayer.status.src != introVideo && current_time == 46 /*&& current_time_decimal > 41.5 && current_time_decimal < 42.1*/ && !superpowers_heming_loaded) {
      superpowers_heming_loaded = true;
      $.get("overlays/heming_buttons/overlay.php", function(data){
        overlay_superpower_heming.html(data);
        overlay_superpower_heming.css('display', 'block');     
      });
    } else if(event.jPlayer.status.src != introVideo && current_time == 48 /*current_time_decimal > 41.8 && current_time_decimal < 42.2*/ && superpowers_heming_loaded && !superpowers_heming_paused) {
      video_player.jPlayer("pause");
      superpowers_heming_paused = true;
      autoPaused = true;
      continueAfterDelay(5000);
    } else if(event.jPlayer.status.src != introVideo && current_time == 56 /*current_time_decimal > 49.2 && current_time_decimal < 49.8*/ && !superpowers_mike_loaded) {
      superpowers_mike_loaded = true;
      $.get("overlays/mike_buttons/overlay.php", function(data){
        overlay_superpower_mike.html(data);
        overlay_superpower_mike.css('display', 'block');     
      });
    } else if(event.jPlayer.status.src != introVideo && current_time == 60 && superpowers_mike_loaded && !superpowers_mike_paused) {
      video_player.jPlayer("pause");
      superpowers_mike_paused = true;
      autoPaused = true;
      continueAfterDelay(5000);
    }
  });  

  // formHelpYouSelectHandler event subscribers
  $(document).on("form-help-you", formHelpYouSelectHandler);
  function formHelpYouSelectHandler(e) {
    overlay_region_form.css('display', 'none');

    var option = e.message;
    if(option == "branded-content") {
      currentVideo = "branded content";
      video_player.jPlayer("setMedia", { m4v: brandedContentVideo });
    } else if(option == "campaign-sites") {
      currentVideo = "campaign sites";
      video_player.jPlayer("setMedia", { m4v: campaignSitesVideo });
    } else if(option == "organization-sites") {
      currentVideo = "organization sites";
      video_player.jPlayer("setMedia", { m4v: organizationSitesVideo });
    }

    video_player.jPlayer("play");
  }

  // loop the audio track once it hits the end
  audio_player.bind($.jPlayer.event.timeupdate, function(event) {
    if(event.jPlayer.status.currentPercentAbsolute > 98 && audio_player.data("jPlayer").status.src.indexOf(audioLoop) != -1)
      $(this).jPlayer("playHead", 0);
  });

  overlay_region_form.css('display', 'block');


  // helper function to restart video after the auto-pause
  function continueAfterDelay(delay) {
    setTimeout(function() { 
      if(autoPaused) { 
        overlay_continue.css("display", "none"); 
        video_player.jPlayer("play"); 
        autoPaused = false; 
      } 
    }, delay);
  }

  // start the music track as soon as the visitor clicks "Meet the 4Site Team"
  var audioIntroductionQuestion = new Audio("/4site-video/how_introduce.mp3");
  $(document).on("form-name-splash-submit", function() { 
    audio_player.jPlayer("play"); 
    audioIntroductionQuestion.play(); 
    $("#overlay-region-map-cover").css('display', 'block');
  });

  $("#overlay-form-name-splash input[type=submit]").click(function() {
    $("#overlay-form-name-splash").css("display", "none");
    $("#overlay-form-name").css("display", "block");
    $.event.trigger({
      type: 'form-name-splash-submit',
    });    
  });

  $('#overlay-form-name input[type=text]').keyup(function (e) {
      if (e.keyCode == 13) {
        beginVideo();
      }
  });

  $('#overlay-form-name input[type=submit]').click(function() {
    beginVideo();
  });

  function beginVideo() {
    //_gaq.push(['_trackEvent',category, 'Interaction', 'Entered Name', 0, false]);
    //ga('send', 'event', '4SiteTestVideo', 'Interaction', 'Entered Name', 0);        
    var entered_name = $.trim($('#overlay-form-name input[type=text]').val());
    if(entered_name.length == 0) { n = "Someone"; }
    $.get('/4site-video2/proxy.php?q=Brad, ' + n + ' is here to see you.', function(data) {
      audio_player.jPlayer("setMedia", {m4a: data});
    });
    $("#overlay-region-map-cover").css('display', 'none');
    overlay_region_map.css('display', 'none');
    overlay_region_form.css('display', 'none');
    currentVideo = "how can we help";
    audio_player.jPlayer("pause");
    video_player.jPlayer("play");
    overlay_region_map.css('display', 'block');
    $.event.trigger({
      type: 'map-displayed',
      message: '',
      time: new Date()
    }); 
  }
});