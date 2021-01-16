import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function EditMantraCard({mantra, handleUpdateMantra}){
    const [invalidForm, setValidForm] = useState(true);
    const formRef = useRef();
    const [state, handleChange] = useForm(mantra)


    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state]);

    return (
      <>
        <h1>Edit Mantra</h1>
        <form ref={formRef} autoComplete="off" onSubmit={(e) => {
            e.preventDefault()
            console.log(state, '  is state')
            handleUpdateMantra(state);
      }}>

          <div>
            <label>Mantra (required)</label>
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
            SAVE Mantra
          </button>&nbsp;&nbsp;
          <Link to='/mantrapage'>CANCEL</Link>
        </form>
      </>
    );
}
