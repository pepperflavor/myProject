import React, { useState } from "react";

import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";


// 강의 정답카피
const NewExpense = (props)=>{

    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id : Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
        console.log(expenseData);
    }

    // 입력창 보일지 말지 조건설정
    const [isEditing, setIsEditing] = useState(false);


    const startEditingHandler = () =>{
      setIsEditing(true)
    }

    const stopEditingHandler = () =>{
      setIsEditing(false);
    }

    return (
      <div className="new-expense">
        {/* 조건 따라서 보일지말지 */}
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
}

export default NewExpense;