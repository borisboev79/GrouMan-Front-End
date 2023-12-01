import { useState } from "react";

export const useValidation = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
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
      setButtonToggle(true);

    } else if (validationValues.firstName !== "" && validName) {
      setValidationValues((state) => ({
        ...state,
        firstName: "",
      }));
      setButtonToggle(false);
    }
  };

  const validateLastName = (value) => {
    const validLastName = value.length >=  3;

    if (validationValues.lastName === "" && !validLastName) {
      setValidationValues((state) => ({
        ...state,
        lastName: "Last name should be at least three characters long.",
      }));
      setButtonToggle(true);
    } else if (validationValues.lastName !== "" && validLastName) {
      setValidationValues((state) => ({
        ...state,
        lastName: "",
      }));
      setButtonToggle(false);
    }
  };

  const validateEmail = (value) => {
    const validEmail = value.includes(".") && value.includes("@");

    if (validationValues.email === "" && !validEmail) {
      setValidationValues((state) => ({
        ...state,
        email: "This is not a valid email.",
      }));
      setButtonToggle(true);
    } else if (validationValues.email !== "" && validEmail) {
      setValidationValues((state) => ({
        ...state,
        email: "",
      }));
      setButtonToggle(false);
    }
  };

  return {
    validateName,
    validateLastName,
    validateEmail,
    validationValues,
    buttonToggle,
  };
};
