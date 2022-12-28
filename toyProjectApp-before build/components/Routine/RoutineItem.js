import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from './../../constans/styles';
import { dateStringFormatt } from "../../util/date";
import { useNavigation } from '@react-navigation/native';

function RoutineItem({ id, title, amount, sets, date}){

    const navigation = useNavigation();

    function routinePressHandler(){
        navigation.navigate('ManageRoutine', {
            id : id,
            title : title,
            amount : amount,
            sets : sets,
            date : date
        });
    }

    return (
        <Pressable style= {(pressed)=> pressed && styles.pressed} android_ripple={{color : '#ccc'}} onPress={routinePressHandler}>
            <View style={styles.items }>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.dateText }>{dateStringFormatt(date)}</Text>
                </View>
                <View style={styles.numberContainer}>
                    <Text style={[styles.textBasic, styles.numberText] }>{amount} Kg</Text>
                    <Text style={[styles.textBasic, styles.numberText]}>{sets} / Sets</Text>
                </View>
                <View>
                </View>
            </View>
        </Pressable>
    )
}

export default RoutineItem;

const styles = StyleSheet.create({
    pressed : {
        opacity: 0.75
    },
    items : {
        padding : 12,
        marginVertical : 8,
        backgroundColor: '#3b021f',
        flexDirection : 'row',
        justifyContent : 'space-between',
        borderRadius: 6,
        height: 100,
        elevation : 6,
        shadowColor : '#bcbcbc',
        shadowRadius : 4,
        shadowOffset : { width : 1, height :1},
        shadowOpacity : 0.4
    },
    textBasic : {
        color : 'white',
    },
    title : {
        color : 'white',
        fontSize : 25,
        marginBottom : 10,
        fontWeight : 'bold',
    },
    numberContainer: {
        paddingHorizontal: 12,
        paddingVertical : 4,
        backgroundColor : '#26004d',
        justifyContent: 'center',
        alignItems : 'center',
        borderRadius: 4,
        minWidth : 90,
    },
    numberText : {
        fontSize : 16,
        marginBottom : 4,
        fontWeight: 'bold'
    },
    dateText : {
        color : '#0080ff',
        fontWeight: 'bold'
    }

})