console.log("Welcome to sticky notes app.");
// To get not on reload we need to call the fucntion shownotes( )
showNotes();


// If user adds a note, add it to the localStorage


// linking varidable and button using getElementById
let addBtn = document.getElementById("addBtn");

// adding eventlistener to the button to react on click 
addBtn.addEventListener("click", function (e) {

  //linking textarea to variable 
  let addTxt = document.getElementById("addTxt");
  // for adding titles 
  let addTitle = document.getElementById("addTitle")
  //created notes varible to fetch the notes from local storage 
  let notes = localStorage.getItem("notes");

  // incase we already have notes so will call getitem
  if (notes == null) {
    //incase out notes are null so we created a object
    notesObj = [];
    // for storing notes we create array 
  } else {
    notesObj = JSON.parse(notes);
    // incase we found notes "string"
  }
  //
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  /*
    //pushing textarea value to note object
    // notesObj.push(addTxt.value);
    before adding title we used to push only text in the array 
    but now we need to push title+ text so we will push the newly created object which 
    contain both tiotle and text so
  */
  notesObj.push(myObj);
  // adding notes and stringify them 
  localStorage.setItem("notes", JSON.stringify(notesObj));

  addTxt.value = "";

  addTitle.value = "";

  // if we dont blank the value here i wont remove the txt after adding notes and title

  showNotes();
});







// Function to show elements from localStorage
function showNotes() {
  // this will fetch if we have note or not in the local storage 
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }


  let html = "";

  // foreach loop for evey element array 
  // it will add the card for each notes you add also give them index number.
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;

    /*
    we use this code to display notes with default title 
   
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
           
     */
  });
  // here created another variable to fetch notes if notes is not equal to zero
  // it will retuen the html card codded above else it will show nothing to show
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!  `;
  }
}







// Function to delete a note
function deleteNote(index) {

  // this will fetch if we have notes the local storage 
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  // here we are using splice function to remove element using index 
  // syntax splice(index, the number of element you want to remove)
  notesObj.splice(index, 1);
  // updating notes after removing specificy elements 
  localStorage.setItem("notes", JSON.stringify(notesObj));
  // to refect change we call show function to visually see the changes 
  showNotes();
}





// adding search functionality 
//  creted as search varibale to link searchTxt
let search = document.getElementById("searchTxt");
// adding event listener to pick input event
search.addEventListener("input",function(){
  // created variable to get search value and conver it to lowercase 
  // we use lower case to to convert string in to lower if case if xomeone typeed the text in capita l
  let inputVal = search.value.toLowerCase();
  // console.log(inputVal);
  // here we get the all elements by using class name to get all the cards
  let noteCards = document.getElementsByClassName("noteCard");
  // here the array of the carfs 
  Array.from(noteCards).forEach(function (element) {
    // created cardtxt variable to collect para tag element bciz we have only one para 
    // tag in the html and that one contains our note 
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt) 
    // if our paratag contains the searched string pr word it will show all cards that contain similar string
    if (cardTxt.includes(inputVal)) {
      element.style.display ="block";
      
    }
    // if it dont show any string it will hide all the cards 
    else{
      element.style.display ="none";

    }
  })

})
// delete all functionlity

let delBtn = document.getElementById("delBtn");
delBtn.addEventListener("click",function(){
  localStorage.clear();
});