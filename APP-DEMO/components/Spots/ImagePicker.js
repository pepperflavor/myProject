import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  requestMediaLibraryPermissionsAsync,
  useMediaLibraryPermissions,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from 'expo-image-picker';
import { useState } from 'react';


function ImagePicker({userPickImage}) {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
  const [albumPermissionInfomation, requestAlbumPermission] = useMediaLibraryPermissions();

    // 카메라 접근 권한요청
  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        '권한이 필요합니다!',
        'Spot을 등록하려면 카메라 접근권한이 필요합니다..'
      );
      return false;
    }
    return true;
  }


  // 앨범 접근권한 요청
async function albumVerifyPermissions(){
  if(albumPermissionInfomation.status === PermissionStatus.UNDETERMINED){
    const permissionResponse = await requestAlbumPermission();

    return permissionResponse.granted;
  }
  if(albumPermissionInfomation.status === PermissionStatus.DENIED){
    Alert.alert('권한이 필요합니다!', 'spot을 등록하려면 사진 접근권한이 필요합니다.');
    return false;
  }
  return true;
}

// 카메라로 사진 이미지 사용관련
  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true, // 사진자르기 허용
      aspect: [16, 9], // 사진품질설정
      quality: 0.5,
    });

    setPickedImage(image.uri);
    userPickImage(image.uri);
  }


    // 앨범 이미지 사용 관련
  async function albumImageHandler(){
    const hasPermission = await albumVerifyPermissions();

    if(!hasPermission){
      return;
    }

    const image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images, // 사진만 허용
      allowsEditing: true,
      aspect: [16, 9], // 사진 비율 설정
      quality: 1, // 용량
    });

    setPickedImage(image.uri);
    userPickImage(image.uri);
  }




  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <View style={styles.buttonContainer}>
        <Button title="Camera" onPress={takeImageHandler} />
        <Button title="앨범에서 가져오기" onPress={albumImageHandler} />
      </View>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer:{
    justifyContent: 'space-evenly',
    alignItems:'center',
    flexDirection:'row',
    marginVertical: 7,
    marginHorizontal: 5,
  }
});