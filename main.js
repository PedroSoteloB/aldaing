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

/* ! SLIDER CODE */

const sliders = document.querySelectorAll(".slider__title");
const slidersContent = document.querySelectorAll(".slider-content-item");

sliders.forEach((element) => {
  console.log(element);
  element.addEventListener("click", (element) => {
    console.log(element);
    changeSlider(element);
  });
});

function changeSlider(sliderClicked) {
  removeSliderActive();
  hideSliderContent();

  sliderClicked.target.classList.add("slider-item--enabled");

  let sliderClickedContent = document.querySelector(
    `#${sliderClicked.target.id}-content`
  );

  sliderClickedContent.classList.add("slider-show");
}

function removeSliderActive() {
  sliders.forEach((element) => {
    element.classList.remove("slider-item--enabled");
  });
}

function hideSliderContent() {
  slidersContent.forEach((element) => {
    element.classList.remove("slider-show");
  });
}

/* ! faq */
const allQuestions = document.querySelectorAll(".question");

allQuestions.forEach((element) => {
  element.addEventListener("click", () => {
    toggleQuestion(element);
  });
});

function toggleQuestion(element) {
  const questionId = element.id;

  // add css class to the content
  const questionContent = document.getElementById(`${questionId}-answer`);
  questionContent.classList.toggle("enabled");

  // add css class to the icon
  const questionIcon = document.querySelector(`#${questionId} .question-arrow`);
  questionIcon.classList.toggle("enabled");
}
