import { useState } from 'react';
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import CalendarModal from './screens/CalendarModal';
import RoutinInputScreen from './screens/RoutinInputScreen';

export default function App() {

  //로그인 관련
  const [isLogin, setIsLogin] = useState(false);

  let mainScreen = <RoutinInputScreen />;
  let calendarScreen = <CalendarModal/>

  return (
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {calendarScreen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {},

  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    marginTop: '30%',
    opacity: 0.15,
  },
});
