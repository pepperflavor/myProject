
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";


function GoalItem(props){
    return (
      <Pressable onPress={props.onDeleteItem}>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Pressable>
    );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  // 스타일 상속이 이뤄지지 않기 때문에 view에 넣은 color: "white", 가 안먹힌것 그래서 따로 글자색에 관한 설정을 해줘야한다
  goalText: {
    color: "white",
  },
});

export default GoalItem;