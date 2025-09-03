import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "./Screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";       
import PostListScreen from "./Screen/PostListScreen";
import DetailsScreen from "./Screen/DetailsScreen";
import CounterScreen from "./Screen/CounterScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Posts" component={PostListScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
   