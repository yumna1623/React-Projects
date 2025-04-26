import React from "react";
import Note from "./Note";
import "./notesList.css";
import AddNote from "./AddNote";

const NotesList = ({ Notes,handleAddNote }) => {
  return (
    <div className="notes-list">
      {Notes.map((note) => (
        <Note 
        key={note.id}
         text={note.text}
          date={note.date} />
      ))}
      <AddNote handleAddNote = {handleAddNote}
      />   
    </div>
  );
};

export default NotesList;
