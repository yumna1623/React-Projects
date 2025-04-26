import { nanoid } from "@reduxjs/toolkit";
import "./component/notesList.css";
import React, { useState, useEffect } from "react";
import { db } from "./config"; 
import { ref, push, onValue,remove,update } from "firebase/database";
import NotesList from "./component/NotesList"

function App() {
  const [Notes, setNotes] = useState([]);

//   useEffect(() => {
//     const notesRef = ref(db, "notes");
//     onValue(notesRef, (snapshot) => {
//       const data = snapshot.val();
//       const loadedNotes = data ? Object.values(data) : [];
//       setNotes(loadedNotes);
//     });
//   }, []);

useEffect(() => {
    const notesRef = ref(db, "notes");
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedNotes = Object.keys(data).map((key) => ({
          firebaseId: key,   
          ...data[key],      
        }));
        setNotes(loadedNotes);
      } else {
        setNotes([]);
      }
    });
  }, []);
  

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const notesRef = ref(db, "notes");
    push(notesRef, newNote)
      .then(() => {
        alert("Note added to Firebase successfully!");
      })
      .catch((error) => {
        console.error("Error adding note:", error);
        alert("Failed to add note. Please try again.");
      });
  };

  const DeleteNote = (firebaseId) => {  
    const noteRef = ref(db, `notes/${firebaseId}`);  
    remove(noteRef)
      .then(() => {
        alert("Note deleted successfully");
      })
      .catch((error) => {
        alert("Error deleting note: " + error.message);
      });
  };
  

  const EditNote = (noteId, newText) => {
    const noteRef = ref(db, `notes/${noteId}`);
    update(noteRef, { text: newText })
      .then(() => {
        alert("Note updated successfully");
      })
      .catch((error) => {
        alert("Error updating note: " + error.message);
      });
  };
  return (
    <div className="container">
      <NotesList Notes={Notes} handleAddNote={addNote}
      handleDelete = {DeleteNote}
      handleEdit = {EditNote}
      />
    </div>
  );
}

export default App;