import React, { useEffect } from "react";
import "./Submit.css";

function Submit({ submissionStatus, onClose }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".modal-content")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        <p
          className={
            submissionStatus.includes("successfully")
              ? "success-message"
              : "error-message"
          }
        >
          {submissionStatus}
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Submit;
