import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Navbar } from './src/components/Navbar';

import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';
import { THEME } from './theme';

async function loadApplication() {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState('1');

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }
  const updateTodo = (id, title) => {
    setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

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
      <TodoScreen
        onSave={updateTodo}
        onRemove={removeTodo}
        goBack={() => setTodoId(null)}
        todo={selecetedTodo}
      />
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
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
