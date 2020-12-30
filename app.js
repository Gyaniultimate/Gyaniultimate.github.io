console.log("It begins");
shownotes()
//user will add new note to the local storage
addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function(e) {

    let txtarea =  document.getElementById("txtarea");
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];

    }
    else
     {
         notesObj = JSON.parse(notes);

     }
     notesObj.push(txtarea.value);
     localStorage.setItem("notes", JSON.stringify(notesObj))
     txtarea.value="";
     shownotes();

})

//show notes
function shownotes()
{
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];

    }
    else
     {
         notesObj = JSON.parse(notes);

     }
     let html="";
     notesObj.forEach(function(element, index) {
         let num=index+1;
        html += '  <div class="note my-2 mx-2 card" style="width: 18rem;">'
        +'<div class="card-body">'
         +' <h5 class="card-title">Note '+" "+ num+'</h5>'
          +'<p class="card-text">'+element+'</p>'
        +'<br>'
        +'<button id='+index+' onClick="deleteNote(this.id)" class="btn btn-primary" id="addbtn">delete note </button>'
      +'</div>'
      +'</div>';
     });
     let notesElm= document.getElementById('notes')
     if(notesObj.length != 0)
         notesElm.innerHTML = html;
         else
         {
             notesElm.innerHTML = "<h1>Your notes will appear here</h1>"
         }
     




}
//delete a note
function deleteNote(index) {


    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];

    }
    else
     {
         notesObj = JSON.parse(notes);

     }

     notesObj.splice(index,1);
     localStorage.setItem("notes", JSON.stringify(notesObj))
     shownotes();


}
//search
let search = document.getElementById('searchTxt');

search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    
    let noteCards = document.getElementsByClassName('note');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

