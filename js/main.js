window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");

  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s';

  // Remove loader after transition
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500); 
})

// ==========================================================================
// Search Input (Desktop)
// ==========================================================================

// Elements for desktop search bar open/close
const closeSearchBTN = document.querySelector("#closeSearchBTN");
const openSearchBTN = document.querySelector("#openSearchBTN");
const searchInputContainer = document.querySelector("#searchInputContainer");

// Open search input on click
openSearchBTN.addEventListener("click", () => {
  searchInputContainer.classList.remove("close-search");
});

// Close search input on click
closeSearchBTN.addEventListener("click", () => {
  searchInputContainer.classList.add("close-search");
});

// ==========================================================================
// Navigation Contact Button Hover Effects
// ==========================================================================

// Select all contact buttons (can be multiple in DOM)
const contactButtons = document.querySelectorAll("#contactBtn");

contactButtons.forEach((btn) => {
  // Ensure no hover/leave classes on load
  btn.classList.remove("leave");
  btn.classList.remove("hover");

  // Add hover effect on mouseover
  btn.addEventListener("mouseover", () => {
    btn.classList.add("hover");
    btn.classList.remove("leave");
  });

  // Remove hover effect on mouseout
  btn.addEventListener("mouseout", () => {
    btn.classList.remove("hover");
    btn.classList.add("leave");
  });
});

// ==========================================================================
// Dropdown Menus (Desktop)
// ==========================================================================

// All dropdown toggle anchors
const dropdownBTN = document.querySelectorAll("#dropdown > a");

dropdownBTN.forEach(toggle => {
  // Show dropdown menu on mouseenter
  toggle.addEventListener("mouseenter", e => {
    const dropdown = e.target.closest(".dropdown");
    const menu = dropdown.querySelector(".dropdownMenu");

    // Hide other open dropdowns
    document.querySelectorAll(".dropdownMenu").forEach(m => {
      if (m !== menu) m.classList.add("dNone");
    });

    menu.classList.remove("dNone");
  });

  // Hide dropdown menu after delay on mouseleave
  toggle.addEventListener("mouseleave", e => {
    const dropdown = e.target.closest(".dropdown");
    const menu = dropdown.querySelector(".dropdownMenu");

    setTimeout(() => {
      menu.classList.add("dNone");
    }, 3000);
  });
});

// ==========================================================================
// Mobile Navigation (Hamburger, Search, Close)
// ==========================================================================

// Elements for mobile navigation
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#phoneMenu");
const searchCloseIcon = document.querySelector("#searchCloseIcon");
const closeMenu = document.querySelector("#closeMenu");

// Open mobile menu
menuBtn.addEventListener("click", () => {
  menu.style.left = 0;
  searchCloseIcon.style.display = 'flex !important';
  searchCloseIcon.style.left = 0;
});

// Close mobile menu
closeMenu.addEventListener("click", () => {
  menu.style.left = "100%";
  // searchCloseIcon.style.display = 'none';
  searchCloseIcon.style.left = "100%";
  phoneSearchInput.style.left = "-100%";
  phoneSearchBtn.style.display = "inline-block";
});

// Elements for mobile search
const phoneSearchInput = document.querySelector("#phoneSearchInput");
const phoneCloseSearchBtn = document.querySelector("#phoneSearchInput i");
const phoneSearchBtn = document.querySelector("#searchCloseIcon i");
phoneSearchBtn.style.display = "inline-block";

// Open mobile search input
phoneSearchBtn.addEventListener("click", () => {
  phoneSearchInput.style.left = 0;
  phoneSearchBtn.style.display = "none";
});

// Close mobile search input
phoneCloseSearchBtn.addEventListener("click", () => {
  phoneSearchInput.style.left = "-100%";
  phoneSearchBtn.style.display = "inline-block";
});

// ==========================================================================
// End of main.js
// ==========================================================================