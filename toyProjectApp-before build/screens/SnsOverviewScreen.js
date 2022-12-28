import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import SnsItem from "../components/SnsItem";
import { useRoute } from "@react-navigation/native";

import {SNSROUTINE} from '../data/dummy-data'



function SnsOverviewScreen({ navigation, route }){

    // const snsId = route.params.snsId;

    
      // sns에 더미 데이터 뿌려주기
      function renderSnsItem(itemData){
        function SnspressHandler(){
            navigation.navigate('SNS', {
              snsId : itemData.item.id,
              snsTitle : itemData.item.title,
              snsNickname : itemData.itemnick,
              snsAmount : itemData.item.amount,
              snsSets : itemData.item.sets,
              snsComment : itemData.item.comment,
              snsDate : itemData.item.date,
            })
        }

        return(
          <SnsItem 
                nickname = {itemData.item.nickname}
                title = {itemData.item.title}
                amount = {itemData.item.amount}
                sets = {itemData.item.sets}
                comment = {itemData.item.comment}
                date = {itemData.item.date}
                onPress = {SnspressHandler}
                navigation={navigation}
          />
        )
    }
  


    return(
      <>
          <ImageBackground
          style={styles.rootScreen}
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/01/11/18/35/blur-1972569_960_720.jpg",
        }}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <FlatList data={SNSROUTINE} keyExtractor={(item) => item.id} renderItem={renderSnsItem}/>
        </ImageBackground>
      </>
    )
}
export default SnsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  rootScreen: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  backgroundImage: {
    opacity: 0.5,
  },
});