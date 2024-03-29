import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React from 'react'
import ItemBookCover from "./ItemBookCover";
import AppStyle from "../style";

const renderBook = (data,darkModeEnabled,) => {
    return (
        <>
        <FlatList
            data={data}
            renderItem={({ item }) => <ItemBookCover item={item} darkModeEnabled={darkModeEnabled}/>}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={AppStyle.screens.columnWrapper}
        />
        </>
    );
};

export default renderBook