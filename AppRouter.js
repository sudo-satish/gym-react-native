import React from "react";
import { StyleSheet, View } from "react-native";
import { Route } from "react-router-native";
import Routes from "./Routes";

const AppRouter = ({ drawerRef }) => {
  return (
    <>
      {Routes().map((route, index) => (
        <Route
          exact={route.exact}
          key={index}
          path={route.path}
          component={(...props) => (
            <route.component drawerRef={drawerRef} {...props} />
          )}
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
});

export default AppRouter;
