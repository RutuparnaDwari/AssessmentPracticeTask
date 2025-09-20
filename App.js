import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LoginScreen from "./Screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";      
import ScanScreen from "./Screen/ScanScreen";
import LocationScreen from "./Screen/LocationScreen";
import SplashScreen from "./Screen/SplashScreen";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" >
         <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Scan" component={ScanScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
   