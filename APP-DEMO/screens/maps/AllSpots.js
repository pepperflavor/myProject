import SpotList from "../../components/Spots/SpotList";
import { useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";
import { useState } from 'react';


function AllSpots({route}){

    const [loadedSpots, setLoadedSpots] = useState([])

    // 여기들어올때만 랜더링하게
    const isFocused = useIsFocused();
    
    useEffect(() => {
        if(isFocused && route.params){
            setLoadedSpots(preSpots => [...preSpots, route.params.spot]);
        }
    },[isFocused, route])


    return(
        <SpotList spots={loadedSpots}/>
    )
}

export default AllSpots;