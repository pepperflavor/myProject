import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

// CATEGORIES[] 안에 색코드와 국가명을 뽑아와야하기 때문에
function CategoryGridTile({title, color, onPress}){
    return (
      <View style={[styles.gridItem, { backgroundColor: color }]}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={onPress}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.itemText}>{title}</Text>
          </View>
        </Pressable>
      </View>
    );
}
export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black", // ios에서 그림자 만들어주는 옵션
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", // 현재 OS를 나타내는 문자열 값을 반환함
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor : 'white'
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText : {
    fontWeight : 'bold'

  }
});