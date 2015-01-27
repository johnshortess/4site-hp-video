<div id="overlay-form-help-you" class="video-overlay">
<p>How can we help you?</p>
<a href="#" id="overlay-form-help-you-branded-content" class="overlay-form-help-you-option" title="branded content" name="branded-content">Branded Content</a>
<a href="#" id="overlay-form-help-you-campaign-sites" class="overlay-form-help-you-option" title="campaign sites" name="campaign-sites">Campaign Sites</a>
<a href="#" id="overlay-form-help-you-organization-sites" class="overlay-form-help-you-option" title="organization sites" name="organization-sites">Organization Sites</a>
</div>

<script type="text/javascript">
$('.overlay-form-help-you-option').click(function() {
  $.event.trigger({
    type: 'form-help-you',
	message: $(this).attr('name'),
	time: new Date()
  });
});
</script>