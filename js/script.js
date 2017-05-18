var removeTransition = function(e) {
  if (e.propertyName !== 'transform') {
    return
  };
  e.target.classList.remove('playing');
}

var playSound = function(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('div[data-key="' + e.keyCode + '"]');
  
  if (!audio) {
    return
  };
  
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play()
}
  
var keys = Array.from(document.querySelectorAll('.key'));
console.log(keys)
for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('transitionend', removeTransition)
}

window.addEventListener('keydown', playSound);