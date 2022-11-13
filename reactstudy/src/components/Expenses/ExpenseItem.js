import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import React,{ useState } from "react";
import Card from "../UI/Card"

const ExpenseItem = (props)=> {
  // 이 날짜얻어주는 함수는 0부터 시작함
  // let expenseDate = new Date();
  // let offset = expenseDate.getTimezoneOffset() * 60000;

  // // 이게 한국시간 기준 진짜 날짜
  // let dateOffset = new Date(expenseDate.getTime() - offset);
  // console.log(dateOffset);

  /*  toISOString 1 일전 날짜로 출력되는데 한국 시간이 기준이 아니기 때문
      해결하는 방법

      ]

      
      1. 대한민국 offset을 수동으로 추가한뒤toISOString 함수를 실행시킨다
          let offset = date.getTimezoneOffset() * 60000; //ms단위라 60000곱해줌
          let dateOffset = new Date(date.getTime() - offset);

      2. js의 Date function을 개선한 moment.js 라이브러리를 사용한다.
          ---- 터미널에서 설치해준후에
          npm install moment --save
          yarn add moment
        -------------------------------------------
          let momentDate = moment(date).format();
          console.log(momentDate);  이렇게 써줌
   */
  // console.log("ddd" + props.date);
  // console.log("aaaaaa" + dateOffset);

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  // };
  //<button onClick={clickHandler}>Change Title</button>

  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} $</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;