function processForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Thank you for contacting the lab, " + name + "!");

  document.getElementById("contactForm").reset();
}
