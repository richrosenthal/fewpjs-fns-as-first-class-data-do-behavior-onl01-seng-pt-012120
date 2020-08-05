/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
   if (time.parseInt() < 1200) {
     console.log("Good Morning");
   } else if (time.parseInt() > 1200 && time.parseInt()< 1700){
     console.log("Good Afternoon");
   } else {
     console.log("Good Evening");
   }
}


/* Write your implementation of displayMessage() */
document.querySelector("greeting").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}