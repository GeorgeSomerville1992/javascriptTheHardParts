import { useState, useEffect } from 'react';

const useInput = (initialValue = "", options) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // use effect which will happen everytime the value has changed
    if(options.persist) {
      window.localStorage.setItem(options.persist, value)
    }
  }, [value])

  return {
    value,
    isValid: value && value.trim() !== "",
    onChange: (e) => {
      return setValue(e.target.value)
    },
    clear: () => setValue(""),
    reset: () => setValue(initialValue)
  }
}

export default useInput;
