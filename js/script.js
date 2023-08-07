const clapSound = new Audio(`audio/clap.wav`);
const hihatSound = new Audio(`audio/hihat.wav`);
const kickSound = new Audio(`audio/kick.wav`);
const openhatSound = new Audio(`audio/openhat.wav`);
const rideSound = new Audio(`audio/ride.wav`);
const snareSound = new Audio(`audio/snare.wav`);
const tinkSound = new Audio(`audio/tink.wav`);
const tomSound = new Audio(`audio/tom.wav`);

function playDrumSound(key) {
  switch (key) {
    case "1":
      clapSound.play();
      break;
    case "2":
      hihatSound.play();
      break;
    case "3":
      kickSound.play();
      break;
    case "4":
      openhatSound.play();
      break;
    case "5":
      rideSound.play();
      break;
    case "6":
      snareSound.play();
      break;
    case "7":
      tinkSound.play();
      break;
    case "8":
      tomSound.play();
      break;
    default:
      console.log(`Key not mapped to a sound: ${key}`);
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const button = document.querySelector(`.drum-${key}.drum-btn`);
  if (button) {
    playDrumSound(key);
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100);
  }
});
