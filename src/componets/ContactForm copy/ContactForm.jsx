"use client"
import { useState } from "react";
import styles from "./ContactForm.module.css"

export default function ContactForm (){

    const [fullName, setFullName] = useState("");
    const [postcode, setPostcode] = useState("");
    const [houseName, setHouseName] = useState("");
    const [cityName, setCityName] = useState("");

    function handleChange(event) {

        if (event.target.name === "fullName") {
            setFullName(event.target.value)
        };
        if (event.target.name === "postcode") {
            setPostcode(event.target.value)
        };
        if (event.target.name === "houseName") {
            setHouseName(event.target.value)
        };
        if (event.target.name === "cityName") {
            setCityName(event.target.value)
        };
    }

    console.log(fullName, postcode, houseName, cityName)

    function handleSubmit(event) { // add this to prevent the form from submitting by default as it usually would.
        event.preventDefault();
        // Now we can do whatever we want with the form data!
        console.log(event)
        
        const fullName = event.target.fullName.value;
        const postcode = event.target.postcode.value;
        const houseName = event.target.houseName.value;
        const cityName = event.target.cityName.value;
    
        if (!fullName || !postcode || !cityName || !houseName) {
            setError("Error - some fields are missing");
            return;
        }
        console.log(fullName, postcode, houseName, cityName)
    }
        const [error, setError] = useState(false);
        
// added onsubmit handler to the form - allows us to control what happens when the form is submitted
    return (
        <main className={styles.wrapper}>
            <h1 className={styles.header}>Design Booking</h1>
            <form className={styles.formBox} onSubmit={handleSubmit}> 
                <fieldset className={styles.personalField}> 
                    <legend>Personal Information</legend>
                    <label htmlFor="fullName">Full Name
                        <input  type="text" 
                                name="fullName" 
                                id="fullName" 
                                onChange={handleChange} 
                                value={fullName}/>
                    </label>
                    <label htmlFor="postcode">Postcode
                        <input  type="text"
                                name="postcode" 
                                id="postcode" 
                                onChange={handleChange} 
                                value={postcode}/>
                             
                    </label>
                    <label htmlFor="houseName">House/ Flat Number and Street Name
                        <input  type="text"
                                name="houseName" 
                                id="houseName" 
                                onChange={handleChange} 
                                value={houseName}/>
                    </label>

                    <label htmlFor="cityName">City
                        <input  type="text"
                                name="cityName" 
                                id="cityName" 
                                onChange={handleChange} 
                                value={cityName}/>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Contact Information</legend>
                    <label><input /></label>
                    <label><input /></label>
                </fieldset>
                {error && <p>You Shall Not Pass!!</p>}
                <button type="submit">Submit Form</button>
            </form>
        </main>
    );
}