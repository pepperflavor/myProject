// 회원가입 요청 https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
// signup 요청 https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[API_KEY]
// 전부 post 요청이다. 잘보면 요청 api주소가 한부분만 달라서 밑에 처럼 간결하게 가능

import axios from "axios";

const API_KEY = 'AIzaSyBBvI_tQEMxvVu_Ue7ZeDTv5cnM0ZtEnh8'

async function authenticate(mode, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const response = await axios.post(url, {
        email: email,
        password : password,
        returnSecureToken : true,
    });

    console.log(response.data);
    // log 찍어보면 idToken으로 토큰을 받는걸 알 수 잇음
    const toKen = response.data.idToken; 

    return toKen;
}


export async function createUser(email, password){
    return authenticate('signUp', email, password);
  
}


export async function login(email, password){
    return authenticate('signInWithPassword', email, password);
}
// 요청보낸걸 리턴받아야함