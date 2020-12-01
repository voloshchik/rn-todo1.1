import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../theme';

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.bottons}>
        <View style={styles.botton}>
          <Button title='Назад' color={THEME.GRAY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.botton}>
          <Button title='Удалить' color={THEME.DANGER_COLOR} />
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
