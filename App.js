import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import navigationTheme from "./app/navigation/navigationTheme";
import TabNavigator from "./app/navigation/AppNavigation";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
}
