"use client";
import { useState, useReducer } from "react";
import styles from "./ContactForm.module.css";

const initialState = {
  data: {
    fullName: "",
    postcode: "",
    email:"",
    phoneNumber: "",
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
  
  }, 2000);
    

  }

  // added onsubmit handler to the form - allows us to control what happens when the form is submitted
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.header}>Design Booking</h1>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <fieldset className={styles.field}>
          <legend className={styles.legend}>Personal Information:</legend>
          
          {/* Full name field */}
          <label className={styles.inputGroup} htmlFor="fullName">
            Full Name
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={handleChange}
              value={state.data.fullName}
              className={styles.input}
            />
          </label>
          
          {/* Postcode field */}
          <label className={styles.inputGroup} htmlFor="postcode">
            Postcode
            <input
              type="text"
              name="postcode"
              id="postcode"
              onChange={handleChange}
              value={state.data.postcode}
              className={styles.input}
            />
          </label>
          
          {/* House details field */}
          <label className={styles.inputGroup} htmlFor="houseDetails">
          House/ Flat Number and Street Name
            <input
              type="text"
              name="houseDetails"
              id="houseDetails"
              onChange={handleChange}
              value={state.data.houseDetails}
              className={styles.input}
            />
          </label>
          
          {/* City field */}
          <label className={styles.inputGroup} htmlFor="city">
          City
            <input
              type="text"
              name="city"
              id="city"
              onChange={handleChange}
              value={state.data.city}
              className={styles.input}
            />
          </label>
        </fieldset>

        <fieldset className={styles.field}>
          <legend className={styles.legend}>Contact Information:</legend>
          
          {/*Phone number */}
          <label className={styles.inputGroup} htmlFor="phoneNumber">
          Phone Number
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
              value={state.data.phoneNumber}
              className={styles.input}
            />
            </label>
            
             {/*Email */}
          <label className={styles.inputGroup} htmlFor="email">
          Email
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              value={state.data.email}
              className={styles.input}
            />
            </label>
        </fieldset>
        {state.status === "error" && <p className={styles.error}>Please fill in all fields to Submit Form</p>}
        {state.status === "success" ? ( <p className={styles.buttonReplacement}>Form Submitted</p> )
        
        : state.status === "submitting" ? ( <p className={styles.buttonReplacement}>Submitting...</p> )
        
        : ( <button className={styles.button} type="submit">Request Design Consultation</button> )

      }
      </form>
    </main>
  );
}
