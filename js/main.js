var $body = $('body');
var $rightside = $('#right-hem');
var $leftmag = $('#left-mag');

$body.on('click', '#right-hem', function () {
  $l('left-mag').toggleClass ('left-mag-move');
});
