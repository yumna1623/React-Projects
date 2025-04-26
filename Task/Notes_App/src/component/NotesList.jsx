import React from "react";
import Note from "./Note";
import "./notesList.css";
import AddNote from "./AddNote";

const NotesList = ({ Notes,handleAddNote,handleDelete,handleEdit }) => {

  return (
    <div className="notes-list">
      {Notes.map((note) => (
        <Note 
        key={note.firebaseId}   
        firebaseId={note.firebaseId}   
        text={note.text}
        date={note.date}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
    />
      ))}
      <AddNote handleAddNote = {handleAddNote}
      />   
    </div>
  );
};

export default NotesList;