import React from "react";
import AccordionWithArrow from "./AccordionWithArrow";
import AccordionWithSwitch from "./AccordionWithSwitch";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div style={{ width: "900px" }}>
        <AccordionWithArrow />
        <AccordionWithSwitch />
      </div>
    </div>
  );
}

export default App;
