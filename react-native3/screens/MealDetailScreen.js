import {Meal} from './../models/meal';

function MealDetailScreen({ route, navigation }){

    const mealID = route.params.maelId;

    const selectedMeal = Meal.filter((mealID) => {
      return mealID.maelIds.indexOf(mealID);
    });

    console.log("selectedMeal" + selectedMeal);
    console.log("mealID " + mealID);
    return(
        <View>

        </View>
    )

}

export default MealDetailScreen;