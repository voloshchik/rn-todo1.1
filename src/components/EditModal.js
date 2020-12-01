import React from 'react';
import { Modal, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { THEME } from '../../theme';

export const EditModal = ({ visible, onCansel }) => {
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.wrap}>
        <TextInput style={styles.input} placeholder='Введите название' />
        <View style={styles.buttons}>
          <Button title='Отменить' onPress={onCansel} color={THEME.DANGER_COLOR} />
          <Button title='Cохранить' />
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
