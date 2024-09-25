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
// window.addEventListener('scroll', animateCircles);
// animateCircles();

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

// documentation tabs
document.addEventListener("click", tabClick);

// Define a function that filters the unwanted click events on the document
function tabClick(event) {
    let elem = event.target,
        elemHREF = elem.getAttribute("href"),
        tabs = document.querySelectorAll(".tabs li a"),
        tabContents = document.querySelectorAll(".tab-contents li");

    // If we click an element whose href contains "tab-", proceed
    if (elemHREF != null && elemHREF.indexOf("tab-") != -1) {
        event.preventDefault();

        // If we didn't click an active item, switch tabs
        if (elem.className.indexOf("active") == -1) {
        // Remove the active class from the tabs and the visible class from the tab contents
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
            tabContents[i].classList.remove("visible");
        }

        // Add the active class to the clicked element and the visible class to the corresponding tab
        elem.classList.add("active");
        document.getElementById(elemHREF).classList.add("visible");
        }
    }
}

// modal content
const overlays = document.querySelectorAll(".overlay");
overlays.forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
        const imgSrc = e.currentTarget.previousElementSibling.src;
        imgModal(imgSrc);
    });
});

let imgModal = (src) => {
    const closeBtn = document.createElement("i");
    const modal = document.createElement("div");
    const newImage = document.createElement("img");
    
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    newImage.setAttribute("src", src);
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};

