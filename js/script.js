// =================================
// CONTACT FORM VALIDATION
// =================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // Name validation
    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;
    }


    // Email validation
    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;
    }


    // Subject validation
    if (subject === "") {

        subjectError.textContent =
            "Please enter a subject.";

        isValid = false;
    }


    // Message validation
    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }


    // Form is valid
    if (isValid) {

        successMessage.textContent =
            "Message validated successfully!";

        contactForm.reset();
    }

});


// =================================
// EMAIL VALIDATION
// =================================

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

// =================================
// ACTIVE NAVIGATION
// =================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});