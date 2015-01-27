<div class="overlay-superpowers" class="video-overlay">
<h3>Launch Superpowers</h3>
<a href="http://www.4sitestudios.com/service/video/live_webcast" target="_blank" name="live-webcasts">Live Webcasts</a>
<a href="http://www.4sitestudios.com/service/video/instructional_video" target="_blank" name="training-videos">Instructional Videos</a>
<a href="http://www.4sitestudios.com/service/video/animation" target="_blank" name="animation">Animation</a>
<a href="http://www.4sitestudios.com/service/video/events" target="_blank" name="feature-videos">Event Videography</a>
<a href="http://www.4sitestudios.com/service/video/documentaries" target="_blank" name="feature-videos">Documentary Film</a>
</div>

<script type="text/javascript">
$('.overlay-superpowers').click(function() {
  $.event.trigger({
    type: 'overlay-superpowers',
	message: $(this).attr('name'),
	time: new Date()
  });
});
</script>