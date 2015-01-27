<div class="overlay-superpowers" class="video-overlay">
<h3>Launch Superpowers</h3>
<a href="http://www.4sitestudios.com/service/development/website_development" target="_blank" name="website-development">Website Development</sup></a>
<a href="http://www.4sitestudios.com/service/development/data_visualization" target="_blank" name="data-visualization">Data Visualization</a>
<a href="http://www.4sitestudios.com/service/development/CRM_integration" target="_blank" name="crm-integration">CRM Integration</a>
<a href="http://www.4sitestudios.com/service/development/video_applications" target="_blank" name="video-apps">Video Applications</a>
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