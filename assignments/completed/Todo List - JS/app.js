//selecting the button
const addBtn = document.querySelector(".todo-button");
addBtn.addEventListener("click", add);
const notes = document.querySelector(".todo-list");

/*
//selecting items to make list items
const listItem = document.createElement("li");
const note = document.createElement("h4");
const completedBtn = document.createElement("button");
const deleteBtn = document.createElement("button");

//selecting the textbox
const input = document.querySelector(".todo-input");
*/

function add(e) {
    e.preventDefault();

    //selecting items to make list items

    //selecting the textbox
    const input = document.querySelector(".todo-input");

    const listItem = document.createElement("li");
    const note = document.createElement("h4");
    const completedBtn = document.createElement("button");
    const deletedBtn = document.createElement("button");

    function settingAttributes() {
        note.innerHTML = input.value;

        note.setAttribute("class", "todo-item");

        completedBtn.setAttribute("class", "complete-btn");
        completedBtn.innerHTML = "Completed";

        deletedBtn.setAttribute("class", "trash-btn");
        deletedBtn.innerHTML = "Delete";
    }
    function appendingListItems() {
        listItem.appendChild(note);
        listItem.appendChild(completedBtn);
        listItem.appendChild(deletedBtn);
        notes.appendChild(listItem);
    }
    settingAttributes();
    appendingListItems();

    deletedBtn.addEventListener("click", deleteNote);
    completedBtn.addEventListener("click", completeNote);

    function deleteNote() {
        notes.removeChild(listItem);
    }
    function completeNote() {
        if (note.style.textDecoration === "line-through solid rgb(0, 0, 0)") {
            note.style.textDecoration = "none";
        } else {
            note.style.textDecoration = "line-through solid rgb(0, 0, 0)";
        }
    }
}
