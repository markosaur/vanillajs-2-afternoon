window.addEventListener("keypress", function(keyPressEvent) {
    const tone = document.querySelector(`audio[data-key="${keyPressEvent.keyCode}"]`);
    if (!tone) return;
    const pianoKey = document.querySelector(`.pianoKey[data-key="${keyPressEvent.keyCode}"]`);
    tone.currentTime = 0;
    pianoKey.classList.add("pressed");
    tone.play();
    setTimeout(function() {
      pianoKey.classList.remove("pressed");
    }, 275);
  });


// window.addEventListener("keypress", function(){
    
//     //declare a new event listener on our window object and its two arguments, the addEventListener() inbetween the parentheses is where the arguments go.  
//             //argument 1) is the event to listen for aka "keypress"
//             //argument 2 is the handler or the function that needs to fire when the event is heard.

//     const tone = document.querySelector()
//     const pianoKey = document.querySelector()






// }