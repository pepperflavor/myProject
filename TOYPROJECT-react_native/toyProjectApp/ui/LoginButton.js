import { Pressable, StyleSheet, View } from "react-native";


// 여기서 navigatioin으로  페이지 이동시켜줘야하나?
function LoginButton(props){
    return (
      <View style={styles.container}>
        <Pressable
          android_ripple={{ color: "#dddddd" }}
          onPress={({ pressed }) => (pressed ? "" : "")}
          style={({ pressed }) => {
            pressed && styles.pressedItem;
          }}
        >
          <Text style={styles.loginButton}>Login</Text>
        </Pressable>
      </View>
    );
}

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#210644", // 로그인 버튼 색
    color: "white",
  },
  loginButton: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});