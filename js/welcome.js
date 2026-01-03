document.addEventListener("DOMContentLoaded", () => {
  /* ===============================
     MOBILE DETECTION
  =============================== */
  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    window.innerWidth <= 768;

  /* ===============================
     PHONE UI
  =============================== */
  const phoneGate = document.getElementById("phone-gate");
  const hintBtn = document.getElementById("howDesktopBtn");
  const hintBox = document.getElementById("desktopHint");

  if (isMobile && phoneGate) {
    phoneGate.style.display = "flex";
  }

  if (hintBtn) {
    hintBtn.addEventListener("click", () => {
      hintBox.style.display =
        hintBox.style.display === "block" ? "none" : "block";
    });
  }

  /* ===============================
     AUTO REDIRECT (DESKTOP ONLY)
  =============================== */
  if (!isMobile) {
    // Wait 3s, fade out, then redirect
    setTimeout(() => {
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "main.html";
      }, 1500); // match transition duration
    }, 3000);
  }
});
