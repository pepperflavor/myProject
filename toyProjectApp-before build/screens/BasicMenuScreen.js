
import { CATEGORIES } from './../data/dummy-data';

import CategoryTile from '../components/CategoryTile';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';

function BasicMenuScreen({navigation}) {
    function renderBasicMenuItem(itemData) {
        function pressHandler() {
            navigation.navigate('BasicMenuOverview', {
                basicMenuId : itemData.item.id
            });
        }

        return (
            <CategoryTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
                navigation={navigation}
                />
        );
    }

    return (
      <>
        <ImageBackground
          source={{
            uri: "https://cdn.pixabay.com/photo/2017/09/17/16/08/boxer-2758887_960_720.jpg",
          }}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
          style={styles.rootScreen}
        >
          <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => {
              item.id;
            }}
            renderItem={renderBasicMenuItem}
            numColumns={2}
          />
        </ImageBackground>
      </>
    );
}

export default BasicMenuScreen;

const styles = StyleSheet.create({
  rootScreen: {
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    opacity: 0.7,
  },
});