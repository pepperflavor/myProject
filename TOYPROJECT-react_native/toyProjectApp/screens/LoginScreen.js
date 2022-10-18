
// import { TextInput, View, StyleSheet } from "react-native";
// import PrimaryButton from "../components/PrimaryButton";

// function LoginScreen() {
//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         style={styles.numberInput}
//         placeholder="운동명"
//         autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
//         autoCorrect={false}
//         onChangeText={numberInputHandler}
//         value={enteredNumber}
//         maxLength={5}
//       />
//       <TextInput
//         style={styles.numberInput}
//         placeholder="Amount"
//         keyboardType="number-pad" // 입력키 제한시키기
//         autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
//         autoCorrect={false}
//         onChangeText={numberInputHandler}
//         value={enteredNumber}
//         maxLength={5}
//       />
//       {/* 운동 부위 option */}
//       <TextInput
//         style={styles.numberInput}
//         placeholder="부위"
//         keyboardType="number-pad" // 입력키 제한시키기
//         autoCapitalize="none" // 첫글자 자동으로 대문자가 되는것 방지해줌
//         autoCorrect={false}
//         onChangeText={numberInputHandler}
//         value={enteredNumber}
//         maxLength={5}
//       />

//       {/* 날짜 입력 */}


//       <View style={styles.buttonsContainer}>
//         <View style={styles.buttonContainer}>
//           <PrimaryButton onPress={setEnteredNumber}>입력</PrimaryButton>
//         </View>
//         <View style={styles.buttonContainer}>
//           <PrimaryButton onPress={confirmInputHandler}>취소</PrimaryButton>
//         </View>
//       </View>
//     </View>
//   );
// }

// export default LoginScreen;


// const styles = StyleSheet.create({
//   inputContainer: {
//     marginTop: 100,
//     marginHorizontal: 24,
//     padding: 16,
//     backgroundColor: "#4e0329",
//     borderRadius: 8,
//     elevation: 10, // 안드로이드 전용 속성
//     shadowColor: "black",
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//     shadowOpacity: 0.25,
//     //중앙정령 관련 속성
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   numberInput: {
//     width: 100,
//     height: 50,
//     fontSize: 32,
//     borderBottomColor: "#ddb52f",
//     borderBottomWidth: 2,
//     color: "#ddb52f",
//     marginVertical: 10,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   buttonsContainer: {
//     flexDirection: "row",
//   },
//   buttonContainer: {
//     flex: 1,
//   },
// });
