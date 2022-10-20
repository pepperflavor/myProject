import { useState } from "react";
import { Pressable, View, StyleSheet, SliderBase } from "react-native";

import SelectList from "react-native-dropdown-select-list";


function Navibar(){
    console.log("네비바");
    console.log(selectedDropbar);
    
    const [selectedDropbar, setSelectedDropbar] = useState("");

    const dropdownMenu = [
      {
        key: "1",
        value: "Health ZZang SNS",
      },
      {
        key: "2",
        value: "MY Routine",
      },
    ];

    return (
      <View style={styles.navContainer}>
        <SelectList
          setSelected={setSelectedDropbar}
          data={dropdownMenu}
          inputStyles={{ fontSize: 20 }}
          dropdownitemStyles={SliderBase}
          value={selectedDropbar}
          searchicon={"none"}
          arrowicon={
            <FontAwesome name="chevron-down" size={12} color={"black"} />
          }
        />
      </View>
    );
}

export default Navibar;

const styles = StyleSheet.create({
    navContainer : {
        width : '100%',
        height : 120,
        flex:1,
        marginTop: 50,
    },
    dropDownItem:{
        fontSize : 12,
        color : 'white',
    }

})