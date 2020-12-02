import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const AppTextBold = ({ children, style }) => {
  return <Text style={{ ...styles.default, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'roboto-bold',
  },
});
