import { Image, Pressable, StyleSheet, View } from "react-native";
import IconButton from "./Auth/IconButton";
import {Iconicons} from '@expo/vector-icons'



function LoveButton({ onPress, isFavoritSns, setIsFavoritSns }) {

    console.log({ isFavoritSns });
    console.log( isFavoritSns );
  function snsItemPressHandler() {
    if (isFavoritSns == false) {
      setIsFavoritSns(true);
      console.log(isFavoritSns);
    //   console.log("true!!!");
      
    } else if (isFavoritSns == true) {
      setIsFavoritSns(false);
      console.log(isFavoritSns);
      // console.log("false!!!");
    }
  }

  let url = "";
  //   let heartState =  isFavoritSns;
  //   console.log( "@@@@" + heartState);
  isFavoritSns
    ? (url =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqfM-3Ud7TQZdX-PjbIWaqh-n6zKJTDT7NP2ODtXl&s")
    : (url = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png");

  console.log(" BUTTON " + isFavoritSns);
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={snsItemPressHandler}
      >
        <Image
          style={styles.image}
          source={{ uri: url }}
          size={15}
          color="white"
        />
      </Pressable>
    </View>
  );
}

export default LoveButton;

const styles = StyleSheet.create({
    buttonPressed : {
        opacity : 0.5,
        backgroundColor : 'white'
    },
    image: {
        width : 24,
        height: 24,
        resizeMode : "center"
    }
})