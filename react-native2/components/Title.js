import { Text, StyleSheet } from "react-native";

// children 이 태그 사이의 값
function Title({children}){
    return <Text style={styles.title}>{children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 12, // 사방 여백
  },
});