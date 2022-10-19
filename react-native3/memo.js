/*
    <FlatList> : FlatList를 사용하려면 두 가지 prop를 꼭 알아야 하는데 data와   
        renderItem이다.
        data는 만들고자 하는 리스트의 soucre를 담는 prop이다.
        renderItem은 data로 받은 소스들 그 각각의 item들을 render시켜주는 콜백함수이다. 
            => renderItem 함수를 인자로 넣어줘야함
        keyExtractor 는 ReactJS map함수에서 key={idex} 와 해줬듯이 각각의 item에 고유의 키를 주는 것이라 생각하면 된다.
        ex) keyExtractor={(item, index) => index.toString()}
*/ 

/*              react-Navigation
    react-native 에서 사용할 때 통합하기 아~~`주 용이하다. 컴포넌트 기반의 라이브러리임

    설치명령어
    ====================================================
        npm install @react-navigation/native
    ====================================================

    만약  EXPO 환경이라면
    ========================================================
    1.    expo install react-native-screens react-native-safe-area-context

    2. expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    ========================================================

     navigate-stack 설치 명령어 : npm install- 이라고 해도되지만
     expo install - 이렇게 하면 이과정에서 npm도 알아서 설치된다
    ======================================================
      1.   expo install @react-navigation/native-stack
       2.  npm install @react-navigation/stack
    ======================================================



    사용방법 * 전부다 import는 해야함
    이런식으로 Navigator 가 관리할 페이지들을<Stack.Screen/> 이렇게 등록해줘야함
    -------------------------------------------------------
    export default function App() {
        return (
            <>
                <StatusBar style='light'/>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
                        </Stack.Navigator>
                    <CategoriesScreen />
                </NavigationContainer>
            </>
            );
        }
    ----------------------------------------------------------

    <Stack.Screen/>
        +) name : 고유한 식별자로 화면간 이동할 때 중요한 역할을 해줌
          component :  어떤 컴포넌트로 이동 시켜줄지 포인터 역할을 해줌 * import 해둬야함
*/

/* 
        <Stack.Screen/> 으로 등록해준 컴포넌트들만 
        이동관련된 정보를 담은 {navigation}객체를 프로퍼티로 받을 수 있다.

        만약 다른데서 받고 싶다면
        1. 해당 컴포넌트 안에 함수를 정의하면서 {navigation}에 접근하던가

        2. import { useNavigation } from "@react-navigation/native";
            const navigation = useNavigation();
            이 훅을 사용해 navigation 객체를 받아서 쓸 수 있다.
        
        

*/