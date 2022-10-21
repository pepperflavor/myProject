import { FlatList, View } from "react-native";
import SnsItem from "../components/SnsItem";
import { useRoute } from "@react-navigation/native";

import {SNSROUTINE} from '../data/dummy-data'

function SnsOverviewScreen(){

    const route = useRoute();
    const routineId = route.params.title;

    const displayRoutine = SNSROUTINE.filter((routineItem) => {
        return routineItem.titles.indexOf(routineId) >= 0;
    })

    function renderRoutinItem(itemData){
        return(
            <SnsItem/>
        )
    }

    return(
        <View>
            <FlatList/>
        </View>
    )
}
export default SnsOverviewScreen;