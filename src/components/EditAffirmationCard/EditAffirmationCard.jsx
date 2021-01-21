import React, { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import './EditAffirmationCard.css';

export default function EditAffirmationCard({
  affirmation,
  handleUpdateAffirmation,
}) {
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [state, handleChange] = useForm(affirmation);

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

  return (
    <div className="edit-container">
      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state, "  is state");
          handleUpdateAffirmation(state);
        }}
      >
        <div>
          <input
            className="form-control form-control-md"
            name="text"
            // value={state.text}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="btn btn-light edit-aff-btn"
          type="submit"
          disabled={invalidForm}
        >
          Edit Affirmation
        </button>
      </form>
    </div>
  );
}
