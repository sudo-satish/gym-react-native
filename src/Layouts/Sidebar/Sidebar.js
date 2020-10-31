import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Link } from 'react-router-native';
import { SideBarRoutes } from '../../../Routes';


const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8,
  }
});

export default (
  <View style={styles.navigationContainer}>
    <Link to="/" underlayColor="#f0f4f7">
      <Text style={{ margin: 10, fontSize: 15 }}>Home Page</Text>
    </Link>
    <View>
      {SideBarRoutes().map((route, index) => (
        <Link key={index} to={route.path} underlayColor="#f0f4f7">
          <Text>{route.title}</Text>
        </Link>
      ))}
    </View>
  </View>
);

