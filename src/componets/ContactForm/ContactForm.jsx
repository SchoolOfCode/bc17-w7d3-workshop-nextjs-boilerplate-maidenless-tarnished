"use client";
import { useState, useReducer } from "react";
import styles from "./ContactForm.module.css";

const initialState = {
  data: {
    fullName: "",
    postcode: "",
    houseDetails: "",
    city: "",
  },
  status: "editing",
};

function reducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGED":
      console.log("action recieved");
      return {
        ...state,
        data: {
            ...state.data,
        [action.payload.fieldName]: action.payload.fieldValue,
        },
      };
    default:
      return state;
  }
}

//1. dispatch an action to the reducer - should tell the reducer a form field has changed and here is the new value

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  function handleChange(event) {
      dispatch({
        type: "FIELD_CHANGED",
        payload: {
          fieldName: event.target.name,
          fieldValue: event.target.value,
        },
      });
    }

  function handleSubmit(event) {
    // add this to prevent the form from submitting by default as it usually would.
    event.preventDefault();
    // Now we can do whatever we want with the form data!
    console.log(event);

    const fullName = event.target.fullName.value;

    if (!fullName) {
      // setError("Error - some fields are missing");
      return;
    }
  }

  // added onsubmit handler to the form - allows us to control what happens when the form is submitted
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.header}>Design Booking</h1>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <fieldset className={styles.personalField}>
          <legend>Personal Information</legend>
          <label htmlFor="fullName">
            Full Name
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              value={state.data.fullName}
            />
          </label>
          <label htmlFor="postcode">
            Postcode
            <input
              type="text"
              name="postcode"
              id="postcode"
              onChange={handleChange}
              value={state.data.postcode}
            />
          </label>
          <label htmlFor="houseDetails">
          House/ Flat Number and Street Name
            <input
              type="text"
              name="houseDetails"
              id="houseDetails"
              onChange={handleChange}
              value={state.data.houseDetails}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>
          <label>
            <input />
          </label>
          <label>
            <input />
          </label>
        </fieldset>
        {state.error && <p>You Shall Not Pass!!</p>}
        <button type="submit">Submit Form</button>
      </form>
    </main>
  );
}

// finish the input fields 
// update the handleChange dispatches
// update initial state
// get one error working
// test each step as we go along