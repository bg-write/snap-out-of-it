import React, { Component, useEffect, useRef, useState } from 'react';
import { useForm } from "../../hooks/useForm";

export default function AddAffirmationCard(props) {
    const [invalidForm, setValidForm] = useState(true);
    const [state, handleChange] = useForm({
        text: '',
    });

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    }, [state]);

    return (
        <>
            
            <form autoComplete="off" ref={formRef} onSubmit={(e) => {
                e.preventDefault();
                props.handleAddAffirmation(state);
            }}
            >
                <div>
                    <input className="form-control" placeholder="Add A Mantra..."name="text" value={state.text} onChange={handleChange} required
                    />
                </div>
                <button type="submit" disabled={invalidForm}>ADD</button>
            </form>
        </>
    );
};
