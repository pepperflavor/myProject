// 위치 앱으로 뽑은거

// import * as React from "react";
// import {
//   Image,
//   StyleSheet,
//   Pressable,
//   View,
//   Text,
//   StatusBar,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";

// const TripotMainFriend = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.tripotMainFriend}>
//       <Image
//         style={styles.rectangleIcon}
//         resizeMode="cover"
//         source={require("../assets/rectangle.png")}
//       />
//       <View style={styles.navigationmenuHome}>
//         <View style={styles.groupView}>
//           <Pressable
//             style={styles.background}
//             onPress={() => navigation.navigate("TripotMainSpot")}
//           >
//             <View style={styles.sendCircle}>
//               <Pressable
//                 style={styles.ellipse}
//                 onPress={() => navigation.navigate("TripotMainSpot")}
//               >
//                 <Image
//                   style={styles.icon}
//                   resizeMode="cover"
//                   source={require("../assets/ellipse.png")}
//                 />
//               </Pressable>
//             </View>
//           </Pressable>
//           <Text style={styles.friends}>Friends</Text>
//         </View>
//         <Image
//           style={styles.subtract1Icon}
//           resizeMode="cover"
//           source={require("../assets/subtract-1.png")}
//         />
//       </View>
//       <View style={styles.homeIndicator} />
//       <Image
//         style={styles.friendLocationIcon}
//         resizeMode="cover"
//         source={require("../assets/friendlocation.png")}
//       />
//       <View style={styles.topGradationBox}>
//         <LinearGradient
//           style={styles.rectangleLinearGradient}
//           locations={[0.33, 0.65, 0.97]}
//           colors={[
//             "#fff",
//             "rgba(255, 255, 255, 0.87)",
//             "rgba(255, 255, 255, 0)",
//           ]}
//         />
//       </View>
//       <Image
//         style={styles.topLogoIcon}
//         resizeMode="cover"
//         source={require("../assets/toplogo.png")}
//       />
//       <Image
//         style={styles.topLocationIcon}
//         resizeMode="cover"
//         source={require("../assets/toplocation.png")}
//       />
//       <Image
//         style={styles.topSettingIcon}
//         resizeMode="cover"
//         source={require("../assets/topsetting.png")}
//       />
//       <StatusBar barStyle="default" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   rectangleIcon: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: 844,
//     height: 844,
//   },
//   icon: {
//     marginLeft: -40,
//     width: "100%",
//     height: "100%",
//   },
//   ellipse: {
//     position: "absolute",
//     left: "50%",
//     bottom: -16,
//     width: 80,
//     height: 80,
//   },
//   sendCircle: {
//     position: "absolute",
//     marginLeft: -28,
//     bottom: 56,
//     left: "50%",
//     width: 56,
//     height: 56,
//   },
//   background: {
//     position: "absolute",
//     marginLeft: -28,
//     bottom: -56,
//     left: "50%",
//     width: 56,
//     height: 56,
//   },
//   friends: {
//     position: "absolute",
//     top: 20,
//     left: 5,
//     fontSize: 13,
//     lineHeight: 20,
//     fontWeight: "700",
//     fontFamily: "NEXON Lv1 Gothic Low OTF",
//     color: "#fff",
//     textAlign: "center",
//   },
//   groupView: {
//     position: "absolute",
//     marginLeft: -28.5,
//     bottom: 56,
//     left: "50%",
//     width: 56,
//     height: 56,
//   },
//   subtract1Icon: {
//     position: "absolute",
//     top: 10,
//     left: 0,
//     width: 390,
//     height: 102,
//   },
//   navigationmenuHome: {
//     position: "absolute",
//     right: -1,
//     bottom: 0,
//     left: 0,
//     height: 112,
//   },
//   homeIndicator: {
//     position: "absolute",
//     top: 830,
//     left: 128,
//     borderRadius: 100,
//     backgroundColor: "#000",
//     width: 134,
//     height: 5,
//   },
//   friendLocationIcon: {
//     position: "absolute",
//     top: 304,
//     left: 170,
//     width: 74,
//     height: 94,
//   },
//   rectangleLinearGradient: {
//     position: "absolute",
//     height: "75.68%",
//     width: "100%",
//     top: "0%",
//     right: "0%",
//     bottom: "24.32%",
//     left: "0%",
//     backgroundColor: "transparent",
//   },
//   topGradationBox: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: 390,
//     height: 185,
//   },
//   topLogoIcon: {
//     position: "absolute",
//     height: "3.76%",
//     width: "26.92%",
//     top: "5.57%",
//     right: "36.67%",
//     bottom: "90.68%",
//     left: "36.41%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     maxHeight: "100%",
//   },
//   topLocationIcon: {
//     position: "absolute",
//     height: "3.67%",
//     width: "7.95%",
//     top: "5.33%",
//     right: "3.85%",
//     bottom: "91%",
//     left: "88.21%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     maxHeight: "100%",
//   },
//   topSettingIcon: {
//     position: "absolute",
//     height: "3.79%",
//     width: "8.21%",
//     top: "5.33%",
//     right: "88.46%",
//     bottom: "90.88%",
//     left: "3.33%",
//     maxWidth: "100%",
//     overflow: "hidden",
//     maxHeight: "100%",
//   },
//   tripotMainFriend: {
//     position: "relative",
//     backgroundColor: "#fff",
//     flex: 1,
//     width: "100%",
//     height: 844,
//     overflow: "hidden",
//   },
// });

// export default TripotMainFriend;
