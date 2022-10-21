import {CATEGORIES} from '../data/dummy-data'
import {FlatList} from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile';



// {navigation} 는 페이지를 이동하게 하는 메서드를 포함하는 객체 자식컴포넌트는 이 프로퍼티를 받을 수 없다
function CategoriesScreen({ navigation }) {
    // 자식컴포넌트가 { navigation } 를 받을 수 없기 때문에 이 값에 접근하기 위해서 카테고리 스크린안에 함수를 정의한것이다
    function renderCategoryItem(itemData) {
      function pressHandler() {
        // navigation에 등록한 페이지 이름을 인수로 \넣어주면된다
        navigation.navigate("MealsOverview", {
          categoryId : itemData.item.id,
        });
      }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;