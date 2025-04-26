import React from "react";
import "./notesList.css";
import { useState } from "react";


const AddNote = ({handleAddNote}) => {
    const charlimit =200

const [noteText , setNoteText] = useState("");
const handlechange = (e)=>{
    setNoteText(e.target.value);
}

const handleSave = () => {
    if(noteText.trim().length > 0){
        handleAddNote(noteText);
        setNoteText("");
    }else{
        alert("Please enter a note");
    }
    
}
  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a note..."
        rows="10"
        cols="30"
        onChange={handlechange}
        value={noteText} 
      ></textarea>
      <div className="note-footer">
        <small> Remaining : {charlimit-noteText.length}</small>
        <button className="save" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;