import React, { useState } from 'react'
import { createContext } from 'react';

export const AlcoholStateContext = createContext({})
const AppStateProvider = props => {
    return (
    <AlcoholStateContext.Provider value={AlcoholStateContext}>
      {props.children}
    </AlcoholStateContext.Provider>
  );
};
export default AppStateProvider;