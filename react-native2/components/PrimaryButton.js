import { View, Text, Pressable, StyleSheet } from "react-native";

// 커스텀 버튼
function PrimaryButton({ children }) {

    function pressHandler(){
    }
    return (
      <Pressable onPress={pressHandler}>
        <View style={styles.container}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#72063c',
        borderRadius : 28,
        paddingVertical: 8,
        paddingHorizontal : 16,
        margin : 4,
        elevation : 2,
    },
    buttonText : {
        color : 'white',
        textAlign : 'center',
    }
})