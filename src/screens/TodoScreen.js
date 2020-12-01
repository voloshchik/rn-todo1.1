import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../theme';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../UI/AppCard';

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);
  const saveHandler = (title) => {
    onSave(todo.id, title);
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
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='ред.' onPress={() => setModal(true)} />
      </AppCard>
      <View style={styles.bottons}>
        <View style={styles.botton}>
          <Button title='Назад' color={THEME.GRAY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.botton}>
          <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)} />
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
