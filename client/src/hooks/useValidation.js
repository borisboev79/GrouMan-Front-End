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


  //console.log(validationValues);

  // const changeHandler = (e) => {
  //   let value = "";

  //   switch (e.target.type) {
  //     case "number":
  //       value = Number(e.target.value);
  //       break;
  //     case "checkbox":
  //       value = e.target.checked;
  //       break;
  //     case "date":
  //       value = Date(e.target.value);
  //     default:
  //       value = e.target.value;
  //       break;
  //   }

  //   setFormValues((state) => ({
  //     ...state,
  //     [e.target.name]: value,
  //   }));
  // };

  const validateEmail = () => {
    if (!validationValues.email.includes(".") || !validationValues.email.includes("@")) {
      console.log("2 " + "vliza s email");
      
    
    setValidationValues((state) => ({
      ...state,
      [validationValues.email]: "This is not a valid email.",}));

      console.log([validationValues.email])

  };
  }


  return {
    validateEmail,
    validationValues,
  };
};
