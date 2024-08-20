This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



PLAN

1. Understand the Requirements
Objective: Replace the phone number on the homepage with a "Book Consultation" button that redirects to a new "Design Booking" page. On this page, users can fill out a form that is validated on submission. If valid, console log the form data.

Deliverables:
-Replace phone number with a "Book Consultation" button.
-Create a new "Design Booking" page.
-Create a form based on the design provided.
-Implement form validation and console logging of the form data.

2. Set Up Your Environment
Ensure your development environment is set up with the existing Next.js application.
Download the design assets from the provided Google Drive link and review them to understand the visual structure and form requirements.

3. Create the "Book Consultation" Button
Step 3.1: Locate the homepage file (usually index.js or home.js in the pages directory).
Step 3.2: Identify the section where the phone number is displayed.
Step 3.3: Replace the phone number with a "Book Consultation" button.
Step 3.4: Add a click handler to the button that navigates the user to the "/booking" page.jsx


4. Create the "Design Booking" Page
Step 4.1: In the pages directory, create a new file called booking.js.
Step 4.2: Create a basic page structure.jsx

5. Create the Contact Form Component
Step 5.1: In the components directory, create a new file called ContactForm.js.
Step 5.2: Set up the basic JSX structure for the form using the designs provided. Group related fields using fieldset.jsx


6. Implement State Management for Form Fields
Step 6.1: Use React's useState to manage form field values.
Step 6.2: Create a state variable and handler function for each form field.
Step 6.3: Use a generic handleChange function to update state for all fields.jsx


7. Handle Form Submission
Step 7.1: Add an onSubmit handler to the form.
Step 7.2: Prevent the default form submission behavior.
Step 7.3: Validate that all fields are filled out before proceeding.
Step 7.4: If all fields are valid, console log the form data.
jsx


8. Style the Form
Step 8.1: Apply CSS to style the form according to the design.
Step 8.2: Implement error styles (e.g., red error messages) for validation errors.

9. Test the Functionality
Step 9.1: Test the "Book Consultation" button on the homepage to ensure it navigates to the "Design Booking" page.
Step 9.2: Fill out the form and test if the state is updated correctly.
Step 9.3: Test form submission to see if validation works and form data is logged correctly.
Step 9.4: Test the error message display when fields are empty.

10. Final Review and Refactoring
Step 10.1: Review the code for any improvements or refactoring opportunities.
Step 10.2: Ensure the application works smoothly on mobile devices as per the requirement.
This plan should help you implement the project step by step. Make sure to test each step before moving on to the next to ensure that everything is working as expected.



Eric-0805: within the readme, find the PLAN and reformat it properly 

GitHub Copilot: Please select the section of the README file that contains the PLAN, and I will help you reformat it properly.

Eric-0805: PLAN

Understand the Requirements Objective: Replace the phone number on the homepage with a "Book Consultation" button that redirects to a new "Design Booking" page. On this page, users can fill out a form that is validated on submission. If valid, console log the form data.
Deliverables: -Replace phone number with a "Book Consultation" button. -Create a new "Design Booking" page. -Create a form based on the design provided. -Implement form validation and console logging of the form data.

Set Up Your Environment Ensure your development environment is set up with the existing Next.js application. Download the design assets from the provided Google Drive link and review them to understand the visual structure and form requirements.

Create the "Book Consultation" Button Step 3.1: Locate the homepage file (usually index.js or home.js in the pages directory). Step 3.2: Identify the section where the phone number is displayed. Step 3.3: Replace the phone number with a "Book Consultation" button. Step 3.4: Add a click handler to the button that navigates the user to the "/booking" page.jsx

Create the "Design Booking" Page Step 4.1: In the pages directory, create a new file called booking.js. Step 4.2: Create a basic page structure.jsx

Create the Contact Form Component Step 5.1: In the components directory, create a new file called ContactForm.js. Step 5.2: Set up the basic JSX structure for the form using the designs provided. Group related fields using fieldset.jsx

Implement State Management for Form Fields Step 6.1: Use React's useState to manage form field values. Step 6.2: Create a state variable and handler function for each form field. Step 6.3: Use a generic handleChange function to update state for all fields.jsx

Handle Form Submission Step 7.1: Add an onSubmit handler to the form. Step 7.2: Prevent the default form submission behavior. Step 7.3: Validate that all fields are filled out before proceeding. Step 7.4: If all fields are valid, console log the form data. jsx

Style the Form Step 8.1: Apply CSS to style the form according to the design. Step 8.2: Implement error styles (e.g., red error messages) for validation errors.

Test the Functionality Step 9.1: Test the "Book Consultation" button on the homepage to ensure it navigates to the "Design Booking" page. Step 9.2: Fill out the form and test if the state is updated correctly. Step 9.3: Test form submission to see if validation works and form data is logged correctly. Step 9.4: Test the error message display when fields are empty.

Final Review and Refactoring Step 10.1: Review the code for any improvements or refactoring opportunities. Step 10.2: Ensure the application works smoothly on mobile devices as per the requirement. This plan should help you implement the project step by step. Make sure to test each step before moving on to the next to ensure that everything is working as expected.

 ### PLAN

#### Understand the Requirements
**Objective:** Replace the phone number on the homepage with a "Book Consultation" button that redirects to a new "Design Booking" page. On this page, users can fill out a form that is validated on submission. If valid, console log the form data.

**Deliverables:**
- Replace phone number with a "Book Consultation" button.
- Create a new "Design Booking" page.
- Create a form based on the design provided.
- Implement form validation and console logging of the form data.

#### Set Up Your Environment
Ensure your development environment is set up with the existing Next.js application. Download the design assets from the provided Google Drive link and review them to understand the visual structure and form requirements.

#### Create the "Book Consultation" Button
1. Locate the homepage file (usually `index.js` or `home.js` in the `pages` directory).
2. Identify the section where the phone number is displayed.
3. Replace the phone number with a "Book Consultation" button.
4. Add a click handler to the button that navigates the user to the `/booking` page.

#### Create the "Design Booking" Page
1. In the `pages` directory, create a new file called `booking.js`.
2. Create a basic page structure.

#### Create the Contact Form Component
1. In the `components` directory, create a new file called `ContactForm.js`.
2. Set up the basic JSX structure for the form using the designs provided. Group related fields using `fieldset`.

#### Implement State Management for Form Fields
1. Use React's `useState` to manage form field values.
2. Create a state variable and handler function for each form field.
3. Use a generic `handleChange` function to update state for all fields.

#### Handle Form Submission
1. Add an `onSubmit` handler to the form.
2. Prevent the default form submission behavior.
3. Validate that all fields are filled out before proceeding.
4. If all fields are valid, console log the form data.

#### Style the Form
1. Apply CSS to style the form according to the design.
2. Implement error styles (e.g., red error messages) for validation errors.

#### Test the Functionality
1. Test the "Book Consultation" button on the homepage to ensure it navigates to the "Design Booking" page.
2. Fill out the form and test if the state is updated correctly.
3. Test form submission to see if validation works and form data is logged correctly.
4. Test the error message display when fields are empty.

#### Final Review and Refactoring
1. Review the code for any improvements or refactoring opportunities.
2. Ensure the application works smoothly on mobile devices as per the requirement.

This plan should help you implement the project step by step. Make sure to test each step before moving on to the next to ensure that everything is working as expected.