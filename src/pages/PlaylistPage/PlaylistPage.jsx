import React, { useState, useEffect } from "react";
import "./PlaylistPage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import * as playlistAPI from "../../services/playlists-api";
import EditPlaylistCard from "../../components/EditPlaylistCard/EditPlaylistCard";
import AddPlaylistCard from "../../components/AddPlaylistCard/AddPlaylistCard";
import { useStateWithCallback } from "../../hooks/useStateWithCallback";

// This is our playlist list page! All our functions will live here, and we'll pass from props to components. Here we import all the things we are exporting from all our pages
function PlaylistPage(props) {
    // Creating state for playlist
    const [playlists, setPlaylists] = useState([]);
    const history = useHistory();
    useEffect(() => {
      // This is listening for changes in playlists state, then the function below will reroute
      history.push("/playlistpage");
    }, [playlists, history]);
    // Add a playlist
    async function handleAddPlaylist(newPlaylistData) {
      const newPlaylist = await playlistAPI.create(newPlaylistData);
      setPlaylists((playlists) => [...playlists, newPlaylist]);
    }
    // Update a playlist
    async function handleUpdatePlaylist(updatedPlaylistData) {
      const updatedPlaylist = await playlistAPI.update(updatedPlaylistData);
      const newPlaylistsArray = playlists.map((p) =>
        p._id === updatedPlaylist._id ? updatedPlaylist : p
      );
      setPlaylists(newPlaylistsArray);
    }
    // Delete a playlist
    async function handleDeletePlaylist(id) {
      await playlistAPI.deleteOne(id);
      setPlaylists(playlists.filter((p) => p._id !== id));
    }
    /*--- Lifecycle Methods ---*/
    useEffect(() => {
      (async function () {
        const playlists = await playlistAPI.getAll();
        setPlaylists(playlists);
      })();
    }, []);

    return (
      <>
        <div>
          <h1> Playlist page.jsx!</h1>
        </div>
        <div>
          <h1> Playlist page</h1>

          <>
          {playlists.map(playlist => (
           <p>
           <PlaylistCard
           playlist={playlist}
           handleDeletePlaylist={handleDeletePlaylist}
           key={playlist._id} />
            <EditPlaylistCard
              playlist={playlist}
              handleUpdatePlaylist={handleUpdatePlaylist}
              key={playlist._id}
            />
           </p>
          ))}
          </>
          <>
          <AddPlaylistCard
           handleAddPlaylist={handleAddPlaylist}
           />
          </>
        </div>
      </>
    );
  }
  export default PlaylistPage;
