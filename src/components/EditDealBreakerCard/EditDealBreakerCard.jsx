import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function EditDealBreakerCard({dealBreaker, handleUpdateDealBreaker}){
    const [invalidForm, setValidForm] = useState(true);
    const formRef = useRef();
    const [state, handleChange] = useForm(dealBreaker)


    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state]);

    return (
      <>
        <h1>Edit Deal Breaker</h1>
        <form ref={formRef} autoComplete="off" onSubmit={(e) => {
            e.preventDefault()
            console.log(state, '  is state')
            handleUpdateDealBreaker(state);
      }}>

          <div>
            <label>Deal Breaker (required)</label>
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
            SAVE Deal Breaker
          </button>&nbsp;&nbsp;
          <Link to='/dealbreakerpage'>CANCEL</Link>
        </form>
      </>
    );
}