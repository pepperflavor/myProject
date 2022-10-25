import React from "react";
import { WebView } from 'react-native-webview';

const WebViewScreen = ({}) =>{

  // 웹뷰에서 데이터를 받을 때 필요한 함수
  const handleOnMessage = (e) => {
    console.log(e.nativeEvent.data);
  };

  const sendMessage = () =>{
    const sendData = Json.stringify({
        type : 'cend',
        id : 1,
        name : 'testName',
        content : 'test content',
        file : null,
    })

    webViewRef.current.postMessage(sendData);
  }

  return (
    <View>
      <WebView
          onMessage={handleOnMessage}
          source={"http://localhost:3000"}
      />

      <TouchableOpacity onPress={sendMessage}>
          <Text>웹뷰로 데이터 전송</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WebViewScreen;


