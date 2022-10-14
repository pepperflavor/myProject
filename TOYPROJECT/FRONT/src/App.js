import NewLogin from "./components/NewExpense/NewLogin";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RoutineList from "./components/Routines/RoutineList";
import "bootstrap/dist/css/bootstrap.min.css";

// 이걸 추가하지 않으면 부트스트랩의 스타일이 추가되지 않는다
// import 'bootstrap/dist/css/bootstrap.min.css';

  // 운동 종류 배열
  const DUMMY_ROUTINE = [
    {
      id: "1",
      title: "Inner Thigh",
      amount: "20",
      set: "4",
      body : "Lower Body",
      date: new Date(2022, 8, 20),
    },
    {
      id: "2",
      title: "Squats",
      amount: "20",
      set: "4",
      body : "Lower Body",
      date: new Date(2021, 8, 14),
    },
    {
      id: "3",
      title: "Leg Press",
      amount: "20",
      set: "4",
      body : "Lower Body",
      date: new Date(2020, 7, 25),
    },
    {
      id: "4",
      title: "Leg Extension",
      amount: "20",
      set: "4",
      body : "Lower Body",
      date: new Date(2019, 6, 18),
    },
    {
      id: "5",
      title: "Leg Curl",
      amount: "20",
      set: "4",
      body : "Lower Body",
      date: new Date(2022, 6, 14),
    },
  ];

  //  json-server --watch myroutine.json --port 3001

function App() {

  let res = axios.get("http://localhost:3001/routine");
  console.log("!!!!!!!!!!!!!!!",res)

  const [routines, setRoutine]= useState(DUMMY_ROUTINE)
 
  // 로그인
    const [login, setlogin] = useState(false);

    const [listOption, setListOption] = useState(true);


    // 운동루틴 입력한거 담기
    const addRoutinehandler = (routine) =>{
     // setRoutine([routine, ...routines]);
      setRoutine(preRoutines => {
        return [routine, ...preRoutines]
      });
    }

    // const Redirect = () => {
    //   return login === true ? <RoutineList></RoutineList> : <Navigate to="/"></Navigate>;
    // }
    

  return (
    <div className="App">
      <Routes>
        {/* // 접속하면 login바로 하도록*/}
        <Route path="/" element={<NewLogin islogin={login} setlogin={setlogin}></NewLogin>}></Route>
        {/* // 로그인하면 바로 main 페이지로 보내주기 */}
        <Route
          path="/main"
          element={
            <RoutineList islogin={login} items={routines} onAddRoutine={addRoutinehandler}></RoutineList>
          }
        ></Route>
        {/* <RoutineList items={routineExample} /> */}
      </Routes>
    </div>
  );
}

export default App;
