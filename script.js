function playSound(anything) { // function to play sound takes one variable
  // create variables to hold each
  const audio = document.querySelector(`audio[data-key="${anything.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${anything.keyCode}"]`);
  // if the audio does not exist return null
  if(!audio){
   return;
  };

  audio.currentTime = 0; // to start of audio file on keydown
  audio.play(); // play audio
  key.classList.add('playing'); // add the class list of playing to the key pressed
}

// function to remove class playing from key at the end of transition
function removeTransition(e) {
  // looking through the key:value pairs of 'this' key
  // if the key propertyName is not transform return null
  if (e.propertyName !== 'transform') {
    return;
  };

  // else remove playing class from 'this' key
  this.classList.remove('playing');
}

// create variable leys to hold everything with the class key
const keys = document.querySelectorAll('.key');
// iterate through the div keys and for each of them at an event listener
// that that listens for the end of transition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
