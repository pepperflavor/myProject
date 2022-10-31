// 로그인 상태 저장 & 관리

import { createContext, useState } from "react";
import LoginButton from './../ui/LoginButton';

export const AuthContext = createContext({
    token : '', // 토큰값 저장
    isLogin : false, // 로그인한건지 바로 알 수 있게
    authenticate : ()=>{}, // 제대로 로그인하면 ㄱㄱ
    logout : () => {}, // 로그아웃시 토큰정보 지우기
});

function AuthContextProvider({children}){
    const [authToken, setAuthToken] =  useState();


    // 로그인 또는 회원가입시 트리거
    function authenticate(token){
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null)
    }

    const value = {
        token : authToken,
        isAuthenticated : !!authToken, //결과값 boolean으로 받기
        authenticate : authenticate,
        logout : logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;


