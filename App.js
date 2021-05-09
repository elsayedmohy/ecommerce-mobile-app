import React, { useState , useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';

import navigationTheme from "./app/navigation/navigationTheme";
import TabNavigator from "./app/navigation/AppNavigation";
import AuthNavigator from "./app/navigation/AuthNavigation";
import AuthContext from "./app/auth/context";
import storage from "./app/auth/storage";
import jwtDecode from "jwt-decode";

export default function App() {
    const [user, setUser] = useState();
    const [isReady , setIsReady] = useState(false)

    const restoreUser = async () => {
       const user = await storage.getUser()
        if(user) setUser(user)
    }
    if(!isReady)
        return (<AppLoading onError={console.warn} startAsync={restoreUser} onFinish={() => setIsReady(true)}  />)

  return (

      <AuthContext.Provider value={{user , setUser}}>
    <NavigationContainer theme={navigationTheme}>
        {user ? <TabNavigator /> : <AuthNavigator/>}
    </NavigationContainer>
      </AuthContext.Provider>
          );
}
