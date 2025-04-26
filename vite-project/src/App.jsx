import { nanoid } from "@reduxjs/toolkit";
import "./App.css";
import NotesList from "./component/NotesList";
import React, { useState } from "react";
import AddNote from "./component/AddNote";
import { account, ID } from './../lib/appwrite';

function App() {
  const [Notes, setNotes] = useState([
    { id: nanoid(), text: "hello and welcome to school" , date: "12/12/12" },
    { id: nanoid(), text: "hello and welcome to school" , date: "12/12/12" },
    { id: nanoid(), text: "hello and welcome to school" , date: "12/12/12" },
    { id: nanoid(), text: "hello and welcome to school" , date: "12/12/12" },
  ]);
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
        id: nanoid(),
        text: text,
        date: date.toLocaleDateString(),
        };
        const newNotes = [...Notes, newNote];
        setNotes(newNotes);
        console.log(text);
        
    };
  return (
    <>
      <div className="container">
        <NotesList Notes={Notes} handleAddNote={addNote} />
        
      </div>
    </>
  );
}

export default App;
