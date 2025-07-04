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
if ( window.innerWidth > 1300 ) {
  const dropdownLink = document.querySelectorAll("#dropdown-link a");

  dropdownLink.forEach(link => {
    link.addEventListener("mouseover", () => {
      dropdown = link.nextElementSibling;
      dropdown.style.opacity = '100';
      dropdown.style.zIndex = '9999';

      document.querySelectorAll("#dropdownMenu").forEach(d => {
        if ( d != dropdown ) {
          d.style.opacity = '0';
          d.style.zIndex = '1';
        }
      })
    })

    link.addEventListener("mouseout", ()=> {
      setTimeout(() => {
        dropdown = link.nextElementSibling;
        dropdown.style.opacity = '0';
        dropdown.style.zIndex = '1';
      }, 3000);
    })
  });
}

if ( window.innerWidth <= 1300 ) {
  const menuBtn = document.querySelector("#menuBtn");
  const menu = document.querySelector("#menuLinks");
  menuBtn.addEventListener("click", () => {
    document.querySelectorAll("#dropdownMenu").forEach(d => {
        d.style.height = `0`;
        d.style.padding = `0`;
    })

    setTimeout(() => {
      menu.classList.toggle("menu-open");
    }, 300);
  })



  const navHeight = document.querySelector("nav").offsetHeight;
  const screenHeight = window.innerHeight;
  const menuLinks = document.querySelector("#menuLinks");
  menuLinks.style.minHeight = `${screenHeight - navHeight}px`;
  menuLinks.style.top = `${navHeight}px`;

  const dropdownLink = document.querySelectorAll("#dropdown-link a");

  dropdownLink.forEach(link => {
    link.addEventListener("click", () => {
      dropdown = link.nextElementSibling;
      dropdown.style.height = dropdown.scrollHeight + 'px';
      dropdown.style.padding = `15px`;

      document.querySelectorAll("#dropdownMenu").forEach(d => {
        if ( d != dropdown ) {
          d.style.height = `0`;
          d.style.padding = `0`;
        }
      })
    })
  })
    
}



// ==========================================================================
// End of main.js
// ==========================================================================