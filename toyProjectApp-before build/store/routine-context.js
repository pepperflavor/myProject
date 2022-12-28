import { createContext, useReducer } from "react";


const DUMMY_ROUTINE = [
    {
        id : '1',
        title : 'Leg Press',
        amount : '20',
        sets : '4',
        date : new Date('2022-10-02')
    },
    {
        id : '2',
        title : 'Squat',
        amount : '30',
        sets : '4',
        date : new Date('2022-10-10')
    },
    {
        id : '3',
        title : 'Chest press',
        amount : '25',
        sets : '4',
        date : new Date('2022-10-12')
    },
    {
        id : '4',
        title : 'Leg Press',
        amount : '20',
        sets : '4',
        date : new Date('2022-10-18')
    },
    {
        id : '5',
        title : 'Leg Press',
        amount : '20',
        sets : '4',
        date : new Date('2022-10-28')
    },

]


export const RoutineContext = createContext({
    routine : [],
    addRoutine : ({title, amount, sets ,date}) => {},
    deleteRoutine : (id) => {},
    updateRoutine : (id, {title, amount, sets ,date} ) =>{},
});

function routineReducer(state, action){
    switch (action.type) {
        case 'ADD':
            // 임시 id 부여
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]

        case 'UPDATE':
            const updatebleRoutineIndex = state.findIndex(
                (routine) => routine.id === action.payload.id
                );
       
                //updatebleRoutineIndex에 접근
            const updatebleRoutine = state[updatebleRoutineIndex];
            const updatedItem ={ ...updatebleRoutine, ...action.payload.data};
            const updatedRoutine = [...state];
            updatedRoutine[updatebleRoutineIndex] = updatedItem;
            return updatedRoutine;

            case 'DELETE':
                return state.filter((routine) => routine.id !== action.payload)
        default:
            return state;
    }
}



function RoutineContextProvider({childern}){

    // 새 행동을 리듀서 함수로 보낼때 dispatch로 상태조작할 수 있음
    const [routineState, dispatch] = useReducer(routineReducer, DUMMY_ROUTINE); // 리듀서와 연결

    function addRoutine(routineData){
        // 받은 routineData를 payload로 보냄
        dispatch({ type: 'ADD', payload : routineData });
    }

    function deleteRoutine(id){
        dispatch({type : 'DELETE', payload : id})
    }

    function updateRoutine(id, routineData){
        dispatch({type : 'UPDATE', payload : {id: id, data : routineData}})
    }

    const value = {
        routine : routineState,
        addRoutine : addRoutine,
        deleteRoutine :deleteRoutine,
        updateRoutine : updateRoutine,
    };

    return <RoutineContext.Provider value={value}>{childern}</RoutineContext.Provider>
}

export default RoutineContextProvider;