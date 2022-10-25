var len = document.querySelectorAll('.drum').length
for (var but = 0; but < len; but++) {
  document.querySelectorAll('.drum')[but].addEventListener('click', function(but) {
    var word = this.innerHTML;
    playSound(word);
    buttonVisual(word);

  });
  document.addEventListener('keydown', function(event) {
    var key = event.key
    playSound(key);
    buttonVisual(key);

  })


}


function playSound(word) {
  switch (word) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;


    default:
      console.log(word)

  }
}

function buttonVisual(word) {
  var myButton = document.querySelector('.' + word)
  myButton.classList.add('pressed')
  setTimeout(function() {
    myButton.classList.remove('pressed')
  }, 100);
}
