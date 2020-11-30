import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.bottons}>
        <View style={styles.botton}>
          <Button title='Назад' color='#757575' onPress={goBack} />
        </View>
        <View style={styles.botton}>
          <Button title='Удалить' color='#e53935' />
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
});
