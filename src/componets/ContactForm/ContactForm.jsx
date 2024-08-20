"use client"
import { useState } from "react";
import styles from "./ContactForm.module.css"

export default function ContactForm (){

    const [fullname, setFullName] = useState("");
    const [postcode, setPostcode] = useState("");

    function handleChange(event) {

        if (event.target.name === "fullName") {
            setFullName(event.target.value)
        };
        if (event.target.name === "postcode")
            setPostcode(event.target.value)
    }

    console.log(fullname)

    return (
        <>
            <h1>Design Booking</h1>
            <form>
                <fieldset>
                    <legend>Personal Information</legend>
                    <label htmlFor="fullName">Full Name
                        <input  type="text" 
                                name="fullName" 
                                id="fullName" 
                                onChange={handleChange} 
                                value={fullname}/>
                    </label>
<div>
                    <label htmlFor="postcode">Postcode
                        <input  type="text"
                                name="postcode" 
                                id="postcode" 
                                onChange={handleChange} 
                                value={postcode}/>
                             
                    </label>
                    </div>
                    <label>House/ Flat Number and Street Name
                        <input  type="text"
                                name="fullName" 
                                id="fullName" 
                                onChange={handleChange} 
                                value={fullname}/>
                    </label>

                    <label>
                        <input  type="text"
                                name="fullName" 
                                id="fullName" 
                                onChange={handleChange} 
                                value={fullname}/>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Contact Information</legend>
                    <label><input /></label>
                    <label><input /></label>
                </fieldset>
            </form>
        </>
    );
}