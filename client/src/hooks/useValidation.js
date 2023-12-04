import { useState } from "react";

export const useValidation = (values) => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [validationValues, setValidationValues] = useState(values);

  const validate = (key, value, value2 = "default") => {
    let isValid = "";
    let errorMessage = "";
    let propertyValue = (obj, key) => obj[key];

    switch (key) {
      case "firstName":
        isValid = value.length >= 2;
        errorMessage = "Name should be at least two characters long.";
        break;
      case "lastName":
        isValid = value.length >= 3;
        errorMessage = "Last name should be at least three characters long.";
        break;
        case "fullName":
          isValid = value.length >= 6;
          errorMessage = "Full Name should be at least 6 characters long.";
          break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        errorMessage = "This is not a valid email.";
        break;
      case "username":
        isValid = value.length >= 5;
        errorMessage = "Username should be at least five characters long.";
        break;
      case "password":
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        isValid = value.length >= 8 && regex.test(value);
        errorMessage =
          "A valid password is at least 8 characters long and should contain a lowercase, an uppercase and a digit.";
        break;
      case "confirmPassword":
        isValid = value === value2;
        errorMessage = "Passwords don't match.";
        break;
      case "office":
        isValid = value != "default";
        errorMessage = "Selecting an office is mandatory";
        break;
    }

    if (propertyValue(validationValues, key) === "" && !isValid) {
      setValidationValues((state) => ({
        ...state,
        [key]: errorMessage,
      }));
      setButtonToggle(true);
    } else if (propertyValue(validationValues, key) !== "" && isValid) {
      setValidationValues((state) => ({
        ...state,
        [key]: "",
      }));
      setButtonToggle(false);
    }
  };

  return {
    validationValues,
    buttonToggle,
    validate,
    setValidationValues,
  };
};
