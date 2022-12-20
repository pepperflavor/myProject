
import { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import AuthJoinForm from '../components/Auth/AuthJoinForm ';
import {createUser} from '../util/auth'

function SignupScreen() {
  // 회원가입요청 백으로 보내기
  function signupHandler({email, password}){
    createUser(email, password);
  }


  return (    
  <View style={styles.loginContainer} >
    <Text style={styles.ment}>반가워요 새로운 대원님!</Text>
    <AuthJoinForm onAuthenticate={signupHandler}/>
  </View>)
}

export default SignupScreen;

const styles= StyleSheet.create({
  loginContainer:{
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  ment: {
    fontWeight: 'bold',
    color : "white",
    fontSize : 30,
    paddingTop: 50,
  },
})
