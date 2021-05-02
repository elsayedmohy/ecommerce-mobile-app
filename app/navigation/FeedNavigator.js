import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Listings from '../screens/Listings';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';



const Stack = createStackNavigator();

const FeedNavigator=()=>(

    <Stack.Navigator mode="modal" screenOptions={{headerShown :false}} >
        <Stack.Screen name="Listings" component={Listings} />
        <Stack.Screen  name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>

);

export default FeedNavigator;