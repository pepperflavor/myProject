import React from 'react'

import ExpenseItem from './ExpenseItem'
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // jsx는 변수에 태그자체 저장 가능
  let expenseContent = <div> NO ITEMS.</div>;

  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  return (
      <ul className="expenses-list">
        { props.items.map((expense) => (
        <ExpenseItem
            key={expense.id}
            // key 값을 주는 이유 : 새 컴포넌트가 추가되면 어디에 위치시킬지 리액트시스템이 알 수 없다. 컴포넌트가 다 비슷비슷해보이기 때문에 새걸 추가하면 맨 밑에 추가하게되고 화면에 랜더링 하기 위해 이전의 배열요소들을 한번씩 다 훑은 다음에 랜더링을 하는데 이 과정이 효율적이지 않고 버그를 발생시킬수도 있다 key값을 주면 알아서 순서를 정렬해주는 것 같음(보통은 db에서 id를 할당해주는걸로 사용)
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ))}
      </ul>
  );
};

export default ExpensesList