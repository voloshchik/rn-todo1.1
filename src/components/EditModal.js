import React, { useState } from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { THEME } from '../../theme';

export const EditModal = ({ visible, onCansel, value, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        `Ошибка!`,
        `минимальная длинна 3, 
        сейчас ${title.trim().length} симв. `
      );
    } else {
      onSave(title);
    }
  };
  const conselHandler = () => {
    onCansel();
    setTitle(value);
  };
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder='Введите название'
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <Button title='Отменить' onPress={conselHandler} color={THEME.DANGER_COLOR} />
          <Button title='Cохранить' onPress={saveHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    padding: 10,
    width: '80%',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});
