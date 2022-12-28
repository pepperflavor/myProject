import {createContext, useState} from 'react';
import { useReducer } from 'react';

// 컴포넌트로 활용함
export const FavoritesContext = createContext({
    favorites : [],
    addFavorite : (id) =>{},
    reamoveFavorite : (id)=>{}
});

function favoritesReducer(state, action){
    switch (action.type) {
        case 'ADD':
        case 'DELETE':

        default:
            return state;
    }
}

// 즐겨찾기 관리 코드
function FavoriteContextProvider({children}){

   const [ favoriteState, dispatch] = useReducer(favoritesReducer); // 위에 리듀서 함수와 연결

    const [ favoriteSnsIds, setFavoriteSnsIds]= useState([]);

    function addFavorite(id){
        setFavoriteSnsIds((currentIds) => [...currentIds, id])
    }

    function removeFavorite(id){
        // 
        setFavoriteSnsIds((currentIds)=> currentIds.filter(favoriteSnsIds => favoriteSnsIds !== id))
    }

    const value ={
        ids : favoriteSnsIds,
        addFavorite : addFavorite,
        reamoveFavorite : removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoriteContextProvider;