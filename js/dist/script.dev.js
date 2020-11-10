"use strict";

var elAdd = document.querySelector('#createNote');
var elNotes = document.querySelector("#notes");
var elFilter = document.querySelector('#filter');
var elNoteTitle = document.querySelector('#noteTitle');
var elNoteContent = document.querySelector('#noteContent');
var elSaveNote = document.querySelector('#saveNote'); // function to make the title ready for input

function createNote() {
  elNoteTitle.focus();
}

window.addEventListener('load', createNote, false);

function saveNote() {
  var noteLink = document.createElement('a');
  var getTitle = document.createElement('p');
  var getTimeStamp = document.createTextNode('p');
  var elNoteTitleVale = elNoteTitle.value; // let elNoteContentValue = elNoteContent.value;

  if (elNoteTitleVale === '') {
    getTitle.textContent = 'Untitled Note';
    console.log(getTitle.textContent);
  } else {
    getTitle.textContent = elNoteTitleVale;
    console.log(getTitle.textContent);
  }

  var titleHolder = noteLink.appendChild(getTitle);
  console.log(titleHolder);
  localStorage.setItem('noteHolder', getTitle.textContent);
  console.log(localStorage.getItem('noteHolder'));
  noteLink.appendChild(titleHolder);
  console.log(noteLink); // elNotes.appendChild(noteLink);
}

elSaveNote.addEventListener('click', saveNote, false);