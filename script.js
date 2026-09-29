/* =========================================================
   VEDA TECHNOLOGY
   JavaScript
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    isOpen ? "true" : "false"
  );

});


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navLinks a").forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


/* =========================================================
   FAQ ACCORDION
========================================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {

    const currentlyActive = item.classList.contains("active");

    /* Close all other FAQ items */

    faqItems.forEach((otherItem) => {

      otherItem.classList.remove("active");

      const otherAnswer =
        otherItem.querySelector(".faq-answer");

      otherAnswer.style.maxHeight = null;

    });


    /* Open selected item */

    if (!currentlyActive) {

      item.classList.add("active");

      answer.style.maxHeight =
        answer.scrollHeight + "px";

    }

  });

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const message =
    document.getElementById("message").value.trim();


  if (!name || !email || !message) {

    formMessage.textContent =
      "Please complete all required fields.";

    formMessage.style.color = "#e5484d";

    return;

  }


  /* Demo submission */

  formMessage.textContent =
    "Thank you! Your message has been prepared successfully.";

  formMessage.style.color = "#159570";

  contactForm.reset();

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 20) {

    header.style.boxShadow =
      "0 8px 30px rgba(20, 30, 60, 0.06)";

  } else {

    header.style.boxShadow = "none";

  }

});


/* =========================================================
   SIMPLE SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
  ".feature-card, .program-card, .service-row, .process-step"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(element);

});
