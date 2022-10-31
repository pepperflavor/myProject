import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen() {
  return (
    <>
    <View style={styles.rootScreen}>
      <Pressable style={styles.rootScreen} >
      <ImageBackground style={styles.rootScreen} resizeMode="cover" imageStyle={styles.backgroundImage}  source={{uri : 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.context}>오늘도 득근하세요!</Text>
        </View>
      </ImageBackground>
      </Pressable>
    </View>
    </>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  title: {
    fontSize: 60,
    fontWeight: '900',
    marginBottom: 8,
  },
  context : {
    fontSize : 30,
    fontWeight: 'bold',
  },
  backgroundImage : {
    opacity : 0.5
  },
  rootScreen : {
    width : '100%',
    height : '100%',
  },
  textContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign : 'center',
    paddingTop: '60%',
  }
});
