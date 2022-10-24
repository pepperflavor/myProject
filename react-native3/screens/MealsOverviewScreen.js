import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";


import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from '../data/dummy-data'

function MealsOverviewScreen({ route, navigation }){

  // navigation으로 넘겨받은 값을 꺼내는 방법
  // 누르는 순간 해당 값을 넘겨줌
  const catId = route.params.categoryId;

  // 만약 받아올 값이 배열일 경우
  // filter함수는 함수를 매개인자로 받는다
    const displayedMeals = MEALS.filter((mealItem)=>{
      return mealItem.categoryIds.indexOf(catId) >= 0;
    })


    //useLayoutEffect() : 함수 실행과 동시에 변경해줌 화면이 좀더매끄러워진다ㅏ
    useLayoutEffect(() => {
      // 같은걸 찾아줌 find() : 참이면 반환 거짓이면 버림
      const categoryTitle = CATEGORIES.find(
        (category) => category.id === catId
      ).title;

      // 여기서 app.js에서 한것 처럼 제목을 동적으로 뽑아줄 수 있음
      navigation.setOptions({
        title: categoryTitle,
      });
    }, [catId, navigation]); // 두번째 프로퍼티의 값은 의존성을 넣어줌


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