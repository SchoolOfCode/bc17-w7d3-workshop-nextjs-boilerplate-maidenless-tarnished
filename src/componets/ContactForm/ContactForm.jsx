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
      case 'ERROR':
        return {
            ...state,
            status: "error"
        };
    case "FORM_SUBMITTING":
        return {
            ...state,
            status: "submitting"
        };
    case "FORM_SUCCESS":
        return {
            ...state,
            status: "success"
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
    dispatch({
      type: "FORM_SUBMITTING"
      
    })
    setTimeout(() => {

      if (!state.data.fullName || !state.data.postcode || !state.data.houseDetails || !state.data.city || !state.data.phoneNumber || !state.data.email)  {
          dispatch({
              type: "ERROR",
          });
          return;
      }
  
      dispatch({
          type: "FORM_SUCCESS"
      });
  
      console.log("Data!!!!!!");
  
  }, 3000);
    

  }

  // added onsubmit handler to the form - allows us to control what happens when the form is submitted
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.header}>Design Booking</h1>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <fieldset className={styles.personalField}>
          <legend>Personal Information</legend>
          
          {/* Full name field */}
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
          
          {/* Postcode field */}
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
          
          {/* House details field */}
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
          
          {/* City field */}
          <label htmlFor="city">
          City
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleChange}
              value={state.data.city}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>
          
          {/*Phone number */}
          <label htmlFor="phoneNumber">
          Phone Number
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
              value={state.data.phoneNumber}
            />
            </label>
            
             {/*Email */}
          <label htmlFor="email">
          Email
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={state.data.email}
            />
            </label>
        </fieldset>
        {state.status === "error" && <p>You Shall Not Pass!!</p>}
        {state.status === "success" ? (
    <p>Form Submitted</p>
) : state.status === "submitting" ? (
    <button type="submit">Submitting...</button>
) : (
    <button type="submit">Submit Form</button>
)}
        {/* <button type="submit">Submit Form</button> */}
      </form>
    </main>
  );
}
