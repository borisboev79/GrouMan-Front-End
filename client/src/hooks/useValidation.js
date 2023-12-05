import { useState } from "react";

export const useValidation = (values) => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const [validationValues, setValidationValues] = useState(values);

  const validate = (key, value, value2 = "default") => {
    let isValid = "";
    let errorMessage = "";
    let propertyValue = (obj, key) => obj[key];

    switch (key) {
      case "groupName":
        isValid = value.length >= 20;
        errorMessage = "Name should be at least 20 character long.";
        break;
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
      case "ship":
        isValid = value.length >= 7;
        errorMessage = "Ship name should be at least 7 characters long.";
        break;
      case "itinerary":
        isValid = value.length >= 20;
        errorMessage = "Itinerary should be at least 20 character long.";
        break;
      case "imageUrl":
        isValid = value.length > 0;
        errorMessage = "Image URL cannot be empty.";
        break;
      case "duration":
        isValid = Number(value) >= 1;
        errorMessage = "Duration must be at least 1 day.";
        break;
      case "capacity":
        isValid = Number(value) >= 20;
        errorMessage = "Groups start at 10 cabins.";
        break;
      case "insidePrice":
        isValid = Number(value) > 0;
        errorMessage = "Price must be positive number.";
        break;
      case "outsidePrice":
        isValid = Number(value) > 0;
        errorMessage = "Price must be positive number.";
        break;
      case "balconyPrice":
        isValid = Number(value) > 0;
        errorMessage = "Price must be positive number.";
        break;
      case "egn":
        const tenDigitRegex = /^\d{10}$/;
        isValid = tenDigitRegex.test(value);
        errorMessage = "An EGN should hold exactly ten digits.";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        errorMessage = "This is not a valid email.";
        break;
      case "phone":
        const phoneRegex = /^\+\d{10,}$/;
        isValid = phoneRegex.test(value);
        errorMessage =
          "Phone should start with +, followed by country code and number.";
        break;
      case "birthDate":
        const inputDate = new Date(value);
        const currentDate = new Date();
        const sixMonthsAgo = new Date(currentDate);
        sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

        isValid = inputDate <= sixMonthsAgo;
        errorMessage = "Guest must be at least 6-months old.";
        break;
      case "startDate":
        const departureDate = new Date(value);
        const dateNow = new Date();
        const tomorrow = new Date(dateNow);
        tomorrow.setDate(dateNow.getDate() + 1);

        isValid = departureDate >= tomorrow;
        errorMessage = "Departure date should be in the future";
        break;
      case "endDate":
        const startDate = new Date(value);
        const endDate = new Date(value2);
        const returnDate = new Date(endDate);
        returnDate.setDate(startDate.getDate() + 1);

        isValid = returnDate <= endDate;
        errorMessage = "Return should be after departure";
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
        isValid = value !== "default";
        errorMessage = "Selecting an office is mandatory";
        break;
      case "cabin":
        isValid = value !== "default" && value !== "";
        errorMessage = "Selecting cabin type is mandatory";
        break;
      case "transportation":
        isValid = value !== "default";
        errorMessage = "Means of transport is mandatory";
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
