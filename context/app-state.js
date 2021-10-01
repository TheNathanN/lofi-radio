import React, { useState } from 'react';
import AppContext from './app-context';

const AppState = props => {
  const [onPlayer, setOnPlayer] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState('');
  const [selectedSong, setSelectedSong] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');

  return (
    <AppContext.Provider
      value={{
        onPlayer,
        setOnPlayer,
        selectedAlbum,
        setSelectedAlbum,
        selectedSong,
        setSelectedSong,
        selectedArtist,
        setSelectedArtist,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
