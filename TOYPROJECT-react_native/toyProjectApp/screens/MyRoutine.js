import { ImageBackground, StyleSheet, Text, View } from "react-native"
import RoutinesOutput from "../components/Routine/RoutinesOutput";


function MyRoutine(){

    return (
      <>
        <ImageBackground
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/06/30/21/02/muscle-2459720_960_720.jpg",
          }}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
          style={styles.rootScreen}
        >
          <View>
            <RoutinesOutput />
          </View>
        </ImageBackground>
      </>
    );

}

export default MyRoutine;

const styles = StyleSheet.create({
  rootScreen: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    opacity: 0.75,
  },
});