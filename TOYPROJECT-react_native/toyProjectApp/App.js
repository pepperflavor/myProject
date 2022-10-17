import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  //로그인 관련
  const [isLogin, setIsLogin] = useState(false)



  return (
    <View style={styles.appcontainer}>
      <Button title='Login' onPress={''}/>
      <Button title='Join Us!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor : '#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button : {

  },
});
