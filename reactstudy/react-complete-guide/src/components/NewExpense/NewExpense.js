import React, { useState } from "react";

import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props)=>{
    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id : Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    }

    // 입력창 보일지 말지 조건설정
    const [isClicked, setIsClicked] = useState(false);

    const addSubmitHandler = (event) => {
      event.preventDefault();
      setIsClicked(true);
      console.log(isClicked);
    };

    return (
      <div className="new-expense">
        {/* 조건 따라서 보일지말지 */}
        {!isClicked && (
          <button onClick={addSubmitHandler}>Add New Expense</button>
        )}
        {isClicked && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onSaveIsClicked={setIsClicked}
            formSelected={isClicked}
          />
        )}
      </div>
    );
}

export default NewExpense;