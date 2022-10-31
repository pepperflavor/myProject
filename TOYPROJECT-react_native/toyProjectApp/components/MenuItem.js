import { View, Text, Pressable, Image, StyleSheet} from "react-native"

// 메뉴 눌렀을 때 상세보기
function MenuItem({ title, imageUrl, body, explanation }){
    return (
    <View style={styles.menuItem}>
        <Pressable android_ripple={{color : '#ccc'}}
                    style={({pressed}) => [
                        pressed ? styles.buttonPressed : null
            ]} >
            <View style={styles.radiusContainer}>
            <View>
                <Image source={{uri : imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailItem}>BODY : {body.toUpperCase()}</Text>
                <Text style={styles.detailItem} > 설명 : {explanation}</Text>
            </View>
            </View>
        </Pressable>
    </View>
    )
}

export default MenuItem


const styles = StyleSheet.create({
    image : {
        width : '100%',
        height : 200
    },
    title : {
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 30,
        margin : 8,
    },
    details : {
        flexDirection : 'row',
        alignItems : 'center',
        padding : 15,
        fontSize : 12,
        justifyContent : "center", 
        // 여기부터 글자 넘어가는부분 알아서 개행되도록한 설정
        display : "flex",
        flexWrap : "wrap",
    },
    detailItem :{
        marginHorizontal : 4,
        fontSize : 15,
    },
    radiusContainer:{
        borderRadius : 8,
        overflow : 'hidden'
    },
    menuItem : {
        margin : 16,
        borderRadius : 8,
        backgroundColor : 'white',
        elevation : 6,
        shadowColor: "black", // ios에서 그림자 만들어주는 옵션
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        overflow: Platform.OS === "android" ? "hidden" : "visible", 
    },
    buttonPressed : {
        opacity : 0.5,
        backgroundColor : 'white'
    },
})