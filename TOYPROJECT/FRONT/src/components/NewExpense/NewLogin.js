import React from "react";
import "./NewExpense.css"
import LoginForm from "./LoginForm";

// 로그인 했는지 확인 

const NewLogin = (props) => {

  const saveUserDataHandler = (enteredUserData) => { 
    const userData = {
      ...enteredUserData,
      id : Math.random().toString(),
    };
    console.log(userData);
  };

  return (
    <div className="new-expense"> 
      <LoginForm
        onSaveUserData={saveUserDataHandler}
        islogin={props.islogin} setlogin={props.setlogin}
      ></LoginForm>
    </div>
  );
};

export default NewLogin;
