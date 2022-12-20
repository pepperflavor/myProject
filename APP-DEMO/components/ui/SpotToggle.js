import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

function SpotToggle(){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    
  return (
    <View style={styles.box}>
        <View style={styles.container}>
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
    </View>
  );

}
export default SpotToggle;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    box:{
        padding: 8,
    }
  });