import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';



// import styled from 'styled-components';


// // &는 생성된 컴포넌트를 다시 참조하도록 함
// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//       font-weight: bold;
//       display: block;
//       margin-bottom: 0.5rem;
//       color : ${props => (props.invalid ? 'red' : 'black')};
//     }

//     & input {
//       display: block;
//       width: 100%;
//       border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
//       background : ${props => props.invalid ? '#ffd7d7' : 'transparent'}
//       font: inherit;
//       line-height: 1.5rem;
//       padding: 0 0.25rem;
//     }

//     & input:focus {
//       outline: none;
//       background: #fad0ec;
//       border-color: #8b005d;
//     }

//     &.invalid input{
//       border-color:  red;
//       background-color: #ffd7d7;
//     }

// `;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // 공백입력시 추가 할수없게 유효성검사
    if(enteredValue.trim().length === 0 ){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* styles의 객체 속성에 접근하는 방식 */}
      <div className={ `${styles['form-control']} ${!isValid && styles.invalid}`}>
      <div className={`form-control ${ !isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};


export default CourseInput;

// 동적으로 스타일 추가하기 방법 1.
/*
    조건으로 스타일 지정
    <form onSubmit={formSubmitHandler}>
        <FormControl className={!isValid && 'invalid'}>
        <div className={`form-control ${ !isValid ? 'invalid' : ''}`}>
          <label>Course Goal</label>
          <input type="text" onChange={goalInputChangeHandler} />
        </div>
        </FormControl>
        <Button type="submit">Add Goal</Button>
    </form>
*/