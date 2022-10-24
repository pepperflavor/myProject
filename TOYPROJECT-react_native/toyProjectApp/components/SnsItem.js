import { Pressable, View, StyleSheet } from "react-native";

// sns 페이지에 보여줄 컴포넌트
function SnsItem({title}){

    // db에서 데이터 받아오기
    return (
      <View style={styles.snsContainer}>
        <Pressable>
          <View>
            <Text>{title}</Text>
          </View>
        </Pressable>
      </View>
    );
}

export default SnsItem;

const styles = StyleSheet.create({
  snsContainer: {
    borderRadius: 12,
    width: 200,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    //중앙정령 관련 속성
    justifyContent: "center",
    alignItems: "center",
  },
});