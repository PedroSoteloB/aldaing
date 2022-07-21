const scrollUpBtn = document.querySelector(".scrollupBtn");

scrollUpBtn.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const hamburgerBtn = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".primary-navigation");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("is-active");
  const nav = document.querySelector(".primary-navigation");
  const body = document.querySelector("body");

  if (nav.style.visibility === "hidden" || !nav.style.visibility) {
    enableNavigation("100vh");
    nav.classList.add("is-enabled");
    body.classList.add("menu-open");
  } else {
    hideNavigation();
    nav.classList.remove("is-enabled");
    body.classList.remove("menu-open");
  }
});

window.addEventListener("resize", () => {
  const nav = document.querySelector(".primary-navigation");
  if (window.innerWidth >= "900") {
    enableNavigation("fit-content");
    nav.classList.remove("is-enabled");
    hamburgerBtn.classList.remove("is-active");

    // in case menu was open set body to allow scroll
    const body = document.querySelector("body");
    body.classList.remove("menu-open");
  } else {
    if (nav.classList.length !== 2) {
      hideNavigation();
    }
  }
});

const hideNavigation = () => {
  const nav = document.querySelector(".primary-navigation");
  nav.style.height = "0";
  nav.style.opacity = "0";
  nav.style.visibility = "hidden";
};

const enableNavigation = (height) => {
  const nav = document.querySelector(".primary-navigation");
  nav.style.height = height;
  nav.style.opacity = "1";
  nav.style.visibility = "visible";
};

/* ===
deals with user the navigation bar options AND
checks if user reached the bottom of the page
=== */

window.addEventListener("scroll", () => {
  if (Math.round(window.scrollY) > 10) {
    hideNavigation();
    document.querySelector("body").classList.remove("menu-open");
    hamburgerBtn.classList.remove("is-active");

    const nav = document.querySelector(".primary-navigation");
    nav.classList.remove("is-enabled");
  } else if (window.innerWidth >= "900") {
    enableNavigation("fit-content");
  }

  // reached bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    scrollUpBtn.classList.add("active");
    // not at bottom
  } else if (
    window.innerHeight + window.scrollY <=
    document.body.offsetHeight
  ) {
    scrollUpBtn.classList.remove("active");
  }
});

/* ===
SLIDER
=== */

const sliders = document.querySelectorAll(".slider__title");
const slidersContent = document.querySelectorAll(".slider-content-item");

sliders.forEach((element) => {
  element.addEventListener("click", (event) => {
    changeSlider(event);
  });
});

function changeSlider(sliderClicked) {
  removeSliderActive();
  hideSliderContent();

  // add border
  sliderClicked.target.classList.add("slider-item--enabled");

  let sliderClickedContent = document.querySelector(
    `#${sliderClicked.target.id}-content`
  );

  // show its content
  sliderClickedContent.classList.add("slider-show");
}

// hide all borders
function removeSliderActive() {
  sliders.forEach((element) => {
    element.classList.remove("slider-item--enabled");
  });
}

// hide all content
function hideSliderContent() {
  slidersContent.forEach((element) => {
    element.classList.remove("slider-show");
  });
}

/* ====
FAQ
=== */
const allQuestions = document.querySelectorAll(".question");

allQuestions.forEach((element) => {
  element.addEventListener("click", () => {
    toggleQuestion(element);
  });
});

// toggle question answer to display none/flex using class names
function toggleQuestion(element) {
  const questionId = element.id;

  // add css class to the content
  const questionContent = document.getElementById(`${questionId}-answer`);
  questionContent.classList.toggle("enabled");

  // add css class to the icon
  const questionIcon = document.querySelector(`#${questionId} .question-arrow`);
  questionIcon.classList.toggle("enabled");
}

/* ===  
DARK MODE CODE 
===*/

/* Body */
const body = document.querySelector("body");

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".dark-mode-button");

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
};

// Disable Dark Mode
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
};

if (darkMode == "enabled") {
  enableDarkMode();
}

// Desktop Button
darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
