console.log(" toDo app.");
showNotes();

addBtn.addEventListener("click", function (e) {
    if (addTxt.value != "" && addTitle != "") {
        let notes = localStorage.getItem("notes");
        (notes == null) ? notesObj = [] : notesObj = JSON.parse(notes)
        let myObj = { title: addTitle.value, text: addTxt.value }
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        addTitle.value = "";
    }
    showNotes();
});
function showNotes() {
    let html = "";
    let notes = localStorage.getItem("notes");
    (notes == null) ? notesObj = [] : notesObj = JSON.parse(notes)
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title" id="card-title">${element.title}</h5>
                <p class="card-text" id="card-text"> ${element.text}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                <button id="${index}"onclick="editNote(this.id)" class="btn btn-primary">Edit Note</button>
            </div>
        </div>`;
    });
    let notesElm = document.getElementById("notes_holder");
    (notesObj.length != 0) ? notesElm.innerHTML = html : notesElm.innerHTML = `Nothing to show!  `
}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    (notes == null) ? notesObj = [] : notesObj = JSON.parse(notes)
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
function editNote(index) {
    let updatebtn = document.getElementById('update')
    addBtn.disabled = "true";
    updatebtn.style.display = "block";
    const targetNote = notes.filter((note) => note.id == id)[0];
    targetNote.content = newContent;
}


