import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const ChangeThemeButton = ({ setIsEnabled }) => {
  const [isEnabled, setIsEnabledLocal] = useState(false);
  const toggleSwitch = () => {
    setIsEnabledLocal((previousState) => !previousState);
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <Switch
      trackColor={{ false: "#d2d3db", true: "#666666" }}
      thumbColor={isEnabled ? "white" : "#121212"}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
export default ChangeThemeButton;