import { View } from "react-native";

const Alert = (props) => {
    
    const alertContent = props.alertContent
    const alertText = props.alertText

  Alert.alert(
    alertContent, 
    alertText, 
    [{ text: "확인", onPress: () => {} }], {
    onDismiss: () => {},
  });

  return(
    <View>

    </View>
  )
};

export default Alert;
