import { useEffect, useLayoutEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import MenuItem from '../components/MenuItem';
import {BASICMENU, CATEGORIES} from '../data/dummy-data'
import CategoryTile from './../components/CategoryTile';

function MenuOverviewScreen({ route, navigation }){
    // navigation.navigate() 이렇게 넘겨준 값을 받아온다
    const menuId =  route.params.basicMenuId;

    const displayedMenu = BASICMENU.filter((menuItem)=>{
        // 메뉴값이 배열이기때문에 거를때 indexof를 사용함 만약 특정 카테고리id가 배열에 없으면 -1을 반환
        // 그래서 반환 인덱스값이 0보다 크거나 같다면 배열안에 해당 카테고리 값이 있다는 뜻이기 때문에 true로 리턴시켜줌
        // model에 지정해 놓은 이름을 써야함
        return menuItem.categoryIds.indexOf(menuId) >= 0 
    })



// 동적으로 header 설정하기
// 컴포넌트가 랜더링 됨과 동시에 useEffect를 실행한다, useLayoutEffect 는 좀더 부드럽게 보임
    useLayoutEffect(() =>{
        const categoryTile = CATEGORIES.find((category)=> category.id === menuId).title;

        // 객체를 취할 수 잇는 옵션
        navigation.setOptions({
            title : categoryTile
        }); 
    }, [menuId, navigation])

 // 동적으로 header 설정하기 끝



    function renderMenuItem(itemData){
        const item = itemData.item;

        const menuItemProps ={
            title : item.title,
            imageUrl : item.imageUrl,
            body : item.body,
            explanation : item.explanation,
        }
        return(
         <MenuItem {...menuItemProps}/>
         
        )
    }

    return (
        <View style={styles.constainer}>
        {/* dummy-data를 보면 id를 지정해준게 있음 그걸로 key값 사용 */}
        <FlatList data={displayedMenu} keyExtractor={(item)=> item.id} renderItem={renderMenuItem}/> 
    </View>
    )
}

export default MenuOverviewScreen;

const styles = StyleSheet.create({
    constainer : {
        flex:1,
        padding : 16,
    }
})