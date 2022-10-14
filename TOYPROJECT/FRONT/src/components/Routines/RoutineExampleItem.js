import "./ExpenseItem.css";
import RoutineDate from "./RoutineDate"
import React from "react";
import "./ExpenseItem.css"
import Card from "../UI/Card";


function RoutineExampleItem(props){

  const clickHandler = () =>{
    const myBox = [];
    myBox.push(props.title)
    console.log('click!!!');
    console.log(myBox);
  }

    return(    
    <Card className="expense-item">
        <RoutineDate date={props.date}/>
        <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.body}</h2>
        <div className="expense-item__price">{props.amount}kg</div>
        <div className="expense-item__price">{props.set} SET</div>
      </div>
      <button onClick={clickHandler}>Change Rountine</button>
    </Card>
    );
}

export default RoutineExampleItem;