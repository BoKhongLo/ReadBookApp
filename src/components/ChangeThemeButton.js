import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const ChangeThemeButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
        trackColor={{false: '#d2d3db', true: '#121212'}}
        thumbColor={isEnabled ? 'white' : '#121212'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
  )
}

export default ChangeThemeButton;