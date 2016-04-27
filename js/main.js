var $body = $('body');
var $rightside = $('#right-hem');
var $leftmag = $('#left-mag');
var $rightmag = $('#right-mag');
var $leftside = $('#left-hem');
var $brain = $('.brain-box');

$body.on('click', '#right-hem', function () {
  $leftmag.toggleClass ('left-mag-move');
});

$body.on('click'), '#left-hem', function () {
  $rightmag.toggleClass ('right-mag-move');
}

$brain.waypoint (function (direction) {
  if (direction == 'down') {
    $brain.addClass('js-brain-animate')
  } else {
    $brain.addClass('js-brain-animate')
  }
}, {offset: '50%'});
