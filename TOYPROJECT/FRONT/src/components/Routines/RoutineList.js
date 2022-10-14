import React, {useState} from 'react'
import RoutineExampleItem from './RoutineExampleItem'
import RoutineFilter from './RoutineFilter'
import Card from '../UI/Card'
import "./Expenses.css"
import ExpenseForm from '../NewExpense/ExpenseForm'
import { useLocation } from 'react-router-dom'
import NavBar from "../UI/NavBar";

const RoutineList = (props) => {

  console.log("props.islogin : "+ props.islogin);

      const saveRoutineDataHandler = (enteredRoutineData) => { 
        const RoutineData = {
          ...enteredRoutineData,
          id : Math.random().toString(),
        };
        console.log(RoutineData);
      };

      console.log("날짜" + props.items);
    //=============== 날짜 필터링 시작 =-======================
    const [filteredYear, setFilteredYear] = useState("2022"); // 이렇게 초기값 설정 후 RoutineFilter.js 넘겨줌
    const [filteredMonth, setFilteredMonth] = useState("10");
    
    const filterYearChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    }

    const filterMonthChangeHandler = (selectedMonth) => {
      setFilteredMonth(selectedMonth);
    }

    //filter() : 내장함수로 반환값이 true이면 특정아이템이 남겨지고 false면 남겨지지 않는다
    const filteredRoutines = props.items.filter((routine) => {
      return routine.date.getFullYear().toString() === filteredYear;
    });

//=============== 날짜 필터링 끝 =-====================


//============ 로그인 페이지에서 유저 정보 받아오기
    const location = useLocation();
    const user = location.state.userId;
    console.log(user);
    console.log(props.items);

    return (
      <div>
        <NavBar />
        <Card className="expenses">
          <div className="new-expense">
            {user}님 어서오세요! 오늘도 득근하세요!
            <button className="expense-date">MY Routin</button>
          </div>
          <ExpenseForm
            onSaveRoutineData={saveRoutineDataHandler}
            onAddRoutine={props.onAddRoutine}
          ></ExpenseForm>
          <RoutineFilter
            onChangeYearFilter={filterYearChangeHandler}
            onChangeMonthFilter={filterMonthChangeHandler}
            filteredYear={filteredYear}
            filteredMonth={filteredMonth}
          ></RoutineFilter>

          {filteredRoutines.map((routine) => (
            <RoutineExampleItem
              key={routine.id} //고유값으로 설정해야함
              title={routine.title}
              amount={routine.amount}
              body={routine.body}
              set={routine.set}
              date={routine.date}
            />
          ))}

          {/* <RoutineExampleItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <RoutineExampleItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <RoutineExampleItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <RoutineExampleItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
        <RoutineExampleItem
          title={props.items[4].title}
          amount={props.items[4].amount}
          date={props.items[4].date}
        /> */}
        </Card>
      </div>
    );
}


export default RoutineList