import { FlatList, Text, View } from "react-native"
import RoutineItem from "./RoutineItem"
import RoutineSummary from "./RoutineSummary"

function renderRoutineItem(itemData){
    return(
        <RoutineItem {...itemData.item}/>
    )
}

function RoutineList({ myroutine }){
    return(
        <View>
            <FlatList data={myroutine} renderItem = {renderRoutineItem} keyExtractor={(item)=> item.id}/>
        </View>
    )
}

export default RoutineList