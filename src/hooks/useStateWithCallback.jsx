import { useState, useEffect, useRef } from "react";

export const useStateWithCallback = (initialValue, callback) => {
  const [state, setState] = useState(initialValue);

  // "Essentially, useRef is like a “box”
  //that can hold a mutable value in its .current property.

  const cbRef = useRef(null);

  useEffect(() => {
    if (cbRef.current) {
      console.log(cbRef.current, " this is current");
      // call the callback which is assinged to current,
      // in the function below
      cbRef.current(state);

      cbRef.current = null;
    }
  }, [state]);

  function setStateWithCallback(state, callback) {
    cbRef.current = callback;

    return setState(state);
  }

  return [state, setStateWithCallback];
};
