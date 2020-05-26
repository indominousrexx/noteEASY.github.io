
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
 let addTxt = document.getElementById("addTxt");
 let addTxt2 = document.getElementById("addTxt2");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  
  notesObj.push(addTxt2.value + '<hr id="hrj" />' + addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj)); 
  addTxt.value = "";
  addTxt2.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-3 mx-4 card" id="notecard" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <div class="editNote" contenteditable>
                           <p class="card-text"> ${element}</p>
                        </div>   
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-dark my-2 my-sm-0">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<p id="p">Nothing to show! Use "Add a Note" section above to add notes.</p>`;
  }
}

function deleteNote(index) {

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
  
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})