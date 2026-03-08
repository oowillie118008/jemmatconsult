const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const form = document.getElementById("consultForm");
const statusText = document.getElementById("status");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

if (form && statusText) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      statusText.textContent = "Please fill all required fields before submitting.";
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name") || "Client";
    statusText.textContent = `Thank you, ${name}. Your confidential request has been received.`;
    form.reset();
  });
}
