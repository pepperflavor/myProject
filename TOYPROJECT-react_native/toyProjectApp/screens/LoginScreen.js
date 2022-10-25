import React, { useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, ImageBackground, TextInput, Text } from "react-native";
import { Webview } from "react-native-webview";


const REST_API_KEY = "9303a9aad948468c026695d1b8192c10"; // 카카오 디벨로퍼에서 받은 REST_API_KEY키
const REDIRECT_URI = "https://HealthZZang.login";

function LoginScreen() {



      const [email, setEmail] = useState("");
      const [name, setName] = useState("");
      const [password, setPassword] = useState("");

      const [isError, setIsError] = useState(false);
      const [message, setMessage] = useState("");
      const [isLogin, setIsLogin] = useState(true);

      // const onChangeHandler = () => {
      //   setIsLogin(!isLogin);
      //   setMessage("");
      // };

      // const onLoggedIn = (token) => {
      //   fetch(`${API_URL}/private`, {
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   })
      //     .then(async (res) => {
      //       try {
      //         const jsonRes = await res.json();
      //         if (res.status === 200) {
      //           setMessage(jsonRes.message);
      //         }
      //       } catch (err) {
      //         console.log(err);
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // };

      // const onSubmitHandler = () => {
      //   const payload = {
      //     email,
      //     name,
      //     password,
      //   };
      //   fetch(`${API_URL}/${isLogin ? "login" : "signup"}`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(payload),
      //   })
      //     .then(async (res) => {
      //       try {
      //         const jsonRes = await res.json();
      //         if (res.status !== 200) {
      //           setIsError(true);
      //           setMessage(jsonRes.message);
      //         } else {
      //           onLoggedIn(jsonRes.token);
      //           setIsError(false);
      //           setMessage(jsonRes.message);
      //         }
      //       } catch (err) {
      //         console.log(err);
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // };

      // const getMessage = () => {
      //   const status = isError ? `Error: ` : `Success: `;
      //   return status + message;
      // };

      // const getCode = (target: string) => {
      //   const exp = "code=";
      //   const condition = target.indexOf(exp);
      //   if (condition !== -1) {
      //     const requestCode = target.substring(condition + exp.length);
      //     requestToken(requestCode);
      //   }
      // };
//       let jsCode = `
//     document.querySelector('#myContent').style.backgroundColor = 'blue';
// `;

      
    return (
      <View>
        <Webview
          style={{ flex: 1 }}
          injectedJavaScript={INJECTED_JAVASCRIPT}
          javaScriptEnabled
          onMessage={
            jsCode
            //   (event) => {
            //   const data = event.nativeEvent.url;
            //   getCode(data);
            // }
          }
        >
          <ImageBackground
            source={require("../assets/images/background.png")}
            style={styles.image}
          >
            <View style={styles.card}>
              {/* {isLogin ? "Login" : "Signup"} */}
              <Text style={styles.heading}></Text>
              <View style={styles.form}>
                <View style={styles.inputs}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                  ></TextInput>
                  {!isLogin && (
                    <TextInput
                      style={styles.input}
                      placeholder="Name"
                    ></TextInput>
                  )}
                  <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Password"
                  ></TextInput>
                  <Text
                    style={[
                      styles.message,
                      { color: isError ? "red" : "green" },
                    ]}
                  >
                    {message ? getMessage() : null}
                  </Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Done</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonAlt}>
                    <Text style={styles.buttonAltText}></Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </Webview>
      </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: "80%",
    marginTop: "40%",
    borderRadius: 20,
    maxHeight: 380,
    paddingBottom: "30%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "10%",
    marginTop: "5%",
    marginBottom: "30%",
    color: "black",
  },
  form: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: "5%",
  },
  inputs: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10%",
  },
  input: {
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingTop: 10,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    width: "80%",
    backgroundColor: "black",
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonAlt: {
    width: "80%",
    borderWidth: 1,
    height: 40,
    borderRadius: 50,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  buttonAltText: {
    color: "black",
    fontSize: 16,
    fontWeight: "400",
  },
  message: {
    fontSize: 16,
    marginVertical: "5%",
  },
  backgroundImage: {
    marginTop: "30%",
    opacity: 0.15,
  },
});