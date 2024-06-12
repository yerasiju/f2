// script.js
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Slider functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }

  showSlide(currentSlide);

  document.querySelector(".prev").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.querySelector(".next").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      document
        .getElementById(button.getAttribute("data-tab"))
        .classList.add("active");
    });
  });

  // Dark mode functionality
  const darkModeButton = document.querySelector(".dark-mode");
  darkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCxG-Ka4zU7-FEKrhU-ud1Cs04t6RG04v8",
    authDomain: "asdera.firebaseapp.com",
    projectId: "asdera",
    storageBucket: "asdera.appspot.com",
    messagingSenderId: "137966218493",
    appId: "1:137966218493:web:e7f6bce64d4167bcb30ec0",
    measurementId: "G-RS20KKJRT4",
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Firestore reference
  const db = firebase.firestore();

  // Send email form
  const emailForm = document.getElementById("emailForm");
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    db.collection("emails")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Email sent successfully!");
        emailForm.reset();
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  });
});
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}
