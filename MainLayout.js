import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { THEME } from './theme';
import { TodoScreen } from './src/screens/TodoScreen';
import { MainScreen } from './src/screens/MainScreen';
import { ScreenContext } from './src/context/screen/screenContext';

export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);

  // const removeTodo = (id) => {
  //   const todo = todos.find((todo) => todo.id === id);

  //   Alert.alert(
  //     'Удаление элемента',
  //     `Вы дейстительно хотите удалить ${todo.title}? `,
  //     [
  //       {
  //         text: 'Отмена',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Удалить',
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos((prev) => prev.filter((todo) => todo.id !== id));
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };

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
