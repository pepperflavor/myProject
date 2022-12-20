// expo map-view 사용

import MapView, {Marker} from "react-native-maps";
import { StyleSheet } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import IconButton from "../../components/ui/IconButton";
import { useNavigation } from '@react-navigation/native';

function SpotMap(){
    const [selectedLocation, setSelectedLocation] = useState()

    const navigation = useNavigation();
    // initialRegion 의 props는 특정객체, 처음로딩될 좌표설정
    const region ={
      latitude: 37.520601, // 지도중앙 결정
      longitude: 127.034964, // 지도중앙 결정
      latitudeDelta: 0.0922, // 중앙+ 주변얼마나 보일지
      longitudeDelta: 0.0421,
    }

    function selectLocationHandler(event){
        console.log(event);
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;
        setSelectedLocation({ lat : lat, lng:lng });
    }

    const savePikedLocationHandler = () => {
        if(!selectedLocation){
            Alert.alert('선택된 Spot이 없습니다', '지도를 터치해서 Spot을 지정하세요');
            return;
        }

        // 좌표 값 addSpot으로 옮겨주기
        navigation.navigate('AddSpot', { 
            pickedLat : selectedLocation.lat, 
            pickedLng : selectedLocation.lng  
        });
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ({tintColor}) => <IconButton icon="save" size={24} onPress={savePikedLocationHandler}></IconButton>
        })
    },[navigation ,savePikedLocationHandler])


    return(
        <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
          {selectedLocation&& <Marker title="Spot위치" coordinate={{ latitude : selectedLocation.lat, longitude : selectedLocation.lng}}></Marker>}
        </MapView>
    )
}

export default SpotMap;

const styles = StyleSheet.create({
    map : {
        flex : 1
    }
})

// 미리보기 지도에 안뜸
// map 띄웠다가 다시 돌아갔다가 맵띄우면 사라져있음
// 앨범에서도 사진 선택가능하게 추가