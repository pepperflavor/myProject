import { useState } from "react";
import {  TextInput, View, StyleSheet, Alert, Button, Pressable } from "react-native";
import { Modal } from "react-native";

import InputDateModal from "./InputDateModal";
import CalendarModal from "./CalendarModal";

import PrimaryButton from "../components/PrimaryButton";
import LoginButton from "../ui/LoginButton";

function RoutinInputScreen(props){


  //=============== 입력창 내용들 관련 ====================
  const [enteredRoutine, setEnteredRoutine] = useState(''); // 운동명
    const [enteredNumber, setEnteredNumber] = useState(" "); // 갯수
    const [enteredSets, setEnteredSets] = useState(" "); // 셋트개수
    const [enteredDate , setEnteredDate] = useState(''); // 입력할 날짜


    function routineInputHandler(enteredText) {
      setEnteredRoutine(enteredText);
    }

    function numberInputHandler(enteredText) {
      setEnteredNumber(enteredText);

    }

 
    function setsInputhandler(){

    }
    function dateInputHandler(){
      // 넘겨준 날짜값 받아오기
      // setEnteredDate(props.inputDate);
    }
  //=============== 입력창 내용들 관련 끝



//=============== 날짜 선택 달력 관련=========
    const [enterShowModal, setEnterShowModal] = useState(false)

    function ShowDateModal(){
      setEnterShowModal(true)
    }

    function closeModal(){
      setEnterShowModal(false);
    }
//=============== 날짜 선택 달력 관련=========



    function resetInputHandler() {
      setEnteredNumber(" ");
    }

        function confirmInputHandler() {
          const chosenNumber = parseInt(enteredNumber); //숫자를 문자열로 변환시켜줌
          console.log(chosenNumber);
          if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 999) {
            Alert.alert(
              "유효하지 않은 입력입니다.",
              "1 ~ 99사이의 숫자를 입력하십시오",
              [
                {
                  text: "확인",
                  style: "destructive",
                  onPress: resetInputHandler,
                },
              ]
            );
            return;
          }

          props.onPickNumber(chosenNumber);
        }

  return (
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
        <Pressable onPress={ShowDateModal}>
          <LoginButton>날짜 선택</LoginButton>
        </Pressable>
        {/* 달력모달창 */}
        {enterShowModal ? (
          <CalendarModal
            enterShowModal={enterShowModal}
            setEnterShowModal={setEnterShowModal}
            closeModal={closeModal}
            setEnteredDate={setEnteredDate}
          />
        ) : (
          <Text style={styles.numberInput}>{enteredDate}</Text>
        )}
      </View>

      {/* 날짜 */}
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

export default RoutinInputScreen;

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

