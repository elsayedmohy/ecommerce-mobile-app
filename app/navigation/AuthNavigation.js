import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from '../screens/WelcomeScreen';
import Loginscreen from '../screens/Loginscreen';
import RegisterScreen from '../screens/RegisterScreen';


const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome"  component={WelcomeScreen}
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Login"  component={Loginscreen}/>
        <Stack.Screen name="Register"  component={RegisterScreen}/>
    </Stack.Navigator>
)

export default AuthNavigator;