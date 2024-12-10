import React, { useCallback, useMemo, useState } from "react";
import TodoComp from "./TodoComp";

function App() {
  const [count, setCount] = useState(0);

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const increment = () => {
    setCount(count + 1);
  };
  const handleNotes = useCallback(() => {
    if (note.trim != "") {
      setNotes((prev) => [...prev, note]);
      setNote("");
    }
  }, [note]);

  return (
    <div>
      <TodoComp
        note={note}
        notes={notes}
        setNote={setNote}
        setNotes={setNotes}
        handleNotes={handleNotes}
      />
      <br />
      <hr />
      <br />
      <h1>Count : {count}</h1>
      <button onClick={increment}> Increment</button>
    </div>
  );
}

export default App;
