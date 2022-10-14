import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        console.log(enteredText);
        setEnteredGoalText(enteredText);
      }

      //app.js 에도 있지만 컴포넌트가 달라서 충돌하진 않는다
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(' ');
    }

    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          // 함수() 이렇게 괄호를 추가하면 파싱되는 즉시 실행
          value={enteredGoalText} // vlaue로 바인딩해줘야 보이는 곳에서도 빈칸으로 초기화된다
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});