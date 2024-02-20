import { StyleSheet, Platform } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const screens = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#EEEEEE",
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
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 10,
  },
  contentLayout: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  columnWrapper: {
    justifyContent: "space-around",
    paddingBottom: 10,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 8,
    borderRadius: 15,
  },
});

export default screens;
