import { useState } from 'react';

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const resetValues = (newValues = initialValues) => {
    setValues(newValues);
  };

  const changeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, changeHandler, resetValues];
};

export default useForm;
