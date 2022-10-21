import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";


import MealItem from "../components/MealItem";
import { MEALS } from '../data/dummy-data'

function MealsOverviewScreen({ route }){

  // navigation으로 넘겨받은 값을 꺼내는 방법
  // 누르는 순간 해당 값을 넘겨줌
  const catId = route.params.categoryId;

  // 만약 받아올 값이 배열일 경우
  // filter함수는 함수를 매개인자로 받는다
  //
  
    const displayedMeals = MEALS.filter((mealItem)=>{
      return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    // flatlist에서 data를 출력할 방식을 정해주는 함수
    function renderMealItem(itemData){
        return (
          <MealItem
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
          />
        );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={displayedMeals}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        />
      </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container : {
        flex:1,
        padding : 16,
    },
})