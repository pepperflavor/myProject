import React, { useState } from "react";

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // 입력 제목 저장

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
        // // 항상 최신 데이터를 사용하도록 함
        // 리액트가 상태 업데이트 스케줄 갖고있기 때문에 바로 실행하지 않을 수 있음
        // 그래서 동시에 여러개를 업데이트 할 경우 잘못된 상태창(구 정보가 담긴객체)에 정보를 업데이트할 수 있음
        // setEnteredTitle((prevState) => {
        //   return { ...prevState, enteredUser: event.target.value };
        // });
 
    };

    // 양 저장
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);

        // // 항상 최신 데이터를 사용하도록 함
        // setEnteredUser((prevState) => {
        //     return {...prevState, enteredUser : event.target.value }
        // });
        // console.log(event.target.value);
    };

    // 날짜 저장
    const dateChangehandler = (event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault(); // 기본자바스크립트 동작, submit하면 자동으로 페이지가 이동되는걸 막아준다 리액트라 페이지 리로딩이 되면 안되기 때문

        const expenseData = {
          title : enteredTitle,
          amount : enteredAmount,
          date : new Date(enteredDate)
        };

        console.log(expenseData);
        
        // 입력받은 값 전달해주기
        props.onSaveExpenseData(expenseData);
        setEnteredAmount("");
        setEnteredTitle(" ");
        setEnteredDate("");

    };

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title </label>
            <input
              type="text"
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label> Amount </label>
            <input
              type="number"
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label> Date </label>
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
          <button type="submit">Add express</button>
        </div>
      </form>
    );
}

export default ExpenseForm;
