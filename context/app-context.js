import { createContext } from 'react';

// Empty Variables for Auto-Complete
const onPlayer = '';
const setOnPlayer = () => {};
const selectedAlbum = '';
const setSelectedAlbum = () => {};
const selectedSong = '';
const setSelectedSong = () => {};
const playlist = [];
const setPlaylist = () => {};
const searchedAlbum = '';
const setSearchedAlbum = () => {};
let audioRef;

// Context
const AppContext = createContext({
  onPlayer,
  setOnPlayer,
  selectedAlbum,
  setSelectedAlbum,
  selectedSong,
  setSelectedSong,
  playlist,
  setPlaylist,
  searchedAlbum,
  setSearchedAlbum,
  audioRef,
});

export default AppContext;
