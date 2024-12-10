import React, { useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
    document.body.className = theme ? "dark-mode" : "light-mode";
  };
  return (
    <>
      <h1>Theme</h1>
      <button onClick={handleTheme}>
        {theme ? <h2>Dark 🌙</h2> : <h2>Light ☀️</h2>}
      </button>
    </>
  );
}

export default Theme;
