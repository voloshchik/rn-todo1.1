import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Todo = ({ todo, onRemove, onOpen }) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };
  return (
    <TouchableOpacity onLongPress={longPressHandler} onPress={() => onOpen(todo.id)}>
      <View style={styles.todo}>
        <Text style={styles.title}>{todo.title}</Text>
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
  title: {
    fontFamily: 'roboto-bold',
  },
});
