import React from "react";
import { useState } from "react";

import "./bookingForm.css";

const BookingForm = () => {
  const [formOutput, setFormOuput] = useState(null);
  const [nameInput, setnameInput] = useState(null);
  const [emailInput, setemailInput] = useState(null);
  const [radioValue, setRadioValue] = useState(null);

  const submitButtonPressed = (e) => {
    e.preventDefault();
    if (emailInput == null || nameInput == null) {
      setFormOuput(
        <div className="Error">
          <p>Error: You must enter all form field data.</p>
        </div>
      );
    } else {
      if (radioValue == "Yes")
        setFormOuput(
          <div className="noError">
            <p>Class Booked! Confirmation sent to {emailInput}</p>
          </div>
        );
      if (radioValue == "No")
        setFormOuput(
          <div className="noError">
            <p>Thank You!</p>
          </div>
        );
    }
  };

  const emailChanged = (evt) => {
    const email = evt.target.value;

    setemailInput(email);
  };

  const nameChanged = (evt) => {
    const name = evt.target.value;

    setnameInput(name);
  };

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <main>
      <form>
        <div>
          <p>Enter your information to book the class</p>
          <input
            placeholder="Enter your name"
            onChange={nameChanged}
            className="inputBox"
          ></input>
          <input
            placeholder="Enter email address"
            onChange={emailChanged}
            className="inputBox"
          ></input>
          <p>Would you like to receive updates about your class?</p>

          <div>
            <input
              type="radio"
              value="Yes"
              name="emailRadio"
              onChange={handleChange}
            />{" "}
            Yes
            <input
              type="radio"
              value="No"
              name="emailRadio"
              onChange={handleChange}
            />{" "}
            No
          </div>
          <p>
            <b>
              By pressing submit, you are agreeing to our Terms and Conditions:
            </b>
            Learners are required to abide by the Code of Conduct and Terms of
            Service. Disruptive behaviour is not tolerated and learners who do
            not comply will be removed from the class. For virtual classes,
            learners must provide their own computers, speakers, and
            microphones. In person classes are held at our location at 1 Main
            Street. All class bookings are final, and no refunds or exchanges
            will be issued.
          </p>
          <button onClick={submitButtonPressed} className="submitButton">
            Submit
          </button>
          <p>{formOutput}</p>
        </div>
      </form>
    </main>
  );
};

export default BookingForm;
