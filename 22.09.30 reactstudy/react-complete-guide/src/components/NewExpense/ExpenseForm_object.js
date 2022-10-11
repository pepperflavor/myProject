import React, { useState } from "react";

import "./ExpenseForm.css"

const ExpenseForm = () => {
    
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");
    
    // 한개의 값으로 취급하는 방법 => 객체에 모든 값을 집어넣은다음 취급하면됨
    const [userInput, setUserInput] = useState({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate : '',
    });

    // 입력 제목 저장
    const titleChangeHandler = (event) =>{
      // // 1. 객체로 데이터 집어넣기
      // setUserInput({
      //   ...userInput,
      //   enteredTitle: event.target.value,
      // });

      // 2.  최신데이터가 저장이 안된다면 트라이
      setUserInput((preState) => {
        return {...preState, enteredTitle : event.target.value };
      })
    };

    // 양 저장
    const amountChangeHandler = (event) =>{
     setUserInput({
       enteredAmount: event.target.value,
     });
    };

    // 날짜 저장
    const dateChangehandler = (event)=>{

     setUserInput({
      
       enteredDate: event.target.value,
     });
    }


    const submitHandler = (event) =>{
        event.preventDefault();
    }

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title </label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount </label>
            <input
              type="text"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date </label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangehandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">upDate</button>
        </div>
      </form>
    );
}

export default ExpenseForm;
