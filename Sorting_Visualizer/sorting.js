// Swap function util for sorting algorithms, swaps height of two DOM elements
function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// Disables sorting buttons to prevent interaction during sorting
function disableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons after sorting is done
function enableSortingBtn() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider during sorting
function disableSizeSlider() {
  document.querySelector("#arr_sz").disabled = true;
}

// Enables size slider after sorting
function enableSizeSlider() {
  document.querySelector("#arr_sz").disabled = false;
}

// Disables new array button during sorting
function disableNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
}

// Enables new array button after sorting
function enableNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
}

// Async function to add delay for animations, takes input in milliseconds (1000ms = 1s)
function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

// Selecting size slider from DOM to update array size
let arraySize = document.querySelector("#arr_sz");

// Event listener to update bars on the UI when array size changes
arraySize.addEventListener("input", function () {
  createNewArray(parseInt(arraySize.value)); // Generate new array based on slider value
});

// Default delay for animations (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

// Event listener to update delay time (speed of sorting)
delayElement.addEventListener("input", function () {
  delay = 320 - parseInt(delayElement.value); // Adjust delay based on speed slider value
});

// Array to store randomly generated numbers
let array = [];

// Initial call to display bars when the page loads
createNewArray();

// Function to create new array and display it as bars
function createNewArray(noOfBars = 60) {
  deleteChild(); // Call helper function to delete old bars

  // Create an array of random numbers
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }

  // Select the div with ID #bars
  const bars = document.querySelector("#bars");

  // Create multiple div elements (bars) using a loop and add classes
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`; // Set height based on array value
    bar.classList.add("bar", "flex-item", `barNo${i}`);
    bars.appendChild(bar); // Append bar to the container
  }
}

// Helper function to delete old bars (clears container)
function deleteChild() {
  const bars = document.querySelector("#bars");
  bars.innerHTML = ""; // Clear all child elements (bars)
}

// Selecting newArray button from DOM and adding event listener
const newArray = document.querySelector(".newArray");

// Ensure the button exists and attach the event listener
if (newArray) {
  newArray.addEventListener("click", function () {
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value); // Generate a new array with current slider size
  });
} else {
  console.error("New Array button not found");
}
