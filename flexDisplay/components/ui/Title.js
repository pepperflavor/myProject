import { Text, StyleSheet, Platform } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
    width: 300, // 이렇게 너비를 설정하면 부모 컨테이너의 80%이상 차지하는게 아니라면
    // 300px이 된다

  },
});
