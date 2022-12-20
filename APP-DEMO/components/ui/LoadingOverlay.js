import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      {/* 모든 플랫폼 적용 가능 */}
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor : 'black',
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
    color: 'white',
  },
});
