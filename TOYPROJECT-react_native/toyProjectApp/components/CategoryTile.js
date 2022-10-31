import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryTile({title, color, onPress}){
    
    return(
        <View style={styles.gridItem}>
            <Pressable 
            android_ripple={{color : '#ccc'}} 
            style={({pressed}) => [
                styles.button, 
                pressed ? styles.buttonPressed : null
            ]} 
            onPress={onPress}>
                <View style={[styles.innerContainer, {backgroundColor : color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )

}

export default CategoryTile;

const styles = StyleSheet.create({
    gridItem : {
        flex: 1,
        margin: 16,
        height: 100,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black", // ios에서 그림자 만들어주는 옵션
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", // 현재 OS를 나타내는 문자열 값을 반환함

    },
    button : {
        flex :1
    },
    buttonPressed : {
        opacity : 0.5,
        backgroundColor : 'white'
    },
    innerContainer : {
        flex : 1,
        padding : 16,
        borderRadius : 8,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 23,
        textAlign : 'center'
    }
})