import './css/style.css';
import './images/1.jpg';
import './images/b1.jpg';
import './images/clo.png';
import './images/cloudy.png';
import './images/line.png';
import './images/r1.jpg';
import './images/res.jpg';
import './images/tick.png';
import './images/w-line.png';
import $ from 'jquery';

$(document).ready(function(c) {
  $('.log-close').on('click', function(c){
    $('.login-bottom').fadeOut('slow', function(c) {
        $('.login-bottom').remove();
    });
  });
});