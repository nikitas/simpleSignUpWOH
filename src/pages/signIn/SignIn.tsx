import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface LogInFormValues {
    email: string;
    password: string;
  }

const initialValues: LogInFormValues = {
  email: "",
  password: ""
};

const SignIn = () => {
  const handleSubmit = (values: LogInFormValues) => {
    // Handle form submission here
    console.log(values);
  };

  const validate = (values: LogInFormValues) => {
    const errors = {} as LogInFormValues;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
