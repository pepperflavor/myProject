import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

import AuthContent from '../../components/Auth/AuthContent';
import LoadingOverlay from '../../ui/Auth/LoadingOverlay';
import { login } from '../../util/auth';
import { Alert } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../store/auth-context';



function LoginScreen() {

  const [isAuthCreateUser, setIsAuthCreateUser] = useState(false);

  const authCtx = useContext(AuthContext)

  async function loginHandler({email, password}){
    setIsAuthCreateUser(true)
    try {
      
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('로그인 실패!', '입력값을 확인해주세요')
    }
    setIsAuthCreateUser(false)
  }

    // 유저생성중인거 알려주기
    if(isAuthCreateUser){
    return <LoadingOverlay message="로그인 하는 중..."/>
    }


  return (
    <>
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
    <ImageBackground
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage} 
        source={{uri : 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>

      <AuthContent isLogin onAuthenticate={loginHandler}/>
    </ImageBackground>
    </LinearGradient>
    </>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  rootScreen : {
    flex : 1,
  },

  backgroundImage : {
    opacity : 0.15
  }
});