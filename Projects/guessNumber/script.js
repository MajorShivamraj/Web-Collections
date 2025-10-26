const randNum = Math.floor(Math.random() * 10)+1;
const result = document.getElementById("result");

document.getElementById("checkBtn").addEventListener("click", function () {
  result.textContent = "";
  const inputNumber = parseInt(document.getElementById("guessNum").value);
  if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 10) {
    result.textContent = "Invalid Input !!";
    return;
  } else if (inputNumber == randNum) {
    result.textContent = `Congratulations ${inputNumber} is the number !!`;
    return;
  } else if (inputNumber > randNum) {
    result.textContent = `${inputNumber} is too Large !!`;
  } else if (inputNumber < randNum) {
    result.textContent = `${inputNumber} is too small !!`;
  }
});
