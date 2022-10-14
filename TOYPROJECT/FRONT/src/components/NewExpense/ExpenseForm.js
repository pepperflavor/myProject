import React, { useState } from "react";
import axios from "axios";

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredSet, setEnteredSet] = useState("");
    const [enteredBody, setEnteredBody] = useState("Upper Body");

    // option 값을 가져오려면 value key 값 주기
    // 입력 제목 저장
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    // 양 저장
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };

    // 세트개수
    const setChangeHandler = (event) => {
      setEnteredSet(event.target.value);
    }

    //상체 하체 부위 선택
    const setChangeBodyHandler = (event)=>{
      console.log(event.target.value);
      setEnteredBody(event.target.value)
    }

    // 날짜 저장
    const dateChangehandler = (event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
      // 기본자바스크립트 동작, submit하면 자동으로 페이지가 이동되는걸 막아준다 리액트라 페이지 리로딩이 되면 안되기 때문
        event.preventDefault(); 

        const RoutineData = {
          title : enteredTitle,
          amount : enteredAmount,
          set : enteredSet,
          body : enteredBody, 
          date : new Date(enteredDate)
        };
        console.log("상하체" + enteredBody);

        console.log(RoutineData);
        
        props.onAddRoutine(RoutineData);
        axios.post("http://localhost:3001/routine", [RoutineData]);

        // 입력받은 값 전달해주기
        //props.onSaveRoutineData(RoutineData);
        setEnteredAmount(" ");
        setEnteredTitle(" ");
        setEnteredDate(" ");
        setEnteredBody(" ")

    };

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label className="section"> 운동명 </label>
            <input
              type="text"
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label className="section"> Amount </label>
            <input
              type="number"
              min='1'
              step='1'
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label className="section"> Set </label>
            <input
              type="number"
              min='1'
              step='1'
              value={enteredSet}
              onChange={setChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label className="section"> Body </label>
            <select  onChange={setChangeBodyHandler}>
              <option key="Upper Body" value="Upper Body">Upper Body</option>
              <option key="Lower Bod" value="Lower Body">Lower Body</option>
            </select>
          </div>
          <div className="new-expense__control">
            <label className="section"> Date </label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangehandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Exercise</button>
        </div>
      </form>
    );
}

export default ExpenseForm;
