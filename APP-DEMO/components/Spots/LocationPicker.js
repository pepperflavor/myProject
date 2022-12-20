// 사용자 위치 선택(내 위치, 사용자가 지정하는 위치)

import { Feather, FontAwesome5 } from "@expo/vector-icons/build/Icons";
import { Image, Text, View } from "react-native";

import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import {
    getCurrentPositionAsync,
    useForegroundPermissions,
    PermissionStatus,
  } from 'expo-location';
  
import { Alert } from 'react-native';
import { useState } from 'react';
import { getAddress, getMapPreview } from './../../util/location';
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import { useEffect } from 'react';
import MapView, {Marker} from "react-native-maps";

// useIsFocused : navigate로 다른컴포넌트 -> 되돌아왔을때 
// 해당 화면의 자식, 중첩된 컴포넌트들이 생성되지 않는 문제점 보완

function LocationPicker({userPickLocation}){


    // 지도에서 고른 좌표값
    const [pickedLocation, setPickedLocation] = useState();
    // 내 위치인지, 지도에서 고른건지
    const [isMyLocation, setIsMyLocation] = useState();
    const isFocused = useIsFocused();

    const navigation = useNavigation();
    const route = useRoute();

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();


    // 
    useEffect(()=>{
        if(isFocused && route.params){
            // SpotMap에서 spot 선택했을때만 좌표값 설정됨
            const mapPickedLocation = route.params && {
                lat : route.params.pickedLat, 
                lng : route.params.pickedLng,
            };
            setPickedLocation(mapPickedLocation)
        }
     },[route, isFocused])


     // userPickLocation도 호출되었으니 의존성에 추가
     // 콜백지옥방지를 위해서 userPickLocation정의부분 useCallback사용
     useEffect(()=>{
        async function getDetailLocation(){
            if(pickedLocation){
                const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
                // 주소객체값(위도,경도) 도로명주소 같이 보냄
                userPickLocation({...pickedLocation, address: address});
            }
        }
        
        getDetailLocation();
     },[pickedLocation, userPickLocation])


    async function verifyPermissions() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
          const permissionResponse = await requestPermission();
    
          return permissionResponse.granted;
        }
    
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
          Alert.alert(
            '권한이 필요합니다!',
            'Sopt을 등록하려면 사용자 위치정보 접근권한이 필요합니다.'
          );
          
          return false;
        }
        return true;
      }

    // +) 백그라운드에서도 위치 추적하려면 추가설정 해야함
    async function getLocationHandler() {
        const hasPermission = await verifyPermissions();
    
        if (!hasPermission) {
          return;
        }
    
      const location = await getCurrentPositionAsync();
      console.log( "@@@@ "+ location);
      console.log( "@@@@ 2 :" + location.coords.latitude);
      console.log( "@@@@ 3 : " + location.coords.longitude);

        setPickedLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
        // 위도 경도는 잘뽑힘  
      }


    function pickOnMapHandler(){
        navigation.navigate('SpotMap');
    }

    let locationPreview = <Text>No Location yet.</Text>

    // 좌표는 잘 뽑히는데 내 위치가 안나옴
    // 아마 이 값이 안들어와서 그런듯
    if (pickedLocation) {
      //console.log("@@@@@@ " + pickedLocation);
      let region = {
        latitude: pickedLocation.lat, // 지도중앙 결정
        longitude: pickedLocation.lng, // 지도중앙 결정
        latitudeDelta: 0.04864195044303443, // 중앙+ 주변얼마나 보일지
        longitudeDelta: 0.040142817690068,
      }

        locationPreview = (
          <>
          {/* <Image
            style={styles.mapImage}
            source={{
              uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
            }}
            /> */}
            {/* 	마커 아이콘으로 사용할 사용자 지정 이미지입니다. 로컬 이미지 리소스만 사용할 수 있습니다. */}
          <MapView style={styles.mapImage} initialRegion={region}>
            {pickedLocation && 
            <Marker title="Spot위치" coordinate={{ latitude : pickedLocation.lat, longitude : pickedLocation.lng}}>
                <View style={styles.marker}>
                  <Image resizeMode="center" source={require('../../assets/Marker.png')}/>
                </View>
              </Marker>}
          </MapView>
            </>
        );
      }

    return(
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={getLocationHandler} style={styles.buttons}>
                        <Feather name="map-pin" size={24} color="black" />
                        <Text>내 위치</Text>
                    </Pressable>
                    <Pressable onPress={pickOnMapHandler} style={styles.buttons}>
                    <FontAwesome5 name="map-marked-alt" size={24} color="black" />
                        <Text>지도에서 찾기</Text>
                    </Pressable>
                </View>
        </View>
    )

}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview:{
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 4,
        overflow: 'hidden'
    },
    buttons:{  
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'yellow',
        borderStyle: 'solid',
        width: 100,
    },
    mapImage:{
        width: '100%',
        height: 200,
    },
    buttonContainer:{
        justifyContent: 'space-evenly',
        alignItems:'center',
        flexDirection:'row',
        marginVertical: 7,
        marginHorizontal: 5,
      },
      marker:{
        width: 100,
        height: 100,
      }

})