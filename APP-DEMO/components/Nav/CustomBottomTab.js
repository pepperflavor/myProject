import { Pressable, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import IconButton from "../ui/IconButton";

const navigation = useNavigation();

function CustomBottomTab(){

    function navButtonHAndler(){

    }

    return(
        <View style={styles.bottomNavContainer}>
            <Image source={require('../../assets/bottomNav.png')} resizeMode='center'>
                <View style={styles.btnContainer}>
                    <IconButton size={10} color={'black'} />
                    <IconButton size={10} color={'black'} />
                    <IconButton size={10} color={'black'} />
                    <IconButton size={10} color={'black'} />
                </View>
            </Image>
        </View>
    )
}

/*
    백그라운드 이미지 (버튼 4개)
*/
export default CustomBottomTab;

const styles = StyleSheet.create({
    bottomNavContainer:{
        width: '100%',
        height: '100%',
    },
    leftBtn:{

    },
    leftSecondBtn:{},
    middleHomeBtn:{},
    rightFirstBtn:{},
    rightEndBtn:{},
    btnDefaultBox:{
        width: 30,
        height: 30,
    },
    btnContainer:{
        flexDirection: 'column'
    }
})


/*
              <Pressable>
                    <View style={styles.btnDefaultBox}>
                        <Image></Image>
                    </View>
                </Pressable>

                이 각 버튼들 <IconButton> 이걸로 쓰면된다!
*/