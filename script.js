const noteContainer = document.querySelector(".notes-container");
const createBTN = document.querySelector(".edit-button");

createBTN.addEventListener("click", () => {
    const note = createNote();
    noteContainer.appendChild(note);
});

function createNote() {
    const note = document.createElement("div");
    note.className = "note";

    const inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = "Start typing your note here...";

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = '<img src="images/delete.png" alt="Delete Icon">';

    deleteButton.addEventListener("click", () => {
        noteContainer.removeChild(note);
    });

    note.appendChild(inputBox);
    note.appendChild(deleteButton);

    return note;
}
