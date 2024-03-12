import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./src/Screens/HomePage";
import BookInformation from "./src/Screens/BookInformation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomePage}
        />
        <Stack.Screen
          name="BookInfo"
          options={({ route }) => ({
            headerShown: true,
            headerTransparent: true, // Đặt header trong suốt
            headerTitleStyle: [{ color: "white",fontWeight:'600',fontSize:23}], // Tuỳ chỉnh màu sắc của tiêu đề
            title: route.params.book.title, // Thiết lập tiêu đề từ book.title
            headerTintColor:'white'
          })}
          component={BookInformation}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
