//click event listeners
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//keyboard event listeners
document.addEventListener("keydown", function(event) {
  sound(event.key);
  buttonAnimation(event.key);
})

//function for producing sounds
function sound(word) {
  switch (word) {
    case "w":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;
    case "s":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;
    case "d":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;
    case "j":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;
    case "k":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;
    case "l":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;
    default:
      console.log(word);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
