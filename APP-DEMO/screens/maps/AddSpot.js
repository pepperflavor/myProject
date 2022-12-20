// 스팟 등록신청
import { Text, View } from 'react-native';
import SpotForm from './../../components/Spots/SpotForm';

function AddSpot({navigation}){
    function createSpotHandler(spotData){
        // 여기에서 DB에있는 spot 가져와야함 비동기로 해주기
        /*
            async function createSpotHandler(spotData){
                await insertFn(spotData)
        */
        // DB 없으니 일단 등록하는대로 AllSpots에 띄워줌
        navigation.navigate('AllSpots',{
            spot: spotData
        });
    }

    return(
            <SpotForm createSpotHandler={createSpotHandler}/>
    )

}

export default AddSpot;