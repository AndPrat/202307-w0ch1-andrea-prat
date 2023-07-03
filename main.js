let counter = 0;
let maximCounter = 15;

const changeValueCounter = () => {
  const counterElement = document.getElementById("counter");
  if (counterElement !== "") {
    counterElement.innerHTML = counter;
  }
};

const getIncrement = () => {
  if (counter < maximCounter) {
    counter = counter + 1;
    changeValueCounter();
  }
};

const getDecrement = () => {
  if (counter > 0) {
    counter = counter - 1;
    changeValueCounter();
  }
};

const getRestart = () => {
  counter = 0;
  changeValueCounter();
};

const buttonIncrement = document.getElementById("buttonIncrement");

if (buttonIncrement !== "") {
  buttonIncrement.addEventListener("click", getIncrement);
}

const buttonDecrement = document.getElementById("buttonDecrement");

if (buttonDecrement !== "") {
  buttonDecrement.addEventListener("click", getDecrement);
}

const buttonRestart = document.getElementById("buttonRestart");

if (buttonRestart !== "") {
  buttonRestart.addEventListener("click", getRestart);
}
