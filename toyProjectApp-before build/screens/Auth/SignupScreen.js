import { id } from 'date-fns/locale';
import { useContext, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';



import AuthContent from '../../components/Auth/AuthContent';
import {createUser} from '../../util/auth'
import LoadingOverlay from './../../ui/Auth/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from './../../store/auth-context';


function SignupScreen() {

 const [isAuthCreateUser, setIsAuthCreateUser] = useState(false);
 
 const authCtx = useContext(AuthContext);

  async function signupHandler({email, password}){
    setIsAuthCreateUser(true)
    try {
      const token =  await createUser(email, password);
      authCtx.authenticate();
    } catch (error) {
      Alert.alert(
        '계정생성 실패', 
        '입력값을 확인해주세요'
        );
    }
    setIsAuthCreateUser(false)
  }

    // 유저생성중인거 알려주기
    if(isAuthCreateUser){
    return <LoadingOverlay message="유저 생성중..."/>
    }

  return (
    <>
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
     <ImageBackground
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage} 
        source={{uri : 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>

          <AuthContent onAuthenticate={signupHandler}/>
       </ImageBackground>
     </LinearGradient>
     </>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
  rootScreen : {
    flex : 1,
  },

  backgroundImage : {
    opacity : 0.15
  }
});