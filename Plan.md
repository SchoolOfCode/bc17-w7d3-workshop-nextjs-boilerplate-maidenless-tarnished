# Step-by-Step Plan to Improve the "Design Booking" Page

## Introduction

Great job so far! Mike and Mandy are thrilled with the new "Design Booking" page, which has significantly improved the call center's workload. However, we have some new challenges to tackle. This plan will guide you through making the form more user-friendly and improving error handling using `useReducer`.

## Objectives

- **Show submitting state:** When the form is submitting, indicate that to the user.
- **Disable resubmission:** Prevent the user from submitting the form again while it’s already submitting.
- **Display success message:** Replace the form with a success message if validation passes.
- **Handle errors effectively:** Show specific error messages under each field that fails validation.
- **Validate user input:** Ensure valid phone numbers, email addresses, and restrict bookings to postcodes in England, Wales, and Scotland using a third-party API.

## Step 1: Understanding `useReducer`

### Why `useReducer`?
- **Manage Complexity:** As our form grows more complex, managing state with `useReducer` will help keep everything organized.
- **Centralize State Logic:** `useReducer` allows us to define all the state changes in one place, making it easier to handle various actions like loading, success, and error states.

### Action Items
- **Research `useReducer`:** Understand how `useReducer` works and how it differs from `useState`.
- **Review Examples:** Look at examples of simple `useReducer` implementations to grasp the basics.

**Now check it works** by explaining `useReducer` to someone else or writing down the concept in your own words.

## Step 2: Move to `useReducer` Without Adding Features

### Why This Step?
- **Focus on Transition:** Moving your existing code to `useReducer` first without adding new features will help you understand how it works in the context of your form.
- **Avoid Complexity:** Adding features while transitioning can lead to confusion and errors.

### Action Items
1. **Backup Your Component:**
   - Make a copy of your current form component as a backup. This ensures you have something to refer back to if needed.
   
2. **Simplify the Form:**
   - Remove all fields except for one (e.g., "full name"). Simplify the form by removing all HTML, state, and logic related to other fields. This will make the transition easier.
   - Ensure that this single field works as expected: you should be able to type in it, trigger the `onChange` handler, and update the state.

3. **Implement `useReducer`:**
   - Replace `useState` with `useReducer` in this simplified form.
   - Define the initial state and reducer function.
   - Ensure the form still works with `useReducer` by testing if the single field updates correctly.

**Now check it works** by confirming that the form behaves exactly as it did before, but using `useReducer`.

## Step 3: Add the Submitting State

### Why This Step?
- **User Feedback:** It's important to show users that their form is being processed, so they know something is happening.
- **Prevent Multiple Submissions:** Users shouldn't be able to submit the form again while it's still processing.

### Action Items
1. **Add Loading State:**
   - Add a new piece of state in your `useReducer` to represent the loading state (e.g., `isSubmitting`).
   - Modify the `handleSubmit` function to dispatch an action that sets `isSubmitting` to `true` when the form is submitted.

2. **Simulate Submission Delay:**
   - Use `setTimeout` to simulate a delay (e.g., 2 seconds) before the form submits successfully.
   - After the delay, dispatch another action to indicate the form submission was successful and update the state accordingly.

3. **Disable Resubmission:**
   - While `isSubmitting` is `true`, disable the submit button to prevent the user from submitting the form again.

**Now check it works** by submitting the form and verifying that the loading state is shown and resubmission is prevented.

## Step 4: Handle Success and Error States

### Why This Step?
- **Clear Communication:** Users need to know when their form has been successfully submitted or if there were errors.
- **Specific Error Messages:** Displaying specific error messages helps users understand exactly what they need to fix.

### Action Items
1. **Handle Success State:**
   - Add a success state in your reducer to track when the form has been submitted successfully.
   - When the form submits successfully, hide the form and display a success message.

2. **Handle Error State:**
   - Update your state to include error messages for each field.
   - Modify the form to show these error messages under the corresponding fields.

3. **Specific Error Messages:**
   - Ensure that the error messages are specific to the validation rules (e.g., "Not a valid phone number", "No bookings outside of England, Wales, or Scotland").

**Now check it works** by submitting both valid and invalid data and confirming that the success message or appropriate error messages are displayed.

## Step 5: Implement Postcode Validation with API

### Why This Step?
- **Geographic Validation:** We need to ensure that we only accept bookings for postcodes within England, Wales, and Scotland.
- **Reliable Data:** Using a third-party API ensures that we validate postcodes accurately.

### Action Items
1. **Integrate Postcode API:**
   - Use the `https://postcodes.io/` API to validate the postcode.
   - On form submission, send a request to the API with the user’s postcode.

2. **Validate Country:**
   - Check if the returned country is England, Wales, or Scotland.
   - If the country is invalid, update the state to show an error message under the postcode field.

3. **Handle API Errors:**
   - Ensure your form can handle cases where the API is unreachable or returns an unexpected response.

**Now check it works** by testing with various postcodes and confirming that only valid ones are accepted.

## Conclusion

You've now made the form much more user-friendly and robust. You've transitioned to `useReducer`, implemented loading and error states, and integrated an API for postcode validation. Great job! 🎉

**Final Step:** Review your code and make sure everything works as expected. If you have time, add a funny but professional success message to make the user experience even better.
