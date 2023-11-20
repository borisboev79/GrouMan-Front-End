import { useState, useEffect } from "react";

export const useLoginForm = (submitHandler, initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {

    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);
  }

  return {
    values,
    onChange,
    onSubmit,
  };
};
