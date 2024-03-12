import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React from "react";
import AppStyle from "../style";
import getTheme from "../style/theme";

const BookInformation = ({ route }) => {
  const { book, darkModeEnabled } = route.params;
  const theme = getTheme(darkModeEnabled);

  return (
    <SafeAreaView
      style={[{ alignItems: "center", flex: 1 }, theme.contentBackground]}
    >
      <ScrollView>
        <Image
          blurRadius={12}
          style={[AppStyle.text.imageDetail, { marginVertical: 0 }]}
          source={{ uri: book.img }}
        />
        <View style={AppStyle.screens.imgContaiber}>
          <Image style={[AppStyle.text.image]} source={{ uri: book.img }} />
        </View>
        <View style={[AppStyle.screens.informationContainer]}>
          <Text style={[theme.text, AppStyle.text.paragraph]}>
            Name: {book.title}
          </Text>
          <Text style={[theme.text, AppStyle.text.paragraph]}>
            Author: {book.author}
          </Text>
          <Text style={[theme.text, AppStyle.text.paragraph]}>
            Date posted: {book.publication_date}
          </Text>
          <Text style={[theme.text, AppStyle.text.paragraph]}>
            Status: {book.status}
          </Text>
          <Text style={[theme.text, AppStyle.text.paragraph]}>
            Type: {book.type}
          </Text>
          <Text style={[theme.text, AppStyle.text.notes, {marginVertical:20,textAlign:'auto'}]}>{book.describe}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookInformation;
