import { useState } from "react";

export const useValidation = () => {
  const [validationValues, setValidationValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    office: "",
  });

  const validateName = (value) => {
    const validName = value.length >=  2;

    if (validationValues.firstName === "" && !validName) {
      setValidationValues((state) => ({
        ...state,
        firstName: "Name should be at least two characters long.",
      }));
    } else if (validationValues.firstName !== "" && validName) {
      setValidationValues((state) => ({
        ...state,
        firstName: "",
      }));
    }
  };

  const validateLastName = (value) => {
    const validLastName = value.length >=  3;

    if (validationValues.lastName === "" && !validLastName) {
      setValidationValues((state) => ({
        ...state,
        lastName: "Last name should be at least three characters long.",
      }));
    } else if (validationValues.lastName !== "" && validLastName) {
      setValidationValues((state) => ({
        ...state,
        lastName: "",
      }));
    }
  };

  const validateEmail = (value) => {
    const validEmail = value.includes(".") && value.includes("@");

    if (validationValues.email === "" && !validEmail) {
      setValidationValues((state) => ({
        ...state,
        email: "This is not a valid email.",
      }));
    } else if (validationValues.email !== "" && validEmail) {
      setValidationValues((state) => ({
        ...state,
        email: "",
      }));
    }
  };

  return {
    validateName,
    validateLastName,
    validateEmail,
    validationValues,
  };
};
