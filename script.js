let oddButtonsPressed = 0;
let evenButtonsPressed = 0;

const buttons = Array.from(document.querySelectorAll(".my-button"));

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.style.boxShadow = "5px 5px 10px grey";

    if (!button.classList.contains("pressed")) {
      button.classList.add("pressed");

      if ((index + 1) % 2 === 0) {
        evenButtonsPressed += 1;
        if (
          evenButtonsPressed ===
          buttons.filter((_, i) => (i + 1) % 2 === 0).length
        ) {
          alert("Всі парні кнопки натиснуті");
        }
      } else {
        oddButtonsPressed += 1;
        if (
          oddButtonsPressed ===
          buttons.filter((_, i) => (i + 1) % 2 !== 0).length
        ) {
          alert("Всі непарні кнопки натиснуті");
        }
      }

      if (oddButtonsPressed + evenButtonsPressed === buttons.length) {
        alert("Всі кнопки натиснуті");
      }
    }
  });
});
