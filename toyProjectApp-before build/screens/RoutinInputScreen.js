import { useCallback, useEffect, useState } from "react";
import {  TextInput, View, StyleSheet, Alert, Button, Text, ImageBackground } from "react-native";
import { Modal } from "react-native";


import PrimaryButton from "../ui/PrimaryButton";
import CalenderIconButton from "../ui/CalenderIconButton";
import { useFocusEffect } from "@react-navigation/native";


function RoutinInputScreen({navigation, route }){
  //navigation 으로 넘겨받은 객체 쓰기
  const getInputDate = route.params?.date; // 받은 값이 있는지 확인 후 있으면 inputDate을 꺼내줌
  console.log("넘겨받은 날짜" + getInputDate);
  const isGetDate = !!getInputDate; // getInputDate 값이 있 : true 없는지 boolean으로 반환
  console.log("dddddddd" + route.params);
  for (const key in route) {
    console.log("key", route.params);
  }

  useEffect(() => {
    console.log("업데이트 될때 실행");
     if (isGetDate) {
       setEnteredDate(getInputDate);
     }
  }, [getInputDate]);

  //=============== 입력창 내용들 관련 ====================
  const [enteredRoutine, setEnteredRoutine] = useState(""); // 운동명
  const [enteredAmount, setEnteredAmount] = useState(""); // 무게
  const [enteredSets, setEnteredSets] = useState(""); // 셋트개수
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredDate, setEnteredDate] = useState(""); // 입력할 날짜

  function routineInputHandler(inputtitle) {
    setEnteredRoutine(inputtitle);
  }

  function amountInputHandler(inputAmount) {
    setEnteredAmount(inputAmount);
  }

  function setsInputhandler(inputSets) {
    setEnteredSets(inputSets);
  }

 
  //=============== 입력창 내용들 관련 끝

  //=============== 날짜 선택 달력 관련=========

  //=============== 날짜 선택 달력 관련=========

  function resetInputHandler() {
    setEnteredRoutine(" ");
    setEnteredAmount(" ");
    setEnteredSets(" ");
    setEnteredBody(" ");
    setEnteredDate(" ");
  }

  function submitHandler() {}

  // Alert 설정
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

  function headerButtonPressHandler() {
    console.log("PRESSED!!!");
  }

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight : ()=>{
  //       // 아이콘 설정
  //       return <CalenderIconButton icon="calendar-outline" color='white' onPress={headerButtonPressHandler}></CalenderIconButton>
  //     },
  //   });
  // }, [navigation, headerButtonPressHandler])

  // useFocusEffect(
  //   useCallback(()=>{
  //     console.log('이 화면 보는중');
  //     console.log("날짜 "+ enteredDate);
  //     return ()=>{
  //       console.log('달력 모달 보는중');
  //     };
  //   },[]),

  return (
    <>
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/06/30/21/02/muscle-2459720_960_720.jpg",
        }}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}
      >
        <View style={styles.routineContainer}>
          <View>
            <View>
              <Text style={styles.inputTitle}>운동명 : </Text>
              <TextInput
                style={styles.numberInput}
                autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
                autoCorrect={false}
                onChangeText={(inputtitle) => routineInputHandler(inputtitle)}
                value={enteredRoutine}
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>무게(Kg): </Text>
              <TextInput
                style={styles.numberInput}
                keyboardType="number-pad" // 입력키 제한시키기
                autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
                autoCorrect={false}
                onChangeText={(enteredText) => amountInputHandler(enteredText)}
                value={enteredAmount}
                maxLength={3}
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>SETS : </Text>
              <TextInput
                style={styles.numberInput}
                keyboardType="number-pad" // 입력키 제한시키기
                autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
                autoCorrect={false}
                onChangeText={(inputSets) => setsInputhandler(inputSets)}
                value={enteredSets}
                maxLength={3}
              />
            </View>

            {/* 운동 부위 drop바 하고싶다 option */}
            {/* <TextInput
          style={styles.numberInput}
          placeholder="부위"
          autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
          autoCorrect={false}
          onChangeText={(enteredText) => routineInputHandler(enteredText)}
          value={enteredBody}
          maxLength={5}
        /> */}
          </View>

          <Text style={styles.inputDate}>{enteredDate}</Text>

          {/* 날짜 */}
          <CalenderIconButton
            setEnteredDate={setEnteredDate}
            icon="calendar"
            color="white"
            onPress={() => {
              navigation.navigate("Calendar"), [enteredDate, navigation];
            }}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}></View>
            <PrimaryButton onPress={() => navigation.navigate("MyPage")}>
              입력하기
            </PrimaryButton>
            <View style={styles.buttonContainer}></View>
            <PrimaryButton onPress={() => navigation.navigate("MyPage")}>
              취소
            </PrimaryButton>
            <View style={styles.buttonContainer}></View>
          </View>
        </View>
      </ImageBackground>
    </>
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
    width: 200,
    height: 40,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputTitle: {
    fontWeight: "bold",
    fontSize: 12,
    color: "beige",
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
  inputDate: {
    width: 200,
    height: 40,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  rootScreen: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    opacity: 0.75,
  },
});

