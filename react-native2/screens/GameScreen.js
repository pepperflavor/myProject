import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

// 힌트주는 화면
function GameScreen(){
    return (
      <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* GUESS */}
        <View>
          <Text>Higher or lower?</Text>
          {/* + - */}
        </View>
        <Text>LOG ROUNDS</Text>
      </View>
    );
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex : 1,
        padding : 40,
    },

})