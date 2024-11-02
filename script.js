function displayMessage() {
  const mood = document.getElementById("mood").value;
  const messageDiv = document.getElementById("message");
  const askButton = document.getElementById("askButton");
  
  let message;
  switch(mood) {
    case "happy":
      message = "I'm so glad to hear that you're happy! 😊 Keep smiling, Hope your day as lovely as you!";
      break;
    case "loving":
      message = "Feeling loving, huh? ❤️ Just know I'm feeling the same way about you!";
      break;
    case "relaxed":
      message = "Ah, relaxed! 😌 I hope your day continues to be peaceful and lovely.";
      break;
    case "tired":
      message = "Tired? 😴 Take it easy, and remember I'm here if you need a break!";
      break;
    case "excited":
      message = "Excited, are we? 😄 I hope whatever's got you thrilled brings you tons of joy!";
      break;
    default:
      message = "Please select a mood!";
  }

  messageDiv.textContent = message;
  
  // Add animation classes
  messageDiv.classList.remove("hidden");
  messageDiv.classList.add("animate-fadeIn");

  // Show "Can I Ask?" button after mood submission
  askButton.classList.remove("hidden");
}

function redirectToAsk() {
  window.location.href = 'ask.html';
}
