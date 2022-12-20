import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


function LoginScreen() {
  return (
    <View style={styles.loginContainer} >
      <Text style={styles.ment}>돌아오셔서 기뻐요!</Text>
      <AuthContent isLogin />
    </View>
  )
}

export default LoginScreen;

const styles= StyleSheet.create({
  loginContainer:{
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginVertical: 7,
  },
  ment: {
    fontWeight: 'bold',
    color : "white",
    fontSize : 30,
    paddingTop: 50,
  },
})
