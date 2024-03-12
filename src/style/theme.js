import { StyleSheet, Platform } from "react-native";

let backgroundDark = "#121212";
let backgroundLight = "#f2f2f2";
let contentBackgroundDark = "#1a1a1a";
let contentBackgroundLight = "#ffffff";
let textDark = "#ffffff";
let textLight = "#000000";

const getTheme = (isEnabled) => {
  if (isEnabled) {
    return StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        color: textDark,
      },
      contentBackground: {
        backgroundColor: contentBackgroundDark,
      },
      background:{
        backgroundColor: backgroundDark,
      }
    });
  } else {
    return StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundLight,
      },
      text: {
        color: textLight,
      },
      contentBackground: {
        backgroundColor: contentBackgroundLight,
      },
      background:{
        backgroundColor: backgroundLight,
      }
    });
  }
};

export default getTheme;