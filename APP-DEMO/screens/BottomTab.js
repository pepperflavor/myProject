import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chatting from '../components/Chat/chatting';
import { StyleSheet } from 'react-native';
import CustomTabBatButton from '../components/Nav/CustomTabBatButton';

const BottomTabs = createBottomTabNavigator();
// 메세지 지갑 (spot맵)  마켓 
function BottomTab({navigation}){
    return(
        <BottomTabs.Navigator 
        screenOptions={() => ({
            tabBarStyle: style.tabBarStyle,
            tabBarActiveTintColor : 'white',
            tabBarIcon: ({})
        })}>
            <BottomTabs.Screen name='Chat' component={Chatting} 
            options={{
                tabBarButton: props => <CustomTabBatButton {...props}/>
            }}/>
            <BottomTabs.Screen name='Market' component={Chatting}
            options={{
                tabBarButton: props => <CustomTabBatButton {...props}/>
            }}/>
            <BottomTabs.Screen name='Wallet' component={Chatting}
            options={{
                tabBarButton: props => <CustomTabBatButton {...props}/>
            }}/>
            <BottomTabs.Screen name='MyPage' component={Chatting}
            options={{
                tabBarButton: props => <CustomTabBatButton {...props}/>
            }}/>
        </BottomTabs.Navigator>
    )

}

export default BottomTab;

const style = StyleSheet.create({
    tabBarStyle:{
        position : 'absolute',
        backgroundColor: 'blue',
        borderTopWidth: 0,
        bottom: 15,
        right:10,
        left : 10,
    }

})