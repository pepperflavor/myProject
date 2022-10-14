import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Body = ({ path, name, islogin }) => {
  // Link 리액트에서 a같은 역할을 해줘요
  // Link 컴포넌트를 이용해서 경로를 바꿔주고 컴포넌트를 교체해서 보여준다.
  // 라우터간의 이동을 할 수 있게 도와준다.
  // Link에 필요한 props는 to 어디로
  // to 이름의 props에 이동할 경로를 넣어준다
 
  // useNativegate 똑같이 페이지 이동을 도와주는 요소
  // useNativegate의 사용방법은 함수 실행이후 반환받은 객체로 사용을 한다
  const nav = useNavigate();
  return (
    <div className="body">
      <Link to={path}>{name}으로 이동</Link>
      <button
        onClick={() => {
          nav(path);
        }}
      >
        이건 {name}으로 이동 버튼
      </button>
      {islogin ? <div>로그인 되었음</div> : <div>로그인 안되었음</div>}
    </div>
  );
};

export default Body