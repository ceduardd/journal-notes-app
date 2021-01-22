import { useState } from 'react';

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, changeHandler];
};

export default useForm;
