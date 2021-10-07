import { createContext } from 'react';

// Empty Variables for Auto-Complete
let onPlayer;
let setOnPlayer;
let selectedAlbum;
let setSelectedAlbum;
let selectedSong;
let setSelectedSong;
let playlist;
let setPlaylist;
let searchedAlbum;
let setSearchedAlbum;
let open;
let setOpen;
let audioRef;
let progressRef;
let animationRef;
let menuMode;
let setMenuMode;

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
  open,
  setOpen,
  menuMode,
  setMenuMode,
  audioRef,
  progressRef,
  animationRef,
});

export default AppContext;
