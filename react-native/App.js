import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, FlatList } from "react-native";

import GoalItem from './components/GoalItems'
import GoalInput from "./components/GoalInput";

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);

  // 입력받은 목표 저장하기
  function addGoalHandler(enteredGoalText){
    // 상태업데이트 함수에 함수를 전달해 새상태를 얻도록 react에서 자동으로 호출하는 함수
    // 매개변수의 값(이전상태의 데이터)는 React가 자동으로 준다. 업데이트 함수로 전달된 함수가 호출될때
    setCourseGoals((preCourseGoals) => [...preCourseGoals, {text: enteredGoalText, key : Math.random().toString()}]);
    console.log(courseGoals);
  }

  function deleteGoalHandler(id){
    console.log('delete !!!');
    setCourseGoals((preCourseGoals)=>{
      return preCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        {/*  alwaysBounceVertical={false} 스크롤할 내용이 충분하지 않으면 튀어오르지 않음 */}
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        >
          <Text>List of goals...</Text>

          {/* {courseGoals.map((goal) => (
          ))} */}
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
