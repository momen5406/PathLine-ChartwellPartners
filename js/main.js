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

// Contact button element
const contactBTN = document.querySelector("#contactBtn");
contactBTN.classList.remove("leave");
contactBTN.classList.remove("hover");

// Add hover effect on mouseover
contactBTN.addEventListener("mouseover", () => {
  contactBTN.classList.add("hover");
  contactBTN.classList.remove("leave");
});

// Remove hover effect on mouseout
contactBTN.addEventListener("mouseout", () => {
  contactBTN.classList.remove("hover");
  contactBTN.classList.add("leave");
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
    const menu = dropdown.querySelector(".dropdown-menu");

    // Hide other open dropdowns
    document.querySelectorAll(".dropdown-menu").forEach(m => {
      if (m !== menu) m.classList.add("d-none");
    });

    menu.classList.remove("d-none");
  });

  // Hide dropdown menu after delay on mouseleave
  toggle.addEventListener("mouseleave", e => {
    const dropdown = e.target.closest(".dropdown");
    const menu = dropdown.querySelector(".dropdown-menu");

    setTimeout(() => {
      menu.classList.add("d-none");
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