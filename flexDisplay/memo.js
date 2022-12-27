/*
    1 디바이스 별로 다른 사이즈의 화면에 따라 UI 화면 조절하기
        내장 함수
        < Dimensions AIP >

        화면 방향에 관한 어떤 정보를 얻을 수 있나요?
    화면의 높이(height)와 너비(width)에 따라 레이아웃을 변경하거나 화
    면의 방향을 추측할 수 있으나(width > height이면 가로 방향), 
    화면 방향에 관한 직접적인 정보는 제공하지 않습니다.
        <option>
        'screen' : 상태표시줄을 포함한 화면의 너비
        'window' : 상태표시줄을 제외한 실제 UI가 시작되는 화면 너비
        
        사용법
        const deviceWidth = Dimensions.get('window').width;
        
        선언한다음 스타일에 설정
        ex) width : deviceWidth < 380 ? 150 : 300 // 디바이스의 너비가 380보다 작은지 큰지 에
        따라 설정
        +) maxWidth : "80%" 이렇게 크기 설정을 할 수 도 있긴함 

        2. 디바이스 가로세로 모드 적용하기

            app.json 의 다음 설정 변경하기

            "orientation": "default" // 사용자가 사용하는 방향으로 화면 전환
            "orientation": "portrait" // 앱 세로 화면회전 고정
            "orientation": "landscape" // 앱 가로 화면회전 고정

            * 안드로이드 화면이 회전이 안되면 위의 화면을 내려서 AUTO-rotate 설정 꺼주기
            블로그 폴더 22.12.27일 (1.png 참고)

            그리고 앱을 재시작해야한다

            ***** 하지만 이렇게만 설정하면 키보드를 사용하려고 할시 화면을 덮어버려서
            어플을 사용할 수 없기때문에
            추가 설정이 필요하다.

            방법 1. 
            Dimensions AIP 사용하기

            가로모드에서 최대 높이를 보고 바깥쪽 여백이 차지할 수 있는 높이를 계산해 볼 수 있다.

            const deviceHeight = Dimensions.get('window').height;

            디바이스별 높이값을 가져오고

            marginTop : deviceHeight < 400 ? 30 : 100 이런식으로 여백을 짐작해서 화면 조정가능

            하지만 사용자가 사용도중에 방향을 바꾼다면?
            리액트의 컴포넌트는 리랜더링되지만 style은 리랜더링 되지 않는다.
            그렇기 때문에
            기기의 방향이나 크기가 변경될때 반응해야하는 코드는 모두 컴포넌트 함수로 가야한다.
            StartGameScreen.js 참고

            이렇게 함수를 사용해서 실시간으로 화면의 넓이와 높이를 받아온다.
            const { width, height } = useWindowDimensions();

            그리고 **** 키보드 설정하기
            KeyboardAvoidingView 란?
            jsx 코드에서 다른 콘텐츠 또는 입력란을 포함하는 다른 콘텐츠를 감쌀 수 있는 컴포넌트이다.
            컴포넌트를 감싸면 키보드가 열릴때마다 다른 요소들이 화면위로 올라가 키보드가 열려도 엑세스할 수 있다

            import { KeyboardAvoidingView } from react-native;

            임포트 한다음

            return(
                <KeyboardAvoidingView>
                    ...
                </KeyboardAvoidingView>
            )

            이렇게 감싸준다. 저장하면 화면이 깨진다....;;;(2.png 참고)
            더이상 최대한의 공간을 확보할 수 없기 때문에 깨진다(아마 부모컨테이너 크기에 영향을 받아서 그런듯...?)
            그래서 KeyboardAvoidingView 컴포넌트에 스타일을 추가해준다
                const styles = Style.create({
                    screen:{
                          flex:1
                      },
                })

                그 다음
        KeyboardAvoidingView 컴포넌트는 style의 종류

            height : 높이
            padding : 안쪽 여백
            behavior :position 위치를 값으로 가지는 동작

           ///////////////////////////////////////////////////////////////// 
           return(
               <KeyboardAvoidingView style={styles.screen} behavior="position">
               ...
               </KeyboardAvoidingView>
               )

            ///////////////////////////////////////////////////////////////// 

            이렇게 설정해주면 화면이 또 깨진다(2.png)

             behavior="position 이 설정의 역할은 화면을 위로 올려주는 것이기 때문이다
             그래도 보면 키보드 작동은 잘된다ㅎㅎ(3.png)

             이제 마지막으로 키보드를 사용하면서 화면도 보이도록 설정해줄 차례이다

             바로 KeyboardAvoidingView 를
             ScrollView 로 감싸주는 것이다. 그럼 화면도 키보드도 잘보인다(4,5.png 참고)

             그리고 마지막으로 style 추가 flex: 1
             
             KeyboardAvoidingView의 부수적인 효과로 키보드 바깥쪽을 탭하면 키보드가 닫힌다


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            가로화면 추가 최적화

            가로로 화면이 변경됐을때 이미지 크기도 변경되어야 한다. GameoverScreen 참조

            useWindowDimensions() 훅을 사용

                        
            // 가로 화면 조정 설정
            const {width, height} = useWindowDimensions();

            let imageSize = 300;
            if(width < 380){
                imageSize = 150;
            }

            if(height < 400){
                imageSize = 80;
            }

            const imageStyle ={
                width : imageSize,
                height : imageSize,
                borderRadius : imageSize / 2
            }
            
            동적으로 크기를 지정해준다음
            만약 미리 설정해둔 옵션과 병합해야 한다면 배열로 style을 지정해준다


///////////////////////////////////////////////////////////////////////////////////////////

            android / ios 각각 다른 화면이 보이게 해줘야할 때

            예를들어 

            첫 시작화면에서(6.png 참고)
            ios에서만 흰 테두리를 없애고 싶을 때 

            import { Platform } from 'react-native';
            현재 실행중인 플랫폼을 감지, 운영체제는 바뀌지 않기 때문에 동적 리스너는 필요없다

            const styles = Style.create({
                borderWidth: Platform.OS === 'android' ? 2 : 0,
            })

            또는

            const styles = Style.create({
                borderWidth: Platform.select({ios : 0, android: 2 }),
            })

            이렇게 사용해도 된다.

            또는

            플랫폼 별로 파일을 따로 관리해도된다.

            Title.js를 android 전용 설정을 하려면
            복사해서 Title.android.js 로 이름을 설정한 다음

            해당 컴포넌트를 사용하는 곳에서 import 하면된다.
            *** 주의
            import 할때 확장자명을 확인하고 설정해줘야한다.

            ex) import Title from '../파일 디렉토리 경로/Title'; 이렇게!!! 
            파일명에 확장자 .ios .android 가 붙어있으면 다른 플랫폼에서는 보이지 않는다

            

*/
