import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AppTextBold } from './AppTextBold';
import { THEME } from '../../../theme';

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={styles.text}>{children}</AppTextBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
