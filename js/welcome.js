// Wait 2s, then fade out over 1.5s, then redirect
setTimeout(() => {
  document.body.classList.add("fade-out");

  // Wait for the CSS transition to finish, then redirect
  setTimeout(() => {
    window.location.href = "main.html";
  }, 1500); // match transition duration
}, 3000); // initial wait
