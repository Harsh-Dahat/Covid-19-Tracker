let myInp = document.getElementById("inputBox");
let myBtn = document.querySelectorAll("button");

let string = "";
let arr = Array.from(myBtn);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      myInp.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      myInp.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      myInp.value = string;
    } else {
      string += e.target.innerHTML;
      myInp.value = string;
    }
  });
});
