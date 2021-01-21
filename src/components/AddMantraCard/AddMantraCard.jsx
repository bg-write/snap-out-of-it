import React, { useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import './AddMantraCard.css';

export default function AddMantraCard({ user, mantra, handleAddMantra }) {
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
        <>
          <form className="add-mantra-container"
            autoComplete="off"
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(state, " this is state");
              handleAddMantra(state);
            }}
          >
            <div className="input-group">
              <input
                className="form-control "
                placeholder="Something like 'I am awesome' ..."
                name="text"
                value={state.text}
                onChange={handleChange}
                required
              />
              {mantra <= 4 ? (
                <span class="input-group-btn">
                  <button
                    class="btn btn-info mantra-but"
                    type="submit"
                    disabled={invalidForm}
                  >
                    ADD
                  </button>
                </span>
              ) : (
                <>
                  {" "}
                  <h1 class="btn btn-info">Too Many Mantras</h1>
                </>
              )}
            </div>
          </form>
        </>
      ) : (
        <h1>You have no Mantras</h1>
      )}
    </>
  );
}
