import { FlatList, StyleSheet, Text, View } from "react-native"
import RoutineList from "./RoutineList"
import RoutineSummary from "./RoutineSummary"


// 여기서 전체 배경화면 설정 
// 더미 데이터 삭제 ㄱㄱ
const DUMMY_ROUTINE = [
    {
        id : '1',
        title : 'Leg Press',
        amount : '20',
        sets : '4',
        date : new Date('2022-10-02')
    },
    {
        id : '2',
        title : 'Squat',
        amount : '30',
        sets : '4',
        date : new Date('2022-10-10')
    },
    {
        id : '3',
        title : 'Chest press',
        amount : '25',
        sets : '4',
        date : new Date('2022-10-12')
    },
    {
        id : '4',
        title : 'Leg Press',
        amount : '20',
        sets : '4',
        date : new Date('2022-10-18')
    },
    {
        id : '5',
        title : 'Leg Press',
        amount : '20',
        sets : '4',
        date : new Date('2022-10-28')
    },

]


function RoutinesOutput({ myroutine }){
    return(
        <View style={styles.container}>
          <RoutineSummary myroutine={myroutine}/>
          <RoutineList myroutine={myroutine}/>
        </View>
    )
}

export default RoutinesOutput

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 24,
        paddingTop : 24,
        paddingBottom : 0,
    }
})