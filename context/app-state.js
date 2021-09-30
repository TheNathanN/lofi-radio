import React, { useState } from 'react';
import AppContext from './app-context';

const AppState = props => {
  const [selectedAlbum, setSelectedAlbum] = useState('selected album');

  return (
    <AppContext.Provider
      value={{
        selectedAlbum,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
