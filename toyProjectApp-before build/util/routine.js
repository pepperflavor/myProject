import axios from "axios";

export const rootUrl = 'https://healthzzang-a500e-default-rtdb.firebaseio.com/'
    function storeRoutine(routineData){
        axios.post(
            rootUrl + 'myRoutines.json',
            routineData
            );
    }