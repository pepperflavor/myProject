import { Feather } from '@expo/vector-icons/build/Icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, StyleSheet, View, Text, Button } from 'react-native';

import FlatButton from '../ui/FlatButton';
import IconButton from '../ui/IconButton';
import AuthForm from './AuthForm';
import AuthJoinForm from './AuthJoinForm ';

// 여기에 비밀번호 등 제한사항 넣기

function AuthContent({ isLogin, onAuthenticate }) {

  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if(isLogin){
      // stack 등록한 화면으로 이동
      navigation.replace('Signup');
    }else{
      navigation.replace('Login');
    }
  }

  function mapHandler(){
    navigation.replace('MainMap');
  }

  // 로그인할때 바꾸기
  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('잘못된 입력입니다.', '입력값 및 양식을 확인해주세요');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      {/* 로그인 true */}
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <Button onPress={mapHandler} title='Show Map'></Button>
      <View style={styles.buttons}>
        <FlatButton onPress={mapHandler}>spot추가하기</FlatButton>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? '계정이 없으신가요?' : '로그인 하러가기'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "black",
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    marginTop: 8,
  },  
  ment: {
    fontWeight: 'bold',
    color : "white",
    fontSize : 30,
  },
});
