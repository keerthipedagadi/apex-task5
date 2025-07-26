// === Smooth Scroll + Form Animation ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple contact form animation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message!");
  this.reset();
});