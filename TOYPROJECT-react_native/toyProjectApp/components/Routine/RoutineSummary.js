import { View, Text, StyleSheet } from "react-native"


function RoutineSummary(){
    return(
        <View style={styles.container}>
            <Text style={styles.period}>MY ROUNTINES</Text>
        </View>
    )
}

export default RoutineSummary;

const styles = StyleSheet.create({
    container : {
        padding : 8,
        backgroundColor : '#000040',
        borderRadius : 6,
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems: 'center',
        height : 50,
        textAlign : 'center'
    },
    period : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#37d76b',
        textAlign : 'center'
    }
})