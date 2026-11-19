// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Registration form demo: validates and displays a success message.
// This does not store data on a server or in a database.
document.getElementById("registrationForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("studentName").value.trim();
  const email = document.getElementById("studentEmail").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const department = document.getElementById("studentDepartment").value;
  const output = document.getElementById("registrationMessage");

  if (!name || !email || !studentId || !department) {
    output.style.color = "#b42318";
    output.textContent = "Please complete all fields.";
    return;
  }

  output.style.color = "#16803c";
  output.textContent = `Thank you, ${name}! Your demo registration was submitted.`;
  event.target.reset();
});

// Contact form demo: displays a confirmation but does not send an email.
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("contactName").value.trim();
  const output = document.getElementById("contactResponse");

  output.style.color = "#16803c";
  output.textContent = `Thank you, ${name}! Your message has been received in this demo.`;
  event.target.reset();
});
