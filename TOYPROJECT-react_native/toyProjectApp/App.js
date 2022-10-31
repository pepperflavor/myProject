import { useState, useContext } from 'react';
import { StyleSheet, ImageBackground, StatusBar, Image, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import CalendarModal from './screens/CalendarModal';
import RoutinInputScreen from './screens/RoutinInputScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import SnsOverviewScreen from './screens/SnsOverviewScreen';
import BasicMenuScreen from './screens/BasicMenuScreen';
import MenuOverviewScreen from './screens/MenuOverviewScreen';
import MyFavoritesScreen from './screens/MyFavoritesScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import WelcomeScreen from './screens/Auth/WelcomeScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import AuthContent from './components/Auth/AuthContent';
import MyRoutine from './screens/MyRoutine';

import IconButton from './ui/Auth/IconButton';
import SnsButton from './ui/SnsButton';
import ManageRoutine from './screens/ManageRoutine';
import RoutineContextProvider from './store/routine-context';
import FavoriteContextProvider from './store/context/favorites-context';
import SnsItem from './components/SnsItem';




  // App 컴포넌트 밖에서 설정해줘야함
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();


  const UserBottomTab = ({navigation})=>{
   
   // 안되는듯...
    function SnspressHandler(){
      navigation.navigate('SNS', {
        snsId : itemData.item.id,
        snsTitle : itemData.item.title,
        snsNickname : itemData.itemnick,
        snsAmount : itemData.item.amount,
        snsSets : itemData.item.sets,
        snsComment : itemData.item.comment,
        snsDate : itemData.item.date,
      })
  }

  
    return (
      <FavoriteContextProvider>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="MainCategoryScreen"
                        component={BasicMenuScreen}
                        options={{
                          title : 'Magazine',
                        }}/>
        <BottomTabs.Screen name='MyPage' component={MyRoutine} 
        options={{ 
          headerRight : () =>  <SnsButton title='ADD' />

        }}/>
        <BottomTabs.Screen name='SNS' component={SnsOverviewScreen} listeners={({navigation, route}) => ({tabPress : e => {SnspressHandler}})} />
          
      </BottomTabs.Navigator>
      </FavoriteContextProvider>
    )
  }





export default function App() {

  function AuthStack(){
    return(
      <Stack.Navigator
        screenOptions={{
          headerStyle : { backgroundColor : "black"},
          headerTintColor : 'white',
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    )
  }


  // 로그인 했을때 실행됨
  function AuthenticatedStack(){
    const authCtx = useContext(AuthContext);



    // function routinePressHandler(){
    //     navigation.navigate('RoutinInputScreen');
    // }

    return(
      <>
      <FavoriteContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle : { backgroundColor : "black"},
            headerTintColor : 'white',
            headerRight : ({ tintColor }) => (
              <IconButton 
              icon='exit' 
              color={tintColor} 
              size={24} 
              onPress={authCtx.logout}
              />
              ),
              // contentStyle : { backgroundColor :"#5e0acc" }
            }}>

              <Stack.Screen name='Health ZZang' component={UserBottomTab} options={{ animationEnabled : false}}/>
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen
                      name="MainCategoryScreen"
                      component={BasicMenuScreen}
                      options={{
                        title : 'HalthZZang Magazine',
                      }}
                      />
              <Stack.Screen name="BasicMenuOverview" component={MenuOverviewScreen}/>
              <Stack.Screen name="RoutineInput" component={RoutinInputScreen}/>
              <Stack.Screen name="ManageRoutine" component={ManageRoutine}/>
              <Stack.Screen name="Calendar" component={CalendarModal} options={{ presentation: 'modal'}}/>
              <Stack.Screen name="Favorites" component={MyFavoritesScreen}/>
           </Stack.Navigator>
        </FavoriteContextProvider>

      </>
    )
  }


  function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
          <NavigationContainer>
          { !authCtx.isAuthenticated && <AuthStack />}
          { authCtx.isAuthenticated && <AuthenticatedStack />}
        </NavigationContainer>
    );
  }
  

return (
        <>
      <StatusBar style="light"/>
            <AuthContextProvider>
                  <FavoriteContextProvider>
                    <Navigation/>
                  </FavoriteContextProvider>
            </AuthContextProvider>
        </>
  );
}

const styles = StyleSheet.create({
  container : {

  }
});

/*
              <RoutineContextProvider>
              </RoutineContextProvider>
*/

/*
              <RoutineContextProvider>
        </RoutineContextProvider>

      <FavoriteContextProvider>
      </FavoriteContextProvider>
*/

/*
      <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
      source={require("./assets/images/background.png")}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
      </ImageBackground>
      </LinearGradient>



                  <Stack.Screen name="CalendarScreen" component={CalendarModal} />
                  <Stack.Screen name="SnsScreen" component={SnsOverviewScreen} />

                  


                          // options={({ route, navigation })=>{
        //   const menuId = route.params.basicMenuId;
        //   return {
        //     title : menuId,
        //   }}}

                  /// 배경이미지 적용 시도
                  <ImageBackground source={{uri : 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>
</ImageBackground>


<Image source={{uri : 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>
</Image>

*/


/*
  Drawer 설정

  const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Magazine" component={BasicMenuScreen}/>
      <Drawer.Screen name="Favorites" component={MyFavoritesScreen}/>
    </Drawer.Navigator>
  )
}

*/

/*
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle : { backgroundColor : 'black'},
              headerTintColor : 'white',
              contentStyle : {
                backgroundColor : '#3f2f25'
              }
          }}>


            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
              <Stack.Screen
                  name="MainCategoryScreen"
                  component={BasicMenuScreen}
                  options={{
                    title : 'HalthZZang Magazine',
                  }}
                  />
              <Stack.Screen name="BasicMenuOverview" component={MenuOverviewScreen}/>
              <Stack.Screen name="RoutineInput" component={RoutinInputScreen}/>
              <Stack.Screen name="Favorites" component={MyFavoritesScreen}/>
          </Stack.Navigator>

           // 로그인 검증구현후 {isLogin ? loginScreen : calendarScreen} 

          </NavigationContainer>
*/