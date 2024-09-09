let navMenu = document.getElementById('navbar');
let offset = navMenu.offsetTop; // Get the distance from the top of the page to the navbar

// sticky navbar
window.onscroll = function() {
    if (window.scrollY > offset) {
        navMenu.classList.add("sticky");
    } else {
        navMenu.classList.remove("sticky");
    }
}

// image slide
const slideImg = document.getElementById("sliderImg")
let images = [
    "img/building-1.jpg",
    "img/building-2.jpg",
    "img/building-3.jpg",
    "img/building-4.jpg"
]

// let len = images.length;
let i = 0;
// function slider() {
//     if (i > len-1) {
//         i = 0;
//     }
//     slideImg.src = images[i];
//     i++;
//     setTimeout("slider()", 3000)
// }

function slider() {
    slideImg.src = images[i];
    i = (i + 1) % images.length; // Loop back to the first image after the last one
    setTimeout(slider, 3000); // Pass the function directly
}

// Start the slider when the page loads
window.onload = slider;

// circle animation

let circles = document.querySelectorAll('.circle');

function animateCircles() {
    circles.forEach(function(circle) {
        let circlePosition = circle.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if (circlePosition < screenPosition) {
            circle.classList.add('animate');
        }
    });
}

// FAQ Accordion 
window.addEventListener('scroll', animateCircles);
animateCircles();

const accordionItems = document.querySelectorAll(".accordion-item");

const toggleAccordion = (index) => {
    resetAccordions(index);

    const currentAccordion = accordionItems[index];
    currentAccordion.classList.toggle("is-active");

    const accordionContent = currentAccordion.querySelector(".accordion-content");
    const accordionTrigger = currentAccordion.querySelector(".accordion-trigger");

    if (currentAccordion.classList.contains("is-active")) {
        accordionContent.style.height = `${accordionContent.scrollHeight}px`;
        accordionTrigger.setAttribute("aria-expanded", "true");
    } else {
        accordionContent.style.height = 0;
        accordionTrigger.setAttribute("aria-expanded", "false");
    }
};

const resetAccordions = (targetIndex) => {
    accordionItems.forEach((accordion, index) => {
        const accordionContent = accordion.querySelector(".accordion-content");
        const accordionTrigger = accordion.querySelector(".accordion-trigger");

        if (targetIndex != index) {
        accordion.classList.remove("is-active");
        accordionContent.style.height = 0;
        accordionTrigger.setAttribute("aria-expanded", "false");
        }
    });
};

window.addEventListener("load", () => {
    accordionItems.forEach((accordion, index) => {
        const accordionTrigger = accordion.querySelector(".accordion-trigger");
        accordionTrigger.addEventListener("click", () => toggleAccordion(index));
    });
});

// mobile menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.close-menu');

mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.add('active');
});

closeMenuButton.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
});

