import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import CustomNavigationBar from "./Screen/CustomNavigationBar";

import Home from "./Screen/HomeScreen";
import Details from "./Screen/DetailsScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initalRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
