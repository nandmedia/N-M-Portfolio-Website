// Multilanguage Greeting
const greetings = [
    "こんにちは、私はN&Mです。",
    "Hello, I'm N&M.",
    "Hola, soy N&M.",
    "Bonjour, je suis N&M.",
    "Hallo, ich bin N&M."
  ];
  let index = 0;
  const greetingDiv = document.getElementById('greeting');
  
  setInterval(() => {
    greetingDiv.textContent = greetings[index];
    index = (index + 1) % greetings.length;
  }, 3000);
  
  // Handle "Let's Chat" click
  const chatButton = document.querySelector('.secondary-cta');
  chatButton.addEventListener('click', () => {
    alert('Opening chat...');
  });
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Load the theme from local storage
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
    }
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    });
  });
  