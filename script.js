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

// List of random messages for the "NO!" button
const noButtonMessages = [
  "Are you sure? 🥺",
  "Pretty please? 💖",
  "I'll give you cookies! 🍪",
  "Think about it again! 🤔",
  "You're breaking my heart! 💔",
  "Just say yes! 😭",
  "I'll be really sad... 😢",
  "I'll make you pancakes! 🥞",
  "You're my only hope! 🌟",
  "I'll write you a poem! 📜",
];

// Track the number of times "NO!" is clicked
let noButtonClickCount = 0;

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
  // Show a random message from the list
  const randomMessage = noButtonMessages[noButtonClickCount % noButtonMessages.length];
  alert(randomMessage);

  // Increment the click count
  noButtonClickCount++;

  // Redirect after 5 clicks
  if (noButtonClickCount === 5) {
    window.location.href = "https://youtu.be/SYbh6ob_R9M?t=99"; // 
  }
});

// Load the YouTube IFrame API script
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
