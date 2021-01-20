import React, { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";

export default function EditDealBreakerCard({
  dealBreaker,
  handleUpdateDealBreaker,
}) {
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [state, handleChange] = useForm(dealBreaker);

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

  return (
    <>
      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state, "  is state");
          handleUpdateDealBreaker(state);
        }}
      >
        <div>
          <input
            className="form-control form-control-md"
            name="text"
            value={state.text}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="btn btn-light edit-button"
          type="submit"
          disabled={invalidForm}
        >
          Edit Deal Breaker
        </button>
      </form>
    </>
  );
}
