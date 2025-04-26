import { nanoid } from "@reduxjs/toolkit";
import "./component/notesList.css";
import React, { useState, useEffect } from "react";
import { db } from "./config"; // Your config file
import { ref, push, onValue } from "firebase/database";
import NotesList from "./component/NotesList"

function App() {
  const [Notes, setNotes] = useState([]);

  // 🔽 Load notes from Firebase on app start
  useEffect(() => {
    const notesRef = ref(db, "notes");
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedNotes = data ? Object.values(data) : [];
      setNotes(loadedNotes);
    });
  }, []);

  // 🔼 Save note to Firebase
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

  return (
    <div className="container">
      <NotesList Notes={Notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
