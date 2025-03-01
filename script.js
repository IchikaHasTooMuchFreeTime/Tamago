// YouTube IFrame API
let player;

// Function to load the YouTube IFrame API
function onYouTubeIframeAPIReady() {
  player = new YT.Player('audioPlayer', {
    events: {
      'onReady': onPlayerReady,
    },
  });
}

// Function to play the audio when the player is ready
function onPlayerReady(event) {
  event.target.playVideo();
}

// Add interactivity to the buttons
document.getElementById('yesButton').addEventListener('click', function () {
  document.querySelector('.landing-screen').classList.add('d-none');
  document.getElementById('confirmationMessage').classList.remove('d-none');

  // Play the audio
  if (player && player.playVideo) {
    player.playVideo();
  }

  // Trigger confetti animation
  confetti({
    particleCount: 150, // Number of confetti pieces
    spread: 70, // How far the confetti spreads
    origin: { y: 0.6 }, // Start from the bottom
  });

  // Add more confetti for extra celebration
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 100,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
    });
  }, 250);
});

document.getElementById('noButton').addEventListener('click', function () {
  alert("Aww, give it another thought! 💖");
});

// Load the YouTube IFrame API script
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
