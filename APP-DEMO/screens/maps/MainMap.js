// expo map-view 사용

import MapView, {Marker} from "react-native-maps";
import { StyleSheet, View } from 'react-native';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import IconButton from "../../components/ui/IconButton";
import { useNavigation } from '@react-navigation/native';
import { getSpotList } from "../../store/context/spot-list";
import CustomBottomTab from "../../components/Nav/CustomBottomTab";
import { LinearGradient } from 'expo-linear-gradient';

const DUMMY_SPOT = [
    {  
        id: "1",
        latitude: 37.520601, // 지도중앙 결정
        longitude: 127.034964,
        title: '첫번째스팟',
        description: 'yayaya1111'
    },
    {  
        id: "2",
        latitude: 37.520601, // 지도중앙 결정
        longitude: 127.034964,
        title: '두번째스팟',
        description: 'yayaya222'
    },
    {  
        id: "3",
        latitude: 37.520601, // 지도중앙 결정
        longitude: 127.034964,
        title: '세번째스팟',
        description: 'yayaya333'
    },
]




function MainMap(){

    const STANDARD_LOCATION ={
        lat : 37.565703,
        lng : 126.978386
    }

    // initialRegion 의 props는 특정객체, 처음로딩될 좌표설정
    const region ={
        latitude: 37.520601, // 지도중앙 결정
        longitude: 127.034964, // 지도중앙 결정
        latitudeDelta: 0.0922, // 중앙+ 주변얼마나 보일지
        longitudeDelta: 0.0421,
        }
      

    const [selectedLocation, setSelectedLocation] = useState();
    const navigation = useNavigation();

     // 스팟 값 뽑아오기
    // 아이디 위도 경도 설명
    // getSpotList()
   


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
        <View>
          <View style={styles.topGradationBox}>
                <LinearGradient
                    style={styles.rectangleLinearGradient}
                    locations={[0.33, 0.65, 0.97]}
                    colors={[
                    "#fff",
                    "rgba(255, 255, 255, 0.87)",
                    "rgba(255, 255, 255, 0)",
                    ]}
                />
            </View>

            <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
            {selectedLocation&& <Marker title="Spot위치" coordinate={{ latitude : selectedLocation.lat, longitude : selectedLocation.lng}}></Marker>}
            </MapView>
            <CustomBottomTab style={styles.bottomBox}/>
        </View>
    )
}

export default MainMap;

const styles = StyleSheet.create({
    map : {
        flex : 3
    },
    topGradationBox: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 185,
  },
  bottomBox:{
    flex:1,
  }

})

// 미리보기 지도에 안뜸
// map 띄웠다가 다시 돌아갔다가 맵띄우면 사라져있음
// 앨범에서도 사진 선택가능하게 추가