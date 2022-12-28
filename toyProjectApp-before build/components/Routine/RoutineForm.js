import { useState } from 'react';
import {  TextInput, View, StyleSheet, Alert, Button } from "react-native";



function RoutineForm(){
    const [enteredRoutine, setEnteredRoutine] = useState(''); // 운동명
    const [enteredAmount, setEnteredAmount] = useState(" "); // 무게
    const [enteredSets, setEnteredSets] = useState(" "); // 셋트개수
    const [enteredDate , setEnteredDate] = useState(''); // 입력할 날짜

    // const { 
    //     routineTitle : enteredRoutine,
    //     amount : enteredAmount,
    //     sets : enteredSets,
    //     routinedate : enteredDate,
    // } = cre


    function updateInputHandler(inputType, inputValue){
        switch (inputType) {
            case value:
                
                break;
        
            default:
                break;
        }

    }

    return(
        <View style={styles.routineContainer}>
        <View>
          <View>
            <Text style={styles.inputTitle}>운동명 : </Text>
            <TextInput
              style={styles.numberInput}
              autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
              autoCorrect={false}
              onChangeText={routineInputHandler}
              value={enteredRoutine}
            />
          </View>
  
          <View>
            <Text style={styles.inputTitle}>무게 : </Text>
            <TextInput
              style={styles.numberInput}
              keyboardType="number-pad" // 입력키 제한시키기
              autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
              maxLength={3}
            />
            <Text style={styles.inputTitle}>Kg</Text>
          </View>
  
          <View>
            <Text style={styles.inputTitle}>SETS : </Text>
            <TextInput
              style={styles.numberInput}
              keyboardType="number-pad" // 입력키 제한시키기
              autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
              autoCorrect={false}
              onChangeText={setsInputhandler}
              value={enteredSets}
              maxLength={2}
            />
            <Text style={styles.inputTitle}>Set</Text>
          </View>
  
          {/* 운동 부위 drop바 하고싶다 option */}
          <TextInput
            style={styles.numberInput}
            placeholder="부위"
            autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
            maxLength={5}
          />
        </View>
  
        {/* 날짜 */}
        <CalenderIconButton></CalenderIconButton>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={setEnteredNumber}>입력</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>취소</PrimaryButton>
          </View>
        </View>
      </View>
    );
}

export default RoutineForm;

const styles = StyleSheet.create({
    routineContainer: {
      marginTop: 100,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: "#4e0329",
      borderRadius: 8,
      elevation: 10, // 안드로이드 전용 속성
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
      //중앙정령 관련 속성
      justifyContent: "center",
      alignItems: "center",
    },
  
    numberInput: {
      width: 120,
      height: 50,
      fontSize: 32,
      borderBottomColor: "#ddb52f",
      borderBottomWidth: 2,
      color: "#ddb52f",
      marginVertical: 10,
      fontWeight: "bold",
      textAlign: "center",
    },
    inputTitle: {
      fontWeight: "bold",
      fontSize: 12,
      color: 'beige',
    },
    userInputContainer: {},
  
    buttonsContainer: {
      flexDirection: "row",
    },
    buttonContainer: {
      flex: 1,
    },
    dateModal: {
      flex: 1,
    },
  });
  
  