import { Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// 여기서 navigatioin으로  페이지 이동시켜줘야하나?
function SnsButton(props) {
  return (
    <View style={styles.container}>
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
        <Pressable
          android_ripple={{ color: "#dddddd" }}
          onPress={({ pressed }) => (pressed ? "" : "")}
          style={({ pressed }) => {
            pressed && styles.pressedItem;
          }}
        >
          <Text style={styles.loginButton}>Share Routine!</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

export default SnsButton;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 6,
    color: "white",
    // backgroundColor: "#210644", // 로그인 버튼 색
  },
  loginButton: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
