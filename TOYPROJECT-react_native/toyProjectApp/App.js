import { useState } from 'react';
import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import CalendarModal from './screens/CalendarModal';
import RoutinInputScreen from './screens/RoutinInputScreen';
import LoginScreen from './screens/LoginScreen';
import SnsOverviewScreen from './screens/SnsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {

    let webviewRef = useRef();

    const handlSetRef = (_ref) => {
      webviewRef = _ref;
    };

    const handleEndLoading = (e) => {
      console.log("handleEndLoading");
      webviewRef.postMessage("로딩 완료시 webview로 정보를 보내는 곳");
    };




  //로그인 관련
  const [isLogin, setIsLogin] = useState(false);

  let mainScreen = <RoutinInputScreen />;
  let calendarScreen = <CalendarModal/>
  let loginScreen = <LoginScreen/>

  return (
    <>
      <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {/* 로그인 검증구현후 {isLogin ? loginScreen : calendarScreen} */}
          {loginScreen}
          <WebviewContainer
            webviewRef={webviewRef}
            handleSetRef={handleSetRef}
            handleEndLoading={handleEndLoading}
          />
        </ImageBackground>
      </LinearGradient>
    </>
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


      {
        /* navigation 등록  */
      }
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     {/* <Stack.Screen name="SnsScreen" component={SnsOverviewScreen} /> */}
      //     <Stack.Screen name="CalendarScreen" component={CalendarModal} />
      //     <Stack.Screen name="LoginScreen" component={LoginScreen} />
      //   </Stack.Navigator>
      // </NavigationContainer>;