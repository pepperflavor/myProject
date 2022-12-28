/*  캘린더 라이브러리
    =========================================================
    npm i react-native-calendars
    =========================================================
*/

/*


캘린더 기본 포멧
====================================
import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet } from "react-native";

function CalendarView() {
  return (
    <Calendar style={styles.calendar} />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  }
});

export default CalendarView;
=====================================
*/


/* 
    format() : js 내장 함수로 문자열
    문자열 포매팅은 공통 문자열 안에 치환자를 사용해서 원하는 변수 값으로 갈아 끼워서 원하는 최종 문자열을 만드는 것을 말합니다. 따라서 템플릿으로 사용하는 문자열 안에 변수의 역할을 하는 치환자를 끼워넣어 공통 문자열을 정의하고, 문자열 포매팅 메서드는 변수로 받은 파라메터 값들을 템플릿 문자열의 치환자 사용파라메터로 대입해서 변수처럼 적용할 치환자를 가장 단순한 방식의 문자열 포맷 메서드는 다음과 같이 정의합니다.
*/

/*
    드롭바 라이브러리

    설치명령어
    ==============================================================================
        $ npm install react-native-dropdown-select-list
    ==============================================================================
*/

/*  드로우어 네비게이터설치 
=========================================================
  npm install @react-navigation/drawer
=========================================================

// Navigation 설치
npm install @react-navigation/native

// 의존성 설치
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

npx pod-install

*/

/*
  ,
    "packagerOpts": {
      "sourceExts": [ "js", "json", "ts", "tsx", "jsx", "vue"],
      "config" : "metro.config.js"
    }
*/


/*
    firebase에 연결하기
    
    코드 doc에보면 로그인, 회원가입, 등등 여러 옵션 api있음
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY] 이 주소로 요청을 전송하는데
    여기에서 API_KEY는 자신걸 넣어줘야한다. 이 키는 프로젝트->플젝설정에 가면 web API에 잇다
*/


/*
  정리하자면 느낌표 두개(!!) 연산자는 확실한 논리결과를 가지기 위해 사용합니다.
  예를 들어 정의되지 않은 변수 undefined 값을 가진 내용의 논리 연산 시에도 확실한 true / false를 가지도록 하는게 목적입니다.
*/
/*
    
  var a;
  console.log("a    :: " + (a));
  console.log("!a   :: " + (!a));
  console.log("!!a  :: " + (!!a));
  
  var b = true;
  console.log("b    :: " + (b));
  console.log("!b   :: " + (!b));
  console.log("!!b  :: " + (!!b));

  var c = null;
  console.log("c    :: " + (c));
  console.log("!c   :: " + (!c));
  console.log("!!c  :: " + (!!c));

====================================================

결과

a    :: undefined
!a   :: true
!!a  :: false

b    :: true
!b   :: false
!!b  :: true

c    :: null
!c   :: true
!!c  :: false
*/