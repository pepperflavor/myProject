import React from "react";
import "./ExpenseDate.css"

function RoutineDate (props){
    let currentDate = new Date(props.date);

    const month = currentDate.toLocaleString("ko-KR", { month: "long" }); // 월이 +1되어서 나옴;;
    const day = currentDate.toLocaleString("ko-KR", { day: "2-digit" });
    const year = currentDate.getFullYear(); // 연도를 4자리로 출력해줌
  
    return (
      <div className="expense-date">
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
}

export default RoutineDate;