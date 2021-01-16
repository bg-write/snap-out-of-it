import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function EditMeTimeCard({meTime, handleUpdateMeTime}){
    const [invalidForm, setValidForm] = useState(true);
    const formRef = useRef();
    const [state, handleChange] = useForm(meTime)


    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state]);

    return (
      <>
        <h1>Edit Me Time</h1>
        <form ref={formRef} autoComplete="off" onSubmit={(e) => {
            e.preventDefault()
            console.log(state, '  is state')
            handleUpdateMeTime(state);
      }}>

          <div>
            <label>Me Time (required)</label>
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
            SAVE Me Time
          </button>&nbsp;&nbsp;
          <Link to='/metimepage'>CANCEL</Link>
        </form>
      </>
    );
}