import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ScreenHeader from '../../Layouts/ScreenHeader/ScreenHeader';

export default ({ title, drawerRef }) => (
  <>
    <ScreenHeader drawerRef={drawerRef} />
    <View style={styles.container}>
        <Text style={styles.header}>{title}</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
