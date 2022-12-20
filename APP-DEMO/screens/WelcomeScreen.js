import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Pressable>
        <ImageBackground style={styles.backgroundImage} source={{uri : 'https://phoneky.co.uk/thumbs/screensavers/down/nature/earth_z48f64yy.gif'}}> 
          <View style={styles.textContainer}>
            <Text style={styles.title}>어서오세요!</Text>
            <Text style={styles.title}>모험을 다시 떠나볼까요?</Text>
            <Text>You authenticated successfully!</Text>
          </View>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  textContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign : 'center',
    paddingTop: '60%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  backgroundImage : {
    opacity : 0.5
  },
  
});
