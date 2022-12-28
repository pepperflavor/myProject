import { useContext, useLayoutEffect, useState } from "react";
import { Pressable, View, StyleSheet, Text, ImageBackground } from "react-native";
import LoveButton from "../ui/Lovebutton";

import { FavoritesContext } from "../store/context/favorites-context";
import { SNSROUTINE } from "../data/dummy-data";

function SnsItem({
  id,
  title,
  nickname,
  amount,
  sets,
  comment,
  date,
  onPress,
  navigation,
}) {
  // const favoriteSnsCtx = useContext(FavoritesContext);

  // const snsItemID = {id};

  // const selectedSns = SNSROUTINE.find((item)=> item.id === snsItemID);

  // const snsIsFavorite = favoriteSnsCtx.id.includes(selectedSns)

  const [isFavoritSns, setIsFavoritSns] = useState(false);



console.log(" ITem "+ isFavoritSns);
  // useLayoutEffect(()=>{
  //     navigation.setOptions({
  //         onPress : () =>{
  //             snsItemPressHandler
  //         }
  //     })
  // })

  return (
    <>
  
        <View style={styles.hugebox}>
          <View style={styles.items}>
            <View style={styles.nickcontainer}>
              <View style={styles.nickbox}>
                <Text style={styles.nickfont}>{nickname}</Text>
              </View>
              <View style={styles.titlebox}>
                <Text>{title}</Text>
              </View>
            </View>
            <View style={styles.amountcontainer}>
              <Text style={styles.numberbox}>{amount} / kg</Text>
              <Text style={styles.numberbox}>{sets} / sets</Text>
            </View>
            <View style={styles.innercontainer}>
              <Text style={styles.comment}>{comment}</Text>
              <Text>등록일 : {date}</Text>
            </View>

            <LoveButton
              id={id}
              isFavoritSns={isFavoritSns}
              setIsFavoritSns={setIsFavoritSns}
            />
          </View>
        </View>
    </>
  );
}

export default SnsItem;

const styles = StyleSheet.create({
  hugebox: {
    marginVertical: 14,
  },
  snsContainer: {
    width: 200,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: "white",
  },
  items: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: "#905E96",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    height: 100,
    elevation: 6,
    shadowColor: "#bcbcbc",
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  innercontainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#D58BDD",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 90,
    width : 160,
    display: 'flex',
    flexWrap: 'wrap'

    
  },
  nickcontainer: {
    flexDirection: "column",
  },
  nickbox: {
    backgroundColor: "#FFD372",
    borderRadius: 6,
    marginVertical: 8,
    height: 30,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  titlebox: {
    backgroundColor: "#FF884B",
    borderRadius: 6,
    marginVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    height: 25,
    width: 100,
  },
  nickfont: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amountcontainer: {
    flexDirection: "column",
    backgroundColor: "#FF99D7",
    borderRadius: 6,
    height: 65,
  },
  numberbox: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#F6F6C9",
    borderRadius : 8,
  },
  comment: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign : 'center'
  },
});
