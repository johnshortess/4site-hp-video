<div class="overlay-superpowers" class="video-overlay">
<h3>Launch Superpowers</h3>
<a href="http://www.4sitestudios.com/service/support/services_on_demand" target="_blank" name="support">Support</a>
<a href="http://www.4sitestudios.com/services" target="_blank" name="quality-assurance">Quality Assurance</a>
<a href="http://www.4sitestudios.com/service/support/hosting" target="_blank" name="hosting">Hosting</a>
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