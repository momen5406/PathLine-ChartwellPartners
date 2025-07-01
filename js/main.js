// ! Start Search Input
const closeSearchBTN = document.querySelector("#closeSearchBTN");
const openSearchBTN = document.querySelector("#openSearchBTN");
const searchInputContainer = document.querySelector("#searchInputContainer");

openSearchBTN.addEventListener("click", () => {
  searchInputContainer.classList.remove("close-search");
});

closeSearchBTN.addEventListener("click", () => {
  searchInputContainer.classList.add("close-search");
});
// ! End Search Input

// -------------------------------------------------------------------------

// ! Start Nav Contact Button
const contactBTN = document.querySelector("#contactBtn");
contactBTN.classList.remove("leave");
contactBTN.classList.remove("hover");

contactBTN.addEventListener("mouseover", () => {
  contactBTN.classList.add("hover");
  contactBTN.classList.remove("leave");
})

contactBTN.addEventListener("mouseout", () => {
  contactBTN.classList.remove("hover");
  contactBTN.classList.add("leave");
});
// ! End Nav Contact Button

// -------------------------------------------------------------------------

// ! Start Dropdown Menus
const dropdownBTN = document.querySelectorAll("#dropdown > a");

dropdownBTN.forEach(toggle => {
  toggle.addEventListener("mouseenter", e => {    
    const dropdown = e.target.closest(".dropdown");
    const menu = dropdown.querySelector(".dropdown-menu");

    document.querySelectorAll(".dropdown-menu").forEach(m => {
      if (m !== menu) m.classList.add("d-none");
    });

    menu.classList.remove("d-none");
  });

  toggle.addEventListener("mouseleave", e => {    
    const dropdown = e.target.closest(".dropdown");
    const menu = dropdown.querySelector(".dropdown-menu");

    setTimeout(() => {
      menu.classList.add("d-none");
    }, 3000);
  });
});
// ! End Dropdown Menus
