import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default ({title}) => <Text style={styles.header}>{title}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
});
