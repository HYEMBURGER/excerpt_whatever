const idForm = document.querySelector("#id-form");
const idInput = document.querySelector("#id-input");
const greeting = document.querySelector("#greeting");

// stop Refresh
function submitEvent(event) {
  event.preventDefault();

  // write greeting
  greeting.innerText = `Hello ${idInput.value} ! Welcome to this page !`;

  // hidden input
  idForm.classList.add("hidden");
  
idForm.addEventListener("submit", submitEvent);
