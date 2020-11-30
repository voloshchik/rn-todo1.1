import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navbar } from './src/components/Navbar';

import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(null);
  const removeTodo = (id) => {
    console.log('idapp', id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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

  let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} />;
  if (todoId) {
    content = <TodoScreen />;
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
