// 장소 목록 랜더링

import { FlatList, Text, View } from "react-native";
import SpotItem from "./SpotItem";
import { StyleSheet } from 'react-native';


function SpotList({spots}){
    if(!spots || spots.length === 0){
        return(
            <View style = {styles.fallbackContainer}>
                <Text style={styles.fallbackText}>Spot이 없어요! 등록해주세요!</Text>
            </View>
        )
    }
    
    return(
        <FlatList 
            style ={styles.spotList}
            data={spots}
            keyExtractor={(item)=> item.id} 
            renderItem={({item})=> <SpotItem spot={item}/>}/>
    )
}


export default SpotList;

const styles = StyleSheet.create({
    spotList:{
        margin : 24,
    },
    fallbackContainer: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText:{
        fontSize: 16
    }
})