import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionWithSwitch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [backgroundHeight, setBackgroundHeight] = useState("100px");

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setBackgroundHeight(isSwitchOn ? "100px" : "300px");
  };

  return (
    <div>
      <Accordion expanded={isExpanded} onChange={toggleAccordion}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Switch checked={isSwitchOn} onChange={toggleSwitch} />
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          backgroundColor: "orange",
          height: backgroundHeight,
          transition: "height 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          Hello World
        </Typography>
      </div>
    </div>
  );
}

export default AccordionWithSwitch;
