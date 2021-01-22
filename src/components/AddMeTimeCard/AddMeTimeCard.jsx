import React, { useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import './AddMeTimeCard.css';

export default function AddMeTimeCard({ user, meTime, handleAddMeTime }) {
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
          <form id="add-metime-container" className="add-metime-container"
            autoComplete="off"
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(state, " this is state");
              handleAddMeTime(state);
            }}
          >
            <div className="input-group">
              <input
                className="form-control width100"
                placeholder="A little TLC ..."
                name="text"
                value={state.text}
                onChange={handleChange}
                required
              />
              {meTime <= 4 ? (
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
                  <h1 class="btn btn-info">Too Many me Times</h1>
                </>
              )}
            </div>
          </form>
        </>
      ) : (
        <h1>You have no lists</h1>
      )}
    </>
  );
}
