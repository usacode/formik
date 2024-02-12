import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function App() {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Field required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Username should be an email';
    }
    if (!values.password) {
      errors.password = 'Field required';
    }
    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert('Login Successful');
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="emailField">Email</label>
              <Field type="email" name="email" id="emailField" />
              <ErrorMessage name="email" component="div" id="emailError" />
            </div>
            <div>
              <label htmlFor="pswField">Password</label>
              <Field type="password" name="password" id="pswField" />
              <ErrorMessage name="password" component="div" id="pswError" />
            </div>
            <button
              className="submit-button"
              type="submit"
              id="submitBtn"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default App;
