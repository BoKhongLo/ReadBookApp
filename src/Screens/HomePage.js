import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import React, { useState } from "react";

import ChangeThemeButton from "../components/ChangeThemeButton";
import AppStyle from "../style";
import RenderBook from "../components/RenderBook";
import getTheme from "../style/theme";
import data from "../../assets/data/books";

const HomePage = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const theme = getTheme(darkModeEnabled);

  return (
    <SafeAreaView style={[AppStyle.screens.container, theme.background]}>
      <View style={[AppStyle.screens.header]}>
        <Text style={[AppStyle.text.heading1, theme.text]}>Welcome !</Text>
        <ChangeThemeButton setIsEnabled={setDarkModeEnabled} />
      </View>

      <View style={[AppStyle.screens.content, theme.contentBackground]}>
        <View style={AppStyle.screens.contentLayout}>
          
            <Text
              style={[
                AppStyle.text.heading2,
                theme.text,
                { marginBottom: 10, marginLeft: 30 },
              ]}
            >
              Library
            </Text>
            
          {RenderBook(data, darkModeEnabled)}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;
