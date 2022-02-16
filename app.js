const timeLeft = document.getElementById("time-left");
const button = document.getElementById("countdownBtn");

const born = prompt("When is your birthday   (MM/DD/YYYY)");
const birthday = new Date(born);
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timeId;

// button.addEventListener("click", );

function countDown() {
  const today = new Date();
  const timeSpan = birthday - today;
  if (born == null || born == "" ) {
    timeLeft.innerHTML = "click on countdown button";
    clearInterval(timeId);
    return;
  }
  if (born == isNaN) {
    timeLeft.innerHTML = "incorrect date format, click on countdown button";
    clearInterval(timeId);
    return;
  }
  if (timeSpan <= -day) {
    timeLeft.innerHTML = "Hope you Enjoyed your Birthday";
    clearInterval(timeId);
    return;
  }

  if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy Birthday!!!";
    clearInterval(timeId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan & minute) / second);

  timeLeft.innerHTML =
        days + "days " + hours + "hours " + minutes + "min " + seconds + "seconds ";
    if (timeLeft.innerHTML == isNaN) {
        timeLeft.innerHTML = "Write a Valid Date";
    }
  // console.log(timeSpan);
}

setInterval(countDown, second);
// console.log(2*day);


