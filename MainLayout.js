import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { THEME } from './theme';
import { TodoScreen } from './src/screens/TodoScreen';
import { MainScreen } from './src/screens/MainScreen';
import { ScreenContext } from './src/context/screen/screenContext';

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  let content = <MainScreen />;
  if (todoId) {
    content = <TodoScreen />;
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>{todoId ? <TodoScreen /> : <MainScreen />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
