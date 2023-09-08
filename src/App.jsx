import React, { useState } from "react";
import Submit from "./Submit.jsx";
import "./App.css";

function App() {
  const [formInputs, setFormInputs] = useState({
    name: "",
    PhoneNumber: "",
    age: "",
    salary: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validateAge = (age) => {
    return !isNaN(age) && age >= 18 && age <= 65;
  };

  const validatePhoneNumber = (phoneNumber) => {
    return !isNaN(phoneNumber) && phoneNumber.toString().length <= 10;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const isAgeValid = validateAge(formInputs.age);
    const isPhoneNumberValid = validatePhoneNumber(formInputs.PhoneNumber);

    if (isAgeValid && isPhoneNumberValid) {
      setSubmissionStatus("Form submitted successfully!");
    } else {
      setSubmissionStatus("Please check your inputs.");
    }
  };

  return (
    <div className="main">
      <div className="form-container">
        <h1>Requesting Loan</h1>
        <hr />
        <form className="Form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formInputs.name}
              onChange={(event) =>
                setFormInputs({ ...formInputs, name: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              value={formInputs.PhoneNumber}
              onChange={(event) =>
                setFormInputs({
                  ...formInputs,
                  PhoneNumber: event.target.value,
                })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              value={formInputs.age}
              onChange={(event) =>
                setFormInputs({ ...formInputs, age: event.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary:</label>
            <select
              id="salary"
              value={formInputs.salary}
              onChange={(event) =>
                setFormInputs({ ...formInputs, salary: event.target.value })
              }
            >
              <option value="S< 500$">Less than 500$</option>
              <option value="500$<S<2000$">Between 500$ and 2000$</option>
              <option value="S>2000$">Above 2000$</option>
            </select>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
        {submissionStatus && (
          <Submit
            submissionStatus={submissionStatus}
            onClose={() => setSubmissionStatus(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
