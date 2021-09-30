import React, { useState } from "react";
import "./index.css";
import Input from "./Input";

import TextField from "@mui/material/TextField";

const Title = () => {
  return (
    <div className="title">
      <h1>Registration Form</h1>
    </div>
  );
};

const Step = ({ id, step, active, children }) => {
  return (
    <div id={id} style={{ display: step === active ? "block" : "none" }}>
      {children}
    </div>
  );
};

function App() {
  const [step, setStep] = React.useState(0);

  // Form values
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");

  // Errors
  const [dobError, setDobError] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");

  // Move to next step
  const next = () => setStep(step + 1);

  // Move to prev step
  const prev = () => setStep(step - 1);

  const changeFirstName = (event) => {
    const value = event.target.value;

    // First name validation
    let error = "";
    if (value.length < 4) {
      error = "Name too short";
    } else if (value.length > 12) {
      error = "Name too long";
    } else {
      error = "";
    }

    setFirstNameError(error);
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

    // Date of birth validation
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
      <Title />
      <div className="container">
        <Step step={0} active={step}>
          <h2>Click Start to begin</h2>
          <TextField />
          <button onClick={next}>Start</button>
        </Step>
        <Step step={1} active={step}>
          <Input
            label="First Name"
            value={firstName}
            error={firstNameError}
            onChange={changeFirstName}
          />
          <Input label="Last Name" value={lastName} onChange={changeLastName} />
          <Input
            label="Phone Number"
            value={phoneNumber}
            onChange={changePhoneNumber}
          />

          <br />
          <button
            disabled={!firstName || !lastName || !phoneNumber || firstNameError}
            onClick={next}
          >
            Next
          </button>
          <br />
        </Step>
        <Step step={2} active={step}>
          <Input label="Email" value={email} onChange={changeEmail} />
          <Input
            type="date"
            label="Date of Birth"
            value={dob}
            onChange={changeDob}
            error={dobError}
          />

          <br />
          <button onClick={prev}>Previous</button>
          <button disabled={!email || !dob || dobError} onClick={next}>
            Next
          </button>
        </Step>
        <Step id="confirmation" step={3} active={step}>
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
        </Step>
        <Step step={4} active={step}>
          <h2>Thank you for completing the form</h2>
        </Step>
      </div>
    </div>
  );
}

export default App;
