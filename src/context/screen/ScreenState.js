import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import { CHANGE_SREEN } from '../types';
import { ScreenContext } from './screenContext';
import { screeReducer } from './screenReducer';

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screeReducer, null);
  const changeSreen = (id) => dispatch({ type: CHANGE_SREEN, payload: id });
  return (
    <ScreenContext.Provider value={{ changeSreen, todoId: state }}>
      {children}
    </ScreenContext.Provider>
  );
};
