// Select the Masonry container element
var masonryContainer = document.querySelector('.masonry-container');

// Initialize Masonry JS
var masonry = new Masonry(masonryContainer, {
    // options
    itemSelector: '.col-12',
});

// initial AOS library
AOS.init();

emailjs.init("ZXLb_-EiO9blfI2tT");

function refreshEle() {
    masonry.reloadItems();
    masonry.layout();
    const dataSpyList = document.querySelectorAll('[data-bs-spy="scroll"]');
    dataSpyList.forEach(dataSpyEl => {
        bootstrap.ScrollSpy.getOrCreateInstance(dataSpyEl).refresh()
    });
    AOS.refreshHard();
}

// wait for a brief delay after the resize event is fired then exec functions
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        refreshEle();
    }, 500);
});

// Ensure AOS Animation and ScrollSpy work correctly after browser resize
let samt = 0;
window.addEventListener('scroll', function () {
    if (samt <= 10) {
        samt++;
    } else {
        refreshEle();
    }
});

// Typewrite 
var intro = document.getElementById('intro');
var introTypeWriter = new Typewriter(intro, {
    loop: true
});
introTypeWriter.typeString('Lau Man Chun Simon').deleteAll().deleteAll().typeString('Software Engineer').pauseFor(2000).start();

var aboutTitle = document.getElementById('about-title');
var aboutTitleTypeWriter = new Typewriter(aboutTitle, {
    loop: false
});
aboutTitleTypeWriter.typeString('<span>Simon</span><span class="func">.about()</span>').start();

var cvTitle = document.getElementById('cv-title');
var cvTitleTypeWriter = new Typewriter(cvTitle, {
    loop: false
});
cvTitleTypeWriter.typeString('<span>Simon</span><span class="func">.resume()</span>').start();

var projectsTitle = document.getElementById('projects-title');
var projTitleTypeWriter = new Typewriter(projectsTitle, {
    loop: false
});
projTitleTypeWriter.typeString('<span>Simon</span><span class="func">.projects()</span>').start();

var contactTitle = document.getElementById('contact-title');
var contactTitleTypeWriter = new Typewriter(contactTitle, {
    loop: false
});
contactTitleTypeWriter.typeString('<span>Simon</span><span class="func">.contact()</span>').start();

// show nav bar
function showNavbar() {
    document.getElementById("header").style.left = "0px";
    document.getElementById("mobile-nav-toggler").onclick = hideNavbar;
    document.getElementById("mobile-nav-toggler").innerHTML = '<i class="fa-solid fa-xmark"></i>';
    document.getElementById("mobile-nav-toggler").style.paddingLeft = "300px";
}

// hide nav bar
function hideNavbar() {
    document.getElementById("header").style.left = "-300px";
    document.getElementById("mobile-nav-toggler").onclick = showNavbar;
    document.getElementById("mobile-nav-toggler").innerHTML = '<i class="fa-solid fa-bars"></i>';
    document.getElementById("mobile-nav-toggler").style.paddingLeft = "";
}

// show all projects when click
var viewAllItemBtn = document.getElementById('view-all-item-btn');

viewAllItemBtn.addEventListener('click', function () {
    removeHideItemClass();
});

function removeHideItemClass() {
    var elements = document.querySelectorAll('.hide-item');

    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('hide-item');
        elements[i].classList.add('show-item');
        viewAllItemBtn.classList.add('hide-item');
    }
    refreshEle();
}

// Swiper init
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    cssWidthAndHeight: true,
    autoResize: false,
    loop: true,
});

// EmailJS form submit
document.getElementById("message-form").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent the form from submitting by default

    spinner = document.getElementById('loading-spinner');
    spinner.style.display = "block";
    document.body.style.overflow = "hidden";

    // get the form data
    const formData = {
        from_name: document.getElementById("contact-first-name").value + " " + document.getElementById("contact-last-name").value,
        email: document.getElementById("contact-email").value,
        subject: document.getElementById("contact-subject").value,
        message: document.getElementById("contact-message").value,
    };
    console.log(formData);
    // send the email using EmailJS
    emailjs.send("service_o7piu78", "template_p8uahjc", formData).then(
        function () {
            spinner.style.display = "none";
            // show the success alert
            const alert = document.createElement("div");
            alert.classList.add("alert", "alert-success");
            alert.innerHTML = "Your message has been sent!";
            document.getElementById("message-form").insertBefore(alert, document.getElementById("message-form").firstChild);
            // reset the form
            document.getElementById("message-form").reset();
            document.body.style.overflow = "auto";
        },
        function (error) {
            spinner.style.display = "none";
            // show the error alert
            const alert = document.createElement("div");
            alert.classList.add("alert", "alert-danger");
            alert.innerHTML = "Oops! Something went wrong. Please try again later.";
            document.getElementById("message-form").insertBefore(alert, document.getElementById("message-form").firstChild);
            console.log("Error:", error);
            document.body.style.overflow = "auto";
        }
    );
});