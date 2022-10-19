import "./Expenses.css"
import Card from "../UI/Card";
import ExtenseFilter from "./ExpenseFilter"
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

  // useState() 초기값을 "문자열"로 넣어주니까 처음 로딩됐을때 2022년도 해당 데이터가 뜬다ㅎ
  const [filteredYear, setFilteredYear] = useState("2022");
  

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
    console.log("Expense.js");
  };

  // getFullYear() : date 객체에 사용할 수 있는 메서드, 연도만 뽑아준다
  // filter() : 반환값이 true이면 특정 값을 남기고 false면 남기지 않는다. 남은 값들을 담은 새로운 배열을 반환한다. 원본 배열을 수정하지 않는다
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // 조건부 contents 출력방법
  /* 
    변수에 태그째로 넣어놓고 return 부분에서 조건으로
  */
  console.log(filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExtenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;