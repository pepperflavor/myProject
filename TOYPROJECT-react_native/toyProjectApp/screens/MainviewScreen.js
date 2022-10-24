import { useEffect } from "react";


import MenuItem from "../components/MenuItem";

function MainviewScreen({ navigation }) {
    
    function renderMenuItem(itemData){
        function pressHandler(){
            navigation.navigate("")
        }
    }
    return(
        <MenuItem/>
    )
}

export default MainviewScreen;