import React, { useState } from "react";
import { memo } from "react";

function TodoComp({ note, setNote, notes, setNotes, handleNotes }) {
  console.log("Child Rendering");

  function handleNotesInp(e) {
    setNote(e.target.value);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={note} onChange={handleNotesInp} />
      <button onClick={handleNotes}>Add</button>
      {notes.map((currnote, index) => {
        return <p key={index}>{currnote}</p>;
      })}
    </div>
  );
}

export default memo(TodoComp);
