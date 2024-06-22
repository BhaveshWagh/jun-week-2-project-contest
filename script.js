let countDisplay = document.getElementById("count");
let incrementBtn = document.getElementById("increment-btn");
let decrementBtn = document.getElementById("decrement-btn");
let clearBtn = document.getElementById("clear-btn");
let errorMsg = document.getElementById("error-msg");

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
clearBtn.addEventListener("click", clearCounter);

let count = 0;

// Handle Increment button
function incrementCounter() {
  count++;
  countDisplay.innerHTML = `Your current count is : ${count}`;
  if (count > 0) {
    errorMsg.style.display = "none";
    clearBtn.style.display = "inline-block";
  }
}

// Handle decrement button
function decrementCounter() {
  if (count > 0) {
    count--;
    countDisplay.innerHTML = `Your current count is : ${count}`;
  }
  if (count === 0) {
    errorMsg.style.display = "block";
    clearBtn.style.display = "none";
  }
}

// Handle clear button
function clearCounter() {
  count = 0;
  countDisplay.innerHTML = `Your current count is : ${count}`;

  errorMsg.style.display = "block";
  clearBtn.style.display = "none";
}
