import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ScreenHeader from "../../Layouts/ScreenHeader/ScreenHeader";

export default ({ title, description, drawerRef }) => (
  <>
    <ScreenHeader drawerRef={drawerRef} />
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Text>{description}</Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
