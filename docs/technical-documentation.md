# Technical Documentation

## 📁 Project Overview

This is a responsive, dark-mode-enabled, animated website cloned from Chartwell Partners. It includes modern UI/UX features, dynamic JavaScript interactions, and optimized SCSS/CSS architecture for both light and dark themes.

---

## 📚 Table of Contents

1. [Folder Structure](#folder-structure)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Dark Mode System](#dark-mode-system)
5. [JavaScript Features](#javascript-features)
6. [Responsive Behavior](#responsive-behavior)
7. [Form Validation](#form-validation)

---

## 📁 Folder Structure

```bash
PathLine-ChartwellPartners/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   └── [images]
│   └── fonts/
├── README.md
└── docs/
    └── technical-doc.md
```

---

## 🛠 Technologies Used

* **HTML5**
* **CSS3 (with CSS Variables)**
* **JavaScript (Vanilla)**
* **Font Awesome**

---

## ✨ Features

* Scroll progress indicator
* Page loading animation
* Dark/Light mode toggle
* Back-to-top button
* Animated dropdown menus (desktop & mobile)
* Section-based color backgrounds
* Responsive navigation (hamburger menu)
* Mobile-first adaptive layout
* Semantic HTML5 structure

---

## 🌗 Dark Mode System

Dark mode is toggled using a `data-theme` attribute on `<html>`. CSS variables update dynamically based on the theme:

```css
:root {
  --primary-color: #103060;
}
[data-theme="dark"] {
  --primary-color: #1B2A47;
}
```

Toggled using the `#colorMode` button which switches icons and adjusts the theme.

---

## 🧠 JavaScript Features

### 1. Scroll Progress Bar

```js
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollProgressBar").style.width = `${scrollPercent}%`;
});
```

### 2. Page Loader

```js
window.addEventListener("load", function () {
  const loader = document.querySelector("#loader");
  loader.style.opacity = '0';
  setTimeout(() => loader.style.display = 'none', 500);
});
```

### 3. Back-to-Top Button

```js
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
```

### 4. Navigation Dropdowns (Desktop & Mobile)

Dropdowns appear on hover (desktop) or click (mobile). In mobile, other open dropdowns collapse when one expands.

### 5. Dark Mode Toggle

```js
colorMode.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
});
```

---

## 📱 Responsive Behavior

* Breakpoints:

  * `> 1300px`: Desktop
  * `<= 1300px`: Tablet/mobile
  * `<= 767px`: Small mobile
* Navigation becomes a vertical menu on small screens
* Services section animates content on mobile using keyframes

---

## ✅ Form Validation

Custom validation for name and email using RegEx patterns:

```js
var validationPatterns = {
  name: /^[A-Z][a-z]+ [A-Z][a-z]+$/,
  email: /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
}
```

Shows valid/invalid state using Bootstrap classes and toggles success/failure messages accordingly.

---

## 📄 License

This project is for educational/demo purposes and not affiliated with Chartwell Partners.

---

## ✍️ Author

**Mo'men Hussein**
Web Developer & CS Student @ FCAI
GitHub: [@momenhussein](https://github.com/momenhussein)

---

> For more information, check the main [README.md](../README.md)
