import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import { Navbar } from './src/components/Navbar';

import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      title: 'Выучить React Native',
    },
  ]);
  const [todoId, setTodoId] = useState('1');

  const removeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    Alert.alert(
      'Удаление элемента',
      `Вы дейстительно хотите удалить ${todo.title}? `,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };
  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  let content = (
    <MainScreen openTodo={setTodoId} todos={todos} addTodo={addTodo} removeTodo={removeTodo} />
  );
  if (todoId) {
    const selecetedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} todo={selecetedTodo} />
    );
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
