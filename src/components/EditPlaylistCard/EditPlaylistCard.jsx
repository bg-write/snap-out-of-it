import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function EditPlaylistCard({playlist, handleUpdatePlaylist}){
    const [invalidForm, setValidForm] = useState(true);
    const formRef = useRef();
    const [state, handleChange] = useForm(playlist)


    useEffect(() => {
        formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true)
    }, [state]);

    return (
      <>
        <h1>Edit Playlist</h1>
        <form ref={formRef} autoComplete="off" onSubmit={(e) => {
            e.preventDefault()
            console.log(state, '  is state')
            handleUpdatePlaylist(state);
      }}>

          <div>
            <label>Playlist (required)</label>
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
            SAVE Playlist
          </button>&nbsp;&nbsp;
          <Link to='/playlistpage'>CANCEL</Link>
        </form>
      </>
    );
}
