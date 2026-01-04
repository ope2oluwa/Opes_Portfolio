const navItems = document.querySelectorAll(".nav-item");
const indicator = document.getElementById("nav-indicator");

function moveIndicator(el) {
  // Get the width and left position of the hovered element
  const width = el.offsetWidth;
  const left = el.offsetLeft;

  // Apply those values to the sliding div
  indicator.style.width = `${width}px`;
  indicator.style.left = `${left}px`;
}

// 1. Initialize the indicator under "Contact" (the 3rd item)
// Index starts at 0, so [2] is the third item
moveIndicator(navItems[2]);

// 2. Add listeners to move the indicator on hover
navItems.forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    moveIndicator(e.target);
  });

  // 3. (Optional) Move it back to the active page when the mouse leaves the nav
  // For now, let's just let it stay on the last hovered item
});

document.getElementById("nav-list").addEventListener("mouseleave", () => {
  moveIndicator(navItems[0]);
});

window.addEventListener("load", () => {
  const hero = document.getElementById("hero-content");

  // Remove the hidden state
  hero.classList.remove("opacity-0", "translate-y-10");

  // Add the final visible state
  hero.classList.add("opacity-100", "translate-y-0");
});


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

menuBtn.addEventListener("click", () => {
  // Toggle the slide and visibility
  mobileMenu.classList.toggle("-translate-y-full");
  mobileMenu.classList.toggle("translate-y-0");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");
  mobileMenu.classList.toggle("pointer-events-none");

  // Hamburger to X
  line1.classList.toggle("rotate-45");
  line1.classList.toggle("translate-y-[8px]");
  line2.classList.toggle("opacity-0");
  line3.classList.toggle("-rotate-45");
  line3.classList.toggle("-translate-y-[8px]");
});

const observerOptions = {
  threshold: 0.2, // Trigger when 10% of the card is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-12");
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
}, observerOptions);

// Tell the observer to watch every card with the 'reveal' class
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

function copyEmail() {
  const email = "oluwatimilehinopeoluwa@gmail.com";
  navigator.clipboard.writeText(email);

  // Change the text temporarily to show it worked
  const emailSpan = document.getElementById("email-text");
  const originalText = emailSpan.innerText;
  emailSpan.innerText = "Copied to Clipboard!";
  emailSpan.style.color = "#38bdf8";

  setTimeout(() => {
    emailSpan.innerText = originalText;
    emailSpan.style.color = "white";
  }, 2000);
}

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Use the same logic you used for your menu button to hide it
        mobileMenu.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');
        
        // Also reset your hamburger icon back to lines (optional but recommended)
        line1.classList.remove('rotate-45', 'translate-y-[8px]');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-rotate-45', '-translate-y-[8px]');
    });
});

// This forces the browser to start at the top of the page on refresh
window.onload = function() {
    if (window.location.hash) {
        // If there is a # in the URL, clear it so it doesn't jump
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    window.scrollTo(0, 0);
};