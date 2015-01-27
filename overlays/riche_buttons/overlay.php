<div class="overlay-superpowers" class="video-overlay">
<h3>Launch Superpowers</h3>
<a href="http://www.4sitestudios.com/services/strategy/content_strategy" target="_blank" name="content-strategy">Content Strategy</a>
<a href="http://www.4sitestudios.com/services/strategy/analytics%26reporting" target="_blank" name="social-media-strategy">Analytics &amp; Reporting</a>
<a href="http://www.4sitestudios.com/services/strategy/UX" target="_blank" name="user-experience">User Experience</a>
<a href="http://www.4sitestudios.com/services/strategy/SEO" target="_blank" name="roi">SEO</a>
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