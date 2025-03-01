// Add interactivity to the buttons
document.getElementById('yesButton').addEventListener('click', function () {
  document.querySelector('.landing-screen').classList.add('d-none');
  document.getElementById('confirmationMessage').classList.remove('d-none');
});

document.getElementById('noButton').addEventListener('click', function () {
  alert("Aww, give it another thought! 💖");
});