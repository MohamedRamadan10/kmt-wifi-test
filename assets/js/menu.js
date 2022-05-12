"use strict";

const menuBtn = document.querySelector(".menu .icon");
const menuLink = document.querySelector(".menu .menu__link");
menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("open");
	menuLink.classList.toggle("active");
});
