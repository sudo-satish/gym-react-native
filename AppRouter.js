import React from 'react';
import { StyleSheet, View } from "react-native";
import { Route } from "react-router-native";
import Routes from './Routes';

const AppRouter = () => (
    <View style={styles.container}>
      {Routes().map((route, index) => (
        <Route
          exact={route.exact}
          key={index}
          path={route.path}
          component={route.component}
        />
      ))}
    </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  }
});

export default AppRouter;