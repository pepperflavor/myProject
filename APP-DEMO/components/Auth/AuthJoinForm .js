import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Pressable, Modal, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import Button from '../ui/Button';
import Input from './Input';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

 
function AuthJoinForm({ isLogin, onSubmit, credentialsInvalid, onAuthenticate }) {

  const navigation = useNavigation();


  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [signEmail, setSignEmail] = useState();

  // const [credentialsInvalid, setCredentialsInvalid] = useState({
  //   email: false,
  //   password: false,
  //   confirmEmail: false,
  //   confirmPassword: false,
  // });




  let {email} = enteredEmail;
  email = enteredEmail.toString();
  email = email.trim();
  const emailIsValid = email.includes('@');
  console.log(emailIsValid)


  // 여기 enteredEmail값이 안들어가고 undefine뜸
  // 전송버튼 눌렀을때
  function modalHadler (){
    // 여기서 메일발송 요청 보내기
    console.log("aaaaa" + emailIsValid);
    console.log( "ddd" + enteredEmail);
    if(!emailIsValid){
      Alert.alert('잘못된 입력입니다.', '이메일 양식에 맞게 입력해주세요');
     // setSignEmail(!emailIsValid);
    }else{
      setModalVisible(true);
    }
    
  }


// 인증메일 인증 받아서 그게 맞는지 판단함수 추가 필요
  function isValidEmail(){

  } 


    function goto_loginModalHandler() {
        navigation.replace('Login');
    }


  return (
    <View style={styles.container}>
      <View style={styles.mailcontainer} >
          <Text style={styles.label}>
            이메일
        </Text>
        <View style={styles.mailbox}>
          <TextInput style={styles.inputMail} keyboardType='default' defaultValue={enteredEmail} onChangeText={email => setEnteredEmail(email)}/>

{/* 
          </TextInput>
            <Input
              label="Email Address"
              value={enteredEmail}
              keyboardType="email-address"
            
            /> */}

            
                <Pressable onPress={modalHadler} style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                    ? 'rgb(210, 230, 255)'
                    : 'white'
                  },
                  styles.wrapperCustom
                ]}>
                      <Text> 전송 </Text>
                    </Pressable>
                </View>

                <Dialog
                  visible={modalVisible}
                  onTouchOutside={() => {
                    setModalVisible(false)
                    //this.setState({ visible: false });
                  }}
                >
                  <DialogContent>
                    <Text>인증번호가 발송되었습니다.</Text>
                  </DialogContent>
                </Dialog>
          </View>


            <Input
              label="인증번호"
              keyboardType="default"
              value={signEmail}

            />

            <Input
              label="비밀번호"
              keyboardType="default"
              secure
              value={enteredPassword}
            />
            <Input
              label="비밀번호 확인"
              keyboardType="default"
              secure
              value={confirmPassword}
            />

          <Button onPress={() => navigation.push()}>다음</Button>

          <View style={styles.buttons}>
        <FlatButton onPress={goto_loginModalHandler}>
          {!isLogin && '로그인 하러가기'}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthJoinForm;

const styles = StyleSheet.create({
  container:{
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  buttons: {
    marginTop: 60,
    width: 130,
    height: 60,
  },
  inputbox:{
    width: 120,
    height: 40,
  },
  mailcontainer:{
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
  },
  mailbox:{
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputMail:{
    backgroundColor: '#f9beda',
    borderRadius: 4,
    fontSize: 16,
    height: 45,
    width: 200,
    marginRight: 5,
    marginLeft: 10,
  },
  label:{
    color: 'white',
    marginBottom: 10,
    paddingRight: '50%',
  },

  wrapperCustom: {
    borderRadius: 8,
    height: 40,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },


  ment: {
    fontWeight: 'bold',
    color : "white",
    fontSize : 30,
    paddingTop: 50,
  },
});
