
let input = document.getElementById("note-input");
let addBtn = document.getElementById("add-note");
let deleteInput = document.getElementById("note-delete");
let deleteBtn = document.getElementById("delete-note");
let notesDiv = document.getElementById("notes");


let notes = [];


function afficherNotes() {
  notesDiv.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    let noteLi = document.createElement("li");
    noteLi.textContent = note;
    notesDiv.appendChild(noteLi);
  }
}

function ajouterNote() {
  let note = input.value;
  notes.push(note);
  afficherNotes();
}


function supprimerNote() {
  let noteASupprimer = deleteInput.value;
  let index = notes.indexOf(noteASupprimer);
  if (index !== -1) {
    notes.splice(index, 1);
    console.log("La note a été supprimée avec succès.");
  } else {
    console.log("La note n'est pas présente dans le tableau.");
  }
  afficherNotes();
}

addBtn.addEventListener("click", ajouterNote);

deleteBtn.addEventListener("click", supprimerNote);
