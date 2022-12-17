import React, { useState } from "react";
import firebase from "../firebase";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate the form data and sign up the user
    const { email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // User registered successfully
        console.log("User registered successfully");
      })
      .catch((error: { message: React.SetStateAction<string | null>; }) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label htmlFor="email">Email:</label>
      <input type="email"></input>
    </form>
  );
};
