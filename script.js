import eye from "./eye.js";

const header = document.querySelector("header");
const btns = document.querySelectorAll(".btn");
const navList = document.getElementById("nav-list");
const welcome = document.querySelector(".welcome");

// welcome.style.color = "red";
eye();

// welcome text
window.addEventListener("load", () => {
  console.log("loaded");
  welcome.style.opacity = 1;
});

// reveal elements
window.addEventListener("scroll", reveal);
window.onscroll = function () {
  headerScroll();
  welcome.style.opacity = 0;
};

const revealEl = document.querySelectorAll(".reveal");
function reveal() {
  revealEl.forEach((el) => {
    const winHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < winHeight - revealPoint) el.classList.add("active");
    else el.classList.remove("active");
  });
}

// change header on scroll
function headerScroll() {
  const vh = window.innerHeight;
  const scrollPos = document.documentElement.scrollTop;
  const pageNumber = Math.floor((scrollPos + 30).toFixed() / vh);

  if (pageNumber % 2 == 0) {
    btns.forEach((el) => (el.style.color = "white"));
    header.style.backgroundColor = "unset";
  } else {
    btns.forEach((el) => (el.style.color = "black"));
    header.style.backgroundColor = "unset";
  }
  Array.from(navList.children).forEach((el, i) => {
    if (i == pageNumber)
      el.firstChild.style.boxShadow =
        "inset 100px 0 0 0 rgba(205, 156, 50, 0.3)";
    else el.firstChild.style.boxShadow = "inset 0 0 0 0";
  });

  // console.log(`inner H: ${window.innerHeight}. outer H: ${window.outerHeight}`);
  console.log(Math.floor(scrollPos.toFixed() / vh));
}
