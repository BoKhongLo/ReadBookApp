import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import AppStyle from "../style";

const ItemBookCover = ({ item,  }) => {
  return (
    <TouchableOpacity onPress={null} style={AppStyle.screens.item}>
      <Image
        resizeMode="cover"
        source={{ uri: item.img }}
        style={AppStyle.text.image}
      />
      {/* <Text style={AppStyle.text.notes}>{item.title}</Text>
      <Text style={AppStyle.text.notes}>Author: {item.author}</Text> */}
      {/* <Text style={AppStyle.text.notes}>Date: {item.publication_date}</Text> */}
    </TouchableOpacity>
  );
};
export default ItemBookCover;
