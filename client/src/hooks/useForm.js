import { useState, useEffect } from "react";

export const useForm = (onSubmitHandler, localSubmitHanlder, initialValues) => {
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
        value = Date(e.target.value);
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
    localSubmitHanlder(formValues);
  }

  return {
    formValues,
    changeHandler,
    onSubmit,
    resetFormHandler,
  };
};
