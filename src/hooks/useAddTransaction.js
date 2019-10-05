import { useState } from 'react';

const useAddTransaction = () => {
  const [inputs, setInputs] = useState('');

  const handleInputChange = event => {
    event.persist();
    setInputs(inputVal => ({
      ...inputVal,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    handleInputChange,
    inputs,
  };
};
export default useAddTransaction;
