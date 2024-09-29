const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".Btn");

function showNotes() {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || []; // Parse notes from localStorage, handle null case
  notesContainer.innerHTML = ""; // Clear container before rendering saved notes

  savedNotes.forEach((noteText) => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = noteText; // Set the content from localStorage

    img.src = "delete.png";
    img.className = "delete-btn"; // Optional class for styling

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    addKeyupListener(inputBox); // Attach event listener to handle edits
  });
}

function updateStorage() {
  const allNotes = Array.from(document.querySelectorAll(".input-box")).map(note =>
    note.textContent // Get the text content of each note
  );
  localStorage.setItem("notes", JSON.stringify(allNotes)); // Save as a JSON array
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  
  img.src = "delete.png";
  img.className = "delete-btn"; // Optional class for styling
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  addKeyupListener(inputBox); // Add keyup listener to the new note
  updateStorage(); // Update localStorage
});

function addKeyupListener(note) {
  note.addEventListener("keyup", updateStorage); // Listen to keyup events to update storage on edit
}

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage(); // Update localStorage after deletion
  }
});

// Initial call to load and display saved notes
showNotes();
