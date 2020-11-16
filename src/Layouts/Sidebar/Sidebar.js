import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import { SideBarRoutes } from "../../../Routes";
import { ListItem, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    padding: 8,
  },
});

export default ({ drawerRef }) => {
  return (
    <View style={styles.navigationContainer}>
      <Link
        to="/"
        onPress={() => drawerRef.current.closeDrawer()}
        underlayColor="#f0f4f7"
      >
        <Text style={{ margin: 10, fontSize: 15 }}>Fitness Pro</Text>
      </Link>
      <View>
        {SideBarRoutes().map((route, index) => (
          <Link
            key={index}
            to={route.path}
            onPress={() => drawerRef.current.closeDrawer()}
            underlayColor="#f0f4f7"
          >
            <ListItem bottomDivider>
              <Icon name={route.icon || "av-timer"} />
              <ListItem.Content>
                <ListItem.Title>
                  <Text>{route.title}</Text>
                </ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </Link>
        ))}
      </View>
    </View>
  );
};
