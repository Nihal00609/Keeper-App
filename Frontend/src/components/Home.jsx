import React, { useEffect, useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";

function Home() {
    const host = "http://localhost:5000"

    const [notes, setNotes] = useState([]);
  
    async function getNote() {
      //API Call
      const url = `${host}/`
      const response = await fetch(url, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      const json = await response.json();
      // GET Note 
    //   console.log(json);
      setNotes(json);
    }
    useEffect(() => {
      getNote()
    }, [])
  
  
    async function addNote(noteInput) {
      //API Call
      const url = `${host}/add`
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noteInput),
      });
      const json = response.json(); 
      // Add Note 
      setNotes((prevNotes) => {
        return [...prevNotes, noteInput];
      });
    }
  
    async function deleteNote(id) {
      //API Call
      const url = `${host}/delete/${id}`
      const response = await fetch(url, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(), 
      });
      const json = response.json(); 
      // Delete Note 
      console.log("Note Deleted with id:"+id);
      setNotes((prevNotes) => {
        return prevNotes.filter((item) => {
          return item._id !== id;
        });
      });
    }

  return (
    <div>
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={note._id}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}

export default Home;
