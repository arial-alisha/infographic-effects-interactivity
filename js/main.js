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
var $image7 = $('.image7');
var $image8 = $('.image8');
var $image9 = $('.image9');
var $image10 = $('.image10');
var $image11 = $('.image11');
var $image12 = $('.image12');

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
}, {offset: '70%'});

$image2.waypoint (function (direction) {
  if (direction == 'down') {
    $image2.addClass('js-brain-animate')
  } else {
    $image2.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image3.waypoint (function (direction) {
  if (direction == 'down') {
    $image3.addClass('js-brain-animate')
  } else {
    $image3.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image4.waypoint (function (direction) {
  if (direction == 'down') {
    $image4.addClass('js-brain-animate')
  } else {
    $image4.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image5.waypoint (function (direction) {
  if (direction == 'down') {
    $image5.addClass('js-brain-animate')
  } else {
    $image5.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image6.waypoint (function (direction) {
  if (direction == 'down') {
    $image6.addClass('js-brain-animate')
  } else {
    $image6.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image7.waypoint (function (direction) {
  if (direction == 'down') {
    $image7.addClass('js-brain-animate')
  } else {
    $image7.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image8.waypoint (function (direction) {
  if (direction == 'down') {
    $image8.addClass('js-brain-animate')
  } else {
    $image8.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image9.waypoint (function (direction) {
  if (direction == 'down') {
    $image9.addClass('js-brain-animate')
  } else {
    $image9.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image10.waypoint (function (direction) {
  if (direction == 'down') {
    $image10.addClass('js-brain-animate')
  } else {
    $image10.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image11.waypoint (function (direction) {
  if (direction == 'down') {
    $image11.addClass('js-brain-animate')
  } else {
    $image11.addClass('js-brain-animate')
  }
}, {offset: '70%'});

$image12.waypoint (function (direction) {
  if (direction == 'down') {
    $image12.addClass('js-brain-animate')
  } else {
    $image12.addClass('js-brain-animate')
  }
}, {offset: '80%'});
