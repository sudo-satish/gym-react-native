import React from "react";
import { Header, Icon } from "react-native-elements";
import { Link } from "react-router-native";

export default function ScreenHeader({ title = "Blank Screen", drawerRef }) {
  return (
    <Header
      leftComponent={() => (
        <Icon
          name="menu"
          onPress={() => drawerRef.current.openDrawer()}
          color="#fff"
        />
      )}
      centerComponent={{ text: title, style: { color: "#fff" } }}
      rightComponent={() => (
        <Link to="/">
          <Icon name="home" color="#fff"></Icon>
        </Link>
      )}
    />
  );
};
