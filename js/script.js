const elAdd = document.querySelector('#createNote'); 
const elNotes = document.querySelector("#notes");
const elFilter = document.querySelector('#filter');
const elNoteTitle = document.querySelector('#noteTitle');
const elNoteContent = document.querySelector('#noteContent');
const elSaveNote = document.querySelector('#saveNote');

// function to make the title ready for input
function createNote() {
    elNoteTitle.focus();
}
window.addEventListener('load', createNote, false);

function saveNote() {
    const noteLink = document.createElement('a');
    const getTitle = document.createElement('p');
    const getTimeStamp = document.createTextNode('p');

    let elNoteTitleVale = elNoteTitle.value;
    // let elNoteContentValue = elNoteContent.value;
    
    if (elNoteTitleVale === '') {
        getTitle.textContent = 'Untitled Note'
        console.log(getTitle.textContent);
    } else {
        getTitle.textContent = elNoteTitleVale;
        console.log(getTitle.textContent);
    }
    
    let titleHolder = noteLink.appendChild(getTitle);
    console.log(titleHolder);

    localStorage.setItem('noteHolder', getTitle.textContent);
    console.log(localStorage.getItem('noteHolder'));
    noteLink.appendChild(titleHolder)
    console.log(noteLink);
    // elNotes.appendChild(noteLink);
}
elSaveNote.addEventListener('click', saveNote, false);



