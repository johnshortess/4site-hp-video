<div id="overlay-form-contact" class="video-overlay">
<form name="video-contact-form" action="" method="POST">
<div class="video-contact-form-option"><input type="checkbox" name="call-request" value="call-request" /><label>Give me a call to chat.</label></div>
<div class="video-contact-form-option"><input type="checkbox" name="email-request" value="email-request" /><label>Shoot me an email.</label></div>
<div class="video-contact-form-option"><input type="checkbox" name="mailing-list" value="mailing-list" /><label>Add me to your mailing list.</label></div>
<div class="video-contact-form-first-name"><input type="text" name="first-name" value="<?php print $_GET["n"]; ?>" onfocus="if(this.value == 'First Name') {this.value = '';}" onblur="if(this.value == '') value='First Name';" /></div>
<div class="video-contact-form-last-name"><input type="text" name="last-name" value="Last Name" onfocus="if(this.value == 'Last Name') {this.value = '';}" onblur="if(this.value == '') value='Last Name';" /></div>
<div class="video-contact-form-email"><input type="text" name="email" value="Email" onfocus="if(this.value == 'Email') {this.value = '';}" onblur="if(this.value == '') value='Email';" /></div>
<div class="video-contact-form-phone"><input type="text" name="phone" value="Phone" onfocus="if(this.value == 'Phone') {this.value = '';}" onblur="if(this.value == '') value='Phone';" /></div>
<input type="submit" value="submit" />
</form>
</div>