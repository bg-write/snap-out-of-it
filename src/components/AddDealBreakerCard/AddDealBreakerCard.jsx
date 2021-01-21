import React, { useState, useRef, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import './AddDealBreakerCard.css';

export default function AddDealBreakerCard({
  user,
  dealBreaker,
  handleAddDealBreaker,
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
        <>
          <form className="add-breaker-container"
            autoComplete="off"
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              console.log(state, " this is state");
              handleAddDealBreaker(state);
            }}
          >
            <div className="input-group">
              <input
                className="form-control width100"
                placeholder="Your ex was not THAT great ..."
                name="text"
                value={state.text}
                onChange={handleChange}
                required
              />
              {dealBreaker <= 4 ? (
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
                  <h1 class="btn btn-info">Too Many Deal breakers</h1>
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
