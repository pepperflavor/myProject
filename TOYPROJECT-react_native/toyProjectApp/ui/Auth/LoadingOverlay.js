import { ActivityIndicator, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


function LoadingOverlay({ message }) {
  return (
    <>
    <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
    <ImageBackground
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage} 
        source={{uri : 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>

    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
        </ImageBackground>
        </LinearGradient>
        </>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },  
  rootScreen : {
    flex : 1,
  },

  backgroundImage : {
    opacity : 0.15
  }
});