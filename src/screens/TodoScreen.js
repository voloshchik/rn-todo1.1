import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../theme';
import { AppCard } from '../UI/AppCard';

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title='редоктировать' />
      </AppCard>
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
  title: {
    fontSize: 24,
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
});
