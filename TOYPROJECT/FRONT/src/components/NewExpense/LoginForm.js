import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewJoin from "./NewJoin";

import "./ExpenseForm.css"

const LoginForm = (props) => {
  const [enteredId, setEnteredId] = useState("");
  const [enteredPwd, setEnteredPwd] = useState("");
  const [showJoin, setShowJoin] = useState(false);

  console.log("처음받아온거" + props);


  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
    console.log(event.target.value);
  };

  const pwdChangeHandler = (event) => {
    setEnteredPwd(event.target.value);
    console.log(event.target.value);
  };

  // 보내기하면 무조건 로그인 ok
  const setLogin = () => {  
   props.setlogin(true);
  };

  const userData = {
    userId: enteredId,
    pwd: enteredPwd,
  };

  const submitHandler = (event) => {
    // 로그인하면서 페이지 넘겨줘야해서 이번에뺌
    //event.preventDefault();
    console.log("서브밋 ㅇㅋ");

    // newLogin으로 userData 보내기
    props.onSaveUserData(userData);

    setLogin();
    setEnteredId(" ");
    setEnteredPwd(" ");
  };
  

  const nav = useNavigate();

  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Welcome back!</h1>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>ID : </label>
            <input
              type="text"
              value={enteredId}
              onChange={idChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>password : </label>
            <input
              type="password"
              value={enteredPwd}
              onChange={pwdChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          {/* 버튼 타입 submit했을때 연결끊겼다고 뜸 button으로 바꾸면 됨 */}
          <button
            type="submit"
            onClick={() => {
              submitHandler();
              nav("/main", { state: { ...userData } });
            }}
          >
            Login
          </button>
        </div>
      </form>
      <NewJoin setShowJoin={setShowJoin} showJoin={showJoin} />
    </>
  );
};

export default LoginForm;
