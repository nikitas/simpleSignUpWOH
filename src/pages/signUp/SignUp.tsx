import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Box, Button, Link, Typography, styled } from "@mui/material";
import * as Yup from "yup";
import { routes } from "@/routes";
import { Link as RouterLink } from "react-router-dom";

interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  passwordRetype: "",
};

const SignUpWrapper = styled(Box)(({ theme }) => ({
  background: "#202020",
  padding: "88px 67px",
  width: "600px",
  height: "766px",
  input: {
    width: "100%",
    height: "30px",
    borderRadius: "4px",
    paddingTop: "6px",
  },
}));

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  passwordRetype: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Password retype is required"),
});

const SignUpForm = () => {
  const handleSubmit = (values: SignUpFormValues) => {
    // Handle form submission here
    console.log(values);
  };

  const validate = (values: SignUpFormValues) => {
    const errors = {} as SignUpFormValues;

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h2" sx={{ mt: "60px", mb: "100px" }}>
          Sign Up to Play
        </Typography>
      </Box>
      <SignUpWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validate={validate}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ pr: 2, width: "100%" }}>
                  <label htmlFor="name">
                    <Typography sx={{ pb: "6px", pt: 1 }} variant="subtitle2">
                      First Name
                    </Typography>
                  </label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name" />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <label htmlFor="lastName">
                    <Typography sx={{ pb: "6px", pt: 1 }} variant="subtitle2">
                      Last Name
                    </Typography>
                  </label>
                  <Field type="text" name="lastName" id="lastName" />
                  <ErrorMessage name="lastName" />
                </Box>
              </Box>
              <div>
                <label htmlFor="email">
                  <Typography sx={{ pb: "6px", pt: 1 }} variant="subtitle2">
                    Email
                  </Typography>
                </label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label htmlFor="email">
                  <Typography sx={{ pb: "6px", pt: 1 }} variant="subtitle2">
                    Username
                  </Typography>
                </label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label htmlFor="password">
                  <Typography sx={{ pb: "6px", pt: 1 }} variant="subtitle2">
                    Password:
                  </Typography>
                </label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>

              <div>
                <label htmlFor="passwordRetype">
                  <Typography sx={{ pb: "6px", pt: 1 }} variant="subtitle2">
                    Retype Password:
                  </Typography>
                </label>
                <Field
                  type="password"
                  id="passwordRetype"
                  name="passwordRetype"
                />
                <ErrorMessage name="passwordRetype" component="div" />
              </div>
              <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
                <Button
                  variant="outlined"
                  type="submit"
                  disabled={isSubmitting}
                >
                  SIGN UP
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <RouterLink to={routes.signin}>
            <Link variant="subtitle2" color={"#D0F83E"}>
              I already have an Haiku account.
            </Link>
          </RouterLink>
        </Box>
      </SignUpWrapper>
    </Box>
  );
};

export default SignUpForm;
