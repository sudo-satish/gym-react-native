import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { DrawerLayoutAndroid } from "react-native";
import AppRouter from "./AppRouter";
import SideBar from "./src/Layouts/Sidebar/Sidebar";
import { NativeRouter } from "react-router-native";

export default function App() {
  const [drawerPosition, setDrawerPosition] = useState("left");
  const drawerRef = useRef(null);
  return (
    <>
      <NativeRouter>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={drawerPosition}
          ref={drawerRef}
          renderNavigationView={() => <SideBar drawerRef={drawerRef} />}
        >
          <AppRouter drawerRef={drawerRef} />
          <StatusBar style="auto" />
        </DrawerLayoutAndroid>
      </NativeRouter>
    </>
  );
}
