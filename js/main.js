var $body = $('body');
var $rightside = $('#right-hem');
var $leftmag = $('#left-mag');
var $rightmag = $('#right-mag');
var $leftside = $('#left-hem');
var $brain = $('.brain-box');
var $image1 = $('.image1');
var $image2 = $('.image2');
var $image3 = $('.image3');
var $image4 = $('.image4');
var $image5 = $('.image5');
var $image6 = $('.image6');


$body.on('click', '#right-hem', function () {
  $leftmag.toggleClass ('left-mag-move');
});

$body.on('click', '#left-hem', function () {
  $rightmag.toggleClass ('right-mag-move');
});

$brain.waypoint (function (direction) {
  if (direction == 'down') {
    $brain.addClass('js-brain-animate')
  } else {
    $brain.addClass('js-brain-animate')
  }
}, {offset: '50%'});

$image1.waypoint (function (direction) {
  if (direction == 'down') {
    $image1.addClass('js-brain-animate')
  } else {
    $image1.addClass('js-brain-animate')
  }
}, {offset: '50%'});

$image2.waypoint (function (direction) {
  if (direction == 'down') {
    $image2.addClass('js-brain-animate')
  } else {
    $image2.addClass('js-brain-animate')
  }
}, {offset: '50%'});

$image3.waypoint (function (direction) {
  if (direction == 'down') {
    $image3.addClass('js-brain-animate')
  } else {
    $image3.addClass('js-brain-animate')
  }
}, {offset: '50%'});

$image4.waypoint (function (direction) {
  if (direction == 'down') {
    $image4.addClass('js-brain-animate')
  } else {
    $image4.addClass('js-brain-animate')
  }
}, {offset: '50%'});

$image5.waypoint (function (direction) {
  if (direction == 'down') {
    $image5.addClass('js-brain-animate')
  } else {
    $image5.addClass('js-brain-animate')
  }
}, {offset: '50%'});

$image6.waypoint (function (direction) {
  if (direction == 'down') {
    $image6.addClass('js-brain-animate')
  } else {
    $image6.addClass('js-brain-animate')
  }
}, {offset: '50%'});
