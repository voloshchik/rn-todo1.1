import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../components/UI/AppCard';
import { AppTextBold } from '../components/UI/AppTextBold';
import { AppButton } from '../components/UI/AppButton';
import { TodoContext } from '../context/todo/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const TodoScreen = () => {
  const { todos, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);
  const todo = todos.find((todo) => todo.id === todoId);
  console.log(todo);
  const [modal, setModal] = useState(false);
  const saveHandler = (title) => {
    updateTodo(todo.id, title);
    setModal(false);
  };
  return (
    <View>
      <EditModal
        value={todo.title}
        onSave={saveHandler}
        visible={modal}
        onCansel={() => setModal(false)}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name='edit' size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.bottons}>
        <View style={styles.botton}>
          <AppButton color={THEME.GRAY_COLOR} onPress={() => changeScreen(null)}>
            <AntDesign name='back' size={20} color='#fff' />
          </AppButton>
        </View>
        <View style={styles.botton}>
          <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
            <FontAwesome name='remove' size={20} color='#fff' />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botton: {
    width: '40%',
  },
  title: {
    fontSize: 24,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
