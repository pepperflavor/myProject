import {createContext, useState} from 'react';

// 컴포넌트로 활용함
const FavoritesContext = createContext({
    ids : [],
    addFavorite : (id) =>{},
    reamoveFavorite : (id)=>{}
});


// 즐겨찾기 관리 코드
function FavoriteContextProvider({children}){

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