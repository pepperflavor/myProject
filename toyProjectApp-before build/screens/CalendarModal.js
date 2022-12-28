import React, { useContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { Calendar } from "react-native-calendars";
import { StyleSheet, View } from "react-native";

import Navibar from "./Navibar";
import PrimaryButton from './../ui/PrimaryButton';

function CalendarModal({ navigation }) {
  const posts = [
    {
      id: 1,
      title: "제목입니다.",
      body: "Upper body",
      date: "2022-02-26",
    },
    {
      id: 2,
      title: "제목입니다.",
      body: "Lower body",
      date: "2022-02-27",
    },
  ];

  const markedDates = posts.reduce((acc, current) => {
    // 날짜 정보 형식 정해주기
    const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});

  const [selectedDate, setSelectedDate] = useState(" ");

  // 날짜 정보 "yyyy-MM-dd" 형태로 정의된 selectedDate 값 넘겨주기
  const markedSelectedDates = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  console.log("@@@@ Calendar" + selectedDate);
  console.log(typeof selectedDate);

  function cancelHandler() {
    navigation.goBack();
  }

  function pressOkay() {
    navigation.goBack();
  }



 


  return (
    <>
      <View style={styles.calendarContainer}>
        <Calendar
          style={styles.calendar}
          markedDates={markedSelectedDates}
          theme={{
            selectedDayBackgroundColor: "#009688",
            arrowColor: "#009688",
            dotColor: "#009688",
            todayTextColor: "#009688",
          }}
          onDayPress={(day) => setSelectedDate(day.dateString)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <PrimaryButton
              onPress={() =>
                navigation.navigate("RoutineInput", { date : selectedDate })
              }
            >
              입력하기
            </PrimaryButton>
          </View>
          <View style={styles.buttons}>
            {/* 뒤로가기 */}
            <PrimaryButton onPress={cancelHandler}>취소</PrimaryButton>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  pressedButton: {
    backgroundColor: "white",
    opacity: 0.5,
    width : 80,
  },
  buttonContainer: {
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width : '100%',
    height : 50,
  },
  buttons : {
    flex:1,
  }
});



export default CalendarModal;
