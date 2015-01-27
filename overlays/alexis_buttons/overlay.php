<div class="overlay-superpowers" class="video-overlay">
<h3>Launch Superpowers</h3>
<a href="http://www.4sitestudios.com/service/design/logos%26branding" target="_blank" name="logos-branding">Logos &amp; Branding</a>
<a href="http://www.4sitestudios.com/service/design/visual_content" target="_blank" name="infographics">Infographics</a>
<a href="http://www.4sitestudios.com/service/design/mobile_app_design" target="_blank" name="mobile-app-design">Mobile App Design</a>
<a href="http://www.4sitestudios.com/service/design/website_theming" target="_blank" name="website-theming">Website Theming</a>
<a href="http://www.4sitestudios.com/service/design/print" target="_blank" name="print">Print Collateral</a>
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