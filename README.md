# formik-app

# Overview

The App component is a React functional component designed to create a simple login form using the Formik library for form management and validation.

# Features

- Login form with email and password fields.
- Client-side form validation.
- Submission handling with a simple alert for successful login.

# How It Works

### 1. Validation Function (validate):

- Checks for empty email and password fields.
- Verifies if the email is in a valid format.

### 2. Submit Handler Function (handleSubmit):

- Displays an alert upon successful form submission.

### 3. Form Structure:

- Renders a login form wrapped in the Formik component.
- Form fields (email and password) use the Field component.
- Error messages are displayed using the ErrorMessage component.
- Submit button triggers form submission and disables while submitting.

# Dependencies

- React
- Formik

# License

MIT License
