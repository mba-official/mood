const questions = [
  "Do You Miss Me?",
  "Do You Trust Me?",
  "Do You Love Me?"
];

let currentQuestionIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
  const questionElement = document.getElementById("question");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  // Show the first question
  showQuestion();

  // Handle Yes button click
  yesButton.addEventListener("click", () => {
    startHeartRain();
    setTimeout(() => {
      currentQuestionIndex++;
      showQuestion();
    }, 1500); // Move to the next question after 1.5 seconds
  });

  // Handle No button hover (move to random position on the screen)
  noButton.addEventListener("mouseenter", moveNoButton);

  // Prevent No button from being clickable
  noButton.addEventListener("click", (e) => e.preventDefault());

  function showQuestion() {
    if (currentQuestionIndex < questions.length) {
      questionElement.textContent = questions[currentQuestionIndex];
      yesButton.classList.remove("hidden");
      noButton.classList.remove("hidden");
    } else {


      questionElement.textContent = `I Know You (Miss Me, Trust Me, Love Me)\nI Miss You Too!\nI Trust You Too!\nI Love You Too!\n❤️❤️❤️`;
      yesButton.classList.add("hidden");
      noButton.classList.add("hidden");
    }
  }

  function moveNoButton() {
    const viewportWidth = window.innerWidth - noButton.offsetWidth;
    const viewportHeight = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * viewportWidth;
    const randomY = Math.random() * viewportHeight;

    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
  }

  function startHeartRain() {
    for (let i = 0; i < 50; i++) { // Increased heart count for better effect
      createHeart();
    }
  }

  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    // Randomize heart properties
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    heart.style.animationDuration = `${2 + Math.random() * 3}s`; // Random duration between 2-5s
    heart.style.fontSize = `${16 + Math.random() * 24}px`; // Random font size between 16px and 40px
    heart.style.opacity = `${0.5 + Math.random() * 0.5}`; // Random opacity between 0.5 and 1
    heart.style.transform = `rotate(${Math.random() * 360}deg)`; // Random rotation

    document.body.appendChild(heart);

    // Remove heart after animation completes
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
});
