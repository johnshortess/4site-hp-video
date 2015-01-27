<div class="overlay-superpowers" class="video-overlay">
<h3>How can we help you?</h3>
<a href="http://www.4sitestudios.com/services" target="_blank" name="Services">Our Services</a>
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