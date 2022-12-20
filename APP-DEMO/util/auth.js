// 백에 인증요청 보내기
import axios from "axios";

async function createUser(email, passeord){
   const response =  await axios.post("http://localhost:5000/signup",
    // 요청보내기
    // {
    //     email : email,
    //     password : password,
    // }).then(function (response){
    //     if(response.data.code == 0){
    //         setPopup({
    //             open:true,
    //             title: 
    //         })
    //     }
    // }
    )

}