import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    phone: "",
    blogName: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    phone: "",
  });

  const [isDisabled, setIsDisabled] = React.useState(true);

  const validateEmail = (email: any) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone: string) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return re.test(phone);
  };

  const handleBlur = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    let error = "";
    if (name === "email") {
      error = validateEmail(value) ? "" : "Invalid email address";
    } else if (name === "phone") {
      error = validatePhone(value) ? "" : "Invalid phone number";
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = () => {
    // call firebase;
  };

  React.useEffect(() => {
    const formIsValid =
      Object.values(errors).every((error) => error === "") &&
      values.email !== "" &&
      values.password !== "" &&
      values.phone !== "" &&
      values.blogName !== "";
    setIsDisabled(!formIsValid);
  }, [errors, values]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email !== ""}
        helperText={errors.email}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.phone !== ""}
        helperText={errors.phone}
      />
      <TextField
        label="Blog Name"
        name="blogName"
        value={values.blogName}
        onChange={handleChange}
      />
      <Button type="submit" disabled={isDisabled}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
