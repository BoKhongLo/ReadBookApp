import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const screens = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 50 : 0,
    flex:1
  },
  header: {
    height: windowHeight * 0.08,
    width: windowWidth - 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  content: {
    flex: 1,
    width: windowWidth,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 10,
  },
  contentLayout: {
    marginTop: 30,
    borderRadius:20
  },
  columnWrapper: {
    justifyContent: "space-around",
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 15,
  },
  imgContaiber: {
    alignItems: "center",
    zIndex: 1,
    marginTop: -180,
  },
  informationContainer:{
    marginHorizontal:10,
    marginVertical:10
  }
});

export default screens;
