// This file will be used for any interactive features on the project page.
// We'll add code here later as we build more of the page.
console.log('project.js loaded');
// This file remains the same for now.
console.log('project.js loaded');

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".image-btn img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Close modal when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
});

// Fade in entire page on load
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
