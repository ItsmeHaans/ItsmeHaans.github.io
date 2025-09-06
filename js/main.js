// =====================
// PAGE FADE-IN ON LOAD
// =====================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});


// =====================
// NAV ACTIVE LINK ON SCROLL
// =====================
const pageSections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  pageSections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Offset for sticky header
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// =====================
// CAREER FRAME TABS
// =====================
const careerTabs = document.querySelectorAll("#career-frame .tab");
if (careerTabs.length) {
  careerTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const selected = tab.getAttribute("data-tab");

      // Remove old active states
      careerTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Animate content
      const current = document.querySelector("#career-frame .tab-content.active");
      const next = document.getElementById(selected);

      if (current && next && current !== next) {
        current.classList.remove("active");
        current.classList.add("exit-left");

        setTimeout(() => {
          current.classList.remove("exit-left");
        }, 600);

        next.classList.add("active");
      }
    });
  });
}


// =====================
// SMOOTH SCROLL FOR NAV LINKS
// =====================
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust for sticky header
        behavior: "smooth"
      });
    }
  });
});


// =====================
// PORTFOLIO TOGGLE BUTTONS
// =====================
const toggleButtons = document.querySelectorAll('.optToggle-btn');
const togglePanels = document.querySelectorAll('.optToggle-panel');

if (toggleButtons.length && togglePanels.length) {
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const target = btn.getAttribute('data-target');
      togglePanels.forEach(panel => {
        panel.style.display = (panel.getAttribute('data-panel') === target) ? 'grid' : 'none';
      });
    });
  });
}


// =====================
// MODAL IMAGE VIEWER
// =====================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

if (modal && modalImg) {
  document.querySelectorAll(".image-btn img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
      modal.style.display = "none";
    }
  });
}


// =====================
// COPY LINK BUTTON
// =====================
const shareBtn = document.getElementById("shareBtn");
if (shareBtn) {
  shareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText("https://www.ItsmeHaans.github").then(() => {
      alert("Link copied to clipboard!");
    });
  });
}


// =====================
// FUN FACT ROTATOR
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const funFactElement = document.getElementById('funFact');
  if (!funFactElement) return;

  const facts = [
    'Music makes you calm? You’re clearly curious about me, so relax, and think it through.',
    
  ];

  let currentIndex = 0;

  const updateFact = () => {
    funFactElement.style.opacity = 0;
    setTimeout(() => {
      funFactElement.textContent = facts[currentIndex];
      funFactElement.style.opacity = 1;
      currentIndex = (currentIndex + 1) % facts.length;
    }, 1000);
  };

  updateFact();
  setInterval(updateFact, 15000);
});


// =====================
// FLIPCLOCK
// =====================
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const digits = h + m;

  document.querySelectorAll(".flipclock-digit-unique").forEach((digit, i) => {
    const front = digit.querySelector(".flip-front");
    const back = digit.querySelector(".flip-back");
    const newVal = digits[i];

    if (front && back && front.textContent !== newVal) {
      back.textContent = newVal;
      digit.classList.add("flip");

      setTimeout(() => {
        front.textContent = newVal;
        digit.classList.remove("flip");
      }, 600);
    }
  });
}
updateClock();
setInterval(updateClock, 1000);


// =====================
// ANIMATE ON SCROLL
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const animSections = document.querySelectorAll(".animate-section");

  if (animSections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    animSections.forEach(sec => observer.observe(sec));
  }
});


// =====================
// LOFI MUSIC PLAYER
// =====================
const lofiBtn = document.getElementById("lofiPlayBtn");
const lofiAudio = document.getElementById("lofiAudio");

if (lofiBtn && lofiAudio) {
  lofiBtn.addEventListener("click", () => {
    if (lofiAudio.paused) {
      lofiAudio.play();
      lofiBtn.classList.add("pause");
    } else {
      lofiAudio.pause();
      lofiBtn.classList.remove("pause");
    }
  });
}
