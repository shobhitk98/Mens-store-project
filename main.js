const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

'use strict';



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
});



/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[this.scrollY > 50 ? "add" : "remove"]("active");
});

var tl = gsap.timeline()

tl.to(".page1",{
    y:"100vh",
    scale:0.6,
    duration:0
})
tl.to(".page1",{
    y:"30vh",
    duration:1,
    delay:1
})
tl.to(".page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.9
})



