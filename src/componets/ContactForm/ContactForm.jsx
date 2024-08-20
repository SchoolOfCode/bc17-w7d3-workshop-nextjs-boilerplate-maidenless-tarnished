import styles from "src\componets\ContactForm\ContactForm.module.css"

export default function ContactForm (){
    return (
        <>
            <h1>Design Booking</h1>
            <form>
                <fieldset>
                    <legend>Personal Information</legend>
                    <label htmlFor="fullName">Full Name
                        <input type="text" name="fullName" id="fullName"/>
                    </label>

                    <label>Postcode
                        <input />
                    </label>
                    <label>House/ Flat Number and Street Name
                        <input />
                    </label>

                    <label>
                        <input />
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