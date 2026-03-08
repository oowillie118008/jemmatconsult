const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = "Please complete all required fields.";
      return;
    }

    const data = new FormData(contactForm);
    const name = data.get("name");

    formStatus.textContent = `Thank you, ${name}. Your request has been received. We will contact you shortly.`;
    contactForm.reset();
  });
}
