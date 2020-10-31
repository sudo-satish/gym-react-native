import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { DrawerLayoutAndroid } from 'react-native';
import AppRouter from './AppRouter';
import SideBar from './src/Layouts/Sidebar/Sidebar';
import { NativeRouter } from "react-router-native";

export default function App() {
  const [drawerPosition, setDrawerPosition] = useState("left");

  return (
    <>
      <NativeRouter>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={() => SideBar}
        >
          <AppRouter />
          <StatusBar style="auto" />
        </DrawerLayoutAndroid>
      </NativeRouter>
    </>
  );
}
