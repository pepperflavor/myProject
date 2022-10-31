import { Pressable, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

// 여기서 navigatioin으로  페이지 이동시켜줘야하나?
function SnsButton({onPress, title}) {
  const navigation = useNavigation();

  function routinePressHandler(){
      navigation.navigate('RoutineInput');
  }


  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={routinePressHandler}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
      <LinearGradient
        colors={[
          "#f54242",
          "#f5a442",
          "#f5d142",
          "#41d95d",
          "#368dff",
          "#210644",
        ]}
        style={styles.container}
      >
          <Text style={styles.loginButton}>{title}</Text>
      </LinearGradient>
        </Pressable>
    </View>
  );
}

export default SnsButton;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 6,
    color: "white",
    height : 35,
    marginBottom : 25,
    // backgroundColor: "#210644", // 로그인 버튼 색
  },
  loginButton: {
    color: "white",
    padding: 8,
    textAlign: 'center'
  },
  pressedItem: {
    opacity: 0.5,
  },
});
