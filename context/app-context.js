import { createContext } from 'react';

// Empty Variables for Auto-Complete
const onPlayer = '';
const setOnPlayer = () => {};
const selectedAlbum = '';
const setSelectedAlbum = () => {};
const selectedSong = '';
const setSelectedSong = () => {};
const selectedArtist = '';
const setSelectedArtist = () => {};

// Context
const AppContext = createContext({
  onPlayer,
  setOnPlayer,
  selectedAlbum,
  setSelectedAlbum,
  selectedSong,
  setSelectedSong,
  selectedArtist,
  setSelectedArtist,
});

export default AppContext;
