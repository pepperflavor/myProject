import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from './../data/dummy-data';

// renderItem을 간결하게 써주기 위해서 함수만들기
function renderCategoryItem(itemData){
    return <CategoryGridTile title={itemData.item.title}/>
}

function CategoriesScreen(){
    return(
        <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem}>

        </FlatList>
    )

}

export default CategoriesScreen;