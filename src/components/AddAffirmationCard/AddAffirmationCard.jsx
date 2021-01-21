import React, { useEffect, useRef, useState } from "react";
import { useForm } from "../../hooks/useForm";
import './AddAffirmationCard.css';

export default function AddAffirmationCard({
  user,
  affirmation,
  handleAddAffirmation,
}) {
  const [invalidForm, setValidForm] = useState(true);
  const [state, handleChange] = useForm({
    text: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [state]);

  return (
    <>
      {user ? (
        <form className="add-aff-form"
          autoComplete="off"
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            handleAddAffirmation(state);
          }}
        >
          <div className="input-group">
            <input
              className="form-control width100"
              placeholder="Some kind words, from you ..."
              name="text"
              value={state.text}
              onChange={handleChange}
              required
            />
            {affirmation <= 4 ? (
              <span class="input-group-btn">
                <button
                  class="btn btn-info"
                  type="submit"
                  disabled={invalidForm}
                >
                  ADD
                </button>
              </span>
            ) : (
              <>
                {" "}
                <h1 class="btn btn-info">Too Many Affirmations</h1>
              </>
            )}
          </div>
        </form>
      ) : (
        <h1>You have no affirmations yet</h1>
      )}
    </>
  );
}
