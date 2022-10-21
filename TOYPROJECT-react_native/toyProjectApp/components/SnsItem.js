import { Pressable, View, StyleSheet } from "react-native";

function SnsItem({title}){
    return(
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default SnsItem;

const styles= StyleSheet.create({
    snsContainer : {
        width : 200,
    }
})