import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from 'react';

import GameScreen from './screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber]= useState('');

  function pickedNumberHandler(pickedNumber){
    //const pickedNumber = Math.random();
    setUserNumber(pickedNumber);
  }

  const answerNumber = 1;
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber == answerNumber) {
    screen = <StartGameScreen />;
  }
  
console.log("app.js  userNumber " + userNumber);

  return (
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen : {
    flex : 1,
  },

  backgroundImage : {
    opacity : 0.15
  }
});