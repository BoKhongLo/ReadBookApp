import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppStyle from "../style";
import { useNavigation } from "@react-navigation/native";

const ItemBookCover = ({ item ,darkModeEnabled }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('BookInfo', { book: item, darkModeEnabled: darkModeEnabled,});
  };
  
  return (
    <TouchableOpacity onPress={handlePress} style={AppStyle.screens.item}>
      <Image
        resizeMode="cover"
        source={{ uri: item.img }}
        style={AppStyle.text.image}
      />
    </TouchableOpacity>
  );
};

export default ItemBookCover;