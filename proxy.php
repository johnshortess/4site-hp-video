<?php
function fetchTTSmp3($q) {
  $q = urlencode($q);
  $url = "http://translate.google.com/translate_tts?ie=utf-8&tl=en&q=" . $q . "&total=1&idx=0&textlen=" . strlen($q) . "&prev=input";
  $fn = uniqid("tts") . ".mp3";
  $tempfile = "/home/apps/public_html/4site-video/tmp/" . $fn;
  $mp3 = file_get_contents($url);
  file_put_contents($tempfile, $mp3);
  return "/4site-video/tmp/" . $fn;
}

//echo '{f:"' . fetchTTSmp3($_GET['q']) . '"}';
echo fetchTTSmp3($_GET['q']);
?>
