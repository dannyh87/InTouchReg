import React, { useState } from "react";
import "./index.css";

function App() {
  const [step, setStep] = React.useState(0);

  const [firstName, setFirstName] = React.useState("");

  const [lastName, setLastName] = React.useState("");

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [email, setEmail] = React.useState("");

  const [dob, setDob] = React.useState("");
  const [dobError, setDobError] = React.useState("");

  const next = () => {
    setStep(step + 1);
    console.log("prev", step);
  };

  const prev = () => {
    setStep(step - 1);
    console.log("prev", step);
  };

  const changeFirstName = (event) => {
    const value = event.target.value;
    setFirstName(value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const changePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changeDob = (event) => {
    const value = event.target.value;
    const dobDate = new Date(value);

    const diffYears = (Date.now() - dobDate) / 1000 / 60 / 60 / 24 / 365;

    if (diffYears < 18) {
      setDobError("You are too young!! Sorry");
    } else {
      setDobError("");
    }

    setDob(value);
  };

  return (
    <div>
      <div class="title">
        <h1>Registration Form</h1>
      </div>
      <div class="container">
        <div style={{ display: step === 0 ? "block" : "none" }}>
          <h2>Click Start to begin</h2>
          <button onClick={next}>Start</button>
        </div>

        <div style={{ display: step === 1 ? "block" : "none" }}>
          <label>First Name</label>
          <input onChange={changeFirstName} value={firstName} />
          <br />
          <label>Last Name</label>
          <input onChange={changeLastName} value={lastName} />
          <br />
          <label>Phone Number</label>
          <input onChange={changePhoneNumber} value={phoneNumber} />
          <br />
          <button disabled={!firstName || !lastName || !phoneNumber} onClick={next}>Next</button>
          <br />
        </div>

        <div style={{ display: step === 2 ? "block" : "none" }}>
          <label>Email</label>
          <input onChange={changeEmail} value={email} />
          <br />
          <label>Date of Birth</label>
          <input type="date" onChange={changeDob} value={dob} />
          {dobError && <p>{dobError}</p>}
          <br />
          <button onClick={prev}>Previous</button>
          <button disabled={!email || !dob || dobError} onClick={next}>
            Next
          </button>
        </div>

        <div id="confirmation" style={{ display: step === 3 ? "block" : "none" }}>
          <p>
            <span>First Name: </span>
            {firstName}
          </p>
          <p>
            <span>Last Name: </span>
            {lastName}
          </p>
          <p>
            <span>Phone Number : </span>
            {phoneNumber}
          </p>
          <p>
            <span>Email : </span>
            {email}
          </p>
          <p>
            <span>Date of Birth : </span>
            {dob}
          </p>
          <button onClick={prev}>Previous</button>
          <button onClick={next}>Submit</button>
        </div>

        <div style={{ display: step === 4 ? "block" : "none" }}>
          <h2>Thank you for completing the form</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
