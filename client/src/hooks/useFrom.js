import { useState, useEffect } from "react";
import * as formatter from "../utils/dateUtils";

export const useForm = (initialValues, onSubmitHandler) => {
  const [formValues, setFormValues] = useState(initialValues);

  const changeHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      case "checkbox":
        value = e.target.checked;
        break;
      case "date":
        value = formatter.formatDate(e.target.value);
      default:
        value = e.target.value;
        break;
    }

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const resetFormHandler = () => {
    setFormValues(initialValues);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    onSubmitHandler(formValues);
  }

  return {
    formValues,
    changeHandler,
    resetFormHandler,
    onSubmit,
  };
};
