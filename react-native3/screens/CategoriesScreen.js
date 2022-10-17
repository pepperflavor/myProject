import {CATEGORIES} from '../data/dummy-data'
import {FlatList} from 'react-native'
import Meal from '../models/meal';

function CategoriesScreen(){
    return (
      <FlatList data={CATEGORIES} keyExtractor={()=>{}}>
        <CATEGORIES />
      </FlatList>
    );
}
export default CategoriesScreen;