import { Pressable, View, Image, Text, StyleSheet } from "react-native";

function MealItem({ title, imageUrl }) {
  // 터치하면 장바구니에 담겠냐는 알람창 띄우기

  
  return (
    <View>
      <Pressable>
        <View>
          {/* 인터넷상의 이미지를 갖다 쓰려면 가로세로 크기를 지정해줘야한다 로컬에서 갖다쓰면 자체값을 보통 갖다씀 */}
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
    image : {
      width : '100%',
      height : 200,
    },
    title:{
      fontWeight : 'bold',
      textAlign : 'center',
      fontSize : 18,
    }
});