import { Pressable } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

function SpotItem({ spot, onSelect }){
    return(
        <Pressable style={({pressed}) => [styles.item, pressed && styles.pressed]} onPress={onSelect}>
            <Image style={styles.image} source={{ uri: spot.imgURL}}/>
            <View style={styles.infoBox}>
                <Text style={styles.title}>{spot.title}</Text>
                <Text style={styles.description}>{spot.description}</Text>
                <Text style={styles.address}>{spot.address}</Text>
            </View>
        </Pressable>
    )

}

export default SpotItem;

const styles = StyleSheet.create({
    item: {
        flexDirection:'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: 'green',
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    pressed:{
        opacity: 0.7
    },
    image:{
        flex: 1,
        borderTopLeftRadius: 4,
        height: 100
    },
    infoBox:{
        flex: 2,
        padding: 12,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        color : 'black'
    },
    description:{
        fontSize: 13,
        color : 'black'
    },
    address:{
        fontSize: 9,
        color : 'black'
    },

});