import React, { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import "./notesList.css";

function Note({ firebaseId, text, date, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleSave = () => {
    if (editedText.trim().length > 0) {
      handleEdit(firebaseId, editedText); 
      setIsEditing(false);
    } else {
      alert("Please enter some text before saving.");
    }
  };

  const handleCancel = () => {
    setEditedText(text);
    setIsEditing(false); 
  };

  return (
    <div className="note">
      {isEditing ? (
        <textarea
          rows="8"
          cols="10"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="edit-textarea"
        />
      ) : (
        <span>{text}</span>
      )}

      <div className="note-footer">
        <small>{date}</small>

        {isEditing ? (
          <div style={{ marginLeft: "10px", display: "flex", gap: "8px" }}>
            <button
              className="save-btn"
              onClick={handleSave}
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
              }}
            >
              Save
            </button>

            <button
              className="cancel-btn"
              onClick={handleCancel}
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "gray",
                color: "white",
                border: "none",
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <MdEdit
            size="20"
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={() => setIsEditing(true)}
          />
        )}

        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => handleDelete(firebaseId)}
        />
      </div>
    </div>
  );
}

export default Note;
