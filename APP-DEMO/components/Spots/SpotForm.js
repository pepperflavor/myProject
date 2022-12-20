// 스팟 등록할 때 입력사항들

import { View, Text, TextInput, ScrollView } from "react-native";
import { useCallback, useState } from 'react';
import ImagePicker from './ImagePicker';
import { StyleSheet } from 'react-native';
import LocationPicker from './LocationPicker';
import Button from './../ui/Button';
import { Spot } from '../../models/spot';



// 스팟 등록할 때
function SpotForm({createSpotHandler}){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [pickedImage, setPickedImage] = useState();
    const [pickedLocation, setPickedLocation] = useState();
    const [enteredDescription,  setEnteredDescription] = useState();

    function changeTitleHandler(enteredText){
        setEnteredTitle(enteredText)
    }

    function pickedImageHandler(imageURL){
        setPickedImage(imageURL);
    }

    function describtionHandler(enteredDescription){
        setEnteredDescription(enteredDescription);
    }

    const pickedLocationHandler = useCallback((location) => {
        setPickedLocation(location);
    },[]);


    function savePlaceHandler(){
        console.log(enteredTitle);
        console.log(pickedImage);
        console.log(pickedLocation); // 정상적으로 다 들어옴

        //constructor(title, imgURL, address, location, description) 정의한대로 데이터 모으기
        const spotData = new Spot(enteredTitle, pickedImage, pickedLocation, enteredDescription);
        // addSpot.js에 있음
        createSpotHandler(spotData);
    }

    return(
        <ScrollView >
            <View style={styles.form}>
            <View>
                <Text style={styles.label}>Spot 명</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} value={enteredTitle} />
            </View>
            <ImagePicker userPickImage={pickedImageHandler}/>
            <LocationPicker userPickLocation={pickedLocationHandler}/>
            <Text style={styles.label}>Spot 설명</Text>
            <TextInput style={styles.input} onChangeText={describtionHandler} value={enteredDescription}></TextInput>
            <Button onPress={savePlaceHandler}>Spot 등록</Button>
            </View>
        </ScrollView>
    )
}

export default SpotForm;


const styles = StyleSheet.create({
    form:{
        flex: 1,
        padding:24,
    },
    label:{
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#ffff'
    },
    input:{
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: 'blue',
        borderBottomWidth:2,
        backgroundColor: 'green',
    }

})