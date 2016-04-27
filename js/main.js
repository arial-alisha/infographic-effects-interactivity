var $body = $('body');
var $rightside = $('#right-hem');
var $leftmag = $('#left-mag');

$body.on('mouseover', '#right-hem', function () {
  $leftmag.toggleClass ('left-mag-move');
});
