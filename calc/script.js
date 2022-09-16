const calc = document.getElementById("calc")
const display = document.getElementById("display")
const calcButtonResult = document.getElementById("calcButtonResult")
let signs = ["+", "-", "*", "/"];
first_number = 0;

function onNumberButtonClick(ev) {
   let element = ev.target
   if (element.classList.contains("number-btn")) {
      display.innerText = parseFloat(display.innerText + element.innerText);
   }else if (element.classList.contains("sign-btn")) {
      first_number = parseFloat(display.innerText);
      sign = element.innerText;
      display.innerText = "";
   }else if (element.classList.contains("point-btn")) {
      display.innerText += "."
   }else if (element.classList.contains("condition-btn")) {
      display.innerText = -(parseFloat(display.innerText));
   }else if (element == calcButtonResult){
      if (sign == "+") {
         display.innerText = first_number + parseFloat(display.innerText);
      }else if (sign == "-") {
         display.innerText = first_number - parseFloat(display.innerText);
      }else if (sign == "*") {
         display.innerText = first_number * parseFloat(display.innerText);
      }else if (sign == "/") {
         display.innerText = first_number / parseFloat(display.innerText);
      }
   }
}
calc.addEventListener("click", onNumberButtonClick)
document.addEventListener('keydown', function(){
   console.log(event.key);
   if (signs.includes(event.key)) {
      first_number = parseFloat(display.innerText);
      sign = event.key;
      display.innerText = "";
   }else if (event.key == "." || event.key == ",") {
      display.innerText += ".";
   }else if (event.key == "c" || event.key == "C") {
      display.innerText = "";
   }else if (event.key == "=" || event.key == "Enter") {
      if (sign == "+") {
         display.innerText = first_number + parseFloat(display.innerText);
      } else if (sign == "-") {
         display.innerText = first_number - parseFloat(display.innerText);
      } else if (sign == "*") {
         display.innerText = first_number * parseFloat(display.innerText);
      } else if (sign == "/") {
         display.innerText = first_number / parseFloat(display.innerText);
      }
   } else if (!isNaN(event.key)){
      display.innerText = parseFloat(display.innerText + event.key);
   }
})