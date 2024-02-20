import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

import ChangeThemeButton from "../components/ChangeThemeButton";
import AppStyle from "../style";
import RenderBook from "../components/RenderBook";
const HomePage = ({ data }) => {
  return (
    <View style={AppStyle.screens.container}>
      <View style={AppStyle.screens.header}>
        <Text style={AppStyle.text.heading1}>Welcome !</Text>
        <ChangeThemeButton />
      </View>
      <View style={AppStyle.screens.content}>
        <View style={AppStyle.screens.contentLayout}>
          <Text style={AppStyle.text.heading2}>Library</Text>
          {RenderBook(data)}
        </View>
      </View>
    </View>
  );
};
export default HomePage;
