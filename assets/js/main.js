// ==========================================================================
// !! #Feature 2: Scroll Progress Bar
// ==========================================================================

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.getElementById("scrollProgressBar").style.width = `${scrollPercent}%`;
});

// ==========================================================================
// !! #Feature 3: Loading Screen Fade Out on Page Load
// ==========================================================================

window.addEventListener("load", () => {
  const loader = document.querySelector("#loader");

  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.5s";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

// ==========================================================================
// !! #Feature 4: Back to Top Button
// ==========================================================================

const backToTop = document.querySelector("#backToTop");

window.onscroll = function () {
  const scrollThreshold = 800;
  if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
    backToTop.style.opacity = "100";
  } else {
    backToTop.style.opacity = "0";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================================================================
// !! #Feature 5: Dark Mode Toggle
// ==========================================================================

const colorMode = document.querySelector("#colorMode");
const colorModeLight = document.querySelector("#lightMode");
const colorModeDark = document.querySelector("#darkMode");

colorMode.addEventListener("click", () => {
  const isLight = document.documentElement.getAttribute("data-theme") === "light";

  document.documentElement.setAttribute("data-theme", isLight ? "dark" : "light");
  colorModeLight.style.opacity = isLight ? "100" : "0";
  colorModeDark.style.opacity = isLight ? "0" : "100";
});

// ==========================================================================
// Navigation: Contact Button Hover Effects
// ==========================================================================

const contactButtons = document.querySelectorAll("#contactBtn");

contactButtons.forEach((btn) => {
  btn.classList.remove("leave", "hover");

  btn.addEventListener("mouseover", () => {
    btn.classList.add("hover");
    btn.classList.remove("leave");
  });

  btn.addEventListener("mouseout", () => {
    btn.classList.remove("hover");
    btn.classList.add("leave");
  });
});

// ==========================================================================
// Navigation: Dropdown Menus (Desktop > 1300px)
// ==========================================================================

if (window.innerWidth > 1300) {
  const dropdownLink = document.querySelectorAll("#dropdown-link a");

  dropdownLink.forEach((link) => {
    link.addEventListener("mouseover", () => {
      const dropdown = link.nextElementSibling;
      dropdown.style.opacity = "100";
      dropdown.style.zIndex = "9999";

      document.querySelectorAll("#dropdownMenu").forEach((d) => {
        if (d !== dropdown) {
          d.style.opacity = "0";
          d.style.zIndex = "1";
        }
      });
    });

    link.addEventListener("mouseout", () => {
      setTimeout(() => {
        const dropdown = link.nextElementSibling;
        dropdown.style.opacity = "0";
        dropdown.style.zIndex = "1";
      }, 3000);
    });
  });
}

// ==========================================================================
// Navigation: Hamburger Menu & Dropdown (Mobile <= 1300px)
// ==========================================================================

if (window.innerWidth <= 1300) {
  const menuBtn = document.querySelector("#menuBtn");
  const menu = document.querySelector("#menuLinks");

  menuBtn.addEventListener("click", () => {
    document.querySelectorAll("#dropdownMenu").forEach((d) => {
      d.style.height = `0`;
      d.style.padding = `0`;
    });

    setTimeout(() => {
      menu.classList.toggle("menu-open");
    }, 300);
  });

  // Set full height of mobile nav
  const navHeight = document.querySelector("nav").offsetHeight;
  const screenHeight = window.innerHeight;
  menu.style.minHeight = `${screenHeight - navHeight}px`;
  menu.style.top = `${navHeight}px`;

  // Toggle dropdowns on mobile
  const dropdownLink = document.querySelectorAll("#dropdown-link a");
  dropdownLink.forEach((link) => {
    link.addEventListener("click", () => {
      const dropdown = link.nextElementSibling;
      dropdown.style.height = dropdown.scrollHeight + "px";

      document.querySelectorAll("#dropdownMenu").forEach((d) => {
        if (d !== dropdown) {
          d.style.height = `0`;
        }
      });
    });
  });
}

// ==========================================================================
// Contact Form Validation & Submission
// ==========================================================================

const form = document.querySelector("form");
const submitBtn = document.querySelector("form button");
const NameInput = document.querySelector("form #name");
const emailInput = document.querySelector("form #email");
const msgInput = document.querySelector("form #msg");

function clearInputs() {
  NameInput.value = "";
  emailInput.value = "";
  msgInput.value = "";
}

const validationPatterns = {
  name: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
  email: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/
};

function validation(input) {
  const isMatched = validationPatterns[input.id].test(input.value);
  const errorMsg = input.nextElementSibling;

  if (isMatched) {
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

  const userMsg = {
    name: NameInput.value,
    email: emailInput.value,
    message: msgInput.value
  };

  const showMessage = (id) => {
    const el = document.querySelector(id);
    el.classList.add("msg-visible");
    setTimeout(() => {
      el.classList.remove("msg-visible");
    }, 3000);
  };

  if (userMsg.name && userMsg.email && userMsg.message) {
    showMessage("#successMsg");
    clearInputs();

    // Reset input classes
    [NameInput, emailInput].forEach((input) => {
      input.classList.remove("is-valid", "is-invalid");
    });
  } else {
    showMessage("#failedMsg");
  }
});

// ==========================================================================
// End of main.js
// ==========================================================================
