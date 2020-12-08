import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import { CHANGE_SCREEN } from '../types';
import { ScreenContext } from './screenContext';
import { screeReducer } from './screenReducer';

export const ScreenState = ({ children }) => {
  const [state, dispatch] = useReducer(screeReducer, null);
  const changeScreen = (id) => dispatch({ type: CHANGE_SCREEN, payload: id });
  return (
    <ScreenContext.Provider value={{ changeScreen, todoId: state }}>
      {children}
    </ScreenContext.Provider>
  );
};
