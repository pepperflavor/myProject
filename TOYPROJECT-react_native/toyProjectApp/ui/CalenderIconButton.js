import { Pressable, StyleSheet } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import calendar from '../assets/images/calendar.png'


function CalenderIconButton({icon, color, onPress}){
    return(
        <Pressable onPress={onPress} style={({pressed})=>{ pressed && styles.pressed}}>
            <Ionicons name={icon} size={24} color={color}></Ionicons>
        </Pressable>
    )

}

export default CalenderIconButton;

const styles = StyleSheet.create({
    pressed : {
        opacity : 0.7
    }
})