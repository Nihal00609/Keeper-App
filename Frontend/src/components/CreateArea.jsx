import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [noteInput, setNoteInput] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  }
  function handleSubmit(event) {
    props.addNote(noteInput);
    setNoteInput({ title: "", content: "" });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="/" method="post" className="create-note">
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={noteInput.title}
          />
        ) : (
          <NoteAltIcon />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={noteInput.content}
        />
        <Zoom in={isExpanded} >

        <Fab type="submit">
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
