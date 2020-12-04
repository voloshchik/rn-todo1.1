import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { THEME } from './theme';
import { TodoScreen } from './src/screens/TodoScreen';
import { MainScreen } from './src/screens/MainScreen';
import { TodoContext } from './src/context/todo/todoContext';

export const MainLayout = () => {
  const todosContext = useContext(TodoContext);
  console.log();
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState('');
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
    <MainScreen
      openTodo={setTodoId}
      todos={todosContext.todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
    />
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
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
