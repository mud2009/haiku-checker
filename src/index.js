// I had plans. But sure, ok then. I guess not.
// An ocean voyage. As waves break over the bow. The sea welcomes me.
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Haiku from "./haiku.js";
// import {syllable} from 'syllable';

function displayIsHaiku(text){
  let haiku = new Haiku(text);
  $('#result').text(haiku.isHaiku());
}

$('form').submit(function(event){
  event.preventDefault();
  let userInput = $("#haiku").val();
  displayIsHaiku(userInput);
});