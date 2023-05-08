const dayInp = document.querySelector(".day");
const monthInp = document.querySelector(".month");
const yearInp = document.querySelector(".year");
const btn = document.querySelector(".btn");
const dayOut = document.querySelector(".days");
const monthOut = document.querySelector(".months");
const yearOut = document.querySelector(".years");

// data actuala
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let val = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "The field is required!";
      val = false;
      console.log(i);
    } else if (yearInp.value > year || yearInp.value < 1) {
      yearInp.style.borderColor = "red";
      yearInp.parentElement.querySelector("small").innerText = "Invalid year!";
      val = false;
      console.log(yearInp);
    } else if (monthInp.value > 12 || monthInp.value < 1) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerText =
        "Invalid month!";
      val = false;
      console.log(monthInp);
    } else if (dayInp.value > 31 || dayInp.value < 1) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerText = "Invalid day!";
      val = false;
      console.log(dayInp);
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      val = true;
    }
  });
  return val;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }
    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOut.innerHTML = d;
    monthOut.innerHTML = m;
    yearOut.innerHTML = y;
  }
});
