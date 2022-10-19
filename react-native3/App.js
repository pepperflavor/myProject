import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

// navigator 관련된 태그가 아닌게 들어있어도 터짐^^
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
// navigator 는 React Navigation이 제공하는  {navigation}라는 특별한 프로퍼티를 사용할 수 있다. 화면으로 사용되는 컴포넌트에 props로 넣어줄 수 있다.

const styles = StyleSheet.create({
  container: {

  },
});
