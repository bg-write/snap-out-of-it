import React, { useState, useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";
import "./EditMantraCard.css";

export default function EditMantraCard({ mantra, handleUpdateMantra }) {
  const [invalidForm, setValidForm] = useState(true);
  const formRef = useRef();
  const [state, handleChange] = useForm(mantra);

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

  return (
    <div className="edit-container">
      <form
        className="edit-container"
        ref={formRef}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state, "  is state");
          handleUpdateMantra(state);
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
          className="btn btn-light edit-button"
          type="submit"
          disabled={invalidForm}
        >
          {" "}
          Edit Mantra
        </button>
      </form>
    </div>
  );
}
