import React, { useState } from 'react'
import { createContext } from 'react';

export const AlcoholStateContext = createContext({})
export const TimeContext = createContext('')
export const WeightContext = createContext(0)
const AppStateProvider = props => {
    return (
    <AlcoholStateContext.Provider value={[AlcoholStateContext,TimeContext,WeightContext]}>
      {props.children}
    </AlcoholStateContext.Provider>
  );
};
export default AppStateProvider;