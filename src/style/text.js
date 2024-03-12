import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const text = StyleSheet.create({
  heading1: { fontSize: 30, fontWeight: "bold" },
  heading2: { fontSize: 25, fontWeight: "500" },
  paragraph: {fontSize:18},
  notes: { fontSize: 18, color: "#6C757D" },
  image: {
    width: 180,
    height: 260,
    borderRadius: 15,
  },
  imageDetail: {
    width: windowWidth,
    height: windowHeight * 0.35,
  },
  
});

export default text;