"use strict";

let nav = document.querySelector(".btn-mobile-nav");
let header = 
document.queryselector(".header");
nav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
let box = document.querySelectorAll(".how-img");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mousemove", (e) => {
    const boxRect = box[i].getBoundingClientRect();
    const x = e.clientX - boxRect.left;
    const y = e.clientY - boxRect.top;
    const centerX = boxRect.width / 2;
    const centerY = boxRect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Up/down
    const rotateY = ((x - centerX) / centerX) * 15; // Left/right

    box[
      i
    ].style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.3)`;
  });

  box[i].addEventListener("mouseleave", () => {
    box[i].style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  });

  box[i].addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const boxRect = box[i].getBoundingClientRect();
    const x = touch.clientX - boxRect.left;
    const y = touch.clientY - boxRect.top;
    const centerX = boxRect.width / 2;
    const centerY = boxRect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    box[
      i
    ].style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.3)`;
  });

  box[i].addEventListener("touchend", () => {
    box[i].style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  });
}
