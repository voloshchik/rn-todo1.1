import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AppText } from './UI/AppText';

export const Todo = ({ todo, onRemove, onOpen }) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };
  return (
    <TouchableOpacity onLongPress={longPressHandler} onPress={() => onOpen(todo.id)}>
      <View style={styles.todo}>
        <AppText>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
  },
});
