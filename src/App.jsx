import React, { useState, useEffect } from "react";
export default function App() {
  const [name, setName] = useState(0);
  const [mobile, setMobile] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  //let dependency = { name, mobile };// When you define it , you are creating a new object on each render.
  useEffect(() => {
    console.log("UseEffect is called");
  }, [name, mobile]);
  return (
    <div className={`container ${darkMode ? "bgDark" : "bgLight"}`}>
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        id="mobile"
        placeholder="Mobile"
        onChange={(e) => setMobile(e.target.value)}
      />
      <div className="darkmode">
        <input
          type="checkbox"
          id="darkMode"
          onChange={() => setDarkMode(!darkMode)}
        />
        Enable dark mode
      </div>
    </div>
  );
}
