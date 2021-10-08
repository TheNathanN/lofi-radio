import React, { useState, useRef } from 'react';
import AppContext from './app-context';

const AppState = props => {
  const [onPlayer, setOnPlayer] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [selectedSong, setSelectedSong] = useState('');
  const [playlist, setPlaylist] = useState();
  const [searchedAlbum, setSearchedAlbum] = useState('');
  const [open, setOpen] = useState(false);
  const [menuMode, setMenuMode] = useState('main'); // can only be 'main', 'albums', 'songs'
  const audioRef = useRef();
  const progressRef = useRef();
  const animationRef = useRef();

  return (
    <AppContext.Provider
      value={{
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
        open,
        setOpen,
        menuMode,
        setMenuMode,
        progressRef,
        animationRef,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
