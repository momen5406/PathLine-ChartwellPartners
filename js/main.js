// !! #Feature 2: Added a Scroll Progress bar on top
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgressBar").style.width = `${scrollPercent}%`;
});

// !! #Feature 3: Added a loading screen
window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");

  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s';

  // Remove loader after transition
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500); 
})

// !! #Feature 4: Added back to top button
const backToTop = document.querySelector("#backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    backToTop.style.opacity = "100";
  } else {
    backToTop.style.opacity = "0";
  }
}

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
})

// !! #Feature 5: Added Dark Mode Button
const colorMode = document.querySelector("#colorMode");
const colorModeLight = document.querySelector("#lightMode")
const colorModeDark = document.querySelector("#darkMode")

colorMode.addEventListener("click", () => {
  if ( document.documentElement.getAttribute("data-theme") == "light" ) {
    document.documentElement.setAttribute("data-theme", "dark");
    colorModeLight.style.opacity = "100";
    colorModeDark.style.opacity = "0";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    colorModeLight.style.opacity = "0";
    colorModeDark.style.opacity = "100";
  }
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

      document.querySelectorAll("#dropdownMenu").forEach(d => {
        if ( d != dropdown ) {
          d.style.height = `0`;
        }
      })
    })
  })
    
}


// Contact Section
const form = document.querySelector("form");
const submitBtn = document.querySelector("form button");
const NameInput = document.querySelector("form #name");
const emailInput = document.querySelector("form #email");
const msgInput = document.querySelector("form #msg");

function clearInputs() {
  NameInput.value = '';
  emailInput.value = '';
  msgInput.value = '';
}

var validationPatterns = {
  name: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
  email: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
}

function validation(input) {
  let isMatched =  validationPatterns[input.id].test(input.value);
  const errorMsg = input.nextElementSibling;

  if ( isMatched ) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    errorMsg.classList.add("d-none");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    errorMsg.classList.remove("d-none");
  }
}



form.addEventListener("submit", (event) => {
  event.preventDefault();

  var userMsg = {
    name: NameInput.value,
    email: emailInput.value,
    message: msgInput.value
  }
  
  if ( userMsg.name != '' && userMsg.email != '' && userMsg.message != '' ) {
    document.querySelector("#successMsg").classList.add("msg-visible");
    setInterval(() => {
      document.querySelector("#successMsg").classList.remove("msg-visible");
    }, 3000);
    clearInputs();
    NameInput.classList.remove("is-valid");
    NameInput.classList.remove("is-invalid");
    emailInput.classList.remove("is-valid");
    emailInput.classList.remove("is-invalid");
  } else {
    document.querySelector("#failedMsg").classList.add("msg-visible");
    setInterval(() => {
      document.querySelector("#failedMsg").classList.remove("msg-visible");
    }, 3000);
  }
})


// ==========================================================================
// End of main.js
// ==========================================================================