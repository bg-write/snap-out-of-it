import React, { Component, useState } from 'react';
import { useForm } from "../../hooks/useForm";

export default function AddAffirmationCard(props) {
    const [invalidForm, setValidForm] = useState(true);
    const [state, handleChange] = useForm({
        text: '',
    });




}
