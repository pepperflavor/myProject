import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExtenseFilter from "./ExtenseFilter"
import { useState } from "react";

function Expenses(props) {
  // useState() 초기값을 "문자열"로 넣어주니까 처음 로딩됐을때 해당 데이터가 뜬다ㅎ
  
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    console.log("Expense.js");
  };

  // getFullYear() : date 객체에 사용할 수 있는 메서드, 연도만 뽑아준다
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // 조건부 contents 출력방법
  /* 변수에 태그째로 넣어놓고 return 부분에서 조건으로
   */
  console.log(filteredYear);
  return (
    <div>
      <Card className="expenses">
        <ExtenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length > 0 ? filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )) : <div> NO ITEMS.</div>}

        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/* <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          ></ExpenseItem> */}
      </Card>
    </div>
  );
}
export default Expenses;