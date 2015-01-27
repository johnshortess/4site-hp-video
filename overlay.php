<div id="overlay-form-name-splash" class="video-overlay">
<p>We create engaging digital content<br> on interactive platforms.</p>
<input type="submit" value="See how we do it" />
</div>

<div id="overlay-form-name">
<p>What is your first name?</p>
<input type="text" name="name" />
<input type="submit" value="continue" />
</div>

<script type="text/javascript">
  $("#overlay-form-name-splash input[type=submit]").click(function() {
    $("#overlay-form-name-splash").css("display", "none");
	$("#overlay-form-name").css("display", "block");
	
    $.event.trigger({
      type: 'form-name-splash-submit',
    });    
  });

function triggerEvent() {
  var n = $.trim($('#overlay-form-name input[type=text]').val());
  if(n.length == 0) { n = "Someone"; }
  $.get('/4site-video/proxy.php?q=Brad, ' + n + ' is here to see you.', function(data) { 
    $.event.trigger({
      type: 'form-name',
	  message: data,
	  time: new Date(),
	  name: n
    });    
  });
}

$('#overlay-form-name input[type=text]').keyup(function (e) {
    if (e.keyCode == 13) {
        triggerEvent();
    }
});

$('#overlay-form-name input[type=submit]').click(function() {
  triggerEvent();
});
</script>