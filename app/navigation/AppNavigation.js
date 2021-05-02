import React from 'react';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ListingsEditScreen from '../screens/ListingsEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigation';
import {MaterialCommunityIcons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
 <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator}
    options={{tabBarIcon: ({size , color})=>(<MaterialCommunityIcons name="home" size={size} color={color} />)}}
    />
    <Tab.Screen name ="Editscreen" component={ListingsEditScreen}
    options={{tabBarIcon: ({size , color})=>(<MaterialCommunityIcons name="plus-circle" size={size} color={color} />)}}
    />
    <Tab.Screen name ="Account" component={AccountNavigator}
    options={{tabBarIcon: ({size , color})=>(<MaterialCommunityIcons name="account" size={size} color={color} />)}}
    /> 
</Tab.Navigator>

);

export default TabNavigator;