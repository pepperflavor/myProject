import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import IconButton from "../ui/Auth/IconButton";
import RButton from "../ui/RButton";

function ManageRoutine({route, navigation}){
    const editRoutineId = route.params?.id;
    const isEdit = !!editRoutineId

    useLayoutEffect(()=>{
        navigation.setOptions({
            title : isEdit ? 'Routine 수정' : 'no can not'
        })
    }, [navigation, isEdit])


    function deleteRoutinHandler(){
        navigation.goBack();
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(){
        navigation.goBack();
    }


    return(
        <View style={styles.container}>
            <View style={styles.buttons}>
                <RButton style={styles.button} mode="flat" onPress={cancelHandler}>취소</RButton>
                <RButton style={styles.button} onPress={confirmHandler}>{isEdit ? 'UPdate': 'ADD'}</RButton>
            </View>
            {isEdit && 
            (<View style={styles.deleteContainer}>
                <IconButton icon="trash" color="red" size={36} onPress={deleteRoutinHandler}></IconButton>
            </View>
            )}
        </View>
    )
}
export default ManageRoutine

const styles = StyleSheet.create({
    container : {
        padding : 24,
        flex :1,
        backgroundColor :' #9ae4ae',
    },
    deleteContainer : {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor : '#8080ff',
        alignItems: 'center',
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
      },


})