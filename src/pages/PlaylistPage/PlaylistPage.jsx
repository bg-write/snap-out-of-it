import React, { useState, useEffect } from "react";
import "./PlaylistPage.css";
import { Route, NavLink, useHistory } from "react-router-dom";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import * as playlistAPI from "../../services/playlists-api";
import EditPlaylistCard from "../../components/EditPlaylistCard/EditPlaylistCard";
import AddPlaylistCard from "../../components/AddPlaylistCard/AddPlaylistCard";
import { useStateWithCallback } from "../../hooks/useStateWithCallback";
