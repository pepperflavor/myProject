import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "./../ui/PrimaryButton";


function StartGameScreen(props){
  
    const [enteredNumber, setEnteredNumber] = useState('');

      function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
      }
    // // 경고창
    // const numberAlert = () => {
    //   Alert.alert(
    //     "범위안의 숫자를 적어주세요.",
    //     "범위 : 1 ~ 99",
    //     [{ text: "확인", onPress: () => {} }],
    //     { onDismiss: () => {} }
    //   );
    // };


    function resetInputHandler(){
      setEnteredNumber(' ');
    }

    function confirmInputHandler(){
      const chosenNumber = parseInt(enteredNumber); //숫자를 문자열로 변환시켜줌
      console.log(chosenNumber);
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert(
          "유효하지 않은 숫자입니다.",
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          placeholder="숫자"
          keyboardType="number-pad" // 입력키 제한시키기
          autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={setEnteredNumber}>Rest</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
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
    justifyContent : 'center',
    alignItems : 'center',
  },

  numberInput: {
    width: 100,
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical : 10,
    fontWeight : 'bold',
    textAlign : 'center',
  },
  buttonsContainer : {
    flexDirection: 'row',
  },
  buttonContainer : {
    flex : 1
  }
});