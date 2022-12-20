import { createContext } from "react";

export const AuthContext = createContext({
    token : '', // 토큰값 저장
    isLogin : false, // 로그인한건지 바로 알 수 있게
    authenticate : ()=>{}, // 제대로 로그인하면 ㄱㄱ
    logout : () => {}, // 로그아웃시 토큰정보 지우기

});

function AuthContextProvider({children}){
    return <AuthContextProvider.Provider>{children}</AuthContextProvider.Provider>
}

export default AuthContextProvider;