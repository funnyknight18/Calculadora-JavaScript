const display = document.getElementById("data-current-operand");
const numbers = document.querySelectorAll("[id*=number]");
const insertNumber = (Event) =>
  (display.textContent = Event.target.textContent);

numbers.forEach((number) => number.addEventListener("click", insertNumber));
