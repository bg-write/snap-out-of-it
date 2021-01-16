import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function EditAffirmationCard({affirmation, handleUpdateAffirmation}){
    const [invalidForm, setValidForm] = useState(true);
    const formRef = useRef();
    const [state, handleChange] = useForm(affirmation)


    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state]);

    return (
      <>
        <h1>Edit Affirmation</h1>
        <form ref={formRef} autoComplete="off" onSubmit={(e) => {
            e.preventDefault()
            console.log(state, '  is state')
            handleUpdateAffirmation(state);
      }}>

          <div>
            <label>Affirmation (required)</label>
            <input
              name="text"
              value={ state.text }
              onChange={ handleChange }
              required
            />
          </div>

          <button
            type="submit"
            disabled={invalidForm}
          >
            SAVE Affirmation
          </button>&nbsp;&nbsp;
          <Link to='/affirmationpage'>CANCEL</Link>
        </form>
      </>
    );
}
