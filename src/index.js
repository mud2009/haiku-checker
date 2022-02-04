import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Haiku from "./haiku.js";

function displayIsHaiku(text){
  let haiku = new Haiku(text);
  let out = '';
  if (haiku.isHaiku()) {
    out = 'You\'ve got a Haiku!<br><pre>' + haiku.text + '</pre>';
  } else {
    out = 'This is not a haiku, ding dong!';
  }
  $('#result').html(out);
}

function displayRandomHaiku() {
  let haiku = new Haiku();
  $('#result').html('<pre>' + haiku.generateHaiku() + '</pre>');
}

$('form').submit(function(event){
  event.preventDefault();
  let userInput = $("#haiku").val();
  displayIsHaiku(userInput);
});

$('#generate-haiku').on("click", displayRandomHaiku);